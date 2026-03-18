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
  { name: "American Airlines", logo: aaLogo, needsDarkFilter: true, scale: 0.7 },
  { name: "AT&T", logo: attLogo, needsDarkFilter: false, scale: 0.8 },
  { name: "Verizon", logo: verizonLogo, needsDarkFilter: false },
  { name: "Slalom Consulting", logo: slalomLogo, needsDarkFilter: false },
  { name: "Sabre Travel Network", logo: sabreLogo, needsDarkFilter: true, scale: 0.6 },
  { name: "j.Hilburn", logo: jhilburnLogo, needsDarkFilter: false },
  { name: "Susan G. Komen", logo: komenLogo, needsDarkFilter: false },
  { name: "First American", logo: firstAmericanLogo, needsDarkFilter: false },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Companies() {
  return (
    <section className="py-20 relative z-10" data-testid="section-companies">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium tracking-widest uppercase text-gray-400 mb-14" data-testid="text-companies-label">
          Trusted by
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 items-center max-w-5xl mx-auto">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, ease }}
              className="flex items-center justify-center h-12 px-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
              data-testid={`logo-company-${company.name.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <img
                src={company.logo}
                alt={company.name}
                className={`w-full h-full object-contain ${company.needsDarkFilter ? "brightness-0" : ""}`}
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
