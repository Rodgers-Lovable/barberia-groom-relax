import { useState, useEffect } from "react";
import { Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface OperatingHoursProps {
  showLocation?: boolean;
  variant?: "default" | "compact" | "table";
  className?: string;
}

export const OperatingHours = ({ 
  showLocation = true, 
  variant = "default",
  className = "" 
}: OperatingHoursProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      
      // Convert to Nairobi time (UTC+3)
      const nairobiTime = new Date(now.getTime() + (3 * 60 * 60 * 1000) - (now.getTimezoneOffset() * 60 * 1000));
      setCurrentTime(nairobiTime);
      
      const day = nairobiTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hour = nairobiTime.getHours();
      
      // Check if open (Monday-Saturday 8AM-8PM, Sunday closed)
      if (day === 0) {
        setIsOpen(false); // Sunday closed
      } else {
        setIsOpen(hour >= 8 && hour < 20); // 8AM to 8PM
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const hours = [
    { day: "Monday", time: "8:00 AM – 8:00 PM" },
    { day: "Tuesday", time: "8:00 AM – 8:00 PM" },
    { day: "Wednesday", time: "8:00 AM – 8:00 PM" },
    { day: "Thursday", time: "8:00 AM – 8:00 PM" },
    { day: "Friday", time: "8:00 AM – 8:00 PM" },
    { day: "Saturday", time: "8:00 AM – 8:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  if (variant === "compact") {
    return (
      <div className={`flex items-center space-x-4 ${className}`}>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-accent" />
          <span className="text-sm">
            {isOpen ? "Open Now" : "Closed"}
          </span>
          <Badge variant={isOpen ? "default" : "secondary"} className="text-xs">
            {isOpen ? "Open" : "Closed"}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground">
          Mon-Sat: 8AM-8PM
        </div>
      </div>
    );
  }

  if (variant === "table") {
    return (
      <Card className={`card-premium ${className}`}>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-playfair text-lg font-semibold text-primary flex items-center space-x-2">
                <Clock className="h-5 w-5 text-accent" />
                <span>Operating Hours</span>
              </h3>
              <Badge variant={isOpen ? "default" : "secondary"}>
                {isOpen ? "Open Now" : "Closed"}
              </Badge>
            </div>
            
            <div className="space-y-2">
              {hours.map((item) => (
                <div key={item.day} className="flex justify-between items-center py-1">
                  <span className="text-sm font-medium">{item.day}</span>
                  <span className={`text-sm ${item.time === "Closed" ? "text-muted-foreground" : ""}`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
            
            {showLocation && (
              <div className="pt-4 border-t border-border">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <p>Visit us at Pension Towers,</p>
                    <p>Loita Street, Nairobi</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-playfair text-lg font-semibold text-primary flex items-center space-x-2">
          <Clock className="h-5 w-5 text-accent" />
          <span>Operating Hours</span>
        </h3>
        <Badge variant={isOpen ? "default" : "secondary"}>
          {isOpen ? "Open Now" : "Closed"}
        </Badge>
      </div>
      
      <div className="grid grid-cols-2 gap-2 text-sm">
        {hours.map((item) => (
          <div key={item.day} className="flex justify-between">
            <span className="font-medium">{item.day}</span>
            <span className={item.time === "Closed" ? "text-muted-foreground" : ""}>
              {item.time}
            </span>
          </div>
        ))}
      </div>
      
      {showLocation && (
        <div className="pt-4 border-t border-border">
          <div className="flex items-start space-x-2">
            <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
            <div className="text-sm text-muted-foreground">
              <p>Visit us at Pension Towers,</p>
              <p>Loita Street, Nairobi</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};