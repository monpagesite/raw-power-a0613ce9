import React, { useEffect, useRef } from 'react';
import { Clock, User, Zap } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const ClassCard: React.FC<{
  name: string;
  time: string;
  coach: string;
  intensity: string;
  spots: string;
  description: string;
  delay: number;
}> = ({ name, time, coach, intensity, spots, description, delay }) => {
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

  const getIntensityColor = () => {
    switch (intensity) {
      case 'EXTREME':
        return 'text-secondary';
      case 'HIGH':
        return 'text-primary';
      case 'MODERATE':
        return 'text-accent';
      default:
        return 'text-text-muted';
    }
  };

  const isSoldOut = spots === 'SOLD OUT';

  return (
    <div
      ref={cardRef}
      className={`bg-surface border-2 ${
        isSoldOut ? 'border-border opacity-60' : 'border-border hover:border-primary'
      } p-8 opacity-0 translate-y-8 transition-all duration-700 ease-out [&[data-visible='true']]:opacity-100 [&[data-visible='true']]:translate-y-0`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-display text-2xl text-text mb-2 tracking-tight uppercase">
            {name}
          </h3>
          <div className="flex items-center gap-2 text-text-muted text-sm">
            <Clock className="w-4 h-4" />
            <span className="uppercase tracking-wider">{time}</span>
          </div>
        </div>
        <div className={`px-3 py-1 border ${isSoldOut ? 'border-text-muted' : 'border-primary'}`}>
          <span className={`text-xs font-bold uppercase tracking-wider ${isSoldOut ? 'text-text-muted' : 'text-primary'}`}>
            {spots}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-text-muted mb-6 leading-relaxed">{description}</p>

      {/* Meta Info */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-accent" />
          <span className="text-sm text-text">{coach}</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className={`w-4 h-4 ${getIntensityColor()}`} />
          <span className={`text-sm ${getIntensityColor()} font-bold uppercase tracking-wider`}>
            {intensity}
          </span>
        </div>
      </div>

      {/* CTA */}
      <button
        disabled={isSoldOut}
        className={`w-full py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
          isSoldOut
            ? 'bg-border text-text-muted cursor-not-allowed'
            : 'bg-primary text-background hover:bg-accent'
        }`}
      >
        {isSoldOut ? 'FULLY BOOKED' : 'BOOK THIS CLASS'}
      </button>
    </div>
  );
};

export const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="font-display font-bold text-4xl md:text-6xl text-text text-center tracking-tight mb-16 uppercase">
          {siteContent.schedule.heading}
        </h2>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.schedule.classes.map((classItem, index) => (
            <ClassCard key={index} {...classItem} delay={index * 100} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-text-muted">
            Can't find a time that works? We offer{' '}
            <span className="text-primary font-bold">24/7 open gym access</span> to all members.
          </p>
        </div>
      </div>
    </section>
  );
};
