const AboutHero = () => {
    return (
        <section className="relative py-24 md:py-32">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/family-dining.jpg)" }}
            />
            <div className="absolute inset-0 overlay-dark" />
            <div className="relative z-10 container mx-auto px-4 text-center">
                <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                    About <span className="text-gradient-gold">Swastik</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    More than a restaurant — we're a family tradition in the heart of Kalamboli.
                </p>
            </div>
        </section>
    );
};

export default AboutHero;
