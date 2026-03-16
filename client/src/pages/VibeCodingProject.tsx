import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";

import lkfHero from "@/assets/images/lkf-visual-hero.png";
import lkfPrograms from "@/assets/images/lkf-visual-programs.png";
import lkfTestimonials from "@/assets/images/lkf-visual-testimonials.png";
import gymTrainerScreens from "@/assets/images/gym-trainer-screens.png";
import gymClientScreens from "@/assets/images/gym-client-screens.png";

interface VibeProject {
  title: string;
  category: string;
  overview: string;
  highlights: string[];
  tools: string[];
  deliverables: string[];
  visuals?: { src: string; alt: string; caption?: string }[];
  demoScreens?: {
    trainer?: { src: string; alt: string; caption?: string }[];
    client?: { src: string; alt: string; caption?: string }[];
  };
  links?: { label: string; href: string }[];
  replitNote?: string;
}

const vibeProjects: Record<string, VibeProject> = {
  "lindsey-kay-fitness": {
    title: "Lindsey Kay Fitness",
    category: "Vibe Coding • Website Prototype",
    overview:
      "A modern marketing site built through rapid iteration. The goal was to sharpen visual hierarchy, clarify services, and create a conversion-friendly structure that still feels personal and brand-forward.",
    highlights: [
      "Built a clean, high-contrast landing experience with strong typographic hierarchy",
      "Optimized for fast scanning and mobile responsiveness",
      "Designed as a flexible foundation for future content and program launches",
    ],
    tools: ["Replit", "React", "Tailwind CSS"],
    deliverables: [
      "Information architecture",
      "Landing page layout",
      "Reusable section components",
      "Responsive styling",
    ],
    visuals: [
      {
        src: lkfHero,
        alt: "Lindsey Kay Fitness hero section visual",
        caption: "Homepage hero + social marketing",
      },
      {
        src: lkfTestimonials,
        alt: "Lindsey Kay Fitness testimonials section visual",
        caption: "Dynamic testimonial display",
      },
    ],
    links: [{ label: "Live site", href: "https://lindseykayfitness.com/" }],
    replitNote: "I utilized Replit to develop a high-fidelity prototype that brought Lindsey's digital presence to life. Building in a live environment made it easy to iterate on social proofing and service features based on direct stakeholder feedback.",
  },
  "gym-scheduler": {
    title: "Gym Scheduler",
    category: "Vibe Coding • App Prototype",
    overview:
      "A scheduling concept focusing on the end-to-end flow: changing classes, requesting a time slot, managing capacity, and reducing no-shows. I am building this app as a prototype to explore how to present easy calendaring options for both clients and trainers.",
    highlights: [
      "Designing booking flows that emphasize clarity and confidence",
      "Exploring patterns for capacity, waitlists, and cancellations",
      "Building reusable UI blocks for list, calendar, and detail views",
      "Focusing on speed: rapid iteration and testable interactions",
    ],
    tools: ["Replit", "React", "Tailwind CSS"],
    deliverables: [
      "User flows",
      "Core screens prototype",
      "Interaction patterns",
      "Component set exploration",
    ],
    demoScreens: {
      trainer: [
        {
          src: gymTrainerScreens,
          alt: "Gym Scheduler trainer screens",
          caption: "Trainer login, schedule, session requests, clients list, add client, profile, and availability settings",
        },
      ],
      client: [
        {
          src: gymClientScreens,
          alt: "Gym Scheduler client screens",
          caption: "Client login, create account, sessions list, cancel session, browse open slots, and profile with change trainer option",
        },
      ],
    },
    links: [],
    replitNote: "Using Replit's live environment, I am developing a high-fidelity scheduler app to explore seamless booking flows. This is allowing for instant iteration on the UI, focusing on minimizing friction points and streamlining the appointment process.",
  },
};

