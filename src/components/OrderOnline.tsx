import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import OrderButtons from "@/components/OrderButtons";
import DeliveryChecker from "@/components/DeliveryChecker";
import { ShoppingCart, MousePointer2, Sparkles } from "lucide-react";

const OrderOnline = () => {
    return (
        <section id="order-online" className="relative py-24 lg:py-32 overflow-hidden bg-charcoal">
            {/* Immersive Background */}
            <div
                className="absolute inset-0 bg-cover bg-fixed bg-center opacity-30 select-none"
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
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10 backdrop-blur-md shadow-xl"
                            >
                                <Sparkles className="w-3 h-3 animate-pulse" />
                                Exclusive Delivery Experiences
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

                    <div className="space-y-24">
                        <ScrollReveal delay={0.2}>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                <OrderButtons />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="max-w-4xl mx-auto relative">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="relative glassmorphism p-1 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                                    <DeliveryChecker />
                                </motion.div>

                                {/* Decorative badge */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center p-2 text-center rotate-12 shadow-2xl z-30">
                                    <span className="text-[10px] text-white font-black uppercase leading-tight tracking-widest">Free<br />In<br />Kalamboli</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Quality Assurance */}
                    <div className="mt-24 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-12 text-white/40">
                        <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
                            <span className="text-xs font-bold tracking-widest uppercase">Safe Packaging</span>
                        </div>
                        <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
                            <span className="text-xs font-bold tracking-widest uppercase">Hygienic Kitchen</span>
                        </div>
                        <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
                            <span className="text-xs font-bold tracking-widest uppercase">Real-Time Tracking</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderOnline;
