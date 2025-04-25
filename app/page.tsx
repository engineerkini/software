
import Header from "./components/layout/Header";
import ContactSection from "./pages/contact";
import FAQSection from "./pages/FAQ";
import HeroSection from "./pages/home";
import ServicesSection from "./pages/services";


export default function MainHome() {
  return (
    <>
      {/* <ParticleComponent />  */}
      <Header />
      <HeroSection />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
