import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork, Code } from "lucide-react";
import type { GitHubRepo } from "@/hooks/useGitHubRepos";

interface ProjectCardProps {
  repo: GitHubRepo;
  index: number;
  onClick: () => void;
}

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  Java: "bg-orange-500",
  "C#": "bg-purple-500",
  HTML: "bg-red-500",
  CSS: "bg-pink-500",
  Vue: "bg-emerald-500",
  React: "bg-cyan-500",
  PHP: "bg-indigo-400",
  Ruby: "bg-red-600",
  Go: "bg-cyan-400",
  Rust: "bg-orange-600",
  Swift: "bg-orange-400",
  Kotlin: "bg-purple-400",
  Dart: "bg-blue-400",
  C: "bg-gray-500",
  "C++": "bg-pink-600",
};

export const ProjectCard = ({ repo, index, onClick }: ProjectCardProps) => {
  const languageColor = repo.language ? languageColors[repo.language] || "bg-gray-400" : "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden hover-lift group h-full flex flex-col cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-1">
              {repo.name}
            </h3>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub repository"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5" />
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Live demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
          {repo.description || "No description"}
        </p>

        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {repo.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="px-2 py-1 text-xs font-mono bg-secondary rounded-md text-primary"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {repo.language && (
              <span className="flex items-center gap-1.5">
                <span className={`w-3 h-3 rounded-full ${languageColor}`} />
                {repo.language}
              </span>
            )}
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
