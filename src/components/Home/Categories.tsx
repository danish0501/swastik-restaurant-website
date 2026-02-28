import { Link } from "react-router-dom";
import { ChefHat, Flame, Fish, UtensilsCrossed, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const categories = [
    {
        icon: UtensilsCrossed,
        label: "Indian",
        tagline: "Soul of the Subcontinent",
        desc: "Authentic curries, biryanis & thalis",
        image: "/images/indian.jpg",
        color: "from-orange-500/20",
        accent: "border-orange-400/40 group-hover:border-orange-400",
    },
    {
        icon: ChefHat,
        label: "Chinese",
        tagline: "Wok Mastery & Umami",
        desc: "Wok-tossed noodles & manchurian",
        image: "/images/chinese.jpg",
        color: "from-red-500/20",
        accent: "border-red-400/40 group-hover:border-red-400",
    },
    {
        icon: Flame,
        label: "Tandoor",
        tagline: "Fire, Smoke & Flavour",
        desc: "Smoky kebabs & fresh naan",
        image: "/images/tandoor.jpg",
        color: "from-yellow-500/20",
        accent: "border-yellow-400/40 group-hover:border-yellow-400",
    },
    {
        icon: Fish,
        label: "Sea Food",
        tagline: "Ocean's Finest Catch",
        desc: "Premium prawns, fish & crab",
        image: "/images/seafood.jpg",
        color: "from-blue-500/20",
        accent: "border-blue-400/40 group-hover:border-blue-400",
    },
];

const Categories = () => {
    return (
        <section className="py-16 bg-card relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2.5 mb-6 w-fit cursor-default"
                        >
                            <div
                                className="flex items-center gap-3 bg-primary border border-primary/20 backdrop-blur-sm rounded-full px-6 py-3 text-base text-white font-semibold tracking-wide"
                            >
                                <Sparkles className="w-4 h-4 text-white shrink-0" />
                                <span>Gastronomic Excellence</span>
                                <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse shrink-0" />
                            </div>
                        </motion.div>
                        <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground tracking-tight">
                            Explore Our <span className="text-gradient-gold">Cuisines</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-gradient-gold mx-auto mt-6 rounded-full" />
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, i) => (
                        <ScrollReveal key={cat.label} delay={i * 0.1}>
                            <Link to="/menu" className="group block relative h-full">
                                <motion.div
                                    whileHover={{ y: -12 }}
                                    className="relative h-[450px] overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 border border-border/50 group-hover:border-primary/50 group-hover:shadow-gold/20"
                                >
                                    {/* Image with Zoom */}
                                    <img
                                        src={cat.image}
                                        alt={`${cat.label} cuisine at Swastik Family Restaurant`}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        loading="lazy"
                                    />

                                    {/* Gradients Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100`} />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                                        <div className="mb-4 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                                            <div className="w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                                <cat.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                            </div>
                                            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {cat.tagline}
                                            </p>
                                            <h3 className="text-3xl font-heading font-bold text-white mb-2 tracking-tight">
                                                {cat.label}
                                            </h3>
                                            <p className="text-sm text-warm-white-dim leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                {cat.desc}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                            <span>View Menu</span>
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                                        </div>
                                    </div>

                                    {/* Glass reflection effect */}
                                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                                </motion.div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
