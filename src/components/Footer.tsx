import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Instagram, Facebook, ChefHat, Users, PartyPopper, Car, Bike, CreditCard, Utensils, Mail, Youtube, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-charcoal text-white py-16 overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold opacity-50" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
        >
          {/* Brand & Mission */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="/" className="inline-block group">
              <h3 className="text-3xl font-heading font-bold text-gradient-gold mb-2 group-hover:scale-105 transition-transform duration-300">
                Swastik
              </h3>
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-gold transition-all duration-300" />
            </Link>
            <p className="text-warm-white-dim text-sm leading-relaxed max-w-xs">
              Meticulously crafted flavors from Kalamboli's most beloved family restaurant. Serving authentic traditions since 2010 with a modern touch.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Youtube, label: "Youtube", href: "#" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-warm-white-dim hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading text-xl font-bold text-white mb-8 relative inline-block">
              Quick Navigation
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Menu", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-warm-white-dim hover:text-primary transition-colors flex items-center group text-sm"
                  >
                    <ArrowRight className="w-0 h-4 opacity-0 group-hover:w-4 group-hover:opacity-100 group-hover:mr-2 transition-all duration-300 text-primary" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading text-xl font-bold text-white mb-8 relative inline-block">
              Locate Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-1 group-hover:text-primary transition-colors">Find Us At</p>
                  <p className="text-xs text-warm-white-dim leading-relaxed">
                    Shop No. 5, Sector 5, Kalamboli,<br />Navi Mumbai - 410218
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-1 group-hover:text-primary transition-colors">Call For Orders</p>
                  <a href="tel:+919876543210" className="text-xs text-warm-white-dim hover:text-white transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-1 group-hover:text-primary transition-colors">Mail Us At</p>
                  <a href="mailto:contact@swastikrestaurant.com" className="text-xs text-warm-white-dim hover:text-white transition-colors">
                    contact@swastikrestaurant.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-1 group-hover:text-primary transition-colors">Service Hours</p>
                  <p className="text-xs text-warm-white-dim">Mon – Sun: 11:00 AM – 11:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Hub */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading text-xl font-bold text-white mb-8 relative inline-block">
              The Experience
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
            </h4>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <Bike className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Free Delivery</span>
                </div>
                <p className="text-xs text-warm-white-dim">Free delivery across all Sectors in Kalamboli. Min order ₹300.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <Utensils className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Catering</span>
                </div>
                <p className="text-xs text-warm-white-dim">Specialized outdoor catering & bulk orders for your events.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-6 text-center">
          <p className="text-xs text-warm-white-dim font-medium tracking-wide">
            © {new Date().getFullYear()} SWASTIK FAMILY RESTAURANT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8 text-xs text-warm-white-dim uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Mockup - Just Visual */}
      <motion.div
        className="absolute bottom-8 right-8 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all">
          <ExternalLink className="w-5 h-5" />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
