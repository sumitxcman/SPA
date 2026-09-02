import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#FAFAFA]"
    >
      {/* 100% Crystal-Clear HD Luxury Spa Sanctuary Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=95&w=2400&auto=format&fit=crop"
          alt="The Royal Massage Spa Sanctuary Interior"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-[12000ms] ease-out hover:scale-105"
        />
        {/* Subtle Edge Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-white/30" />
      </div>

      {/* Spacer for floating navbar */}
      <div className="h-24 md:h-32" />

      {/* Main Asymmetrical Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-8 md:py-16">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-3 mb-6 animate-fade-in">
            <span className="h-[1px] w-8 bg-[#9B7E44]" />
            <span className="font-sans text-xs uppercase tracking-[0.35em] text-[#9B7E44] font-bold">
              THE ART OF RESTORATION
            </span>
          </div>

          {/* Huge Headline: Pure Black + Gold Accent */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#0B0B0B] leading-[1.08] tracking-tight uppercase mb-6">
            A ROYAL <br />
            <span className="italic font-normal text-[#9B7E44]">ESCAPE FROM</span> <br />
            THE ORDINARY.
          </h1>

          {/* Mobile-Only Editorial Image Showcase */}
          <div className="block md:hidden mb-6 relative overflow-hidden border border-[#C8A96B]/50 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop"
              alt="The Royal Massage Spa Experience"
              className="w-full h-52 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 border border-[#C8A96B]/50 shadow-md">
              <span className="font-serif text-[11px] text-[#0B0B0B] tracking-wider uppercase font-bold">
                KASA ROYAL SANCTUARY • DWARKA
              </span>
            </div>
          </div>

          {/* Supporting Text: Deep Charcoal */}
          <p className="font-sans text-base sm:text-lg text-[#2A2A2A] font-light max-w-xl leading-relaxed mb-10 border-l-2 border-[#9B7E44] pl-5">
            Where timeless wellness rituals meet modern luxury. Step inside our private sanctuary and let every boundary of stress dissolve into stillness.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={onOpenBooking}
              data-cursor="book"
              className="group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#0B0B0B] hover:bg-[#9B7E44] text-[#FFFFFF] font-sans text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
            >
              <span>BOOK YOUR EXPERIENCE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#FBE8A6]" />
            </button>

            <a
              href="#rituals"
              className="inline-flex items-center justify-center space-x-3 px-8 py-4 border border-[#0B0B0B] hover:border-[#9B7E44] text-[#0B0B0B] hover:text-[#9B7E44] bg-white/80 backdrop-blur-sm font-sans text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-sm"
            >
              <span>EXPLORE RITUALS</span>
              <Compass className="w-4 h-4 text-[#9B7E44]" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Privilege Ticker */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pb-8 pt-4 border-t border-[#0B0B0B]/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#9B7E44] font-bold text-center md:text-left">
          <span>PRIVATE WELLNESS</span>
          <span className="text-[#9B7E44]/40">•</span>
          <span>SIGNATURE RITUALS</span>
          <span className="text-[#9B7E44]/40">•</span>
          <span>ROYAL HOSPITALITY</span>
        </div>

        <a
          href="#philosophy"
          className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#0B0B0B]/80 hover:text-[#9B7E44] font-bold transition-colors"
        >
          <span>DISCOVER SANCTUARY</span>
        </a>
      </div>
    </section>
  );
};
