import React from 'react';
import { RITUAL_JOURNEY_STEPS } from '../data/spaData';

export const RitualJourney: React.FC = () => {
  return (
    <section id="rituals" className="relative py-20 sm:py-28 md:py-36 bg-[#0B0B0B] text-[#FFFFFF] overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#FBE8A6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#151515]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="h-[1px] w-8 bg-[#FBE8A6]" />
            <span className="font-sans text-xs tracking-[0.35em] text-[#FBE8A6] font-semibold uppercase">
              THE 4-STAGE ODYSSEY
            </span>
            <span className="h-[1px] w-8 bg-[#FBE8A6]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#FFFFFF] uppercase">
            YOUR RITUAL <span className="italic text-[#FBE8A6]">BEGINS</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#FFFFFF]/80 font-light mt-2">
            An uninterrupted sequence engineered to dissolve stress into stillness.
          </p>
        </div>

        {/* Vertical Steps */}
        <div className="relative space-y-16 md:space-y-24">
          
          {/* Vertical Light Yellow Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#FBE8A6]/50 to-transparent" />

          {RITUAL_JOURNEY_STEPS.map((stepItem, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={stepItem.number}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center gap-6 md:gap-14 relative`}
              >
                {/* Timeline Center Node (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0B0B0B] border-2 border-[#FBE8A6] items-center justify-center z-20 shadow-[0_0_15px_rgba(251,232,166,0.35)]">
                  <span className="font-serif text-xs font-bold text-[#FBE8A6]">{stepItem.number}</span>
                </div>

                {/* Image Column */}
                <div className="w-full md:w-1/2" data-cursor="view">
                  <div className="relative group overflow-hidden border border-[#FBE8A6]/30 shadow-2xl">
                    <img
                      src={stepItem.image}
                      alt={stepItem.title}
                      className="w-full h-64 sm:h-80 md:h-96 object-cover filter brightness-90 transition-transform duration-700 group-hover:scale-105 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent" />
                    
                    {/* Mobile Step Badge */}
                    <div className="md:hidden absolute top-3 left-3 bg-[#0B0B0B]/90 border border-[#FBE8A6]/60 px-2.5 py-0.5 text-xs font-serif text-[#FBE8A6]">
                      STAGE {stepItem.number} — {stepItem.step}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`w-full md:w-1/2 space-y-3 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  
                  <div className={`flex items-center space-x-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="font-sans text-xs tracking-[0.3em] text-[#FBE8A6] uppercase font-bold">
                      STAGE {stepItem.number} — {stepItem.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FFFFFF] uppercase">
                    {stepItem.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#FBE8A6] italic font-medium">
                    "{stepItem.subtitle}"
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#FFFFFF]/80 font-light leading-relaxed">
                    {stepItem.description}
                  </p>

                  {/* Micro checklist details */}
                  <ul className={`pt-1 space-y-1 ${isEven ? 'md:flex md:flex-col md:items-end' : ''}`}>
                    {stepItem.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center space-x-2 text-xs font-sans text-[#FFFFFF]/90 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FBE8A6] shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
