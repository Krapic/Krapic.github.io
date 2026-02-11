import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { Code, Cpu, Layers, Award } from "lucide-react";

const stats = [
  { label: "GitHub Repositories", value: 11, icon: Code, suffix: "+" },
  { label: "Technologies", value: 30, icon: Layers, suffix: "+" },
  { label: "MCU Platforms", value: 5, icon: Cpu, suffix: "+" },
  { label: "Years of Experience", value: 2, icon: Award, suffix: "+" },
];

const StatItem = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const { count, ref } = useCountUp(stat.value, 2000);

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
        <stat.icon className="w-6 h-6 text-primary" />
      </div>
      <div className="text-4xl font-bold text-gradient mb-1">
        {count}{stat.suffix}
      </div>
      <p className="text-muted-foreground text-sm">{stat.label}</p>
    </motion.div>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
