import Hero from "@/components/Home/Hero";
import Categories from "@/components/Home/Categories";
import OrderOnline from "@/components/OrderOnline";
import AmbiencePreview from "@/components/Home/AmbiencePreview";
import ChefSignature from "@/components/Home/ChefSignature";
import Features from "@/components/Home/RestaurantFeatures";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <main>
      <Hero />
      <AmbiencePreview />
      <Categories />
      <Features />
      <ChefSignature />
      <OrderOnline />
      <FloatingCTA />
    </main>
  );
};

export default Index;
