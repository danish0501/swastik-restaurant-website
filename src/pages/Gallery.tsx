import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const galleryImages = [
  { src: "/images/hero-food.jpg", alt: "Grand food spread at Swastik Restaurant", category: "Food" },
  { src: "/images/seafood.jpg", alt: "Premium seafood platter", category: "Sea Food" },
  { src: "/images/tandoor.jpg", alt: "Tandoori specialties from clay oven", category: "Tandoor" },
  { src: "/images/chinese.jpg", alt: "Chinese wok dishes", category: "Chinese" },
  { src: "/images/indian.jpg", alt: "Traditional Indian thali", category: "Indian" },
  { src: "/images/restaurant-interior.jpg", alt: "Restaurant interior ambience", category: "Ambience" },
  { src: "/images/ingredients.jpg", alt: "Fresh cooking ingredients and spices", category: "Kitchen" },
  { src: "/images/family-dining.jpg", alt: "Families dining at Swastik Restaurant", category: "Ambience" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Visual Feast</p>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">Gallery</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A glimpse into the flavors, ambience, and warmth of Swastik Family Restaurant.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <button
                  onClick={() => setSelectedImage(i)}
                  className="group relative block w-full overflow-hidden rounded-xl break-inside-avoid cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                        {img.category}
                      </span>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
