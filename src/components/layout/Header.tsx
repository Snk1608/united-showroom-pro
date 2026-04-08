import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import logoUnitedGroup from "@/assets/logo-united-group.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage, languageNames } = useLanguage();

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/products", label: t("nav.products") },
    { to: "/brands", label: t("nav.brands") },
    { to: "/offers", label: t("nav.offers") },
    { to: "/enquiry", label: t("nav.enquiry") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-card">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-1.5 text-xs md:text-sm">
          <span className="font-heading font-semibold tracking-wide">
            {t("header.topbar")}
          </span>
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+918912562737" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="w-3.5 h-3.5" />
              {t("header.callUs")}
            </a>
            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-2 py-0.5 rounded bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors text-xs"
              >
                <Globe className="w-3 h-3" />
                {languageNames[language]}
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-elevated overflow-hidden z-50 min-w-[120px]">
                  {(Object.keys(languageNames) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setLanguage(lang); setLangOpen(false); }}
                      className={`block w-full text-left px-3 py-2 text-sm transition-colors ${language === lang ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoUnitedGroup} alt="United Groups Logo" className="h-10 md:h-12 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-lg md:text-2xl font-bold text-primary tracking-tight">
              UNITED GROUPS
            </span>
            <span className="text-[9px] md:text-xs text-muted-foreground font-medium tracking-widest uppercase">
              {t("header.subtitle")}
            </span>
          </div>
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
          {/* Mobile language selector */}
          <div className="relative md:hidden">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="p-2 text-foreground"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5" />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-elevated overflow-hidden z-50 min-w-[120px]">
                {(Object.keys(languageNames) as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setLanguage(lang); setLangOpen(false); }}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${language === lang ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}
                  >
                    {languageNames[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a href="https://wa.me/918912562737" target="_blank" rel="noopener noreferrer">
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
