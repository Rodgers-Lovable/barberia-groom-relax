import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookingModal } from "@/components/booking/BookingModal";
import { Scissors, Clock, DollarSign, Star, Camera, Users } from "lucide-react";
import heroBarbershop from "@/assets/hero-barbershop.jpg";
import toolsArrangement from "@/assets/tools-arrangement.jpg";

const BarbershopServices = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      name: "Classic Cut",
      description: "Timeless styling with precision cutting techniques for a clean, professional look",
      duration: "45 minutes",
      benefits: ["Consultation included", "Wash & conditioning", "Styling & finishing"],
      price: "KSh 800"
    },
    {
      name: "Skin Fade",
      description: "Modern gradient cutting that seamlessly blends hair from skin to desired length",
      duration: "60 minutes", 
      benefits: ["Precision blade work", "Multiple fade levels", "Sharp line definition"],
      price: "KSh 1,200"
    },
    {
      name: "Beard Trim & Shape",
      description: "Expert beard grooming to enhance your facial structure and personal style",
      duration: "30 minutes",
      benefits: ["Hot towel treatment", "Precision trimming", "Beard oil application"],
      price: "KSh 600"
    },
    {
      name: "Hot Towel Shave",
      description: "Traditional wet shave experience with hot towel treatment and premium products",
      duration: "45 minutes",
      benefits: ["Pre-shave oil", "Hot towel application", "Aftershave balm"],
      price: "KSh 1,000"
    },
    {
      name: "Kid's Cut",
      description: "Gentle, patient service specially designed for young clients aged 3-12",
      duration: "30 minutes",
      benefits: ["Child-friendly environment", "Quick & efficient", "Fun experience"],
      price: "KSh 500"
    }
  ];

  const faqs = [
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit includes a thorough consultation where we discuss your style preferences, hair type, and lifestyle. We'll recommend the best cut and provide styling tips for home maintenance."
    },
    {
      question: "Do you accept walk-ins or appointments only?",
      answer: "We accept both walk-ins and appointments. However, we highly recommend booking in advance to ensure your preferred time slot and barber availability."
    },
    {
      question: "How often should I get a haircut?",
      answer: "For most men, we recommend a haircut every 3-4 weeks to maintain the shape and style. Those with shorter cuts may need touch-ups every 2-3 weeks."
    },
    {
      question: "What products do you use?",
      answer: "We use only premium, professional-grade products from trusted brands. All our tools are sanitized between clients, and we follow strict hygiene protocols."
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
            src={heroBarbershop} 
            alt="Professional barbershop services"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Barbershop Services
            </Badge>
            <h1 className="heading-hero text-primary-foreground">
              Master <span className="text-gradient-gold">Craftsmanship</span> in Every Cut
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Experience high-end grooming with our expert barbers. From classic cuts to modern fades, 
              we deliver precision styling that reflects your personal style and professional image.
            </p>
            <Button 
              onClick={() => setIsBookingOpen(true)}
              className="btn-premium text-lg px-8 py-4"
            >
              Book Your Cut
            </Button>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              Our Expertise
            </Badge>
            <h2 className="heading-section text-primary">
              Barbershop Services Menu
            </h2>
            <p className="text-premium max-w-2xl mx-auto">
              Each service is performed by certified master barbers with years of experience in men's grooming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.name} className="card-service group">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Scissors className="h-8 w-8 text-accent" />
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
                          <Star className="h-3 w-3 text-accent" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full btn-outline-premium"
                  >
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              Our Work
            </Badge>
            <h2 className="heading-section text-primary">
              Precision in Action
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-premium overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={toolsArrangement}
                  alt="Professional barbershop tools"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Camera className="h-6 w-6 text-accent mb-2" />
                  <h3 className="font-playfair text-lg font-semibold">Professional Tools</h3>
                </div>
              </div>
            </Card>

            <Card className="card-premium">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-playfair text-xl font-semibold text-primary">
                    Client Transformations
                  </h3>
                  <p className="text-muted-foreground">
                    Follow us on Instagram @barberiacuts to see our latest client transformations, 
                    behind-the-scenes content, and styling inspiration.
                  </p>
                  <Button className="btn-outline-premium">
                    View Gallery
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="outline" className="text-primary border-primary/30">
                Questions & Answers
              </Badge>
              <h2 className="heading-section text-primary">
                What to Expect
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-playfair text-lg text-primary hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Ready for a Fresh Look?
            </Badge>
            <h2 className="heading-section text-primary-foreground">
              Experience the Difference
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Join hundreds of satisfied clients who trust Barberia Cuts for their grooming needs. 
              Book your appointment today and discover what precision barbering feels like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => setIsBookingOpen(true)}
                className="btn-premium text-lg px-8 py-4"
              >
                Book Your Cut Now
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

export default BarbershopServices;