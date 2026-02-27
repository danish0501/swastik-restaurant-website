import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const OrderButtons = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Swastik Family Restaurant, I want to place an order for delivery in Kalamboli. Here are my items:\n\n"
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      {/* Zomato */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://www.zomato.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[hsl(0,72%,51%)] text-white px-6 py-3.5 rounded-lg font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
      >
        🍽️ Order on Zomato
      </motion.a>

      {/* Swiggy */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://www.swiggy.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[hsl(24,100%,50%)] text-white px-6 py-3.5 rounded-lg font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
      >
        🛵 Order on Swiggy
      </motion.a>

      {/* WhatsApp */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsApp}
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[hsl(142,70%,40%)] text-white px-6 py-3.5 rounded-lg font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
      >
        <MessageCircle className="w-4 h-4" />
        Direct Order via WhatsApp
      </motion.button>
    </div>
  );
};

export default OrderButtons;
