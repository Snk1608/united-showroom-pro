const brands = ["BOSCH", "STIHL", "Stanley", "Black & Decker", "Makita", "MAX"];

const BrandStrip = () => {
  return (
    <section className="py-10 bg-muted border-y border-border">
      <div className="container">
        <p className="text-center text-xs font-heading font-semibold tracking-widest uppercase text-muted-foreground mb-6">
          Authorized Dealer Of
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-heading text-lg md:text-2xl font-bold text-foreground/60 hover:text-foreground transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStrip;
