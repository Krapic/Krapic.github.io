import { motion } from "framer-motion";
import { Code, Cpu, Globe } from "lucide-react";
import { resume } from "@/data/resume";
import { useLanguage } from "@/i18n/LanguageContext";
import { TiltCard } from "./TiltCard";

const icons = [Cpu, Globe, Code];

// Self-assessed proficiency (0-100) for the core skills shown as bars.
const coreLevels: { name: string; level: number }[] = [
  { name: "C/C++", level: 85 },
  { name: "STM32 / ESP32", level: 80 },
  { name: "Zephyr RTOS / FreeRTOS", level: 70 },
  { name: "UART / SPI / I2C / CAN", level: 80 },
  { name: "Hardware debugging", level: 75 },
  { name: "Python", level: 65 },
];

export const SkillsSection = () => {
  const { t } = useLanguage();

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
          <span className="code-font text-sm mb-4 block">{t.skills.tag}</span>
          <h2 className="section-heading">
            {t.skills.headingPre} <span className="text-gradient">{t.skills.headingAccent}</span>
          </h2>
          <p className="section-subheading mx-auto">{t.skills.subheading}</p>
        </motion.div>

        <div className="glass-card p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
            {coreLevels.map((s, i) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{s.name}</span>
                  <span className="code-font text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: i * 0.08, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resume.skills.map((group, categoryIndex) => {
            const Icon = icons[categoryIndex] ?? Code;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <TiltCard className="glass-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">
                      {t.skills.categories[categoryIndex] ?? group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-sm rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
        <div className="glass-card p-6 mt-8">
          <h3 className="text-lg font-semibold mb-4">{t.skills.languagesTitle}</h3>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {resume.languages.map((language, i) => (
              <div key={language.name}>
                <dt className="font-medium">{t.skills.languageNames[i] ?? language.name}</dt>
                <dd className="text-muted-foreground text-sm mt-1">{t.skills.languageLevels[i] ?? language.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
