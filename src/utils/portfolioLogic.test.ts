import test from 'node:test';
import assert from 'node:assert/strict';
import { PROJECTS } from '../data/portfolioData';
import {
  buildMailtoUrl,
  buildWhatsAppUrl,
  countProjectsByCategory,
  filterProjects,
  validateContactForm,
} from './portfolioLogic';

test('filterProjects returns all projects for "all" category', () => {
  const result = filterProjects(PROJECTS, 'all');
  assert.equal(result.length, 4);
});

test('filterProjects separates digital and trade ventures accurately', () => {
  const digital = filterProjects(PROJECTS, 'digital');
  const trade = filterProjects(PROJECTS, 'trade');
  assert.equal(digital.length, 1);
  assert.equal(digital[0].id, 'aspenku');
  assert.equal(trade.length, 3);
});

test('countProjectsByCategory matches project totals', () => {
  const counts = countProjectsByCategory(PROJECTS);
  assert.equal(counts.all, 4);
  assert.equal(counts.digital, 1);
  assert.equal(counts.trade, 3);
});

test('validateContactForm rejects empty or short fields', () => {
  const invalid = validateContactForm({
    name: 'A',
    company: '',
    topic: 'Business Analyst / IT PM Role',
    message: 'Hi',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.message);
});

test('validateContactForm accepts valid input and generates WhatsApp & Mailto URLs', () => {
  const validInput = {
    name: 'Nadia Pratama',
    company: 'Mandiri Digital',
    topic: 'Business Analyst / IT PM Role' as const,
    message: 'We would love to schedule an interview for a Lead Business Analyst position.',
  };
  const result = validateContactForm(validInput);
  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, {});

  const waUrl = buildWhatsAppUrl('+62 815 1368 7278', validInput);
  assert.ok(waUrl.startsWith('https://wa.me/6281513687278?text='));
  assert.ok(waUrl.includes('Nadia%20Pratama'));
  assert.ok(waUrl.includes('Mandiri%20Digital'));

  const mailUrl = buildMailtoUrl('export@sukabumigreenstone.com', validInput);
  assert.ok(mailUrl.startsWith('mailto:export@sukabumigreenstone.com?subject='));
  assert.ok(mailUrl.includes('Business%20Analyst'));
});
