import React, { useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { FeaturedVideoSection } from '../components/FeaturedVideoSection';
import { PhilosophySection } from '../components/PhilosophySection';
import { ServicesSection } from '../components/ServicesSection';
import { EducationSection } from '../components/EducationSection';
import { FooterSection } from '../components/FooterSection';
import { CurriculumVitaeModal, ContactModal } from '../components/Modals';

export const IndexPage: React.FC = () => {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      {/* SECTION 1: HERO */}
      <HeroSection
        onOpenCV={() => setCvModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* SECTION 2: ABOUT / REZUMAT */}
      <AboutSection />

      {/* SECTION 3: FEATURED VIDEO / ABORDARE TEHNICĂ */}
      <FeaturedVideoSection
        onExploreMore={() => {
          const el = document.getElementById('experience');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* SECTION 4: INNOVATION X VISION / EXPERIENȚĂ CARIERĂ */}
      <PhilosophySection />

      {/* SECTION 5: SERVICII & CE OFER */}
      <ServicesSection
        onSelectService={() => setContactModalOpen(true)}
      />

      {/* SECTION 6: STUDII & EDUCAȚIE */}
      <EducationSection />

      {/* FOOTER */}
      <FooterSection />

      {/* Interactive Modals */}
      <CurriculumVitaeModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
};

export default IndexPage;
