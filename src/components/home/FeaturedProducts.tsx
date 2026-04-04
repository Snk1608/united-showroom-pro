import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Zap, TreePine, Settings } from "lucide-react";

const categories = [
  {
    icon: Zap,
    title: "Power Tools",
    description: "Drills, grinders, saws and more from BOSCH & Makita",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Wrench,
    title: "Hand Tools",
    description: "Premium hand tools from Stanley & Black & Decker",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: TreePine,
    title: "Outdoor Equipment",
    description: "Chainsaws, brush cutters & blowers from STIHL",
    color: "bg-stihl/10 text-stihl",
  },
  {
    icon: Settings,
    title: "Accessories",
    description: "Drill bits, blades, safety gear & more",
    color: "bg-primary/10 text-primary",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Product Range
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection of industrial tools and equipment from world-renowned brands
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-card rounded-lg border border-border p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg ${cat.color} flex items-center justify-center mb-4`}>
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{cat.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{cat.description}</p>
              <Link to="/products">
                <Button variant="outline" size="sm">
                  View Products
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
