import { motion } from "framer-motion";
import { Link } from "wouter";
import MagneticTagCloud from "./MagneticTagCloud";

const ease = [0.25, 0.1, 0.25, 1];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 -mt-[50px]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 17v6M17 20h6' stroke='%23e5e5e5' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-center">
          {/* Left — Magnetic Tag Cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="order-1"
          >
            <MagneticTagCloud />
          </motion.div>

          {/* Right — Hero text + buttons */}
          <div className="order-2 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="text-sm tracking-widest uppercase text-gray-400 font-medium mb-3"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.1] text-gray-900 mb-4"
            >
              I'm{" "}
              <span style={{ color: "#CDA33C" }}>Crystal McDermott</span>,
              <br />a Senior Product Designer.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="text-gray-600 text-base leading-relaxed max-w-lg mb-5"
            >
              <span className="font-bold text-gray-900">My Value:</span> designing high-impact customer experiences that drive
              revenue, reduce friction, and scale across systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/work"
                className="px-8 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors"
                data-testid="link-view-work"
              >
                View Work
              </Link>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
