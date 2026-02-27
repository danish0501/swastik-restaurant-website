import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Menu", path: "/menu" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const MotionLink = motion(Link);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-charcoal/95 backdrop-blur-xl border-b border-white/10 py-5 shadow-2xl"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-gold flex items-center justify-center rotate-3 group-hover:rotate-[363deg] transition-all duration-700 shadow-gold/20">
              <span className="text-white font-heading font-black text-xl uppercase select-none">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-white transition-colors group-hover:text-primary">
                Swastik
              </span>
              <span className="text-[9px] font-body tracking-[0.3em] uppercase text-warm-white-dim/60 transition-colors">
                Family Restaurant
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-xs font-body font-bold tracking-[0.2em] uppercase transition-all duration-300 py-2 group ${isActive ? "text-primary" : "text-white/80 hover:text-primary"
                    }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                </Link>
              );
            })}
          </div>

          {/* CTA Group */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 text-xs font-bold text-white/80 hover:text-primary transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20">
                <Phone className="w-4 h-4" />
              </div>
              <span className="tracking-widest">+91 98765 43210</span>
            </a>

            <MotionLink
              to="/#order-online"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('order-online')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-gold text-white px-7 py-3 rounded-2xl text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="relative z-10 flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Order Online</span>
              </div>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="button-shine" />
            </MotionLink>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "100vh" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-charcoal/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-12 flex flex-col items-center gap-8 justify-center h-full">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl font-heading font-bold transition-colors ${location.pathname === item.path ? "text-primary" : "text-white/60 hover:text-white"
                      }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="w-full mt-8"
              >
                <MotionLink
                  to="/#order-online"
                  onClick={(e) => {
                    setIsOpen(false);
                    if (location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('order-online')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full bg-gradient-gold text-white px-8 py-5 rounded-2xl text-center text-sm font-bold tracking-widest uppercase shadow-xl"
                >
                  Order Now
                </MotionLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
