import React from 'react';
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

function SocialLink({ icon, href }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-500 hover:border-gold-500 transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-white/40 hover:text-gold-500 transition-colors text-sm font-light"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-luxury-990 border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 blur-[120px] -z-10" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <Logo variant="footer" className="items-start mb-8" />
            <p className="text-white/40 max-w-sm text-sm leading-relaxed font-light mb-8">
              The premier real estate advisory for the Indian elite. Securing legacies and creating generational wealth in Dubai's most coveted destinations.
            </p>
            <div className="flex space-x-5">
              <SocialLink icon={<Instagram size={20} />} href="#" />
              <SocialLink icon={<Linkedin size={20} />} href="#" />
              <SocialLink icon={<Facebook size={20} />} href="#" />
            </div>
          </div>

          <div>
            <h4 className="text-gold-500 uppercase tracking-[0.3em] text-xs mb-8 font-bold">
              The Portfolio
            </h4>
            <ul className="space-y-4">
              <li><FooterLink href="/properties">Palm Jumeirah</FooterLink></li>
              <li><FooterLink href="/properties">Downtown Dubai</FooterLink></li>
              <li><FooterLink href="/properties">Emirates Hills</FooterLink></li>
              <li><FooterLink href="/properties">Dubai Marina</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 uppercase tracking-[0.3em] text-xs mb-8 font-bold">
              Connect
            </h4>
            <ul className="space-y-6">
              <li className="flex items-center space-x-3 text-white/50 text-sm">
                <Mail size={16} className="text-gold-500" />
                <a href="mailto:invest@raajikaproperties.com" className="hover:text-gold-500 transition-colors">
                  invest@raajikaproperties.com
                </a>
              </li>
              <li className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3 text-white/50 text-sm">
                  <Phone size={16} className="text-gold-500" />
                  <a href="tel:+919704261646" className="hover:text-gold-500 transition-colors">
                    +91 97042 61646
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/50 text-sm">
                  <Phone size={16} className="text-gold-500" />
                  <a href="tel:+917075575249" className="hover:text-gold-500 transition-colors">
                    +91 70755 75249
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-white/50 text-sm">
                <MapPin size={16} className="text-gold-500 mt-1" />
                <span>
                  Level 15, The Gate, <br /> DIFC, Dubai, UAE
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 uppercase tracking-[0.3em] text-xs mb-8 font-bold">
              Insights
            </h4>
            <p className="text-white/40 text-xs font-light mb-6">
              Subscribe to our private newsletter for off-market inventory and market reports.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Private Email"
                className="bg-white/5 border-b border-white/10 py-2 text-white text-xs focus:outline-none focus:border-gold-500 w-full"
              />
              <button className="text-gold-500 ml-4 hover:scale-110 transition-transform font-bold text-xs uppercase tracking-widest">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase text-white/30">
          <p>© {new Date().getFullYear()} Raajika Properties. Securing Legacies.</p>
          <div className="flex space-x-8 mt-6 md:mt-0 font-medium">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
