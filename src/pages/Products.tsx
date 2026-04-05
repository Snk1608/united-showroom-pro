import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const categories = ["All", "Power Tools", "Hand Tools", "Outdoor Equipment", "Accessories", "Cutting Tools"];
const brands = ["All", "BOSCH", "STIHL", "Stanley", "Black & Decker", "Makita", "MAX"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [search, setSearch] = useState("");

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const filtered = products.filter((p) => {
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchBrand = selectedBrand === "All" || p.brand === selectedBrand;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchBrand && matchSearch;
  });

  return (
    <div>
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-3">Our Products</h1>
          <p className="text-primary-foreground/80">Professional tools for every need</p>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {brands.map((b) => (
              <button key={b} onClick={() => setSelectedBrand(b)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedBrand === b
                  ? b === "STIHL" ? "bg-stihl text-stihl-foreground" : "bg-accent text-accent-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
                {b}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <div key={product.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <div className="h-40 bg-muted flex items-center justify-center overflow-hidden">
                  {product.image_url ? (
                    <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-heading text-3xl font-bold text-muted-foreground/30">{product.brand}</span>
                  )}
                </div>
                <div className="p-4">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${product.brand === "STIHL" ? "bg-stihl/10 text-stihl" : "bg-primary/10 text-primary"}`}>
                    {product.brand}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mt-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1 mb-4">{product.description}</p>
                  <Link to="/enquiry"><Button size="sm" className="w-full">Enquire Now</Button></Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">No products found. Try adjusting your filters.</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
