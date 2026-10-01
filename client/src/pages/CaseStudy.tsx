import { useRoute } from "wouter";
import Navigation from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { motion } from "framer-motion";
import airlineApp from "@assets/generated_images/abstract_generic_upgrade_concept.png";
import airlineForm from "@assets/generated_images/abstract_error_reduction_concept.png";
import airlineLoyalty from "@assets/generated_images/abstract_premium_airline_loyalty_status_concept.png";
import researchFindings1 from "@assets/Findings_1765983086803.png";
import analyticsSignals1 from "@/assets/case-studies/aadvantage-profile/analytics-signals-1.png";
import analyticsSignals2 from "@/assets/case-studies/aadvantage-profile/analytics-signals-2.png";
import competitorBenchmark from "@/assets/case-studies/aadvantage-profile/competitor-analysis-benchmark.png";
import workshopCreativeMatrix from "@/assets/case-studies/aadvantage-profile/workshop-creative-matrix.png";
import workshopAlternateWorlds from "@/assets/case-studies/aadvantage-profile/workshop-alternate-worlds.png";
import workshopDesignStudio from "@/assets/case-studies/aadvantage-profile/workshop-design-studio.png";
import tooltipModalExample from "@/assets/case-studies/aadvantage-profile/tooltip-modal-example.png";
import trackerMobile from "@/assets/case-studies/aadvantage-profile/tracker-mobile.png";
import loungeTestingBoard from "@/assets/case-studies/aadvantage-profile/lounge-testing-board.png";
import trackerJourney from "@/assets/case-studies/aadvantage-profile/tracker-journey.png";
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
import upsellJourneyMap from "@/assets/case-studies/instant-upsell/journey_map.png";
import personaComfort from "@/assets/case-studies/instant-upsell/personas/comfort-seeker.jpg";
import personaLoyalist from "@/assets/case-studies/instant-upsell/personas/miles-loyalist.jpg";
import personaBudget from "@/assets/case-studies/instant-upsell/personas/budget-browser.jpg";
import passengerDiscovery from "@/assets/case-studies/passenger-data/discovery_luma.png";
import passengerCards from "@/assets/case-studies/passenger-data/design_cards.png";
import passengerFail from "@/assets/case-studies/passenger-data/analytics_fail.png";
import passengerSuccess from "@/assets/case-studies/passenger-data/final_success.png";
import passengerPersonaFamily from "@/assets/case-studies/passenger-data/personas/passenger-family-lead.jpg";
import passengerPersonaSolo from "@/assets/case-studies/passenger-data/personas/passenger-solo.jpg";
import passengerPersonaFixer from "@/assets/case-studies/passenger-data/personas/passenger-detail-fixer.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ease = [0.25, 0.1, 0.25, 1] as const;

const personaPhotoRing: Record<string, string> = {
  comfort: "ring-indigo-200",
  loyalty: "ring-amber-200",
  budget: "ring-emerald-200",
};

interface PersonaCard {
  name: string;
  tagline: string;
  description: string;
  image: string;
  accentKey: keyof typeof personaPhotoRing;
}

