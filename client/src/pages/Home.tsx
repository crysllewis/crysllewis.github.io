import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Skills from "@/components/Skills";
import headshot from "@assets/headshot_1765474071410.jpeg";
import { Brain, Flag, FileText, Layers } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

const processSteps = [
  {
    title: "Define the Problem",
    description: "Collect project details, define the problem, and setup work items.",
    icon: Flag,
    items: [
      "Collect project details and the problem to be solved",
      "Determine success metrics",
      "Gather project and/or technical constraints"
    ]
  },
  {
    title: "Discover the Space",
    description: "Stakeholder interviews, assumption mapping, and research strategy.",
    icon: Brain,
    items: [
      "Conduct stakeholder interviews",
      "Create personas built on behavior",
      "Hold design thinking workshops",
      "Conduct usability and/or click tests with users",
      "Dive into any available analytics"
    ]
  },
  {
    title: "Devise solutions",
    description: "Identify goals and scope, collect feature details.",
    icon: FileText,
    items: [
      "Create task flows to cover all scenarios",
      "Determine content and page architecture",
      "Using the design system as a guide, create and critique Low-Fi concepts",
      "Conduct usability testing to validate concepts"
    ]
  },
  {
    title: "Design & Test",
    description: "Iterative cycle of exploration, information architecture, and visual design.",
    icon: Layers,
    items: [
      "Create Hi-Fi mockups of the design",
      "Develop prototypes to be used in testing and business/developer reviews",
      "Conduct usability testing to validate before launch",
      "Prepare assets for development"
    ]
  }
];


export default function Home() {
  useEffect(() => {
    if (window.location.hash === "#bio") {
      const el = document.getElementById("bio");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navigation />
      <main>
        <Hero />

        <Companies />
        
        <Skills />

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="py-20 container mx-auto px-6"
        >
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="section-label">How I work</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Process</h2>
              <p className="text-gray-500 max-w-md">A user-centered approach to solving complex design challenges.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-gray-200 ml-12 mb-4" />
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-primary rounded-full" />
            
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, ease }}
                  className="relative group"
                >
                  <div className="hidden md:flex absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary z-10 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  <div className="card-clean p-6 rounded-2xl hover:shadow-md transition-all duration-300 h-full flex flex-col pt-32 min-w-full">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-display text-center">{step.title}</h3>
                    
                    <ul className="mt-6 space-y-2">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-xs text-gray-400">
                          <span className="mr-2 mt-1 w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>


        <motion.section
          id="bio"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="py-32 relative overflow-hidden"
        >
          <div className="container mx-auto px-6 relative z-10">
            <div className="card-clean rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="section-label">Who am I</span>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                    Versatile & Innovative.
                  </h2>
                  <div className="space-y-6 text-lg text-gray-500">
                    <p>With over 20 years of experience, I integrate design thinking, research and ideation to deliver impactful digital experiences. My approach balances business goals with user needs, ensuring every solution is both profitable and intuitive.</p>
                    <p>
                      I specialize in leading end-to-end design initiatives from discovery through delivery, mentoring teams, and facilitating workshops that drive innovation.
                    </p>
                  </div>
                  
                  <div className="mt-12 grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-gray-900 font-bold mb-2 font-display">Education</h4>
                      <ul className="text-gray-500 space-y-1 text-sm">
                        <li>B.S. Information Systems Technology</li>
                        <li>University of Houston, 2000</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold mb-2 font-display">Certifications</h4>
                      <ul className="text-gray-500 space-y-1 text-sm">
                        <li>LUMA Certified Facilitator</li>
                        <li>OOUX Level Up</li>
                        <li>Quantum Metric Certified</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex justify-center md:justify-end">
                  <div className="card-clean aspect-[4/5] w-full max-w-md rounded-2xl flex items-center justify-center p-8 text-center relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                     <div className="space-y-6">
                        <div className="w-24 h-24 rounded-full border-2 border-gray-200 mx-auto overflow-hidden mb-4 shadow-md">
                          <img src={headshot} alt="Crystal McDermott" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-3xl font-display font-bold text-gray-900">Let's collaborate</h3>
                        <p className="text-gray-500">Currently available for new opportunities and interesting challenges.</p>
                        <a href="mailto:crysllewis@gmail.com" className="inline-block px-6 py-3 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors">
                          crysllewis@gmail.com
                        </a>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section id="contact" className="py-20 border-t border-gray-200 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
               <div>
                 <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Crystal Lewis McDermott</h2>
                 <p className="text-gray-400">Crafting digital experiences for over 20 years.</p>
               </div>
               
               <div className="flex gap-6">
                 <a href="https://www.linkedin.com/in/crystalmcdermott/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors font-medium">LinkedIn</a>
                 <a href="https://www.instagram.com/crysllewis/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors font-medium">Instagram</a>
               </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
