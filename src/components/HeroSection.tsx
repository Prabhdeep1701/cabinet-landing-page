import { ArrowRight, Users, Target } from "lucide-react";
import VantaBackground from "@/components/VantaBackground";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative font-comic bg-black overflow-hidden">
      {/* Vanta Background */}
      <div className="absolute inset-0 z-0">
        <VantaBackground className="absolute inset-0" color={0xE5D5B8} backgroundColor={0x000000} />
        {/* Readability vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto fade-in-up">
          {/* Main Headline with 3D Effect */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight font-heading">
            Bennett University
            <span className="block text-4xl md:text-6xl mt-2 text-white/90 font-heading">
              Student Cabinet
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
            Leading with Vision. Serving with Purpose.
          </p>

          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
            Empowering students, fostering innovation, and building a vibrant academic community 
            that bridges excellence in education with meaningful student representation.
          </p>

          {/* 3D CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={() => scrollToSection("cabinet")}
              className="px-8 py-4 text-lg font-semibold rounded-full bg-white text-black hover:bg-white/90 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Users className="mr-2 h-5 w-5" />
              Meet the Cabinet
            </Button>
            <Button
              onClick={() => scrollToSection("vision")}
              variant="outline"
              className="px-8 py-4 text-lg font-semibold text-white border border-white/50 rounded-full bg-white/10"
            >
              <Target className="mr-2 h-5 w-5" />
              Our Vision
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* 3D Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-1 tracking-tight">15+</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Cabinet Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-1 tracking-tight">50+</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-1 tracking-tight">5000+</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">Students Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;