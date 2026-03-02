import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { GalleryImage } from './galleryData';

interface GalleryLightboxProps {
    selectedImage: number | null;
    images: GalleryImage[];
    onClose: () => void;
    onNext?: () => void;
    onPrev?: () => void;
}

const GalleryLightbox = ({ selectedImage, images, onClose, }: GalleryLightboxProps) => {
    if (selectedImage === null) return null;

    const currentImage = images[selectedImage];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 transition-all duration-300"
                onClick={onClose}
            >
                {/* Controls Overlay */}
                <div className="absolute top-0 right-0 p-6 flex items-center justify-between z-20">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onClose}
                            className="group p-3 rounded-full bg-background/50 border border-white/10 hover:border-primary/50 hover:bg-primary/5 text-foreground transition-all duration-300"
                            aria-label="Close lightbox"
                        >
                            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Content Container */}
                <div className="relative w-full h-full flex items-center justify-center p-4">
                    {/* Lightbox Image */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, scaleZ: 0.5 }}
                        animate={{ scale: 1, opacity: 1, scaleZ: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative max-w-[95vw] max-h-[90vh] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={currentImage.src}
                            alt={currentImage.alt}
                            className="w-full h-full max-h-[90vh] object-contain"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default GalleryLightbox;
