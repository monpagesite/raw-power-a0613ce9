import React, { useEffect, useRef } from 'react';
import { Dumbbell, Users, Target, Check } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const OfferingCard: React.FC<{
  id: string;
  title: string;
  description: string;
  benefits: string[];
  cta: string;
  icon: React.ReactNode;
  variant: 'primary' | 'gradient' | 'full';
  gridClass: string;
}> = ({ title, description, benefits, cta, icon, variant, gridClass }) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getBackgroundClass = () => {
    if (variant === 'primary') return 'bg-background border-2 border-primary';
    if (variant === 'gradient') return 'bg-gradient-to-br from-surface to-[#2A2A2A] border-2 border-border';
    return 'bg-surface border-2 border-border';
  };

  return (
    <div
      ref={cardRef}
      className={`${gridClass} ${getBackgroundClass()} p-10 opacity-0 translate-y-8 transition-all duration-700 ease-out hover:scale-[1.02] hover:border-primary [&[data-visible='true']]:opacity-100 [&[data-visible='true']]:translate-y-0`}
    >
      <div className="text-primary mb-6">{icon}</div>
      <h3 className="font-display text-3xl text-text mb-4 tracking-tight uppercase">
        {title}
      </h3>
      <p className="text-base text-text-muted mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3 mb-8">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-text">{benefit}</span>
          </li>
        ))}
      </ul>
      <button className="text-primary text-sm uppercase tracking-wider font-bold hover:text-accent transition-colors group">
        {cta}
      </button>
    </div>
  );
};

export const OfferingsSection: React.FC = () => {
  return (
    <section id="offerings" className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="font-display font-bold text-4xl md:text-6xl text-text text-center tracking-tight mb-16">
          <span className="block">{siteContent.offerings.heading.line1}</span>
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {siteContent.offerings.heading.line2}
          </span>
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <OfferingCard
            id={siteContent.offerings.cards[0].id}
            title={siteContent.offerings.cards[0].title}
            description={siteContent.offerings.cards[0].description}
            benefits={siteContent.offerings.cards[0].benefits}
            cta={siteContent.offerings.cards[0].cta}
            icon={<Dumbbell className="w-12 h-12" />}
            variant="primary"
            gridClass="md:col-span-5"
          />
          <OfferingCard
            id={siteContent.offerings.cards[1].id}
            title={siteContent.offerings.cards[1].title}
            description={siteContent.offerings.cards[1].description}
            benefits={siteContent.offerings.cards[1].benefits}
            cta={siteContent.offerings.cards[1].cta}
            icon={<Users className="w-12 h-12" />}
            variant="gradient"
            gridClass="md:col-span-7"
          />
          <OfferingCard
            id={siteContent.offerings.cards[2].id}
            title={siteContent.offerings.cards[2].title}
            description={siteContent.offerings.cards[2].description}
            benefits={siteContent.offerings.cards[2].benefits}
            cta={siteContent.offerings.cards[2].cta}
            icon={<Target className="w-12 h-12" />}
            variant="full"
            gridClass="md:col-span-12"
          />
        </div>
      </div>
    </section>
  );
};
