import { Heart, ShieldCheck, ChefHat, Sparkles, Zap, Utensils, Search, MessageSquare, Recycle, Smile } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const values = [
    {
        icon: Heart,
        title: "Family & Heritage",
        desc: "Since 2010, we've been the heartbeat of Kalamboli's family gatherings, treating every guest as our own kin.",
        details: ["Multi-generational dining", "Custom Celebration setups", "Warm Indian Hospitality"],
        bg: "bg-primary/5",
        accent: "from-red-500/20 to-transparent"
    },
    {
        icon: ChefHat,
        title: "Culinary Artistry",
        desc: "Our master chefs blend ancestral spice secrets with modern techniques to create magic.",
        details: ["Hand-ground Masalas", "Traditional Tandoor", "Fusion Specialties"],
        bg: "bg-primary/10",
        accent: "from-amber-500/20 to-transparent"
    },
    {
        icon: Search,
        title: "Authentic Sourcing",
        desc: "We travel miles to source the most authentic spices and ingredients directly from where they grow best.",
        details: ["Direct-Farm Alliances", "Spice Route Selection", "Daily Fresh Catch"],
        bg: "bg-primary/5",
        accent: "from-blue-500/20 to-transparent"
    },
    {
        icon: Zap,
        title: "Swift Delivery",
        desc: "Bringing the restaurant experience to your doorstep with our lightning-fast logistics network.",
        details: ["Contactless Delivery", "Hot-Insulated Bags", "Real-time Tracking"],
        bg: "bg-primary/10",
        accent: "from-yellow-500/20 to-transparent"
    },
    {
        icon: ShieldCheck,
        title: "Hygiene Standards",
        desc: "A gold standard in hygiene and taste consistency that has earned us the trust of 50K+ families.",
        details: ["Triple-Stage Sanitization", "Filtered Water System", "Open Kitchen View"],
        bg: "bg-primary/5",
        accent: "from-green-500/20 to-transparent"
    },
    {
        icon: MessageSquare,
        title: "Your Voice Matters",
        desc: "We evolve based on your feedback. Every review is a step towards our collective culinary perfection.",
        details: ["Real-time Feedback", "Menu Personalization", "Loyalty Rewards"],
        bg: "bg-primary/10",
        accent: "from-purple-500/20 to-transparent"
    },
    {
        icon: Recycle,
        title: "Eco-Conscious",
        desc: "Committed to reducing our footprint through sustainable packaging and zero-waste kitchen practices.",
        details: ["Plastic-Free Packaging", "Zero-Waste Initiative", "Energy Efficient Ops"],
        bg: "bg-primary/5",
        accent: "from-emerald-500/20 to-transparent"
    },
    {
        icon: Utensils,
        title: "Modern Dining",
        desc: "The perfect blend of traditional flavors and a contemporary ambiance designed for modern families.",
        details: ["Smart Reservations", "Mood-Lighting Decor", "Ergonomic Comfort"],
        bg: "bg-primary/10",
        accent: "from-indigo-500/20 to-transparent"
    },
    {
        icon: Smile,
        title: "Guest Delight",
        desc: "Our mission is to see a smile on every guest through exceptional hospitality and personalized care.",
        details: ["Prompt Service", "Kid-Friendly Zones", "Warm Greeting"],
        bg: "bg-primary/5",
        accent: "from-pink-500/20 to-transparent"
    }
];

const Values = () => {
    return (
        <section className="py-16 bg-background relative overflow-hidden">
            {/* ── Background Aesthetics ── */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* ── Section Header ── */}
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center mb-28">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.5em] uppercase mb-8 shadow-inner"
                        >
                            <Sparkles className="w-4 h-4" />
                            Core Philosophy
                            <Sparkles className="w-4 h-4" />
                        </motion.div>

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-foreground mb-10 leading-[0.9] tracking-tighter">
                            The Spirit Of {" "}
                            <span className="text-gradient-gold italic">Swastik</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
                            Crafting experiences that transcend the plate, rooted in values that have defined us for over a decade.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[1000px]">
                    {values.map((val, i) => (
                        <ScrollReveal key={val.title} delay={i * 0.05}>
                            <motion.div
                                whileHover={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`group relative h-full rounded-[3rem] p-8 lg:p-12 border border-border/40 transition-all duration-700 hover:border-primary/60 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col ${val.bg} backdrop-blur-xl`}
                            >
                                {/* Gradient Ambient Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${val.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Elevated Icon */}
                                    <div className="w-20 h-20 rounded-3xl bg-white shadow-2xl flex items-center justify-center mb-10 group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-500 ring-8 ring-primary/5">
                                        <val.icon className="w-10 h-10 text-primary" />
                                    </div>

                                    <h3 className="text-3xl font-heading font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                                        {val.title}
                                    </h3>

                                    <p className="text-lg text-muted-foreground leading-relaxed mb-12 group-hover:text-foreground transition-colors">
                                        {val.desc}
                                    </p>

                                    {/* Micro-Features List */}
                                    <div className="mt-auto grid grid-cols-1 gap-5 pt-8 border-t border-primary/10">
                                        {val.details.map((point, idx) => (
                                            <div key={idx} className="flex items-center gap-4 group/item">
                                                <div className="shrink-0 w-2 h-2 rounded-full bg-primary/30 group-hover/item:bg-primary group-hover/item:scale-150 transition-all duration-300" />
                                                <span className="text-xs font-black tracking-widest text-foreground/60 uppercase group-hover/item:text-primary transition-colors">
                                                    {point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Large Watermark Icon */}
                                <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 rotate-[15deg] pointer-events-none">
                                    <val.icon className="w-56 h-56" />
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;





