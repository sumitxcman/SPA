import React, { useState } from 'react';
import { SIGNATURE_EXPERIENCES, SignatureCard } from '../data/spaData';
import { ArrowRight, Clock, Sparkles, X, ChevronRight, Check } from 'lucide-react';

interface SignatureExperienceProps {
  onOpenBooking: (treatmentName: string) => void;
}

export const SignatureExperience: React.FC<SignatureExperienceProps> = ({ onOpenBooking }) => {
  const [selectedExp, setSelectedExp] = useState<SignatureCard | null>(null);

  return (
    <section id="experience" className="relative py-20 sm:py-28 md:py-36 bg-[#0B0B0B] text-[#FFFFFF] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FBE8A6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#181818]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="font-sans text-xs tracking-[0.35em] text-[#FBE8A6] font-semibold uppercase">
                EXCLUSIVE SIGNATURES
              </span>
              <span className="h-[1px] w-8 bg-[#FBE8A6]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#FFFFFF] uppercase">
              SIGNATURE <span className="italic text-[#FBE8A6]">EXPERIENCES</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#FFFFFF]/75 max-w-md font-light leading-relaxed">
            Multi-sensory royal journeys combining botanical elixirs, volcanic stones, and private jacuzzi hydrotherapy.
          </p>
        </div>

        {/* 4 Signature Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIGNATURE_EXPERIENCES.map((card) => (
            <div
              key={card.id}
              className="group relative bg-[#151515] border border-[#FBE8A6]/20 hover:border-[#FBE8A6]/70 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden" data-cursor="view">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-3 left-3 bg-[#0B0B0B]/90 backdrop-blur-sm px-2.5 py-0.5 border border-[#FBE8A6]/40">
                  <span className="font-serif text-xs font-bold text-[#FBE8A6]">{card.number}</span>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-3 right-3 bg-[#0B0B0B]/90 px-2.5 py-0.5 border border-[#FBE8A6]/30 flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-[#FBE8A6]" />
                  <span className="font-sans text-[10px] text-[#FFFFFF] uppercase tracking-wider">{card.duration}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <span className="font-sans text-[10px] tracking-[0.2em] text-[#FBE8A6] uppercase font-semibold block mb-1">
                    {card.tagline}
                  </span>
                  
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FFFFFF] uppercase group-hover:text-[#FBE8A6] transition-colors leading-snug">
                    {card.title}
                  </h3>

                  <p className="font-sans text-xs text-[#FFFFFF]/75 font-light mt-2 line-clamp-2">
                    {card.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#1F1F1F]">
                    <span className="font-sans text-[10px] text-[#FBE8A6] block uppercase tracking-wider font-medium">
                      ★ {card.highlight}
                    </span>
                  </div>
                </div>

                {/* Pricing & Actions */}
                <div className="mt-5 pt-3 border-t border-[#1F1F1F] flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-[#FBE8A6]">
                    {card.price}
                  </span>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setSelectedExp(card)}
                      className="text-[11px] font-sans text-[#FFFFFF]/70 hover:text-[#FBE8A6] uppercase tracking-wider transition-colors"
                    >
                      Protocol
                    </button>
                    <button
                      onClick={() => onOpenBooking(card.title)}
                      data-cursor="book"
                      className="px-3 py-1.5 bg-[#FBE8A6] hover:bg-[#FFF4CC] text-[#0B0B0B] text-xs font-sans uppercase tracking-widest font-bold transition-all shadow-md cursor-pointer"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Protocol Breakdown Modal */}
      {selectedExp && (
        <div
          onClick={() => setSelectedExp(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0B]/90 backdrop-blur-md p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#151515] border border-[#FBE8A6]/50 max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedExp(null)}
              aria-label="Close Protocol Modal"
              className="absolute top-4 right-4 p-1 text-[#FFFFFF]/70 hover:text-[#FBE8A6]"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="font-sans text-xs text-[#FBE8A6] uppercase tracking-widest block mb-1">
              PROTOCOL DETAIL • {selectedExp.duration}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] uppercase">
              {selectedExp.title}
            </h3>
            <p className="font-serif text-xl font-bold text-[#FBE8A6] mt-1">
              {selectedExp.price}
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#FFFFFF]/80 font-light mt-4">
              {selectedExp.description}
            </p>

            <div className="mt-6 pt-4 border-t border-[#1F1F1F]">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#FBE8A6] block mb-3 font-semibold">
                Ceremonial Ritual Progression:
              </span>
              <ul className="space-y-2.5">
                {selectedExp.ritualSteps.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start space-x-2 text-xs font-sans text-[#FFFFFF]/90">
                    <Check className="w-4 h-4 text-[#FBE8A6] shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                const treatment = selectedExp.title;
                setSelectedExp(null);
                onOpenBooking(treatment);
              }}
              className="mt-8 w-full py-3.5 bg-[#FBE8A6] hover:bg-[#FFF4CC] text-[#0B0B0B] font-sans text-xs uppercase tracking-widest font-bold shadow-xl transition-all"
            >
              RESERVE THIS SIGNATURE PROTOCOL
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
