import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Scissors, Phone, Calendar } from "lucide-react";
import { BookingModal } from "@/components/booking/BookingModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();

  const leftNavigation = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  const rightNavigation = [
    { name: "Memberships", href: "/memberships" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Announcement Ribbon */}
      <div className="bg-accent text-accent-foreground text-center py-2 text-sm font-medium animate-pulse">
        <Calendar className="inline h-4 w-4 mr-2" />
        Now Accepting Appointments - Book Today!
      </div>

      <header className="fixed top-8 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 items-center h-20">
            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 justify-start">
              {leftNavigation.map((item) => (
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

            {/* Center Logo */}
            <Link 
              to="/" 
              className="flex items-center justify-center space-x-3 font-playfair text-2xl font-bold text-primary hover:text-accent transition-colors"
            >
              <Scissors className="h-8 w-8 text-accent" />
              <span>Barberia Cuts</span>
            </Link>

            {/* Right Navigation & CTAs */}
            <div className="hidden lg:flex items-center justify-end space-x-6">
              <nav className="flex items-center space-x-8">
                {rightNavigation.map((item) => (
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
              <div className="flex items-center space-x-3">
                <a 
                  href="tel:+254123456789" 
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">Call</span>
                </a>
                <Button 
                  onClick={() => setIsBookingOpen(true)}
                  className="btn-premium"
                >
                  Book Now
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden justify-self-end p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
              <nav className="py-4 space-y-4">
                {[...leftNavigation, ...rightNavigation].map((item) => (
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

      {/* Floating Mobile CTA */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Button 
          onClick={() => setIsBookingOpen(true)}
          className="btn-premium rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <Calendar className="h-6 w-6" />
        </Button>
      </div>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default Header;