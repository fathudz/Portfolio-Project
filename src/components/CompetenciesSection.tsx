import { Check, FlaskConical, Network, Ship, Workflow } from 'lucide-react';
import { COMPETENCIES, type CompetencyItem } from '../data/portfolioData';

function CompetencyIcon({ name }: { name: CompetencyItem['iconName'] }) {
  switch (name) {
    case 'sitemap':
      return <Network className="w-4 h-4" aria-hidden="true" />;
    case 'workflow':
      return <Workflow className="w-4 h-4" aria-hidden="true" />;
    case 'ship':
      return <Ship className="w-4 h-4" aria-hidden="true" />;
    case 'flask':
      return <FlaskConical className="w-4 h-4" aria-hidden="true" />;
  }
}

export function CompetenciesSection() {
  return (
    <section id="competencies" aria-labelledby="competencies-heading" className="pt-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Context Card */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-gray-200/80 shadow-xs space-y-4">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#0D8A9E]">
            Expertise Matrix
          </p>
          <h2
            id="competencies-heading"
            className="text-3xl font-extrabold text-[#111827] text-tight leading-snug"
          >
            How Can I Assist You?
          </h2>
          <p className="text-[#4B5563] text-sm leading-relaxed font-body">
            Bridging technical engineering and commercial reality. Whether structuring a new
            enterprise digital product from ground zero or leading end-to-end global trade
            negotiations, cross-functional competence eliminates ambiguity.
          </p>
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3 text-xs font-semibold text-[#111827]">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" aria-hidden="true" />
              </span>
              <span>Available for full-time roles &amp; advisory contracts</span>
            </div>
          </div>
        </div>

        {/* Right 2x2 Numbered Bento Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {COMPETENCIES.map((item) => (
            <article
              key={item.number}
              className="bg-white rounded-3xl p-7 border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-gray-200 group-hover:text-[#0D8A9E] transition-colors tabular-nums">
                    {item.number}
                  </span>
                  <span className="w-10 h-10 rounded-2xl bg-[#E6F6F8] text-[#0D8A9E] flex items-center justify-center">
                    <CompetencyIcon name={item.iconName} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2 group-hover:text-[#0D8A9E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed font-body mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-gray-500">
                {item.capabilities.map((cap, idx) => (
                  <span key={cap} className="inline-flex items-center gap-2">
                    <span className="text-[#111827] font-medium">{cap}</span>
                    {idx < item.capabilities.length - 1 && (
                      <span aria-hidden="true" className="text-gray-300">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
