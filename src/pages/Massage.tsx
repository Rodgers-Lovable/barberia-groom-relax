import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookingModal } from "@/components/booking/BookingModal";
import { useState } from "react";
import { Heart, Clock, MapPin, Star, CheckCircle } from "lucide-react";

const Massage = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      name: "Platinum Hotstone Massage",
      description: "Luxurious hot stone therapy for deep relaxation and muscle tension relief",
      duration: "90 mins",
      price: "KES 6,000",
      features: ["Hot Stone Therapy", "Full Body Massage", "Aromatherapy", "Deep Relaxation"]
    },
    {
      name: "Back Massage",
      description: "Targeted back and shoulder massage to relieve stress and tension",
      duration: "45 mins", 
      price: "KES 2,500",
      features: ["Back & Shoulders", "Tension Relief", "Pressure Point Work", "Relaxation"]
    },
    {
      name: "Foot Massage",
      description: "Therapeutic foot massage focusing on pressure points and relaxation",
      duration: "30 mins",
      price: "KES 1,000", 
      features: ["Pressure Point Therapy", "Circulation Boost", "Relaxation", "Foot Care"]
    },
    {
      name: "Head & Shoulder Massage",
      description: "Relaxing massage targeting head, neck, and shoulder tension",
      duration: "30 mins",
      price: "KES 1,000",
      features: ["Head Massage", "Neck & Shoulders", "Stress Relief", "Tension Release"]
    },
    {
      name: "Hand Massage",
      description: "Gentle hand and wrist massage for relaxation and circulation",
      duration: "20 mins", 
      price: "KES 500",
      features: ["Hand & Wrist Focus", "Circulation", "Relaxation", "Stress Relief"]
    },
    {
      name: "Body Wrap/Mask",
      description: "Detoxifying body wrap treatment for skin rejuvenation",
      duration: "75 mins",
      price: "KES 4,000",
      features: ["Detoxification", "Skin Rejuvenation", "Hydration", "Full Body Treatment"]
    },
    {
      name: "Steam Bath",
      description: "Relaxing steam bath session for detoxification and relaxation",
      duration: "30 mins",
      price: "KES 2,500", 
      features: ["Steam Therapy", "Detoxification", "Relaxation", "Skin Cleansing"]
    },
    {
      name: "Body Scrub",
      description: "Exfoliating body scrub for smooth, glowing skin",
      duration: "45 mins",
      price: "KES 3,000",
      features: ["Full Body Exfoliation", "Dead Skin Removal", "Skin Smoothing", "Moisturizing"]
    },
    {
      name: "Platinum Swedish Massage",
      description: "Classic Swedish massage technique for ultimate relaxation",
      duration: "75 mins",
      price: "KES 4,500",
      features: ["Swedish Technique", "Full Body", "Muscle Relaxation", "Stress Relief"]
    },
    {
      name: "Platinum Deep Tissue Massage",
      description: "Intensive deep tissue massage for muscle tension and pain relief",
      duration: "75 mins",
      price: "KES 5,000",
      features: ["Deep Tissue Work", "Muscle Tension Relief", "Pain Management", "Therapeutic"]
    },
    {
      name: "Platinum Aromatherapy Massage",
      description: "Luxurious aromatherapy massage with essential oils for total relaxation",
      duration: "75 mins",
      price: "KES 5,500",
      features: ["Essential Oils", "Aromatherapy", "Full Body", "Deep Relaxation"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=800&fit=crop)`
        }}
      >
        <div className="text-center text-white space-y-6 px-4 max-w-4xl mx-auto">
          <Badge className="bg-accent text-primary font-semibold text-lg px-6 py-2">
            Therapeutic Massage in Nairobi
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-accent">Massage</span> Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Experience therapeutic and relaxation massage treatments at Baberia Cuts Platinum, Pension Towers, Loita Street
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
            Book Massage Service
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="text-accent">Massage</span> Menu
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From therapeutic treatments to relaxation therapy - experience the finest massage services in Nairobi
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
                    <Heart className="h-8 w-8 text-accent flex-shrink-0 ml-4" />
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

      {/* Why Choose Our Massage Services */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose Our <span className="text-accent">Massage Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <Star className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-xl font-bold">Expert Therapists</h3>
              <p className="text-muted-foreground">Certified massage therapists with extensive training in various techniques</p>
            </div>
            <div className="space-y-4">
              <Heart className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-xl font-bold">Premium Oils & Products</h3>
              <p className="text-muted-foreground">High-quality massage oils and therapeutic products for the best experience</p>
            </div>
            <div className="space-y-4">
              <MapPin className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-xl font-bold">Serene Environment</h3>
              <p className="text-muted-foreground">Peaceful, relaxing atmosphere at Pension Towers, Loita Street in Nairobi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to <span className="text-accent">Relax & Unwind</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Book your massage therapy session at Baberia Cuts Platinum in Nairobi today
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

export default Massage;