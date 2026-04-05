import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Enquiry = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", product: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from("enquiries").insert(form);
      if (error) throw error;
      toast.success("Enquiry submitted successfully! We'll get back to you soon.");
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
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-3">Send an Enquiry</h1>
          <p className="text-primary-foreground/80">We'd love to hear from you. Fill out the form below.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-2xl">
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-5 shadow-card">
            {[
              { label: "Full Name", key: "name", type: "text", required: true },
              { label: "Phone Number", key: "phone", type: "tel", required: true },
              { label: "Email Address", key: "email", type: "email", required: true },
              { label: "Product of Interest", key: "product", type: "text", required: false },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
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
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Submitting..." : "Submit Enquiry"}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
