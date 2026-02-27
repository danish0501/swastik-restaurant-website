import ScrollReveal from "@/components/ScrollReveal";

const OurStory = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                            <img
                                src="/images/ingredients.jpg"
                                alt="Fresh ingredients used at Swastik Restaurant"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                                From Our Kitchen to <span className="text-gradient-gold">Your Heart</span>
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Founded in 2010, Swastik Family Restaurant began as a humble
                                    dream — to create a space where families in Kalamboli could
                                    enjoy world-class food without leaving their neighborhood.
                                </p>
                                <p>
                                    What started as a small eatery has grown into Kalamboli's most
                                    trusted dining destination, serving over 200 families daily
                                    with our signature Indian, Chinese, Tandoor, and Sea Food
                                    specialties.
                                </p>
                                <p>
                                    Our chefs bring decades of experience and a passion for
                                    perfection. Every dish — from our aromatic biryanis to our
                                    sizzling tandoori platters — is prepared with the freshest
                                    ingredients and authentic spices, sourced daily.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default OurStory;
