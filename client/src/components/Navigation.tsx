import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"}`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-black/40" : "bg-white/5"}`}>
          <Link 
            href="/" 
            className="text-xl font-display font-bold text-white tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: location === "/" ? "smooth" : "auto" })}
          >
            CM<span className="text-primary">.</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/work"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
              data-testid="link-work"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
              data-testid="link-about"
            >
              About
            </Link>
            <a
              href="/Crystal_McDermott_Resume.docx"
              download
              className="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
              data-testid="link-resume"
            >
              Resume
            </a>
            <a
              href="/#bio"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/10 text-white text-sm font-medium transition-all border border-white/10"
              data-testid="link-lets-talk"
            >
              Let's Talk
            </a>
          </div>
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5 group"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-0 z-40 transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <div className={`relative flex flex-col items-center justify-center h-full gap-8 transition-transform duration-300 ${mobileOpen ? "translate-y-0" : "-translate-y-8"}`}>
          <Link
            href="/work"
            className="text-2xl font-medium text-white/90 hover:text-white transition-colors cursor-pointer"
            data-testid="link-work-mobile"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-2xl font-medium text-white/90 hover:text-white transition-colors cursor-pointer"
            data-testid="link-about-mobile"
          >
            About
          </Link>
          <a
            href="/Crystal_McDermott_Resume.docx"
            download
            className="text-2xl font-medium text-white/90 hover:text-white transition-colors cursor-pointer"
            data-testid="link-resume-mobile"
          >
            Resume
          </a>
          <a
            href="/#bio"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-lg font-medium transition-all border border-white/10"
            data-testid="link-lets-talk-mobile"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
