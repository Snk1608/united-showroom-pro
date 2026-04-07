import BannerCarousel from "@/components/home/BannerCarousel";
import BrandStrip from "@/components/home/BrandStrip";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import DivisionSection from "@/components/home/DivisionSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div>
      <BannerCarousel />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative container py-20 md:py-32 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-xs font-heading tracking-widest uppercase text-primary-foreground/80">
              {t("hero.authorizedDealer")}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
            UNITED GROUPS
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {t("hero.subtitle")} <strong>BOSCH</strong> &amp; <strong>STIHL</strong>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/products">
              <Button variant="hero" size="lg">
                {t("hero.browseProducts")} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/enquiry">
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground">
                {t("hero.sendEnquiry")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BrandStrip />
      <FeaturedProducts />
      <DivisionSection />

      <section className="py-16 bg-muted">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/enquiry">
              <Button size="lg">{t("cta.sendEnquiry")}</Button>
            </Link>
            <a href="https://wa.me/918912562737" target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg">{t("cta.chatWhatsApp")}</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
