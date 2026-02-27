import ScrollReveal from "@/components/ScrollReveal";
import OrderButtons from "@/components/OrderButtons";
import DeliveryChecker from "@/components/DeliveryChecker";
import { ShoppingCart } from "lucide-react";

const OrderOnline = () => {
    return (
        <section id="order-online" className="relative py-16 overflow-hidden">
            {/* Background with parallax-like effect */}
            <div
                className="absolute inset-0 bg-cover bg-fixed bg-center z-0"
                style={{ backgroundImage: "url('/images/ingredients.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/80 to-charcoal/95 z-10" />

            <div className="container relative z-20 mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                                <ShoppingCart className="w-4 h-4" />
                                Premium Delivery Service
                            </div>
                            <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                                Order <span className="text-gradient-gold">Online</span>
                            </h2>
                            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-body">
                                Get your favorite Swastik flavors delivered fresh to your door.
                                Choose your platform or order directly for exclusive offers.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="mb-20">
                            <OrderButtons />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="max-w-4xl mx-auto">
                            <DeliveryChecker />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default OrderOnline;
