import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/clinicData';
import { GalleryArtSuite } from './illustrations/GalleryIllustrations';
import { Maximize2, X, Sparkles, Building2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = ['All', 'Clinic & Ambience', 'Consultation', 'Aesthetics', 'Care Protocols'];

  const filteredItems = selectedFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedFilter);

  return (
    <section id="gallery" className="py-20 lg:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 lg:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A5B63]">
            <span>Clinic Atmosphere</span>
            <span aria-hidden="true" className="text-[#D3C1BE]">·</span>
            <span>Rosevill Sky, Ahmedabad</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#271E20] tracking-tight">
            Inside SKINIC
          </h2>
          <p className="text-sm sm:text-base text-[#5B4F52] leading-relaxed">
            Take a visual tour of our calm, pristine clinical and consultation spaces designed to ensure confidentiality, hygiene, and patient comfort.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedFilter(opt)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedFilter === opt
                  ? 'bg-[#5E2E3B] text-white shadow-xs'
                  : 'bg-white text-[#5E5155] border border-[#ECD9D4] hover:bg-[#FAF4F2]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-white rounded-2xl border border-[#ECD9D4] overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-4/3 bg-[#FAF5F2]">
                <GalleryArtSuite variant={item.id} className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-white/90 text-[#5E2E3B] flex items-center justify-center shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-4.5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-semibold text-[#5E2E3B] uppercase tracking-wider">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-base font-bold text-[#271E20] group-hover:text-[#5E2E3B] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#6C5E62] leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#7A6F72]">
            * In strict alignment with medical ethics, we do not showcase simulated patient photographs or unverified before-and-after claims.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#ECD9D4]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-[#F0E4E0] bg-[#FAF8F6]">
              <div>
                <p className="text-xs font-semibold text-[#5E2E3B]">{selectedItem.category}</p>
                <h3 className="font-serif text-lg font-bold text-[#271E20]">{selectedItem.title}</h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close dialog"
                className="p-1 rounded-lg text-[#7A6F72] hover:bg-[#F2E5E1] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="rounded-xl overflow-hidden border border-[#ECD9D4] mb-4">
                <GalleryArtSuite variant={selectedItem.id} className="w-full h-64" />
              </div>
              <p className="text-sm text-[#55474B] leading-relaxed">
                {selectedItem.description}
              </p>
              <div className="mt-4 pt-3 border-t border-[#F0E4E0] flex items-center justify-between text-xs text-[#7A6F72]">
                <span>SKINIC – Dr. Arti Patel</span>
                <span>Rosevill Sky, Nikol–Naroda Rd, Ahmedabad</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
