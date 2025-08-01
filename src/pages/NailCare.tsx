import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookingModal } from "@/components/booking/BookingModal";
import { useState } from "react";
import { Hand, Clock, MapPin, Star, CheckCircle } from "lucide-react";

const NailCare = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      name: "Platinum Footcare",
      description: "Complete luxury foot care with exfoliation, massage, and nail treatment",
      duration: "75 mins",
      price: "KES 2,500",
      features: ["Foot Soak", "Exfoliation", "Nail Trim & File", "Massage", "Moisturizing"]
    },
    {
      name: "Platinum Handcare",
      description: "Premium hand and nail care service with therapeutic treatments",
      duration: "60 mins", 
      price: "KES 1,500",
      features: ["Hand Soak", "Cuticle Care", "Nail Shaping", "Hand Massage", "Moisturizing"]
    },
    {
      name: "Platinum Nail Maintenance",
      description: "Regular nail upkeep and maintenance for healthy, strong nails",
      duration: "30 mins",
      price: "KES 1,000", 
      features: ["Nail Trimming", "Filing", "Cuticle Care", "Basic Buffing"]
    },
    {
      name: "Platinum Cut & File Feet",
      description: "Professional toenail cutting and filing service",
      duration: "30 mins",
      price: "KES 1,000",
      features: ["Nail Cutting", "Precision Filing", "Cuticle Trimming", "Basic Care"]
    },
    {
      name: "Pedicure Mask",
      description: "Nourishing foot mask treatment for soft, smooth skin",
      duration: "45 mins", 
      price: "KES 1,000",
      features: ["Deep Cleansing Mask", "Exfoliation", "Moisturizing", "Relaxation"]
    },
    {
      name: "Paraffin Wax",
      description: "Therapeutic paraffin wax treatment for hands or feet",
      duration: "30 mins",
      price: "KES 1,000",
      features: ["Warm Paraffin", "Deep Moisturizing", "Pain Relief", "Skin Softening"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1560920002-8027ecb51315?w=1200&h=800&fit=crop)`
        }}
      >
        <div className="text-center text-white space-y-6 px-4 max-w-4xl mx-auto">
          <Badge className="bg-accent text-primary font-semibold text-lg px-6 py-2">
            Professional Nail Care in Nairobi
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-accent">Nail Care</span> Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Experience premium nail care and wellness treatments at Baberia Cuts Platinum, Pension Towers, Loita Street
          </p>
          <div className="flex items-center justify-center space-x-6 text-lg">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span>Pension Towers, Nairobi</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-accent" />
              <span>30-75 min sessions</span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 mt-8"
            onClick={() => setIsBookingOpen(true)}
          >
            Book Nail Care Service
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="text-accent">Nail Care</span> Menu
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional nail care and wellness treatments for your hands and feet in Nairobi
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
                    <Hand className="h-8 w-8 text-accent flex-shrink-0 ml-4" />
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

      {/* Why Choose Our Nail Care Services */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose Our <span className="text-accent">Nail Care Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <Star className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-xl font-bold">Expert Technicians</h3>
              <p className="text-muted-foreground">Certified nail care professionals with extensive training and experience</p>
            </div>
            <div className="space-y-4">
              <Hand className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-xl font-bold">Premium Products</h3>
              <p className="text-muted-foreground">High-quality nail care products and sterilized equipment for your safety</p>
            </div>
            <div className="space-y-4">
              <MapPin className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-xl font-bold">Luxury Environment</h3>
              <p className="text-muted-foreground">Relaxing atmosphere at our premium location in Pension Towers, Nairobi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready for <span className="text-accent">Beautiful Nails</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Book your nail care appointment at Baberia Cuts Platinum in Nairobi today
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

export default NailCare;