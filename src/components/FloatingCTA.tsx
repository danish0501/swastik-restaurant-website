import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, MessageCircle, ArrowUp, Sparkles } from "lucide-react";


const FloatingCTA = () => {
    
    const [isVisible, setIsVisible] = useState(false);
    const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToOrder = () => {
        const element = document.getElementById("order-online");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const openWhatsApp = () => {
        window.open("https://wa.me/91XXXXXXXXXX", "_blank"); 
    };

    return (
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end gap-4 pointer-events-none">
            <AnimatePresence>
                {isVisible && (
                    <>
                        {/* ── Primary Order Button ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.8 }}
                            transition={{ delay: 0.1 }}
                            className="pointer-events-auto"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={scrollToOrder}
                                className="group relative flex items-center gap-4 bg-charcoal text-white p-2 pl-6 pr-2 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden"
                            >
                                <div className="flex flex-col text-left">
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Order Now</span>
                                    </div>
                                    <span className="text-sm md:text-base font-bold tracking-tight">Food Delivery</span>
                                </div>

                                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-gold rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <ShoppingBag className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                </div>

                                {/* Dynamic Glow Effect */}
                                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 animate-button-shine pointer-events-none" />
                            </motion.button>
                        </motion.div>

                        {/* ── Secondary Actions ── */}
                        <div className="flex flex-row items-center gap-4 pointer-events-none">
                            {/* ── WhatsApp Messenger Button ── */}
                            <motion.button
                                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={openWhatsApp}
                                onMouseEnter={() => setActiveTooltip("whatsapp")}
                                onMouseLeave={() => setActiveTooltip(null)}
                                className="pointer-events-auto relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-[0_15px_30px_rgba(37,211,102,0.3)] hover:shadow-[#25D366]/50 transition-all duration-500 overflow-hidden group"
                            >
                                <MessageCircle className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

                                {/* Animated Tooltip */}
                                <AnimatePresence>
                                    {activeTooltip === "whatsapp" && (
                                        <motion.span
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute bottom-full mb-4 px-4 py-1.5 bg-charcoal text-white text-[10px] font-bold uppercase tracking-widest rounded-lg whitespace-nowrap shadow-2xl border border-white/5"
                                        >
                                            Chat with us
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            {/* ── Scroll to Top Button ── */}
                            <motion.button
                                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={scrollToTop}
                                className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 flex items-center justify-center glassmorphism-dark rounded-full border border-white/10 text-primary-foreground hover:bg-primary transition-all duration-300 shadow-xl group"
                            >
                                <ArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingCTA;
