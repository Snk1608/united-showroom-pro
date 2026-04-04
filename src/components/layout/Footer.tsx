import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-2">UNITED GROUPS</h3>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Authorized dealer of BOSCH, STIHL, Stanley, Black &amp; Decker, Makita, and MAX.
            </p>
            <div className="flex gap-3">
              <span className="px-2 py-1 bg-primary-foreground/10 rounded text-xs font-heading font-semibold">
                United Hardware Corporation
              </span>
              <span className="px-2 py-1 bg-stihl/20 rounded text-xs font-heading font-semibold text-stihl">
                United Agency
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {[
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/brands", label: "Brands" },
                { to: "/offers", label: "Offers" },
                { to: "/enquiry", label: "Enquiry" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Our Brands</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {["BOSCH", "STIHL", "Stanley", "Black & Decker", "Makita", "MAX"].map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>123 Industrial Area, Main Road, City - 000000</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+910000000000" className="hover:text-primary-foreground">+91 00000 00000</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@unitedgroups.com" className="hover:text-primary-foreground">info@unitedgroups.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} United Groups. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
