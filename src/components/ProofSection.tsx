import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const StatCard: React.FC<{
  number: string;
  unit: string;
  label: string;
  color: 'green' | 'cyan' | 'red';
}> = ({ number, unit, label, color }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const colorClasses = {
    green: 'text-primary',
    cyan: 'text-accent',
    red: 'text-secondary',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const target = parseInt(number.replace(/,/g, ''));
            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [number, hasAnimated]);

  return (
    <div
      ref={cardRef}
      className="bg-surface border-2 border-border p-8 text-center hover:border-primary transition-all duration-300"
    >
      <div className={`text-5xl font-bold font-display ${colorClasses[color]} mb-2`}>
        {count.toLocaleString()}
        {unit}
      </div>
      <div className="text-sm text-text-muted uppercase tracking-widest">{label}</div>
    </div>
  );
};

const TransformationCard: React.FC<{
  name: string;
  result: string;
  imageUrl: string;
  delay: number;
}> = ({ name, result, imageUrl, delay }) => {
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

  return (
    <div
      ref={cardRef}
      className="group cursor-pointer opacity-0 translate-y-8 transition-all duration-700 ease-out [&[data-visible='true']]:opacity-100 [&[data-visible='true']]:translate-y-0"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden bg-surface aspect-[3/4] mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>
      <h3 className="text-xl font-bold text-text mb-1">{name}</h3>
      <p className="text-sm text-primary uppercase tracking-wide">{result}</p>
    </div>
  );
};

const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  meta: string;
}> = ({ quote, name, meta }) => (
  <div className="w-[280px] flex-shrink-0 bg-surface p-6 border-2 border-border">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-sm text-text leading-relaxed italic mb-4">&ldquo;{quote}&rdquo;</p>
    <div className="border-t border-border pt-4">
      <p className="text-sm font-bold text-text">{name}</p>
      <p className="text-xs text-text-muted">{meta}</p>
    </div>
  </div>
);

export const ProofSection: React.FC = () => {
  return (
    <section id="proof" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Stats Counter Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {siteContent.proof.statsCards.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Transformation Grid */}
        <div className="mb-20">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-text text-center tracking-tight mb-12">
            {siteContent.proof.heading.line1}
            <br />
            {siteContent.proof.heading.line2}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteContent.proof.transformations.map((transformation, index) => (
              <TransformationCard key={index} {...transformation} delay={index * 100} />
            ))}
          </div>
        </div>

        {/* Testimonial Marquee */}
        <div className="relative overflow-hidden">
          {/* Row 1 - Scroll Left */}
          <div className="flex gap-6 mb-6 animate-scroll-left">
            {[...siteContent.proof.testimonials, ...siteContent.proof.testimonials].map(
              (testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} {...testimonial} />
              )
            )}
          </div>
          {/* Row 2 - Scroll Right */}
          <div className="flex gap-6 animate-scroll-right">
            {[...siteContent.proof.testimonials.slice().reverse(), ...siteContent.proof.testimonials.slice().reverse()].map(
              (testimonial, index) => (
                <TestimonialCard key={`row2-${index}`} {...testimonial} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
