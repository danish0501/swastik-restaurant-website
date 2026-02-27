import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToOrder = () => {
        const element = document.getElementById("order-online");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 100, scale: 0.8 }}
                    className="fixed bottom-8 right-8 z-[100]"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToOrder}
                        className="group relative flex items-center gap-4 bg-charcoal text-white p-2 pl-6 pr-2 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col text-left">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-0.5">Hungry?</span>
                            <span className="text-sm font-bold tracking-tight">Order Online</span>
                        </div>

                        <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-500">
                            <ShoppingBag className="w-6 h-6 text-white" />
                        </div>

                        {/* Animated Glow */}
                        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 animate-button-shine pointer-events-none" />

                        {/* Hover reveal icon */}
                        <div className="absolute top-1/2 -left-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:left-2 transition-all">
                            <ArrowRight className="w-3 h-3 text-primary" />
                        </div>
                    </motion.button>

                    {/* Outer Ambient Glow */}
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full -z-10 animate-pulse" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
