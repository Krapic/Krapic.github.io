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
          <span className="code-font text-sm mb-4 block">// O meni</span>
          <h2 className="section-heading">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="section-subheading mx-auto">
            Passionate developer with a strong foundation in both theoretical and practical aspects of computer science
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
            <p className="text-muted-foreground">
              Passionate embedded systems developer with expertise in C/C++ programming, microcontroller development, and IoT solutions. 
              My computer science background has equipped me with strong analytical skills and deep understanding of 
              hardware-software integration and real-time systems.
            </p>
            <p className="text-muted-foreground">
              Currently working as an embedded developer at Torp d.o.o., I specialize in low-level programming, 
              sensor integration, communication protocols, and firmware development. I enjoy optimizing code for 
              resource-constrained environments and solving complex hardware interfacing challenges.
            </p>
            <p className="text-muted-foreground">
              My journey began with a strong classical education foundation, followed by comprehensive computer science 
              studies. This combination provides me with both theoretical knowledge and practical skills to develop 
              efficient embedded solutions across various industries.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
