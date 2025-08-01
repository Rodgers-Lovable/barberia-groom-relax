import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookingModal } from "@/components/booking/BookingModal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { OperatingHours } from "@/components/OperatingHours";
import { 
  Scissors, 
  Hand,
  Heart,
  Sparkles,
  Zap,
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  Award,
  ArrowRight,
  Play,
  Waves
} from "lucide-react";
import heroBarbershop from "@/assets/hero-barbershop.jpg";
import heroSpa from "@/assets/hero-spa.jpg";
import galleryTransformation from "@/assets/gallery-transformation.jpg";
import toolsArrangement from "@/assets/tools-arrangement.jpg";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      icon: Scissors,
      title: "HAIRCUT",
      description: "Premium haircuts and styling services with precision and artistry",
      href: "/services/haircut",
      features: ["Platinum Haircut", "Platinum Fade", "Royal Shave", "Beard Trim"],
      image: heroBarbershop
    },
    {
      icon: Hand,
      title: "NAIL CARE",
      description: "Professional nail care and maintenance for hands and feet",
      href: "/services/nail-care",
      features: ["Platinum Footcare", "Platinum Handcare", "Pedicure Mask", "Paraffin Wax"],
      image: heroSpa
    },
    {
      icon: Heart,
      title: "MASSAGE",
      description: "Therapeutic and relaxation massage treatments for ultimate wellness",
      href: "/services/massage",
      features: ["Platinum Hotstone", "Swedish Massage", "Deep Tissue", "Aromatherapy"],
      image: heroSpa
    },
    {
      icon: Sparkles,
      title: "FACIAL",
      description: "Advanced facial treatments for healthy, glowing skin",
      href: "/services/facial",
      features: ["Platinum Hydrating", "Anti-aging", "Mini Facial", "Steaming"],
      image: heroSpa
    },
    {
      icon: Zap,
      title: "WAXING",
      description: "Professional waxing services for smooth, hair-free skin",
      href: "/services/waxing",
      features: ["Brazilian", "Chest", "Leg Waxing", "Bikini"],
      image: heroBarbershop
    }
  ];

  const stats = [
    { icon: Users, value: "2,500+", label: "Happy Clients" },
    { icon: Award, value: "5", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: CheckCircle, value: "100%", label: "Satisfaction" }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      service: "Groom & Relax Combo",
      rating: 5,
      comment: "Best decision I've made! The haircut was perfect and the massage afterwards was incredibly relaxing. The whole experience was top-notch.",
      avatar: "MC"
    },
    {
      name: "David Ochieng",
      service: "Classic Cut & Beard Trim",
      rating: 5,
      comment: "Marcus is a true artist with the clippers. My beard has never looked this good. Already booked my next appointment!",
      avatar: "DO"
    },
    {
      name: "James Wilson",
      service: "Executive Reset Package",
      rating: 5,
      comment: "From the moment I walked in, I felt like royalty. The attention to detail and professional service is unmatched in Nairobi.",
      avatar: "JW"
    }
  ];

  const packages = [
    {
      name: "Groom & Relax",
      description: "Platinum Haircut + Swedish Massage",
      price: "KES 5,500",
      originalPrice: "KES 6,000",
      savings: "Save 8%",
      popular: true
    },
    {
      name: "Executive Reset",
      description: "Royal Shave + Platinum Facial + Back Massage",
      price: "KES 7,000",
      originalPrice: "KES 8,500",
      savings: "Save 18%"
    },
    {
      name: "Platinum Wellness",
      description: "Platinum Haircut + Hotstone Massage + Facial",
      price: "KES 10,500",
      originalPrice: "KES 12,500",
      savings: "Save 16%"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
          style={{ backgroundImage: `url(${toolsArrangement})` }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <Badge className="bg-accent/20 text-accent border-accent/30 text-sm px-4 py-2">
              Premium Grooming & Relaxation
            </Badge>
            
            <h1 className="heading-hero text-white">
              Sharp Style. 
              <span className="text-gradient-gold block mt-2">Deep Relaxation.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Baberia Cuts Platinum - Nairobi's premium grooming experience. Where master craftsmanship meets luxury wellness at Pension Towers, Loita Street.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                onClick={() => setIsBookingOpen(true)}
                className="btn-premium text-lg px-8 py-6 shadow-button"
              >
                <Scissors className="mr-2 h-5 w-5" />
                Book a Haircut
              </Button>
              <Button 
                onClick={() => setIsBookingOpen(true)}
                className="btn-hero text-lg px-8 py-6"
              >
                <Waves className="mr-2 h-5 w-5" />
                Book a Massage
              </Button>
            </div>
            
            <div className="pt-4">
              <OperatingHours variant="compact" showLocation={false} className="justify-center text-white/80" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              Our Services
            </Badge>
            <h2 className="heading-section text-primary">
              Top-Rated Barbershop & Spa in Nairobi
            </h2>
            <p className="text-premium max-w-2xl mx-auto">
              Experience the unique combination of expert barbering and luxury spa treatments under one roof in Nairobi CBD. 
              Our skilled professionals deliver exceptional results in both grooming and relaxation at Pension Towers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="card-service overflow-hidden group">
                  <div className="relative h-64">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Icon className="h-8 w-8 text-accent mb-2" />
                      <h3 className="font-playfair text-xl font-semibold">{service.title}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      onClick={() => setIsBookingOpen(true)}
                      className="w-full btn-outline-premium"
                    >
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center space-y-2">
                  <Icon className="h-8 w-8 text-accent mx-auto" />
                  <div className="font-playfair text-3xl font-bold">{stat.value}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-accent border-accent/30">
              Special Packages
            </Badge>
            <h2 className="heading-section text-primary">
              Groom & Relax Combos
            </h2>
            <p className="text-premium max-w-2xl mx-auto">
              Save time and money with our curated packages that combine our best services 
              for the ultimate grooming and relaxation experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.name} className={`card-premium relative ${pkg.popular ? 'border-accent shadow-lg' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center space-y-4">
                  <CardTitle className="font-playfair text-xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <span className="line-through text-muted-foreground">{pkg.originalPrice}</span>
                      <Badge variant="secondary" className="text-accent">{pkg.savings}</Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <Button 
                    onClick={() => setIsBookingOpen(true)}
                    className={pkg.popular ? "btn-premium w-full" : "btn-outline-premium w-full"}
                  >
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              Client Stories
            </Badge>
            <h2 className="heading-section text-primary">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="card-premium">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.service}</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="heading-section text-primary-foreground">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Join thousands of satisfied clients who trust Baberia Cuts Platinum with their grooming and relaxation needs in Nairobi CBD. 
              Book your appointment today and discover why we're Nairobi's premier destination for style and serenity at Pension Towers, Loita Street.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => setIsBookingOpen(true)}
                className="btn-premium text-lg px-8 py-6"
              >
                Book Your Appointment
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline-premium bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6"
              >
                <Play className="mr-2 h-5 w-5" />
                Take a Virtual Tour
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

export default Index;
