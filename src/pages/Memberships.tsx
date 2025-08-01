import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookingModal } from "@/components/booking/BookingModal";
import { Crown, Scissors, Sparkles, Users, Gift, Calendar, Phone, DollarSign, Star } from "lucide-react";
import heroBarbershop from "@/assets/hero-barbershop.jpg";

const Memberships = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const membershipTiers = [
    {
      name: "Classic Plan",
      price: "KSh 3,200",
      period: "per month",
      description: "Perfect for regular grooming maintenance",
      icon: Scissors,
      features: [
        "2 Haircuts per month",
        "10% discount on additional services",
        "Priority booking",
        "Birthday month special offer",
        "Free hot towel treatment with cuts"
      ],
      popular: false
    },
    {
      name: "Relax & Groom Plan", 
      price: "KSh 5,800",
      period: "per month",
      description: "Complete grooming and wellness package",
      icon: Sparkles,
      features: [
        "1 Massage (60min) per month",
        "1 Haircut per month", 
        "15% discount on all services",
        "Complimentary beard trim quarterly",
        "Priority booking & extended hours access",
        "Exclusive member events"
      ],
      popular: true
    },
    {
      name: "Executive Plan",
      price: "KSh 8,500", 
      period: "per month",
      description: "Unlimited grooming for busy professionals",
      icon: Crown,
      features: [
        "Unlimited haircuts",
        "Priority same-day booking",
        "20% discount on massage services",
        "Complimentary beard maintenance",
        "Personal barber assignment",
        "Executive lounge access",
        "Quarterly package treatments"
      ],
      popular: false
    }
  ];

  const memberBenefits = [
    {
      icon: DollarSign,
      title: "Significant Savings",
      description: "Save 15-30% compared to individual service pricing"
    },
    {
      icon: Calendar,
      title: "Priority Booking",
      description: "Skip the wait with priority scheduling and same-day availability"
    },
    {
      icon: Gift,
      title: "Exclusive Perks",
      description: "Birthday specials, referral bonuses, and member-only events"
    },
    {
      icon: Users,
      title: "Referral Rewards",
      description: "Earn credits for every friend you refer who becomes a member"
    }
  ];

  const faqs = [
    {
      question: "How does the membership billing work?",
      answer: "Memberships are billed monthly on the anniversary of your signup date. You can pay via M-Pesa, bank transfer, or credit card. Services reset at the beginning of each billing cycle."
    },
    {
      question: "Can I pause or cancel my membership?",
      answer: "Yes, you can pause your membership for up to 3 months or cancel with 30 days notice. Unused services from the current month can be used during your notice period."
    },
    {
      question: "What happens if I don't use all my services in a month?",
      answer: "Classic Plan services expire at month-end. Relax & Groom and Executive members can roll over up to 2 unused services to the following month."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Absolutely! You can change your membership tier at any time. Changes take effect on your next billing cycle, and we'll prorate any differences."
    },
    {
      question: "Are there any additional fees?",
      answer: "No hidden fees! Your monthly membership fee covers everything listed in your plan. The only additional costs would be for services beyond your plan's inclusions."
    },
    {
      question: "Can I book for friends and family?",
      answer: "Membership services are for the member only, but you can use your member discounts when booking services for others. Plus, refer friends to earn member credits!"
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
            alt="Exclusive membership benefits"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Exclusive Memberships
            </Badge>
            <h1 className="heading-hero text-primary-foreground">
              Join the <span className="text-gradient-gold">Barberia Cuts</span> Family
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Unlock exclusive benefits, priority booking, and significant savings with our membership program. 
              Perfect for clients who value consistent quality, convenience, and exceptional service.
            </p>
            <Button 
              onClick={() => setIsBookingOpen(true)}
              className="btn-premium text-lg px-8 py-4"
            >
              Join the Club
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              Membership Plans
            </Badge>
            <h2 className="heading-section text-primary">
              Choose Your Perfect Plan
            </h2>
            <p className="text-premium max-w-2xl mx-auto">
              Each membership tier is designed to fit different lifestyles and grooming needs. 
              All plans include exclusive member benefits and significant savings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <Card key={tier.name} className={`card-service relative ${tier.popular ? 'ring-2 ring-accent scale-105' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-accent text-accent-foreground px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="space-y-4 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    
                    <CardTitle className="font-playfair text-2xl text-primary">
                      {tier.name}
                    </CardTitle>
                    
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">
                        {tier.price}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {tier.period}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm">
                      {tier.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start space-x-3">
                          <Star className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      onClick={() => setIsBookingOpen(true)}
                      className={`w-full ${tier.popular ? 'btn-premium' : 'btn-outline-premium'}`}
                    >
                      {tier.popular ? 'Choose This Plan' : 'Select Plan'}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              Member Benefits
            </Badge>
            <h2 className="heading-section text-primary">
              Why Our Members Love Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title} className="card-premium text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-playfair text-lg font-semibold text-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="outline" className="text-primary border-primary/30">
                Frequently Asked Questions
              </Badge>
              <h2 className="heading-section text-primary">
                Everything You Need to Know
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

      {/* Contact Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent/20 text-accent border-accent/30">
                Ready to Join?
              </Badge>
              <h2 className="heading-section text-primary-foreground">
                Start Your Membership Today
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Join hundreds of satisfied members who enjoy consistent quality, 
                convenience, and significant savings on their grooming and wellness needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setIsBookingOpen(true)}
                  className="btn-premium"
                >
                  Join Now
                </Button>
                <Button 
                  variant="outline" 
                  className="btn-outline-premium bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call for Details
                </Button>
              </div>
            </div>

            <Card className="card-premium">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-primary">
                    Member Portal Access
                  </h3>
                  <p className="text-muted-foreground">
                    Once you become a member, you'll get access to our exclusive member portal 
                    where you can manage bookings, track your benefits, and connect with other members.
                  </p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Online booking</span>
                    <span className="text-accent">✓</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Service history</span>
                    <span className="text-accent">✓</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Reward tracking</span>
                    <span className="text-accent">✓</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-muted-foreground">Exclusive offers</span>
                    <span className="text-accent">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>
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

export default Memberships;