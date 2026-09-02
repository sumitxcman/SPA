import React from 'react';
import { Sparkles, Flower2, Award, ShieldCheck, Flame, Droplets } from 'lucide-react';

export const EditorialPhilosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="relative py-20 sm:py-28 md:py-36 bg-[#F4F0E8] text-[#0B0B0B] overflow-hidden"
    >
      {/* Subtle Luxury Pattern/Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0B0B0B_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-8 sm:mb-12">
          <span className="font-sans text-xs tracking-[0.35em] text-[#C8A96B] font-semibold uppercase">
            01 — THE PHILOSOPHY
          </span>
          <span className="h-[1px] w-12 bg-[#C8A96B]" />
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Massive Statement & Crisp Highlights */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light leading-[1.1] text-[#0B0B0B] tracking-tight uppercase">
              “REST IS NOT <br />
              <span className="italic font-normal text-[#9B7E44]">A LUXURY.</span> <br />
              IT IS AN ART.”
            </h2>

            <p className="font-serif text-lg sm:text-xl text-[#151515] leading-relaxed font-normal">
              A private 5-star sanctuary where chaotic city noise ceases and sovereign peace begins.
            </p>

            <div className="h-[2px] w-20 bg-[#C8A96B]/50" />

            {/* Micro Feature Tags */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#0B0B0B]/10">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#E2DBD0] flex items-center justify-center text-[#9B7E44] shrink-0">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-wider text-[#0B0B0B] font-semibold block">
                    Jacuzzi & Sauna
                  </span>
                  <span className="font-sans text-[10px] text-[#0B0B0B]/60 uppercase tracking-widest block">
                    Thermal Hydrotherapy
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#E2DBD0] flex items-center justify-center text-[#9B7E44] shrink-0">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-wider text-[#0B0B0B] font-semibold block">
                    Organic Terroir Oils
                  </span>
                  <span className="font-sans text-[10px] text-[#0B0B0B]/60 uppercase tracking-widest block">
                    Cold-Pressed Pure
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Rich Dual-Image Luxury Composition */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-cursor="view">
              
              {/* Image 1: Main Suite View */}
              <div className="relative group overflow-hidden border-2 border-[#FAF8F3] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop"
                  alt="The Royal Spa Holistic Experience"
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-[10px] font-sans tracking-widest uppercase text-[#FAF8F3] bg-[#0B0B0B]/80 px-2 py-0.5 border border-[#C8A96B]/30">
                  PRIVATE SUITES
                </span>
              </div>

              {/* Image 2: Hot Basalt & Floral Aromatics */}
              <div className="relative group overflow-hidden border-2 border-[#FAF8F3] shadow-2xl sm:translate-y-6">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
                  alt="Volcanic Stone Therapy"
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-[10px] font-sans tracking-widest uppercase text-[#FAF8F3] bg-[#0B0B0B]/80 px-2 py-0.5 border border-[#C8A96B]/30">
                  VOLCANIC STONES
                </span>
              </div>

            </div>

            {/* Decorative Gold Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center space-x-3 bg-[#0B0B0B] text-[#FAF8F3] p-4 shadow-2xl z-20 border border-[#C8A96B]/40 max-w-xs">
              <Flower2 className="w-6 h-6 text-[#C8A96B] shrink-0" />
              <div>
                <span className="font-serif text-xs tracking-wider uppercase block text-[#C8A96B]">
                  ALL-INCLUSIVE SANCTUARY
                </span>
                <span className="font-sans text-[9px] text-[#FAF8F3]/70 uppercase tracking-widest block">
                  Jacuzzi • Sauna • Steam • Aromatherapy
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
