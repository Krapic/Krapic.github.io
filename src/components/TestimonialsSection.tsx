import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";


export const TestimonialsSection = () => {
  // Placeholder testimonials (in translations) — replace with real recommendations.
  const { t: tr } = useLanguage();
  const testimonials = tr.testimonials.items;
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
          <span className="code-font text-sm mb-4 block">{tr.testimonials.tag}</span>
          <h2 className="section-heading">
            {tr.testimonials.headingPre} <span className="text-gradient">{tr.testimonials.headingAccent}</span>
          </h2>
          <p className="section-subheading mx-auto">
            {tr.testimonials.subheading}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.figure
              key={index}
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
