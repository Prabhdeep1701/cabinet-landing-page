import { Award, Heart, Lightbulb, Shield } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Leadership",
      description: "Leading by example and inspiring positive change across campus"
    },
    {
      icon: Heart,
      title: "Service",
      description: "Dedicated to serving our fellow students with passion and commitment"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Bringing fresh ideas and creative solutions to student challenges"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for excellence in everything we do, from academics to community service"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Our Cabinet
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The Bennett University Student Cabinet serves as the voice of our student body, 
            working tirelessly to bridge the gap between administration and students while 
            fostering a vibrant campus culture that celebrates diversity, innovation, and academic excellence.
          </p>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center fade-in-up card-elevated p-8 rounded-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h3 className="text-3xl font-bold mb-6 text-gradient">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To create an inclusive, dynamic, and empowering environment where every Bennett University 
                student can thrive academically, socially, and personally. We are committed to representing 
                student interests, fostering meaningful connections, and driving positive change across our campus.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Advocate for student rights and welfare
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Organize impactful events and initiatives
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Bridge communication between students and administration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Promote academic and personal growth opportunities
                </li>
              </ul>
            </div>
            <div className="fade-in-right">
              <div className="bg-gradient-hero rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Our Impact</h4>
                <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-white">2023-24</div>
                  <div className="text-white/90">Academic Year</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-white/90">Events Organized</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-white/90">Student Satisfaction in Key Initiatives</div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;