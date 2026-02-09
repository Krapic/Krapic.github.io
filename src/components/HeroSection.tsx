import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useGitHubProfile } from "@/hooks/useGitHubProfile";

export const HeroSection = () => {
  const { data: profile } = useGitHubProfile();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {profile?.avatar_url && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img
              src={profile.avatar_url}
              alt={profile.name || profile.login}
              className="w-32 h-32 rounded-full mx-auto border-4 border-primary/30 shadow-xl shadow-primary/20"
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="code-font text-sm mb-4 block">// Welcome to my world of code</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-gradient">{profile?.name || profile?.login || "Krapic"}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto"
        >
          {profile?.bio || "Embedded Developer | Creating efficient hardware-software solutions"}
        </motion.p>

        {profile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center justify-center gap-6 mb-8 text-sm text-muted-foreground"
          >
            <span>{profile.public_repos} repositories</span>
            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span>{profile.followers} followers</span>
            {profile.location && (
              <>
                <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                <span>{profile.location}</span>
              </>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <a
            href={profile?.html_url || "https://github.com/Krapic"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card hover-lift hover:border-primary/50 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/frane-krapic/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card hover-lift hover:border-primary/50 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:krapicf@gmail.com"
            className="p-3 glass-card hover-lift hover:border-primary/50 transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm">Explore my projects</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};
