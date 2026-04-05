import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Offers = () => {
  const { data: offers = [] } = useQuery({
    queryKey: ["offers"],
    queryFn: async () => {
      const { data, error } = await supabase.from("offers").select("*").eq("is_active", true).order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <div>
      <section className="bg-accent-gradient py-12 md:py-16">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-accent-foreground mb-3">Current Offers</h1>
          <p className="text-accent-foreground/80">Don't miss out on our latest deals and promotions</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          {offers.length === 0 ? (
            <p className="text-center text-muted-foreground py-16">No active offers right now. Check back soon!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offers.map((offer) => (
                <div key={offer.id} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-elevated transition-all duration-300">
                  {offer.image_url && (
                    <img src={offer.image_url} alt={offer.title} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">{offer.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{offer.description}</p>
                    {offer.valid_until && (
                      <p className="text-xs text-accent mb-3">Valid until: {new Date(offer.valid_until).toLocaleDateString()}</p>
                    )}
                    <Link to="/enquiry"><Button size="sm">Enquire Now</Button></Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Offers;
