export type WorkSectionKey = "ux-case-studies" | "ai-expertise";

type WorkSectionNavProps = {
  activeSection: WorkSectionKey;
  onSectionChange: (section: WorkSectionKey) => void;
};

export default function WorkSectionNav({
  activeSection,
  onSectionChange,
}: WorkSectionNavProps) {
  const btnClass = (id: WorkSectionKey) =>
    `shrink-0 text-center px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
      activeSection === id
        ? "bg-gray-900 text-white shadow-sm"
        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
    }`;

  return (
    <nav
      className="sticky top-24 z-30 -mx-1 flex shrink-0 items-center justify-end px-1 py-1 bg-background/90 backdrop-blur-md"
      aria-label="Work page sections"
      data-testid="section-work-subnav"
    >
      <div
        className="flex flex-wrap items-center justify-end gap-1 sm:gap-2 sm:inline-flex sm:rounded-full sm:border sm:border-gray-200 sm:bg-white sm:p-1 sm:shadow-sm"
        role="tablist"
        aria-label="Choose project category"
      >
        <button
          type="button"
          role="tab"
          id="tab-ux-case-studies"
          aria-selected={activeSection === "ux-case-studies"}
          aria-controls="ux-case-studies"
          className={btnClass("ux-case-studies")}
          data-testid="link-work-case-studies"
          onClick={() => onSectionChange("ux-case-studies")}
        >
          UX Case Studies
        </button>
        <button
          type="button"
          role="tab"
          id="tab-ai-expertise"
          aria-selected={activeSection === "ai-expertise"}
          aria-controls="ai-expertise"
          className={btnClass("ai-expertise")}
          data-testid="link-work-ai-expertise"
          onClick={() => onSectionChange("ai-expertise")}
        >
          AI Expertise
        </button>
      </div>
    </nav>
  );
}
