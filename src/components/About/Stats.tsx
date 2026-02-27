import ScrollReveal from "@/components/ScrollReveal";

const Stats = () => {
    return (
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
    );
};

export default Stats;
