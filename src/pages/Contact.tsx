import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div>
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-3">{t("contact.title")}</h1>
          <p className="text-primary-foreground/80">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold text-foreground">{t("contact.getInTouch")}</h2>

              {[
                { icon: MapPin, title: t("contact.visitUs"), content: t("contact.address") },
                { icon: Phone, title: t("contact.callUs"), content: "+91 89125 62737" },
                { icon: Mail, title: t("contact.emailUs"), content: "info@unitedgroups.com\nsales@unitedgroups.com" },
                { icon: Clock, title: t("contact.businessHours"), content: t("contact.hours") },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-4">
                <a href="https://wa.me/918912562737" target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp">{t("cta.chatWhatsApp")}</Button>
                </a>
                <a href="tel:+918912562737">
                  <Button variant="outline">{t("contact.callNow")}</Button>
                </a>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=United+Hardware+Corporation+Visakhapatnam&output=embed"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="United Groups Location - Visakhapatnam"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
