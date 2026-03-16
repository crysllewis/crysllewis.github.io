import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description?: string;
  index: number;
  id: string;
  status?: string;
}

export default function ProjectCard({ title, category, image, description, index, id, status }: ProjectCardProps) {
  return (
    <Link href={`/case-study/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative cursor-pointer block h-full"
      >
        <div className="glass rounded-3xl overflow-hidden p-2 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] hover:border-white/20 h-full flex flex-col">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden flex-shrink-0">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                <ArrowUpRight className="w-5 h-5 text-black" />
              </div>
            </div>
          </div>
          
          <div className="p-6 flex-grow flex flex-col">
            <span className="text-sm font-medium tracking-wider uppercase mb-2 block text-[#95A4D0] bg-[transparent]">{category}</span>
            <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors mb-3">{title}</h3>
            {description && (
              <p className="text-white/60 text-sm leading-relaxed mt-auto">
                {description}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
