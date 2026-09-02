import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'TREATMENTS', href: '#treatments' },
    { name: 'RITUALS', href: '#rituals' },
    { name: 'MOOD', href: '#mood' },
    { name: 'SANCTUARY', href: '#sanctuary' },
    { name: 'PRIVILEGE', href: '#privilege' },
    { name: 'LOCATION', href: '#location' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#C8A96B]/30 py-3 shadow-md'
          : 'bg-gradient-to-b from-white/95 via-white/70 to-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <a
          href="#hero"
          className="group flex items-center space-x-3 text-left focus:outline-none shrink-0"
        >
          <div className="w-9 h-9 rounded-full border border-[#C8A96B] flex items-center justify-center bg-[#0B0B0B] group-hover:border-[#9B7E44] transition-all duration-300 shadow-md shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 100 100" fill="none">
              <defs>
                <linearGradient id="navLogoGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#FFFFFF" />
                  <stop offset="40%" stop-color="#FFF4CC" />
                  <stop offset="75%" stop-color="#FBE8A6" />
                  <stop offset="100%" stop-color="#F4D06F" />
                </linearGradient>
              </defs>
              <g fill="url(#navLogoGold)">
                <path d="M50 20 C50 20 38 38 38 52 C38 60 43 68 50 68 C57 68 62 60 62 52 C62 38 50 20 50 20 Z" />
                <path d="M48 66 C35 66 22 55 24 40 C28 48 36 56 46 62 Z" opacity="0.9" />
                <path d="M52 66 C65 66 78 55 76 40 C72 48 64 56 54 62 Z" opacity="0.9" />
                <path d="M30 72 C40 78 60 78 70 72 C62 76 38 76 30 72 Z" />
                <circle cx="50" cy="14" r="3" />
              </g>
            </svg>
          </div>
          <div className="flex items-center space-x-2 whitespace-nowrap">
            <span className="font-serif text-sm sm:text-base font-bold tracking-wider text-[#0B0B0B] uppercase leading-none group-hover:text-[#9B7E44] transition-colors">
              THE ROYAL
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] text-[#9B7E44] uppercase font-bold leading-none">
              MASSAGE SPA
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-xs uppercase tracking-[0.2em] text-[#151515] hover:text-[#9B7E44] font-semibold transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#9B7E44] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Premium CTA Button & Mobile Trigger with added left margin */}
        <div className="flex items-center space-x-4 ml-6 lg:ml-10 xl:ml-12 shrink-0">
          <button
            onClick={() => onOpenBooking()}
            data-cursor="book"
            className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-none border border-[#0B0B0B] bg-[#0B0B0B] hover:bg-[#9B7E44] text-[#FFFFFF] font-sans text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FBE8A6]" />
            <span>BOOK YOUR RITUAL</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="lg:hidden p-2 text-[#0B0B0B] hover:text-[#9B7E44] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#0B0B0B]" /> : <Menu className="w-6 h-6 text-[#0B0B0B]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-[#C8A96B]/30 px-6 pt-6 pb-8 transition-all shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-lg tracking-wider text-[#0B0B0B] hover:text-[#9B7E44] font-semibold transition-colors py-2 border-b border-[#E5E5E5]"
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Reservation CTA */}
            <div className="pt-6 mt-3 border-t border-[#C8A96B]/30">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center space-x-2 py-3.5 bg-[#0B0B0B] hover:bg-[#9B7E44] text-[#FFFFFF] font-sans text-xs uppercase tracking-widest font-bold shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4 text-[#FBE8A6]" />
                <span>RESERVE SANCTUARY RITUAL</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
