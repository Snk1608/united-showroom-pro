import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Package, Image, Tag, MessageSquare } from "lucide-react";

const AdminDashboard = () => {
  const { data: products } = useQuery({ queryKey: ["admin-products-count"], queryFn: async () => { const { count } = await supabase.from("products").select("*", { count: "exact", head: true }); return count || 0; } });
  const { data: banners } = useQuery({ queryKey: ["admin-banners-count"], queryFn: async () => { const { count } = await supabase.from("banners").select("*", { count: "exact", head: true }); return count || 0; } });
  const { data: offers } = useQuery({ queryKey: ["admin-offers-count"], queryFn: async () => { const { count } = await supabase.from("offers").select("*", { count: "exact", head: true }); return count || 0; } });
  const { data: enquiries } = useQuery({ queryKey: ["admin-enquiries-count"], queryFn: async () => { const { count } = await supabase.from("enquiries").select("*", { count: "exact", head: true }); return count || 0; } });

  const stats = [
    { label: "Products", value: products ?? 0, icon: Package, color: "text-primary" },
    { label: "Banners", value: banners ?? 0, icon: Image, color: "text-accent" },
    { label: "Offers", value: offers ?? 0, icon: Tag, color: "text-stihl" },
    { label: "Enquiries", value: enquiries ?? 0, icon: MessageSquare, color: "text-destructive" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s) => (
        <div key={s.label} className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">{s.label}</span>
            <s.icon className={`w-5 h-5 ${s.color}`} />
          </div>
          <p className="font-heading text-3xl font-bold text-foreground">{s.value}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
