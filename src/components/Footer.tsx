import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Dumbbell } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-background" />
              </div>
              <span className="text-xl font-display font-bold text-text tracking-tight uppercase">
                {siteContent.brand.name}
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              {siteContent.footer.tagline}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={siteContent.footer.social[0].url}
                className="w-10 h-10 bg-surface border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:border-primary hover:text-background transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteContent.footer.social[1].url}
                className="w-10 h-10 bg-surface border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:border-primary hover:text-background transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteContent.footer.social[2].url}
                className="w-10 h-10 bg-surface border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:border-primary hover:text-background transition-all duration-300"
                aria-label="TikTok"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-bold text-text uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {siteContent.footer.links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Membership Links */}
          <div>
            <h3 className="text-sm font-bold text-text uppercase tracking-wider mb-4">Membership</h3>
            <ul className="space-y-3">
              {siteContent.footer.links.membership.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-text uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${siteContent.footer.contact.phone}`}
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                >
                  {siteContent.footer.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteContent.footer.contact.email}`}
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                >
                  {siteContent.footer.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-text-muted">
                  {siteContent.footer.contact.address}
                </span>
              </li>
            </ul>
            {/* Hours */}
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-xs font-bold text-text uppercase tracking-wider mb-3">Hours</h4>
              <ul className="space-y-2">
                {siteContent.footer.hours.map((hour, index) => (
                  <li key={index} className="text-xs text-text-muted">
                    <span className="text-text">{hour.days}:</span> {hour.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} Raw Power. All rights reserved.
            </p>
            <div className="flex gap-6">
              {siteContent.footer.links.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-xs text-text-muted hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
