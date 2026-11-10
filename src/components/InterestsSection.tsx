import { motion } from "framer-motion";
import { Cpu, Zap, Wrench, BookOpen } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Cpu, Zap, Wrench, BookOpen];

export const InterestsSection = () => {
  const { t } = useLanguage();
  const interests = t.interests.items.map((it, i) => ({ ...it, icon: icons[i] ?? Cpu }));
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
          <span className="code-font text-sm mb-4 block">{t.interests.tag}</span>
          <h2 className="section-heading">
            {t.interests.headingPre} <span className="text-gradient">{t.interests.headingAccent}</span>
          </h2>
          <p className="section-subheading mx-auto">
            {t.interests.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
