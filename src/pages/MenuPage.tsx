import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import OrderButtons from "@/components/OrderButtons";
import DeliveryChecker from "@/components/DeliveryChecker";

type MenuItem = {
  name: string;
  price: number;
  desc: string;
  veg: boolean;
};

const menuData: Record<string, MenuItem[]> = {
  Indian: [
    { name: "Paneer Butter Masala", price: 260, desc: "Creamy tomato gravy with soft paneer cubes", veg: true },
    { name: "Dal Tadka", price: 180, desc: "Yellow lentils tempered with cumin & garlic", veg: true },
    { name: "Chicken Biryani", price: 320, desc: "Fragrant basmati rice layered with spiced chicken", veg: false },
    { name: "Mutton Rogan Josh", price: 380, desc: "Tender mutton in rich Kashmiri spice gravy", veg: false },
    { name: "Veg Thali", price: 220, desc: "Complete meal with dal, sabzi, roti, rice & salad", veg: true },
    { name: "Butter Chicken", price: 300, desc: "Tandoori chicken in buttery tomato cream sauce", veg: false },
    { name: "Palak Paneer", price: 240, desc: "Cottage cheese in creamy spinach gravy", veg: true },
    { name: "Egg Curry", price: 200, desc: "Boiled eggs simmered in onion-tomato masala", veg: false },
  ],
  Chinese: [
    { name: "Veg Manchurian", price: 200, desc: "Crispy vegetable balls in tangy soy sauce", veg: true },
    { name: "Hakka Noodles", price: 180, desc: "Stir-fried noodles with fresh vegetables", veg: true },
    { name: "Chicken Fried Rice", price: 220, desc: "Wok-tossed rice with tender chicken pieces", veg: false },
    { name: "Chilli Chicken", price: 260, desc: "Spicy Indo-Chinese chicken with bell peppers", veg: false },
    { name: "Paneer Chilli", price: 240, desc: "Crispy paneer tossed in spicy chilli sauce", veg: true },
    { name: "Dragon Chicken", price: 280, desc: "Fiery chicken with Schezwan & red chilli", veg: false },
    { name: "Veg Spring Rolls", price: 160, desc: "Crispy rolls stuffed with mixed vegetables", veg: true },
    { name: "Schezwan Noodles", price: 200, desc: "Spicy Schezwan sauce with stir-fried noodles", veg: true },
  ],
  Tandoor: [
    { name: "Tandoori Chicken", price: 320, desc: "Whole chicken marinated in yogurt & spices, clay oven roasted", veg: false },
    { name: "Seekh Kebab", price: 280, desc: "Spiced minced meat skewers grilled to perfection", veg: false },
    { name: "Paneer Tikka", price: 240, desc: "Marinated cottage cheese grilled in tandoor", veg: true },
    { name: "Chicken Malai Tikka", price: 300, desc: "Cream & cheese marinated chicken, melt-in-mouth", veg: false },
    { name: "Tandoori Roti", price: 30, desc: "Whole wheat bread baked in clay oven", veg: true },
    { name: "Butter Naan", price: 50, desc: "Soft leavened bread brushed with butter", veg: true },
    { name: "Garlic Naan", price: 60, desc: "Naan infused with fresh garlic & coriander", veg: true },
    { name: "Fish Tikka", price: 340, desc: "Fresh fish marinated in tandoori spices", veg: false },
  ],
  "Sea Food": [
    { name: "Prawns Butter Masala", price: 420, desc: "Jumbo prawns in rich buttery tomato cream", veg: false },
    { name: "Fish Curry", price: 350, desc: "Fresh Surmai in coastal coconut curry", veg: false },
    { name: "Crab Masala", price: 480, desc: "Whole crab cooked in spicy Malvani masala", veg: false },
    { name: "Grilled Pomfret", price: 450, desc: "Whole pomfret marinated & grilled with herbs", veg: false },
    { name: "Prawns Koliwada", price: 380, desc: "Crispy fried prawns with Mumbai-style coating", veg: false },
    { name: "Fish Fry", price: 320, desc: "Crispy fried Surmai with Recheado masala", veg: false },
    { name: "Squid Masala", price: 360, desc: "Tender squid rings in fiery Goan curry", veg: false },
    { name: "Lobster Thermidor", price: 650, desc: "Lobster in creamy cheese sauce, gratinated", veg: false },
  ],
};

const tabs = Object.keys(menuData);

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("Indian");

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Explore</p>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">Menu</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From aromatic Indian curries to sizzling tandoor specials and premium sea food.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-gold text-primary-foreground shadow-gold"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto"
            >
              {menuData[activeTab].map((item) => (
                <div
                  key={item.name}
                  className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`w-3 h-3 rounded-sm border-2 ${
                            item.veg
                              ? "border-[hsl(142,70%,45%)]"
                              : "border-destructive"
                          }`}
                        >
                          <span
                            className={`block w-1.5 h-1.5 rounded-full m-[1px] ${
                              item.veg
                                ? "bg-[hsl(142,70%,45%)]"
                                : "bg-destructive"
                            }`}
                          />
                        </span>
                        <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <span className="text-primary font-heading font-bold text-lg shrink-0">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Order Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                Ready to <span className="text-gradient-gold">Order?</span>
              </h2>
              <p className="text-muted-foreground">
                Pick your favorite platform or order directly for the best deals.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <OrderButtons />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-10">
              <DeliveryChecker />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
