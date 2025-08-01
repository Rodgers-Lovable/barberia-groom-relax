import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookingModal } from "@/components/booking/BookingModal";
import { useState } from "react";
import { Scissors, Clock, MapPin, Star, CheckCircle } from "lucide-react";

const Haircut = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      name: "Platinum Haircut",
      description: "Premium precision cut with styling consultation and finishing",
      duration: "45 mins",
      price: "KES 1,500",
      features: ["Consultation", "Precision Cut", "Styling", "Premium Products"]
    },
    {
      name: "Platinum Fade",
      description: "Expert fade techniques with seamless blending and styling",
      duration: "60 mins", 
      price: "KES 2,000",
      features: ["Consultation", "Precision Fade", "Styling", "Hot Towel"]
    },
    {
      name: "Royal Shave",
      description: "Traditional wet shave experience with hot towels and premium oils",
      duration: "30 mins",
      price: "KES 2,000", 
      features: ["Hot Towel", "Premium Oils", "Traditional Razor", "Aftercare"]
    },
    {
      name: "Beard Trim",
      description: "Professional beard shaping and trimming for the perfect look",
      duration: "25 mins",
      price: "KES 1,000",
      features: ["Shaping", "Trimming", "Conditioning", "Styling"]
    },
    {
      name: "Beard Trim & Dye",
      description: "Complete beard grooming with professional coloring service",
      duration: "45 mins", 
      price: "KES 1,500",
      features: ["Trim", "Professional Dye", "Conditioning", "Styling"]
    },
    {
      name: "Styling",
      description: "Professional hair styling for any occasion or look",
      duration: "20 mins",
      price: "KES 1,000",
      features: ["Consultation", "Premium Products", "Styling", "Finishing"]
    },
    {
      name: "Kids Haircut",
      description: "Gentle and fun haircuts designed specifically for children",
      duration: "30 mins",
      price: "KES 1,000", 
      features: ["Child-Friendly", "Patient Service", "Fun Experience", "Quality Cut"]
    },
    {
      name: "Hair Dye Black",
      description: "Professional black hair coloring with premium products",
      duration: "60 mins",
      price: "KES 1,500",
      features: ["Premium Dye", "Color Protection", "Professional Application", "Aftercare"]
    },
    {
      name: "Hair Dye Colored",
      description: "Creative colored hair dyeing with vibrant, long-lasting results",
      duration: "90 mins",
      price: "KES 4,000",
      features: ["Custom Colors", "Premium Products", "Color Consultation", "Aftercare Kit"]
    },
    {
      name: "Texturizing",
      description: "Hair texturizing service for enhanced volume and style",
      duration: "30 mins", 
      price: "KES 1,000",
      features: ["Volume Enhancement", "Texture Creation", "Styling", "Product Application"]
    },
    {
      name: "Treatment",
      description: "Deep conditioning hair treatment for healthy, strong hair",
      duration: "45 mins",
      price: "KES 1,000",
      features: ["Deep Conditioning", "Scalp Treatment", "Strengthening", "Moisturizing"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=800&fit=crop)`
        }}
      >
        <div className="text-center text-white space-y-6 px-4 max-w-4xl mx-auto">
          <Badge className="bg-accent text-primary font-semibold text-lg px-6 py-2">
            Premium Haircuts in Nairobi
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-accent">Haircut</span> Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Experience precision cuts and expert styling at Baberia Cuts Platinum, Pension Towers, Loita Street
          </p>
          <div className="flex items-center justify-center space-x-6 text-lg">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span>Pension Towers, Nairobi</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-accent" />
              <span>20-90 min sessions</span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 mt-8"
            onClick={() => setIsBookingOpen(true)}
          >
            Book Haircut Service
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="text-accent">Haircut</span> Menu
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From precision cuts to creative styling - experience the finest haircut services in Nairobi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors">
                        {service.name}
                      </CardTitle>
                      <CardDescription className="mt-2 text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                    <Scissors className="h-8 w-8 text-accent flex-shrink-0 ml-4" />
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </Badge>
                    <span className="text-2xl font-bold text-accent">{service.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6"
                    onClick={() => setIsBookingOpen(true)}
                  >
                    Book {service.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Haircut Services */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose Our <span className="text-accent">Haircut Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <Star className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-xl font-bold">Expert Barbers</h3>
              <p className="text-muted-foreground">Skilled professionals with years of experience in precision cutting and styling</p>
            </div>
            <div className="space-y-4">
              <Scissors className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-xl font-bold">Premium Tools</h3>
              <p className="text-muted-foreground">Professional-grade equipment and premium products for the best results</p>
            </div>
            <div className="space-y-4">
              <MapPin className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-xl font-bold">Prime Location</h3>
              <p className="text-muted-foreground">Conveniently located at Pension Towers, Loita Street in Nairobi CBD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready for Your <span className="text-accent">Perfect Cut</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Book your appointment at Baberia Cuts Platinum in Nairobi today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => setIsBookingOpen(true)}
            >
              Book Appointment
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Call: +254 123 456 789
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default Haircut;