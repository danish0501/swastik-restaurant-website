import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Truck, MousePointer2 } from "lucide-react";

const MotionLink = motion(Link);

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Immersive Background */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-105 animate-subtle-zoom"
                style={{ backgroundImage: "url(/images/hero-food.jpg)" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90" />
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] animate-pulse delay-700" />

            <div className="relative z-10 container mx-auto px-4 text-center mt-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                    >
                        <Star className="w-4 h-4 text-primary fill-primary animate-spin-slow" />
                        <span className="text-primary font-body text-xs tracking-[0.4em] uppercase font-bold">
                            EST. 2010 • Kalamboli
                        </span>
                        <Star className="w-4 h-4 text-primary fill-primary animate-spin-slow" />
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white mb-8 leading-[1.1] tracking-tight">
                        Authentic <br />
                        <span className="text-gradient-gold drop-shadow-2xl">Family Flavors</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-warm-white-dim max-w-3xl mx-auto mb-12 font-body leading-relaxed">
                        Indulge in a symphony of spices where every dish tells a story of tradition.
                        Experience Kalamboli's finest Indian & Sea Food.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16"
                >
                    <MotionLink
                        to="/menu"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative bg-gradient-gold text-white px-12 py-5 rounded-full font-bold tracking-widest uppercase shadow-2xl hover:shadow-gold/40 transition-all duration-500 overflow-hidden"
                    >
                        <span className="relative z-10">Explore Our Menu</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        <div className="button-shine" />
                    </MotionLink>

                    <MotionLink
                        to="/contact"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white px-12 py-5 rounded-full font-bold tracking-widest uppercase hover:bg-white hover:text-charcoal hover:border-white transition-all duration-500 shadow-xl"
                    >
                        Reserve Table
                    </MotionLink>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-2xl px-8 py-3 text-sm text-primary font-bold tracking-wide">
                        <Truck className="w-5 h-5 animate-bounce" />
                        Free Home Delivery In All Kalamboli Sectors!
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 p-1 flex justify-center">
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                    />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">Scroll to Explore</span>
            </motion.div>
        </section>
    );
};

export default Hero;
