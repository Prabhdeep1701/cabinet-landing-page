import { Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-hero rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">BU</span>
            </div>
            <span className="font-bold text-lg">Student Cabinet</span>
          </div>
            <p className="text-white/80 leading-relaxed">
              Leading with vision, serving with purpose. The official student representative body of Bennett University.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("about");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("cabinet");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("vision");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Vision & Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* University Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Bennett University</h3>
            <p className="text-white/80 mb-4">
              Plot No. 8-11, Tech Zone II<br />
              Greater Noida, Uttar Pradesh<br />
              India - 201310
            </p>
            <a
              href="https://www.bennett.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white/90 hover:text-white transition-colors"
            >
              Visit Bennett University
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 mb-4 md:mb-0">
              © {currentYear} Bennett University Student Cabinet. All rights reserved.
            </p>
            <p className="flex items-center text-white/80">
              Made with <Heart className="mx-2 h-4 w-4 text-white/90" /> by the Student Cabinet
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;