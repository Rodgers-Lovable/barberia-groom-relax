import { Link } from "react-router-dom";
import { Scissors, Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const services = [
    { name: "Classic Cuts", href: "/services/barbershop" },
    { name: "Beard Styling", href: "/services/barbershop" },
    { name: "Deep Tissue Massage", href: "/services/spa" },
    { name: "Hot Stone Therapy", href: "/services/spa" },
    { name: "Groom & Relax Combo", href: "/services/packages" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link 
              to="/" 
              className="flex items-center space-x-3 font-playfair text-2xl font-bold text-accent"
            >
              <Scissors className="h-8 w-8" />
              <span>Barberia Cuts</span>
            </Link>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Premium grooming and relaxation experience combining expert barbering with luxury spa services. Where style meets serenity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/70 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-playfair text-lg font-semibold text-primary">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href}
                    className="text-secondary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-playfair text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-playfair text-lg font-semibold text-primary">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-secondary-foreground/80">123 Style Street</p>
                  <p className="text-secondary-foreground/80">Nairobi CBD, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:+254123456789" 
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  +254 123 456 789
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:info@barberiacuts.com" 
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  info@barberiacuts.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-secondary-foreground/80">
                  <p>Mon-Fri: 8AM-8PM</p>
                  <p>Sat-Sun: 9AM-7PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-secondary-foreground/80 text-sm">
            © 2024 Barberia Cuts. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-secondary-foreground/80 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-secondary-foreground/80 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;