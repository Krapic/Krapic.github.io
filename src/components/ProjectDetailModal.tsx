import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Star, GitFork, Eye, Calendar, Code, FileText } from "lucide-react";
import type { GitHubRepo } from "@/hooks/useGitHubRepos";
import { resume } from "@/data/resume";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
const miproPaperPdf = { url: `${import.meta.env.BASE_URL}docs/mipro-2026-fitness-tracker-paper.pdf` };

interface ProjectDetailModalProps {
  repo: GitHubRepo | null;
  onClose: () => void;
}

export const ProjectDetailModal = ({ repo, onClose }: ProjectDetailModalProps) => {
  const { t, lang } = useLanguage();
  if (!repo) return null;
  const project = resume.projects.find(project => project.repository === repo.name);
  const conference = project?.conference;
  const localized = t.modal.projectDetails[repo.name];
  const locale = lang === "hr" ? "hr-HR" : "en-US";

  const createdDate = new Date(repo.created_at).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const updatedDate = new Date(repo.updated_at).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="glass-card p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-detail-title"
        >
          <Button
            variant="ghost"
            size="icon"
            aria-label={t.modal.close}
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-primary" />
            <h2 id="project-detail-title" className="text-2xl font-bold break-words min-w-0">{repo.name}</h2>
          </div>

          {project?.context && <p className="text-primary text-sm mb-3">{localized?.context ?? project.context}</p>}
          <p className="text-muted-foreground mb-6">
            {localized?.description || repo.description || t.modal.noDescription}
          </p>

          {conference && <div className="mb-6 rounded-xl border border-primary/30 bg-primary/5 p-4">
            <p className="text-primary font-semibold text-sm mb-2">{t.modal.conferencePaper} · {conference.event}</p>
            <p className="text-sm font-medium mb-2">{localized?.conferenceTitle ?? conference.title}</p>
            <p className="text-muted-foreground text-xs">{conference.authors}</p>
            <p className="text-muted-foreground text-xs mt-1">{localized?.conferenceDate ?? conference.date}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">
              <a href={conference.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary text-sm hover:underline">{t.modal.viewProgram} <ExternalLink size={14} className="shrink-0" /></a>
              <a href={miproPaperPdf.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary text-sm hover:underline">{t.modal.readPaper} <FileText size={14} className="shrink-0" /></a>
            </div>
          </div>}
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-secondary/50 rounded-lg">
              <Star className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold">{repo.stargazers_count}</p>
              <p className="text-xs text-muted-foreground">{t.modal.stars}</p>
            </div>
            <div className="text-center p-3 bg-secondary/50 rounded-lg">
              <GitFork className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold">{repo.forks_count}</p>
              <p className="text-xs text-muted-foreground">{t.modal.forks}</p>
            </div>
            <div className="text-center p-3 bg-secondary/50 rounded-lg">
              <Eye className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold">{repo.stargazers_count}</p>
              <p className="text-xs text-muted-foreground">{t.modal.watchers}</p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3 mb-6 text-sm">
            {repo.language && (
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">{t.modal.language}</span>
                <span className="font-medium">{repo.language}</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">{t.modal.created}</span>
              <span className="font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {createdDate}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">{t.modal.lastUpdated}</span>
              <span className="font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {updatedDate}
              </span>
            </div>
          </div>

          {/* Topics */}
          {repo.topics && repo.topics.length > 0 && (
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">{t.modal.topics}</p>
              <div className="flex flex-wrap gap-2">
                {repo.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-primary"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-all"
            >
              <Github className="w-5 h-5" />
              {t.modal.viewOnGithub}
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 glass-card hover:border-primary/50 font-medium transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                {t.modal.liveDemo}
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
