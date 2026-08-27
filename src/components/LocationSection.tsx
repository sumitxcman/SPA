import React, { useState } from 'react';
import { FAQS } from '../data/spaData';
import { MapPin, Clock, Phone, MessageSquare, Navigation, ChevronDown, ChevronUp, Sparkles, Star } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="location" className="relative py-20 sm:py-28 md:py-36 bg-[#0B0B0B] text-[#FAF8F3] overflow-hidden border-t border-[#C8A96B]/20">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="h-[1px] w-8 bg-[#C8A96B]" />
            <span className="font-sans text-xs tracking-[0.35em] text-[#C8A96B] font-medium uppercase">
              SANCTUARY ARRIVAL • DWARKA, DELHI
            </span>
            <span className="h-[1px] w-8 bg-[#C8A96B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#FAF8F3] uppercase">
            SANCTUARY <span className="italic text-[#C8A96B]">LOCATION</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#F4F0E8]/70 font-light mt-3">
            An all-inclusive private wellness sanctuary located at Central Market, Sector 6 Dwarka, Delhi.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-20">
          
          {/* Details Column */}
          <div className="lg:col-span-5 bg-[#151515] p-6 sm:p-10 border border-[#C8A96B]/30 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div className="space-y-5 sm:space-y-6">
              
              <div>
                <div className="flex items-center space-x-2 text-[#C8A96B] mb-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-sans text-xs font-semibold tracking-wider">4.8 ★ (30 Google Reviews)</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F3] uppercase">
                  THE ROYAL MASSAGE SPA
                </h3>
                <span className="font-sans text-[11px] text-[#C8A96B] block tracking-widest uppercase mt-0.5">
                  Kasa Royal Spa • Women-Owned Sanctuary
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3.5 pt-1">
                <div className="w-9 h-9 rounded-full bg-[#0B0B0B] border border-[#C8A96B]/40 flex items-center justify-center text-[#C8A96B] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-[#C8A96B] block mb-1 font-medium">
                    Address & Plus Code
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#F4F0E8]/90 font-light leading-relaxed">
                    Central Market, Sec-6 Market, Sector 6 Dwarka, Dwarka, Delhi, 110075
                  </p>
                  <span className="font-mono text-xs text-[#C8A96B] mt-1 inline-block bg-[#0B0B0B] px-2 py-0.5 border border-[#C8A96B]/30">
                    Plus Code: H3R6+43 Delhi
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-full bg-[#0B0B0B] border border-[#C8A96B]/40 flex items-center justify-center text-[#C8A96B] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-[#C8A96B] block mb-1 font-medium">
                    Sanctuary Hours
                  </span>
                  <div className="inline-flex items-center space-x-2 bg-[#C8A96B]/15 px-3 py-1 border border-[#C8A96B]/40">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-sans text-xs font-semibold text-[#FAF8F3] uppercase tracking-wider">
                      OPEN 24 HOURS (MON — SUN)
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-full bg-[#0B0B0B] border border-[#C8A96B]/40 flex items-center justify-center text-[#C8A96B] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-widest text-[#C8A96B] block mb-1 font-medium">
                    Website & Official Services
                  </span>
                  <a
                    href="https://theroyalspa.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-base text-[#FAF8F3] hover:text-[#C8A96B] transition-colors block"
                  >
                    theroyalspa.in
                  </a>
                  <a
                    href="mailto:services@theroyalspa.in"
                    className="font-sans text-xs text-[#FAF8F3]/70 hover:text-[#C8A96B] transition-colors block mt-0.5"
                  >
                    services@theroyalspa.in
                  </a>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-[#1F1F1F]">
              <a
                href="https://maps.google.com/?q=Sector+6+Dwarka+Delhi+110075"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#C8A96B] hover:bg-[#D8C08A] text-[#0B0B0B] font-sans text-xs uppercase tracking-widest font-bold text-center flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href="https://wa.me/?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20private%20sanctuary%20ritual%20at%20The%20Royal%20Massage%20Spa%20Dwarka%20Delhi."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 border border-[#C8A96B]/50 hover:bg-[#C8A96B]/10 text-[#FAF8F3] hover:text-[#C8A96B] font-sans text-xs uppercase tracking-widest font-semibold text-center flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WHATSAPP US</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Visual Column */}
          <div className="lg:col-span-7 relative min-h-[380px] bg-[#151515] border border-[#C8A96B]/30 overflow-hidden group">
            
            {/* Google Map centered on Sector 6 Dwarka Delhi 110075 */}
            <iframe
              title="The Royal Massage Spa Dwarka Delhi Location Map"
              src="https://maps.google.com/maps?q=Sector%206%20Dwarka%20Central%20Market%20Delhi%20110075&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px] border-0 filter invert-[90%] hue-rotate-180 contrast-125 opacity-80 group-hover:opacity-95 transition-opacity"
              loading="lazy"
            />

            {/* Dark overlay badge */}
            <div className="absolute top-4 left-4 bg-[#0B0B0B]/90 backdrop-blur-md p-3.5 border border-[#C8A96B]/40 max-w-xs pointer-events-none">
              <span className="font-serif text-sm text-[#C8A96B] tracking-wider uppercase block">
                SECTOR 6 DWARKA, DELHI
              </span>
              <span className="font-sans text-[11px] text-[#FAF8F3]/80 block mt-1">
                Central Market • Open 24 Hours • Jacuzzi & Sauna
              </span>
            </div>

          </div>

        </div>

        {/* Sanctuary Inquiries FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-sans text-xs tracking-[0.3em] text-[#C8A96B] uppercase font-semibold">
              SANCTUARY PROTOCOLS & INQUIRIES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F3] uppercase mt-1">
              FREQUENTLY ASKED QUESTIONS
            </h3>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#1F1F1F] bg-[#151515]/60 hover:border-[#C8A96B]/40 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-serif text-base sm:text-lg text-[#FAF8F3] font-normal">
                      {faq.q}
                    </span>
                    <div className="w-6 h-6 rounded-full border border-[#C8A96B]/30 flex items-center justify-center text-[#C8A96B] shrink-0">
                      {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm font-sans text-[#F4F0E8]/75 font-light leading-relaxed border-t border-[#1F1F1F]">
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
