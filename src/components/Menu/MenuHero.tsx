import { motion } from "framer-motion";
import { Utensils, ChefHat, Sparkles } from "lucide-react";

const MenuHero = () => {

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-12">
            {/* ── Immersive Background ── */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-105 animate-subtle-zoom"
                style={{ backgroundImage: "url(/images/ingredients.jpg)" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/75 to-charcoal/95" />
            </div>

            {/* ── Floating Decorative Elements ── */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] animate-pulse delay-1000" />

            {/* ── Gold Accents ── */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="relative z-10 container mx-auto px-4 text-center">
                {/* ── Eyebrow Badge ── */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-primary/20 backdrop-blur-md mb-8"
                >
                    <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
                    <span className="text-primary font-body text-xs tracking-[0.4em] uppercase font-bold">
                        A Culinary Journey
                    </span>
                    <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
                </motion.div>

                {/* ── Main Heading ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white mb-6 leading-tight">
                        Our <span className="text-gradient-gold drop-shadow-2xl">Menu</span>
                    </h1>
                </motion.div>

                {/* ── Description ── */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-2xl text-warm-white-dim max-w-4xl mx-auto mb-12 font-body leading-relaxed"
                >
                    From the aromatic spices of Punjab to the coastal treasures of Maharashtra.
                    Explore our curated selection of Indian, Tandoor, and Sea Food masterpieces.
                </motion.p>

                {/* ── Chef's Promise ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex flex-wrap justify-center gap-8 items-center text-sm md:text-base text-warm-white-dim/80 font-medium italic mb-12"
                >
                    <div className="flex items-center gap-2 group cursor-help">
                        <ChefHat className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <span>Freshly Ground Spices</span>
                    </div>
                    <div className="flex items-center gap-2 group cursor-help">
                        <Utensils className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <span>Traditional Clay Oven</span>
                    </div>
                    <div className="flex items-center gap-2 group cursor-help">
                        <Sparkles className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <span>Authentic Flavors</span>
                    </div>
                </motion.div>

                {/* ── Delivery Info ── */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-2xl px-8 py-3 text-sm text-primary font-bold tracking-wide mb-16"
                >
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    Free Home Delivery In All Kalamboli Sectors!
                </motion.div>
            </div>
        </section>
    );
};


export default MenuHero;

