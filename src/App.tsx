import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import languages from './i18n/languages';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProofSection } from './components/ProofSection';
import { OfferingsSection } from './components/OfferingsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = languages.find((l) => l.code === i18n.language);
    document.documentElement.dir = lang?.dir ?? 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <main>
        <HeroSection />
        <ProofSection />
        <OfferingsSection />
        <ScheduleSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
