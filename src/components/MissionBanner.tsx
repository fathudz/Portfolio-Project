import { ECOSYSTEM_AFFILIATES } from '../data/portfolioData';

export function MissionBanner() {
  return (
    <section
      aria-label="Mission and Ecosystem Affiliations"
      className="bg-[#111827] rounded-3xl sm:rounded-[32px] p-8 sm:p-10 lg:p-12 text-white shadow-xs relative overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl space-y-5">
        <p className="text-[11px] font-mono uppercase tracking-widest text-teal-300">
          Core Directive
        </p>
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug tracking-tight text-white">
          “My mission is to translate complex business goals into scalable digital systems and
          high-value international trade operations.”
        </blockquote>
      </div>

      {/* Ecosystem Affiliations & Strategic Ventures Strip */}
      <div className="relative z-10 mt-10 pt-8 border-t border-white/10">
        <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-4">
          Ecosystem Affiliations &amp; Strategic Ventures
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {ECOSYSTEM_AFFILIATES.map((item) => {
            if (item.url) {
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex flex-col items-center justify-center text-center min-h-[68px]"
                >
                  <span className="font-bold text-xs tracking-wider text-white">{item.name}</span>
                  <span className="text-[10px] text-gray-300 font-mono mt-1">{item.subtitle}</span>
                </a>
              );
            }
            return (
              <a
                key={item.id}
                href={`#${item.targetSectionId || 'works'}`}
                className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex flex-col items-center justify-center text-center min-h-[68px]"
              >
                <span className="font-bold text-xs tracking-wider text-white">{item.name}</span>
                <span className="text-[10px] text-gray-300 font-mono mt-1">{item.subtitle}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
