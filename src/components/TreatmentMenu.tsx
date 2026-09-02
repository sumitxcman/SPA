import React, { useState } from 'react';
import { TREATMENTS_DATA } from '../data/spaData';
import { Clock, ArrowUpRight } from 'lucide-react';

interface TreatmentMenuProps {
  onOpenBooking: (treatmentName: string) => void;
}

export const TreatmentMenu: React.FC<TreatmentMenuProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'massages' | 'rituals'>('massages');

  const filteredTreatments = TREATMENTS_DATA.filter((t) => t.category === activeTab);

  return (
    <section id="treatments" className="relative py-20 sm:py-28 md:py-36 bg-[#FFFFFF] text-[#0B0B0B] overflow-hidden border-t border-[#0B0B0B]/10">
      
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C8A96B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <span className="h-[1px] w-6 bg-[#9B7E44]" />
            <span className="font-sans text-xs tracking-[0.35em] text-[#9B7E44] font-bold uppercase">
              TREATMENT ATELIER
            </span>
            <span className="h-[1px] w-6 bg-[#9B7E44]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#0B0B0B] uppercase">
            THE TREATMENT <span className="italic text-[#9B7E44]">MENU</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#4A4A4A] font-light mt-2">
            Cold-pressed rare botanicals, calibrated pressure, and private suite tranquility.
          </p>

          {/* Category Switcher Tabs */}
          <div className="inline-flex p-1.5 bg-[#F4F0E8] mt-6 rounded-none border border-[#C8A96B]/40 shadow-sm">
            <button
              onClick={() => setActiveTab('massages')}
              className={`px-5 sm:px-7 py-2.5 font-sans text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'massages'
                  ? 'bg-[#0B0B0B] text-[#FFFFFF] shadow-md'
                  : 'text-[#0B0B0B]/70 hover:text-[#0B0B0B]'
              }`}
            >
              SIGNATURE MASSAGES
            </button>
            <button
              onClick={() => setActiveTab('rituals')}
              className={`px-5 sm:px-7 py-2.5 font-sans text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'rituals'
                  ? 'bg-[#0B0B0B] text-[#FFFFFF] shadow-md'
                  : 'text-[#0B0B0B]/70 hover:text-[#0B0B0B]'
              }`}
            >
              WELLNESS RITUALS
            </button>
          </div>
        </div>

        {/* Visual Editorial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredTreatments.map((item, index) => (
            <div
              key={item.id}
              className="group bg-[#FAF8F3] border border-[#0B0B0B]/10 hover:border-[#9B7E44] transition-all duration-300 overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-xl"
            >
              {/* Treatment Image Thumbnail */}
              <div className="relative w-full sm:w-44 h-44 sm:h-auto shrink-0 overflow-hidden" data-cursor="view">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 bg-[#0B0B0B] text-[#FBE8A6] font-serif text-xs px-2 py-0.5 border border-[#C8A96B]/50 font-bold shadow-md">
                  0{index + 1}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#0B0B0B] uppercase group-hover:text-[#9B7E44] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <span className="font-serif text-lg font-bold text-[#9B7E44] shrink-0">
                      {item.price}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-[#4A4A4A] font-light line-clamp-2 mb-3">
                    {item.description}
                  </p>

                  {/* Scents / Benefits Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.benefits.slice(0, 2).map((benefit, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2 py-0.5 bg-[#EAE5D9] text-[#0B0B0B] text-[10px] font-sans tracking-wide font-medium"
                      >
                        ✓ {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between pt-2.5 border-t border-[#0B0B0B]/10">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#555555] flex items-center space-x-1 font-medium">
                    <Clock className="w-3 h-3 text-[#9B7E44]" />
                    <span>{item.duration}</span>
                  </span>

                  <button
                    onClick={() => onOpenBooking(item.name)}
                    data-cursor="book"
                    className="inline-flex items-center space-x-1 px-3.5 py-1.5 bg-[#0B0B0B] hover:bg-[#9B7E44] text-[#FFFFFF] text-[11px] font-sans uppercase tracking-widest font-bold transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    <span>RESERVE</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-10">
          <p className="font-serif italic text-xs sm:text-sm text-[#9B7E44] font-medium">
            * All treatments include complimentary access to the thermal Jacuzzi, Sauna, and Steam lounge.
          </p>
        </div>

      </div>
    </section>
  );
};
