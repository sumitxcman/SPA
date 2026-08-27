import React, { useState, useEffect } from 'react';
import { Menu, X, Crown, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (preselectedTreatment?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Rituals', href: '#rituals' },
    { name: 'Mood', href: '#mood' },
    { name: 'Sanctuary', href: '#sanctuary' },
    { name: 'Privilege', href: '#privilege' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0B0B0B]/85 backdrop-blur-md border-b border-[#C8A96B]/25 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0B0B0B]/80 via-[#0B0B0B]/30 to-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <a
          href="#hero"
          className="group flex items-center space-x-3 text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full border border-[#C8A96B]/60 flex items-center justify-center bg-[#151515] group-hover:border-[#C8A96B] transition-colors duration-300">
            <Crown className="w-4 h-4 text-[#C8A96B]" />
          </div>
          <div>
            <span className="block font-serif text-sm md:text-base font-semibold tracking-royal text-[#FAF8F3] uppercase leading-tight group-hover:text-[#C8A96B] transition-colors">
              THE ROYAL
            </span>
            <span className="block font-sans text-[10px] tracking-[0.25em] text-[#C8A96B] uppercase font-light">
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
              className="font-sans text-xs uppercase tracking-[0.2em] text-[#FAF8F3]/80 hover:text-[#C8A96B] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A96B] hover:after:w-full after:transition-all after:duration-300"
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
            className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-none border border-[#C8A96B] bg-[#C8A96B]/10 hover:bg-[#C8A96B] text-[#FAF8F3] hover:text-[#0B0B0B] font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-[0_0_15px_rgba(200,169,107,0.1)] hover:shadow-[0_0_25px_rgba(200,169,107,0.4)] cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C8A96B] group-hover:text-[#0B0B0B]" />
            <span>BOOK YOUR RITUAL</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="lg:hidden p-2 text-[#FAF8F3] hover:text-[#C8A96B] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0B]/95 backdrop-blur-2xl border-b border-[#C8A96B]/30 px-6 pt-6 pb-8 transition-all animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-lg tracking-wider text-[#FAF8F3] hover:text-[#C8A96B] transition-colors py-2 border-b border-[#1F1F1F]"
              >
                {link.name}
              </a>
            ))}
            {/* Generous Luxury Spacing & Gold Divider for Mobile Reservation CTA */}
            <div className="pt-6 mt-3 border-t border-[#C8A96B]/30">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center space-x-2 py-3.5 bg-[#C8A96B] hover:bg-[#D8C08A] text-[#0B0B0B] font-sans text-xs uppercase tracking-widest font-bold shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>RESERVE SANCTUARY RITUAL</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
