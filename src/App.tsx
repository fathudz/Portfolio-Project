import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MissionBanner } from './components/MissionBanner';
import { CompetenciesSection } from './components/CompetenciesSection';
import { WorksSection } from './components/WorksSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#111827]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        <HeroSection />
        <MissionBanner />
        <CompetenciesSection />
        <WorksSection />
        <ExperienceSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}
