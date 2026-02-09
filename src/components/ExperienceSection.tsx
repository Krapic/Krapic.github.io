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

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-primary font-medium">{exp.company}</p>
                    <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-sm rounded-full text-muted-foreground"
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
