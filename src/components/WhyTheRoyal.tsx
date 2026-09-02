import React from 'react';
import { SPA_STATS } from '../data/spaData';

export const WhyTheRoyal: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#FFFFFF] text-[#0B0B0B] border-y border-[#0B0B0B]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
          {SPA_STATS.map((stat, index) => (
            <div key={index} className="space-y-2 relative group">
              
              {/* Huge Typography Stat: Black */}
              <div className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-[#0B0B0B] tracking-tighter group-hover:text-[#9B7E44] transition-colors duration-300">
                {stat.value}
              </div>

              {/* Title & Subtitle: Gold */}
              <div className="font-sans text-xs uppercase tracking-[0.25em] text-[#9B7E44] font-bold">
                {stat.label}
              </div>

              <div className="font-sans text-xs text-[#555555] font-light max-w-[200px] mx-auto md:mx-0">
                {stat.sub}
              </div>

              {/* Decorative Accent Line */}
              <div className="w-12 h-[1px] bg-[#9B7E44]/50 mx-auto md:mx-0 pt-2" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
