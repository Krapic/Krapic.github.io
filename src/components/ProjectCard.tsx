import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  stars?: number;
  forks?: number;
  image?: string;
  index: number;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  stars,
  forks,
  image,
  index,
}: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden hover-lift group"
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub repository"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono bg-secondary rounded-md text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {(stars !== undefined || forks !== undefined) && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {stars !== undefined && (
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                {stars}
              </span>
            )}
            {forks !== undefined && (
              <span className="flex items-center gap-1">
                <GitFork className="w-4 h-4" />
                {forks}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
};
