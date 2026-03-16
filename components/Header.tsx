"use client";

import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-linen text-charcoal sticky top-0 z-50 border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="font-serif text-3xl tracking-widest uppercase flex flex-col">
              Dekker
              <span className="font-sans text-[0.6rem] tracking-[0.3em] text-stone mt-1">Homes & Renovations Inc</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone hover:text-bronze transition-colors font-sans text-xs uppercase tracking-[0.15em]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+15551234567"
              className="flex items-center gap-3 bg-charcoal hover:bg-bronze text-linen px-6 py-3 rounded-none font-sans text-xs uppercase tracking-widest transition-colors"
            >
              <Phone size={14} />
              <span>(555) 123-4567</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-charcoal hover:text-bronze focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-linen border-t border-charcoal/10 absolute w-full">
          <div className="px-4 pt-4 pb-8 space-y-2 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-4 text-sm font-sans uppercase tracking-[0.15em] text-charcoal hover:text-bronze border-b border-charcoal/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center gap-3 bg-charcoal hover:bg-bronze text-linen px-4 py-4 rounded-none font-sans text-xs uppercase tracking-widest mt-6 transition-colors"
            >
              <Phone size={14} />
              <span>Call Now: (555) 123-4567</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
