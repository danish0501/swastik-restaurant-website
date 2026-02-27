import { Link } from "react-router-dom";
import { ChefHat, Flame, Fish, UtensilsCrossed } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const categories = [
    { icon: UtensilsCrossed, label: "Indian", desc: "Authentic curries, biryanis & thalis", image: "/images/indian.jpg" },
    { icon: ChefHat, label: "Chinese", desc: "Wok-tossed noodles & manchurian", image: "/images/chinese.jpg" },
    { icon: Flame, label: "Tandoor", desc: "Smoky kebabs & fresh naan", image: "/images/tandoor.jpg" },
    { icon: Fish, label: "Sea Food", desc: "Premium prawns, fish & crab", image: "/images/seafood.jpg" },
];

const Categories = () => {
    return (
        <section className="py-16 bg-background">
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
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <cat.icon className="w-10 h-10 text-primary-foreground mb-3" />
                                        <h3 className="text-xl font-heading font-bold text-primary-foreground mb-1">
                                            {cat.label}
                                        </h3>
                                        <p className="text-sm text-primary-foreground">{cat.desc}</p>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
