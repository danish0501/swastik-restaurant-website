import { motion } from "framer-motion";
import { ChefHat, Utensils, Truck, Users, Clock, Award } from "lucide-react";

const features = [
    {
        icon: ChefHat,
        title: "Diverse Menu",
        description: "Savor a wide range of Veg & Non-Veg delicacies including Indian, Chinese, Tandoor, and Fresh Sea Food.",
        color: "bg-amber-500/10 text-amber-500",
    },
    {
        icon: Utensils,
        title: "Quality Ingredients",
        description: "We source only the freshest produce and premium spices to ensure every bite is perfect.",
        color: "bg-orange-500/10 text-orange-500",
    },
    {
        icon: Truck,
        title: "Fastest Delivery",
        description: "Get your favorite meals delivered hot and fresh across Kalamboli in record time.",
        color: "bg-blue-500/10 text-blue-500",
    },
    {
        icon: Users,
        title: "Family First",
        description: "A warm and welcoming environment designed for memorable family gatherings.",
        color: "bg-purple-500/10 text-purple-500",
    },
    {
        icon: Clock,
        title: "Open Daily",
        description: "Serving you deliciousness from lunch till late night, throughout the week.",
        color: "bg-red-500/10 text-red-500",
    },
    {
        icon: Award,
        title: "Expert Chefs",
        description: "Our culinary experts bring years of experience to your plate with every dish.",
        color: "bg-yellow-500/10 text-yellow-500",
    },
];

const Features = () => {
    return (
        <section className="py-16 bg-secondary/30 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4"
                    >
                        The Swastik Advantage
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-gradient-gold"
                    >
                        Why Dine With Us?
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-background p-8 rounded-3xl border border-primary/5 shadow-xl hover:shadow-primary/10 transition-all duration-300"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-heading font-bold mb-4">{feature.title}</h3>
                            <p className="text-muted-foreground font-body leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </section>
    );
};

export default Features;
