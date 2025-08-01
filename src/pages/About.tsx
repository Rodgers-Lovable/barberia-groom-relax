import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Scissors, Heart, Users, Award, Target, Clock } from "lucide-react";
import heroBarberShop from "@/assets/hero-barbershop.jpg";

const About = () => {
  const values = [
    {
      icon: Scissors,
      title: "Craftsmanship",
      description: "Every cut, every shave, every massage is performed with meticulous attention to detail and years of expertise."
    },
    {
      icon: Heart,
      title: "Wellness Focus",
      description: "We believe grooming and relaxation go hand in hand, offering a holistic approach to self-care."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting relationships with our clients through trust, consistency, and exceptional service."
    }
  ];

  const achievements = [
    {
      icon: Award,
      number: "500+",
      label: "Happy Clients"
    },
    {
      icon: Clock,
      number: "5+",
      label: "Years Experience"
    },
    {
      icon: Target,
      number: "98%",
      label: "Satisfaction Rate"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-secondary to-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              About Barberia Cuts
            </Badge>
            <h1 className="heading-hero text-primary-foreground">
              Where Tradition Meets <span className="text-gradient-gold">Innovation</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Founded on the belief that every man deserves to look and feel his best, 
              Barberia Cuts combines classic barbering techniques with modern spa wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="text-primary border-primary/30">
                Our Story
              </Badge>
              <h2 className="heading-section text-primary">
                Redefining Men's Grooming
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  What started as a passion for the art of barbering has evolved into Nairobi's premier 
                  destination for men's grooming and wellness. We recognized that modern men need more 
                  than just a haircut – they need a space to unwind, recharge, and emerge feeling confident.
                </p>
                <p>
                  Our unique approach combines the precision and tradition of classic barbering with 
                  the therapeutic benefits of professional massage therapy. This dual offering creates 
                  an experience that addresses both style and wellness.
                </p>
                <p>
                  Every team member is carefully selected for their expertise, professionalism, and 
                  commitment to our values. We're not just creating great haircuts – we're building 
                  a community of men who value quality, authenticity, and self-care.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroBarberShop} 
                  alt="Barberia Cuts interior"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              Our Values
            </Badge>
            <h2 className="heading-section text-primary">
              What Drives Us
            </h2>
            <p className="text-premium max-w-2xl mx-auto">
              Our core values shape every interaction, every service, and every experience we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="card-premium text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-primary">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Our Impact
            </Badge>
            <h2 className="heading-section text-primary-foreground">
              Proven Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div key={achievement.label} className="text-center space-y-4">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="h-10 w-10 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <div className="font-playfair text-4xl font-bold text-primary-foreground">
                      {achievement.number}
                    </div>
                    <p className="text-primary-foreground/80 font-medium">
                      {achievement.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge variant="outline" className="text-primary border-primary/30">
              Our Mission
            </Badge>
            <h2 className="heading-section text-primary">
              Elevating the Standard
            </h2>
            <blockquote className="text-2xl font-playfair text-primary leading-relaxed italic">
              "To provide an unparalleled grooming and wellness experience that combines 
              traditional barbering artistry with modern therapeutic practices, creating a 
              sanctuary where men can look sharp, feel refreshed, and embrace their confidence."
            </blockquote>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;