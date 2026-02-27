import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle2, Star, Zap, Coffee } from "lucide-react";

const stats = [
    { icon: Star, label: "Customer Rating", value: "4.8/5" },
    { icon: Zap, label: "Live Kitchen", value: "100%" },
    { icon: Coffee, label: "Beverages", value: "20+" },
];

const highlights = [
    "Traditional Hand-Ground Spices",
    "No Artificial Colors or Preservatives",
    "Farm-to-Table Fresh Vegetables",
    "Slow-Cooked Authentic Flavors",
];

const ChefSignature = () => {
    return (
        <section className="py-16 relative bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <ScrollReveal>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-gold/20 rounded-[2rem] blur-2xl group-hover:bg-gradient-gold/30 transition-all duration-500" />
                                <div className="relative aspect-square rounded-[2rem] overflow-hidden border-2 border-primary/20">
                                    <img
                                        src="/images/chef-special.png"
                                        alt="Chef's Signature Dish"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                        <div>
                                            <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 inline-block">
                                                Signature Dish
                                            </span>
                                            <h3 className="text-2xl font-heading font-bold text-white">The Royal Swastik Thali</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Floating Stats */}
                        <div className="absolute -bottom-8 -right-8 bg-background p-6 rounded-3xl shadow-2xl border border-primary/10 hidden md:block">
                            <div className="flex gap-8">
                                {stats.map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                                        <p className="text-sm text-muted-foreground font-body">{stat.label}</p>
                                        <p className="text-xl font-heading font-bold text-gradient-gold">{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <ScrollReveal delay={0.2}>
                            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Chef's Selection</p>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                                Authenticity in <br />
                                <span className="text-gradient-gold">Every Bite</span>
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-8 font-body text-lg">
                                Our Head Chef brings decades of experience from the heart of India.
                                Each dish is crafted not just as a meal, but as a journey through the
                                rich heritage of Indian culinary arts, using secrets passed down through
                                generations.
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {highlights.map((item, i) => (
                                <ScrollReveal key={item} delay={0.3 + i * 0.1}>
                                    <div className="flex items-center gap-3 bg-secondary/30 p-4 rounded-2xl border border-primary/5">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        <span className="text-sm font-body font-medium">{item}</span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal delay={0.6}>
                            <div className="flex items-center gap-4 p-6 bg-gradient-gold/5 rounded-2xl border-l-4 border-primary">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                                        <img src="/images/chef-portrait.png" alt="Chef Portrait" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm italic text-muted-foreground mb-1">
                                        "We don't just serve food; we serve memories on a platter."
                                    </p>
                                    <p className="text-primary font-bold text-sm">Chef Rajender Singh</p>
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
