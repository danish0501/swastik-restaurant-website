import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Users, Utensils, Sparkles, ShieldCheck, Crown, ArrowRight } from "lucide-react";

const MotionLink = motion(Link);

const AmbiencePreview = () => {
    return (
        <section className="py-16 bg-background overflow-hidden relative">
            {/* Background Texture/Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }} />

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="flex flex-col justify-center h-full order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2.5 mb-6 w-fit cursor-default"
                            >
                                <div
                                    className="flex items-center gap-3 bg-primary border border-primary/20 backdrop-blur-sm rounded-full px-8 py-3 text-base text-white font-semibold tracking-wide"
                                >
                                    <Crown className="w-4 h-4 text-white shrink-0" />
                                    Heritage & Hospitality
                                    <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse shrink-0" />
                                </div>
                            </motion.div>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-10 leading-[1.1]">
                                A Place Where <br />
                                <span className="text-gradient-gold">Families</span> Gather
                            </h2>

                            <div className="space-y-6 mb-12">
                                <p className="text-muted-foreground leading-relaxed text-lg border-l-4 border-primary/20 pl-6 py-2 italic">
                                    "Since 2010, Swastik Family Restaurant has been Kalamboli's
                                    beloved dining destination. We believe that great food brings
                                    families together."
                                </p>
                                <p className="text-muted-foreground leading-relaxed text-base pl-7">
                                    Quality is the heart of everything we do. From our elegant AC dining
                                    to Free Home Delivery, we maintain excellence in every bite.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    { icon: Users, title: "Family Friendly", desc: "Spacious AC Seating" },
                                    { icon: Utensils, title: "Authentic Taste", desc: "Heritage Recipes" },
                                    { icon: Sparkles, title: "Perfect Ambience", desc: "Refined & Warm" },
                                    { icon: ShieldCheck, title: "Hygiene First", desc: "Safety Committed" },
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50 group hover:bg-white hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors shadow-inner">
                                            <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground text-sm uppercase tracking-wide">{item.title}</h4>
                                            <p className="text-[11px] text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <MotionLink
                                    to="/about"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative bg-gradient-gold text-white px-8 py-4 flex items-center gap-2 rounded-full font-semibold tracking-widest uppercase shadow-2xl hover:shadow-gold/40 transition-all duration-300 overflow-hidden"
                                >
                                    <span className="relative z-10">Discover Our Story</span>
                                    <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                                    <div className="absolute bg-white/20 opacity-0 transition-opacity duration-300" />
                                    <div className="button-shine" />
                                </MotionLink>

                                <MotionLink
                                    to="/menu"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group bg-white/5 backdrop-blur-xl border-2 border-primary text-primary px-12 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-gradient-gold hover:text-white hover:border-none transition-all duration-500 shadow-xl"
                                >
                                    View Full Menu
                                </MotionLink>
                            </div>
                        </div>

                        <div className="relative order-1 lg:order-2">
                            <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
                                <img
                                    src="/images/restaurant-interior.jpg"
                                    alt="Swastik Family Restaurant interior ambience"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Image Overlay Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    className="absolute bottom-8 left-8 right-8 p-6 glassmorphism-dark rounded-3xl transition-all duration-300 cursor-default"
                                    style={{
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                                    }}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        <p className="text-white/70 text-[10px] uppercase tracking-[0.25em] font-bold">Prime Ambience</p>
                                    </div>
                                    <h4 className="text-xl font-heading font-bold text-white mb-1">Sophisticated Comfort</h4>
                                    <p className="text-white/50 text-xs">Where every detail is crafted for you</p>
                                </motion.div>
                            </div>

                            {/* Decorative Circles */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse" />
                            <div className="absolute top-20 -right-20 w-64 h-64 bg-gold/10 rounded-full blur-[100px] -z-10" />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default AmbiencePreview;
