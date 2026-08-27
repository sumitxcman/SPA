import React from 'react';
import { SPA_STATS } from '../data/spaData';

export const WhyTheRoyal: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#0B0B0B] text-[#FAF8F3] border-y border-[#C8A96B]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
          {SPA_STATS.map((stat, index) => (
            <div key={index} className="space-y-2 relative group">
              
              {/* Huge Typography Stat */}
              <div className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-[#FAF8F3] tracking-tighter group-hover:text-[#C8A96B] transition-colors duration-300">
                {stat.value}
              </div>

              {/* Title & Subtitle */}
              <div className="font-sans text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold">
                {stat.label}
              </div>

              <div className="font-sans text-xs text-[#F4F0E8]/60 font-light max-w-[200px] mx-auto md:mx-0">
                {stat.sub}
              </div>

              {/* Decorative Accent Line */}
              <div className="w-12 h-[1px] bg-[#C8A96B]/25 mx-auto md:mx-0 pt-2" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
