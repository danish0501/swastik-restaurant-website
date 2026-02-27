import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { Users, Utensils, Sparkles, ShieldCheck } from "lucide-react";

const AmbiencePreview = () => {
    return (
        <section className="py-16 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col justify-center h-full">
                            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-semibold">Our Story</p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8 leading-tight">
                                A Place Where <span className="text-gradient-gold">Families</span> Gather
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                                Since 2010, Swastik Family Restaurant has been Kalamboli's
                                beloved dining destination. We believe that great food brings
                                families together — and that's exactly what we do, one plate at a
                                time.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-10 text-base">
                                Quality is the heart of everything we do. Whether you are dining in our 
                                elegant family-friendly atmosphere or enjoying our Free Home Delivery 
                                within Kalamboli, we ensure the same high standards of hygiene and taste. 
                                Swastik Family Restaurant isn't just a place to eat—it’s a commitment to 
                                providing premium, multi-cuisine dining that feels just like home.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Users className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Family Friendly</h4>
                                        <p className="text-sm text-muted-foreground">Spacious seating for large groups</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Utensils className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Authentic Taste</h4>
                                        <p className="text-sm text-muted-foreground">Traditional recipes & seafood</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Sparkles className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Perfect Ambience</h4>
                                        <p className="text-sm text-muted-foreground">Warm, inviting & refined space</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Hygiene First</h4>
                                        <p className="text-sm text-muted-foreground">Top-notch cleanliness & safety</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Link
                                    to="/menu"
                                     className="inline-block bg-gradient-gold text-primary-foreground px-12 py-4 rounded-full text-base font-semibold tracking-wide uppercase shadow-lg hover:shadow-gold transition-all duration-300 button-shine" 
                                >
                                    Discover Our Story
                                </Link>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square">
                                <img
                                    src="/images/restaurant-interior.jpg"
                                    alt="Swastik Family Restaurant interior ambience"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default AmbiencePreview;
