import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Users, Utensils, Sparkles, ShieldCheck, ArrowUpRight } from "lucide-react";

const AmbiencePreview = () => {
    return (
        <section className="py-24 bg-background overflow-hidden relative">
            {/* Background Texture/Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }} />

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="flex flex-col justify-center h-full order-2 lg:order-1">
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-primary text-xs tracking-[0.5em] uppercase mb-6 font-bold"
                            >
                                Heritage & Hospitality
                            </motion.p>
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
                                <Link
                                    to="/about"
                                    className="group flex items-center gap-3 bg-gradient-gold text-white px-10 py-5 rounded-2xl text-sm font-bold tracking-widest uppercase shadow-xl hover:shadow-gold/40 transition-all duration-300 relative overflow-hidden"
                                >
                                    <span className="relative z-10">Discover Our Story</span>
                                    <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    <div className="button-shine" />
                                </Link>

                                <Link
                                    to="/menu"
                                    className="flex items-center justify-center gap-2 px-10 py-5 rounded-2xl text-sm font-bold tracking-widest uppercase border-2 border-primary/20 hover:border-primary hover:text-primary transition-all duration-300"
                                >
                                    View Full Menu
                                </Link>
                            </div>
                        </div>

                        <div className="relative order-1 lg:order-2">
                            {/* Decorative Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -top-10 -left-10 z-20 hidden xl:block"
                            >
                                <div className="glassmorphism p-6 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-2xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Currently</p>
                                            <h5 className="font-heading font-bold text-foreground">Open Now</h5>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
                                <img
                                    src="/images/restaurant-interior.jpg"
                                    alt="Swastik Family Restaurant interior ambience"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Image Overlay Badge */}
                                <div className="absolute bottom-8 left-8 right-8 p-8 glassmorphism-dark rounded-3xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <p className="text-white/70 text-xs uppercase tracking-[0.2em] font-bold mb-2">Prime Ambience</p>
                                    <h4 className="text-2xl font-heading font-bold text-white">Sophisticated Comfort</h4>
                                </div>
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
