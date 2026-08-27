import React from 'react';
import { Sparkles, Flower2, Award } from 'lucide-react';

export const EditorialPhilosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="relative py-28 md:py-36 bg-[#F4F0E8] text-[#0B0B0B] overflow-hidden"
    >
      {/* Subtle Luxury Pattern/Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0B0B0B_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="font-sans text-xs tracking-[0.35em] text-[#C8A96B] font-semibold uppercase">
            01 — THE PHILOSOPHY
          </span>
          <span className="h-[1px] w-12 bg-[#C8A96B]" />
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Massive Statement */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] text-[#0B0B0B] tracking-tight uppercase">
              “REST IS NOT <br />
              <span className="italic font-normal text-[#9B7E44]">A LUXURY.</span> <br />
              IT IS AN ART.”
            </h2>

            <div className="h-[2px] w-24 bg-[#C8A96B]/50" />

            {/* Overlapping Luxury Detail Card */}
            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#0B0B0B]/10">
              <div>
                <span className="font-serif text-3xl md:text-4xl text-[#0B0B0B] font-light block">
                  100%
                </span>
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#0B0B0B]/70 block mt-1">
                  Private Sanctuary Suites
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-[#9B7E44] font-light block">
                  Imperial
                </span>
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#0B0B0B]/70 block mt-1">
                  Rare Terroir Botanicals
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated Paragraph & Overlapping Image */}
          <div className="lg:col-span-6 space-y-8">
            
            <p className="font-serif text-xl sm:text-2xl text-[#151515] leading-relaxed font-normal">
              The Royal Massage Spa was conceived not as a conventional salon, but as a consecrated escape for those who understand that human performance and peace are inseparable.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#0B0B0B]/75 leading-relaxed font-light">
              Within our acoustically insulated suites, the chaotic frequency of modern life ceases. Every session is choreographed by master somatic artisans using single-estate cold-pressed botanical oils, volcanic basalt stones, and rhythmic pressure calibrated directly to your physiological needs.
            </p>

            {/* Image partially overlapping text layout */}
            <div className="relative mt-10 pt-4" data-cursor="view">
              <div className="relative z-10 overflow-hidden shadow-2xl border-4 border-[#FAF8F3]">
                <img
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop"
                  alt="The Royal Spa Holistic Experience"
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Accent Floating Luxury Box */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center space-x-3 bg-[#0B0B0B] text-[#FAF8F3] p-5 shadow-2xl z-20 border border-[#C8A96B]/30 max-w-xs">
                <Flower2 className="w-8 h-8 text-[#C8A96B] shrink-0" />
                <div>
                  <span className="font-serif text-sm tracking-wider uppercase block text-[#C8A96B]">
                    SOVEREIGN STILLNESS
                  </span>
                  <span className="font-sans text-[10px] text-[#FAF8F3]/70 uppercase tracking-widest block">
                    Curated Olfactory Atmosphere
                  </span>
                </div>
              </div>

              {/* Decorative Gold Frame Offset */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#C8A96B]/30 -z-0 pointer-events-none hidden sm:block" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
