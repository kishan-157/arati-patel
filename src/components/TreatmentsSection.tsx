import React, { useState } from 'react';
import {
  Calendar,
  Check,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatmentTitle: string) => void;
}

const ACCORDION_SERVICES = [
  {
    id: '01',
    title: 'Cosmetic Dermatology',
    image: '/images/services/middle/img1.webp',
    description:
      'Personalised aesthetic and cosmetic dermatology care by Dr. Arti Patel designed to restore skin luminosity, refine texture, and support healthy skin barrier function.',
    points: [
      'Personalized Skin Assessment',
      'Modern Clinical Infrastructure',
      'Barrier-Safe Formulations',
      'Cosmetic & Aesthetic Care',
    ],
  },
  {
    id: '02',
    title: 'Dermatologic Surgery',
    image: '/images/services/middle/img2.webp',
    description:
      'Targeted clinical dermatological procedures for acne scars, skin tags, warts, mole evaluation, and minor dermatologic interventions in a sterile setting.',
    points: [
      'Acne Scar Revision Care',
      'Sterile Procedure Suite',
      'Minimal Downtime Protocols',
      'Post-Procedure Guidance',
    ],
  },
  {
    id: '03',
    title: 'Earlobe Repair',
    image: '/images/services/middle/img3.webp',
    description:
      'Precision cosmetic earlobe repair and pigmentation correction treatments performed with delicate clinical care and attentive follow-up.',
    points: [
      'Precision Earlobe Repair',
      'Pigmentation & Melasma Care',
      'Comfort-First Local Care',
      'Natural Aesthetic Harmony',
    ],
  },
  {
    id: '04',
    title: 'Laser Resurfacing',
    image: '/images/services/middle/img4.webp',
    description:
      'Advanced doctor-supervised laser hair reduction and skin resurfacing consultations tailored to Indian skin tones for smooth, even-toned results.',
    points: [
      'Laser Hair Reduction',
      'Skin Tone & Texture Care',
      'Customized Energy Settings',
      'Safe Fitzpatrick Protocols',
    ],
  },
  {
    id: '05',
    title: 'Anti Aging',
    image: '/images/services/middle/img5.webp',
    description:
      'Non-invasive age-defying skin rejuvenation, collagen preservation, medi-facials, and fine-line management tailored to your individual skin goals.',
    points: [
      'Collagen Support Regimens',
      'Signature Medi-Facials',
      'Fine Line & Firmness Care',
      'Long-Term Skin Vitality',
    ],
  },
];

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatment,
}) => {
  const [activeServiceIdx, setActiveServiceIdx] = useState<number>(0);
  const [slider1Pos, setSlider1Pos] = useState<number>(50);
  const [slider2Pos, setSlider2Pos] = useState<number>(50);

  return (
    <>
      {/* ==================== BLOCK 3: HORIZONTAL EXPANDING ACCORDION SERVICES ==================== */}
      <section id="services" className="pt-16 lg:pt-24 pb-12 bg-[#FDF5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-4xl xl:text-[44px] font-bold text-[#0A3366] capitalize leading-tight mb-3">
              Transform Your Skin with Our Advanced Dermatology Treatments
            </h2>
            <p className="text-sm sm:text-base xl:text-lg text-[#566593] font-light">
              Experience a transformative skincare journey tailored to your individual skin, hair, and aesthetic goals at SKINIC – Dr. Arti Patel.
            </p>
          </div>

          {/* Horizontal Accordion Flex Wrapper */}
          <div className="flex flex-col lg:flex-row gap-4 min-h-[460px]">
            {ACCORDION_SERVICES.map((service, idx) => {
              const isActive = activeServiceIdx === idx;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceIdx(idx)}
                  className={`relative rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${
                    isActive
                      ? 'lg:flex-[1_1_auto] bg-white shadow-[0_15px_40px_rgba(10,51,102,0.08)]'
                      : 'lg:w-24 xl:w-28 lg:flex-[0_0_105px] bg-[#0A3366]'
                  }`}
                >
                  {/* Collapsed Tab State (Visible on Desktop when not active, or header bar on mobile) */}
                  {!isActive ? (
                    <div
                      className="h-20 lg:h-full w-full p-4 lg:py-7 flex lg:flex-col justify-between items-center relative bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    >
                      <div className="absolute inset-0 bg-[#0A3366]/75" />
                      <span className="relative z-10 w-11 h-11 rounded-full bg-white text-[#0A3366] flex items-center justify-center shadow-md hover:bg-[#F46700] hover:text-white transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                      <h3 className="relative z-10 text-white font-medium text-lg xl:text-xl lg:writing-vertical lg:rotate-180 tracking-wide">
                        {service.title}
                      </h3>
                      <span className="relative z-10 text-3xl lg:text-5xl font-bold text-white/15">
                        {service.id}
                      </span>
                    </div>
                  ) : (
                    /* Expanded Active Card State */
                    <div className="relative p-5 sm:p-7 h-full flex flex-col md:flex-row gap-6 lg:gap-8 items-stretch bg-white">
                      {/* Faded Giant Number in Top-Right */}
                      <span className="hidden sm:block text-[110px] xl:text-[140px] leading-none font-bold text-[#0A3366]/5 absolute right-5 top-3 pointer-events-none select-none">
                        {service.id}
                      </span>

                      {/* Service Image + Floating Book Button */}
                      <div className="w-full md:w-64 xl:w-72 shrink-0 h-72 sm:h-96 md:h-auto relative overflow-hidden rounded-2xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectTreatment(service.title);
                          }}
                          className="absolute bottom-4 left-4 right-4 py-3 px-4 bg-white hover:bg-[#F46700] text-[#0A3366] hover:text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer group"
                        >
                          <Calendar className="w-4 h-4 text-[#F46700] group-hover:text-white" />
                          <span>Book An appointment</span>
                        </button>
                      </div>

                      {/* Service Details + Checkmarks + Doctor Footer */}
                      <div className="flex-1 flex flex-col justify-between py-2 relative z-10">
                        <div>
                          <h3 className="text-2xl xl:text-3xl font-bold text-[#0A3366] mb-3">
                            {service.title}
                          </h3>
                          <p className="text-sm sm:text-base text-[#566593] leading-relaxed mb-6">
                            {service.description}
                          </p>

                          <ul className="space-y-2.5 mb-6">
                            {service.points.map((pt, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-3 text-sm sm:text-base font-medium text-[#0A3366]"
                              >
                                <span className="w-5 h-5 rounded-full bg-[#F46700]/15 text-[#F46700] flex items-center justify-center shrink-0">
                                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                                </span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Bottom Specialist Mini-Bar */}
                        <div className="pt-4 border-t border-black/10 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3.5">
                            <img
                              src="/images/avatar/middle/avatar1.webp"
                              alt="SKINIC – Dr. Arti Patel"
                              className="w-13 h-13 rounded-full object-cover border-2 border-[#F46700]/20"
                            />
                            <div>
                              <h4 className="text-base font-bold text-[#0A3366]">
                                SKINIC – Dr. Arti Patel
                              </h4>
                              <span className="text-xs text-[#F46700] font-medium block">
                                Dermatology, Skin Care & Cosmetology
                              </span>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectTreatment(service.title);
                            }}
                            aria-label={`Book ${service.title}`}
                            className="w-12 h-12 rounded-full bg-[#FDF5E8] hover:bg-[#F46700] text-[#0A3366] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <ArrowUpRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== BLOCK 4: AFTER TREATMENT (BEFORE & AFTER SLIDERS) ==================== */}
      <section
        id="results"
        className="pt-14 pb-12 bg-[#FDF5E8] relative after:bg-[#FFFCF8] after:h-36 after:w-full after:absolute after:bottom-0 after:left-0 after:z-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-4xl xl:text-[44px] font-bold text-[#0A3366] capitalize">
              After Treatment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {/* Before / After Slider 1 */}
            <div className="relative overflow-hidden h-[360px] sm:h-[480px] rounded-3xl shadow-xl select-none">
              <img
                src="/images/compare/after1.webp"
                alt="After skincare treatment 1"
                className="w-full h-full object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{
                  clipPath: `polygon(0 0, ${slider1Pos}% 0, ${slider1Pos}% 100%, 0% 100%)`,
                }}
              >
                <img
                  src="/images/compare/before1.webp"
                  alt="Before skincare treatment 1"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Vertical BEFORE & AFTER glass labels */}
              <span className="absolute top-1/2 left-5 -translate-y-1/2 z-20 px-2.5 py-5 bg-white/25 backdrop-blur-xs text-white rounded-lg writing-vertical rotate-180 text-xs font-semibold tracking-widest pointer-events-none">
                BEFORE
              </span>
              <span className="absolute top-1/2 right-5 -translate-y-1/2 z-20 px-2.5 py-5 bg-white/25 backdrop-blur-xs text-white rounded-lg writing-vertical rotate-180 text-xs font-semibold tracking-widest pointer-events-none">
                AFTER
              </span>

              {/* Divider Line & Caret Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white -translate-x-1/2 pointer-events-none z-20"
                style={{ left: `${slider1Pos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 text-white drop-shadow-md">
                  <ChevronLeft className="w-7 h-7 -mr-2 stroke-[3]" />
                  <ChevronRight className="w-7 h-7 -ml-2 stroke-[3]" />
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={slider1Pos}
                onChange={(e) => setSlider1Pos(Number(e.target.value))}
                aria-label="Compare before and after treatment 1"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />
            </div>

            {/* Before / After Slider 2 */}
            <div className="relative overflow-hidden h-[360px] sm:h-[480px] rounded-3xl shadow-xl select-none">
              <img
                src="/images/compare/after2.webp"
                alt="After skincare treatment 2"
                className="w-full h-full object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{
                  clipPath: `polygon(0 0, ${slider2Pos}% 0, ${slider2Pos}% 100%, 0% 100%)`,
                }}
              >
                <img
                  src="/images/compare/before2.webp"
                  alt="Before skincare treatment 2"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Vertical BEFORE & AFTER glass labels */}
              <span className="absolute top-1/2 left-5 -translate-y-1/2 z-20 px-2.5 py-5 bg-white/25 backdrop-blur-xs text-white rounded-lg writing-vertical rotate-180 text-xs font-semibold tracking-widest pointer-events-none">
                BEFORE
              </span>
              <span className="absolute top-1/2 right-5 -translate-y-1/2 z-20 px-2.5 py-5 bg-white/25 backdrop-blur-xs text-white rounded-lg writing-vertical rotate-180 text-xs font-semibold tracking-widest pointer-events-none">
                AFTER
              </span>

              {/* Divider Line & Caret Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white -translate-x-1/2 pointer-events-none z-20"
                style={{ left: `${slider2Pos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 text-white drop-shadow-md">
                  <ChevronLeft className="w-7 h-7 -mr-2 stroke-[3]" />
                  <ChevronRight className="w-7 h-7 -ml-2 stroke-[3]" />
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={slider2Pos}
                onChange={(e) => setSlider2Pos(Number(e.target.value))}
                aria-label="Compare before and after treatment 2"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
