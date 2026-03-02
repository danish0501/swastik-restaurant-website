import ScrollReveal from "@/components/ScrollReveal";
import { Users, Sparkles, ChefHat } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Culinary Artistry",
        description: "Our master chefs blend ancestral spice secrets with modern techniques to create dishes that tell a story of India's rich heritage.",
        icon: ChefHat,
        image: "/images/chef-special.png",
        features: ["Hand-ground Spices", "Traditional Tandoor", "Secret Family Recipes"]
    },
    {
        title: "The Ambiance",
        description: "An elegant sanctuary designed for connection. From warm lighting to spacious seating, every detail is crafted for your comfort.",
        icon: Sparkles,
        image: "/images/restaurant-interior.jpg",
        features: ["Elegant Decor", "Family Friendly", "Ambient Music"]
    },
    {
        title: "Soulful Service",
        description: "At Swastik, you're not just a guest; you're family. Our team is dedicated to making every meal a cherished memory.",
        icon: Users,
        image: "/images/family-dining.jpg",
        features: ["Warm Hospitality", "Quick Service", "Personalized Care"]
    }
];

const Experience = () => {
    return (
        <section className="py-16 bg-secondary/30 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal>
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-[1px] bg-primary/50"></div>
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Excellence in Every Detail</span>
                            <div className="w-12 h-[1px] bg-primary/50"></div>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
                            The Swastik <span className="text-gradient-gold italic font-serif">Experience</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Beyond just serving food, we create moments. Every corner of our restaurant,
                            every ingredient in our kitchen, and every smile from our staff is part of a
                            curated journey designed for you.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <ScrollReveal key={exp.title} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="group h-full flex flex-col bg-background rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
                            >
                                {/* Image Container */}
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={exp.image}
                                        alt={exp.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />

                                    {/* Icon Badge */}
                                    <div className="absolute bottom-6 left-8 bg-gradient-gold p-4 rounded-2xl text-white shadow-xl shadow-gold/20 -mb-2 group-hover:-mb-1 transition-all duration-500">
                                        <exp.icon size={24} />
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-8  flex flex-col flex-grow">
                                    <h3 className="text-3xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                                        {exp.title}
                                    </h3>
                                    <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow">
                                        {exp.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="space-y-4 pt-6 border-t border-border/50">
                                        {exp.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-3 group/item">
                                                <div className="w-3 h-3 rounded-full bg-primary/30 group-hover/item:bg-primary transition-colors" />
                                                <span className="text-base font-medium text-foreground/80 group-hover/item:text-foreground transition-colors">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Decorative bottom element */}
                                    <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-end">
                                        <div className="w-12 h-[2px] bg-primary/30 rounded-full" />
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom Interactive Message */}
                <ScrollReveal delay={0.4}>
                    <div className="mt-20 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 bg-primary/5 text-center group cursor-default">
                        <p className="text-xl font-heading text-foreground mb-2">
                            Ready to create your own <span className="text-primary italic font-serif">Swastik moment?</span>
                        </p>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                            Visit us in Kalamboli today
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Experience;
