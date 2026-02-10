import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Torp d.o.o.",
    position: "Embedded Developer",
    period: "December 2024 - Present",
    type: "Full-time",
    description: "Developing embedded systems and firmware solutions. Working with microcontrollers, real-time systems, and low-level programming to create efficient and reliable embedded applications.",
    technologies: ["C/C++", "Embedded Systems", "Microcontrollers", "Real-time Systems"]
  },
  {
    company: "INCUBIS d.o.o.",
    position: "Full Stack Developer",
    period: "October 2023 - February 2024",
    type: "Internship",
    description: "Gained hands-on experience in full-stack web development, working on both frontend and backend systems. Collaborated with the development team to build scalable web applications and learn industry best practices.",
    technologies: ["JavaScript", "React", "Node.js", "Database Management", "Web Development"]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="code-font text-sm mb-4 block">// Experience</span>
          <h2 className="section-heading">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subheading mx-auto">
            Professional journey spanning full-stack web development and embedded systems
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 z-10 border-2 border-background" />

              {/* Spacer for layout */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="ml-14 md:ml-0 md:w-1/2">
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{exp.position}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-primary font-medium text-sm">{exp.company}</p>
                        <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
