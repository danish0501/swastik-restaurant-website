import { motion } from "framer-motion";
import { Camera, Sparkles, Utensils, Heart, Users, MapPin } from "lucide-react";

const GalleryHero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* ── Immersive Background ── */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-105 animate-subtle-zoom"
                style={{ backgroundImage: "url(/images/restaurant-interior.jpg)" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/65 to-charcoal/95" />
            </div>

            {/* ── Floating Decorative Orbs ── */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse delay-1000" />

            {/* ── Aesthetic Border Rules ── */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            {/* ── Content Container ── */}
            <div className="relative z-10 container mx-auto px-4 pt-12 text-center">

                {/* Eyebrow Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-primary/30 backdrop-blur-xl mb-10 shadow-2xl"
                >
                    <Camera className="w-4 h-4 text-primary animate-pulse" />
                    <span className="text-primary font-body text-xs tracking-[0.5em] uppercase font-black">
                        Visual Legacy
                    </span>
                    <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white mb-8 leading-[1.05] tracking-tight">
                        Our <span className="text-gradient-gold drop-shadow-2xl">Vibe</span>
                    </h1>
                </motion.div>

                {/* Decorative Divider */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "300px", opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
                    className="h-1 bg-gradient-gold mx-auto mb-10 rounded-full relative"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-2 border-primary shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                </motion.div>

                {/* Refined Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-2xl text-warm-white-dim max-w-3xl mx-auto mb-16 font-body leading-relaxed"
                >
                    Step into the heart of <span className="text-primary font-bold">Swastik Family Restaurant</span>.
                    From the aromatic sizzle of our kitchens to the laughter in our dining halls,
                    every frame tells a story of <span className="text-gradient-gold italic font-bold text-glow">Culinary Excellence</span>.
                </motion.p>
            </div>
        </section>
    );
};

export default GalleryHero;
