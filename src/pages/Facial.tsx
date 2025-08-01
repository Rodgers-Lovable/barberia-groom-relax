import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookingModal } from "@/components/booking/BookingModal";
import { useState } from "react";
import { Sparkles, Clock, MapPin, Star, CheckCircle } from "lucide-react";

const Facial = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      name: "Steaming",
      description: "Deep pore cleansing steam treatment to open pores and prepare skin",
      duration: "20 mins",
      price: "KES 1,500",
      features: ["Deep Pore Opening", "Preparation Treatment", "Cleansing", "Purification"]
    },
    {
      name: "Mask",
      description: "Customized facial mask treatment based on your skin type and needs",
      duration: "30 mins", 
      price: "KES 1,500",
      features: ["Custom Mask", "Skin Type Specific", "Nourishing", "Rejuvenating"]
    },
    {
      name: "Scrub",
      description: "Gentle facial exfoliation to remove dead skin cells and reveal fresh skin",
      duration: "25 mins",
      price: "KES 1,500", 
      features: ["Gentle Exfoliation", "Dead Skin Removal", "Skin Renewal", "Smooth Texture"]
    },
    {
      name: "Platinum Hydrating Facial",
      description: "Intensive hydration treatment for dry and dehydrated skin",
      duration: "60 mins",
      price: "KES 4,000",
      features: ["Deep Hydration", "Moisture Boost", "Skin Plumping", "Long-lasting Results"]
    },
    {
      name: "Platinum Anti-aging Facial",
      description: "Advanced anti-aging treatment to reduce fine lines and restore youthfulness",
      duration: "75 mins", 
      price: "KES 4,500",
      features: ["Anti-aging", "Fine Line Reduction", "Skin Firming", "Collagen Boost"]
    },
    {
      name: "Mini Facial",
      description: "Express facial treatment perfect for quick skin refresh and maintenance",
      duration: "30 mins",
      price: "KES 2,000",
      features: ["Quick Refresh", "Basic Cleansing", "Moisturizing", "Instant Glow"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=800&fit=crop)`
        }}
      >
        <div className="text-center text-white space-y-6 px-4 max-w-4xl mx-auto">
          <Badge className="bg-accent text-primary font-semibold text-lg px-6 py-2">
            Advanced Facial Treatments in Nairobi
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-accent">Facial</span> Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Experience advanced facial treatments for healthy, glowing skin at Baberia Cuts Platinum, Pension Towers, Loita Street
          </p>
          <div className="flex items-center justify-center space-x-6 text-lg">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span>Pension Towers, Nairobi</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-accent" />
              <span>20-75 min sessions</span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 mt-8"
            onClick={() => setIsBookingOpen(true)}
          >
            Book Facial Service
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="text-accent">Facial</span> Menu
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From basic skincare to advanced anti-aging treatments - achieve healthy, glowing skin in Nairobi
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
                    <Sparkles className="h-8 w-8 text-accent flex-shrink-0 ml-4" />
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

      {/* Why Choose Our Facial Services */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose Our <span className="text-accent">Facial Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <Star className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-xl font-bold">Expert Aestheticians</h3>
              <p className="text-muted-foreground">Certified skincare professionals with expertise in various facial treatments</p>
            </div>
            <div className="space-y-4">
              <Sparkles className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-xl font-bold">Premium Products</h3>
              <p className="text-muted-foreground">High-quality skincare products and advanced treatment equipment</p>
            </div>
            <div className="space-y-4">
              <MapPin className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-xl font-bold">Luxury Experience</h3>
              <p className="text-muted-foreground">Relaxing environment at our premium spa in Pension Towers, Nairobi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready for <span className="text-accent">Glowing Skin</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Book your facial treatment at Baberia Cuts Platinum in Nairobi today
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

export default Facial;