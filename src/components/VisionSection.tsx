import { Target, Users, Lightbulb, Heart, Trophy, Globe } from "lucide-react";

const VisionSection = () => {
  const visionItems = [
    {
      icon: Target,
      title: "Leadership Development",
      description: "Empowering students to become confident leaders who can drive positive change in their communities and beyond."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Creativity",
      description: "Fostering an environment where innovative ideas flourish and creative solutions to campus challenges are born."
    },
    {
      icon: Heart,
      title: "Student Welfare",
      description: "Prioritizing the physical, mental, and emotional well-being of every student in our community."
    },
    {
      icon: Users,
      title: "Unity & Inclusion",
      description: "Building bridges across diverse backgrounds and creating an inclusive campus where everyone belongs."
    },
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Supporting initiatives that enhance learning experiences and promote academic achievement."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students for global citizenship and fostering international collaboration and understanding."
    }
  ];

  return (
    <section id="vision" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Top intro section - left aligned headline and blurb */}
        <div className="max-w-4xl mb-12">
          <p className="uppercase text-sm tracking-wider text-white/60 mb-4">Our Vision & Mission</p>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Enterprise-grade student leadership and community building
          </h2>
          <p className="text-white/70 max-w-2xl">
            Robust initiatives and clear direction to support students at scale: collaboration, development,
            and well-being with transparent governance and inclusive participation.
          </p>
        </div>

        {/* Grid with subtle separators */}
        <div className="border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {visionItems.map((item, index) => (
              <div key={index} className="border-b md:border-b border-white/10 md:border-r p-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Be Part of Our Vision</h3>
            <p className="text-white/70 max-w-xl">
              Your ideas, participation, and feedback are essential to making our vision a reality. Join us in
              building a better tomorrow for all Bennett University students.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition"
            >
              Get Involved
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;