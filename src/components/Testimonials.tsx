import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/spaData';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="relative py-20 sm:py-28 md:py-36 bg-[#FAFAFA] text-[#0B0B0B] overflow-hidden border-t border-[#0B0B0B]/10">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C8A96B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        
        {/* Section Tag */}
        <div className="inline-flex items-center space-x-3 mb-6">
          <span className="h-[1px] w-6 bg-[#9B7E44]" />
          <span className="font-sans text-xs tracking-[0.35em] text-[#9B7E44] font-bold uppercase">
            GUEST REFLECTIONS
          </span>
          <span className="h-[1px] w-6 bg-[#9B7E44]" />
        </div>

        {/* 5 Stars: Gold */}
        <div className="flex items-center justify-center space-x-1.5 mb-8 text-[#9B7E44]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current text-[#9B7E44]" />
          ))}
        </div>

        {/* Huge Editorial Quote: Pure Black */}
        <div className="min-h-[200px] flex flex-col justify-center transition-all duration-500">
          <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#0B0B0B] leading-[1.3] italic max-w-4xl mx-auto">
            “{current.quote}”
          </blockquote>

          {/* Author Details */}
          <div className="mt-8 space-y-1">
            <cite className="not-italic font-sans text-sm uppercase tracking-[0.25em] font-bold text-[#0B0B0B] block">
              {current.author}
            </cite>
            <span className="font-sans text-xs text-[#555555] block font-medium">
              {current.title} • <span className="text-[#9B7E44] italic font-bold">{current.treatment}</span>
            </span>
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center justify-center space-x-4 mt-12">
          <button
            onClick={prevTestimonial}
            aria-label="Previous Testimonial"
            className="w-10 h-10 rounded-full border border-[#0B0B0B]/20 hover:border-[#0B0B0B] flex items-center justify-center text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-[#FFFFFF] transition-all cursor-pointer shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 transition-all rounded-full cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#9B7E44]' : 'w-2 bg-[#0B0B0B]/20'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            aria-label="Next Testimonial"
            className="w-10 h-10 rounded-full border border-[#0B0B0B]/20 hover:border-[#0B0B0B] flex items-center justify-center text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-[#FFFFFF] transition-all cursor-pointer shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
