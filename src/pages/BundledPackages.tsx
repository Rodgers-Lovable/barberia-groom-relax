import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookingModal } from "@/components/booking/BookingModal";
import { Gift, Clock, DollarSign, Star, Users, Heart, Sparkles } from "lucide-react";
import heroBarbershop from "@/assets/hero-barbershop.jpg";
import heroSpa from "@/assets/hero-spa.jpg";

const BundledPackages = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const packages = [
    {
      name: "Groom & Relax",
      description: "The perfect combination of sharp styling and deep relaxation",
      duration: "2.5 hours",
      included: ["Classic Cut or Skin Fade", "60-minute Swedish Massage", "Hot Towel Treatment", "Complimentary Beverages"],
      originalPrice: "KSh 4,300",
      packagePrice: "KSh 3,500",
      savings: "19%",
      popular: true
    },
    {
      name: "Executive Reset",
      description: "Complete grooming and wellness package for the modern professional",
      duration: "3 hours",
      included: ["Precision Haircut", "Beard Trim & Shape", "Facial Treatment", "45-minute Back Massage", "Premium Product Application"],
      originalPrice: "KSh 5,400",
      packagePrice: "KSh 4,200",
      savings: "22%",
      popular: false
    },
    {
      name: "Beard & Body Deluxe",
      description: "Specialized beard care combined with therapeutic body work",
      duration: "2 hours",
      included: ["Hot Towel Shave", "Beard Styling & Oil", "60-minute Deep Tissue Massage", "Neck & Shoulder Focus"],
      originalPrice: "KSh 4,600",
      packagePrice: "KSh 3,800",
      savings: "17%",
      popular: false
    },
    {
      name: "Father & Son Experience",
      description: "Bonding time with matching grooming services for two generations",
      duration: "2 hours",
      included: ["2 Haircuts (Adult + Kid)", "2 Hot Towel Treatments", "Father gets 30-min Massage", "Special Father-Son Photos"],
      originalPrice: "KSh 3,300",
      packagePrice: "KSh 2,800",
      savings: "15%",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      package: "Groom & Relax",
      rating: 5,
      comment: "Absolutely incredible experience! The haircut was perfect and the massage afterward was exactly what I needed after a stressful week."
    },
    {
      name: "David Kimani", 
      package: "Executive Reset",
      rating: 5,
      comment: "This package is worth every shilling. Professional service from start to finish, and I left feeling completely refreshed and looking sharp."
    },
    {
      name: "James & Alex Thompson",
      package: "Father & Son Experience", 
      rating: 5,
      comment: "Such a great bonding experience with my 8-year-old son. The staff was amazing with kids, and we both got great cuts!"
    }
  ];

  const packageFeatures = [
    {
      icon: Gift,
      title: "Gift Card Options",
      description: "Perfect for birthdays, holidays, or special occasions. Purchase gift cards for any package."
    },
    {
      icon: Users,
      title: "Couples Packages",
      description: "Book packages for two people simultaneously. Great for couples or friends wanting to relax together."
    },
    {
      icon: Star,
      title: "Priority Booking",
      description: "Package clients get priority scheduling and can book multiple services in advance."
    },
    {
      icon: Sparkles,
      title: "Exclusive Add-ons",
      description: "Access to premium add-ons like aromatherapy oils, premium products, and extended services."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-secondary to-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <div className="flex">
            <img 
              src={heroBarbershop} 
              alt="Barbershop services"
              className="w-1/2 h-full object-cover opacity-20"
            />
            <img 
              src={heroSpa} 
              alt="Spa services"
              className="w-1/2 h-full object-cover opacity-20"
            />
          </div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Grooming & Wellness Packages Nairobi
            </Badge>
            <h1 className="heading-hero text-primary-foreground">
              Complete Grooming & Wellness <span className="text-gradient-gold">Packages</span> in Nairobi
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Combine the precision of expert barbering with therapeutic massage at Nairobi's premier grooming destination. 
              Save money while enjoying complete grooming and wellness experiences at Pension Towers, Loita Street.
            </p>
            <Button 
              onClick={() => setIsBookingOpen(true)}
              className="btn-premium text-lg px-8 py-4"
            >
              Book This Package
            </Button>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              Featured Packages
            </Badge>
            <h2 className="heading-section text-primary">
              Curated Experiences for Every Need
            </h2>
            <p className="text-premium max-w-2xl mx-auto">
              Each package is thoughtfully designed to provide maximum value and relaxation. 
              All services included with significant savings over individual bookings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.name} className={`card-service relative ${pkg.popular ? 'ring-2 ring-accent' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Gift className="h-8 w-8 text-accent" />
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground line-through">
                        {pkg.originalPrice}
                      </div>
                      <div className="text-xl font-bold text-primary">
                        {pkg.packagePrice}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Save {pkg.savings}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="font-playfair text-2xl text-primary">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {pkg.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>Total Duration: {pkg.duration}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-primary">Package Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.included.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                          <Star className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => setIsBookingOpen(true)}
                    className={`w-full ${pkg.popular ? 'btn-premium' : 'btn-outline-premium'}`}
                  >
                    Book This Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              Package Benefits
            </Badge>
            <h2 className="heading-section text-primary">
              Why Choose Our Packages?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packageFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="card-premium text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-playfair text-lg font-semibold text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              Client Experiences
            </Badge>
            <h2 className="heading-section text-primary">
              What Our Package Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-premium">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground italic">
                    "{testimonial.comment}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-playfair font-semibold text-primary">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.package}
                        </p>
                      </div>
                      <Heart className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Ready for the Complete Experience?
            </Badge>
            <h2 className="heading-section text-primary-foreground">
              Book Your Package Today
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Don't just get a haircut or just get a massage. Experience the perfect combination 
              of grooming and relaxation with our specially curated packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => setIsBookingOpen(true)}
                className="btn-premium text-lg px-8 py-4"
              >
                Book Package Now
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline-premium bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-4"
              >
                Gift a Package
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

export default BundledPackages;