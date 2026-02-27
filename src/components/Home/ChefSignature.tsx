import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle2, Star, Zap, Coffee, Quote } from "lucide-react";

const stats = [
    { icon: Star, label: "Customer Rating", value: "4.8/5" },
    { icon: Zap, label: "Live Kitchen", value: "100%" },
    { icon: Coffee, label: "Beverages", value: "20+" },
];

const highlights = [
    "Traditional Hand-Ground Spices",
    "No Artificial Colors Used",
    "Farm-to-Table Freshness",
    "Slow-Cooked Authenticity",
];

const ChefSignature = () => {
    return (
        <section className="py-24 relative bg-card overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <ScrollReveal>
                            <div className="relative group">
                                {/* Decorative Ring */}
                                <div className="absolute -inset-6 border border-primary/10 rounded-[3rem] group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute -inset-10 border border-primary/5 rounded-[3.5rem] group-hover:scale-110 transition-transform duration-1000 delay-100" />

                                <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/chef-special.png"
                                        alt="Chef's Signature Dish"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />

                                    <div className="absolute bottom-10 left-10">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            className="bg-primary/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block shadow-lg"
                                        >
                                            Signature Masterpiece
                                        </motion.div>
                                        <h3 className="text-4xl font-heading font-bold text-white drop-shadow-lg">The Royal <br /><span className="text-gradient-gold">Swastik Thali</span></h3>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Floating Stats - Glassmorphism */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-10 -right-10 glassmorphism p-8 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-primary/20 hidden xl:block"
                        >
                            <div className="flex gap-10">
                                {stats.map((stat, i) => (
                                    <div key={i} className="text-center group">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <stat.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">{stat.label}</p>
                                        <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <ScrollReveal delay={0.2}>
                            <motion.span
                                className="text-primary font-bold text-xs tracking-[0.4em] uppercase mb-6 block"
                            >
                                Epicurean Journey
                            </motion.span>
                            <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-10 leading-[1.1]">
                                Authenticity in <br />
                                <span className="text-gradient-gold">Every Single Bite</span>
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-10 text-lg font-body">
                                Our Head Chef orchestrates a symphony of flavors, blending decades of
                                tradition with modern culinary precision. We don't just serve meals;
                                we serve a heritage crafted with love and secrets passed through generations.
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {highlights.map((item, i) => (
                                <ScrollReveal key={item} delay={0.3 + i * 0.1}>
                                    <div className="flex items-center gap-4 group cursor-default">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                            <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-sm font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">{item}</span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal delay={0.6}>
                            <div className="relative p-10 rounded-[2.5rem] bg-secondary/50 border border-border/50 group overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Quote className="w-16 h-16 text-primary" />
                                </div>

                                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                    <div className="relative shrink-0">
                                        <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl group-hover:scale-105 transition-transform duration-500">
                                            <img src="/images/chef-portrait.png" alt="Chef Portrait" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
                                            <Star className="w-4 h-4 text-white fill-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-lg italic text-foreground/80 mb-4 leading-relaxed">
                                            "We don't just serve food; we serve memories on a platter. Every spice is measured by the soul."
                                        </p>
                                        <div>
                                            <p className="text-primary font-black text-sm uppercase tracking-widest">Chef Rajender Singh</p>
                                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Culinary Director</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefSignature;
