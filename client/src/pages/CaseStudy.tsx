import { useRoute } from "wouter";
import Navigation from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import airlineApp from "@assets/generated_images/abstract_generic_upgrade_concept.png";
import airlineForm from "@assets/generated_images/abstract_error_reduction_concept.png";
import airlineLoyalty from "@assets/generated_images/abstract_premium_airline_loyalty_status_concept.png";
import researchConducted from "@assets/research_conducted_1765987773301.png";
import researchFindings1 from "@assets/Findings_1765983086803.png";
import loyaltyUIConcept from "@assets/generated_images/abstract_airline_loyalty_profile_ui.png";

// Import downloaded assets
import upsellPlacement from "@/assets/case-studies/instant-upsell/placement.png";
import upsellWireframes from "@/assets/case-studies/instant-upsell/wireframes.png";
import upsellFinalDesign from "@/assets/case-studies/instant-upsell/final_design.png";
import upsellDesignThinking from "@/assets/case-studies/instant-upsell/design_thinking.png";
import upsellUsability from "@/assets/case-studies/instant-upsell/usability.png";
import upsellFinalPhase2 from "@/assets/case-studies/instant-upsell/final_phase2.png";
import checkInFlow from "@/assets/case-studies/instant-upsell/check_in_flow.png";
import manageResFlow from "@/assets/case-studies/instant-upsell/manage_res_flow.png";
import ideationDesktop from "@/assets/case-studies/instant-upsell/ideation_desktop.png";
import ideationMobile from "@/assets/case-studies/instant-upsell/ideation_mobile.png";
import passengerDiscovery from "@/assets/case-studies/passenger-data/discovery_luma.png";
import passengerCards from "@/assets/case-studies/passenger-data/design_cards.png";
import passengerFail from "@/assets/case-studies/passenger-data/analytics_fail.png";
import passengerSuccess from "@/assets/case-studies/passenger-data/final_success.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectSection {
  title?: string;
  content?: string;
  items?: string[];
  afterListContent?: string;
  image?: string;
  images?: string[];
  imageCaption?: string;
  embed?: string;
}

interface Project {
  title: string;
  category: string;
  image: string;
  methods: string[];
  tools: string[];
  deliverables: string[];
  challenge: string;
  solution: string;
  results: string[] | string;
  sections?: ProjectSection[];
}

