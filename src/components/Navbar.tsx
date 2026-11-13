import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { href: '#hero', label: 'About' },
  { href: '#competencies', label: 'Competencies' },
  { href: '#works', label: 'Selected Works' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappDirectUrl = `https://wa.me/${PROFILE_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Muhammad Fathudzikri, I reviewed your portfolio and would like to discuss an opportunity.'
  )}`;

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-200">
      <div className="max-w-7xl mx-auto">
        <nav
          aria-label="Primary Navigation"
          className={`bg-white/85 backdrop-blur-md border border-gray-200/80 rounded-full px-4 sm:px-6 flex items-center justify-between gap-4 lg:gap-8 transition-all duration-200 ${
            scrolled ? 'py-2.5 shadow-md' : 'py-3 shadow-sm'
          }`}
        >
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D8A9E] rounded-full"
          >
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-xs sm:text-sm tracking-wider transition-transform duration-200 group-hover:scale-105">
              {PROFILE_INFO.monogram}
            </span>
            <span className="font-extrabold text-sm tracking-wider text-[#111827] group-hover:text-[#0D8A9E] transition-colors">
              {PROFILE_INFO.shortBrand}
            </span>
          </a>

          {/* Zone 2: Single-line Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-xs lg:text-sm font-semibold text-[#4B5563] hover:text-[#111827] hover:bg-gray-100/80 rounded-full transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D8A9E]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Zone 3: Primary CTA + Mobile Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#111827] hover:bg-[#0D8A9E] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D8A9E]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-[#111827] hover:bg-gray-200 transition-colors focus-visible:outline-2 focus-visible:outline-[#0D8A9E]"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Menu className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="md:hidden mt-2 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-3xl p-4 shadow-lg flex flex-col gap-1.5"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-2xl font-semibold text-sm text-[#111827] hover:bg-gray-100 transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-gray-100">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex justify-center items-center gap-2 bg-[#0D8A9E] hover:bg-[#086372] text-white py-3 px-4 rounded-full font-semibold text-sm min-h-[44px] transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
