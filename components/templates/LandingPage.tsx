import FAQS from "../organisms/FAQs";
import Features from "../organisms/Features";
import HeroSection from "../organisms/Hero";
import Pricing from "../organisms/Pricing";
import SimpleContactForm from "../organisms/SimpleContactForm";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Pricing />
      <FAQS />
      <SimpleContactForm />
    </main>
  );
}
