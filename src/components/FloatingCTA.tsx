import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
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
                <motion.button
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.8 }}
                    onClick={scrollToOrder}
                    className="fixed bottom-8 right-8 z-[100] group flex items-center gap-3 bg-gradient-gold text-primary-foreground p-1 px-4 lg:px-6 rounded-full shadow-2xl hover:shadow-gold/40 transition-all duration-300"
                >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <ShoppingBag className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div className="text-left py-2 pr-2">
                        <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest opacity-80 leading-none mb-1">Hungry? Order Now</p>
                        <p className="text-sm lg:text-base font-bold leading-none">Order Online</p>
                    </div>

                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping -z-10" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
