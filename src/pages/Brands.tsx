import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import boschLogo from "@/assets/brands/bosch.png";
import stihlLogo from "@/assets/brands/stihl.png";
import stanleyLogo from "@/assets/brands/stanley.png";
import blackdeckerLogo from "@/assets/brands/blackdecker.png";
import makitaLogo from "@/assets/brands/makita.png";
import maxLogo from "@/assets/brands/max.png";
import { useLanguage } from "@/i18n/LanguageContext";

const brandsData = [
  { name: "BOSCH", logo: boschLogo, tagline: "Invented for life", description: "World-leading power tools and accessories for professionals and DIY enthusiasts.", color: "bg-primary/10 border-primary/20" },
  { name: "STIHL", logo: stihlLogo, tagline: "The number one selling brand", description: "Premium outdoor power equipment — chainsaws, trimmers, blowers and more.", color: "bg-stihl/10 border-stihl/20" },
  { name: "Stanley", logo: stanleyLogo, tagline: "Make something great", description: "Trusted hand tools, storage solutions and measuring instruments since 1843.", color: "bg-foreground/5 border-foreground/10" },
  { name: "Black & Decker", logo: blackdeckerLogo, tagline: "Ideas that work", description: "Innovative home improvement and DIY power tools for every household.", color: "bg-accent/10 border-accent/20" },
  { name: "Makita", logo: makitaLogo, tagline: "Rule the outdoors", description: "Industrial-grade power tools and equipment built for performance.", color: "bg-primary/10 border-primary/20" },
  { name: "MAX", logo: maxLogo, tagline: "Professional fastening", description: "Automatic rebar tying tools and professional construction equipment.", color: "bg-foreground/5 border-foreground/10" },
];

const Brands = () => {
  const { t } = useLanguage();

  return (
    <div>
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-3">{t("brands.title")}</h1>
          <p className="text-primary-foreground/80">{t("brands.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandsData.map((brand) => (
              <div key={brand.name} className={`rounded-xl border-2 p-8 text-center ${brand.color} transition-all hover:shadow-elevated hover:-translate-y-1 duration-300`}>
                <img src={brand.logo} alt={`${brand.name} logo`} loading="lazy" className="h-16 w-auto object-contain mx-auto mb-4" />
                <p className="text-xs italic text-muted-foreground mb-3">{brand.tagline}</p>
                <p className="text-sm text-muted-foreground mb-6">{brand.description}</p>
                <Link to="/products">
                  <Button variant="outline" size="sm">{t("featured.viewProducts")}</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