const projects: Record<string, Project> = {
  "instant-upsell": {
    title: "Instant Upsell Experience",
    category: "American Airlines • Revenue Generation",
    image: airlineApp,
    methods: ["Design Thinking Workshops", "Usability Testing", "Design Ideation Sessions"],
    tools: ["Figma", "LUMA", "Mural", "UserZoom"],
    deliverables: ["UX flows", "Wireframes", "Hi-Fi Mockups", "Usability Reports", "Design System Components"],
    challenge:
      "Increase revenue of the seats ancillary product line while offering customers flexibility to modify their seating after purchase. The existing process had limited flexibility for post-purchase upgrades, resulting in missed upsell potential.",
    solution:
      "Designed a page offering flexible upgrade options for each flight leg. Implemented a two-phase approach: first launching cash upgrades, then integrating a miles redemption option for loyalty members. The solution strategically placed teasers on the 'Manage Reservation' page and the full experience within the Check-in flow.",
    results: [
      "$3-4 million annual revenue (Year 1)",
      "6 billion miles redeemed (Phase 2)",
      "High adoption of cash/miles toggle",
    ],
    sections: [
      {
        title: "Background",
        content:
          "Post-booking seat upgrades represent a significant opportunity to drive ancillary revenue and strengthen customer engagement. However, American Airline’s existing process offered limited flexibility for customers to modify or enhance their seating after purchase. The goal was to increase revenue per passenger by offering targeted upgrade options based on fare class and route.",
      },
      {
        title: "Discovery & Opportunities",
        content:
          "We identified three key opportunities: 1) Provide two focused upgrade offers to avoid decision paralysis. 2) Present offers by segment (single leg) to give users flexible options. 3) Display flight duration to help customers decide which flight to upgrade. The first challenge was how best to position the teaser and the full page in order to get optimized click-through rates.",
        images: [manageResFlow, checkInFlow],
        imageCaption:
          "User flows showing the Manage Reservation teaser and Check-in integration paths",
      },
      {
        title: "Design Process",
        content:
          "The design process began with competitive research to understand how other commerce sites presented offers. I created a variety of layouts and wireframes, ultimately selecting a card layout for its scannability and ability to present multiple offers without overwhelming the user.",
        images: [ideationDesktop, ideationMobile],
        imageCaption: "Initial wireframe explorations for the upsell interface",
      },
      {
        title: "Final Design (Phase 1)",
        content:
          "The selected card layout prioritized clarity and ease of comparison. In the first year alone, this design produced between $3-4 million in profit for American Airlines.",
        image: upsellFinalDesign,
        imageCaption:
          "Final design featuring clear pricing and simple selection",
      },
      {
        title: "The Story Continues...",
        content:
          "After record-breaking profits, business and UX collaborated to improve the experience further. We introduced a 'Cash vs. Miles' payment option for loyal customers. I used a design thinking recipe of storyboarding and dot voting to explore how to show both options concurrently.",
        image: upsellDesignThinking,
        imageCaption: "Design thinking session: Storyboarding and dot voting",
      },
      {
        title: "Usability Testing",
        content:
          "We tested the design in UserZoom with both guest users and loyalty members. Several rounds of testing confirmed that users successfully understood how to change currencies and view their balance.",
        image: upsellUsability,
        imageCaption: "Usability testing results showing high comprehension",
      },
      {
        title: "Final Design (Phase 2)",
        content:
          "Despite technical limitations preventing a split-payment slider and showing cabin benefits, the final design successfully implemented a toggle above the offers. After launch, over 6 billion loyalty miles were redeemed by AAdvantage status members.",
        image: upsellFinalPhase2,
        imageCaption: "Phase 2 design with Cash/Miles toggle",
      },
    ],
  },
  "passenger-data": {
    title: "Passenger Data Simplification",
    category: "American Airlines • Error Reduction",
    image: airlineForm,
    methods: [
      "Design Thinking Workshops",
      "Ideation Sessions",
      "Unmoderated Usability Testing",
      "Moderated Usability Testing",
      "Analytics Dashboards",
    ],
    tools: ["Figma", "LUMA", "UserZoom", "Quantum Metric"],
    deliverables: [
      "Workshop Requirements Document",
      "Usability Reports",
      "Lo-Fi Wireframes",
      "Hi-Fi Mockups",
      "Design System Components",
      "A/B Results",
      "Leadership Presentations",
    ],
    challenge:
      "Customer error rates on the passenger details page were consistently between 4-5%. Confusing labels and complex layouts led to mistakes in entering names and contact details, causing delays and lower customer satisfaction.",
    solution:
      "Redesigned the page to reduce noise and keep only necessary information. When initial A/B testing showed an uptick in errors, we used Quantum Metric to identify the issue and implemented a 'hinting' mechanism to guide users to complete the passenger cards before proceeding.",
    results: [
      "Error rates reduced from ~5% to <0.1%",
      "Significant reduction in support calls",
      "Improved revenue for the business",
    ],
    sections: [
      {
        title: "Background",
        content:
          "The passenger details page is essential for processing travel information, but users consistently encountered errors that slowed down data entry. To address this, we redesigned the page to improve the user experience with a cleaner interface and clearer instructions.",
      },
      {
        title: "Discovery",
        content:
          "Using design thinking, Business and UX teams collaborated using a LUMA recipe: Rose, Thorn, Bud; Affinity Clustering; Visualize the Vote; and an Importance/Difficulty Matrix. Key takeaways were to remove unnecessary fields, reduce ad sizes, and chunk passenger data into smaller bites.",
        image: passengerDiscovery,
        imageCaption: "LUMA Design Thinking session results: Identifying key opportunities",
      },
      {
        title: "Design & Research",
        content:
          "We iterated on card displays, asking key questions about passenger selection and editing. UserZoom testing confirmed the card layout was working, leading to development.",
        image: passengerCards,
        imageCaption: "Iterative design process exploring card-based layouts",
      },
      {
        title: "The Pivot & Challenge",
        content:
          "The project was initially de-prioritized but brought back in 2025 with strict constraints: few changes could be made to the developed code, and ad placements were fixed. Upon launching an A/B test, we unexpectedly saw error rates spike (affecting 10% of customers).",
        image: passengerFail,
        imageCaption: "Design launched for A/B testing",
      },
      {
        title: "Analytics & Recovery",
        content:
          "Using Quantum Metric, we watched replays and discovered users weren't perceiving the cards as actionable. They clicked 'Continue' without filling them out. The fix? We implemented a 'hinting' pattern inspired by competitors, highlighting incomplete areas and only revealing the rest of the page once cards were completed.",
      },
      {
        title: "Final Success",
        content:
          "After this adjustment, error rates plummeted from the spike of 12% down to less than 0.1%—surpassing our initial goals and improving revenue.",
        image: passengerSuccess,
        imageCaption: "Final design with 'hinting' mechanism that solved the user error issue",
      },
    ],
  },
  "aadvantage-profile": {
    title: "AAdvantage Profile Enhancements",
    category: "American Airlines - Account Improvements",
    image: airlineLoyalty,
    methods: [
      "Design Thinking Workshops",
      "Ideation Sessions",
      "Unmoderated Usability Testing",
      "Moderated Usability Testing",
      "Tree Testing",
      "Card Sorting",
    ],
    tools: ["Figma", "LUMA", "Mural", "UserZoom"],
    deliverables: [
      "Workshop Requirements Document",
      "Lo-Fi Wireframes",
      "Hi-Fi Mockups",
      "Usability Reports",
      "Leadership Presentations",
    ],
    challenge:
      "Customers struggled to understand the AAdvantage program due to unclear fundamentals, frequent changes, and information overload. The experience made it hard to track progress, compare status tiers, or know what actions would move them forward. Customers wanted clearer organization, a more engaging status tracker, and a personalized experience that reinforced the value of their loyalty.",
    solution:
      "We redesigned the AAdvantage profile into a clear, personalized hub that helps customers quickly understand their status, rewards, and next steps. Modular widgets, a collapsible navigation, and an updated rewards tracker surface the most relevant information at a glance, while profile completion and activity insights make progress feel tangible. A Learning Hub and clear ways to earn and spend empower customers with actionable guidance—turning confusion into confidence and reinforcing the value of loyalty.",
    sections: [
      {
        title: "Discovery",
        content:
          "We gathered all of the research that we had conducted in the last 2 years for Loyalty to identify key customer pain points. This meta-analysis of 17+ research studies allowed us to pinpoint exactly where the experience was breaking down for our members—specifically around Customer Confusion, Loyalty Status visibility, and Information Architecture.",
        image: researchConducted,
        imageCaption:
          "Initial Research Gathering: Synthesizing insights from over 17 previous research studies",
      },
      {
        title: "Key Research Findings",
        content:
          "Our deep dive into member behavior revealed critical insights. Members were struggling to understand the value of their loyalty due to complex program rules and lack of visibility. We identified that a visual progress tracker and clear 'next steps' were essential to improve engagement.",
        image: researchFindings1,
        imageCaption:
          "Key findings highlighting the disconnect between program value and member understanding",
      },
      {
        title: "Design Concepts & Exploration",
        content: "To solve the pain points listed earlier, we designed the following features:",
        items: [
          "“Widgets”",
          "Collapsible side navigation",
          "Profile completion section",
          "Updated rewards tracker",
          "Top activity chart",
          "Learning Hub",
          "Ways to earn and spend",
        ],
        afterListContent:
          "Scroll up and down the prototype below to view the proposed changes.",
        embed:
          '<iframe style="border: 0;" width="100%" height="450" src="https://embed.figma.com/proto/2p0Po4DCrv6iSOiDqw3H7y/Loyalty-White-Paper---Q1-2024?page-id=613%3A47891&node-id=651-51438&viewport=146%2C350%2C0.1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=651%3A51438&show-proto-sidebar=1&hotspot-hints=0&hide-ui=1&embed-host=share" allowfullscreen></iframe>',
        imageCaption: "Prototype for updated Account Overview page",
      },
    ],
    results:
      "Once the redesign goes live, we project a 25% increase in profile page engagement and a 15% reduction in status-related support inquiries.",
  },
};

