import Navigation from "@/components/Navigation";
import { Camera, Gamepad2, Palette } from "lucide-react";
import artImage from "@assets/light_study_1765820129721.png";
import photoImage from "@assets/outdoor_x4_collage_1765815433093.jpg";
import gameImage from "@assets/gaming_1765815833623.png";
import headshot from "@assets/headshot_1765474071410.jpeg";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navigation />

      <main className="pt-32 pb-20 container mx-auto px-6">
        <section className="mb-24 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              More than a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A853] to-[#E8C97A]">
                Designer.
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-xl leading-relaxed">
              While I spend my days solving complex UX problems, my creative energy
              flows into various other passions. I believe that being a
              well-rounded creator makes me a better designer.
            </p>
          </div>
          <div className="relative w-full max-w-xs aspect-square md:aspect-[4/5]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-blue-400/20 rounded-2xl blur-2xl -z-10" />
            <div className="glass w-full h-full rounded-2xl overflow-hidden border-white/10 p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src={headshot}
                  alt="Crystal McDermott"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-20">
          <section className="grid md:grid-cols-2 gap-12 items-center group">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="glass rounded-2xl overflow-hidden border-white/10 aspect-video relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={artImage}
                  alt="Traditional Art Workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <Palette className="w-8 h-8 text-blue-400 mb-2" />
                  <h3 className="text-xl font-bold text-white">
                    Traditional Mediums
                  </h3>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Creating Art
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Art is where I find my flow. I have a deep passion for
                traditional mediums, particularly the fluid unpredictability of
                watercolors and the rich texture of pastels. I also express my
                creativity through jewelry making, where precision and tactile
                design come together. These analog practices keep my visual
                skills sharp and ground my digital work in physical reality.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-white/60">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                  Watercolor Painting
                </li>
                <li className="flex items-center text-white/60">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mr-3" />
                  Pastel Art
                </li>
                <li className="flex items-center text-white/60">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                  Jewelry Making
                </li>
              </ul>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-center group">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Photography Skills
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Capturing moments through a lens has taught me to see the world
                differently. Photography is about observing light, framing
                stories, and finding beauty in the details. It helps me
                understand visual hierarchy and composition in a tangible way.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-white/60">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                  Portrait Photography
                </li>
                <li className="flex items-center text-white/60">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 mr-3" />
                  Landscape & Nature
                </li>
                <li className="flex items-center text-white/60">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3" />
                  Photo Editing & Retouching
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="glass rounded-2xl overflow-hidden border-white/10 aspect-video relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={photoImage}
                  alt="Camera Lens"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <Camera className="w-8 h-8 text-blue-400 mb-2" />
                  <h3 className="text-xl font-bold text-white">Through the Lens</h3>
                </div>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-center group">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="glass rounded-2xl overflow-hidden border-white/10 aspect-video relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={gameImage}
                  alt="Gaming Setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <Gamepad2 className="w-8 h-8 text-green-400 mb-2" />
                  <h3 className="text-xl font-bold text-white">
                    Gaming & Interactive Media
                  </h3>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Video Gamer
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Gaming is more than just entertainment; it&apos;s an immersive
                experience in interactive design. As a gamer, I constantly
                analyze UI/UX patterns in games, from inventory management
                systems to HUD designs. It gives me a unique perspective on user
                engagement and feedback loops.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-white/60">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                  RPG & Strategy Games
                </li>
                <li className="flex items-center text-white/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-3" />
                  Immersive Storytelling
                </li>
                <li className="flex items-center text-white/60">
                  <span className="w-2 h-2 rounded-full bg-lime-500 mr-3" />
                  Game UI Analysis
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <footer
        className="py-20 border-t border-white/5 bg-black/20 backdrop-blur-sm"
        data-testid="footer-site"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2
                className="text-2xl font-display font-bold text-white mb-2"
                data-testid="text-footer-name"
              >
                Crystal Lewis McDermott
              </h2>
              <p className="text-white/40" data-testid="text-footer-tagline">
                Crafting digital experiences for over 20 years.
              </p>
            </div>

            <div className="flex gap-6" data-testid="group-footer-links">
              <a
                href="https://www.linkedin.com/in/crystalmcdermott/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-colors font-medium"
                data-testid="link-footer-linkedin"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/crysllewis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-colors font-medium"
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
