import { motion } from "framer-motion";
import { Code2, Cpu, Rocket, Briefcase } from "lucide-react";

const milestones = [
  {
    icon: Code2,
    year: "2019",
    title: "First lines of code",
    description:
      "Started programming at Salesian Classical Gymnasium, discovering a passion for problem-solving through code.",
  },
  {
    icon: Cpu,
    year: "2021",
    title: "Embedded systems & IoT",
    description:
      "Dove into microcontrollers, ESP32 and Arduino projects — connecting the physical world with software.",
  },
  {
    icon: Briefcase,
    year: "2023",
    title: "First developer role",
    description:
      "Joined INCUBIS d.o.o. as a Full Stack Developer, building real-world web applications.",
  },
  {
    icon: Rocket,
    year: "2024",
    title: "Embedded Developer at Torp",
    description:
      "Currently working on embedded systems at Torp d.o.o. while studying at the Technical Faculty, University of Rijeka.",
  },
];

export const JourneySection = () => {
  return (
    <section id="journey" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="code-font text-sm mb-4 block">// My journey</span>
          <h2 className="section-heading">
            The Road <span className="text-gradient">So Far</span>
          </h2>
          <p className="section-subheading mx-auto">
            Key milestones in my programming journey
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 md:w-1/2 ${
                  i % 2 === 0
                    ? "md:pr-12 md:text-right md:flex-row-reverse"
                    : "md:ml-auto md:pl-12"
                } pl-16 md:pl-0`}
              >
                <div
                  className={`absolute top-0 left-0 w-12 h-12 rounded-full border border-glass-border bg-glass/50 backdrop-blur-xl flex items-center justify-center ${
                    i % 2 === 0
                      ? "md:left-auto md:right-0 md:translate-x-1/2"
                      : "md:-translate-x-1/2"
                  }`}
                >
                  <m.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="glass-card p-6 flex-1">
                  <span className="code-font text-xs text-primary">{m.year}</span>
                  <h3 className="text-lg font-semibold mt-1 mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
