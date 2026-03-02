import ScrollReveal from "@/components/ScrollReveal";
import { UtensilsCrossed, Users, Rocket, Heart } from "lucide-react";

const OurStory = () => {
    return (
        <section className="relative py-16 bg-background overflow-hidden">
            {/* Soft decorative background circles */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left - Interactive Image Gallery */}
                    <div className="lg:col-span-5">
                        <ScrollReveal>
                            <div className="relative pt-12 pr-12">
                                {/* Large main image with decorative border */}
                                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl group border-2 border-border/50">
                                    <img
                                        src="/images/restaurant-interior.jpg"
                                        alt="Swastik Restaurant Interior"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Floating staggered image */}
                                <div className="absolute -bottom-8 -right-8 w-2/3 rounded-2xl overflow-hidden aspect-square shadow-2xl border-4 border-background group z-20">
                                    <img
                                        src="/images/ingredients.jpg"
                                        alt="Fresh ingredients"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
                                </div>

                                {/* Established Since Badge */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold rounded-full flex flex-col items-center justify-center text-white shadow-xl rotate-[12deg] z-30 transition-transform hover:rotate-0 hover:scale-110 duration-500 cursor-default">
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">Since</span>
                                    <span className="text-3xl font-heading font-black">2010</span>
                                </div>

                                {/* Decorative dots */}
                                <div className="absolute -top-6 -left-6 w-24 h-24 text-primary/20 pointer-events-none -z-10">
                                    <svg viewBox="0 0 100 100" fill="currentColor">
                                        <circle cx="2" cy="2" r="2" /><circle cx="22" cy="2" r="2" /><circle cx="42" cy="2" r="2" /><circle cx="62" cy="2" r="2" /><circle cx="82" cy="2" r="2" />
                                        <circle cx="2" cy="22" r="2" /><circle cx="22" cy="22" r="2" /><circle cx="42" cy="22" r="2" /><circle cx="62" cy="22" r="2" /><circle cx="82" cy="22" r="2" />
                                        <circle cx="2" cy="42" r="2" /><circle cx="22" cy="42" r="2" /><circle cx="42" cy="42" r="2" /><circle cx="62" cy="42" r="2" /><circle cx="82" cy="42" r="2" />
                                        <circle cx="2" cy="62" r="2" /><circle cx="22" cy="62" r="2" /><circle cx="42" cy="62" r="2" /><circle cx="62" cy="62" r="2" /><circle cx="82" cy="62" r="2" />
                                        <circle cx="2" cy="82" r="2" /><circle cx="22" cy="82" r="2" /><circle cx="42" cy="82" r="2" /><circle cx="62" cy="82" r="2" /><circle cx="82" cy="82" r="2" />
                                    </svg>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right - Content */}
                    <div className="lg:col-span-7">
                        <ScrollReveal>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-[2px] bg-primary"></div>
                                    <p className="text-primary font-body font-semibold tracking-[0.3em] uppercase text-sm">Our Legacy</p>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8 leading-[1.1]">
                                    A Journey of Flavor <br />
                                    <span className="text-gradient-gold italic font-serif">And Family Connection</span>
                                </h2>

                                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg mb-10">
                                    <p>
                                        Founded in 2010, <span className="text-foreground font-semibold italic">Swastik Family Restaurant</span> began as a humble
                                        dream — to create a sanctuary where the families of Kalamboli could enjoy
                                        world-class culinary experiences in the comfort of their neighborhood.
                                    </p>
                                    <p>
                                        What started with a handful of tables has blossomed into Kalamboli's premier
                                        dining landmark. Today, we proudly serve over <span className="text-primary font-bold">200+ families daily</span>,
                                        delivering our signature Indian and Tandoor specialties with unwavering passion.
                                    </p>
                                </div>

                                {/* Founder Vision / Signature Area */}
                                <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                    <div className="space-y-2">
                                        <p className="italic text-foreground/80 text-lg leading-relaxed">
                                            "Our kitchen is an extension of our home, and every guest is part of our family."
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <span className="font-heading font-bold text-primary tracking-widest uppercase text-sm">The Swastik Vision</span>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        {/* Stylized Badge or Signature placeholder */}
                                        <div className="inline-block px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-[0.1em] uppercase">
                                            Premium Quality Guaranteed
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurStory;

