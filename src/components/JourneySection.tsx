import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);
import { Code2, Cpu, Rocket, Briefcase } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Code2, Cpu, Briefcase, Rocket];

export const JourneySection = () => {
  const { t } = useLanguage();
  const milestones = t.journey.milestones.map((m, i) => ({ ...m, icon: icons[i] ?? Code2 }));
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray<HTMLElement>(".journey-item");
        gsap.set(items, { opacity: 0.15, y: 40, scale: 0.96 });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${items.length * 350}`,
            pin: true,
            refreshPriority: -1,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        tl.fromTo(".journey-progress", { scaleY: 0 }, { scaleY: 1, ease: "none", duration: items.length }, 0);
        items.forEach((el, i) => {
          tl.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" }, i);
        });
      });
      const id = setTimeout(() => { ScrollTrigger.sort(); ScrollTrigger.refresh(); }, 500);
      return () => clearTimeout(id);
    },
    { scope: sectionRef, dependencies: [t] },
  );

  return (
    <section ref={sectionRef} id="journey" className="py-16 md:min-h-screen md:flex md:items-center px-6">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="code-font text-sm mb-4 block">{t.journey.tag}</span>
          <h2 className="section-heading">
            {t.journey.headingPre} <span className="text-gradient">{t.journey.headingAccent}</span>
          </h2>
          <p className="section-subheading mx-auto">
            {t.journey.subheading}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          <div className="journey-progress absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px bg-gradient-to-b from-primary to-accent origin-top" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`journey-item relative flex items-start gap-6 md:w-1/2 ${
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
