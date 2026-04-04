import BannerCarousel from "@/components/home/BannerCarousel";
import BrandStrip from "@/components/home/BrandStrip";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import DivisionSection from "@/components/home/DivisionSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div>
      {/* Banner Carousel */}
      <BannerCarousel />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative container py-20 md:py-32 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-xs font-heading tracking-widest uppercase text-primary-foreground/80">
              Authorized Dealer
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
            UNITED GROUPS
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Your trusted partner for industrial tools &amp; equipment.
            Authorized dealer of <strong>BOSCH</strong> &amp; <strong>STIHL</strong>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/products">
              <Button variant="hero" size="lg">
                Browse Products <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/enquiry">
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Send Enquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BrandStrip />
      <FeaturedProducts />
      <DivisionSection />

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need the Right Tool?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Get in touch with us for product enquiries, bulk orders, or expert advice on the best tools for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/enquiry">
              <Button size="lg">Send an Enquiry</Button>
            </Link>
            <a href="https://wa.me/918912562737" target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg">Chat on WhatsApp</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
