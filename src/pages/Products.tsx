import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const products = [
  { id: 1, name: "GSB 500 RE Drill", brand: "BOSCH", category: "Power Tools", description: "Professional impact drill with 500W motor" },
  { id: 2, name: "GWS 600 Angle Grinder", brand: "BOSCH", category: "Power Tools", description: "Compact angle grinder for cutting and grinding" },
  { id: 3, name: "MS 170 Chainsaw", brand: "STIHL", category: "Outdoor Equipment", description: "Lightweight entry-level chainsaw for domestic use" },
  { id: 4, name: "FS 38 Brush Cutter", brand: "STIHL", category: "Outdoor Equipment", description: "Easy-start grass trimmer for home gardens" },
  { id: 5, name: "FatMax Tape Measure", brand: "Stanley", category: "Hand Tools", description: "Professional-grade tape measure with blade armor coating" },
  { id: 6, name: "20V MAX Drill", brand: "Black & Decker", category: "Power Tools", description: "Cordless drill/driver with lithium-ion battery" },
  { id: 7, name: "HR2470 Rotary Hammer", brand: "Makita", category: "Power Tools", description: "SDS-Plus rotary hammer for concrete drilling" },
  { id: 8, name: "MAX Rebar Tier", brand: "MAX", category: "Accessories", description: "Automatic rebar tying tool for construction" },
  { id: 9, name: "GST 650 Jigsaw", brand: "BOSCH", category: "Power Tools", description: "Professional jigsaw for precise curved cuts" },
  { id: 10, name: "BG 56 Blower", brand: "STIHL", category: "Outdoor Equipment", description: "Powerful handheld blower for garden maintenance" },
  { id: 11, name: "Stanley Tool Set", brand: "Stanley", category: "Hand Tools", description: "92-piece professional mechanics tool set" },
  { id: 12, name: "GBH 220 Hammer Drill", brand: "BOSCH", category: "Power Tools", description: "Compact rotary hammer for SDS-Plus drilling" },
];

const categories = ["All", "Power Tools", "Hand Tools", "Outdoor Equipment", "Accessories"];
const brands = ["All", "BOSCH", "STIHL", "Stanley", "Black & Decker", "Makita", "MAX"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [search, setSearch] = useState("");

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
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
            Our Products
          </h1>
          <p className="text-primary-foreground/80">Professional tools for every need</p>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Brand filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedBrand === b
                    ? b === "STIHL" ? "bg-stihl text-stihl-foreground" : "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-40 bg-muted flex items-center justify-center">
                  <span className="font-heading text-3xl font-bold text-muted-foreground/30">{product.brand}</span>
                </div>
                <div className="p-4">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    product.brand === "STIHL" ? "bg-stihl/10 text-stihl" : "bg-primary/10 text-primary"
                  }`}>
                    {product.brand}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mt-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1 mb-4">{product.description}</p>
                  <Link to="/enquiry">
                    <Button size="sm" className="w-full">Enquire Now</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              No products found. Try adjusting your filters.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
