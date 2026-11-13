import { ArrowUpRight, CheckCircle2, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';
import { HERO_METRICS, PROFILE_INFO } from '../data/portfolioData';
import { SafeImage } from './SafeImage';

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${PROFILE_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Muhammad Fathudzikri, I would like to connect regarding an opportunity.'
  )}`;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
    >
      {/* Left Column: Executive Value Proposition */}
      <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 lg:p-12 border border-gray-200/80 shadow-xs flex flex-col justify-between">
        <div className="space-y-6">
          {/* Availability Indicator */}
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wide text-[#0D8A9E]">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="uppercase font-semibold">{PROFILE_INFO.availability}</span>
          </div>

          {/* Editorial Headline */}
          <div className="space-y-3">
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-[1.14] text-tight"
            >
              {PROFILE_INFO.headlineLead}{' '}
              <span className="underline decoration-gray-300 underline-offset-4 text-[#0D8A9E]">
                {PROFILE_INFO.headlineAccent}
              </span>{' '}
              {PROFILE_INFO.headlineEnd}
            </h1>
            <p className="text-base sm:text-lg font-medium text-[#4B5563]">
              {PROFILE_INFO.rolesLine}
            </p>
          </div>

          {/* Executive Summary */}
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed max-w-2xl font-body">
            Information Technology graduate (Digital Transformation) from{' '}
            <strong className="text-[#111827] font-semibold">IIUM</strong>. Bridging high-stakes
            enterprise systems architecture (PRD, SRS, UML, ERD) at national trade platform{' '}
            <strong className="text-[#111827] font-semibold">ASPENKU</strong> with ground-truth
            international B2B export operations at{' '}
            <strong className="text-[#111827] font-semibold">CV Nusagri</strong>.
          </p>

          {/* Metrics Strip */}
          <div className="grid grid-cols-3 gap-4 pt-5 border-t border-gray-100">
            {HERO_METRICS.map((metric, index) => (
              <div
                key={metric.label}
                className={index > 0 ? 'border-l border-gray-100 pl-4' : ''}
              >
                <span className="block text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight tabular-nums">
                  {metric.value}
                  {metric.suffix && <span className="text-[#0D8A9E]">{metric.suffix}</span>}
                </span>
                <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Primary & Secondary CTAs */}
        <div className="pt-8 mt-8 border-t border-gray-100 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#0D8A9E] text-white px-6 py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
          </a>
          <a
            href={PROFILE_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-400 bg-white text-[#111827] px-5 py-3 rounded-full font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
          >
            <Linkedin className="w-4 h-4 text-[#111827]" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${PROFILE_INFO.corporateEmail}`}
            className="inline-flex items-center gap-2 text-[#4B5563] hover:text-[#111827] px-4 py-3 rounded-full font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>Email Inquiries</span>
          </a>
        </div>
      </div>

      {/* Right Column: Profile Showcase Card */}
      <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-gray-200/80 shadow-xs flex flex-col justify-between">
        <div className="space-y-4">
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
            <SafeImage
              src={PROFILE_INFO.portraitUrl}
              alt={`${PROFILE_INFO.fullName} portrait`}
              objectPosition="center 18%"
              loading="eager"
              fallbackTitle={PROFILE_INFO.fullName}
              fallbackSubtitle={PROFILE_INFO.degreeLine}
            />

            <div className="absolute top-3 left-3 bg-white/92 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200/70 shadow-xs flex items-center gap-1.5 text-xs text-[#111827] font-medium">
              <MapPin className="w-3 h-3 text-[#4B5563]" aria-hidden="true" />
              <span>{PROFILE_INFO.location}</span>
            </div>
          </div>

          <div className="px-1 flex items-center justify-between gap-3">
            <div>
              <p className="font-bold text-[#111827] text-sm sm:text-base">
                {PROFILE_INFO.fullName}
              </p>
              <p className="text-xs text-gray-500 font-body">{PROFILE_INFO.degreeLine}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={PROFILE_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Muhammad Fathudzikri Aulia on LinkedIn"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#111827] hover:bg-gray-100 transition-colors"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Muhammad Fathudzikri Aulia on WhatsApp"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#111827] hover:bg-gray-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-3 mt-3 border-t border-gray-100 text-[11px] font-mono text-gray-500 flex items-center justify-between gap-2">
          <span>BUSINESS DEVELOPMENT</span>
          <span>VERIFIED CREDENTIALS</span>
        </div>
      </div>
    </section>
  );
}
