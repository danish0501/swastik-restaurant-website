import AboutHero from "@/components/About/AboutHero";
import OurStory from "@/components/About/OurStory";
import Values from "@/components/About/Values";
import Stats from "@/components/About/Stats";

const About = () => {
  return (
    <main className="pt-20">
      <AboutHero />
      <OurStory />
      <Values />
      <Stats />
    </main>
  );
};

export default About;
