import ScrollReveal from "@/components/ScrollReveal";
import { Award, Users, Utensils, Star } from "lucide-react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    {
        num: 15,
        suffix: "+",
        label: "Years of Service",
        subtext: "Experience in authentic Indian flavors",
        icon: Award,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        num: 200,
        suffix: "+",
        label: "Exquisite Dishes",
        subtext: "From traditional to fusion specialties",
        icon: Utensils,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        num: 50,
        suffix: "K+",
        label: "Happy Families",
        subtext: "Trusted by Kalamboli since day one",
        icon: Users,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        num: 4.8,
        suffix: "★",
        label: "Guest Satisfaction",
        subtext: "Based on 10,000+ verified reviews",
        icon: Star,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        decimals: 1
    },
];

const Counter = ({ value, decimals = 0 }: { value: number; decimals?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const spring = useSpring(0, { stiffness: 45, damping: 20 });
    const display = useTransform(spring, (current) =>
        current.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        })
    );

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return <motion.span ref={ref}>{display}</motion.span>;
};

const Stats = () => {
    return (
        <section className="py-16 bg-background relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <ScrollReveal key={stat.label} delay={i * 0.1}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                className="group relative flex flex-col p-8 rounded-[2rem] bg-card/30 backdrop-blur-md border border-border/50 hover:border-primary/40 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5"
                            >
                                {/* Animated Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-700" />

                                <div className="relative z-10">
                                    <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500`}>
                                        <stat.icon className="w-7 h-7" />
                                    </div>

                                    <div className="flex items-baseline gap-1 mb-3">
                                        <span className="text-5xl md:text-6xl font-heading font-black text-foreground tracking-tighter">
                                            <Counter value={stat.num} decimals={stat.decimals} />
                                        </span>
                                        <span className="text-3xl md:text-4xl font-heading font-bold text-primary">
                                            {stat.suffix}
                                        </span>
                                    </div>

                                    <h4 className="text-sm font-black tracking-widest text-foreground uppercase mb-4 group-hover:text-primary transition-colors">
                                        {stat.label}
                                    </h4>

                                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                                        {stat.subtext}
                                    </p>
                                </div>

                                {/* Abstract decorative element */}
                                <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none">
                                    <stat.icon className="w-20 h-20" />
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;


