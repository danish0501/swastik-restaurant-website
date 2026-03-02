import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const MotionLink = motion(Link);

const AboutHero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">

            {/* ── Background Image with subtle zoom ── */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-105 animate-subtle-zoom"
                style={{ backgroundImage: "url(/images/family-dining.jpg)" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90" />
            </div>

            {/* ── Floating ambient orbs ── */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] animate-pulse delay-700" />

            {/* ── Gold top & bottom rule ── */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            {/* ── Main Content ── */}
            <div className="relative z-10 container mx-auto px-4 text-center my-16">

                {/* Eyebrow badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-primary/20 backdrop-blur-md mb-8"
                >
                    <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
                    <span className="text-primary font-body text-xs tracking-[0.4em] uppercase font-bold">
                        Our Story
                    </span>
                    <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
                </motion.div>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                >
                    <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-6 leading-[1.1] tracking-tight">
                        About{" "}
                        <span className="text-gradient-gold drop-shadow-2xl">Swastik</span>
                    </h1>
                </motion.div>

                {/* Diamond divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="flex items-center justify-center gap-3 mb-6"
                >
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
                    <div className="w-2 h-2 rotate-45 border border-primary" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
                    <div className="w-2 h-2 rotate-45 border border-primary" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85, duration: 0.6 }}
                    className="text-lg md:text-2xl text-warm-white-dim max-w-2xl mx-auto mb-12 font-body leading-relaxed"
                >
                    More than a restaurant — we&apos;re a{" "}
                    <span className="text-primary italic">family tradition</span>{" "}
                    rooted in flavour, warmth, and heritage in the heart of{" "}
                    <span className="text-primary">Kalamboli</span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 items-center justify-center"
                >
                    {/* Primary */}
                    <MotionLink
                        to="/menu"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative bg-gradient-gold text-white px-12 py-4 rounded-full font-bold tracking-widest uppercase shadow-2xl hover:shadow-gold/40 transition-all duration-500 overflow-hidden"
                    >
                        <span className="relative z-10">View Our Menu</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        <div className="button-shine" />
                    </MotionLink>

                    {/* Secondary */}
                    <MotionLink
                        to="/contact"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white px-12 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-gradient-gold hover:border-transparent transition-all duration-500 shadow-xl"
                    >
                        Contact Us
                    </MotionLink>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
