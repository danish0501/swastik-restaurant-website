import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-gradient-gold mb-4">
              Swastik
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Kalamboli's finest family restaurant serving authentic Indian,
              Chinese, Tandoor & Sea Food since 2010.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Menu", "Gallery", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Shop No. 5, Sector 5, Kalamboli, Navi Mumbai - 410218
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-1 shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Mon – Sun: 11:00 AM – 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Free Delivery Banner */}
          <div>
            <div className="bg-secondary rounded-lg p-6 border border-border">
              <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                🚀 Free Delivery!
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Exclusively for Kalamboli residents. Order directly and save!
              </p>
              <Link
                to="/menu"
                className="inline-block bg-gradient-gold text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Swastik Family Restaurant. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
