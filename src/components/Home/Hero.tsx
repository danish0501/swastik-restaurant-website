import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Truck } from "lucide-react";

const MotionLink = motion(Link);

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-12">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/hero-food.jpg)" }}
            />
            <div className="absolute inset-0 overlay-dark" />
            <div className="relative z-10 container mx-auto px-4 text-center py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-2">
                        <Star className="w-4 h-4 fill-primary" />
                        Kalamboli's Finest
                        <Star className="w-4 h-4 fill-primary" />
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
                        Swastik Family
                        <br />
                        <span className="text-gradient-gold">Restaurant</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-body">
                        Where every meal is a celebration. Authentic Indian, Chinese, Tandoor
                        & premium Sea Food crafted with love.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6"
                >
                    <MotionLink
                        to="/menu"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-gold text-primary-foreground px-10 py-4 rounded-full font-bold tracking-wide uppercase shadow-lg hover:shadow-gold transition-all duration-300 button-shine"
                    >
                        Explore Our Menu
                    </MotionLink>
                    <MotionLink
                        to="/contact"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-primary-foreground text-primary-foreground px-10 py-4 rounded-full font-bold tracking-wide uppercase hover:bg-primary hover:text-white hover:border-primary hover:shadow-gold transition-all duration-300 button-shine"
                    >
                        Reserve a Table
                    </MotionLink>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-2 text-sm text-primary"
                >
                    <Truck className="w-4 h-4" />
                    Free Home Delivery for Kalamboli!
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
