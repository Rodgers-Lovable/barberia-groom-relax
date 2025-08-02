import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { OperatingHours } from "@/components/OperatingHours";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_CONTACT_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
} from "@/config/env";
import { BookingModal } from "@/components/booking/BookingModal";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit your message.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        to_name: "Baberia Cuts Platinum",
        from_name: formData.name,
        from_email: formData.email,
        message_type: "feedback",
        message: formData.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Show success animation
      const successElement = document.createElement("div");
      successElement.className =
        "fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 animate-fade-in-scale";
      successElement.innerHTML = `
        <div class="bg-background p-8 rounded-xl shadow-xl text-center animate-bounce-subtle">
          <div class="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-primary mb-2">Message Sent!</h3>
          <p class="text-muted-foreground">We'll get back to you within 24 hours.</p>
        </div>
      `;
      document.body.appendChild(successElement);

      setTimeout(() => {
        document.body.removeChild(successElement);
      }, 2000);

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Email server error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Pension Towers, Loita Street", "Nairobi CBD, Kenya"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 779431913"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@baberiacuts.co.ke", "bookings@baberiacuts.co.ke"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Contact Baberia Cuts Platinum
            </Badge>
            <h1 className="heading-hero text-white">
              Visit Nairobi's Premier{" "}
              <span className="text-gradient-gold">
                Grooming & Wellness Center
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Ready to experience Nairobi's finest grooming and wellness
              service? Contact <strong>Baberia Cuts Platinum</strong> today to
              book your appointment at our premium facility
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="text-primary border-primary/30"
                >
                  Send us a message
                </Badge>
                <h2 className="heading-section text-primary">
                  Let's Start a Conversation
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <Card className="card-premium">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-primary">
                    Contact Form
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-primary font-medium"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="transition-colors focus:border-accent"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-primary font-medium"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        className="transition-colors focus:border-accent"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-primary font-medium"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-32 transition-colors focus:border-accent resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full btn-premium"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="text-primary border-primary/30"
                >
                  Contact Information
                </Badge>
                <h2 className="heading-section text-primary">
                  Visit Our Location
                </h2>
                <p className="text-muted-foreground">
                  Find us in the heart of Nairobi CBD, easily accessible and
                  ready to serve you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <Card key={info.title} className="card-premium">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-accent" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-playfair text-lg font-semibold text-primary">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, index) => (
                                <p
                                  key={index}
                                  className="text-muted-foreground"
                                >
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}

                {/* Operating Hours Card */}
                <OperatingHours variant="table" showLocation={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              Find Us
            </Badge>
            <h2 className="heading-section text-primary">Our Location</h2>
          </div>

          <Card className="card-premium overflow-hidden">
            <div className="aspect-video bg-background">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5188.578514990373!2d36.81518307602585!3d-1.2836049356253845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d3d86cf0b5%3A0x788a99b304b7766f!2sBaberia%20Cuts%20Barbershop!5e1!3m2!1sen!2ske!4v1754065159832!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Baberia Cuts Platinum - Pension Towers, Loita Street"
              ></iframe>
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Ready to Book?
            </Badge>
            <h2 className="heading-section text-primary-foreground">
              Don't Wait - Transform Today
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Skip the wait and book your appointment now. Experience the
              Baberia Cuts Platinum difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => {
                  setIsBookingOpen(true);
                  // setIsMenuOpen(false);
                }}
                className="btn-premium text-lg px-8 py-4"
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                className="btn-outline-premium bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-4"
              >
                Call Now: +254 779431913
              </Button>
            </div>
          </div>
        </div>

        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
