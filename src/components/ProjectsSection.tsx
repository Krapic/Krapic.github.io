import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Potpuno funkcionalna e-commerce platforma s košaricom, plaćanjem i admin panelom.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    stars: 128,
    forks: 34,
  },
  {
    title: "Task Management App",
    description: "Aplikacija za upravljanje zadacima s real-time ažuriranjima i timskom suradnjom.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    stars: 89,
    forks: 21,
  },
  {
    title: "AI Chat Assistant",
    description: "Inteligentni chatbot koji koristi OpenAI API za prirodnu konverzaciju.",
    technologies: ["Python", "FastAPI", "OpenAI", "Redis"],
    githubUrl: "https://github.com",
    stars: 256,
    forks: 67,
  },
  {
    title: "Weather Dashboard",
    description: "Moderna vremenska prognoza s vizualizacijama i lokacijskim praćenjem.",
    technologies: ["Vue.js", "D3.js", "Weather API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    stars: 45,
    forks: 12,
  },
  {
    title: "Fitness Tracker",
    description: "Mobilna aplikacija za praćenje vježbi, prehrane i napretka.",
    technologies: ["React Native", "Firebase", "Chart.js"],
    githubUrl: "https://github.com",
    stars: 78,
    forks: 19,
  },
  {
    title: "Blog CMS",
    description: "Sustav za upravljanje sadržajem s markdown podrškom i SEO optimizacijom.",
    technologies: ["Gatsby", "GraphQL", "Contentful"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    stars: 112,
    forks: 28,
  },
];

export const ProjectsSection = () => {
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
          <span className="code-font text-sm mb-4 block">// Moji projekti</span>
          <h2 className="section-heading">
            Istaknuti <span className="text-gradient">Repozitoriji</span>
          </h2>
          <p className="section-subheading mx-auto">
            Zbirka mojih najznačajnijih projekata i open-source doprinosa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
