import { motion } from "framer-motion";
import { ChefHat, Utensils, Truck, Users, Clock, Award, Sparkles } from "lucide-react";

const features = [
    {
        icon: ChefHat,
        title: "Diverse Menu",
        description: "Explore a curated selection of Indian, Chinese & Sea Food delicacies crafted to perfection.",
        color: "from-amber-500/20 text-amber-500",
    },
    {
        icon: Utensils,
        title: "Quality First",
        description: "Only the finest local ingredients and hand-picked spices make it to our royal kitchen.",
        color: "from-orange-500/20 text-orange-500",
    },
    {
        icon: Truck,
        title: "Local Hero",
        description: "Express hot delivery across all Kalamboli sectors because we value your hunger.",
        color: "from-blue-500/20 text-blue-500",
    },
    {
        icon: Users,
        title: "Family Haven",
        description: "A meticulously designed space to celebrate life's moments with your loved ones.",
        color: "from-purple-500/20 text-purple-500",
    },
    {
        icon: Clock,
        title: "Golden Hours",
        description: "Open from 11 AM to 11 PM daily. Your craving's best friend, all week long.",
        color: "from-red-500/20 text-red-500",
    },
    {
        icon: Award,
        title: "Maître d' Style",
        description: "Our staff is trained to provide a royal hospitality experience that feels like home.",
        color: "from-yellow-500/20 text-yellow-500",
    },
];

const Features = () => {
    return (
        <section className="py-16 bg-secondary/20 relative overflow-hidden">
            {/* Immersive Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2.5 mb-6 w-fit cursor-default"
                    >
                        <div
                            className="flex items-center gap-3 bg-primary border border-primary/20 backdrop-blur-sm rounded-full px-6 py-3 text-base text-white font-semibold tracking-wide"
                        >
                            <Sparkles className="w-4 h-4 text-white shrink-0" />
                            <span> The Swastik Edge</span>
                            <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse shrink-0" />
                        </div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight"
                    >
                        Why We Are <br />
                        <span className="text-gradient-gold drop-shadow-sm">Your Best Choice</span>
                        <div className="h-1.5 w-24 bg-gradient-gold mx-auto mt-6 rounded-full" />
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            className="group relative h-full bg-white p-10 rounded-[2.5rem] border border-border/50 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-gold/10 transition-all duration-500 overflow-hidden"
                        >
                            {/* Card Background Decoration */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-bl-[100px] -translate-y-8 translate-x-8`} />

                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-500 shadow-inner overflow-hidden`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Decorative Corner Icon */}
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-10 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                <feature.icon className="w-12 h-12" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
