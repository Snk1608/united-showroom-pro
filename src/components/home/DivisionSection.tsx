import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const DivisionSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">{t("divisions.title")}</h2>
          <p className="text-muted-foreground">{t("divisions.subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-xl bg-hero-gradient p-8 md:p-10 text-primary-foreground">
            <div className="relative z-10">
              <span className="text-xs font-heading tracking-widest uppercase opacity-80">{t("divisions.division1")}</span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-3">United Hardware Corporation</h3>
              <p className="text-primary-foreground/80 text-sm mb-6">{t("divisions.uhcDesc")}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["BOSCH", "Stanley", "Makita", "MAX"].map((b) => (
                  <span key={b} className="px-3 py-1 bg-primary-foreground/15 rounded-full text-xs font-semibold">{b}</span>
                ))}
              </div>
              <Link to="/products">
                <Button variant="hero" size="lg">{t("divisions.exploreTools")} <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-stihl-gradient p-8 md:p-10 text-stihl-foreground">
            <div className="relative z-10">
              <span className="text-xs font-heading tracking-widest uppercase opacity-80">{t("divisions.division2")}</span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-3">United Agency</h3>
              <p className="text-stihl-foreground/80 text-sm mb-6">{t("divisions.uaDesc")}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-stihl-foreground/15 rounded-full text-xs font-semibold">STIHL</span>
              </div>
              <Link to="/products">
                <Button variant="stihl" size="lg">{t("divisions.viewStihl")} <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivisionSection;
