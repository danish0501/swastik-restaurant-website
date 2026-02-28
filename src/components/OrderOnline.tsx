import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import OrderButtons from "@/components/OrderButtons";
import DeliveryChecker from "@/components/DeliveryChecker";
import { Sparkles, Phone } from "lucide-react";

const OrderOnline = () => {
    return (
        <section id="order-online" className="relative py-16 overflow-hidden bg-charcoal">
            {/* Immersive Background */}
            <div
                className="absolute inset-0 bg-cover bg-fixed bg-center select-none"
                style={{ backgroundImage: "url('/images/ingredients.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/60 z-10" />

            {/* Floating particles/accents */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] z-10 pointer-events-none" />

            <div className="container relative z-20 mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-20">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className="flex flex-col items-center gap-4 mb-10"
                            >
                                <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-2xl px-8 py-3 text-sm text-primary font-bold tracking-wide">
                                    <Sparkles className="w-5 h-5 animate-bounce" />
                                    Exclusive Delivery Experiences
                                </div>
                            </motion.div>
                            <h2 className="text-6xl md:text-8xl font-heading font-bold text-white mb-8 tracking-tight">
                                Fresh & <span className="text-gradient-gold drop-shadow-2xl">Fast</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-warm-white-dim max-w-3xl mx-auto font-body leading-relaxed">
                                Experience the soul of India in every bite, delivered meticulously to your
                                doorstep within Kalamboli.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-14">
                        <ScrollReveal delay={0.2}>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                <OrderButtons />
                            </div>
                        </ScrollReveal>

                        {/* Contact Us CTA */}
                        <ScrollReveal delay={0.35}>
                            <div className="flex flex-col items-center gap-6">
                                {/* Divider with label */}
                                <div className="flex items-center gap-4 w-full max-w-sm">
                                    <div className="flex-1 h-px bg-white/70" />
                                    <span className="text-white/70 text-base uppercase tracking-[0.3em] font-bold whitespace-nowrap">
                                        Prefer to talk?
                                    </span>
                                    <div className="flex-1 h-px bg-white/70" />
                                </div>

                                {/* Button */}
                                <motion.div
                                    whileHover={{ scale: 1.04, y: -3 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Link
                                        to="/contact"
                                        className="group relative flex items-center gap-3 px-10 py-4 rounded-2xl border border-white/15 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                                        style={{ background: "rgba(255,255,255,0.04)" }}
                                    >
                                        {/* Shimmer overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Phone icon bubble */}
                                        <div className="relative z-10 w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                            <Phone className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                                        </div>

                                        <span className="relative z-10 text-sm font-bold tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors duration-300">
                                            Contact Us
                                        </span>
                                    </Link>
                                </motion.div>
                            </div>
                        </ScrollReveal>

                        {/* <ScrollReveal delay={0.4}>
                            <div className="max-w-4xl mx-auto relative">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="relative glassmorphism p-1 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                                    <DeliveryChecker />
                                </motion.div>

                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center p-2 text-center rotate-12 shadow-2xl z-30">
                                    <span className="text-[10px] text-white font-black uppercase leading-tight tracking-widest">Free<br />In<br />Kalamboli</span>
                                </div>
                            </div>
                        </ScrollReveal> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderOnline;
