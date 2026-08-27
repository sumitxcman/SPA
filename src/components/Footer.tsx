import React from 'react';
import { Crown, MessageSquare, MapPin, Mail, ArrowUp, Globe } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070707] text-[#FAF8F3] pt-20 sm:pt-24 pb-12 overflow-hidden border-t border-[#C8A96B]/20">
      
      {/* Background Subtle Noise */}
      <div className="absolute inset-0 luxury-noise pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Huge Statement Headline */}
        <div className="border-b border-[#1F1F1F] pb-14 sm:pb-16 mb-14 sm:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="font-sans text-xs tracking-[0.4em] text-[#C8A96B] uppercase font-semibold block mb-4">
              ENTER YOUR SOVEREIGN STATE
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#FAF8F3] uppercase leading-[0.95] tracking-tight">
              YOUR <br />
              <span className="italic text-[#C8A96B]">WELLNESS</span> <br />
              AWAITING.
            </h2>
          </div>

          <div className="space-y-4 max-w-sm">
            <p className="font-sans text-xs sm:text-sm text-[#F4F0E8]/70 font-light leading-relaxed">
              Step across our threshold in Sector 6 Dwarka, Delhi and experience round-the-clock imperial relaxation.
            </p>
            <button
              onClick={onOpenBooking}
              data-cursor="book"
              className="w-full sm:w-auto px-8 py-4 bg-[#C8A96B] hover:bg-[#D8C08A] text-[#0B0B0B] font-sans text-xs uppercase tracking-[0.25em] font-bold transition-all shadow-xl cursor-pointer"
            >
              BOOK YOUR RITUAL NOW
            </button>
          </div>
        </div>

        {/* Navigation & Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-16 border-b border-[#1F1F1F]">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full border border-[#C8A96B] flex items-center justify-center bg-[#151515]">
                <Crown className="w-4 h-4 text-[#C8A96B]" />
              </div>
              <span className="font-serif text-lg tracking-widest text-[#FAF8F3] uppercase">
                THE ROYAL MASSAGE SPA
              </span>
            </div>
            <p className="font-sans text-xs text-[#F4F0E8]/60 font-light leading-relaxed max-w-xs">
              An all-inclusive 4.8★ Google rated private sanctuary with Jacuzzi, Sauna, Steam rooms, and bespoke somatic therapies in Dwarka, Delhi.
            </p>
            <span className="inline-block text-[11px] font-sans text-[#C8A96B] bg-[#151515] px-3 py-1 border border-[#C8A96B]/30">
              Women-Owned & Dedicated Care
            </span>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold block mb-4">
              SANCTUARY NAVIGATION
            </span>
            <ul className="space-y-2 text-xs font-sans">
              <li><a href="#hero" className="text-[#FAF8F3]/80 hover:text-[#C8A96B] transition-colors">Home Experience</a></li>
              <li><a href="#philosophy" className="text-[#FAF8F3]/80 hover:text-[#C8A96B] transition-colors">The Philosophy</a></li>
              <li><a href="#experience" className="text-[#FAF8F3]/80 hover:text-[#C8A96B] transition-colors">Signature Experiences</a></li>
              <li><a href="#treatments" className="text-[#FAF8F3]/80 hover:text-[#C8A96B] transition-colors">Treatment Menu</a></li>
              <li><a href="#mood" className="text-[#FAF8F3]/80 hover:text-[#C8A96B] transition-colors">Choose Your Mood</a></li>
              <li><a href="#rituals" className="text-[#FAF8F3]/80 hover:text-[#C8A96B] transition-colors">The 4-Stage Odyssey</a></li>
              <li><a href="#sanctuary" className="text-[#FAF8F3]/80 hover:text-[#C8A96B] transition-colors">Interior Gallery</a></li>
              <li><a href="#privilege" className="text-[#FAF8F3]/80 hover:text-[#C8A96B] transition-colors">Royal Privilege Membership</a></li>
            </ul>
          </div>

          {/* Col 3: Hours & Location */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold block mb-4">
              SANCTUARY LOCATION & HOURS
            </span>
            <div className="space-y-2 text-xs font-sans text-[#FAF8F3]/80 font-light">
              <div className="text-[#C8A96B] font-semibold flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>OPEN 24 HOURS (MON — SUN)</span>
              </div>
              <p className="pt-2 text-[#FAF8F3]/90">
                Central Market, Sec-6 Market,<br />
                Sector 6 Dwarka, Dwarka,<br />
                Delhi, 110075
              </p>
              <span className="text-[#C8A96B] text-[11px] block">Plus Code: H3R6+43 Delhi</span>
            </div>
          </div>

          {/* Col 4: Social & Direct Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold block mb-4">
              CONNECT
            </span>
            <div className="space-y-2.5 text-xs font-sans">
              <a
                href="https://theroyalspa.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#FAF8F3]/80 hover:text-[#C8A96B] transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>theroyalspa.in</span>
              </a>

              <a
                href="https://wa.me/?text=Hello%20The%20Royal%20Spa%20Dwarka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#FAF8F3]/80 hover:text-[#C8A96B] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="https://maps.google.com/?q=Sector+6+Dwarka+Delhi+110075"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#FAF8F3]/80 hover:text-[#C8A96B] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>Google Maps</span>
              </a>

              <a
                href="mailto:services@theroyalspa.in"
                className="flex items-center space-x-2 text-[#FAF8F3]/80 hover:text-[#C8A96B] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>Email Services</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#FAF8F3]/50">
          <div>
            © {new Date().getFullYear()} The Royal Massage Spa (theroyalspa.in). Sector 6 Dwarka, Delhi.
          </div>

          <div className="flex items-center space-x-6">
            <span className="hover:text-[#FAF8F3] transition-colors cursor-pointer">Privacy Protocol</span>
            <span>•</span>
            <span className="hover:text-[#FAF8F3] transition-colors cursor-pointer">Sanctuary Terms</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-[#C8A96B] hover:text-[#D8C08A] transition-colors cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
