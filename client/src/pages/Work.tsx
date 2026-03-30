import { useCallback, useEffect, useState } from "react";

import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import WorkSectionNav, {
  type WorkSectionKey,
} from "@/components/WorkSectionNav";

import lkfHero from "@/assets/images/lkf-visual-hero.png";
import gymScreens from "@/assets/images/gym-trainer-screens.png";
import dfcgDashboard from "@/assets/images/dfcg-pm/01-dashboard.png";
import upsellFinalPhase2 from "@/assets/case-studies/instant-upsell/final_phase2.png";
import passengerSuccess from "@/assets/case-studies/passenger-data/final_success.png";
import aadvantageOverviewCard from "@/assets/case-studies/aadvantage-profile/loyalty-overview-card.png";

const aiProjects = [
  {
    title:
      "A project management app for consulting firms, tracking engagements, tasks, conflict checks, and team workflows.",
    image: dfcgDashboard,
    href: "/ai-expertise/dfcg-pm",
    year: "2026",
    tags: ["Web App", "Dashboard", "Task Management", "Workflow Design"],
    bgColor: "#E8EDF2",
  },
  {
    title:
      "A modern marketing site focused on strong typography, clear offerings, and conversion-friendly layout.",
    image: lkfHero,
    href: "/ai-expertise/lindsey-kay-fitness",
    year: "2025",
    tags: ["Website", "Landing Page", "Design System", "Responsive UI"],
    bgColor: "#EEF2FF",
  },
  {
    title:
      "A scheduling concept exploring flows for booking classes, managing capacity, and reducing no-shows.",
    image: gymScreens,
    href: "/ai-expertise/gym-scheduler",
    year: "2025",
    tags: ["App Prototype", "Calendar UX", "Interaction Design"],
    bgColor: "#FFF7ED",
  },
];

const WORK_SECTION_STORAGE_KEY = "portfolio-work-section";

function readStoredWorkSection(): WorkSectionKey | null {
  if (typeof window === "undefined") return null;
  try {
    const v = sessionStorage.getItem(WORK_SECTION_STORAGE_KEY);
    if (v === "ai-expertise" || v === "ux-case-studies") return v;
  } catch {
    /* private / blocked storage */
  }
  return null;
}

/** Hash wins when present; otherwise restore last tab from the session. */
function resolveInitialWorkSection(): WorkSectionKey {
  if (typeof window === "undefined") return "ux-case-studies";
  const h = window.location.hash.slice(1);
  if (h === "ai-expertise" || h === "ux-case-studies") return h;
  return readStoredWorkSection() ?? "ux-case-studies";
}

function hashToSection(): WorkSectionKey {
  if (typeof window === "undefined") return "ux-case-studies";
  const h = window.location.hash.slice(1);
  return h === "ai-expertise" ? "ai-expertise" : "ux-case-studies";
}

const caseStudies = [
  {
    title:
      "Designed a post-purchase upsell flow generating $3-4M in additional revenue and driving 6 billion mile redemptions.",
    image: upsellFinalPhase2,
    href: "/case-study/instant-upsell",
    year: "2024",
    tags: ["American Airlines", "Revenue Generation", "UX Design"],
    bgColor: "#EFF6FF",
  },
  {
    title:
      "Redesigned the passenger entry form, reducing errors from 5% to <0.1% through cognitive load reduction.",
    image: passengerSuccess,
    href: "/case-study/passenger-data",
    year: "2023",
    tags: ["American Airlines", "Error Reduction", "Form Design"],
    bgColor: "#FEF2F2",
  },
  {
    title:
      "Helped members understand AAdvantage updates through in-flow education, a refined status tracker, and contextual video support.",
    image: aadvantageOverviewCard,
    href: "/case-study/aadvantage-profile",
    year: "2024",
    tags: ["American Airlines", "Loyalty", "Program Education"],
    bgColor: "#F5F3FF",
  },
];

export default function Work() {
  const [activeSection, setActiveSection] = useState<WorkSectionKey>(resolveInitialWorkSection);

  const applySection = useCallback((section: WorkSectionKey) => {
    setActiveSection(section);
    window.history.replaceState(null, "", `#${section}`);
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(WORK_SECTION_STORAGE_KEY, activeSection);
    } catch {
      /* ignore */
    }
  }, [activeSection]);

  useEffect(() => {
    const h = window.location.hash.slice(1);
    if (h !== activeSection) {
      window.history.replaceState(null, "", `#${activeSection}`);
    }
    // Sync URL once on mount when section was restored from sessionStorage (no hash in URL).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setActiveSection(hashToSection());
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navigation />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
              <h1
                className="text-4xl md:text-5xl font-display font-bold text-gray-900"
                data-testid="text-work-title"
              >
                Work
              </h1>
              <WorkSectionNav
                activeSection={activeSection}
                onSectionChange={applySection}
              />
            </div>

            {activeSection === "ux-case-studies" ? (
              <section
                id="ux-case-studies"
                role="tabpanel"
                aria-labelledby="tab-ux-case-studies"
                data-testid="section-ux-case-studies"
              >
                <div className="flex items-end justify-between mb-10">
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-3"
                      data-testid="text-work-title"
                    >
                      UX Case Studies
                    </h2>
                    <p
                      className="text-gray-500 max-w-xl"
                      data-testid="text-work-subtitle"
                    >
                      Showcasing how I drove revenue growth, slashed error
                      rates, and leveled up the customer journey.
                    </p>
                  </div>
                  <div className="hidden md:block h-px flex-1 bg-gray-200 ml-12 mb-3" />
                </div>

                <div
                  className="grid md:grid-cols-2 gap-8"
                  data-testid="grid-work-projects"
                >
                  {caseStudies.map((project, index) => (
                    <ProjectCard key={project.href} {...project} index={index} />
                  ))}
                </div>
              </section>
            ) : (
              <section
                id="ai-expertise"
                role="tabpanel"
                aria-labelledby="tab-ai-expertise"
                data-testid="section-ai-expertise"
              >
                <div className="flex items-end justify-between mb-10">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-3">
                      AI Expertise
                    </h2>
                    <p
                      className="text-gray-500 max-w-2xl"
                      data-testid="text-ai-expertise-subtitle"
                    >
                      Rapid prototyping, UI exploration, and shipping apps fast.
                    </p>
                  </div>
                  <div className="hidden md:block h-px flex-1 bg-gray-200 ml-12 mb-3" />
                </div>

                <div
                  className="grid md:grid-cols-2 gap-8"
                  data-testid="grid-ai-expertise-projects"
                >
                  {aiProjects.map((project, index) => (
                    <ProjectCard key={project.href} {...project} index={index} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </section>
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
              <p
                className="text-gray-400"
                data-testid="text-footer-tagline"
              >
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
