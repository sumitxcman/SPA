import React, { useRef, useState } from 'react';
import { SIGNATURE_EXPERIENCES, SignatureCard } from '../data/spaData';
import { ChevronLeft, ChevronRight, Sparkles, Clock, CheckCircle2, X } from 'lucide-react';

interface SignatureExperienceProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const SignatureExperience: React.FC<SignatureExperienceProps> = ({ onOpenBooking }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedExperience, setSelectedExperience] = useState<SignatureCard | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="relative py-20 sm:py-28 md:py-36 bg-[#0B0B0B] text-[#FAF8F3] overflow-hidden">
      
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#18251F]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="font-sans text-xs tracking-[0.35em] text-[#C8A96B] font-medium uppercase">
                CURATED MASTERWORKS
              </span>
              <span className="h-[1px] w-8 bg-[#C8A96B]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#FAF8F3] uppercase">
              THE ROYAL <span className="italic text-[#C8A96B]">EXPERIENCE</span>
            </h2>
          </div>

          {/* Navigation Scroll Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#C8A96B]/30 hover:border-[#C8A96B] bg-[#151515] flex items-center justify-center text-[#FAF8F3] hover:text-[#C8A96B] transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#C8A96B]/30 hover:border-[#C8A96B] bg-[#151515] flex items-center justify-center text-[#FAF8F3] hover:text-[#C8A96B] transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

        </div>
      </div>

      {/* Horizontal Carousel */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div
          ref={scrollContainerRef}
          className="flex space-x-5 sm:space-x-8 overflow-x-auto no-scrollbar pb-8 pt-2 scroll-smooth snap-x snap-mandatory"
        >
          {SIGNATURE_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="snap-start shrink-0 w-[285px] sm:w-[380px] md:w-[440px] bg-[#151515] border border-[#C8A96B]/20 hover:border-[#C8A96B]/60 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
              data-cursor="view"
            >
              {/* Image Header with Number Tag */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 bg-[#0B0B0B]/80 backdrop-blur-md px-3 py-1 border border-[#C8A96B]/30">
                  <span className="font-serif text-sm text-[#C8A96B] tracking-widest">{exp.number}</span>
                </div>

                {/* Duration & Price Badge */}
                <div className="absolute bottom-4 right-4 bg-[#0B0B0B]/85 backdrop-blur-md px-3 py-1 border border-[#C8A96B]/40 flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5 text-[#C8A96B]" />
                  <span className="font-sans text-xs font-semibold tracking-wider text-[#FAF8F3]">{exp.duration}</span>
                  <span className="text-[#C8A96B] font-serif font-bold text-sm ml-1">{exp.price}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="font-sans text-[10px] tracking-[0.3em] text-[#C8A96B] uppercase block mb-2 font-medium">
                    {exp.tagline}
                  </span>
                  
                  <h3 className="font-serif text-xl sm:text-3xl text-[#FAF8F3] uppercase tracking-wide group-hover:text-[#C8A96B] transition-colors mb-2 sm:mb-3">
                    {exp.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#F4F0E8]/70 leading-relaxed font-light mb-5 line-clamp-3">
                    {exp.description}
                  </p>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-[#1F1F1F] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedExperience(exp)}
                    className="font-sans text-xs uppercase tracking-[0.2em] text-[#FAF8F3] hover:text-[#C8A96B] transition-colors underline-offset-4 underline"
                  >
                    DISCOVER RITUAL
                  </button>

                  <button
                    onClick={() => onOpenBooking(exp.title)}
                    data-cursor="book"
                    className="px-3.5 sm:px-4 py-2 bg-[#C8A96B]/15 hover:bg-[#C8A96B] text-[#C8A96B] hover:text-[#0B0B0B] border border-[#C8A96B]/40 text-xs font-sans uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer"
                  >
                    RESERVE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Discover Ritual Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B0B0B]/85 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#151515] border border-[#C8A96B]/50 p-5 sm:p-10 shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedExperience(null)}
              className="absolute top-4 right-4 p-2 text-[#FAF8F3]/70 hover:text-[#C8A96B] focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-3 mb-3">
              <Sparkles className="w-4 h-4 text-[#C8A96B]" />
              <span className="font-sans text-xs tracking-[0.3em] text-[#C8A96B] uppercase font-medium">
                {selectedExperience.number} — RITUAL PROFILE
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl text-[#FAF8F3] uppercase mb-2">
              {selectedExperience.title}
            </h3>

            <div className="flex items-center space-x-4 mb-5 text-sm text-[#C8A96B]">
              <span>{selectedExperience.duration}</span>
              <span>•</span>
              <span className="font-serif text-lg font-bold">{selectedExperience.price}</span>
            </div>

            <p className="font-sans text-xs sm:text-base text-[#F4F0E8]/80 leading-relaxed font-light mb-5">
              {selectedExperience.description}
            </p>

            <div className="bg-[#0B0B0B] p-4 border border-[#C8A96B]/20 mb-6">
              <span className="font-sans text-xs uppercase tracking-widest text-[#C8A96B] font-semibold block mb-3">
                CHOREOGRAPHED PROTOCOL
              </span>
              <ul className="space-y-2">
                {selectedExperience.ritualSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-[#F4F0E8]/90 font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96B] shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => {
                  const title = selectedExperience.title;
                  setSelectedExperience(null);
                  onOpenBooking(title);
                }}
                className="flex-1 py-3.5 bg-[#C8A96B] hover:bg-[#D8C08A] text-[#0B0B0B] font-sans text-xs uppercase tracking-widest font-semibold text-center transition-all"
              >
                BOOK THIS EXPERIENCE ({selectedExperience.price})
              </button>
              <button
                onClick={() => setSelectedExperience(null)}
                className="px-6 py-3.5 border border-[#C8A96B]/30 hover:border-[#C8A96B] text-[#FAF8F3] text-xs font-sans uppercase tracking-widest"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
