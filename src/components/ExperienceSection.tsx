import {
  Award,
  BarChart3,
  Briefcase,
  ChevronRight,
  Code2,
  Figma,
  GitBranch,
  GraduationCap,
  Kanban,
  Languages,
  Layers,
} from 'lucide-react';
import {
  EDUCATION_INFO,
  TECHNICAL_TOOLKIT,
  TRAINING_PROGRAMS,
  WORK_EXPERIENCE,
  type ToolkitItem,
} from '../data/portfolioData';

function ToolkitIcon({ iconKey }: { iconKey: ToolkitItem['iconKey'] }) {
  switch (iconKey) {
    case 'figma':
      return <Figma className="w-5 h-5 text-purple-600" aria-hidden="true" />;
    case 'jira':
      return <Kanban className="w-5 h-5 text-blue-600" aria-hidden="true" />;
    case 'analytics':
      return <BarChart3 className="w-5 h-5 text-amber-600" aria-hidden="true" />;
    case 'diagram':
      return <GitBranch className="w-5 h-5 text-[#0D8A9E]" aria-hidden="true" />;
    case 'code':
      return <Code2 className="w-5 h-5 text-sky-600" aria-hidden="true" />;
    case 'language':
      return <Languages className="w-5 h-5 text-emerald-600" aria-hidden="true" />;
  }
}

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="space-y-6 pt-2">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#0D8A9E]">
            Professional Trajectory
          </p>
          <h2
            id="experience-heading"
            className="text-3xl font-extrabold text-[#111827] text-tight mt-1"
          >
            Wanna See My Experience?
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#4B5563] max-w-md font-body">
          Continuous execution blending academic excellence in Digital Transformation with
          high-stakes commercial stewardship.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Career Experience Timeline */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-gray-200/80 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h3 className="text-lg font-bold text-[#111827] flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#0D8A9E]" aria-hidden="true" />
              <span>Career Experience</span>
            </h3>
            <span className="text-xs font-mono text-gray-500 uppercase">Verified History</span>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-y-2 before:left-3.5 before:w-px before:bg-gray-200">
            {WORK_EXPERIENCE.map((exp) => (
              <div key={exp.id} className="relative pl-9 space-y-2">
                <div
                  className={`absolute left-1.5 top-1.5 w-4 h-4 rounded-full border-4 border-white shadow-xs ${
                    exp.isCurrent ? 'bg-[#0D8A9E]' : 'bg-gray-400'
                  }`}
                />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-base font-extrabold text-[#111827]">{exp.role}</h4>
                  <span
                    className={`text-xs font-mono font-semibold ${
                      exp.isCurrent ? 'text-[#0D8A9E]' : 'text-gray-500'
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs font-semibold text-gray-500">
                  {exp.company} · {exp.location}
                </p>
                <ul className="text-xs sm:text-[13px] text-[#4B5563] space-y-2 font-body pt-1">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-1.5">
                      <ChevronRight
                        className="w-3.5 h-3.5 text-[#0D8A9E] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Education & Training */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Education Card */}
          <div className="bg-white rounded-3xl p-7 border border-gray-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 border-b border-gray-100 pb-3">
              <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4" aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold text-[#111827]">Education</h3>
            </div>

            <div className="space-y-1.5">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0D8A9E]">
                {EDUCATION_INFO.degreeType}
              </p>
              <h4 className="text-base font-extrabold text-[#111827]">
                {EDUCATION_INFO.institution}
              </h4>
              <p className="text-xs font-semibold text-[#4B5563]">
                {EDUCATION_INFO.degreeTitle}
              </p>
              <p className="text-xs text-gray-500 font-body">
                Major: <span className="font-bold text-[#111827]">{EDUCATION_INFO.major}</span>
              </p>
              <p className="text-xs text-gray-500 font-body pt-1 leading-relaxed">
                {EDUCATION_INFO.description}
              </p>
            </div>
          </div>

          {/* Professional Development & Training Card */}
          <div className="bg-white rounded-3xl p-7 border border-gray-200/80 shadow-xs space-y-3 flex-1">
            <div className="flex items-center gap-2.5 border-b border-gray-100 pb-3">
              <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold text-[#111827]">
                Professional Development &amp; Training
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {TRAINING_PROGRAMS.map((program) => (
                <div
                  key={program.provider}
                  className="p-3 bg-[#F8F9FA] rounded-xl border border-gray-100"
                >
                  <p className="text-xs font-bold text-[#111827]">{program.provider}</p>
                  <p className="text-[11px] text-[#4B5563] mt-0.5">{program.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technical Toolkit & Methodology Arsenal */}
      <div className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/80 shadow-xs">
        <h3 className="text-base font-bold text-[#111827] mb-4 flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#0D8A9E]" aria-hidden="true" />
          <span>Technical Toolkit &amp; Methodology Arsenal</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {TECHNICAL_TOOLKIT.map((tool) => (
            <div
              key={tool.id}
              className="bg-[#F8F9FA] p-3.5 rounded-2xl border border-gray-100 flex items-center gap-3"
            >
              <div className="shrink-0">
                <ToolkitIcon iconKey={tool.iconKey} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-[#111827] truncate">{tool.name}</p>
                <p className="text-[11px] text-gray-500 truncate">{tool.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
