import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const services = [
    { name: "Haircut", href: "/services/haircut" },
    { name: "Nail Care", href: "/services/nail-care" },
    { name: "Massage", href: "/services/massage" },
    { name: "Facial", href: "/services/facial" },
    { name: "Waxing", href: "/services/waxing" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link
              to="/"
              className="flex items-center space-x-3 font-playfair text-2xl font-bold text-gray-400"
            >
              <img
                src={logo}
                alt="Baberia Cuts Platinum"
                className="w-[100px] h-[80px]"
              />
              <span>Baberia Cuts Platinum</span>
            </Link>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Premium grooming and relaxation experience combining expert
              barbering with luxury spa services. Where style meets serenity.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-secondary-foreground/70 hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/70 hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/70 hover:text-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-playfair text-lg font-semibold text-accent">
              Services
            </h3>
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

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-playfair text-lg font-semibold text-accent">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-secondary-foreground/80">Pension Towers</p>
                  <p className="text-secondary-foreground/80">
                    Loita Street, Nairobi
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+254123456789"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  +254 779 431 913
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@baberiacuts.co.ke"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  info@baberiacuts.co.ke
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-6">
            <h3 className="font-playfair text-lg font-semibold text-accent">
              Operating Hours
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-secondary-foreground/80">
                  <p className="font-medium">Monday - Saturday</p>
                  <p className="text-accent">8AM - 8PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 flex-shrink-0" />
                <div className="text-secondary-foreground/80">
                  <p className="font-medium">Sunday</p>
                  <p className="text-muted-foreground">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col text-gray-400 md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            Developed and maintained by{" "}
            <a href="https://mawirab.com" target="_blank" className="text-accent">
              Mawira.
            </a>
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} Baberia Cuts Platinum. All rights
            reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
