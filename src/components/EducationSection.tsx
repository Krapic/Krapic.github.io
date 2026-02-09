import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

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

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-accent font-medium">{edu.grade}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
