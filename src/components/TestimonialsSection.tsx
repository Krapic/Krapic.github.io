import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Placeholder testimonials — replace with real recommendations.
const testimonials = [
  {
    quote:
      "Frane quickly picked up our motor-controller toolchain and became a reliable part of the firmware team. His hardware debugging skills are well beyond student level.",
    name: "Engineering Mentor",
    role: "Torp d.o.o.",
  },
  {
    quote:
      "As technical lead of our maze-solver project, Frane kept the team organized and delivered a clean, well-integrated application.",
    name: "Project Teammate",
    role: "University of Rijeka",
  },
  {
    quote:
      "His bachelor's thesis work on the connected fitness tracker showed strong independence — from sensor integration all the way to a published conference paper.",
    name: "Thesis Supervisor",
    role: "Faculty of Engineering, Rijeka",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="code-font text-sm mb-4 block">// Testimonials</span>
          <h2 className="section-heading">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="section-subheading mx-auto">
            Feedback from mentors, supervisors, and teammates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex flex-col hover-lift"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <blockquote className="text-muted-foreground leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-primary">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
