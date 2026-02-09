import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import { Github, Loader2, AlertCircle, RefreshCw } from "lucide-react";

export const ProjectsSection = () => {
  const { data: repos, isLoading, isError, refetch } = useGitHubRepos();

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
          <span className="code-font text-sm mb-4 block">// My projects</span>
          <h2 className="section-heading">
            GitHub <span className="text-gradient">Repositories</span>
          </h2>
          <p className="section-subheading mx-auto">
            A collection of my most significant projects and open-source contributions
          </p>
        </motion.div>

        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
            <p className="text-muted-foreground">Loading repositories...</p>
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
              Error loading repositories.
            </p>
            <button
              onClick={() => refetch()}
              className="flex items-center gap-2 px-4 py-2 glass-card hover:border-primary/50 transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Try again
            </button>
          </motion.div>
        )}

        {repos && repos.length > 0 && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, index) => (
                <ProjectCard key={repo.id} repo={repo} index={index} />
              ))}
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
                View all on GitHub
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};
