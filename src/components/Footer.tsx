import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-8 px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold glow-text">&lt;/&gt;</span>
          <span className="text-muted-foreground text-sm">
            © {currentYear} Portfolio. Sva prava pridržana.
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          Izrađeno s <span className="text-primary">♥</span> koristeći React & Tailwind
        </p>
      </div>
    </motion.footer>
  );
};
