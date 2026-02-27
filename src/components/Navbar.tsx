import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
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
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-heading font-bold text-gradient-gold">
              Swastik
            </span>
            <span className="hidden sm:inline text-sm text-muted-foreground font-body tracking-widest uppercase">
              Family Restaurant
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm font-body font-bold tracking-widest uppercase transition-colors duration-300 hover:text-primary py-1 ${isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-link"
                      className="absolute -bottom-0.4 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-base font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 98765 43210</span>
            </a>
            <MotionLink
              to="/#order-online"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-gold text-primary-foreground px-8 py-2.5 rounded-full text-base font-semibold tracking-wide uppercase shadow-lg hover:shadow-gold transition-all duration-300 button-shine"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('order-online')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Order Now
            </MotionLink>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-heading transition-colors ${location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
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
                className="bg-gradient-gold text-primary-foreground px-5 py-3 rounded-full text-sm font-bold tracking-wide uppercase text-center mt-2 shadow-md button-shine"
              >
                Order Now
              </MotionLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
