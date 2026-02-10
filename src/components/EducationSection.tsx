import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    institution: "Technical Faculty, University of Rijeka",
    degree: "Bachelor's Degree in Computer Science",
    period: "2022 - 2025",
    grade: "3.75 GPA (3 years full-time)",
    description: "Comprehensive study focusing on algorithms, data structures, embedded systems, microprocessor architectures, and real-time systems programming."
  },
  {
    institution: "Salezijanska klasična gimnazija",
    degree: "Classical Gymnasium",
    period: "2018 - 2022",
    grade: "4.5 GPA (4 years)",
    description: "Classical education with strong emphasis on analytical thinking, mathematics, and foundational academic skills that support technical problem-solving."
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="code-font text-sm mb-4 block">// Education</span>
          <h2 className="section-heading">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="section-subheading mx-auto">
            Strong academic foundation in computer science and classical studies
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-accent/20" />

          {education.map((edu, index) => (
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
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50 z-10 border-2 border-background" />

              {/* Spacer for layout */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="ml-14 md:ml-0 md:w-1/2">
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <p className="text-accent font-medium text-sm">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-primary font-medium text-sm">{edu.grade}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
