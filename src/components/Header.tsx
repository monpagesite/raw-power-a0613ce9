import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-background" />
            </div>
            <span className="text-xl font-display font-bold text-text tracking-tight uppercase">
              {siteContent.brand.name}
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('offerings')}
              className="text-sm text-text-muted hover:text-primary transition-colors uppercase tracking-wider"
            >
              Memberships
            </button>
            <button
              onClick={() => scrollToSection('schedule')}
              className="text-sm text-text-muted hover:text-primary transition-colors uppercase tracking-wider"
            >
              Classes
            </button>
            <button
              onClick={() => scrollToSection('proof')}
              className="text-sm text-text-muted hover:text-primary transition-colors uppercase tracking-wider"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="px-6 py-2.5 bg-primary text-background text-sm font-bold uppercase tracking-wider hover:bg-accent transition-colors"
            >
              Free Trial
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-text"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface border-t border-border">
          <nav className="flex flex-col px-6 py-6 gap-4">
            <button
              onClick={() => scrollToSection('offerings')}
              className="text-left text-base text-text-muted hover:text-primary transition-colors uppercase tracking-wider py-2"
            >
              Memberships
            </button>
            <button
              onClick={() => scrollToSection('schedule')}
              className="text-left text-base text-text-muted hover:text-primary transition-colors uppercase tracking-wider py-2"
            >
              Classes
            </button>
            <button
              onClick={() => scrollToSection('proof')}
              className="text-left text-base text-text-muted hover:text-primary transition-colors uppercase tracking-wider py-2"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="mt-2 px-6 py-3 bg-primary text-background text-sm font-bold uppercase tracking-wider hover:bg-accent transition-colors text-center"
            >
              Free Trial
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
