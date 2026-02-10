import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Star, GitFork, Eye, Calendar, Code } from "lucide-react";
import type { GitHubRepo } from "@/hooks/useGitHubRepos";

interface ProjectDetailModalProps {
  repo: GitHubRepo | null;
  onClose: () => void;
}

export const ProjectDetailModal = ({ repo, onClose }: ProjectDetailModalProps) => {
  if (!repo) return null;

  const createdDate = new Date(repo.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const updatedDate = new Date(repo.updated_at).toLocaleDateString("en-US", {
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
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">{repo.name}</h2>
          </div>

          <p className="text-muted-foreground mb-6">
            {repo.description || "No description available."}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-secondary/50 rounded-lg">
              <Star className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold">{repo.stargazers_count}</p>
              <p className="text-xs text-muted-foreground">Stars</p>
            </div>
            <div className="text-center p-3 bg-secondary/50 rounded-lg">
              <GitFork className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold">{repo.forks_count}</p>
              <p className="text-xs text-muted-foreground">Forks</p>
            </div>
            <div className="text-center p-3 bg-secondary/50 rounded-lg">
              <Eye className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold">{repo.stargazers_count}</p>
              <p className="text-xs text-muted-foreground">Watchers</p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3 mb-6 text-sm">
            {repo.language && (
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Language</span>
                <span className="font-medium">{repo.language}</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Created</span>
              <span className="font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {createdDate}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Last updated</span>
              <span className="font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {updatedDate}
              </span>
            </div>
          </div>

          {/* Topics */}
          {repo.topics && repo.topics.length > 0 && (
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">Topics</p>
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
          <div className="flex gap-3">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-all"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 glass-card hover:border-primary/50 font-medium transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
