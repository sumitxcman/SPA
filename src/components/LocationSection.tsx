import React, { useState } from 'react';
import { FAQS } from '../data/spaData';
import { MapPin, Clock, Phone, Navigation, ChevronDown, ChevronUp, Star } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="location" className="relative py-20 sm:py-28 md:py-36 bg-[#FAFAFA] text-[#0B0B0B] overflow-hidden border-t border-[#0B0B0B]/10">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="h-[1px] w-8 bg-[#9B7E44]" />
            <span className="font-sans text-xs tracking-[0.35em] text-[#9B7E44] font-bold uppercase">
              SANCTUARY ARRIVAL • DWARKA, DELHI
            </span>
            <span className="h-[1px] w-8 bg-[#9B7E44]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#0B0B0B] uppercase">
            SANCTUARY <span className="italic text-[#9B7E44]">LOCATION</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4A4A4A] font-light mt-3">
            An all-inclusive private wellness sanctuary located at Central Market, Sector 6 Dwarka, Delhi.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-20">
          
          {/* Details Column */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-10 border border-[#0B0B0B]/10 flex flex-col justify-between space-y-6 sm:space-y-8 shadow-md">
            <div className="space-y-5 sm:space-y-6">
              
              <div>
                <div className="flex items-center space-x-2 text-[#9B7E44] mb-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-sans text-xs font-bold tracking-wider">4.8 ★ (30 Google Reviews)</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0B0B0B] uppercase font-bold">
                  THE ROYAL MASSAGE SPA
                </h3>
                <span className="font-sans text-[11px] text-[#9B7E44] block tracking-widest uppercase mt-0.5 font-bold">
                  Kasa Royal Spa • Women-Owned Sanctuary
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3.5 pt-1">
                <div className="w-9 h-9 rounded-full bg-[#FAF8F3] border border-[#C8A96B]/50 flex items-center justify-center text-[#9B7E44] shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-[#0B0B0B] block mb-1 font-bold">
                    Address & Plus Code
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#3A3A3A] font-light leading-relaxed">
                    Central Market, Sec-6 Market, Sector 6 Dwarka, Dwarka, Delhi, 110075
                  </p>
                  <span className="font-mono text-xs text-[#9B7E44] mt-1 inline-block bg-[#FAF8F3] px-2 py-0.5 border border-[#C8A96B]/40 font-bold">
                    Plus Code: H3R6+43 Delhi
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF8F3] border border-[#C8A96B]/50 flex items-center justify-center text-[#9B7E44] shrink-0 mt-0.5 shadow-sm">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-[#0B0B0B] block mb-1 font-bold">
                    Sanctuary Hours
                  </span>
                  <div className="inline-flex items-center space-x-2 bg-[#E8F5E9] px-3 py-1 border border-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="font-sans text-xs font-bold text-emerald-900 uppercase tracking-wider">
                      OPEN 24 HOURS (MON — SUN)
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF8F3] border border-[#C8A96B]/50 flex items-center justify-center text-[#9B7E44] shrink-0 mt-0.5 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-[#0B0B0B] block mb-1 font-bold">
                    Official Services
                  </span>
                  <a
                    href="https://theroyalspa.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs sm:text-sm text-[#0B0B0B] hover:text-[#9B7E44] font-medium underline underline-offset-4 transition-colors"
                  >
                    services@theroyalspa.in
                  </a>
                </div>
              </div>

            </div>

            {/* Google Maps Direction Button */}
            <div className="pt-4 border-t border-[#E5E5E5]">
              <a
                href="https://maps.google.com/?q=Central+Market+Sector+6+Dwarka+Delhi+110075"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="w-full py-3.5 bg-[#0B0B0B] hover:bg-[#9B7E44] text-[#FFFFFF] font-sans text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#FBE8A6]" />
                <span>OPEN DIRECTIONS IN MAPS</span>
              </a>
            </div>

          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 bg-white border border-[#0B0B0B]/10 overflow-hidden relative min-h-[380px] shadow-md">
            <iframe
              title="The Royal Massage Spa Location Sector 6 Dwarka"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.217316719582!2d77.06014457631388!3d28.59325997568603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1158652df5%3A0xa6ebbb56e076ba09!2sSector%206%20Market%2C%20Sector%206%20Dwarka%2C%20Dwarka%2C%20Delhi%2C%20110075!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px]"
            />
            
            {/* Overlay Tag */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 border border-[#0B0B0B]/10 shadow-lg pointer-events-none">
              <span className="font-serif text-sm text-[#0B0B0B] block uppercase font-bold">
                Sector 6 Dwarka Central Market
              </span>
              <span className="font-sans text-[10px] text-[#9B7E44] uppercase tracking-widest block font-bold">
                Delhi 110075 • 24 Hours Open
              </span>
            </div>
          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-[#0B0B0B]/10">
          <div className="text-center mb-8">
            <span className="font-sans text-xs tracking-[0.3em] text-[#9B7E44] uppercase font-bold">
              COMMON INQUIRIES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#0B0B0B] uppercase mt-1 font-bold">
              FREQUENTLY ASKED QUESTIONS
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-[#0B0B0B]/10 bg-white transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-[#0B0B0B] hover:text-[#9B7E44] transition-colors cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg uppercase pr-4 font-semibold">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#9B7E44] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#555555] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm font-sans text-[#4A4A4A] font-light border-t border-[#F0F0F0] pt-3 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
