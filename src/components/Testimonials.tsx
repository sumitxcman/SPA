import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/spaData';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

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
    <section className="relative py-28 md:py-36 bg-[#F4F0E8] text-[#0B0B0B] overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        
        {/* Section Tag */}
        <div className="inline-flex items-center space-x-3 mb-8">
          <span className="h-[1px] w-6 bg-[#C8A96B]" />
          <span className="font-sans text-xs tracking-[0.35em] text-[#9B7E44] font-semibold uppercase">
            GUEST REFLECTIONS
          </span>
          <span className="h-[1px] w-6 bg-[#C8A96B]" />
        </div>

        {/* 5 Stars */}
        <div className="flex items-center justify-center space-x-1.5 mb-8 text-[#C8A96B]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current text-[#C8A96B]" />
          ))}
        </div>

        {/* Huge Editorial Quote */}
        <div className="min-h-[220px] flex flex-col justify-center transition-all duration-500">
          <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#0B0B0B] leading-[1.3] italic max-w-4xl mx-auto">
            “{current.quote}”
          </blockquote>

          {/* Author Details */}
          <div className="mt-8 space-y-1">
            <cite className="not-italic font-sans text-sm uppercase tracking-[0.25em] font-semibold text-[#0B0B0B] block">
              {current.author}
            </cite>
            <span className="font-sans text-xs text-[#0B0B0B]/70 block">
              {current.title} • <span className="text-[#9B7E44] italic">{current.treatment}</span>
            </span>
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center justify-center space-x-4 mt-12">
          <button
            onClick={prevTestimonial}
            aria-label="Previous Testimonial"
            className="w-10 h-10 rounded-full border border-[#0B0B0B]/20 hover:border-[#0B0B0B] flex items-center justify-center text-[#0B0B0B] hover:text-[#9B7E44] transition-all cursor-pointer"
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
                className={`h-2 transition-all rounded-full ${
                  currentIndex === idx ? 'w-8 bg-[#9B7E44]' : 'w-2 bg-[#0B0B0B]/20'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            aria-label="Next Testimonial"
            className="w-10 h-10 rounded-full border border-[#0B0B0B]/20 hover:border-[#0B0B0B] flex items-center justify-center text-[#0B0B0B] hover:text-[#9B7E44] transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
