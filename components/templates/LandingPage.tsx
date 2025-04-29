import ContactForm from "../organisms/ContactForm";
import FAQS from "../organisms/FAQs";
import Features from "../organisms/Features";
import HeroSection from "../organisms/Hero";
import Pricing from "../organisms/Pricing";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Pricing />
      <FAQS />
      <ContactForm />
    </main>
  );
}
