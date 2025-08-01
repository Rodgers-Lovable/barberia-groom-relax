import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookingModal } from "@/components/booking/BookingModal";
import { 
  Scissors, 
  Waves, 
  Star, 
  Calendar, 
  Award,
  Instagram,
  MessageCircle
} from "lucide-react";

const Team = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const barbers = [
    {
      name: "Marcus Johnson",
      title: "Senior Master Barber",
      experience: "8 years",
      specialties: ["Classic Cuts", "Beard Sculpting", "Fades", "Traditional Shaves"],
      bio: "Marcus brings old-school craftsmanship with modern techniques. Known for his precision with classic cuts and artistic approach to beard styling.",
      rating: 4.9,
      avatar: "MJ",
      instagram: "@marcus_cuts",
      certifications: ["Master Barber License", "Beard Specialist Certification"]
    },
    {
      name: "David Kimani",
      title: "Creative Barber",
      experience: "5 years", 
      specialties: ["Modern Fades", "Creative Styling", "Kids Cuts", "Hair Art"],
      bio: "David specializes in contemporary styles and creative cuts. Popular with younger clients and known for his innovative fade techniques.",
      rating: 4.8,
      avatar: "DK",
      instagram: "@david_fades",
      certifications: ["Professional Barber License", "Advanced Fade Techniques"]
    },
    {
      name: "Samuel Odhiambo",
      title: "Traditional Barber",
      experience: "12 years",
      specialties: ["Hot Towel Shaves", "Mustache Styling", "Classic Cuts", "Grooming Consultation"],
      bio: "Samuel is our master of traditional barbering techniques. His hot towel shaves and mustache styling are legendary among our clients.",
      rating: 5.0,
      avatar: "SO", 
      instagram: "@samuel_traditional",
      certifications: ["Traditional Barber Master", "Shaving Specialist"]
    }
  ];

  const therapists = [
    {
      name: "Sarah Mitchell",
      title: "Licensed Massage Therapist",
      experience: "6 years",
      specialties: ["Swedish Massage", "Deep Tissue", "Sports Massage", "Trigger Point"],
      bio: "Sarah combines therapeutic expertise with a calming presence. Specializes in relieving stress and muscle tension for busy professionals.",
      rating: 4.9,
      avatar: "SM",
      instagram: "@sarah_healing",
      certifications: ["Licensed Massage Therapist", "Sports Massage Specialist"]
    },
    {
      name: "Lisa Wanjiku",
      title: "Spa Wellness Specialist",
      experience: "7 years",
      specialties: ["Hot Stone Therapy", "Aromatherapy", "Reflexology", "Facial Treatments"],
      bio: "Lisa creates transformative wellness experiences. Her hot stone therapy and aromatherapy sessions provide deep relaxation and rejuvenation.",
      rating: 4.9,
      avatar: "LW",
      instagram: "@lisa_wellness",
      certifications: ["Certified Spa Therapist", "Aromatherapy Specialist", "Hot Stone Certified"]
    },
    {
      name: "Grace Akinyi",
      title: "Holistic Therapist", 
      experience: "4 years",
      specialties: ["Prenatal Massage", "Couples Therapy", "Stress Relief", "Wellness Coaching"],
      bio: "Grace focuses on holistic wellness and stress management. Popular for couples sessions and her gentle approach to prenatal care.",
      rating: 4.8,
      avatar: "GA",
      instagram: "@grace_holistic",
      certifications: ["Holistic Therapy Certification", "Prenatal Massage Specialist"]
    }
  ];

  const TeamMemberCard = ({ member, type }: { member: any, type: 'barber' | 'therapist' }) => {
    const icon = type === 'barber' ? Scissors : Waves;
    const IconComponent = icon;
    
    return (
      <Card className="card-premium group">
        <CardContent className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
              {member.avatar}
            </div>
            <div className="flex-1">
              <h3 className="font-playfair text-xl font-semibold text-primary">
                {member.name}
              </h3>
              <p className="text-muted-foreground font-medium">{member.title}</p>
              <div className="flex items-center space-x-4 mt-2">
                <Badge variant="secondary" className="text-xs">
                  <IconComponent className="h-3 w-3 mr-1" />
                  {member.experience}
                </Badge>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-medium">{member.rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {member.bio}
          </p>

          {/* Specialties */}
          <div className="space-y-2">
            <h4 className="font-semibold text-primary text-sm">Specialties:</h4>
            <div className="flex flex-wrap gap-2">
              {member.specialties.map((specialty: string) => (
                <Badge key={specialty} variant="outline" className="text-xs">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h4 className="font-semibold text-primary text-sm flex items-center">
              <Award className="h-4 w-4 mr-1" />
              Certifications:
            </h4>
            <div className="space-y-1">
              {member.certifications.map((cert: string) => (
                <div key={cert} className="text-xs text-muted-foreground flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <a 
              href={`https://instagram.com/${member.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram className="h-4 w-4" />
              <span className="text-sm">{member.instagram}</span>
            </a>
            <Button 
              size="sm"
              onClick={() => setIsBookingOpen(true)}
              className="btn-outline-premium text-xs px-4 py-2"
            >
              <Calendar className="h-3 w-3 mr-1" />
              Book with {member.name.split(' ')[0]}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-secondary to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Meet Our Team
            </Badge>
            <h1 className="heading-hero text-primary-foreground">
              Expert Hands, <span className="text-gradient-gold">Caring Hearts</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Our skilled professionals combine years of experience with genuine passion for their craft. 
              Get to know the artists behind your perfect look and ultimate relaxation.
            </p>
          </div>
        </div>
      </section>

      {/* Team Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="barbers" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="barbers" className="flex items-center space-x-2">
                  <Scissors className="h-4 w-4" />
                  <span>Master Barbers</span>
                </TabsTrigger>
                <TabsTrigger value="therapists" className="flex items-center space-x-2">
                  <Waves className="h-4 w-4" />
                  <span>Spa Therapists</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="barbers" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="heading-section text-primary">Master Barbers</h2>
                <p className="text-premium max-w-2xl mx-auto">
                  Our skilled barbers combine traditional techniques with modern styles to deliver 
                  precision cuts and exceptional grooming experiences.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {barbers.map((barber) => (
                  <TeamMemberCard key={barber.name} member={barber} type="barber" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="therapists" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="heading-section text-primary">Spa Therapists</h2>
                <p className="text-premium max-w-2xl mx-auto">
                  Our licensed massage therapists and wellness specialists create transformative 
                  experiences that restore balance and promote deep relaxation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {therapists.map((therapist) => (
                  <TeamMemberCard key={therapist.name} member={therapist} type="therapist" />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Team CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="heading-section text-primary">
              Have a Preferred Professional?
            </h2>
            <p className="text-premium">
              Book directly with your favorite barber or therapist. Our team is here to provide 
              personalized service that meets your unique needs and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => setIsBookingOpen(true)}
                className="btn-premium text-lg px-8 py-4"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book with Your Preferred Pro
              </Button>
              <Button 
                variant="outline"
                className="btn-outline-premium text-lg px-8 py-4"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat with Our Team
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

export default Team;