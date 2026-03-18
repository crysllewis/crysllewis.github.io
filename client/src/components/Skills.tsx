import { motion } from "framer-motion";
import { Search, Brain, Layers, PenTool, Award, BarChart } from "lucide-react";

const skills = [
  {
    icon: Search,
    title: "User Research & Strategy",
    description: "Usability testing, card sorting, contextual inquiry, and field observations to drive evidence-based design."
  },
  {
    icon: Brain,
    title: "Design Thinking",
    description: "LUMA Certified Facilitator. Leading workshops to align business goals with user needs through iterative problem-solving."
  },
  {
    icon: Award,
    title: "Leadership",
    description: "Drive UX quality by coaching designers on research implementation + design critiques and supporting research and agile operations."
  },
  {
    icon: BarChart,
    title: "Data & Analytics",
    description: "Leveraging digital analytics to measure performance and optimize user journeys."
  },
  {
    icon: Layers,
    title: "Prototyping & IA",
    description: "From low-fi wireframes to high-fidelity interactive mockups using Figma, Axure, and Sketch."
  },
  {
    icon: PenTool,
    title: "Visual Design",
    description: "Creating accessible, pixel-perfect interfaces with a focus on maintaining consistency within the design system."
  }
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16 md:text-center max-w-2xl mx-auto"
        >
          <span className="section-label">What and How</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Core Capabilities</h2>
          <p className="text-gray-500">A multidisciplinary approach blending 20+ years of design thinking, research, and design.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, ease }}
              whileHover={{ y: -4 }}
              className="card-clean p-8 group hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center mb-6 text-gray-700 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                <skill.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{skill.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
