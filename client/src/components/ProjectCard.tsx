import { motion } from "framer-motion";
import { Link } from "wouter";

interface ProjectCardProps {
  title: string;
  image: string;
  href: string;
  year?: string;
  nda?: boolean;
  tags?: string[];
  bgColor?: string;
  index: number;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function ProjectCard({
  title,
  image,
  href,
  year,
  nda,
  tags,
  bgColor = "#F8FAFC",
  index,
}: ProjectCardProps) {
  return (
    <Link href={href}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, ease }}
        className="group cursor-pointer block"
      >
        <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg">
          <div
            className="relative aspect-[4/3] overflow-hidden"
            style={{ backgroundColor: bgColor }}
          >
            {year && (
              <div className="absolute top-4 left-4 flex items-center gap-2.5 z-10">
                <span className="text-xs font-medium text-gray-500 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded">
                  {year}
                </span>
                {nda && (
                  <span className="text-xs font-medium text-gray-500 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded">
                    NDA
                  </span>
                )}
              </div>
            )}
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          <div className="p-5 md:p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug mb-3">
              {title}
            </h3>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
