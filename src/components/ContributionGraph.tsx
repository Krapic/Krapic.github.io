import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContribResponse {
  total: Record<string, number>;
  contributions: Contribution[];
}

const fetchContribs = async (): Promise<ContribResponse> => {
  const res = await fetch("https://github-contributions-api.jogruber.de/v4/Krapic?y=last");
  if (!res.ok) throw new Error("Failed to fetch contributions");
  return res.json();
};

const levelClass: Record<number, string> = {
  0: "bg-secondary",
  1: "bg-primary/20",
  2: "bg-primary/40",
  3: "bg-primary/70",
  4: "bg-primary",
};

export const ContributionGraph = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["github-contribs", "Krapic"],
    queryFn: fetchContribs,
    staleTime: 1000 * 60 * 60,
    retry: 1,
  });

  if (isError) return null;

  const weeks: Contribution[][] = [];
  if (data?.contributions) {
    const first = data.contributions[0];
    const firstDayOfWeek = new Date(first.date).getDay();
    const padded: (Contribution | null)[] = [
      ...Array(firstDayOfWeek).fill(null),
      ...data.contributions,
    ];
    for (let i = 0; i < padded.length; i += 7) {
      weeks.push(padded.slice(i, i + 7).filter(Boolean) as Contribution[]);
    }
  }

  const total = data ? Object.values(data.total).reduce((a, b) => a + b, 0) : 0;

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-primary" />
              <div>
                <h3 className="text-lg font-semibold">GitHub Activity</h3>
                <p className="text-xs text-muted-foreground">Last 12 months</p>
              </div>
            </div>
            {!isLoading && (
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">{total}</span> contributions
              </span>
            )}
          </div>

          {isLoading ? (
            <div className="h-32 flex items-center justify-center text-muted-foreground text-sm">
              Loading contributions…
            </div>
          ) : (
            <div className="overflow-x-auto">
              <div className="flex gap-[3px] min-w-max">
                {weeks.map((week, i) => (
                  <div key={i} className="flex flex-col gap-[3px]">
                    {week.map((day) => (
                      <div
                        key={day.date}
                        className={`w-3 h-3 rounded-sm ${levelClass[day.level]} transition-colors`}
                        title={`${day.count} contributions on ${day.date}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground">
                <span>Less</span>
                {[0, 1, 2, 3, 4].map((l) => (
                  <div key={l} className={`w-3 h-3 rounded-sm ${levelClass[l]}`} />
                ))}
                <span>More</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
