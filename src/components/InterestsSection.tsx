import { Cpu, Zap, Lightbulb, Wrench, BookOpen, Mountain } from "lucide-react";

export const InterestsSection = () => {
  const interests = [
    {
      title: "Electronics & Hardware",
      icon: <Cpu className="w-6 h-6" />,
      description: "Exploring circuit design, PCB development, and working with various electronic components and sensors"
    },
    {
      title: "IoT Innovation",
      icon: <Zap className="w-6 h-6" />,
      description: "Developing connected devices and exploring edge computing solutions for smart systems"
    },
    {
      title: "Open Source Hardware",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Contributing to open-source hardware projects and learning from the maker community"
    },
    {
      title: "DIY Projects",
      icon: <Wrench className="w-6 h-6" />,
      description: "Building custom embedded solutions, automation systems, and experimenting with new technologies"
    },
    {
      title: "Technical Learning",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Staying current with embedded systems trends, RTOS development, and low-level optimization techniques"
    },
    {
      title: "Outdoor Activities",
      icon: <Mountain className="w-6 h-6" />,
      description: "Hiking and exploring Croatia's nature, often integrating portable electronics and GPS tracking projects"
    }
  ];

  return (
    <section id="interests" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 section-fade-in">
          <h2 className="text-3xl font-bold mb-4">Interests & Hobbies</h2>
          <p className="text-muted-foreground text-lg">
            Beyond coding - exploring hardware innovation and embedded technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div key={index} className="portfolio-card text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                <div className="text-primary">{interest.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{interest.title}</h3>
              <p className="text-muted-foreground text-sm">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};