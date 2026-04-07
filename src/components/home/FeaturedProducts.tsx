import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Zap, TreePine, Settings } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const FeaturedProducts = () => {
  const { t } = useLanguage();

  const categories = [
    { icon: Zap, title: t("featured.powerTools"), description: t("featured.powerToolsDesc"), color: "bg-primary/10 text-primary" },
    { icon: Wrench, title: t("featured.handTools"), description: t("featured.handToolsDesc"), color: "bg-accent/10 text-accent" },
    { icon: TreePine, title: t("featured.outdoorEquipment"), description: t("featured.outdoorEquipmentDesc"), color: "bg-stihl/10 text-stihl" },
    { icon: Settings, title: t("featured.accessories"), description: t("featured.accessoriesDesc"), color: "bg-primary/10 text-primary" },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">{t("featured.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("featured.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="group bg-card rounded-lg border border-border p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-lg ${cat.color} flex items-center justify-center mb-4`}>
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{cat.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{cat.description}</p>
              <Link to="/products">
                <Button variant="outline" size="sm">{t("featured.viewProducts")}</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
