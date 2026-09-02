import React, { useState } from 'react';
import { MOOD_OPTIONS } from '../data/spaData';
import { Sparkles, ArrowRight, Wind, Flame, Droplets, Leaf } from 'lucide-react';

interface ChooseYourMoodProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const ChooseYourMood: React.FC<ChooseYourMoodProps> = ({ onOpenBooking }) => {
  const [activeMoodId, setActiveMoodId] = useState<'relaxed' | 'restored' | 'recharged' | 'renewed'>('relaxed');

  const currentMood = MOOD_OPTIONS.find((m) => m.id === activeMoodId) || MOOD_OPTIONS[0];

  const moodIcons = {
    relaxed: Droplets,
    restored: Flame,
    recharged: Wind,
    renewed: Leaf,
  };

  const IconComponent = moodIcons[activeMoodId] || Sparkles;

  return (
    <section id="mood" className="relative min-h-[750px] flex items-center py-20 sm:py-28 md:py-36 bg-[#FAFAFA] text-[#0B0B0B] overflow-hidden border-t border-[#0B0B0B]/10">
      
      {/* Dynamic Background Crossfade Image with Bright Light Overlay */}
      {MOOD_OPTIONS.map((mood) => (
        <div
          key={mood.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeMoodId === mood.id ? 'opacity-25 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <img
            src={mood.bgImage}
            alt={mood.label}
            className="w-full h-full object-cover filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/70 to-[#FAFAFA]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-[#FAFAFA]" />
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="h-[1px] w-8 bg-[#9B7E44]" />
            <span className="font-sans text-xs tracking-[0.35em] text-[#9B7E44] font-bold uppercase">
              SENSORY GUIDANCE
            </span>
            <span className="h-[1px] w-8 bg-[#9B7E44]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#0B0B0B] uppercase">
            HOW DO YOU <span className="italic text-[#9B7E44]">WANT TO FEEL?</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#4A4A4A] font-light mt-2">
            Select your desired state to reveal your tailored therapeutic protocol.
          </p>
        </div>

        {/* 4 Mood Option Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10 sm:mb-12">
          {MOOD_OPTIONS.map((mood) => {
            const isActive = activeMoodId === mood.id;
            return (
              <button
                key={mood.id}
                onClick={() => setActiveMoodId(mood.id)}
                onMouseEnter={() => setActiveMoodId(mood.id)}
                data-cursor="pointer"
                className={`group py-4 sm:py-5 px-3 sm:px-6 text-center border transition-all duration-500 cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-[#0B0B0B] text-[#FFFFFF] border-[#0B0B0B] shadow-xl scale-[1.02]'
                    : 'bg-white hover:bg-[#FAF8F3] text-[#0B0B0B] border-[#0B0B0B]/15 hover:border-[#9B7E44] shadow-sm'
                }`}
              >
                <span className={`font-serif text-base sm:text-xl md:text-2xl tracking-widest uppercase block font-bold transition-colors ${
                  isActive ? 'text-[#FBE8A6]' : 'text-[#0B0B0B] group-hover:text-[#9B7E44]'
                }`}>
                  {mood.label}
                </span>
                <span className={`font-sans text-[9px] sm:text-[10px] tracking-wider uppercase block mt-1 font-bold ${
                  isActive ? 'text-[#FFFFFF]/90' : 'text-[#9B7E44]'
                }`}>
                  Select State
                </span>
              </button>
            );
          })}
        </div>

        {/* Recommended Experience Card for Active Mood */}
        <div className="max-w-4xl mx-auto bg-white border border-[#C8A96B]/50 p-6 sm:p-10 shadow-2xl transition-all duration-700">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center space-x-2 text-[#9B7E44] text-xs uppercase tracking-widest font-bold">
                <IconComponent className="w-4 h-4" />
                <span>RECOMMENDED PROTOCOL</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0B0B0B] uppercase leading-snug">
                {currentMood.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#4A4A4A] font-light leading-relaxed">
                {currentMood.subtext}
              </p>

              <div className="pt-2 space-y-1.5 text-xs font-sans">
                <div className="flex items-center space-x-2 text-[#2A2A2A]">
                  <span className="text-[#9B7E44] uppercase tracking-wider font-bold min-w-[100px]">Aroma:</span>
                  <span className="font-light">{currentMood.aromaNote}</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2A2A2A]">
                  <span className="text-[#9B7E44] uppercase tracking-wider font-bold min-w-[100px]">Modality:</span>
                  <span className="font-light">{currentMood.technique}</span>
                </div>
              </div>
            </div>

            {/* Right Treatment Action Column */}
            <div className="md:col-span-5 bg-[#FAF8F3] p-5 sm:p-7 border border-[#C8A96B]/40 flex flex-col justify-between space-y-5 shadow-inner">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#9B7E44] block mb-1 font-bold">
                  PRESCRIBED TREATMENT
                </span>
                <h4 className="font-serif text-lg sm:text-xl text-[#0B0B0B] uppercase font-bold">
                  {currentMood.recommendedTreatment}
                </h4>
                <div className="flex items-baseline space-x-3 mt-1.5 text-[#0B0B0B]">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#9B7E44]">{currentMood.treatmentPrice}</span>
                  <span className="text-xs font-sans text-[#555555] uppercase tracking-widest font-semibold">{currentMood.treatmentDuration}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking(currentMood.recommendedTreatment)}
                data-cursor="book"
                className="w-full py-3 bg-[#0B0B0B] hover:bg-[#9B7E44] text-[#FFFFFF] font-sans text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg cursor-pointer"
              >
                <span>RESERVE THIS STATE</span>
                <ArrowRight className="w-4 h-4 text-[#FBE8A6]" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
