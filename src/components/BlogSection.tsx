import { motion } from "framer-motion";
import { BlogCard } from "./BlogCard";

const blogPosts = [
  {
    title: "Kako sam naučio React u 30 dana - Moje iskustvo i savjeti",
    excerpt: "Dijeljenje mog putovanja u svijet React-a, od početnika do produktivnog developera. Što sam naučio i koje greške izbjegavati.",
    date: "15. Veljače 2025",
    readTime: "8 min",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    title: "TypeScript Best Practices - Vodič za čišći kod",
    excerpt: "Praktični savjeti za pisanje održivog TypeScript koda. Naučite kako izbjeći česte zamke i pisati profesionalni kod.",
    date: "8. Veljače 2025",
    readTime: "12 min",
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
  },
  {
    title: "Izgradnja RESTful API-ja s Node.js i Express",
    excerpt: "Korak po korak vodič za izradu skalabilnog backend API-ja. Od postavljanja projekta do deploy-a.",
    date: "1. Veljače 2025",
    readTime: "15 min",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="code-font text-sm mb-4 block">// Moj blog</span>
          <h2 className="section-heading">
            Najnoviji <span className="text-gradient">Članci</span>
          </h2>
          <p className="section-subheading mx-auto">
            Dijelim svoje znanje, iskustva i razmišljanja o web developmentu
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.title} {...post} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 glass-card hover:border-primary/50 text-foreground font-medium transition-all duration-300 hover-lift">
            Prikaži sve članke
          </button>
        </motion.div>
      </div>
    </section>
  );
};
