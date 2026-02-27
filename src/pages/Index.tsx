import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChefHat, Flame, Fish, UtensilsCrossed } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import OrderButtons from "@/components/OrderButtons";
import DeliveryChecker from "@/components/DeliveryChecker";

const categories = [
  { icon: UtensilsCrossed, label: "Indian", desc: "Authentic curries, biryanis & thalis", image: "/images/indian.jpg" },
  { icon: ChefHat, label: "Chinese", desc: "Wok-tossed noodles & manchurian", image: "/images/chinese.jpg" },
  { icon: Flame, label: "Tandoor", desc: "Smoky kebabs & fresh naan", image: "/images/tandoor.jpg" },
  { icon: Fish, label: "Sea Food", desc: "Premium prawns, fish & crab", image: "/images/seafood.jpg" },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-food.jpg)" }}
        />
        <div className="absolute inset-0 overlay-dark" />
        <div className="relative z-10 container mx-auto px-4 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              Kalamboli's Finest
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground mb-6 leading-tight">
              Swastik Family
              <br />
              <span className="text-gradient-gold">Restaurant</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-body">
              Where every meal is a celebration. Authentic Indian, Chinese, Tandoor
              & premium Sea Food crafted with love.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6"
          >
            <Link
              to="/menu"
              className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-semibold tracking-wide uppercase hover:opacity-90 transition-opacity shadow-gold"
            >
              Explore Our Menu
            </Link>
            <Link
              to="/contact"
              className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold tracking-wide uppercase hover:border-primary hover:text-primary transition-colors"
            >
              Reserve a Table
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-2 text-sm text-primary"
          >
            🚀 Free Home Delivery for Kalamboli!
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Our Specialties</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Curated for Your <span className="text-gradient-gold">Cravings</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.label} delay={i * 0.1}>
                <Link to="/menu" className="group block">
                  <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                    <img
                      src={cat.image}
                      alt={`${cat.label} cuisine at Swastik Family Restaurant`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <cat.icon className="w-8 h-8 text-primary mb-3" />
                      <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                        {cat.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cat.desc}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Order Online */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Delivery</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Order <span className="text-gradient-gold">Online</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Choose your preferred platform or order directly via WhatsApp for the best deals.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <OrderButtons />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <DeliveryChecker />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ambience Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  A Place Where <span className="text-gradient-gold">Families</span> Gather
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Since 2010, Swastik Family Restaurant has been Kalamboli's
                  beloved dining destination. We believe that great food brings
                  families together — and that's exactly what we do, one plate at a
                  time.
                </p>
                <Link
                  to="/about"
                  className="inline-block border border-primary text-primary px-6 py-3 rounded-lg font-semibold text-sm tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Our Story
                </Link>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <img
                  src="/images/restaurant-interior.jpg"
                  alt="Swastik Family Restaurant interior ambience"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 border border-primary/20 rounded-xl" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
