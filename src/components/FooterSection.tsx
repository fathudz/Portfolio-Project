import { Boxes, Gem, Instagram, Leaf, Linkedin, MessageCircle } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

export function FooterSection() {
  return (
    <footer className="bg-white rounded-3xl sm:rounded-[32px] p-8 sm:p-12 border border-gray-200/80 shadow-xs space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Editorial Typography */}
        <div className="lg:col-span-6 space-y-4">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#0D8A9E]">
            Available Worldwide · Remote &amp; Hybrid
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] text-tight leading-tight">
            Let&apos;s connect and chat.
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563] font-body max-w-md leading-relaxed">
            Open for Business Analyst, IT Project Manager, Product Manager, and Digital
            Transformation positions, as well as global B2B trade partnerships.
          </p>
          <div className="pt-1">
            <a
              href={`mailto:${PROFILE_INFO.corporateEmail}`}
              className="text-base sm:text-xl font-extrabold text-[#111827] hover:text-[#0D8A9E] transition-colors underline decoration-2 underline-offset-4 break-all"
            >
              {PROFILE_INFO.corporateEmail}
            </a>
          </div>
        </div>

        {/* Right Teal Ecosystem Directory Card */}
        <div className="lg:col-span-6 bg-[#0D8A9E] rounded-3xl p-6 sm:p-8 text-white space-y-4 shadow-sm">
          <p className="text-xs uppercase font-mono font-bold tracking-wider text-teal-100">
            Interactive Ecosystem Directory
          </p>

          <div className="flex flex-wrap gap-2.5">
            <a
              href={PROFILE_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-white text-[#111827] text-xs font-bold hover:bg-[#111827] hover:text-white transition-colors shadow-xs inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
              <span>LINKEDIN</span>
            </a>

            <a
              href={`https://wa.me/${PROFILE_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-white text-[#111827] text-xs font-bold hover:bg-emerald-700 hover:text-white transition-colors shadow-xs inline-flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
              <span>WHATSAPP</span>
            </a>

            <a
              href={PROFILE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-white text-[#111827] text-xs font-bold hover:bg-pink-700 hover:text-white transition-colors shadow-xs inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-600" aria-hidden="true" />
              <span>INSTAGRAM</span>
            </a>

            <a
              href="https://www.cv.nusagri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#111827] border border-white/30 text-xs font-bold transition-colors inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Leaf className="w-3.5 h-3.5" aria-hidden="true" />
              <span>CV. NUSAGRI</span>
            </a>

            <a
              href="https://www.sukabumigreenstone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#111827] border border-white/30 text-xs font-bold transition-colors inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Gem className="w-3.5 h-3.5" aria-hidden="true" />
              <span>SUKABUMI GREENSTONE</span>
            </a>

            <a
              href="https://www.stonehubindonesia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#111827] border border-white/30 text-xs font-bold transition-colors inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Boxes className="w-3.5 h-3.5" aria-hidden="true" />
              <span>STONE HUB ID</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright & Bottom Bar */}
      <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4B5563]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#111827] text-white text-[10px] font-bold flex items-center justify-center">
            {PROFILE_INFO.monogram}
          </div>
          <span>&copy; 2025 {PROFILE_INFO.fullName}. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-gray-500">
          <span>Business Analysis &amp; IT PM</span>
          <span aria-hidden="true">·</span>
          <span>Digital Transformation &amp; Global Trade</span>
        </div>
      </div>
    </footer>
  );
}
