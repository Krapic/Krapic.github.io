import { motion } from "framer-motion";
import { Award, ExternalLink, FileText } from "lucide-react";
import { resume } from "@/data/resume";

const achievements = [
  {
    icon: FileText,
    title: "Conference Paper — MIPRO 2026 / SSE",
    description:
      "Co-authored and presented \"Fitness Tracker Connected to the Internet Using a Wi-Fi Network\" at the MIPRO 2026 convention in Opatija, Croatia.",
    date: "May 2026",
    url: resume.projects[0].conference?.url,
    pdf: miproPaperPdf.url,
    pdfLabel: "Read full paper (PDF)",
  },
  {
    icon: Award,
    title: "Bachelor's Thesis — Connected Fitness Tracker",
    description:
      "Research prototype on nRF7002 DK / Zephyr RTOS with motion sensing, LVGL interface, and MQTT over TLS telemetry.",
    date: "2025",
    url: undefined,
    pdf: thesisPdf.url,
    pdfLabel: "Read full thesis (PDF)",
  },
];

export const CertificatesSection = () => {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="code-font text-sm mb-4 block">// Achievements</span>
          <h2 className="section-heading">
            Certificates & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="section-subheading mx-auto">
            Publications, awards, and notable milestones
          </p>
        </motion.div>

        <div className="space-y-6">
          {achievements.map((a, index) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex gap-5 hover-lift"
            >
              <div className="p-3 bg-primary/10 rounded-xl h-fit flex-shrink-0">
                <a.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h3 className="font-semibold text-lg text-foreground">{a.title}</h3>
                  <span className="code-font text-xs">{a.date}</span>
                </div>
                <p className="text-muted-foreground mt-2 leading-relaxed">{a.description}</p>
                {a.url && (
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary hover:underline"
                  >
                    View publication
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
