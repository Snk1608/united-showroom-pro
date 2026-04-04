import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/brands", label: "Brands" },
  { to: "/offers", label: "Offers" },
  { to: "/enquiry", label: "Enquiry" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-card">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-1.5 text-xs md:text-sm">
          <span className="font-heading font-semibold tracking-wide">
            UNITED GROUPS — Authorized Dealer of BOSCH & STIHL
          </span>
          <a
            href="tel:+918912562737"
            className="hidden md:flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Us
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-heading text-xl md:text-2xl font-bold text-primary tracking-tight">
            UNITED GROUPS
          </span>
          <span className="text-[10px] md:text-xs text-muted-foreground font-medium tracking-widest uppercase">
            Hardware &amp; Tools
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/918912562737"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="sm" className="hidden md:inline-flex">
              WhatsApp
            </Button>
          </a>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-card pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
