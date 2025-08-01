import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookingModal } from "@/components/booking/BookingModal";
import { Waves, Clock, Heart, Sparkles, Users, Droplets } from "lucide-react";
import heroSpa from "@/assets/hero-spa.jpg";

const MassageAndSpa = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      name: "Swedish Massage",
      description: "Classic relaxation massage using long, flowing strokes to promote circulation and ease tension",
      duration: "60 / 90 minutes",
      benefits: ["Stress relief", "Improved circulation", "Muscle relaxation", "Better sleep quality"],
      price: "KSh 2,500 / 3,500"
    },
    {
      name: "Deep Tissue Massage",
      description: "Therapeutic massage targeting deeper muscle layers to address chronic pain and tension",
      duration: "60 / 90 minutes",
      benefits: ["Pain relief", "Improved mobility", "Chronic tension release", "Injury recovery"],
      price: "KSh 3,000 / 4,200"
    },
    {
      name: "Neck & Shoulder Release",
      description: "Focused treatment for upper body tension, perfect for desk workers and stress relief",
      duration: "45 minutes",
      benefits: ["Headache relief", "Posture improvement", "Stress reduction", "Quick recovery"],
      price: "KSh 1,800"
    },
    {
      name: "Aromatherapy Add-ons",
      description: "Enhance any massage with premium essential oils for deeper relaxation and wellness",
      duration: "Added to any service",
      benefits: ["Enhanced relaxation", "Mood improvement", "Custom scent selection", "Therapeutic benefits"],
      price: "KSh 500"
    },
    {
      name: "Hot Stone Massage",
      description: "Heated basalt stones placed on key points to melt away tension and promote deep relaxation",
      duration: "75 minutes",
      benefits: ["Deep muscle relaxation", "Improved circulation", "Stress relief", "Mental clarity"],
      price: "KSh 4,000"
    }
  ];

  const therapistTips = [
    {
      title: "Arrive Early",
      description: "Come 15 minutes before your appointment to relax and fill out any necessary forms."
    },
    {
      title: "Stay Hydrated", 
      description: "Drink plenty of water before and after your massage to help flush out toxins."
    },
    {
      title: "Communicate",
      description: "Let your therapist know about any areas of concern or pressure preferences."
    },
    {
      title: "Post-Massage Care",
      description: "Take it easy after your session and avoid strenuous activities for the rest of the day."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-secondary to-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <img 
            src={heroSpa} 
            alt="Relaxing spa environment"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Massage & Spa Services
            </Badge>
            <h1 className="heading-hero text-primary-foreground">
              Where Relaxation Meets <span className="text-gradient-gold">Expertise</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Escape the stress of daily life with our therapeutic massage services. 
              Our licensed therapists combine expertise with a serene environment to restore your body and mind.
            </p>
            <Button 
              onClick={() => setIsBookingOpen(true)}
              className="btn-premium text-lg px-8 py-4"
            >
              Book a Massage
            </Button>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              Therapeutic Excellence
            </Badge>
            <h2 className="heading-section text-primary">
              Massage & Wellness Services
            </h2>
            <p className="text-premium max-w-2xl mx-auto">
              Each treatment is performed by licensed massage therapists trained in various therapeutic techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.name} className="card-service group">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Waves className="h-8 w-8 text-accent" />
                    <Badge variant="secondary" className="text-sm">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="font-playfair text-xl text-primary">
                    {service.name}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>{service.duration}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center space-x-2">
                          <Heart className="h-3 w-3 text-accent" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full btn-outline-premium"
                  >
                    Book This Treatment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Therapist Environment */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30">
                  Professional Care
                </Badge>
                <h2 className="heading-section text-primary">
                  Expert Therapists at Work
                </h2>
                <p className="text-premium">
                  Our massage therapists are licensed professionals with extensive training in various therapeutic modalities. 
                  Each session takes place in our carefully designed treatment rooms that promote healing and relaxation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="card-premium text-center">
                  <CardContent className="p-6 space-y-3">
                    <Sparkles className="h-8 w-8 text-accent mx-auto" />
                    <h3 className="font-playfair text-lg font-semibold text-primary">Licensed</h3>
                    <p className="text-sm text-muted-foreground">Certified massage therapists</p>
                  </CardContent>
                </Card>
                
                <Card className="card-premium text-center">
                  <CardContent className="p-6 space-y-3">
                    <Droplets className="h-8 w-8 text-accent mx-auto" />
                    <h3 className="font-playfair text-lg font-semibold text-primary">Premium</h3>
                    <p className="text-sm text-muted-foreground">High-quality oils & products</p>
                  </CardContent>
                </Card>
              </div>

              <Button 
                onClick={() => setIsBookingOpen(true)}
                className="btn-premium"
              >
                Schedule Your Session
              </Button>
            </div>

            <Card className="card-premium overflow-hidden">
              <div className="relative h-96">
                <img 
                  src={heroSpa}
                  alt="Peaceful spa treatment room"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Users className="h-6 w-6 text-accent mb-2" />
                  <h3 className="font-playfair text-lg font-semibold">Serene Environment</h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Preparation Tips */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="outline" className="text-primary border-primary/30">
                Preparation Tips
              </Badge>
              <h2 className="heading-section text-primary">
                How to Prepare for Your Session
              </h2>
              <p className="text-premium">
                Follow these simple tips to maximize the benefits of your massage therapy session.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {therapistTips.map((tip, index) => (
                <Card key={index} className="card-premium">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-accent font-semibold text-sm">{index + 1}</span>
                      </div>
                      <h3 className="font-playfair text-lg font-semibold text-primary">
                        {tip.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground ml-11">
                      {tip.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Ready to Unwind?
            </Badge>
            <h2 className="heading-section text-primary-foreground">
              Your Wellness Journey Starts Here
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Take a break from the demands of daily life. Book your therapeutic massage today 
              and experience the healing power of professional touch therapy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => setIsBookingOpen(true)}
                className="btn-premium text-lg px-8 py-4"
              >
                Book Your Massage
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline-premium bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-4"
              >
                Call: +254 123 456 789
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
};

export default MassageAndSpa;