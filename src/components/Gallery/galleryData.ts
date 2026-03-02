export interface GalleryImage {
    src: string;
    alt: string;
    category: string;
}

export const galleryImages: GalleryImage[] = [
    { src: "/images/hero-food.jpg", alt: "Grand food spread at Swastik Restaurant", category: "Food" },
    { src: "/images/seafood.jpg", alt: "Premium seafood platter", category: "Sea Food" },
    { src: "/images/tandoor.jpg", alt: "Tandoori specialties from clay oven", category: "Tandoor" },
    { src: "/images/chinese.jpg", alt: "Chinese wok dishes", category: "Chinese" },
    { src: "/images/indian.jpg", alt: "Traditional Indian thali", category: "Indian" },
    { src: "/images/restaurant-interior.jpg", alt: "Restaurant interior ambience", category: "Ambience" },
    { src: "/images/ingredients.jpg", alt: "Fresh cooking ingredients and spices", category: "Kitchen" },
    { src: "/images/family-dining.jpg", alt: "Families dining at Swastik Restaurant", category: "Ambience" },
];
