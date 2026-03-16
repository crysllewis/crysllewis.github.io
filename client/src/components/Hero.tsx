import { motion } from "framer-motion";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/abstract_dark_blue_gradient_background.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute inset-0 bg-background/30 z-10" />
        <img 
          src={heroBg} 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-20" />
      </div>
      <div className="container mx-auto px-6 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-tight">
              <span className="text-white">Crafting</span> <br />
              <span className="text-gradient-accent">Digital Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12">I'm Crystal McDermott, a UX leader with over 20 years of experience designing high-impact customer experiences that drive revenue, reduce friction, and scale across systems.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/work"
                className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-colors"
                data-testid="link-view-work"
              >
                View Work
              </Link>
              <a href="#contact" className="px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-medium transition-all">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
