import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { ProjectCardSkeleton } from "./skeletons/ProjectCardSkeleton";
import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import type { GitHubRepo } from "@/hooks/useGitHubRepos";
import { useLanguage } from "@/i18n/LanguageContext";
import { Github, AlertCircle, RefreshCw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const ProjectsSection = () => {
  const { data: repos, isLoading, isError, refetch } = useGitHubRepos();
  const [selectedRepo, setSelectedRepo] = useState<GitHubRepo | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const { t } = useLanguage();
  const pinRef = useRef<HTMLDivElement>(null);

  const languages = repos
    ? ["All", ...Array.from(new Set(repos.map((r) => r.language).filter((l): l is string => !!l)))]
    : ["All"];
  const filteredRepos =
    activeFilter === "All" ? repos : repos?.filter((r) => r.language === activeFilter);

  useGSAP(
    () => {
      if (!filteredRepos?.length || !pinRef.current) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const wrap = pinRef.current!;
        const grid = wrap.querySelector<HTMLElement>(".projects-grid")!;
        const items = gsap.utils.toArray<HTMLElement>(".project-item", wrap);
        const viewH = () => window.innerHeight - 120;
        const overflow = () => Math.max(0, grid.offsetHeight - viewH());
        gsap.set(wrap, { height: () => Math.min(grid.offsetHeight, viewH()), overflow: "hidden" });
        gsap.set(items, { opacity: 0, y: 50, scale: 0.95 });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrap,
            start: "top 100px",
            end: () => `+=${items.length * 220 + overflow()}`,
            pin: true,
            refreshPriority: 1,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        tl.to(grid, { y: () => -overflow(), ease: "none", duration: items.length }, 0);
        items.forEach((el, i) => {
          tl.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" }, i * 0.9);
        });
        return () => gsap.set([wrap, grid, ...items], { clearProps: "all" });
      });
      const id = setTimeout(() => { ScrollTrigger.sort(); ScrollTrigger.refresh(); }, 400);
      return () => clearTimeout(id);
    },
    { dependencies: [filteredRepos?.length, activeFilter], revertOnUpdate: true },
  );

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="code-font text-sm mb-4 block">{t.projects.tag}</span>
          <h2 className="section-heading">
            {t.projects.headingPre} <span className="text-gradient">{t.projects.headingAccent}</span>
          </h2>
          <p className="section-subheading mx-auto">
            {t.projects.subheading}
          </p>
        </motion.div>

        {isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        )}

        {isError && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 gap-4"
          >
            <AlertCircle className="w-12 h-12 text-destructive" />
            <p className="text-muted-foreground text-center">
              {t.projects.error}
            </p>
            <button
              onClick={() => refetch()}
              className="flex items-center gap-2 px-4 py-2 glass-card hover:border-primary/50 transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              {t.projects.tryAgain}
            </button>
          </motion.div>
        )}

        {repos && repos.length > 0 && (
          <>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveFilter(lang)}
                  className={`px-4 py-1.5 rounded-full text-sm code-font transition-all duration-300 ${
                    activeFilter === lang
                      ? "bg-primary text-primary-foreground"
                      : "glass-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {lang === "All" ? t.projects.all : lang}
                </button>
              ))}
            </div>
            <div ref={pinRef}>
              <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-1">
                {filteredRepos?.map((repo, index) => (
                  <div key={repo.id} className="project-item h-full">
                    <ProjectCard repo={repo} index={index} onClick={() => setSelectedRepo(repo)} />
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a
                href="https://github.com/Krapic?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 glass-card hover:border-primary/50 text-foreground font-medium transition-all duration-300 hover-lift"
              >
                <Github className="w-5 h-5" />
                {t.projects.viewAll}
              </a>
            </motion.div>
          </>
        )}
      </div>

      <ProjectDetailModal repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
    </section>
  );
};
