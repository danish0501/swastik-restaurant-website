import { Heart, Leaf, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  {
    icon: Heart,
    title: "Family First",
    desc: "We treat every guest like family. Our warm, welcoming atmosphere is designed for celebrations big and small.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    desc: "Every dish is crafted by our expert chefs using time-honored recipes and the finest cooking techniques.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    desc: "We source the freshest produce, seafood, and spices daily to ensure every bite bursts with authentic flavor.",
  },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/family-dining.jpg)" }}
        />
        <div className="absolute inset-0 overlay-dark" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            About <span className="text-gradient-gold">Swastik</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than a restaurant — we're a family tradition in the heart of Kalamboli.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                <img
                  src="/images/ingredients.jpg"
                  alt="Fresh ingredients used at Swastik Restaurant"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                  From Our Kitchen to <span className="text-gradient-gold">Your Heart</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2010, Swastik Family Restaurant began as a humble
                    dream — to create a space where families in Kalamboli could
                    enjoy world-class food without leaving their neighborhood.
                  </p>
                  <p>
                    What started as a small eatery has grown into Kalamboli's most
                    trusted dining destination, serving over 200 families daily
                    with our signature Indian, Chinese, Tandoor, and Sea Food
                    specialties.
                  </p>
                  <p>
                    Our chefs bring decades of experience and a passion for
                    perfection. Every dish — from our aromatic biryanis to our
                    sizzling tandoori platters — is prepared with the freshest
                    ingredients and authentic spices, sourced daily.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Our Values</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                What Drives <span className="text-gradient-gold">Us</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <ScrollReveal key={val.title} delay={i * 0.15}>
                <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/30 transition-colors text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <val.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {val.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: "15+", label: "Years of Service" },
                { num: "200+", label: "Menu Items" },
                { num: "50K+", label: "Happy Customers" },
                { num: "4.5★", label: "Average Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl md:text-5xl font-heading font-bold text-gradient-gold mb-2">
                    {stat.num}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default About;
