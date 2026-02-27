import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Search, Truck, MapPin } from "lucide-react";

const DeliveryChecker = () => {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"idle" | "eligible" | "ineligible">("idle");
  const [isFocused, setIsFocused] = useState(false);

  const handleCheck = () => {
    const trimmed = query.trim().toLowerCase();
    if (trimmed.includes("kalamboli")) {
      setStatus("eligible");
    } else if (trimmed.length > 0) {
      setStatus("ineligible");
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-white">
              Check Delivery
            </h3>
            <p className="text-xs text-neutral-400 uppercase tracking-widest">
              Available in Kalamboli
            </p>
          </div>
        </div>

        <div className={`relative flex gap-2 p-1 rounded-2xl border transition-all duration-300 ${isFocused ? 'bg-white/10 border-primary shadow-lg shadow-primary/20' : 'bg-white/5 border-white/10'}`}>
          <div className="relative flex-1 flex items-center">
            <MapPin className={`absolute left-4 w-5 h-5 transition-colors ${isFocused ? 'text-primary' : 'text-neutral-500'}`} />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setStatus("idle");
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={(e) => e.key === "Enter" && handleCheck()}
              placeholder="Enter your location..."
              className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder:text-neutral-500 focus:outline-none text-base"
              maxLength={100}
            />
          </div>
          <button
            onClick={handleCheck}
            className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg hover:shadow-gold/40"
          >
            Check
          </button>
        </div>

        <AnimatePresence mode="wait">
          {status === "eligible" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3 text-green-400"
            >
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <p className="text-sm font-medium">
                Great news! We offer <span className="text-white font-bold">Free Home Delivery</span> in your area! 🎉
              </p>
            </motion.div>
          )}
          {status === "ineligible" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center gap-3 text-orange-400"
            >
              <XCircle className="w-5 h-5 shrink-0" />
              <p className="text-sm font-medium">
                Free delivery is exclusive to Kalamboli, but you can still order via Zomato or Swiggy!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DeliveryChecker;
