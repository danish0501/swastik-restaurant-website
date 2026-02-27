import { motion } from "framer-motion";
import { MessageCircle, ExternalLink, ShoppingBag } from "lucide-react";

interface PlatformCardProps {
  name: string;
  url?: string;
  onClick?: () => void;
  color: string;
  icon: string | React.ReactNode;
  description: string;
}

const PlatformCard = ({ name, url, onClick, color, icon, description }: PlatformCardProps) => {
  const content = (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <div className={`absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity bg-[${color}]`}
        style={{ backgroundColor: color }} />
      <div className="relative p-6 rounded-2xl border border-white/10 bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg"
            style={{ backgroundColor: color }}>
            {typeof icon === 'string' ? icon : icon}
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-heading font-bold mb-1 text-black">{name}</h3>
        <p className="text-sm text-foreground mb-4 line-clamp-1">{description}</p>
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white group-hover:gap-3 transition-all">
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
