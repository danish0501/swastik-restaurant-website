import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
  return (
    <main className="pt-20">
      <ContactHero />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
