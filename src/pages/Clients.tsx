import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const testimonials = [
  { name: "Rajesh Kumar", role: "Construction Contractor", text: "United Groups has been our go-to supplier for BOSCH tools. Genuine products, great prices, and excellent service.", rating: 5 },
  { name: "Priya Sharma", role: "Interior Designer", text: "The team is incredibly knowledgeable. They helped me choose the right tools for my projects. Highly recommended!", rating: 5 },
  { name: "Mohammed Ali", role: "Landscaping Professional", text: "Best place to buy STIHL equipment. Their after-sales service is unmatched. The United Agency team really knows their products.", rating: 5 },
  { name: "Suresh Patel", role: "Workshop Owner", text: "We've been purchasing from United Hardware Corporation for 8 years. Consistent quality and reliable delivery every time.", rating: 4 },
  { name: "Anita Desai", role: "Home Owner", text: "Bought a Stanley tool set and a BOSCH drill. Great experience! The staff was very patient in explaining everything.", rating: 5 },
  { name: "Vikram Singh", role: "Civil Engineer", text: "Their range of Makita and MAX tools is excellent. Professional-grade equipment at competitive prices.", rating: 4 },
];

const Clients = () => {
  const { t } = useLanguage();

  return (
    <div>
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-3">{t("clients.title")}</h1>
          <p className="text-primary-foreground/80">{t("clients.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-elevated transition-all duration-300">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < item.rating ? "text-stihl fill-stihl" : "text-muted"}`} />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 italic">"{item.text}"</p>
                <div>
                  <div className="font-heading font-semibold text-foreground">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