export default function CaseStudy() {
  const [match, params] = useRoute("/case-study/:id");
  const project =
    match && params?.id ? projects[params.id as keyof typeof projects] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-white mb-4">
            Project Not Found
          </h1>
          <Link
            href="/"
            className="text-primary hover:text-white transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const hasResults =
    typeof project.results === "string"
      ? project.results.trim().length > 0
      : project.results.length > 0;

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
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
              {project.title}
            </h1>


            <section
              className="glass rounded-2xl border-white/10 bg-white/5 px-6 py-5 mb-12"
              data-testid="section-project-meta"
            >
              <div className="grid sm:grid-cols-3 gap-6 items-start place-items-center">
                <div>
                  <h3 className="text-white font-bold mb-2 font-display" data-testid="text-meta-deliverables-label">
                    Deliverables
                  </h3>
                  <ul className="text-white/60 text-sm space-y-1" data-testid="list-meta-deliverables">
                    {project.deliverables.map((deliverable) => (
                      <li key={deliverable} data-testid={`item-meta-deliverable-${deliverable.replace(/\s+/g, "-").toLowerCase()}`}>{deliverable}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-2 font-display" data-testid="text-meta-methods-label">
                    Methods
                  </h3>
                  <ul className="text-white/60 text-sm space-y-1" data-testid="list-meta-methods">
                    {project.methods.map((method) => (
                      <li key={method} data-testid={`item-meta-method-${method.replace(/\s+/g, "-").toLowerCase()}`}>{method}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-2 font-display" data-testid="text-meta-tools-label">
                    Tools
                  </h3>
                  <ul className="text-white/60 text-sm space-y-1" data-testid="list-meta-tools">
                    {project.tools.map((tool) => (
                      <li key={tool} data-testid={`item-meta-tool-${tool.replace(/\s+/g, "-").toLowerCase()}`}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <div className="space-y-12">
              {hasResults && (
                  <section>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">
                      {typeof project.results === "string"
                        ? "Projected Results"
                        : "Key Results"}
                    </h2>
                    {Array.isArray(project.results) ? (
                      <div className="grid sm:grid-cols-3 gap-6">
                        {project.results.map((result, index) => (
                          <div
                            key={index}
                            className="glass p-6 rounded-2xl border-white/5 bg-white/5"
                          >
                            <p className="font-bold text-lg text-[#E8C97A]">
                              {result}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-white/70 text-lg leading-relaxed">
                        {project.results}
                      </p>
                    )}
                  </section>
                )}

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-6">
                    The Challenge
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {project.challenge}
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-white mb-6">
                    The Solution
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {project.solution}
                  </p>
                </section>

                {/* Dynamic Sections */}
                {project.sections &&
                  project.sections.map((section, index) => (
                    <section key={index} className="space-y-6">
                      <div>
                        {section.title && (
                          <h2 className="text-3xl font-display font-bold text-white mb-6">
                            {section.title}
                          </h2>
                        )}
                        {section.content && (
                          <p className="text-white/70 text-lg leading-relaxed">
                            {section.content}
                          </p>
                        )}
                        {section.items && (
                          <ul className="list-disc list-inside text-white/70 text-lg leading-relaxed mt-4 space-y-2 ml-4">
                            {section.items.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        )}
                        {section.afterListContent && !section.embed && (
                          <p className="text-white/70 text-lg leading-relaxed mt-4">
                            {section.afterListContent}
                          </p>
                        )}
                      </div>
                      {section.images && (
                        <div className="w-full px-12">
                          <Carousel className="w-full">
                            <CarouselContent>
                              {section.images.map((img, idx) => (
                                <CarouselItem
                                  key={idx}
                                  className="min-w-0 shrink-0 grow-0 basis-full bg-[#000000] flex items-center justify-center p-4 h-[300px] md:h-[500px] pl-[24px] pr-[24px] ml-[0px] mr-[0px]"
                                >
                                  <img
                                    src={img}
                                    alt={`${section.title} - Flow ${idx + 1}`}
                                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-sm"
                                  />
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                          </Carousel>
                          {section.imageCaption && (
                            <figcaption className="text-center text-white/40 text-sm py-3 italic">
                              {section.imageCaption}
                            </figcaption>
                          )}
                        </div>
                      )}
                      {section.embed && (
                        <div className="container mx-auto px-6" data-testid="section-prototype-container">
                          <div className="max-w-4xl mx-auto">
                            {section.afterListContent && (
                              <p
                                className="text-white/70 text-lg leading-relaxed mt-4"
                                data-testid="text-prototype-instructions"
                              >
                                {section.afterListContent}
                              </p>
                            )}
                            <figure
                              className="glass rounded-2xl overflow-hidden border-white/5 bg-white/5 mt-6"
                              data-testid="figure-prototype"
                            >
                              <div
                                className="w-full overflow-hidden bg-black/20 flex items-center justify-center"
                                dangerouslySetInnerHTML={{ __html: section.embed }}
                              />
                              {section.imageCaption && (
                                <figcaption
                                  className="text-center text-white/40 text-sm py-3 italic"
                                  data-testid="text-prototype-caption"
                                >
                                  {section.imageCaption}
                                </figcaption>
                              )}
                            </figure>
                          </div>
                        </div>
                      )}
                      {section.image && !section.embed && (
                        <figure className="glass rounded-2xl overflow-hidden border-white/5 bg-white/5 p-2">
                          <img
                            src={section.image}
                            alt={section.imageCaption || section.title}
                            className="w-full h-auto rounded-xl"
                          />
                          {section.imageCaption && (
                            <figcaption className="text-center text-white/40 text-sm py-3 italic">
                              {section.imageCaption}
                            </figcaption>
                          )}
                        </figure>
                      )}
                    </section>
                  ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
