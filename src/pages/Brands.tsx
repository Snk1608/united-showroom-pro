import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const brandsData = [
  { name: "BOSCH", tagline: "Invented for life", description: "World-leading power tools and accessories for professionals and DIY enthusiasts.", color: "bg-primary/10 border-primary/20 text-primary" },
  { name: "STIHL", tagline: "The number one selling brand", description: "Premium outdoor power equipment — chainsaws, trimmers, blowers and more.", color: "bg-stihl/10 border-stihl/20 text-stihl" },
  { name: "Stanley", tagline: "Make something great", description: "Trusted hand tools, storage solutions and measuring instruments since 1843.", color: "bg-foreground/10 border-foreground/20 text-foreground" },
  { name: "Black & Decker", tagline: "Ideas that work", description: "Innovative home improvement and DIY power tools for every household.", color: "bg-accent/10 border-accent/20 text-accent" },
  { name: "Makita", tagline: "Rule the outdoors", description: "Industrial-grade power tools and equipment built for performance.", color: "bg-primary/10 border-primary/20 text-primary" },
  { name: "MAX", tagline: "Professional fastening", description: "Automatic rebar tying tools and professional construction equipment.", color: "bg-foreground/10 border-foreground/20 text-foreground" },
];

const Brands = () => {
  return (
    <div>
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-3">Our Brands</h1>
          <p className="text-primary-foreground/80">Authorized dealer for the world's best tool brands</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandsData.map((brand) => (
              <div key={brand.name} className={`rounded-xl border-2 p-8 text-center ${brand.color} transition-all hover:shadow-elevated hover:-translate-y-1 duration-300`}>
                <h2 className="font-heading text-3xl font-bold mb-1">{brand.name}</h2>
                <p className="text-xs italic opacity-70 mb-4">{brand.tagline}</p>
                <p className="text-sm opacity-80 mb-6">{brand.description}</p>
                <Link to="/products">
                  <Button variant="outline" size="sm">View Products</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
