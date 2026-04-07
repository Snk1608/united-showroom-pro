import { Shield, Users, Award, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Clock, label: t("about.yearsExp"), value: "60+" },
    { icon: Users, label: t("about.happyCustomers"), value: "5000+" },
    { icon: Award, label: t("about.brandsPartnered"), value: "20+" },
    { icon: Shield, label: t("about.authorizedDealer"), value: t("about.certified") },
  ];

  return (
    <div>
      <section className="bg-hero-gradient py-16 md:py-24">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t("about.title")}
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">{t("about.subtitle")}</p>
        </div>
      </section>

      <section className="py-12 bg-card border-b border-border">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">{t("about.ourStory")}</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{t("about.story1")}</p>
            <p>{t("about.story2")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-primary mb-2">United Hardware Corporation</h3>
              <p className="text-muted-foreground text-sm">{t("about.uhcDesc")}</p>
            </div>
            <div className="bg-card border border-stihl/30 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-stihl mb-2">United Agency</h3>
              <p className="text-muted-foreground text-sm">{t("about.uaDesc")}</p>
            </div>
          </div>

          <div className="mt-10 space-y-4 text-muted-foreground leading-relaxed">
            <h3 className="font-heading text-2xl font-bold text-foreground">{t("about.ourMission")}</h3>
            <p>{t("about.missionText")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
