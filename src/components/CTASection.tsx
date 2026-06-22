import React from 'react';
import { CheckCircle } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const CTASection: React.FC = () => {
  return (
    <section id="cta" className="py-16 md:py-24 bg-surface relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <h2 className="font-display font-bold text-4xl md:text-6xl text-text tracking-tight mb-6 uppercase">
          {siteContent.ctaBanner.heading}
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-10 max-w-2xl mx-auto">
          {siteContent.ctaBanner.subtext}
        </p>

        {/* CTA Button */}
        <button className="px-12 py-5 bg-primary text-background text-base font-bold uppercase tracking-wider hover:bg-accent transition-all duration-300 hover:scale-105 mb-6 animate-pulse-subtle">
          {siteContent.ctaBanner.buttonText}
        </button>

        {/* Note */}
        <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
          <CheckCircle className="w-4 h-4 text-primary" />
          <span>{siteContent.ctaBanner.note}</span>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-12 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold font-display text-primary mb-2">500+</div>
              <div className="text-sm text-text-muted uppercase tracking-wider">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-display text-accent mb-2">24/7</div>
              <div className="text-sm text-text-muted uppercase tracking-wider">Facility Access</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-display text-secondary mb-2">95%</div>
              <div className="text-sm text-text-muted uppercase tracking-wider">Member Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
