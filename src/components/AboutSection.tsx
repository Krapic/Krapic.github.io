import { resume } from "@/data/resume";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="code-font text-sm mb-4 block">// About me</span>
          <h2 className="section-heading">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="section-subheading mx-auto">
            Embedded software, firmware, and hardware-software integration
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">{resume.summary}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
