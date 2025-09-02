import { useState, useEffect } from "react";
import PillNav from "@/components/PillNav";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Home", href: "hero" },
    { label: "About", href: "about" },
    { label: "Cabinet", href: "cabinet" },
    { label: "Vision", href: "vision" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md" : ""}`}>
      <div className="container mx-auto px-4">
        <PillNav
          logo={''}
          items={navItems.map(i => ({ label: i.label, href: `#${i.href}` }))}
          baseColor={'#000000'}
          pillColor={'#0a0812'}
          hoveredPillTextColor={'#ffffff'}
          pillTextColor={'#ffffff'}
          className="mt-2"
          initialLoadAnimation={true}
          showLogo={false}
        />
      </div>
    </nav>
  );
};

export default Navigation;