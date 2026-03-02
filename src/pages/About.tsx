import AboutHero from "@/components/About/AboutHero";
import OurStory from "@/components/About/OurStory";
import Values from "@/components/About/Values";
import Stats from "@/components/About/Stats";
import OrderOnline from "@/components/OrderOnline";
import Experience from "@/components/About/RestaurantExperience";

const About = () => {
  return (
    <main className="pt-20">
      <AboutHero />
      <OurStory />
      <Stats />
      <Experience />
      <Values />
      <OrderOnline />
    </main>
  );
};

export default About;
