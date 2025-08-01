import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Scissors, Phone } from "lucide-react";
import { BookingModal } from "@/components/booking/BookingModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Memberships", href: "/memberships" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 font-playfair text-2xl font-bold text-primary hover:text-accent transition-colors"
            >
              <Scissors className="h-8 w-8 text-accent" />
              <span>Barberia Cuts</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-accent ${
                    isActive(item.href) 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="tel:+254123456789" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">Call Now</span>
              </a>
              <Button 
                onClick={() => setIsBookingOpen(true)}
                className="btn-premium"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
              <nav className="py-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 font-medium transition-colors hover:text-accent ${
                      isActive(item.href) 
                        ? "text-primary font-semibold bg-accent/10" 
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-4 border-t border-border space-y-3">
                  <a 
                    href="tel:+254123456789" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+254 123 456 789</span>
                  </a>
                  <Button 
                    onClick={() => {
                      setIsBookingOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="btn-premium w-full"
                  >
                    Book Appointment
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default Header;