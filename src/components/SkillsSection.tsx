import { motion } from "framer-motion";
import { Code, Cpu, Globe } from "lucide-react";
import { resume } from "@/data/resume";

const skillCategories = resume.skills.map((group, index) => ({
  title: group.title,
  skills: group.items,
  icon: [Cpu, Globe, Code][index],
}));

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="code-font text-sm mb-4 block">// Skills</span>
          <h2 className="section-heading">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-subheading mx-auto">
            Specialized expertise in embedded systems and hardware programming
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-sm rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="glass-card p-6 mt-8">
          <h3 className="text-lg font-semibold mb-4">Languages</h3>
          <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {resume.languages.map(language => <div key={language.name}><dt className="font-medium">{language.name}</dt><dd className="text-muted-foreground text-sm mt-1">{language.level}</dd></div>)}
          </dl>
        </div>
      </div>
    </section>
  );
};
