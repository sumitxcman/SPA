import React from 'react';
import { ChevronDown, Sparkles, ArrowRight, ShieldCheck, Compass } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0B0B0B]"
    >
      {/* Background Image with Dark Cinematic Overlay and subtle slow float zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop"
          alt="The Royal Massage Spa Sanctuary Interior"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-[12000ms] ease-out hover:scale-100 filter brightness-[0.45] contrast-[1.1]"
        />
        {/* Cinematic Gradient Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-[#0B0B0B]/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0B0B]/30 to-[#0B0B0B]/80" />
        <div className="absolute inset-0 luxury-noise pointer-events-none opacity-40" />
      </div>

      {/* Spacer for floating navbar */}
      <div className="h-24 md:h-32" />

      {/* Main Asymmetrical Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-8 md:py-16">
        <div className="max-w-3xl">
          
          {/* Small Eyebrow with gold luxury accent line */}
          <div className="inline-flex items-center space-x-3 mb-6 animate-fade-in">
            <span className="h-[1px] w-8 bg-[#C8A96B]" />
            <span className="font-sans text-xs uppercase tracking-[0.35em] text-[#C8A96B] font-medium">
              THE ART OF RESTORATION
            </span>
          </div>

          {/* Huge Asymmetrical Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#FAF8F3] leading-[1.08] tracking-tight uppercase mb-6">
            A ROYAL <br />
            <span className="italic font-light text-[#C8A96B]">ESCAPE FROM</span> <br />
            THE ORDINARY.
          </h1>

          {/* Mobile-Only Editorial Image Showcase (Phone View Exclusive) */}
          <div className="block md:hidden mb-6 relative overflow-hidden border border-[#C8A96B]/40 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop"
              alt="The Royal Massage Spa Experience"
              className="w-full h-52 object-cover filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/85 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 bg-[#0B0B0B]/90 backdrop-blur-sm px-2.5 py-1 border border-[#C8A96B]/40">
              <span className="font-serif text-[11px] text-[#C8A96B] tracking-wider uppercase font-medium">
                KASA ROYAL SANCTUARY • DWARKA
              </span>
            </div>
          </div>

          {/* Supporting Text */}
          <p className="font-sans text-base sm:text-lg text-[#F4F0E8]/80 font-light max-w-xl leading-relaxed mb-10 border-l border-[#C8A96B]/40 pl-5">
            Where timeless wellness rituals meet modern luxury. Step inside our private sanctuary and let every boundary of stress dissolve into stillness.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={onOpenBooking}
              data-cursor="book"
              className="group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#C8A96B] hover:bg-[#D8C08A] text-[#0B0B0B] font-sans text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-[0_4px_25px_rgba(200,169,107,0.3)] hover:shadow-[0_4px_35px_rgba(200,169,107,0.5)] cursor-pointer"
            >
              <span>BOOK YOUR EXPERIENCE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#rituals"
              className="inline-flex items-center justify-center space-x-3 px-8 py-4 border border-[#C8A96B]/40 hover:border-[#C8A96B] text-[#FAF8F3] hover:text-[#C8A96B] bg-[#151515]/50 backdrop-blur-sm font-sans text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300"
            >
              <span>EXPLORE RITUALS</span>
              <Compass className="w-4 h-4 text-[#C8A96B]" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Vertical Scroll Indicator & Privilege Ticker */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pb-8 pt-4 border-t border-[#C8A96B]/15 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Privilege Ticker */}
        <div className="flex items-center space-x-3 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#C8A96B]/90 font-light text-center md:text-left">
          <span>PRIVATE WELLNESS</span>
          <span className="text-[#C8A96B]/40">•</span>
          <span>SIGNATURE RITUALS</span>
          <span className="text-[#C8A96B]/40">•</span>
          <span>ROYAL HOSPITALITY</span>
        </div>

        {/* Vertical Scroll Indicator */}
        <a
          href="#philosophy"
          aria-label="Scroll Down to Philosophy"
          className="flex items-center space-x-2 text-[#FAF8F3]/60 hover:text-[#C8A96B] transition-colors group cursor-pointer"
        >
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-light">SCROLL DOWN</span>
          <div className="w-6 h-6 rounded-full border border-[#C8A96B]/30 flex items-center justify-center group-hover:border-[#C8A96B] transition-colors">
            <ChevronDown className="w-3.5 h-3.5 text-[#C8A96B] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
