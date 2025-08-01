import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Scissors, Hand, Heart, Sparkles, Zap, Star, ArrowRight, Clock, DollarSign } from "lucide-react";
import heroBarbershop from "@/assets/hero-barbershop.jpg";
import heroSpa from "@/assets/hero-spa.jpg";
import groomingSpaTools from "@/assets/grooming-spa-tools.jpg";

const Services = () => {
  const serviceCategories = [
    {
      icon: Scissors,
      title: "HAIRCUT",
      description: "Premium haircuts and styling services with precision and artistry",
      image: heroBarbershop,
      href: "/services/haircut",
      services: ["Platinum Haircut - KES 1,500", "Platinum Fade - KES 2,000", "Royal Shave - KES 2,000"],
      startingPrice: "From KES 1,000"
    },
    {
      icon: Hand,
      title: "NAIL CARE",
      description: "Professional nail care and maintenance for hands and feet",
      image: heroSpa,
      href: "/services/nail-care",
      services: ["Platinum Footcare - KES 2,500", "Platinum Handcare - KES 1,500", "Paraffin Wax - KES 1,000"],
      startingPrice: "From KES 1,000"
    },
    {
      icon: Heart,
      title: "MASSAGE",
      description: "Therapeutic and relaxation massage treatments for ultimate wellness",
      image: heroSpa,
      href: "/services/massage",
      services: ["Platinum Hotstone - KES 6,000", "Swedish Massage - KES 4,500", "Deep Tissue - KES 5,000"],
      startingPrice: "From KES 500"
    },
    {
      icon: Sparkles,
      title: "FACIAL",
      description: "Advanced facial treatments for healthy, glowing skin",
      image: heroSpa,
      href: "/services/facial",
      services: ["Platinum Hydrating - KES 4,000", "Anti-aging - KES 4,500", "Mini Facial - KES 2,000"],
      startingPrice: "From KES 1,500"
    },
    {
      icon: Zap,
      title: "WAXING",
      description: "Professional waxing services for smooth, hair-free skin",
      image: heroBarbershop,
      href: "/services/waxing",
      services: ["Brazilian - KES 3,000", "Chest - KES 1,500", "Leg Waxing - KES 1,500"],
      startingPrice: "From KES 1,000"
    }
  ];

  const features = [
    {
      icon: Star,
      title: "Expert Professionals",
      description: "Certified barbers and licensed massage therapists with years of experience"
    },
    {
      icon: Clock,
      title: "Convenient Scheduling",
      description: "Flexible booking with same-day availability and extended hours"
    },
    {
      icon: DollarSign,
      title: "Premium Value",
      description: "Competitive pricing with package deals and loyalty rewards"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${groomingSpaTools})`
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Our Services
            </Badge>
            <h1 className="heading-hero text-white">
              Premium Services at <span className="text-gradient-gold">Baberia Cuts Platinum</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Experience luxury grooming and wellness services in Nairobi. From precision haircuts to therapeutic massages, 
              discover our comprehensive menu at Pension Towers, Loita Street.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="heading-section text-primary">
              Choose Your Experience
            </h2>
            <p className="text-premium max-w-2xl mx-auto">
              Select from our range of specialized services designed to meet your grooming and relaxation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} className="card-service overflow-hidden group">
                  <div className="relative h-64">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Icon className="h-8 w-8 text-accent mb-2" />
                      <h3 className="font-playfair text-xl font-semibold">{category.title}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <p className="text-muted-foreground">{category.description}</p>
                    
                    <div className="space-y-2">
                      {category.services.map((service, index) => (
                        <div key={service} className="flex items-center justify-between text-sm">
                          <span>{service}</span>
                          {index === 0 && (
                            <Badge variant="secondary" className="text-xs">
                              From {category.startingPrice}
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <Link to={category.href} className="block">
                      <Button className="w-full btn-outline-premium group">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              Why Choose Baberia Cuts Platinum
            </Badge>
            <h2 className="heading-section text-primary">
              Excellence in Every Detail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="card-premium text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Preview */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Exclusive Membership
            </Badge>
            <h2 className="heading-section text-primary-foreground">
              Join the Baberia Cuts Platinum Family
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Unlock exclusive benefits, priority booking, and special discounts with our membership program. 
              Perfect for regular clients who value consistent quality and convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/memberships">
                <Button className="btn-premium text-lg px-8 py-4">
                  Learn About Membership
                </Button>
              </Link>
              <Link to="/memberships">
                <Button 
                  variant="outline" 
                  className="btn-outline-premium bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-4"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;