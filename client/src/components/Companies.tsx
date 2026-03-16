import { motion } from "framer-motion";
import aaLogo from "@assets/image_1771015985577.png";
import attLogo from "@assets/image_1771168204776.png";
import verizonLogo from "@/assets/logos/verizon.png";
import slalomLogo from "@/assets/logos/slalom.png";
import sabreLogo from "@assets/sabre-travel-network-logo-z9hus92g3afzcx9d-z9hus92g3afzcx9d_1771015583870.png";
import jhilburnLogo from "@/assets/logos/jhilburn.png";
import komenLogo from "@/assets/logos/komen.png";
import firstAmericanLogo from "@assets/image_1771015762592.png";

const companies = [
  { name: "American Airlines", logo: aaLogo, isWhite: true, scale: 0.7 },
  { name: "AT&T", logo: attLogo, isWhite: false, scale: 0.8 },
  { name: "Verizon", logo: verizonLogo, isWhite: false },
  { name: "Slalom Consulting", logo: slalomLogo, isWhite: false },
  { name: "Sabre Travel Network", logo: sabreLogo, isWhite: true, scale: 0.6 },
  { name: "j.Hilburn", logo: jhilburnLogo, isWhite: false },
  { name: "Susan G. Komen", logo: komenLogo, isWhite: false },
  { name: "First American", logo: firstAmericanLogo, isWhite: false },
];

export default function Companies() {
  return (
    <section className="py-20 relative z-10" data-testid="section-companies">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium tracking-widest uppercase text-white/40 mb-14" data-testid="text-companies-label">
          Trusted by
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 items-center max-w-5xl mx-auto">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex items-center justify-center h-12 px-2 opacity-50 hover:opacity-90 transition-opacity duration-300"
              data-testid={`logo-company-${company.name.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <img
                src={company.logo}
                alt={company.name}
                className={`w-full h-full object-contain ${company.isWhite ? "" : "brightness-0 invert"}`}
                style={company.scale ? { transform: `scale(${company.scale})` } : undefined}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
