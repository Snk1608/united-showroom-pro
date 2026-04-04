import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const offers = [
  { id: 1, title: "20% Off BOSCH Power Tools", description: "Limited time offer on selected BOSCH drills and grinders.", badge: "Hot Deal" },
  { id: 2, title: "STIHL Chainsaw Bundle", description: "Buy any STIHL chainsaw and get a free chain sharpening kit.", badge: "Bundle" },
  { id: 3, title: "Stanley Tool Sets", description: "Flat 15% off on all Stanley professional tool sets.", badge: "Sale" },
  { id: 4, title: "Free Delivery on Bulk Orders", description: "Order above ₹25,000 and get free delivery across the region.", badge: "Free Shipping" },
];

const Offers = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offers.map((offer) => (
              <div key={offer.id} className="bg-card border border-border rounded-xl p-6 hover:shadow-elevated transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                  {offer.badge}
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{offer.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{offer.description}</p>
                <Link to="/enquiry">
                  <Button size="sm">Enquire Now</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
