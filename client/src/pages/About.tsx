import Navigation from "@/components/Navigation";
import { Camera, Gamepad2, Palette } from "lucide-react";
import artImage from "@assets/light_study_1765820129721.png";
import photoImage from "@assets/outdoor_x4_collage_1765815433093.jpg";
import gameImage from "@assets/gaming_1765815833623.png";
import headshot from "@assets/headshot_1765474071410.jpeg";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navigation />

      <main className="pt-32 pb-20 container mx-auto px-6">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-24 flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6">
              More than a <br />
              <span className="text-gradient-accent">
                Designer.
              </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
              While I spend my days solving complex UX problems, my creative energy
              flows into various other passions. I believe that being a
              well-rounded creator makes me a better designer.
            </p>
          </div>
          <div className="relative w-full max-w-xs aspect-square md:aspect-[4/5]">
            <div className="card-clean w-full h-full rounded-2xl overflow-hidden p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src={headshot}
                  alt="Crystal McDermott"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>

        <div className="grid gap-20">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="grid md:grid-cols-2 gap-12 items-center group"
          >
            <div className="order-2 md:order-1 relative">
              <div className="card-clean rounded-2xl overflow-hidden aspect-video relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={artImage}
                  alt="Traditional Art Workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <Palette className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-xl font-bold text-white">
                    Traditional Mediums
                  </h3>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Creating Art
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Art is where I find my flow. I have a deep passion for
                traditional mediums, particularly the fluid unpredictability of
                watercolors and the rich texture of pastels. I also express my
                creativity through jewelry making, where precision and tactile
                design come together. These analog practices keep my visual
                skills sharp and ground my digital work in physical reality.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                  Watercolor Painting
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mr-3" />
                  Pastel Art
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                  Jewelry Making
                </li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="grid md:grid-cols-2 gap-12 items-center group"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Photography Skills
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Capturing moments through a lens has taught me to see the world
                differently. Photography is about observing light, framing
                stories, and finding beauty in the details. It helps me
                understand visual hierarchy and composition in a tangible way.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                  Portrait Photography
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 mr-3" />
                  Landscape & Nature
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3" />
                  Photo Editing & Retouching
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="card-clean rounded-2xl overflow-hidden aspect-video relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={photoImage}
                  alt="Camera Lens"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <Camera className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-xl font-bold text-white">Through the Lens</h3>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="grid md:grid-cols-2 gap-12 items-center group"
          >
            <div className="order-2 md:order-1 relative">
              <div className="card-clean rounded-2xl overflow-hidden aspect-video relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={gameImage}
                  alt="Gaming Setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <Gamepad2 className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-xl font-bold text-white">
                    Gaming & Interactive Media
                  </h3>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Video Gamer
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Gaming is more than just entertainment; it&apos;s an immersive
                experience in interactive design. As a gamer, I constantly
                analyze UI/UX patterns in games, from inventory management
                systems to HUD designs. It gives me a unique perspective on user
                engagement and feedback loops.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                  RPG & Strategy Games
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-3" />
                  Immersive Storytelling
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-lime-500 mr-3" />
                  Game UI Analysis
                </li>
              </ul>
            </div>
          </motion.section>
        </div>
      </main>

      <footer
        className="py-20 border-t border-gray-200 bg-white"
        data-testid="footer-site"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2
                className="text-2xl font-display font-bold text-gray-900 mb-2"
                data-testid="text-footer-name"
              >
                Crystal Lewis McDermott
              </h2>
              <p className="text-gray-400" data-testid="text-footer-tagline">
                Crafting digital experiences for over 20 years.
              </p>
            </div>

            <div className="flex gap-6" data-testid="group-footer-links">
              <a
                href="https://www.linkedin.com/in/crystalmcdermott/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors font-medium"
                data-testid="link-footer-linkedin"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/crysllewis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors font-medium"
                data-testid="link-footer-instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
