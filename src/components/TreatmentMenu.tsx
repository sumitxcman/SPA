import React, { useState } from 'react';
import { TREATMENTS_DATA, Treatment } from '../data/spaData';
import { Clock, Sparkles, Plus, ArrowUpRight, Check } from 'lucide-react';

interface TreatmentMenuProps {
  onOpenBooking: (treatmentName: string) => void;
}

export const TreatmentMenu: React.FC<TreatmentMenuProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'massages' | 'rituals'>('massages');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredTreatments = TREATMENTS_DATA.filter((t) => t.category === activeTab);

  return (
    <section id="treatments" className="relative py-28 md:py-36 bg-[#F4F0E8] text-[#0B0B0B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <span className="h-[1px] w-6 bg-[#C8A96B]" />
            <span className="font-sans text-xs tracking-[0.35em] text-[#9B7E44] font-semibold uppercase">
              TREATMENT ATELIER
            </span>
            <span className="h-[1px] w-6 bg-[#C8A96B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#0B0B0B] uppercase">
            THE TREATMENT <span className="italic text-[#9B7E44]">MENU</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#0B0B0B]/70 font-light mt-4">
            Each bespoke modality is customized with cold-pressed rare botanicals and choreographed pressure to restore physical homeostasis.
          </p>

          {/* Category Switcher Tabs */}
          <div className="inline-flex p-1.5 bg-[#E2DBD0] mt-8 rounded-none border border-[#C8A96B]/30">
            <button
              onClick={() => setActiveTab('massages')}
              className={`px-6 py-2.5 font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                activeTab === 'massages'
                  ? 'bg-[#0B0B0B] text-[#FAF8F3] shadow-md'
                  : 'text-[#0B0B0B]/70 hover:text-[#0B0B0B]'
              }`}
            >
              SIGNATURE MASSAGES
            </button>
            <button
              onClick={() => setActiveTab('rituals')}
              className={`px-6 py-2.5 font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                activeTab === 'rituals'
                  ? 'bg-[#0B0B0B] text-[#FAF8F3] shadow-md'
                  : 'text-[#0B0B0B]/70 hover:text-[#0B0B0B]'
              }`}
            >
              WELLNESS RITUALS
            </button>
          </div>
        </div>

        {/* Editorial Menu List Layout (Not basic cards) */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredTreatments.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="group border-b border-[#0B0B0B]/15 pb-6 transition-all duration-300 hover:border-[#9B7E44]"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-6 cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                >
                  <div className="flex items-baseline space-x-4">
                    <span className="font-serif text-xs text-[#9B7E44] font-medium tracking-widest">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#0B0B0B] uppercase group-hover:text-[#9B7E44] transition-colors">
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#0B0B0B]/60 italic font-normal mt-0.5">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Pricing & Duration */}
                  <div className="flex items-center space-x-6 shrink-0 mt-2 md:mt-0">
                    <span className="font-sans text-xs uppercase tracking-widest text-[#0B0B0B]/70 flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#9B7E44]" />
                      <span>{item.duration}</span>
                    </span>

                    <span className="font-serif text-xl sm:text-2xl text-[#0B0B0B] font-semibold min-w-[90px] text-right">
                      {item.price}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenBooking(item.name);
                      }}
                      data-cursor="book"
                      className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 bg-[#0B0B0B] hover:bg-[#9B7E44] text-[#FAF8F3] text-xs font-sans uppercase tracking-widest font-semibold transition-colors duration-200 cursor-pointer"
                    >
                      <span>RESERVE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Body / Description */}
                <div className="mt-3 pl-8 md:pl-9 pr-4">
                  <p className="font-sans text-xs sm:text-sm text-[#0B0B0B]/80 font-light leading-relaxed max-w-2xl">
                    {item.description}
                  </p>

                  {/* Scents & Key Benefits */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.scents.map((scent, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 bg-[#E2DBD0] text-[#0B0B0B] text-[11px] font-sans tracking-wide rounded-none"
                      >
                        {scent}
                      </span>
                    ))}
                  </div>

                  {/* Mobile Reserve button */}
                  <button
                    onClick={() => onOpenBooking(item.name)}
                    className="sm:hidden mt-4 w-full py-2.5 bg-[#0B0B0B] text-[#FAF8F3] text-xs font-sans uppercase tracking-widest font-semibold"
                  >
                    RESERVE THIS TREATMENT
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="font-serif italic text-sm text-[#0B0B0B]/60">
            * All treatments include access to the thermal steam lounge, cold herbal infusions, and personalized aroma selection.
          </p>
        </div>

      </div>
    </section>
  );
};
