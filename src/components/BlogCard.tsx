import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  index: number;
}

export const BlogCard = ({
  title,
  excerpt,
  date,
  readTime,
  category,
  image,
  index,
}: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden hover-lift group cursor-pointer"
    >
      {image && (
        <div className="relative h-52 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
            {category}
          </span>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {readTime}
          </span>
        </div>

        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>

        <span className="inline-flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
          Pročitaj više
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </motion.article>
  );
};
