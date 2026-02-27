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

const Values = () => {
    return (
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
    );
};

export default Values;
