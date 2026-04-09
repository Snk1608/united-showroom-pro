import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import banner1 from "@/assets/banner-1.jpg";
import banner2 from "@/assets/banner-2.jpg";
import banner3 from "@/assets/banner-3.jpg";

const fallbackBanners = [
  { id: "f1", image_url: banner1, title: "Power Tools Sale", description: "Up to 20% off on selected BOSCH power tools this season", cta_text: "Enquire Now", cta_link: "/enquiry" },
  { id: "f2", image_url: banner2, title: "STIHL Outdoor Equipment", description: "New arrivals — chainsaws, brush cutters & more from STIHL", cta_text: "View Products", cta_link: "/products" },
  { id: "f3", image_url: banner3, title: "Accessories & More", description: "Complete range of industrial tool accessories available", cta_text: "Explore", cta_link: "/products" },
];

const BannerCarousel = () => {
  const [current, setCurrent] = useState(0);

  const { data: dbBanners } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const { data, error } = await supabase.from("banners").select("*").eq("is_active", true).order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  const banners = dbBanners && dbBanners.length > 0 ? dbBanners : fallbackBanners;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  }, [banners.length]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    if (current >= banners.length) setCurrent(0);
  }, [banners.length, current]);

  return (
    <div className="relative w-full overflow-hidden bg-foreground/5">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {banners.map((banner) => (
          <div key={banner.id} className="w-full flex-shrink-0 relative">
            <img src={banner.image_url || ""} alt={banner.title} className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[480px] xl:h-[540px] object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent pt-16 pb-10">
              <div className="container">
                <div className="max-w-lg space-y-2">
                  <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary-foreground drop-shadow-lg">{banner.title}</h2>
                  <p className="text-primary-foreground/90 text-sm md:text-base drop-shadow">{banner.description}</p>
                  <Link to={banner.cta_link || "/enquiry"}>
                    <Button variant="hero" size="sm">{banner.cta_text || "Enquire Now"}</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm rounded-full p-2 hover:bg-card transition-colors shadow-card" aria-label="Previous">
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm rounded-full p-2 hover:bg-card transition-colors shadow-card" aria-label="Next">
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-accent w-8" : "bg-primary-foreground/50"}`}
            aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
