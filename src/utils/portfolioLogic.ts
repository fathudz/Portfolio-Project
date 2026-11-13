import type { ProjectCategory, ProjectItem } from '../data/portfolioData';

export type InquiryTopic =
  | 'Business Analyst / IT PM Role'
  | 'Digital Transformation Consulting'
  | 'International B2B Export Inquiry';

export interface ContactFormData {
  name: string;
  company: string;
  topic: InquiryTopic;
  message: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

export function filterProjects(
  projects: ProjectItem[],
  category: ProjectCategory
): ProjectItem[] {
  if (category === 'all') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

export function countProjectsByCategory(projects: ProjectItem[]): Record<ProjectCategory, number> {
  return {
    all: projects.length,
    digital: projects.filter((p) => p.category === 'digital').length,
    trade: projects.filter((p) => p.category === 'trade').length,
  };
}

export function validateContactForm(data: ContactFormData): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = 'Please include a brief message (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildFormattedInquiry(data: ContactFormData): string {
  const sender = data.name.trim();
  const org = data.company.trim() ? ` (${data.company.trim()})` : '';
  return `Hello Muhammad Fathudzikri,\n\nMy name is ${sender}${org}. I am reaching out regarding: ${data.topic}.\n\n${data.message.trim()}`;
}

export function buildWhatsAppUrl(phoneNumber: string, data: ContactFormData): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const text = encodeURIComponent(buildFormattedInquiry(data));
  return `https://wa.me/${cleanPhone}?text=${text}`;
}

export function buildMailtoUrl(email: string, data: ContactFormData): string {
  const orgSuffix = data.company.trim() ? ` - ${data.company.trim()}` : '';
  const subject = encodeURIComponent(`${data.topic} Inquiry from ${data.name.trim()}${orgSuffix}`);
  const body = encodeURIComponent(buildFormattedInquiry(data));
  return `mailto:${email}?subject=${subject}&body=${body}`;
}
