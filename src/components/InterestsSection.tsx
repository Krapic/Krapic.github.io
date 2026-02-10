import { motion } from "framer-motion";
import { Cpu, Zap, Lightbulb, Wrench, BookOpen, Mountain } from "lucide-react";

const interests = [
  {
    title: "Electronics & Hardware",
    icon: Cpu,
    description: "Exploring circuit design, PCB development, and working with various electronic components and sensors"
  },
  {
    title: "IoT Innovation",
    icon: Zap,
    description: "Developing connected devices and exploring edge computing solutions for smart systems"
  },
  {
    title: "Open Source Hardware",
    icon: Lightbulb,
    description: "Contributing to open-source hardware projects and learning from the maker community"
  },
  {
    title: "DIY Projects",
    icon: Wrench,
    description: "Building custom embedded solutions, automation systems, and experimenting with new technologies"
  },
  {
    title: "Technical Learning",
    icon: BookOpen,
    description: "Staying current with embedded systems trends, RTOS development, and low-level optimization techniques"
  },
  {
    title: "Outdoor Activities",
    icon: Mountain,
    description: "Hiking and exploring Croatia's nature, often integrating portable electronics and GPS tracking projects"
  }
];

export const InterestsSection = () => {
  return (
    <section id="interests" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="code-font text-sm mb-4 block">// Interests</span>
          <h2 className="section-heading">
            Interests & <span className="text-gradient">Hobbies</span>
          </h2>
          <p className="section-subheading mx-auto">
            Beyond coding - exploring hardware innovation and embedded technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <interest.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{interest.title}</h3>
              <p className="text-muted-foreground text-sm">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
