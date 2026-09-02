import React, { useState } from 'react';
import { MOOD_OPTIONS, MoodOption } from '../data/spaData';
import { Sparkles, ArrowRight, Compass, Wind, Flame, Droplets, Leaf } from 'lucide-react';

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
    <section id="mood" className="relative min-h-[750px] flex items-center py-20 sm:py-28 md:py-36 bg-[#0B0B0B] text-[#FAF8F3] overflow-hidden">
      
      {/* Dynamic Background Crossfade Image */}
      {MOOD_OPTIONS.map((mood) => (
        <div
          key={mood.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeMoodId === mood.id ? 'opacity-40 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <img
            src={mood.bgImage}
            alt={mood.label}
            className="w-full h-full object-cover filter brightness-75 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/70 to-[#0B0B0B]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="h-[1px] w-8 bg-[#C8A96B]" />
            <span className="font-sans text-xs tracking-[0.35em] text-[#C8A96B] font-medium uppercase">
              SENSORY GUIDANCE
            </span>
            <span className="h-[1px] w-8 bg-[#C8A96B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#FAF8F3] uppercase">
            HOW DO YOU <span className="italic text-[#C8A96B]">WANT TO FEEL?</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#F4F0E8]/70 font-light mt-2">
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
                    ? 'bg-[#C8A96B] text-[#0B0B0B] border-[#C8A96B] shadow-[0_0_30px_rgba(200,169,107,0.3)] scale-[1.02]'
                    : 'bg-[#151515]/80 hover:bg-[#1F1F1F] text-[#FAF8F3] border-[#C8A96B]/20 hover:border-[#C8A96B]/60'
                }`}
              >
                <span className={`font-serif text-base sm:text-xl md:text-2xl tracking-widest uppercase block font-medium transition-colors ${
                  isActive ? 'text-[#0B0B0B]' : 'text-[#FAF8F3] group-hover:text-[#C8A96B]'
                }`}>
                  {mood.label}
                </span>
                <span className={`font-sans text-[9px] sm:text-[10px] tracking-wider uppercase block mt-1 transition-colors ${
                  isActive ? 'text-[#0B0B0B]/80 font-medium' : 'text-[#C8A96B]/70'
                }`}>
                  Select State
                </span>
              </button>
            );
          })}
        </div>

        {/* Recommended Experience Card for Active Mood */}
        <div className="max-w-4xl mx-auto bg-[#151515]/90 backdrop-blur-xl border border-[#C8A96B]/40 p-6 sm:p-10 shadow-2xl transition-all duration-700">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center space-x-2 text-[#C8A96B] text-xs uppercase tracking-widest">
                <IconComponent className="w-4 h-4" />
                <span>RECOMMENDED PROTOCOL</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FAF8F3] uppercase leading-snug">
                {currentMood.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#F4F0E8]/80 font-light leading-relaxed">
                {currentMood.subtext}
              </p>

              <div className="pt-2 space-y-1.5 text-xs font-sans">
                <div className="flex items-center space-x-2 text-[#FAF8F3]/90">
                  <span className="text-[#C8A96B] uppercase tracking-wider font-semibold min-w-[100px]">Aroma:</span>
                  <span className="font-light">{currentMood.aromaNote}</span>
                </div>
                <div className="flex items-center space-x-2 text-[#FAF8F3]/90">
                  <span className="text-[#C8A96B] uppercase tracking-wider font-semibold min-w-[100px]">Modality:</span>
                  <span className="font-light">{currentMood.technique}</span>
                </div>
              </div>
            </div>

            {/* Right Treatment Action Column */}
            <div className="md:col-span-5 bg-[#0B0B0B] p-5 sm:p-7 border border-[#C8A96B]/30 flex flex-col justify-between space-y-5">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#C8A96B] block mb-1">
                  PRESCRIBED TREATMENT
                </span>
                <h4 className="font-serif text-lg sm:text-xl text-[#FAF8F3] uppercase">
                  {currentMood.recommendedTreatment}
                </h4>
                <div className="flex items-baseline space-x-3 mt-1.5 text-[#C8A96B]">
                  <span className="font-serif text-xl sm:text-2xl font-bold">{currentMood.treatmentPrice}</span>
                  <span className="text-xs font-sans text-[#FAF8F3]/60 uppercase tracking-widest">{currentMood.treatmentDuration}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking(currentMood.recommendedTreatment)}
                data-cursor="book"
                className="w-full py-3 bg-[#C8A96B] hover:bg-[#D8C08A] text-[#0B0B0B] font-sans text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg cursor-pointer"
              >
                <span>RESERVE THIS STATE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
