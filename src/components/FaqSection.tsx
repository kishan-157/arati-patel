import React, { useState } from 'react';
import { FAQS, CLINIC_INFO } from '../data/clinicData';
import { Plus, Minus, Star } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-[#FFFCF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Accordions, Avatar Pill & Stars */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-4xl xl:text-[42px] font-bold text-[#0A3366] capitalize mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-[#566593] font-light">
                Clear guidance to help you prepare for your skin, hair, or aesthetic consultation with Dr. Arti Patel at SKINIC in New Naroda, Ahmedabad.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3.5">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl overflow-hidden border border-black/5 transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className={`w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg transition-colors cursor-pointer ${
                        isOpen
                          ? 'bg-[#0A3366] text-white'
                          : 'bg-[#FDF5E8] text-[#0A3366] hover:bg-[#faebd4]'
                      }`}
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-white/15 text-white'
                            : 'bg-white text-[#F46700]'
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="p-6 bg-white text-sm sm:text-base text-[#566593] leading-relaxed border-x border-b border-black/5 rounded-b-2xl">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Avatar Pill + Google Star Rating */}
            <div className="pt-3 flex flex-wrap items-center gap-6">
              <div className="rounded-full inline-flex items-center py-2 pl-3 pr-6 border border-[#0A3366]">
                <div className="flex pr-4 mr-4 border-r border-black/10">
                  {['/images/avatar/small/avatar1.webp', '/images/avatar/small/avatar2.webp', '/images/avatar/small/avatar3.webp', '/images/avatar/small/avatar4.webp'].map(
                    (src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt="Patient"
                        className="w-10 h-10 rounded-full border-2 border-white -ml-3 first:ml-0 object-cover"
                      />
                    )
                  )}
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#0A3366]">
                  SKINIC – Dr. Arti Patel
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-sm font-medium">
                <div className="flex gap-0.5 text-[#F46700]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-[#0A3366]">(4.8)</span>
                <a
                  href={CLINIC_INFO.googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-[#566593] hover:text-[#F46700]"
                >
                  SKINIC – Dr. Arti Patel • Google
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Large Portrait Image (/images/about/img4.webp) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl relative overflow-hidden shadow-xl">
              <img
                src="/images/about/img4.webp"
                alt="Frequently Asked Questions Skincare"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
