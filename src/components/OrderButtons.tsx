import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ExternalLink } from "lucide-react";

interface PlatformCardProps {
  name: string;
  url?: string;
  onClick?: () => void;
  color: string;
  icon: string | React.ReactNode;
  description: string;
}

const PlatformCard = ({ name, url, onClick, color, icon, description }: PlatformCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative cursor-pointer"
      onClick={onClick}
    >
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          backgroundColor: color,
          opacity: isHovered ? 0.30 : 0.15,
        }}
      />

      <div
        className="relative p-6 rounded-2xl border backdrop-blur-sm shadow-xl transition-all duration-300"
        style={{
          backgroundColor: "hsl(var(--card) / 0.5)",
          borderColor: isHovered ? color : "rgba(255,255,255,0.10)",
          boxShadow: isHovered
            ? `0 20px 40px -12px ${color}55, 0 8px 16px -8px ${color}33`
            : "0 4px 24px 0 rgba(0,0,0,0.10)",
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg transition-transform duration-300"
            style={{
              backgroundColor: color,
              transform: isHovered ? "scale(1.1) rotate(-4deg)" : "scale(1) rotate(0deg)",
            }}
          >
            {icon}
          </div>
          <ExternalLink
            className="w-4 h-4 transition-colors duration-300"
            style={{ color: isHovered ? "#ffffff" : "hsl(var(--muted-foreground))" }}
          />
        </div>

        <h3
          className="text-xl font-heading font-bold mb-1 transition-colors duration-300"
          style={{ color: isHovered ? color : "hsl(var(--foreground))" }}
        >
          {name}
        </h3>
        <p className="text-sm text-foreground mb-4 line-clamp-1">{description}</p>

        <div
          className="flex items-center text-sm font-bold uppercase tracking-widest transition-all duration-300"
          style={{
            color: isHovered ? color : "hsl(var(--muted-foreground))",
            gap: isHovered ? "12px" : "8px",
          }}
        >
          Order Now <span className="text-lg">→</span>
        </div>
      </div>
    </motion.div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full">
        {content}
      </a>
    );
  }

  return <div className="w-full">{content}</div>;
};

const OrderButtons = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Swastik Family Restaurant, I want to place an order for delivery in Kalamboli. Here are my items:\n\n"
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
      <PlatformCard
        name="Zomato"
        url="https://www.zomato.com"
        color="hsl(0, 72%, 51%)"
        icon="🍽️"
        description="Fastest delivery to your doorstep"
      />
      <PlatformCard
        name="Swiggy"
        url="https://www.swiggy.com"
        color="hsl(24, 100%, 50%)"
        icon="🛵"
        description="Enjoy your favorite meals"
      />
      <PlatformCard
        name="WhatsApp"
        onClick={handleWhatsApp}
        color="hsl(142, 70%, 40%)"
        icon={<MessageCircle className="w-6 h-6 text-white" />}
        description="Direct order for best prices"
      />
    </div>
  );
};

export default OrderButtons;
