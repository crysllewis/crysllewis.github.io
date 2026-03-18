import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import airlineApp from "@assets/generated_images/abstract_generic_upgrade_concept.png";
import airlineForm from "@assets/generated_images/abstract_error_reduction_concept.png";
import airlineLoyalty from "@assets/generated_images/abstract_premium_airline_loyalty_status_concept.png";

import lkfLogo from "@/assets/images/lkf-logo.png";

const projects = [
  {
    id: "instant-upsell",
    title: "Instant Upsell Experience",
    category: "American Airlines \u2022 Revenue Generation",
    image: airlineApp,
    description:
      "Designed a post-purchase upsell flow generating $3-4M in additional revenue and driving 6 billion mile redemptions.",
  },
  {
    id: "passenger-data",
    title: "Passenger Data Simplification",
    category: "American Airlines \u2022 Error Reduction",
    image: airlineForm,
    description:
      "Redesigned the passenger entry form, reducing errors from 5% to <0.1% through cognitive load reduction.",
  },
  {
    id: "aadvantage-profile",
    title: "AAdvantage Profile Enhancements",
    category: "American Airlines - Account Improvements",
    image: airlineLoyalty,
    description:
      "Updated the profile to resolve customer confusion, clarify status progress, and personalize the loyalty journey.",
  },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navigation />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <section data-testid="section-vibe-coding">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h1
                    className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-3"
                    data-testid="text-vibe-coding-title"
                  >Projects and Expertise</h1>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-3">AI Expertise</h2>
                  <p
                    className="text-gray-500 max-w-2xl"
                    data-testid="text-vibe-coding-subtitle"
                  >
                    Rapid prototyping, UI exploration, and shipping apps fast.
                  </p>
                </div>
                <div className="hidden md:block h-px flex-1 bg-gray-200 ml-12 mb-3" />
              </div>

              <div className="grid md:grid-cols-2 gap-8" data-testid="grid-vibe-coding-projects">
                <a
                  href="/vibe-coding/lindsey-kay-fitness"
                  className="group card-clean rounded-3xl overflow-hidden p-2 transition-all duration-500 hover:shadow-lg block"
                  data-testid="card-vibe-lindsey-kay-fitness"
                >
                  <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-200">
                    <div className="p-7">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-medium tracking-wider uppercase text-primary" data-testid="text-vibe-lkf-category">
                            Website
                          </p>
                          <h3 className="text-2xl font-display font-bold text-gray-900 mt-2" data-testid="text-vibe-lkf-title">
                            Lindsey Kay Fitness
                          </h3>
                        </div>

                        <div
                          className="w-14 h-14 rounded-full bg-gray-100 border border-gray-200 overflow-hidden grid place-items-center shadow-sm"
                          data-testid="img-vibe-lkf-logo"
                          aria-label="Lindsey Kay Fitness logo"
                        >
                          <img
                            src={lkfLogo}
                            alt="Lindsey Kay Fitness logo"
                            className="w-[84%] h-[84%] object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed mt-4" data-testid="text-vibe-lkf-desc">A modern marketing site focused on strong typography, clear offerings, and conversion-friendly layout.</p>

                      <div className="mt-5 flex items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-2" data-testid="list-vibe-lkf-tags">
                          {[
                            "Landing page",
                            "Design system",
                            "Responsive UI",
                            "Fast iteration",
                          ].map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-gray-600 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full"
                              data-testid={`tag-vibe-lkf-${tag.replace(/\s+/g, "-").toLowerCase()}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div
                          className="w-10 h-10 flex-shrink-0 aspect-square rounded-full bg-gray-900 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                          data-testid="button-vibe-lkf-arrow"
                        >
                          <span className="text-white font-bold" aria-hidden="true">&rarr;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="/vibe-coding/gym-scheduler"
                  className="group card-clean rounded-3xl overflow-hidden p-2 transition-all duration-500 hover:shadow-lg block"
                  data-testid="card-vibe-gym-scheduler"
                >
                  <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-200">
                    <div className="p-7">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-medium tracking-wider uppercase text-primary" data-testid="text-vibe-gym-category">
                            App Prototype
                          </p>
                          <h3 className="text-2xl font-display font-bold text-gray-900 mt-2" data-testid="text-vibe-gym-title">
                            Gym Scheduler
                          </h3>
                        </div>

                        <div
                          className="w-14 h-14 rounded-full bg-gray-100 border border-gray-200 overflow-hidden grid place-items-center shadow-sm"
                          data-testid="img-vibe-gym-logo"
                          aria-label="Gym Scheduler logo"
                        >
                          <img
                            src={lkfLogo}
                            alt="Gym Scheduler logo"
                            className="w-[84%] h-[84%] object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed mt-4" data-testid="text-vibe-gym-desc">
                        A scheduling concept exploring flows for booking classes, managing capacity, and reducing no-shows.
                      </p>

                      <div className="mt-5 flex items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-2" data-testid="list-vibe-gym-tags">
                          {[
                            "Calendar UX",
                            "Interaction design",
                            "Component patterns",
                            "Rapid prototyping",
                          ].map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-gray-600 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full"
                              data-testid={`tag-vibe-gym-${tag.replace(/\s+/g, "-").toLowerCase()}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div
                          className="w-10 h-10 flex-shrink-0 aspect-square rounded-full bg-gray-900 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                          data-testid="button-vibe-gym-arrow"
                        >
                          <span className="text-white font-bold" aria-hidden="true">&rarr;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </section>

            <section className="mt-14">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-3"
                    data-testid="text-work-title"
                  >Work Projects</h2>
                  <p
                    className="text-gray-500 max-w-xl"
                    data-testid="text-work-subtitle"
                  >
                    Showcasing how I drove revenue growth, slashed error rates, and
                    leveled up the customer journey.
                  </p>
                </div>
                <div className="hidden md:block h-px flex-1 bg-gray-200 ml-12 mb-3" />
              </div>

              <div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                data-testid="grid-work-projects"
              >
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} index={index} />
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <footer className="py-20 border-t border-gray-200 bg-white" data-testid="footer-site">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-2" data-testid="text-footer-name">
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
