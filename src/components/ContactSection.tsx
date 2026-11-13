import { useState, type FormEvent } from 'react';
import { Check, Copy, Mail, MessageCircle, Send } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import {
  buildMailtoUrl,
  buildWhatsAppUrl,
  validateContactForm,
  type ContactFormData,
  type InquiryTopic,
} from '../utils/portfolioLogic';

const TOPICS: InquiryTopic[] = [
  'Business Analyst / IT PM Role',
  'Digital Transformation Consulting',
  'International B2B Export Inquiry',
];

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    topic: 'Business Analyst / IT PM Role',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [prepared, setPrepared] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directWhatsAppUrl = `https://wa.me/${PROFILE_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Muhammad Fathudzikri, I reviewed your portfolio and would like to discuss an opportunity.'
  )}`;
  const directMailtoUrl = `mailto:${PROFILE_INFO.corporateEmail}?subject=${encodeURIComponent(
    'Strategic Opportunity Inquiry - Muhammad Fathudzikri Aulia'
  )}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      setPrepared(false);
      return;
    }
    setErrors({});
    setPrepared(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_INFO.corporateEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  const readyWhatsAppUrl = prepared
    ? buildWhatsAppUrl(PROFILE_INFO.whatsappNumber, formData)
    : directWhatsAppUrl;
  const readyMailtoUrl = prepared
    ? buildMailtoUrl(PROFILE_INFO.corporateEmail, formData)
    : directMailtoUrl;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white rounded-3xl sm:rounded-[32px] p-8 sm:p-12 border border-gray-200/80 shadow-xs"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#0D8A9E]">
            Start a Collaboration
          </p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#111827] text-tight"
          >
            Ready to Build Next-Level Systems Together?
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base font-body max-w-xl mx-auto">
            Whether you are scouting an impactful Business Analyst, an IT Project Manager, or an
            International Trade Partner, let&apos;s start a conversation.
          </p>
        </div>

        {/* High-Contrast Direct Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl border border-gray-200 hover:border-[#111827] bg-[#F8F9FA] hover:bg-white transition-colors flex items-center justify-between gap-4 group"
          >
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-gray-500">
                Instant Communication
              </p>
              <h3 className="text-base font-bold text-[#111827] mt-1 group-hover:text-[#0D8A9E] transition-colors">
                WhatsApp Channel
              </h3>
              <p className="text-xs text-[#4B5563] mt-0.5 tabular-nums">
                {PROFILE_INFO.whatsappDisplay}
              </p>
            </div>
            <span className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-[#111827] group-hover:bg-[#111827] group-hover:text-white transition-colors shrink-0">
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
            </span>
          </a>

          <div className="min-w-0 p-5 sm:p-6 rounded-2xl border border-gray-200 hover:border-[#111827] bg-[#F8F9FA] hover:bg-white transition-colors flex items-center justify-between gap-3 group">
            <a href={directMailtoUrl} className="min-w-0 flex-1">
              <p className="text-[11px] font-mono uppercase tracking-wider text-gray-500">
                Direct Corporate Email
              </p>
              <h3 className="text-sm sm:text-base font-bold text-[#111827] mt-1 group-hover:text-[#0D8A9E] transition-colors truncate">
                {PROFILE_INFO.corporateEmail}
              </h3>
              <p className="text-xs text-[#4B5563] mt-0.5 truncate">
                Personal: {PROFILE_INFO.personalEmail}
              </p>
            </a>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy corporate email address"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#111827] hover:bg-[#111827] hover:text-white transition-colors"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                ) : (
                  <Copy className="w-4 h-4" aria-hidden="true" />
                )}
              </button>
              <a
                href={directMailtoUrl}
                aria-label="Send direct email"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#111827] hover:bg-[#111827] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Pre-filled Inquiry Composer */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-gray-200/80 bg-gradient-to-br from-white via-[#F8FAFF] to-[#EEF2FF]/70 p-6 sm:p-8 space-y-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200/70 pb-4">
            <div>
              <h3 className="text-base font-bold text-[#111827]">Quick Inquiry Composer</h3>
              <p className="text-xs text-[#4B5563]">
                Prepare a structured message and launch directly via WhatsApp or Email.
              </p>
            </div>
            {copiedEmail && (
              <span className="text-xs font-mono text-emerald-700 font-medium">
                Email copied to clipboard
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="inquiry-name" className="block text-xs font-semibold text-[#111827]">
                Your Name <span className="text-rose-600">*</span>
              </label>
              <input
                id="inquiry-name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, name: e.target.value }));
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                placeholder="e.g. Nadia Pratama"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'inquiry-name-error' : undefined}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:border-[#0D8A9E]"
              />
              {errors.name && (
                <p id="inquiry-name-error" className="text-xs text-rose-600 font-medium">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="inquiry-company" className="block text-xs font-semibold text-[#111827]">
                Company / Organization
              </label>
              <input
                id="inquiry-company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                placeholder="Optional"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:border-[#0D8A9E]"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="inquiry-topic" className="block text-xs font-semibold text-[#111827]">
                Inquiry Topic
              </label>
              <select
                id="inquiry-topic"
                value={formData.topic}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, topic: e.target.value as InquiryTopic }))
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-sm text-[#111827] focus:outline-none focus:border-[#0D8A9E]"
              >
                {TOPICS.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="inquiry-message" className="block text-xs font-semibold text-[#111827]">
              Brief Message <span className="text-rose-600">*</span>
            </label>
            <textarea
              id="inquiry-message"
              rows={3}
              value={formData.message}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, message: e.target.value }));
                if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
              }}
              placeholder="Share role scope, project timeline, or export specification details..."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'inquiry-message-error' : undefined}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-300 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:border-[#0D8A9E]"
            />
            {errors.message && (
              <p id="inquiry-message-error" className="text-xs text-rose-600 font-medium">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#0D8A9E] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors min-h-[42px]"
            >
              <Send className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Prepare Inquiry Links</span>
            </button>

            {prepared && (
              <div
                data-testid="prepared-links"
                className="flex flex-wrap items-center gap-2.5"
              >
                <span className="text-xs font-medium text-emerald-700">
                  Ready to send:
                </span>
                <a
                  href={readyWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#0D8A9E] hover:bg-[#086372] text-white px-4 py-2 rounded-full text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Open WhatsApp</span>
                </a>
                <a
                  href={readyMailtoUrl}
                  className="inline-flex items-center gap-1.5 bg-white border border-gray-300 hover:border-[#111827] text-[#111827] px-4 py-2 rounded-full text-xs font-semibold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Open Email Draft</span>
                </a>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