interface ProjectSection {
  title?: string;
  content?: string;
  /** Optional titled subsections (h3 + body) for structured conclusions */
  subsections?: { title: string; body: string }[];
  /** Optional closing line after subsections */
  closing?: string;
  items?: string[];
  personas?: PersonaCard[];
  afterListContent?: string;
  /** Paragraph(s) rendered after the image carousel when `images` is set */
  contentAfterImages?: string;
  /** Paragraph(s) rendered after a single `image` section */
  contentAfterImage?: string;
  /** Optional className override for `image` rendering */
  imageClassName?: string;
  /** Optional image shown to the right of an items list */
  sideImage?: string;
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
    category: "American Airlines \u2022 Revenue Generation",
    image: airlineApp,
    methods: ["Design Thinking Workshops", "Usability Testing", "Design Ideation Sessions"],
    tools: ["Figma", "LUMA", "Mural", "UserZoom"],
    deliverables: ["UX flows", "Wireframes", "Hi-Fi Mockups", "Usability Reports", "Design System Components"],
    challenge:
      "The Ancillaries business team brought UX a set of requirements: increase revenue from the seats ancillary product line while giving customers the flexibility to change their seating after purchase. The existing post-purchase experience offered little flexibility, and upsell potential was going untapped. I owned how the offers would be presented in the Manage Reservation and Check-in flows.",
    solution:
      "The business set the direction: offer upgrades for each flight leg, and roll out in two phases, launching cash upgrades first and then adding miles redemption for loyalty members. Offers would appear as a teaser on the Manage Reservation page, with the full experience in the Check-in flow. I designed the upgrade experience within those decisions, focusing on presenting offers so customers could make a decision quickly.",
    results: [
      "$3-4M ancillary revenue (Year 1)",
      "6B miles redeemed (Phase 2)",
      "Strong cash/miles toggle adoption",
    ],
    sections: [
      {
        title: "Background",
        content:
          "My goal was to make this page as seamless as possible so customers could make efficient decisions, especially during the Check-in flow. To get there, I pushed the team to understand the customer's mindset when viewing the page, so the offers would fit what people were actually thinking about at that moment in their trip.",
      },
      {
        title: "Research Approach",
        content:
          "I led all of the research for this project, combining four methods so our design decisions were grounded in real user needs rather than assumptions:",
        items: [
          "Design Thinking Workshops: I facilitated LUMA sessions with business and UX stakeholders to align on goals, surface assumptions, and prioritize opportunities",
          "Competitive Analysis: I reviewed how other airlines and e-commerce platforms present post-purchase upgrade and upsell offers, identifying patterns in pricing display, offer framing, and conversion tactics",
          "User Flow Analysis: I mapped existing touchpoints across Manage Reservation and Check-in to identify where upgrade offers would have the highest visibility and user intent",
          "Stakeholder Interviews: I met with revenue management and operations teams to understand pricing constraints, cabin inventory rules, and business targets",
        ],
        image: upsellJourneyMap,
        imageCaption: "AAdvantage member journey map: stages, pain points, emotional curve, and opportunities",
      },
      {
        title: "Who We Designed For",
        content:
          "American Airlines aligned product and design work around three customer personas. The upsell experience could support each persona's main goals, so we kept all three in mind throughout the design. Below is how each relates to post-purchase seat upgrade offers in Manage Reservation and Check-in.",
        personas: [
          {
            name: "Engaged Vacationer",
            tagline: "Once-a-year big trip, often multipax, budget conscious",
            description:
              "This traveler centers on one major vacation a year, often with family or companions. They are price sensitive: they may browse upgrade teasers and compare cash options carefully, and they are most likely to upgrade a single leg (for example the longest segment) rather than the whole itinerary. Clear pricing, flight duration, and a tight set of offers reduce decision fatigue. They may carry a smaller miles balance, so when Phase 2 added miles, simple balance visibility and an obvious cash-versus-miles choice helped them stay within trip budget.",
            image: personaBudget,
            accentKey: "budget",
          },
          {
            name: "Travel Connoisseur",
            tagline: "Frequent business traveler, multiple trips per month, usually solo",
            description:
              "This traveler is in the flow constantly, often alone. They value speed and predictability: scannable upgrade cards, leg-level offers, and a frictionless path in check-in match a habituated mental model. They may switch often between cash and miles; the toggle and comprehension-tested layout let them decide quickly without relearning the page each trip.",
            image: personaComfort,
            accentKey: "comfort",
          },
          {
            name: "Premium Customer",
            tagline: "Several trips per year, leisure and business, solo or multipax, expects top-tier service",
            description:
              "This traveler flies regularly for mixed reasons and sometimes books for others. They are more open to paying for comfort when benefits and price are easy to compare. Clutter or vague upgrade framing feels misaligned with the service level they expect from the airline. Per-leg flexibility still matters when only part of the journey warrants a better cabin; miles redemption in Phase 2 supports using loyalty for upgrades without sacrificing clarity.",
            image: personaLoyalist,
            accentKey: "loyalty",
          },
        ],
      },
      {
        title: "Discovery & Opportunities",
        content:
          "As a team, we synthesized the research into three focused opportunities: 1) Provide two focused upgrade offers to avoid decision paralysis. 2) Present offers by segment (single leg) to give users flexible, lower-commitment options. 3) Display flight duration to help customers weigh which leg is worth upgrading. Flight duration was a data point I pushed for, because it gives customers a concrete way to decide which leg is worth the upgrade. With the opportunities defined, our first challenge was determining how to position the experience: where in the journey would a teaser drive the highest click-through, and where should the full upgrade page live?",
        images: [manageResFlow, checkInFlow],
        imageCaption:
          "User flows showing the Manage Reservation teaser and Check-in integration paths",
      },
      {
        title: "Strategic Approach",
        content:
          "We chose to focus on two high-traffic touchpoints: the Manage Reservation page (as a teaser) and the Check-in flow (as the full experience). This decision was driven by three factors. First, customers in these flows have already committed to their trip and are in a mindset to optimize their experience, and intent is naturally high. Second, check-in is a mandatory step, giving us guaranteed visibility without disrupting the booking funnel. Third, a phased rollout, starting with cash upgrades before layering in miles, let us validate the core experience before adding complexity. This de-risked the launch and gave us clean data to build a case for Phase 2.",
      },
      {
        title: "Design Process",
        content:
          "The design process began with competitive research to understand how other commerce sites presented offers. I explored several layouts and wireframes, including a couple of differently styled table layouts and an accordion layout, before landing on cards.",
        images: [ideationDesktop, ideationMobile],
        imageCaption: "Initial wireframe explorations for the upsell interface",
      },
      {
        title: "Final Design (Phase 1)",
        content:
          "I chose the card layout because it was the easiest to scan and compare, and it could present multiple offers without overwhelming the customer. In the first year alone, this design generated $3-4 million in revenue for American Airlines.",
        image: upsellFinalDesign,
        imageCaption:
          "Final design featuring clear pricing and simple selection",
      },
      {
        title: "The Story Continues...",
        content:
          "After Phase 1's results, business and UX came back together to add a 'Cash vs. Miles' payment option for loyalty members. I used a design thinking recipe of storyboarding and dot voting to explore how to show both options at the same time. The output was a design framework for presenting miles as a payment option.",
        image: upsellDesignThinking,
        imageCaption: "Design thinking session: Storyboarding and dot voting",
      },
      {
        title: "Usability Testing",
        content:
          "I wrote the test plan and ran the tests in UserZoom with both guest users and loyalty members. Participants were asked to upgrade a specific flight leg using both cash and miles, so we could measure comprehension and task success. Across three rounds of 100 participants each, the overall success rate was consistently 85% or better, and users understood how to switch currencies and view their balance.",
        image: upsellUsability,
        imageCaption: "Usability testing results showing high comprehension",
      },
      {
        title: "Final Design (Phase 2)",
        content:
          "Technical limitations meant we had to give up two features: a split-payment slider and showing cabin benefits, because neither could be made to work properly. The toggle above the offers had been very successful in usability testing, so we were confident shipping it. After launch, over 6 billion loyalty miles were redeemed by AAdvantage status members.",
        image: upsellFinalPhase2,
        imageCaption: "Phase 2 design with Cash/Miles toggle",
      },
      {
        title: "Key Takeaways",
        subsections: [
          {
            title: "Keep It Simple",
            body: "My biggest takeaway: keep it simple and provide value the customer actually wants. Two focused offers, per-leg pricing, and a single cash/miles toggle were enough to drive $3-4 million in revenue and over 6 billion miles redeemed.",
          },
        ],
      },
    ],
  },
  "passenger-data": {
    title: "Passenger Data Simplification",
    category: "American Airlines \u2022 Error Reduction",
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
      "Customer error rates on the passenger details page were consistently between 4-5%. Confusing labels and complex layouts led to mistakes in entering names and contact details, causing delays and lower customer satisfaction. The product owner brought the problem to UX with a clear goal: bring the errors down. I owned the page design updates that would help get there.",
    solution:
      "I redesigned the page to reduce noise and keep only the necessary information, and worked with the business on A/B testing and gathering data from Quantum Metric. When the initial A/B test showed an uptick in errors, we used Quantum Metric to identify the issue and implemented a 'hinting' mechanism to guide users to complete the passenger cards before proceeding.",
    results: [
      "Passenger errors: ~5% to <0.1%",
      "Material drop in support calls",
      "Positive revenue impact",
    ],
    sections: [
      {
        title: "Background",
        content:
          "Passenger details is the most time-intensive page in the entire booking flow. My goal was to make passenger entry as easy as possible, so customers would have few, if any, questions in their mind while filling out the forms. That meant keeping the page focused on passenger data, with little to no extra noise.",
      },
      {
        title: "Strategic Context",
        content:
          "Passenger data sits upstream of security, check-in, and operational readiness. Errors here don't just annoy customers; they create rework for agents, drive support volume, and risk compliance issues. The product owner and I set the priorities together: reduce cognitive load and error rate over cosmetic polish alone. Success meant fewer bad submissions, not just a prettier layout.",
      },
      {
        title: "Research Approach",
        content:
          "I combined qualitative and quantitative methods so we could align on intent before build, then validate in production when reality hit:",
        items: [
          "Design thinking workshops: I facilitated LUMA exercises with Business and UX to prioritize problems and align on constraints",
          "Moderated and unmoderated UserZoom studies: I ran studies to validate card-based layouts, passenger selection, and comprehension before development",
          "Design iteration: I led structured critiques on chunking passenger data, labeling, and progressive disclosure",
          "A/B testing: the business ran A/B tests to measure error rate and completion behavior in the live funnel",
          "Quantum Metric session replay: I reviewed replays to diagnose why errors spiked after launch and confirm behavioral hypotheses",
          "Competitive and pattern review: I benchmarked how other travel flows signal incomplete steps and guide completion",
        ],
      },
      {
        title: "Who We Designed For",
        content:
          "American Airlines aligned product and design work around three customer personas, and we kept all three in mind throughout the design. Below is how each relates to the passenger details flow, especially when accuracy and completion state matter.",
        personas: [
          {
            name: "Engaged Vacationer",
            tagline: "Once-a-year big trip, often multipax, budget conscious",
            description:
              "Usually booking for several people on one high-stakes trip. The passenger page carries extra weight: names and documents must match IDs for everyone in the party. Clutter and ambiguous completion states increase the risk of someone being left incomplete. Card-based chunking and hinting that calls out unfinished passengers directly support multipax coordination before Continue.",
            image: passengerPersonaFamily,
            accentKey: "comfort",
          },
          {
            name: "Travel Connoisseur",
            tagline: "Frequent business traveler, multiple trips per month, usually solo",
            description:
              "Often flies solo and wants the shortest path through required steps. Speed makes it easy to treat passenger cards as optional chrome unless the UI signals what is incomplete. Strong completion visibility and progressive disclosure match their need to confirm done in seconds, which is why replay data showing Continue without completed cards was so critical to address.",
            image: passengerPersonaSolo,
            accentKey: "loyalty",
          },
          {
            name: "Premium Customer",
            tagline: "Several trips per year, leisure and business, solo or multipax, expects top-tier service",
            description:
              "Alternates between booking alone and managing companions. They expect the same clarity and polish as other premium touchpoints: obvious per-passenger status, clean hierarchy, and validation that feels intentional rather than accidental. When the party grows, the experience must scale without turning into a wall of fields, or errors feel beneath the brand promise.",
            image: passengerPersonaFixer,
            accentKey: "budget",
          },
        ],
      },
      {
        title: "Themes From Research",
        content:
          "The lines below paraphrase recurring themes from usability sessions and stakeholder conversations (anonymized). They are not verbatim quotes, but they steered our priorities:",
        items: [
          "\"I'm not always sure which passenger I'm editing when the page gets long.\"",
          "\"It looks like I'm done, but something still feels unfinished.\"",
          "\"I want fewer distractions while I'm dealing with legal names and documents.\"",
          "\"If I miss a field, I want the page to show me exactly where, not make me hunt.\"",
        ],
      },
      {
        title: "Discovery",
        content:
          "I facilitated a design thinking workshop with Business and UX teams using a LUMA recipe: Rose, Thorn, Bud; Affinity Clustering; Visualize the Vote; and an Importance/Difficulty Matrix. The workshop surfaced alignment on reducing noise, tightening the hierarchy, and chunking passenger data into scannable units.",
        image: passengerDiscovery,
        imageCaption: "LUMA Design Thinking session results: Identifying key opportunities",
      },
      {
        title: "Key Opportunities",
        content:
          "After synthesis, we aligned on a short list of opportunities that could move error rate and comprehension together. We originally wanted to remove the ad on the page, but the business later decided it had to stay. We kept reducing noise everywhere else:",
        items: [
          "Remove unnecessary fields and items, such as the promo code field",
          "Chunk passenger information into cards so customers can focus on one task at a time",
          "Make completion state obvious so users cannot accidentally continue with incomplete passenger records",
          "Preserve flexibility for constrained engineering releases: favor patterns that could ship incrementally",
        ],
      },
      {
        title: "Design & Research",
        content:
          "I designed and iterated on card displays and interaction details, pressure-testing passenger selection, editing, and empty states. I then ran two rounds of UserZoom testing with 100 participants, with a 90% success rate. The card model improved scannability and task confidence, which gave us a green light to move into development.",
        image: passengerCards,
        imageCaption: "Iterative design process exploring card-based layouts",
      },
      {
        title: "The Pivot & Challenge",
        content:
          "The project started in 2023 and was de-prioritized, then brought back to the top of the priority list in 2025 with strict constraints: few changes could be made to the developed code, and ad placements were fixed. Upon launching an A/B test, we unexpectedly saw error rates spike (affecting 10% of customers).",
        image: passengerFail,
        imageCaption: "Design launched for A/B testing",
      },
      {
        title: "Analytics & Recovery",
        content:
          "Using Quantum Metric, we watched replays and discovered users weren't perceiving the cards as actionable. They clicked 'Continue' without filling them out. To find a fix, we reviewed how competitors handled passenger entry, and implemented a 'hinting' pattern that highlights incomplete areas and only reveals the rest of the page once the cards are completed.",
      },
      {
        title: "Final Success",
        content:
          "After this adjustment, error rates dropped from the 10% spike down to less than 0.1%, well past our goal of 2%. Getting customers through the booking flow quickly and correctly means they are more likely to complete it and make a purchase.",
        image: passengerSuccess,
        imageCaption: "Final design with 'hinting' mechanism that solved the user error issue",
      },
      {
        title: "Key Takeaways",
        content:
          "This project reinforced that strong workshop alignment is not enough on its own: production behavior surfaced a gap between what users said in testing and what they did under real distraction and time pressure. Session replay turned a scary A/B regression into a diagnosable pattern, and the hinting approach became a reusable lesson for other high-stakes forms.",
      },
    ],
  },
  "aadvantage-profile": {
    title: "AAdvantage Program Education",
    category: "American Airlines • Loyalty & Account Experience",
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
      "Customers struggled to understand AAdvantage program updates: how loyalty points differ from award miles, what the status tracker represented, and how to earn and use benefits. The gap showed up as underused perks, low engagement on key loyalty pages, support and survey noise, and frustration with the progress tracker when it lacked enough context.",
    solution:
      "We paired just-in-time education with a calmer, more scannable account experience. Inline tooltips anchored next to the numbers members already stared at opened short definitions in modals. We iterated the status tracker through multiple concepts and usability rounds until it met a high comprehension bar, then added contextual videos for the most common how-to questions. The full experience came together as modular widgets, navigation, tracker, and learning content aligned to the Aileron design system.",
    results: [
      "Tooltips: 2nd-highest on-page engagement",
      "~2% booking CTR lift",
      "Tracker live on app; .com underway",
    ],
    sections: [
      {
        title: "Phase 1: Define the problem",
        content:
          "Program rules had changed, but members were still stuck. In research they struggled to explain how earning, tracking, and benefits actually fit together, even when they cared about staying in the program. That's where we started. We paired what we were hearing in loyalty research with what the product was already telling us: people were rage-clicking the progress tracker, and the surfaces that were supposed to make the program legible just weren't getting traction.",
        images: [analyticsSignals1, analyticsSignals2],
        contentAfterImages:
          "Qualtrics feedback surfaced repeated questions about earning and using miles, with many members effectively ignoring Loyalty Points. Call center teams were hearing the same comprehension gaps so those together displayed a need for customer education, not just a visual update.",
      },
      {
        title: "Phase 2: Discover",
        content:
          "We ran moderated sessions in the airport and unmoderated studies in UserZoom, pairing tasks with surveys to watch where people stumbled, misread content, or quit.",
        image: researchFindings1,
        imageCaption:
          "Research artifacts supporting synthesis of member comprehension issues",
        contentAfterImage:
          "Synthesis: Based on the research observations and findings, we found that the majority of customers lacked understanding regarding the distinction between loyalty points and award miles. While there were no significant criticisms about the design of the dashboard, opinions on the airplane tracker for status points were mixed. Some users appreciated it, while a majority deemed it arbitrary due to its lack of accompanying information.\n\nCustomers expressed a desire for a dashboard that better acknowledges their loyalty, and they feel that the current design falls short in assisting them in learning strategies to accrue loyalty points and award miles and effectively managing their AAdvantage® account. Given this data, I hypothesize that dividing the dashboard into responsive widgets will effectively segregate and prioritize the information that is most pertinent to our customers.",
      },
      {
        title: "Competitive research",
        content:
          "We benchmarked loyalty overview experiences across major airlines and adjacent travel brands. Patterns that worked shared plain-language scaffolding for complex programs, strong visual trackers when paired with explanation, and clear answers to can I? questions. That reinforced investing in a visual tracker, but only if we also taught what the numbers meant.",
        image: competitorBenchmark,
        imageCaption:
          "Competitive benchmark: loyalty overview features and tracker patterns across travel brands (competitor names redacted)",
      },
      {
        title: "Design thinking workshops",
        content:
          "We facilitated two cross-functional How Might We sessions. First, Creative Matrix plus Alternate Worlds to widen the idea space. Then a Design Studio pass to ground concepts inside American's technical reality and design system boundaries so ideas could actually ship.",
        images: [workshopCreativeMatrix, workshopAlternateWorlds, workshopDesignStudio],
      },
      {
        title: "Phase 3: Devise quick wins",
        content:
          "I designed inline tooltip elements that opened modals to define confusing loyalty terminology without cluttering the page.\nSince customers were already drawn to the numbers, I anchored the question marks right alongside them thus turning a natural focal point into an invitation to learn and help answer questions.",
        image: tooltipModalExample,
        imageClassName: "w-[72%] h-auto rounded-xl mx-auto",
      },
      {
        title: "Making progress visible",
        content:
          "The first evolution I designed leaned heavily on business requirements and needs. Early iterations paired activities with the tracker but were vetoed due to technical restraints; I tried mirroring the mobile app model but that was vetoed when it did not fit the .com space. Finally I designed what I called the \"kitchen-sink\" concept (show everything members could earn) so I could test and see what people actually needed.",
        sideImage: trackerJourney,
      },
      {
        title: "Validation approach",
        content:
          "We tested online in UserZoom and in person in the airport lounge, rotating AAdvantage members across tiers, tenure, age, and background as broadly as recruitment allowed. Insights fed the next round within days. Each feature had to clear roughly an 80% comprehension or task-success threshold before advancing, which kept the team honest about what was truly working.",
        image: loungeTestingBoard,
      },
      {
        title: "Tracker iterations",
        content:
          "Testing exposed that more toggle complexity did not equal more clarity. A complex toggle showing point distribution was rejected as too dense; a simpler toggle still left room to strip further. The direction that survived was the simplest readable state with paths to deeper detail for members who wanted it.",
        items: [
          "Complex toggle showing Loyalty Point distribution: vetoed, information overload",
          "Simple toggle showing a single summary: vetoed, still not minimal enough",
          "Keep it simple: clean default with optional depth for advanced questions",
        ],
        sideImage: trackerMobile,
      },
      {
        title: "Phase 4: Design",
        content:
          "Pixel-finished desktop and mobile screens brought together tooltip patterns, the tier tracker, video FAQ modules, and the broader widget strategy, all executed on the Aileron design system for build-ready handoff.",
        items: [
          "Widget-based account layout",
          "Collapsible side navigation",
          "Profile completion cues",
          "Updated rewards tracker",
          "Top activity snapshot",
          "Learning hub and earn or spend pathways",
        ],
        afterListContent:
          "Scroll the prototype below to explore the proposed account overview.",
        embed:
          '<iframe style="border: 0;" width="100%" height="450" src="https://embed.figma.com/proto/2p0Po4DCrv6iSOiDqw3H7y/Loyalty-White-Paper---Q1-2024?page-id=613%3A47891&node-id=651-51438&viewport=146%2C350%2C0.1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=651%3A51438&show-proto-sidebar=1&hotspot-hints=0&hide-ui=1&embed-host=share" allowfullscreen></iframe>',
        imageCaption: "Prototype for updated Account Overview page",
      },
      {
        title: "Phase 5: Develop and impact",
        content:
          "DesignOps required icon adjustments before launch, but analytics still showed tooltip icons as the second-highest engagement element on the page, with roughly a 2% increase in booking click-through. The tracker is still in production for .com, but live on the AA App.",
      },
      {
        title: "Key Takeaways",
        items: [
          "Context is King: Providing help exactly when and where customers need it reduces friction and increases comprehension.",
          "Stay Relevant: Users value visualizations, but only when information is concise and directly aids their progress in the moment.",
          "Small = Big: Even subtle design elements, like tooltip icons, can drive high engagement and contribute directly to business goals.",
        ],
      },
    ],
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
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <Link
            href="/"
            className="text-primary hover:text-gray-900 transition-colors"
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
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-8 leading-tight">
                {project.title}
              </h1>
            </motion.div>

            <section
              className="card-clean rounded-2xl px-6 py-5 mb-12"
              data-testid="section-project-meta"
            >
              <div className="grid sm:grid-cols-3 gap-6 items-start place-items-center">
                <div>
                  <h3 className="text-gray-900 font-bold mb-2 font-display" data-testid="text-meta-deliverables-label">
                    Deliverables
                  </h3>
                  <ul className="text-gray-500 text-sm space-y-1" data-testid="list-meta-deliverables">
                    {project.deliverables.map((deliverable) => (
                      <li key={deliverable} data-testid={`item-meta-deliverable-${deliverable.replace(/\s+/g, "-").toLowerCase()}`}>{deliverable}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-gray-900 font-bold mb-2 font-display" data-testid="text-meta-methods-label">
                    Methods
                  </h3>
                  <ul className="text-gray-500 text-sm space-y-1" data-testid="list-meta-methods">
                    {project.methods.map((method) => (
                      <li key={method} data-testid={`item-meta-method-${method.replace(/\s+/g, "-").toLowerCase()}`}>{method}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-gray-900 font-bold mb-2 font-display" data-testid="text-meta-tools-label">
                    Tools
                  </h3>
                  <ul className="text-gray-500 text-sm space-y-1" data-testid="list-meta-tools">
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
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                      {typeof project.results === "string"
                        ? "Projected Results"
                        : "Key Results"}
                    </h2>
                    {Array.isArray(project.results) ? (
                      <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                        {project.results.map((result, index) => (
                          <div
                            key={index}
                            className="card-clean px-4 py-3.5 rounded-xl border border-gray-100"
                          >
                            <p className="font-display font-semibold text-sm sm:text-base text-primary leading-snug text-balance">
                              {result}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-lg leading-relaxed">
                        {project.results}
                      </p>
                    )}
                  </section>
                )}

                <section>
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                    The Challenge
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {project.challenge}
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                    The Solution
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {project.solution}
                  </p>
                </section>

                {project.sections &&
                  project.sections.map((section, index) => (
                    <motion.section
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease }}
                      className="space-y-6"
                    >
                      <div>
                        {section.title && (
                          <>
                            {(section.title === "Phase 1: Define the problem" ||
                              section.title === "Phase 2: Discover" ||
                              section.title === "Phase 3: Devise quick wins" ||
                              section.title === "Phase 4: Design" ||
                              section.title === "Phase 5: Develop and impact") && (
                              <hr className="border-gray-200 mb-6" />
                            )}
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                              {section.title}
                            </h2>
                          </>
                        )}
                        {section.content && !section.items && section.sideImage ? (
                          <div className="mt-4 grid gap-6 md:grid-cols-[320px_1fr] md:items-start">
                            <figure className="card-clean rounded-2xl overflow-hidden p-2 w-full max-w-[320px]">
                              <img
                                src={section.sideImage}
                                alt={section.imageCaption || section.title || "Supporting image"}
                                className="w-full h-auto rounded-xl"
                                loading="lazy"
                                decoding="async"
                              />
                            </figure>
                            <div className="space-y-4">
                              {section.content.split(/\n\n+/).map((para, idx) => (
                                <p key={idx} className="text-gray-500 text-lg leading-relaxed">
                                  {para}
                                </p>
                              ))}
                            </div>
                          </div>
                        ) : section.subsections && section.subsections.length > 0 ? (
                          <div className="space-y-6">
                            {section.subsections.map((sub, i) => (
                              <div key={i} className="space-y-2">
                                <h3 className="text-xl font-display font-semibold text-gray-900">
                                  {sub.title}
                                </h3>
                                <p className="text-gray-500 text-lg leading-relaxed">{sub.body}</p>
                              </div>
                            ))}
                            {section.closing && (
                              <p className="text-gray-500 text-lg leading-relaxed pt-1">{section.closing}</p>
                            )}
                          </div>
                        ) : section.content ? (
                          <div className="space-y-4">
                            {section.content.split(/\n\n+/).map((para, idx) => (
                              <p key={idx} className="text-gray-500 text-lg leading-relaxed">
                                {para}
                              </p>
                            ))}
                          </div>
                        ) : null}
                        {section.personas && section.personas.length > 0 && (
                          <div className="mt-6 grid gap-4 sm:grid-cols-3">
                            {section.personas.map((persona) => {
                              const ring =
                                personaPhotoRing[persona.accentKey] ??
                                personaPhotoRing.comfort;
                              return (
                                <div
                                  key={persona.name}
                                  className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm ring-1 ring-gray-100"
                                  data-testid={`persona-${persona.name.replace(/\s+/g, "-").toLowerCase()}`}
                                >
                                  <div className="flex items-start gap-3">
                                    <img
                                      src={persona.image}
                                      alt={`Illustrative portrait for the ${persona.name} persona`}
                                      width={56}
                                      height={56}
                                      className={`h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-offset-2 ring-offset-white ${ring}`}
                                      loading="lazy"
                                      decoding="async"
                                    />
                                    <div className="min-w-0 flex-1">
                                      <h3 className="font-display text-base font-bold text-gray-900 leading-tight">
                                        {persona.name}
                                      </h3>
                                      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary">
                                        {persona.tagline}
                                      </p>
                                    </div>
                                  </div>
                                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                    {persona.description}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        )}
                        {section.personas && section.personas.length > 0 && (
                          <p className="mt-3 text-center text-xs text-gray-400">
                            Portraits are illustrative only and do not depict research participants.
                          </p>
                        )}
                        {section.items && !section.personas?.length && (
                          <div
                            className={
                              section.sideImage
                                ? "mt-4 grid gap-6 md:grid-cols-[1fr_240px] md:items-start"
                                : "mt-4"
                            }
                          >
                            <ul className="list-disc list-inside text-gray-500 text-lg leading-relaxed space-y-2 ml-4">
                              {section.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                            {section.sideImage && (
                              <figure className="card-clean rounded-2xl overflow-hidden p-2 w-full max-w-[240px] justify-self-end">
                                <img
                                  src={section.sideImage}
                                  alt={section.imageCaption || section.title || "Supporting image"}
                                  className="w-full h-auto rounded-xl"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </figure>
                            )}
                          </div>
                        )}
                        {section.afterListContent && !section.embed && (
                          <p className="text-gray-500 text-lg leading-relaxed mt-4">
                            {section.afterListContent}
                          </p>
                        )}
                      </div>
                      {section.images && (
                        <div className="w-full px-12 -my-3">
                          <Carousel className="w-full">
                            <CarouselContent>
                              {section.images.map((img, idx) => (
                                <CarouselItem
                                  key={idx}
                                  className="min-w-0 shrink-0 grow-0 basis-full bg-gray-50 flex items-center justify-center px-6 py-1 h-[200px] md:h-[330px]"
                                >
                                  <img
                                    src={img}
                                    alt={`${section.title} - Flow ${idx + 1}`}
                                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-sm scale-[1.125]"
                                  />
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                          </Carousel>
                          {section.imageCaption && (
                            <figcaption className="text-center text-gray-400 text-sm py-1.5 italic">
                              {section.imageCaption}
                            </figcaption>
                          )}
                        </div>
                      )}
                      {section.contentAfterImages && (
                        <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                          {section.contentAfterImages}
                        </p>
                      )}
                      {section.embed && (
                        <div className="container mx-auto px-6" data-testid="section-prototype-container">
                          <div className="max-w-4xl mx-auto">
                            {section.afterListContent && (
                              <p
                                className="text-gray-500 text-lg leading-relaxed mt-4"
                                data-testid="text-prototype-instructions"
                              >
                                {section.afterListContent}
                              </p>
                            )}
                            <figure
                              className="card-clean rounded-2xl overflow-hidden mt-6"
                              data-testid="figure-prototype"
                            >
                              <div
                                className="w-full overflow-hidden bg-gray-50 flex items-center justify-center"
                                dangerouslySetInnerHTML={{ __html: section.embed }}
                              />
                              {section.imageCaption && (
                                <figcaption
                                  className="text-center text-gray-400 text-sm py-3 italic"
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
                        <figure className="card-clean rounded-2xl overflow-hidden p-2">
                          <img
                            src={section.image}
                            alt={section.imageCaption || section.title}
                            className={section.imageClassName ?? "w-[85%] h-auto rounded-xl mx-auto"}
                          />
                          {section.imageCaption && (
                            <figcaption className="text-center text-gray-400 text-sm py-3 italic">
                              {section.imageCaption}
                            </figcaption>
                          )}
                        </figure>
                      )}
                      {section.contentAfterImage && !section.embed && (
                        <div className="mt-6 space-y-4">
                          {section.contentAfterImage.split(/\n\n+/).map((para, idx) => (
                            <p key={idx} className="text-gray-500 text-lg leading-relaxed">
                              {idx === 0 && para.startsWith("Synthesis:") ? (
                                <>
                                  <strong className="font-semibold text-gray-900">Synthesis:</strong>{" "}
                                  {para.replace(/^Synthesis:\s*/, "")}
                                </>
                              ) : (
                                para
                              )}
                            </p>
                          ))}
                        </div>
                      )}
                    </motion.section>
                  ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