export default function VibeCodingProject() {
  const [match, params] = useRoute("/vibe-coding/:id");
  const project = match && params?.id ? vibeProjects[params.id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-white mb-4" data-testid="text-vibe-not-found">
            Project Not Found
          </h1>
          <Link href="/work" className="text-primary hover:text-white transition-colors" data-testid="link-vibe-return-work">
            Return to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Link
            href="/work"
            className="inline-flex items-center text-white/60 hover:text-primary transition-colors mb-12 group"
            data-testid="link-back-to-work"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-start justify-between gap-8">
              <div>
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block" data-testid="text-vibe-category">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight" data-testid="text-vibe-title">
                  {project.title}
                </h1>
                <p className="text-white/70 text-lg leading-relaxed max-w-2xl" data-testid="text-vibe-overview">
                  {project.overview}
                </p>
              </div>

              <div className="hidden md:flex items-center gap-2 text-white/40" data-testid="badge-vibe">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Vibe Coding</span>
              </div>
            </div>

            <section className="glass rounded-2xl border-white/10 bg-white/5 px-6 py-5 mt-10" data-testid="section-vibe-meta">
              <div className="grid sm:grid-cols-3 gap-6 items-start place-items-center">
                <div>
                  <h3 className="text-white font-bold mb-2 font-display" data-testid="text-vibe-deliverables-label">
                    Deliverables
                  </h3>
                  <ul className="text-white/60 text-sm space-y-1" data-testid="list-vibe-deliverables">
                    {project.deliverables.map((d) => (
                      <li key={d} data-testid={`item-vibe-deliverable-${d.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-2 font-display" data-testid="text-vibe-highlights-label">
                    Highlights
                  </h3>
                  <ul className="text-white/60 text-sm space-y-1" data-testid="list-vibe-highlights">
                    {project.highlights.map((h) => (
                      <li key={h} data-testid={`item-vibe-highlight-${h.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-2 font-display" data-testid="text-vibe-tools-label">
                    Tools
                  </h3>
                  <ul className="text-white/60 text-sm space-y-1" data-testid="list-vibe-tools">
                    {project.tools.map((t) => (
                      <li key={t} data-testid={`item-vibe-tool-${t.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {project.visuals && project.visuals.length > 0 && (
              <section className="mt-12 space-y-6" data-testid="section-vibe-visuals">
                <div className="flex items-end justify-between gap-8">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white" data-testid="text-vibe-visuals-title">
                      Visuals
                    </h2>
                    <p className="text-white/60 mt-2" data-testid="text-vibe-visuals-subtitle">
                      A few key moments from the UI exploration.
                    </p>
                  </div>
                  <div className="hidden md:block h-px flex-1 bg-white/10" />
                </div>

                <div className="grid gap-6" data-testid="grid-vibe-visuals">
                  {project.visuals.map((v, index) => (
                    <figure
                      key={`${v.alt}-${index}`}
                      className="glass rounded-3xl border-white/10 bg-white/5 p-2"
                      data-testid={`figure-vibe-visual-${index}`}
                    >
                      <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                        <img
                          src={v.src}
                          alt={v.alt}
                          className="w-full h-auto block"
                          loading="lazy"
                          data-testid={`img-vibe-visual-${index}`}
                        />
                      </div>
                      {v.caption && (
                        <figcaption
                          className="px-4 pt-4 pb-3 text-sm text-white/60"
                          data-testid={`text-vibe-visual-caption-${index}`}
                        >
                          {v.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </section>
            )}

            {project.demoScreens && (project.demoScreens.trainer?.length || project.demoScreens.client?.length) ? (
              <section className="mt-12 space-y-8" data-testid="section-vibe-demo-screens">
                <div className="flex items-end justify-between gap-8">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white" data-testid="text-vibe-demo-screens-title">
                      Demo Screens
                    </h2>
                    <p className="text-white/60 mt-2" data-testid="text-vibe-demo-screens-subtitle">
                      Key screens from the prototype.
                    </p>
                  </div>
                  <div className="hidden md:block h-px flex-1 bg-white/10" />
                </div>

                {project.demoScreens.trainer && project.demoScreens.trainer.length > 0 && (
                  <div className="space-y-4" data-testid="group-demo-trainer">
                    <h3 className="text-lg font-display font-semibold text-white/90">Trainer</h3>
                    <div className="grid gap-6">
                      {project.demoScreens.trainer.map((screen, index) => (
                        <figure
                          key={`trainer-${index}`}
                          className="glass rounded-3xl border-white/10 bg-white/5 p-2"
                          data-testid={`figure-demo-trainer-${index}`}
                        >
                          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                            <img
                              src={screen.src}
                              alt={screen.alt}
                              className="w-full h-auto block"
                              loading="lazy"
                              data-testid={`img-demo-trainer-${index}`}
                            />
                          </div>
                          {screen.caption && (
                            <figcaption
                              className="px-4 pt-4 pb-3 text-sm text-white/60"
                              data-testid={`text-demo-trainer-caption-${index}`}
                            >
                              {screen.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  </div>
                )}

                {project.demoScreens.client && project.demoScreens.client.length > 0 && (
                  <div className="space-y-4" data-testid="group-demo-client">
                    <h3 className="text-lg font-display font-semibold text-white/90">Client</h3>
                    <div className="grid gap-6">
                      {project.demoScreens.client.map((screen, index) => (
                        <figure
                          key={`client-${index}`}
                          className="glass rounded-3xl border-white/10 bg-white/5 p-2"
                          data-testid={`figure-demo-client-${index}`}
                        >
                          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                            <img
                              src={screen.src}
                              alt={screen.alt}
                              className="w-full h-auto block"
                              loading="lazy"
                              data-testid={`img-demo-client-${index}`}
                            />
                          </div>
                          {screen.caption && (
                            <figcaption
                              className="px-4 pt-4 pb-3 text-sm text-white/60"
                              data-testid={`text-demo-client-caption-${index}`}
                            >
                              {screen.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            ) : null}

            <section className="mt-12 space-y-6" data-testid="section-vibe-links">
              <h2 className="text-2xl font-display font-bold text-white" data-testid="text-vibe-links-title">
                Links
              </h2>
              {project.links && project.links.length > 0 ? (
                <div className="flex flex-wrap gap-3" data-testid="group-vibe-links">
                  {project.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/10 text-white text-sm font-medium transition-all border border-white/10"
                      data-testid={`link-vibe-${l.label.replace(/\s+/g, "-").toLowerCase()}`}
                    >
                      {l.label}
                      <ExternalLink className="w-4 h-4 text-white/60" />
                    </a>
                  ))}
                </div>
              ) : (
                <div className="glass rounded-2xl border-white/10 bg-white/5 px-6 py-5" data-testid="empty-vibe-links">
                  <p className="text-white/60" data-testid="text-vibe-links-empty">
                    <a
                      href="https://lindseykayfitness-scheduler.replit.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://lindseykayfitness-scheduler.replit.app
                    </a>{" "}
                    (This prototype is still a work in progress.)
                  </p>
                </div>
              )}
            </section>

            <section className="mt-12" data-testid="section-vibe-note">
              <div className="glass rounded-2xl border-white/10 bg-white/5 px-6 py-5">
                <div className="inline-flex items-center gap-2 text-primary mb-3" data-testid="text-vibe-note-title">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium tracking-wide uppercase">How I used Replit</span>
                </div>
                <p className="text-white/70 text-lg leading-relaxed" data-testid="text-vibe-note-body">{project.replitNote || "These projects were built as rapid prototypes to explore layout, interaction patterns, and clear UX writing — while keeping the pace fast enough to iterate on real feedback."}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
