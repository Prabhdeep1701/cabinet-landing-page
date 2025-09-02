import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CabinetSection from "@/components/CabinetSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CabinetSection />
        <VisionSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
