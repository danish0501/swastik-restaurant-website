import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const AmbiencePreview = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                                A Place Where <span className="text-gradient-gold">Families</span> Gather
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Since 2010, Swastik Family Restaurant has been Kalamboli's
                                beloved dining destination. We believe that great food brings
                                families together — and that's exactly what we do, one plate at a
                                time.
                            </p>
                            <Link
                                to="/about"
                                className="inline-block border border-primary text-primary px-6 py-3 rounded-lg font-semibold text-sm tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                                Our Story
                            </Link>
                        </div>
                        <div className="relative rounded-xl overflow-hidden aspect-square">
                            <img
                                src="/images/restaurant-interior.jpg"
                                alt="Swastik Family Restaurant interior ambience"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 border border-primary/20 rounded-xl" />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default AmbiencePreview;
