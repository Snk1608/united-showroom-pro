import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/i18n/LanguageContext";

const Enquiry = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", product: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from("enquiries").insert(form);
      if (error) throw error;
      toast.success(t("enquiry.success"));
      setForm({ name: "", phone: "", email: "", product: "", message: "" });
    } catch (err: any) {
      toast.error(err.message || "Failed to submit enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-3">{t("enquiry.title")}</h1>
          <p className="text-primary-foreground/80">{t("enquiry.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-2xl">
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-5 shadow-card">
            {[
              { label: t("enquiry.fullName"), key: "name", type: "text", required: true },
              { label: t("enquiry.phone"), key: "phone", type: "tel", required: true },
              { label: t("enquiry.product"), key: "product", type: "text", required: true },
              { label: t("enquiry.email"), key: "email", type: "email", required: false },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  {field.label}{field.required && <span className="text-destructive ml-0.5">*</span>}
                </label>
                <input
                  type={field.type}
                  required={field.required}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">{t("enquiry.message")}</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? t("enquiry.submitting") : t("enquiry.submit")}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
