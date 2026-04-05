import boschLogo from "@/assets/brands/bosch.png";
import stihlLogo from "@/assets/brands/stihl.png";
import stanleyLogo from "@/assets/brands/stanley.png";
import blackdeckerLogo from "@/assets/brands/blackdecker.png";
import makitaLogo from "@/assets/brands/makita.png";
import maxLogo from "@/assets/brands/max.png";

const brands = [
  { name: "BOSCH", logo: boschLogo },
  { name: "STIHL", logo: stihlLogo },
  { name: "Stanley", logo: stanleyLogo },
  { name: "Black & Decker", logo: blackdeckerLogo },
  { name: "Makita", logo: makitaLogo },
  { name: "MAX", logo: maxLogo },
];

const BrandStrip = () => {
  return (
    <section className="py-10 bg-muted border-y border-border">
      <div className="container">
        <p className="text-center text-xs font-heading font-semibold tracking-widest uppercase text-muted-foreground mb-6">
          Authorized Dealer Of
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {brands.map((brand) => (
            <div key={brand.name} className="flex flex-col items-center gap-2 group">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                loading="lazy"
                className="h-12 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="text-xs font-heading font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStrip;
