import React, { useState } from 'react';
import { SIGNATURE_EXPERIENCES, SignatureCard } from '../data/spaData';
import { Clock, X, Check } from 'lucide-react';

interface SignatureExperienceProps {
  onOpenBooking: (treatmentName: string) => void;
}

export const SignatureExperience: React.FC<SignatureExperienceProps> = ({ onOpenBooking }) => {
  const [selectedExp, setSelectedExp] = useState<SignatureCard | null>(null);

  return (
    <section id="experience" className="relative py-20 sm:py-28 md:py-36 bg-[#FAFAFA] text-[#0B0B0B] overflow-hidden border-t border-[#0B0B0B]/10">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8A96B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="font-sans text-xs tracking-[0.35em] text-[#9B7E44] font-bold uppercase">
                EXCLUSIVE SIGNATURES
              </span>
              <span className="h-[1px] w-8 bg-[#9B7E44]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#0B0B0B] uppercase">
              SIGNATURE <span className="italic text-[#9B7E44]">EXPERIENCES</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#3A3A3A] max-w-md font-light leading-relaxed">
            Multi-sensory royal journeys combining botanical elixirs, volcanic stones, and private jacuzzi hydrotherapy.
          </p>
        </div>

        {/* 4 Signature Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIGNATURE_EXPERIENCES.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white border border-[#0B0B0B]/10 hover:border-[#9B7E44] transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden" data-cursor="view">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                
                {/* Number Badge */}
                <div className="absolute top-3 left-3 bg-[#0B0B0B] px-2.5 py-0.5 border border-[#C8A96B]/50 shadow-md">
                  <span className="font-serif text-xs font-bold text-[#FBE8A6]">{card.number}</span>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-3 right-3 bg-[#0B0B0B]/90 px-2.5 py-0.5 border border-[#C8A96B]/40 flex items-center space-x-1 shadow-md">
                  <Clock className="w-3 h-3 text-[#FBE8A6]" />
                  <span className="font-sans text-[10px] text-[#FFFFFF] uppercase tracking-wider font-semibold">{card.duration}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <span className="font-sans text-[10px] tracking-[0.2em] text-[#9B7E44] uppercase font-bold block mb-1">
                    {card.tagline}
                  </span>
                  
                  <h3 className="font-serif text-xl sm:text-2xl text-[#0B0B0B] uppercase group-hover:text-[#9B7E44] transition-colors leading-snug">
                    {card.title}
                  </h3>

                  <p className="font-sans text-xs text-[#4A4A4A] font-light mt-2 line-clamp-2">
                    {card.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#F0F0F0]">
                    <span className="font-sans text-[10px] text-[#9B7E44] block uppercase tracking-wider font-bold">
                      ★ {card.highlight}
                    </span>
                  </div>
                </div>

                {/* Pricing & Actions */}
                <div className="mt-5 pt-3 border-t border-[#F0F0F0] flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-[#0B0B0B]">
                    {card.price}
                  </span>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setSelectedExp(card)}
                      className="text-[11px] font-sans text-[#555555] hover:text-[#0B0B0B] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Protocol
                    </button>
                    <button
                      onClick={() => onOpenBooking(card.title)}
                      data-cursor="book"
                      className="px-3 py-1.5 bg-[#0B0B0B] hover:bg-[#9B7E44] text-[#FFFFFF] text-xs font-sans uppercase tracking-widest font-bold transition-all shadow-md cursor-pointer"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-[#C8A96B] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-[#0B0B0B]"
          >
            <button
              onClick={() => setSelectedExp(null)}
              aria-label="Close Protocol Modal"
              className="absolute top-4 right-4 p-1 text-[#0B0B0B]/70 hover:text-[#9B7E44] cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="font-sans text-xs text-[#9B7E44] uppercase tracking-widest block mb-1 font-bold">
              PROTOCOL DETAIL • {selectedExp.duration}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#0B0B0B] uppercase">
              {selectedExp.title}
            </h3>
            <p className="font-serif text-xl font-bold text-[#9B7E44] mt-1">
              {selectedExp.price}
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#3A3A3A] font-light mt-4">
              {selectedExp.description}
            </p>

            <div className="mt-6 pt-4 border-t border-[#E5E5E5]">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#0B0B0B] block mb-3 font-bold">
                Ceremonial Ritual Progression:
              </span>
              <ul className="space-y-2.5">
                {selectedExp.ritualSteps.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start space-x-2 text-xs font-sans text-[#2A2A2A]">
                    <Check className="w-4 h-4 text-[#9B7E44] shrink-0 mt-0.5" />
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
              className="mt-8 w-full py-3.5 bg-[#0B0B0B] hover:bg-[#9B7E44] text-[#FFFFFF] font-sans text-xs uppercase tracking-widest font-bold shadow-xl transition-all cursor-pointer"
            >
              RESERVE THIS SIGNATURE PROTOCOL
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
