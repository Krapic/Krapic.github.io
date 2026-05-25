import { motion } from "framer-motion";
import { useMemo } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { useGitHubProfile } from "@/hooks/useGitHubProfile";
import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import { Code, Cpu, Layers, Award } from "lucide-react";

const CAREER_START = new Date("2023-09-01");

const StatItem = ({
  value,
  suffix,
  label,
  Icon,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  Icon: typeof Code;
  index: number;
}) => {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="p-3 bg-primary/10 rounded-full w-14 h-14 mx-auto mb-3 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="text-4xl font-bold text-gradient mb-1">
        {count}
        {suffix}
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </motion.div>
  );
};

export const StatsSection = () => {
  const { data: profile } = useGitHubProfile();
  const { data: repos } = useGitHubRepos();

  const stats = useMemo(() => {
    const repoCount = profile?.public_repos ?? 11;
    const languages = new Set<string>();
    repos?.forEach((r) => r.language && languages.add(r.language));
    const langCount = languages.size || 6;
    const years = Math.max(
      1,
      Math.floor((Date.now() - CAREER_START.getTime()) / (1000 * 60 * 60 * 24 * 365)),
    );

    return [
      { value: repoCount, suffix: "+", label: "GitHub Repositories", Icon: Code },
      { value: langCount, suffix: "+", label: "Languages Used", Icon: Layers },
      { value: 5, suffix: "+", label: "MCU Platforms", Icon: Cpu },
      { value: years, suffix: "+", label: "Years of Experience", Icon: Award },
    ];
  }, [profile, repos]);

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
