import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/spaData';
import { X, ZoomIn, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

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
    <section id="sanctuary" className="relative py-28 md:py-36 bg-[#151515] text-[#FAF8F3] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="font-sans text-xs tracking-[0.35em] text-[#C8A96B] font-medium uppercase">
                THE ARCHITECTURE OF TRANQUILITY
              </span>
              <span className="h-[1px] w-8 bg-[#C8A96B]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#FAF8F3] uppercase">
              SANCTUARY <span className="italic text-[#C8A96B]">INTERIORS</span>
            </h2>
          </div>
          
          <p className="font-sans text-xs sm:text-sm text-[#F4F0E8]/70 max-w-md font-light">
            Hand-chiseled Nero Marquina marble, acoustic cedar paneling, and warm candlelight designed to induce effortless neurological serenity.
          </p>
        </div>
      </div>

      {/* Editorial Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              data-cursor="view"
              className={`group relative overflow-hidden bg-[#0B0B0B] border border-[#C8A96B]/20 hover:border-[#C8A96B]/60 transition-all duration-500 cursor-pointer shadow-xl ${item.aspect}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 sm:h-96 md:h-full min-h-[300px] object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Caption Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div>
                  <span className="font-sans text-[10px] tracking-[0.25em] text-[#C8A96B] uppercase block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F3] uppercase">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#F4F0E8]/70 font-light mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.description}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full border border-[#C8A96B]/40 bg-[#0B0B0B]/80 flex items-center justify-center text-[#C8A96B] group-hover:border-[#C8A96B] transition-colors shrink-0 ml-4">
                  <ZoomIn className="w-4 h-4" />
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0B]/95 backdrop-blur-xl p-4 sm:p-8 animate-fade-in"
        >
          {/* Close Lightbox */}
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 p-3 text-[#FAF8F3]/80 hover:text-[#C8A96B] z-50 cursor-pointer"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-[#FAF8F3]/80 hover:text-[#C8A96B] bg-[#151515]/60 hover:bg-[#151515] border border-[#C8A96B]/30 rounded-full z-50 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-[#FAF8F3]/80 hover:text-[#C8A96B] bg-[#151515]/60 hover:bg-[#151515] border border-[#C8A96B]/30 rounded-full z-50 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
          >
            <img
              src={GALLERY_ITEMS[activeLightboxIndex].image}
              alt={GALLERY_ITEMS[activeLightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain shadow-2xl border border-[#C8A96B]/30"
            />
            
            <div className="mt-4 text-center">
              <span className="font-sans text-xs tracking-[0.25em] text-[#C8A96B] uppercase font-medium">
                {GALLERY_ITEMS[activeLightboxIndex].category}
              </span>
              <h4 className="font-serif text-2xl text-[#FAF8F3] uppercase mt-1">
                {GALLERY_ITEMS[activeLightboxIndex].title}
              </h4>
              <p className="font-sans text-xs text-[#F4F0E8]/70 max-w-md mx-auto mt-1">
                {GALLERY_ITEMS[activeLightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
