import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('[data-word]');
      words.forEach((word) => observer.observe(word));
    }

    return () => observer.disconnect();
  }, []);

  const scrollToProof = () => {
    const element = document.getElementById('proof');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 md:inset-y-0 md:left-auto md:right-0 md:w-[45%]">
        <img
          src={siteContent.hero.backgroundImage}
          alt="Raw Power Gym"
          className="w-full h-full object-cover opacity-40 md:opacity-30"
          style={{ mixBlendMode: 'luminosity' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent md:from-background md:via-background/60" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-block mb-8">
            <div className="bg-surface border-2 border-primary px-4 py-2">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">
                {siteContent.hero.badge}
              </span>
            </div>
          </div>

          {/* Headline */}
          <div ref={headlineRef} className="mb-6">
            <h1 className="font-display font-bold text-6xl md:text-8xl tracking-tight leading-none">
              <div
                data-word
                className="text-text opacity-0 translate-y-8 transition-all duration-700 ease-out [&[data-visible='true']]:opacity-100 [&[data-visible='true']]:translate-y-0"
              >
                {siteContent.hero.headline.line1}
              </div>
              <div
                data-word
                className="text-primary opacity-0 translate-y-8 transition-all duration-700 ease-out delay-75 [&[data-visible='true']]:opacity-100 [&[data-visible='true']]:translate-y-0"
              >
                {siteContent.hero.headline.line2}
              </div>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-10 max-w-xl opacity-0 translate-y-4 animate-fade-up-delay">
            {siteContent.hero.subtext}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => {
                const element = document.getElementById('cta');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-4 bg-primary text-background text-base font-bold uppercase tracking-wider hover:bg-accent transition-all duration-300 animate-pulse-subtle"
            >
              {siteContent.hero.cta.primary}
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('schedule');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-4 border-2 border-text text-text text-base font-bold uppercase tracking-wider hover:bg-surface transition-all duration-300"
            >
              {siteContent.hero.cta.secondary}
            </button>
          </div>

          {/* Stats Row */}
          <div className="text-sm text-text-muted tracking-widest uppercase opacity-0 animate-fade-up-delay-2">
            {siteContent.hero.stats}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProof}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};
