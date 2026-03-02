import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryImage } from "./galleryData";
import { Filter, Eye, Utensils, Camera, Soup, Flame, Fish, MapPin } from "lucide-react";

interface GalleryGridProps {
    images: GalleryImage[];
    onImageClick: (index: number) => void;
}

const CATEGORIES = ["All", "Sea Food", "Tandoor", "Chinese", "Indian", "Ambience", "Kitchen"];

const CategoryIcon = ({ category }: { category: string }) => {
    switch (category) {
        case "Sea Food": return <Fish className="w-3.5 h-3.5" />;
        case "Tandoor": return <Flame className="w-3.5 h-3.5" />;
        case "Chinese": return <Soup className="w-3.5 h-3.5" />;
        case "Indian": return <Utensils className="w-3.5 h-3.5" />;
        case "Ambience": return <MapPin className="w-3.5 h-3.5" />;
        case "Kitchen": return <Camera className="w-3.5 h-3.5" />;
        default: return <Filter className="w-3.5 h-3.5" />;
    }
};

const GalleryGrid = ({ images, onImageClick }: GalleryGridProps) => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages = useMemo(() => {
        if (activeCategory === "All") return images;
        return images.filter(img => img.category === activeCategory);
    }, [images, activeCategory]);

    return (
        <section className="py-16 bg-background relative overflow-hidden">
            {/* ── Background Decoration ── */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container mx-auto px-4 max-w-[1400px]">
                {/* ── Grid Container ── */}
                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((img) => {
                            // Find original index for lightbox consistency
                            const originalIndex = images.findIndex(item => item.src === img.src);

                            return (
                                <motion.div
                                    key={img.src}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="break-inside-avoid"
                                >
                                    <button
                                        onClick={() => onImageClick(originalIndex)}
                                        className="group relative w-full overflow-hidden rounded-2xl cursor-pointer shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:shadow-primary/30 border border-white/5"
                                    >
                                        {/* Image wrapper */}
                                        <div className="aspect-[4/4] overflow-hidden bg-muted">
                                            <img
                                                src={img.src}
                                                alt={img.alt}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Interactive Overlay */}
                                        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            {/* Gradient base */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

                                            {/* Content container */}
                                            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-start gap-2 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                                {/* Category Badge */}
                                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30">
                                                    <CategoryIcon category={img.category} />
                                                    <span className="text-[10px] text-primary font-black uppercase tracking-widest">{img.category}</span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-white font-heading text-lg font-bold leading-tight line-clamp-2 text-left">
                                                    {img.alt}
                                                </h3>

                                                {/* View Button */}
                                                <div className="mt-2 flex items-center gap-2 text-gradient-gold font-bold text-[10px] uppercase tracking-widest group/view">
                                                    <div className="w-6 h-px bg-gradient-gold group-hover/view:w-10 transition-all duration-500" />
                                                    <Eye className="w-3 h-3 transition-transform" />
                                                    <span>View full image</span>
                                                </div>
                                            </div>

                                            {/* Floating Accent */}
                                            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 flex items-center justify-center -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                                                <Eye className="w-5 h-5 text-primary" />
                                            </div>
                                        </div>

                                        {/* Corner Decorative Shimmer */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                                    </button>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default GalleryGrid;
