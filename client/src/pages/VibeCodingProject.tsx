import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

import lkfHero from "@/assets/images/lkf-visual-hero.png";
import lkfTestimonials from "@/assets/images/lkf-visual-testimonials.png";
import gymTrainerScreens from "@/assets/images/gym-trainer-screens.png";
import gymClientScreens from "@/assets/images/gym-client-screens.png";
import dfcgDashboard from "@/assets/images/dfcg-pm/01-dashboard.png";
import dfcgNewProject from "@/assets/images/dfcg-pm/02-new-project.png";
import dfcgProjects from "@/assets/images/dfcg-pm/03-projects.png";
import dfcgProjectDetail from "@/assets/images/dfcg-pm/04-project-detail.png";
import dfcgTasksKanban from "@/assets/images/dfcg-pm/05-tasks-kanban.png";
import dfcgSettings from "@/assets/images/dfcg-pm/06-settings.png";

const ease = [0.25, 0.1, 0.25, 1] as const;

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
    gallery?: { src: string; alt: string; caption?: string }[];
  };
  links?: { label: string; href: string }[];
  codingTool?: string;
  replitNote?: string;
}

const vibeProjects: Record<string, VibeProject> = {
  "lindsey-kay-fitness": {
    title: "Lindsey Kay Fitness",
    category: "AI Workflow \u2022 Website Prototype",
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
    category: "AI Workflow \u2022 App Prototype",
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
  "dfcg-pm": {
    title: "DFCG Project Management",
    category: "AI Workflow \u2022 Web Application",
    overview:
      "I built this with DeFacto Consulting Group as their internal hub for insurance and property consulting work. The goal was simple: give the firm one honest picture of what's in flight, where conflict checks and EA or retainer approvals are stuck, and which tasks are overdue. It's a Next.js app with Supabase for auth and data, with dashboards, Kanban, and workflows so people aren't piecing status together from inboxes.",
    highlights: [
      "Firm-wide dashboard: projects, conflict/EA queues, overdue tasks",
      "Kanban board: drag-and-drop, priorities, assignees",
      "Conflict-check: submit and respond in flow",
      "Task templates by engagement type",
      "Status workflow designer + Mermaid export",
      "Audit log for compliance",
    ],
    tools: ["Cursor", "Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase"],
    deliverables: [
      "Product Requirements Document",
      "User flows",
      "Core screens prototype",
      "Interaction patterns",
    ],
    demoScreens: {
      gallery: [
        {
          src: dfcgDashboard,
          alt: "DFCG Project Management dashboard with firm-wide overview and task queues",
          caption: "Dashboard: conflict queues, pending EA/retainer, overdue and upcoming tasks",
        },
        {
          src: dfcgNewProject,
          alt: "DFCG Project Management new project intake form",
          caption: "New project intake: engagement details, client info, and other parties",
        },
        {
          src: dfcgProjects,
          alt: "DFCG Project Management projects list with filters and status cards",
          caption: "Projects: search, filters, and project cards with status and report due dates",
        },
        {
          src: dfcgProjectDetail,
          alt: "DFCG Project Management project detail page",
          caption: "Project detail: client, engagement, narrative, parties, and task progress",
        },
        {
          src: dfcgTasksKanban,
          alt: "DFCG Project Management firm-wide Kanban task board",
          caption: "Tasks: drag-and-drop Kanban across projects with filters and assignments",
        },
        {
          src: dfcgSettings,
          alt: "DFCG Project Management settings and profile",
          caption: "Settings: profile and account preferences",
        },
      ],
    },
    links: [],
    codingTool: "Cursor",
    replitNote: "I used Cursor as both the design and development environment to build this full-stack application. Cursor's AI-assisted coding enabled rapid iteration on complex features like the Kanban board, conflict-check workflows, and role-based access, moving from concept to working prototype significantly faster than traditional development.",
  },
};

export default function VibeCodingProject() {
  const [match, params] = useRoute("/ai-expertise/:id");
  const project = match && params?.id ? vibeProjects[params.id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4" data-testid="text-vibe-not-found">
            Project Not Found
          </h1>
          <Link href="/work" className="text-primary hover:text-gray-900 transition-colors" data-testid="link-vibe-return-work">
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
            className="inline-flex items-center text-gray-400 hover:text-primary transition-colors mb-12 group"
            data-testid="link-back-to-work"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </Link>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <div>
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block" data-testid="text-vibe-category">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight" data-testid="text-vibe-title">
                  {project.title}
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed max-w-2xl" data-testid="text-vibe-overview">
                  {project.overview}
                </p>
              </div>
            </motion.div>

            <section className="card-clean rounded-2xl px-6 py-5 mt-10" data-testid="section-vibe-meta">
              <div className="grid sm:grid-cols-3 gap-8 items-start">
                <div className="w-full text-left">
                  <h3 className="text-gray-900 font-bold mb-2 font-display" data-testid="text-vibe-deliverables-label">
                    Deliverables
                  </h3>
                  <ul className="text-gray-500 text-sm space-y-1" data-testid="list-vibe-deliverables">
                    {project.deliverables.map((d) => (
                      <li key={d} data-testid={`item-vibe-deliverable-${d.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full text-left">
                  <h3 className="text-gray-900 font-bold mb-2 font-display" data-testid="text-vibe-highlights-label">
                    Highlights
                  </h3>
                  <ul className="text-gray-500 text-sm space-y-1" data-testid="list-vibe-highlights">
                    {project.highlights.map((h) => (
                      <li key={h} data-testid={`item-vibe-highlight-${h.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full text-left">
                  <h3 className="text-gray-900 font-bold mb-2 font-display" data-testid="text-vibe-tools-label">
                    Tools
                  </h3>
                  <ul className="text-gray-500 text-sm space-y-1" data-testid="list-vibe-tools">
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
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="mt-12 space-y-6"
                data-testid="section-vibe-visuals"
              >
                <div className="flex items-end justify-between gap-8">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-gray-900" data-testid="text-vibe-visuals-title">
                      Visuals
                    </h2>
                    <p className="text-gray-500 mt-2" data-testid="text-vibe-visuals-subtitle">
                      A few key moments from the UI exploration.
                    </p>
                  </div>
                  <div className="hidden md:block h-px flex-1 bg-gray-200" />
                </div>

                <div className="grid gap-6" data-testid="grid-vibe-visuals">
                  {project.visuals.map((v, index) => (
                    <figure
                      key={`${v.alt}-${index}`}
                      className="card-clean rounded-3xl p-2"
                      data-testid={`figure-vibe-visual-${index}`}
                    >
                      <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
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
                          className="px-4 pt-4 pb-3 text-sm text-gray-500"
                          data-testid={`text-vibe-visual-caption-${index}`}
                        >
                          {v.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </motion.section>
            )}

            {project.demoScreens &&
            (project.demoScreens.trainer?.length ||
              project.demoScreens.client?.length ||
              project.demoScreens.gallery?.length) ? (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                className="mt-12 space-y-8"
                data-testid="section-vibe-demo-screens"
              >
                <div className="flex items-end justify-between gap-8">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-gray-900" data-testid="text-vibe-demo-screens-title">
                      Demo Screens
                    </h2>
                    <p className="text-gray-500 mt-2" data-testid="text-vibe-demo-screens-subtitle">
                      Key screens from the prototype.
                    </p>
                  </div>
                  <div className="hidden md:block h-px flex-1 bg-gray-200" />
                </div>

                {project.demoScreens.gallery && project.demoScreens.gallery.length > 0 && (
                  <div className="grid gap-6" data-testid="group-demo-gallery">
                    {project.demoScreens.gallery.map((screen, index) => (
                      <figure
                        key={`gallery-${index}`}
                        className="card-clean rounded-3xl p-2"
                        data-testid={`figure-demo-gallery-${index}`}
                      >
                        <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center py-4">
                          <img
                            src={screen.src}
                            alt={screen.alt}
                            className="w-[85%] h-auto block rounded-lg"
                            loading="lazy"
                            data-testid={`img-demo-gallery-${index}`}
                          />
                        </div>
                        {screen.caption && (
                          <figcaption
                            className="px-4 pt-4 pb-3 text-sm text-gray-500"
                            data-testid={`text-demo-gallery-caption-${index}`}
                          >
                            {screen.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}

                {project.demoScreens.trainer && project.demoScreens.trainer.length > 0 && (
                  <div className="space-y-4" data-testid="group-demo-trainer">
                    <h3 className="text-lg font-display font-semibold text-gray-700">Trainer</h3>
                    <div className="grid gap-6">
                      {project.demoScreens.trainer.map((screen, index) => (
                        <figure
                          key={`trainer-${index}`}
                          className="card-clean rounded-3xl p-2"
                          data-testid={`figure-demo-trainer-${index}`}
                        >
                          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
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
                              className="px-4 pt-4 pb-3 text-sm text-gray-500"
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
                    <h3 className="text-lg font-display font-semibold text-gray-700">Client</h3>
                    <div className="grid gap-6">
                      {project.demoScreens.client.map((screen, index) => (
                        <figure
                          key={`client-${index}`}
                          className="card-clean rounded-3xl p-2"
                          data-testid={`figure-demo-client-${index}`}
                        >
                          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
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
                              className="px-4 pt-4 pb-3 text-sm text-gray-500"
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
              </motion.section>
            ) : null}

            <section className="mt-12 space-y-6" data-testid="section-vibe-links">
              <h2 className="text-2xl font-display font-bold text-gray-900" data-testid="text-vibe-links-title">
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
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium transition-all hover:bg-gray-800 border border-gray-900"
                      data-testid={`link-vibe-${l.label.replace(/\s+/g, "-").toLowerCase()}`}
                    >
                      {l.label}
                      <ExternalLink className="w-4 h-4 text-white/60" />
                    </a>
                  ))}
                </div>
              ) : (
                <div className="card-clean rounded-2xl px-6 py-5" data-testid="empty-vibe-links">
                  <p className="text-gray-500" data-testid="text-vibe-links-empty">
                    Email me for access
                  </p>
                </div>
              )}
            </section>

            <section className="mt-12" data-testid="section-vibe-note">
              <div className="card-clean rounded-2xl px-6 py-5">
                <div className="inline-flex items-center gap-2 text-primary mb-3" data-testid="text-vibe-note-title">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium tracking-wide uppercase">How I used {project.codingTool || "Replit"}</span>
                </div>
                <p className="text-gray-500 text-lg leading-relaxed" data-testid="text-vibe-note-body">{project.replitNote || "These projects were built as rapid prototypes to explore layout, interaction patterns, and clear UX writing \u2014 while keeping the pace fast enough to iterate on real feedback."}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
