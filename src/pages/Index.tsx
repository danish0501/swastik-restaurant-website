import Hero from "@/components/Home/Hero";
import Categories from "@/components/Home/Categories";
import OrderOnline from "@/components/OrderOnline";
import AmbiencePreview from "@/components/Home/AmbiencePreview";
import ChefSignature from "@/components/Home/ChefSignature";
import Features from "@/components/Home/Features";
const Index = () => {
  return (
    <main>
      <Hero />
      <AmbiencePreview />
      <Categories />
      <Features />
      <ChefSignature />
      <OrderOnline />
    </main>
  );
};

export default Index;
