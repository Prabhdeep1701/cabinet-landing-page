import { Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const CabinetSection = () => {
  // Real cabinet member data from uploaded images
  const members = [
    {
      name: "Aashi Shukla",
      role: "President",
      image: "/aashi-shukla.png",
      bio: "Leading the student body with passion and dedication to create positive change.",
      linkedin: "#",
      email: "aashi.shukla@bennett.edu.in",
      instagram: "#"
    },
    {
      name: "Namit Joshi", 
      role: "Vice President",
      image: "/namit-joshi.png",
      bio: "Supporting presidential initiatives and driving student engagement programs.",
      linkedin: "#",
      email: "namit.joshi@bennett.edu.in",
      instagram: "#"
    },
    {
      name: "Sumukh Chhabra",
      role: "General Secretary",
      image: "/sumukh-chhabra.png",
      bio: "Managing cabinet operations and coordinating student activities.",
      linkedin: "#",
      email: "sumukh.chhabra@bennett.edu.in",
      instagram: "#"
    },
    {
      name: "Manas Khandelwal",
      role: "Advisor",
      image: "/manas-khandelwal.png",
      bio: "Providing strategic guidance and mentorship to the cabinet team.",
      linkedin: "#",
      email: "manas.khandelwal@bennett.edu.in",
      instagram: "#"
    },
  ];

  return (
    <section id="cabinet" className="py-24 bg-white text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
            Meet Our Cabinet
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our dedicated team of student leaders who work tirelessly to represent your interests, organize impactful
            events, and create positive change across campus.
          </p>
          <div className="mt-6 mx-auto h-[3px] w-20 rounded-full bg-black/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
          {members.map((member, index) => (
            <div
              key={index}
              className="relative rounded-3xl border border-black/10 bg-white shadow-xl transition duration-300 ease-out hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col"
            >
              <div className="px-8 pt-16 pb-8 text-center flex-1 flex flex-col">
                {/* avatar */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover ring-2 ring-black/10 shadow-lg"
                  />
                </div>

                <h3 className="font-heading text-2xl font-bold mb-1">{member.name}</h3>
                <div className="text-muted-foreground mb-4">{member.role}</div>
                <p className="text-muted-foreground leading-relaxed text-sm max-w-md mx-auto">
                  {member.bio}
                </p>

                {/* socials */}
                <div className="mt-6 flex items-center justify-center gap-3 mt-auto">
                  <a href={member.linkedin} aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 grid place-items-center transition">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={`mailto:${member.email}`} aria-label="Email" className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 grid place-items-center transition">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href={member.instagram} aria-label="Instagram" className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 grid place-items-center transition">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default CabinetSection;