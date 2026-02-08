import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    title: "Alati & DevOps",
    skills: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions", "Linux"],
  },
  {
    title: "Dizajn",
    skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Accessibility"],
  },
];

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
          <span className="code-font text-sm mb-4 block">// Moje vještine</span>
          <h2 className="section-heading">
            Tehnologije i <span className="text-gradient">Alati</span>
          </h2>
          <p className="section-subheading mx-auto">
            Stalno učim i usavršavam svoje vještine u različitim tehnologijama
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 text-sm bg-secondary rounded-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
