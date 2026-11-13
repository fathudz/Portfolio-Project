import { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2, FileText, X } from 'lucide-react';
import { PROJECTS, type ProjectCategory, type ProjectItem } from '../data/portfolioData';
import { countProjectsByCategory, filterProjects } from '../utils/portfolioLogic';
import { SafeImage } from './SafeImage';

const FILTER_TABS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Works' },
  { id: 'digital', label: 'Digital & Systems' },
  { id: 'trade', label: 'Global Trade & R&D' },
];

export function WorksSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const visibleProjects = filterProjects(PROJECTS, activeCategory);
  const categoryCounts = countProjectsByCategory(PROJECTS);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="works" aria-labelledby="works-heading" className="space-y-6 pt-2">
      {/* Section Header & Interactive Filter Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-gray-200/80 pb-5">
        <div>
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0D8A9E]">
            Selected Works &amp; Ventures
          </p>
          <h2 id="works-heading" className="text-3xl font-extrabold text-[#111827] text-tight mt-1">
            Enterprise Systems &amp; Global Trade
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
          {/* Interactive Segmented Filter Bar */}
          <div
            role="tablist"
            aria-label="Filter projects by domain"
            className="flex flex-wrap items-center gap-1 p-1 bg-white border border-gray-200/80 rounded-xl shadow-2xs max-w-full"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-2.5 sm:px-3.5 py-2 text-[11px] sm:text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[36px] ${
                    isActive
                      ? 'bg-[#111827] text-white'
                      : 'text-[#4B5563] hover:text-[#111827] hover:bg-gray-100'
                  }`}
                >
                  {tab.label} ({categoryCounts[tab.id]})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bento Showcase Grid */}
      <div
        data-testid="works-grid"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between group"
          >
            <div>
              {/* 16:9 Media Header */}
              <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden mb-5 bg-gray-100 border border-gray-200 relative">
                <SafeImage
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  fallbackTitle={project.organization}
                  fallbackSubtitle={project.badgeOverlay}
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/65 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-[#111827]/90 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-mono uppercase tracking-wider">
                  {project.badgeOverlay}
                </div>
              </div>

              {/* Meta Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs font-mono">
                <span className="text-[#0D8A9E] uppercase tracking-wide font-semibold">
                  {project.kicker} · {project.period}
                </span>
                {project.externalUrl ? (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#111827] hover:text-[#0D8A9E] font-medium transition-colors"
                  >
                    <span>{project.domainLabel}</span>
                    <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-gray-500">{project.domainLabel}</span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-[#111827] mb-2 leading-snug">
                {project.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed font-body mb-5">
                {project.summary}
              </p>
            </div>

            {/* Footer Metadata + Case Study Action */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] text-gray-500">
                {project.tags.map((tag, idx) => (
                  <span key={tag} className="inline-flex items-center gap-2">
                    <span className="text-[#111827] font-medium">{tag}</span>
                    {idx < project.tags.length - 1 && (
                      <span aria-hidden="true" className="text-gray-300">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111827] hover:text-[#0D8A9E] transition-colors whitespace-nowrap shrink-0 py-1.5 px-2 -mr-2 rounded-lg focus-visible:outline-2 focus-visible:outline-[#0D8A9E]"
              >
                <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                <span>View Case Study</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xs"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl p-5 sm:p-7 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0D8A9E]">
                  {selectedProject.organization} · {selectedProject.period}
                </p>
                <h3
                  id="case-study-modal-title"
                  className="text-xl sm:text-2xl font-extrabold text-[#111827] mt-1"
                >
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close case study"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#111827] hover:bg-gray-100 shrink-0 transition-colors"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
              <SafeImage
                src={selectedProject.imageUrl}
                alt={selectedProject.imageAlt}
                fallbackTitle={selectedProject.organization}
                fallbackSubtitle={selectedProject.badgeOverlay}
              />
            </div>

            <div className="space-y-4 font-body text-sm text-[#4B5563]">
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#111827] mb-1.5">
                  Core Challenge
                </h4>
                <p className="leading-relaxed">{selectedProject.caseStudy.challenge}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#111827] mb-2">
                  Execution &amp; Deliverables
                </h4>
                <ul className="space-y-2">
                  {selectedProject.caseStudy.execution.map((step) => (
                    <li key={step} className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 text-[#0D8A9E] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-[#F4F5F7] border border-gray-200/70">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#111827] mb-1">
                  Commercial &amp; System Outcome
                </h4>
                <p className="text-[#111827] font-medium leading-relaxed">
                  {selectedProject.caseStudy.impact}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs font-mono text-gray-500">
                Role: <span className="text-[#111827] font-semibold">{selectedProject.role}</span>
              </div>
              <div className="flex items-center gap-2">
                {selectedProject.externalUrl && (
                  <a
                    href={selectedProject.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#0D8A9E] hover:bg-[#086372] text-white px-4 py-2.5 rounded-full text-xs font-semibold transition-colors whitespace-nowrap"
                  >
                    <span>Visit {selectedProject.domainLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded-full border border-gray-200 hover:bg-gray-100 text-xs font-semibold text-[#111827] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
