import { motion } from "framer-motion";
import { BlogCard } from "./BlogCard";

const blogPosts = [
  {
    title: "How I Learned React in 30 Days - My Experience and Tips",
    excerpt: "Sharing my journey into the world of React, from beginner to productive developer. What I learned and which mistakes to avoid.",
    date: "February 15, 2025",
    readTime: "8 min",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    title: "TypeScript Best Practices - Guide to Cleaner Code",
    excerpt: "Practical tips for writing maintainable TypeScript code. Learn how to avoid common pitfalls and write professional code.",
    date: "February 8, 2025",
    readTime: "12 min",
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
  },
  {
    title: "Building RESTful APIs with Node.js and Express",
    excerpt: "Step-by-step guide to creating a scalable backend API. From project setup to deployment.",
    date: "February 1, 2025",
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
          <span className="code-font text-sm mb-4 block">// My blog</span>
          <h2 className="section-heading">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className="section-subheading mx-auto">
            Sharing my knowledge, experiences, and thoughts on web development
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
            View all articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};
