import { Shield, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Clock, label: "Years of Experience", value: "60+" },
  { icon: Users, label: "Happy Customers", value: "5000+" },
  { icon: Award, label: "Brands Partnered", value: "20+" },
  { icon: Shield, label: "Authorized Dealer", value: "Certified" },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-gradient py-16 md:py-24">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About United Groups
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            A legacy of trust, quality, and service in the industrial tools and hardware industry.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              United Groups has been a cornerstone in the hardware and industrial tools industry for over 60 years.
              What started as a small tools shop has grown into one of the region's most trusted authorized dealerships
              for world-class brands.
            </p>
            <p>
              We operate through two specialized divisions to serve our customers better:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-primary mb-2">United Hardware Corporation</h3>
              <p className="text-muted-foreground text-sm">
                Our flagship division specializing in industrial-grade power tools, hand tools, and accessories.
                As authorized dealers of BOSCH, Stanley, Black &amp; Decker, Makita, and MAX, we provide
                only genuine products with full warranty support.
              </p>
            </div>
            <div className="bg-card border border-stihl/30 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-stihl mb-2">United Agency</h3>
              <p className="text-muted-foreground text-sm">
                Our dedicated STIHL division for outdoor power equipment. From chainsaws to brush cutters,
                hedge trimmers to blowers — we are your authorized STIHL partner for sales, service, and support.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-4 text-muted-foreground leading-relaxed">
            <h3 className="font-heading text-2xl font-bold text-foreground">Our Mission</h3>
            <p>
              To provide professionals and businesses with the highest quality tools and equipment,
              backed by expert advice, genuine products, and exceptional after-sales service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
