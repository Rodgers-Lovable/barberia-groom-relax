import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Wand2, Download } from "lucide-react";

const API_ENDPOINT = "wss://ws-api.runware.ai/v1";

interface GenerateImageParams {
  positivePrompt: string;
  model?: string;
  width?: number;
  height?: number;
  numberResults?: number;
  outputFormat?: string;
  CFGScale?: number;
  scheduler?: string;
  strength?: number;
  seed?: number | null;
}

interface GeneratedImage {
  imageURL: string;
  positivePrompt: string;
  seed: number;
  NSFWContent: boolean;
}

class RunwareService {
  private ws: WebSocket | null = null;
  private apiKey: string | null = null;
  private connectionSessionUUID: string | null = null;
  private messageCallbacks: Map<string, (data: any) => void> = new Map();
  private isAuthenticated: boolean = false;
  private connectionPromise: Promise<void> | null = null;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.connectionPromise = this.connect();
  }

  private connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(API_ENDPOINT);
      
      this.ws.onopen = () => {
        console.log("WebSocket connected");
        this.authenticate().then(resolve).catch(reject);
      };

      this.ws.onmessage = (event) => {
        console.log("WebSocket message received:", event.data);
        const response = JSON.parse(event.data);
        
        if (response.error || response.errors) {
          console.error("WebSocket error response:", response);
          const errorMessage = response.errorMessage || response.errors?.[0]?.message || "An error occurred";
          toast.error(errorMessage);
          return;
        }

        if (response.data) {
          response.data.forEach((item: any) => {
            if (item.taskType === "authentication") {
              console.log("Authentication successful, session UUID:", item.connectionSessionUUID);
              this.connectionSessionUUID = item.connectionSessionUUID;
              this.isAuthenticated = true;
            } else {
              const callback = this.messageCallbacks.get(item.taskUUID);
              if (callback) {
                callback(item);
                this.messageCallbacks.delete(item.taskUUID);
              }
            }
          });
        }
      };

      this.ws.onerror = (error) => {
        console.error("WebSocket error:", error);
        toast.error("Connection error. Please try again.");
        reject(error);
      };

      this.ws.onclose = () => {
        console.log("WebSocket closed, attempting to reconnect...");
        this.isAuthenticated = false;
        setTimeout(() => {
          this.connectionPromise = this.connect();
        }, 1000);
      };
    });
  }

  private authenticate(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
        reject(new Error("WebSocket not ready for authentication"));
        return;
      }
      
      const authMessage = [{
        taskType: "authentication",
        apiKey: this.apiKey,
        ...(this.connectionSessionUUID && { connectionSessionUUID: this.connectionSessionUUID }),
      }];
      
      console.log("Sending authentication message");
      
      const authCallback = (event: MessageEvent) => {
        const response = JSON.parse(event.data);
        if (response.data?.[0]?.taskType === "authentication") {
          this.ws?.removeEventListener("message", authCallback);
          resolve();
        }
      };
      
      this.ws.addEventListener("message", authCallback);
      this.ws.send(JSON.stringify(authMessage));
    });
  }

  async generateImage(params: GenerateImageParams): Promise<GeneratedImage> {
    await this.connectionPromise;

    if (!this.ws || this.ws.readyState !== WebSocket.OPEN || !this.isAuthenticated) {
      this.connectionPromise = this.connect();
      await this.connectionPromise;
    }

    const taskUUID = crypto.randomUUID();
    
    return new Promise((resolve, reject) => {
      const message = [{
        taskType: "imageInference",
        taskUUID,
        model: params.model || "runware:100@1",
        width: params.width || 1024,
        height: params.height || 1024,
        numberResults: params.numberResults || 1,
        outputFormat: params.outputFormat || "WEBP",
        steps: 4,
        CFGScale: params.CFGScale || 1,
        scheduler: params.scheduler || "FlowMatchEulerDiscreteScheduler",
        strength: params.strength || 0.8,
        positivePrompt: params.positivePrompt,
      }];

      if (!params.seed) {
        delete (message[0] as any).seed;
      }

      console.log("Sending image generation message:", message);

      this.messageCallbacks.set(taskUUID, (data) => {
        if (data.error) {
          reject(new Error(data.errorMessage));
        } else {
          resolve(data);
        }
      });

      this.ws?.send(JSON.stringify(message));
    });
  }
}

export const ImageGenerator = () => {
  const [apiKey, setApiKey] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<{ [key: string]: string }>({});

  const imagePrompts = {
    homepage: "Modern luxury barbershop interior in Nairobi with warm ambient lighting, leather chairs, vintage mirrors, and professional barber tools, ultra high resolution, cinematic lighting",
    about: "Professional African barber in action cutting hair with precision in a modern barbershop, focused expression, premium grooming environment, ultra high resolution",
    services: "Collection of premium barbershop tools and spa equipment arranged aesthetically, clippers, razors, massage oils, hot towels, luxury grooming products, ultra high resolution",
    barbershop: "Master barber performing a precise fade haircut on a client in a luxury barbershop with dramatic lighting, professional craftsmanship, ultra high resolution",
    massage: "Serene spa massage therapy room with warm ambient lighting, massage table, essential oils, candles, peaceful atmosphere, ultra high resolution",
    packages: "Luxury barbershop and spa combination setting showing both barber chair and massage table in elegant interior design, ultra high resolution",
    memberships: "VIP barbershop experience with client receiving premium haircut and hot towel treatment, luxury service, ultra high resolution",
    contact: "Modern Nairobi CBD building exterior showing Pension Towers with professional signage, urban skyline, contemporary architecture, ultra high resolution"
  };

  const generateImages = async () => {
    if (!apiKey) {
      toast.error("Please enter your Runware API key first");
      return;
    }

    setIsGenerating(true);
    const runware = new RunwareService(apiKey);

    try {
      for (const [key, prompt] of Object.entries(imagePrompts)) {
        toast.info(`Generating ${key} image...`);
        
        const result = await runware.generateImage({
          positivePrompt: prompt,
          width: 1920,
          height: 1080,
          model: "runware:100@1"
        });

        setGeneratedImages(prev => ({
          ...prev,
          [key]: result.imageURL
        }));

        toast.success(`${key} image generated successfully!`);
      }
    } catch (error) {
      console.error("Error generating images:", error);
      toast.error("Failed to generate images. Please check your API key.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="h-5 w-5" />
          Generate Barbershop & Spa Images
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="apiKey">
            Runware API Key (Get yours at <a href="https://runware.ai" target="_blank" rel="noopener noreferrer" className="text-primary underline">runware.ai</a>)
          </Label>
          <Input
            id="apiKey"
            type="password"
            placeholder="Enter your Runware API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </div>

        <Button 
          onClick={generateImages} 
          disabled={isGenerating || !apiKey}
          className="w-full"
        >
          {isGenerating ? "Generating Images..." : "Generate All Images"}
        </Button>

        {Object.keys(generatedImages).length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Generated Images:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(generatedImages).map(([key, url]) => (
                <div key={key} className="space-y-2">
                  <img 
                    src={url} 
                    alt={`Generated ${key} image`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium capitalize">{key}</span>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => window.open(url, '_blank')}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};