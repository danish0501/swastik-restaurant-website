import ScrollReveal from "@/components/ScrollReveal";
import OrderButtons from "@/components/OrderButtons";
import DeliveryChecker from "@/components/DeliveryChecker";

const OrderOnline = () => {
    return (
        <section className="py-24 bg-card">
            <div className="container mx-auto px-4 max-w-4xl">
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Delivery</p>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                            Order <span className="text-gradient-gold">Online</span>
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Choose your preferred platform or order directly via WhatsApp for the best deals.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <OrderButtons />
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <div className="mt-10">
                        <DeliveryChecker />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default OrderOnline;
