import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/spaData';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export const InteriorShowcase: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="sanctuary" className="relative py-20 sm:py-28 md:py-36 bg-[#121212] text-[#FFFFFF] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="font-sans text-xs tracking-[0.35em] text-[#FBE8A6] font-semibold uppercase">
                SANCTUARY ARCHITECTURE
              </span>
              <span className="h-[1px] w-8 bg-[#FBE8A6]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#FFFFFF] uppercase">
              SANCTUARY <span className="italic text-[#FBE8A6]">INTERIORS</span>
            </h2>
          </div>
          
          <p className="font-sans text-xs sm:text-sm text-[#FFFFFF]/75 max-w-sm font-light">
            Jacuzzi pools, herbal sauna, marble eucalyptus steam, and private suites in Sector 6 Dwarka.
          </p>
        </div>
      </div>

      {/* Expanded 8-Image Editorial Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              data-cursor="view"
              className={`group relative overflow-hidden bg-[#0B0B0B] border border-[#FBE8A6]/25 hover:border-[#FBE8A6]/80 transition-all duration-500 cursor-pointer shadow-xl ${
                item.aspect.includes('md:col-span-2') ? 'sm:col-span-2' : 'col-span-1'
              }`}
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 bg-[#0B0B0B]/90 backdrop-blur-sm px-2.5 py-0.5 border border-[#FBE8A6]/40">
                  <span className="font-sans text-[10px] tracking-widest text-[#FBE8A6] uppercase font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* Caption Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-[#FFFFFF] uppercase leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[11px] text-[#FFFFFF]/75 font-light mt-0.5 line-clamp-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-[#FBE8A6]/50 bg-[#0B0B0B]/90 flex items-center justify-center text-[#FBE8A6] group-hover:border-[#FBE8A6] group-hover:bg-[#FBE8A6] group-hover:text-[#0B0B0B] transition-all shrink-0 ml-2">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0B]/95 backdrop-blur-xl p-3 sm:p-8 animate-fade-in"
        >
          {/* Close Lightbox */}
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[#FFFFFF]/80 hover:text-[#FBE8A6] z-50 cursor-pointer"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            aria-label="Previous Image"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 text-[#FFFFFF] hover:text-[#0B0B0B] bg-[#151515]/80 hover:bg-[#FBE8A6] border border-[#FBE8A6]/40 rounded-full z-50 cursor-pointer transition-all"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            aria-label="Next Image"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 text-[#FFFFFF] hover:text-[#0B0B0B] bg-[#151515]/80 hover:bg-[#FBE8A6] border border-[#FBE8A6]/40 rounded-full z-50 cursor-pointer transition-all"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
          >
            <img
              src={GALLERY_ITEMS[activeLightboxIndex].image}
              alt={GALLERY_ITEMS[activeLightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain shadow-2xl border border-[#FBE8A6]/40"
            />
            
            <div className="mt-3 text-center">
              <span className="font-sans text-[11px] tracking-[0.25em] text-[#FBE8A6] uppercase font-bold">
                {GALLERY_ITEMS[activeLightboxIndex].category} ({activeLightboxIndex + 1}/{GALLERY_ITEMS.length})
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-[#FFFFFF] uppercase mt-0.5">
                {GALLERY_ITEMS[activeLightboxIndex].title}
              </h4>
              <p className="font-sans text-xs text-[#FFFFFF]/80 max-w-md mx-auto mt-0.5">
                {GALLERY_ITEMS[activeLightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
