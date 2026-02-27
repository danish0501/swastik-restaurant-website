import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Search } from "lucide-react";

const DeliveryChecker = () => {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"idle" | "eligible" | "ineligible">("idle");

  const handleCheck = () => {
    const trimmed = query.trim().toLowerCase();
    if (trimmed.includes("kalamboli")) {
      setStatus("eligible");
    } else if (trimmed.length > 0) {
      setStatus("ineligible");
    }
  };

  return (
    <div className="bg-secondary rounded-xl p-6 md:p-8 border border-border">
      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
        🚚 Check Delivery Availability
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Enter your area to check if you qualify for free home delivery.
      </p>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setStatus("idle");
            }}
            onKeyDown={(e) => e.key === "Enter" && handleCheck()}
            placeholder="Enter your area (e.g., Kalamboli)"
            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            maxLength={100}
          />
        </div>
        <button
          onClick={handleCheck}
          className="bg-gradient-gold text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shrink-0"
        >
          Check
        </button>
      </div>

      <AnimatePresence>
        {status === "eligible" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 mt-4 text-[hsl(142,70%,45%)]"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm font-semibold">
              You qualify for Free Home Delivery! 🎉
            </span>
          </motion.div>
        )}
        {status === "ineligible" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 mt-4 text-destructive"
          >
            <XCircle className="w-5 h-5" />
            <span className="text-sm">
              Sorry, free delivery is currently available only for Kalamboli. You can still order via Zomato or Swiggy!
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DeliveryChecker;
