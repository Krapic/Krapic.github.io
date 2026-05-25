import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { Icon: Github, href: "https://github.com/Krapic", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/frane-krapic/", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:krapicf@gmail.com", label: "Email" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.substring(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative py-12 px-6 border-t border-border bg-secondary/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-3">
            <span className="text-xl font-bold glow-text">&lt;Frane Krapić /&gt;</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Embedded engineer crafting reliable firmware and IoT solutions for
              resource-constrained hardware.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-foreground">
              Connect
            </h3>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="p-2.5 glass-card hover:border-primary/50 transition-all hover-lift"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">Rijeka 51000, Croatia</p>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-muted-foreground text-xs">
            © {currentYear} Frane Krapić. All rights reserved.
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.footer>
  );
};
