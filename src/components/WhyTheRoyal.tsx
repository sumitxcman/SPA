import React from 'react';
import { SPA_STATS } from '../data/spaData';

export const WhyTheRoyal: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0B0B0B] text-[#FFFFFF] border-y border-[#FBE8A6]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
          {SPA_STATS.map((stat, index) => (
            <div key={index} className="space-y-2 relative group">
              
              {/* Huge Typography Stat: Pure White */}
              <div className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-[#FFFFFF] tracking-tighter group-hover:text-[#FBE8A6] transition-colors duration-300">
                {stat.value}
              </div>

              {/* Title & Subtitle: Light Yellow */}
              <div className="font-sans text-xs uppercase tracking-[0.25em] text-[#FBE8A6] font-bold">
                {stat.label}
              </div>

              <div className="font-sans text-xs text-[#FFFFFF]/75 font-light max-w-[200px] mx-auto md:mx-0">
                {stat.sub}
              </div>

              {/* Decorative Accent Line */}
              <div className="w-12 h-[1px] bg-[#FBE8A6]/40 mx-auto md:mx-0 pt-2" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
