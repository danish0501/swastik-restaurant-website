import { useState } from "react";
import GalleryHero from "@/components/Gallery/GalleryHero";
import GalleryGrid from "@/components/Gallery/GalleryGrid";
import GalleryLightbox from "@/components/Gallery/GalleryLightbox";
import { galleryImages } from "@/components/Gallery/galleryData";
import OrderOnline from "@/components/OrderOnline";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = () => {
    setSelectedImage((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  };

  const handlePrev = () => {
    setSelectedImage((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );
  };

  return (
    <main className="pt-20 bg-background min-h-screen">
      <GalleryHero />

      <GalleryGrid
        images={galleryImages}
        onImageClick={(index) => setSelectedImage(index)}
      />

      <GalleryLightbox
        selectedImage={selectedImage}
        images={galleryImages}
        onClose={() => setSelectedImage(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      <OrderOnline />
    </main>
  );
};

export default Gallery;
