import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Calendar, ArrowRight, Check, MapPin, PhoneCall } from 'lucide-react';

interface DoctorSectionProps {
  onOpenBooking: (treatment?: string) => void;
}

const DOCTOR_SKILLS = [
  'Radiant Skin Dermatology',
  'Flawless Dermatology',
  'Luminous Dermatology',
  'Laser Resurfacing',
  'Refined Skin Dermatology',
  'Anti Aging',
];

export const DoctorSection: React.FC<DoctorSectionProps> = ({ onOpenBooking }) => {
  return (
    <>
      {/* ==================== BLOCK 7: OUR SPECIALIST – DR. ARTI PATEL (SINGLE PROFILE) ==================== */}
      <section id="specialists" className="py-16 lg:py-24 bg-[#FDF5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block py-1.5 px-4 rounded-full text-[#F46700] bg-[#F46700]/10 text-xs sm:text-sm font-semibold mb-3">
              SKINIC – Dr. Arti Patel
            </span>
            <h2 className="text-2xl sm:text-4xl xl:text-[44px] font-bold text-[#0A3366] capitalize mb-2.5">
              Meet Our Specialist
            </h2>
            <p className="text-sm sm:text-base xl:text-lg text-[#566593] font-light">
              Dedicated dermatological, hair, and cosmetic care guided personally by{' '}
              <strong className="font-semibold text-[#0A3366]">Dr. Arti Patel</strong> at{' '}
              <strong className="font-semibold text-[#0A3366]">SKINIC – Dr. Arti Patel</strong> in New Naroda, Ahmedabad.
            </p>
          </div>

          {/* Single Centered Specialist Profile Card for Dr. Arti Patel */}
          <div className="max-w-md mx-auto">
            <div className="relative rounded-3xl bg-white shadow-[0_15px_40px_rgba(10,51,102,0.1)] border-2 border-[#F46700] overflow-hidden">
              {/* Top Title */}
              <div className="bg-white px-6 pt-7 pb-4 text-center">
                <h3 className="text-2xl font-bold text-[#0A3366] mb-1">
                  Dr. Arti Patel
                </h3>
                <span className="text-sm font-semibold text-[#F46700] block">
                  Dermatology, Skin Care & Cosmetology Specialist
                </span>
                <span className="text-xs text-[#566593] block mt-1">
                  SKINIC – Dr. Arti Patel • New Naroda, Ahmedabad
                </span>
              </div>

              {/* Photo & Appointment CTA & Socials */}
              <div className="bg-white relative overflow-hidden">
                <img
                  src="/images/team/img1.webp"
                  alt="Dr. Arti Patel – SKINIC"
                  className="w-full h-96 object-cover object-top"
                />

                {/* Bottom Soft Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />

                {/* Appointment Button */}
                <button
                  type="button"
                  onClick={() => onOpenBooking('Consultation with Dr. Arti Patel')}
                  className="absolute left-5 right-5 bottom-16 py-3.5 px-5 rounded-xl bg-[#F46700] hover:bg-[#cf5800] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-300 z-10 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment with Dr. Arti Patel</span>
                </button>

                {/* Bottom Contact & Social Row */}
                <div className="flex items-center justify-between px-6 pb-5 pt-3 relative z-20 bg-white border-t border-black/5">
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A3366] hover:text-[#F46700] transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#F46700]" />
                    <span>{CLINIC_INFO.phoneDisplay}</span>
                  </a>

                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0A3366] hover:text-[#F46700] transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#F46700]" />
                    <span>Google Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BLOCK 9: ABOUT DR. ARTI PATEL & SKILLS ==================== */}
      <section id="about-doctor" className="pt-8 pb-16 lg:pt-14 lg:pb-24 bg-[#FDF5E8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-12">
            {/* Left Column (Portrait + Rotating Dashed Circles + Floating Badges) */}
            <div className="lg:col-span-6 relative flex justify-center items-end min-h-[420px] sm:min-h-[520px]">
              {/* Rotating Dashed Concentric Circles SVG */}
              <div className="absolute -bottom-16 inset-x-0 flex justify-center pointer-events-none">
                <svg
                  className="w-[340px] sm:w-[480px] xl:w-[540px] aspect-square animate-spin-slow"
                  viewBox="0 0 694 694"
                  fill="none"
                >
                  <circle
                    cx="347"
                    cy="347"
                    r="346"
                    stroke="#F46700"
                    strokeOpacity="0.15"
                    strokeWidth="2"
                    strokeDasharray="12 12"
                  />
                  <circle
                    cx="347"
                    cy="347"
                    r="296"
                    stroke="#F46700"
                    strokeOpacity="0.25"
                    strokeWidth="2"
                    strokeDasharray="12 12"
                  />
                  <circle
                    cx="347"
                    cy="347"
                    r="244"
                    stroke="#F46700"
                    strokeOpacity="0.35"
                    strokeWidth="2"
                    strokeDasharray="12 12"
                  />
                  <circle cx="147.5" cy="206.5" r="6.5" fill="#F46700" />
                  <circle opacity="0.3" cx="206.5" cy="30.5" r="4.5" fill="#F46700" />
                  <circle opacity="0.6" cx="62.5" cy="433.5" r="2.5" fill="#F46700" />
                  <circle cx="642.5" cy="361.5" r="3.5" fill="#F46700" />
                </svg>
              </div>

              {/* Portrait Cutout Image (img5.webp) */}
              <div className="relative z-10 max-w-md w-full px-6">
                <img
                  src="/images/about/img5.webp"
                  alt="SKINIC – Dr. Arti Patel"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Floating Experience Badge (Left) */}
              <div className="hidden sm:inline-flex items-center gap-3 bg-white/95 rounded-2xl py-3 px-5 shadow-xl absolute left-2 top-[45%] z-20 animate-float">
                <span className="text-3xl xl:text-4xl font-bold text-[#F46700]">20+</span>
                <h3 className="text-sm font-bold text-[#0A3366] leading-tight">
                  Care <br /> Protocols
                </h3>
              </div>

              {/* Floating Accreditation Card (Bottom Right) */}
              <div className="hidden sm:flex bg-white rounded-2xl py-4 px-4 gap-3 items-center shadow-xl absolute bottom-10 right-2 w-80 z-20 animate-float-alt">
                <img
                  src="/images/logo/logo1.png"
                  alt="Badge"
                  className="w-12 h-12 object-contain shrink-0"
                />
                <div>
                  <h3 className="text-sm font-bold text-[#0A3366]">
                    SKINIC – Dr. Arti Patel
                  </h3>
                  <p className="text-xs font-medium text-[#566593]">
                    Dermatology & Cosmetology Clinic
                  </p>
                  <span className="text-xs font-semibold text-[#F46700]">
                    Best Dermatologists • Ahmedabad
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: About SKINIC – Dr. Arti Patel & Skills & Signature */}
            <div className="lg:col-span-6 space-y-6 pb-4">
              <div>
                <div className="inline-block py-1.5 px-4 rounded-full text-[#F46700] bg-[#F46700]/10 text-sm font-semibold mb-3">
                  SKINIC – Dr. Arti Patel
                </div>
                <h2 className="text-2xl sm:text-4xl xl:text-[42px] font-bold text-[#0A3366] capitalize leading-tight mb-4">
                  About Dr. Arti Patel
                </h2>
                <p className="text-sm sm:text-base xl:text-lg text-[#566593] leading-relaxed">
                  <strong className="text-[#0A3366] font-semibold">SKINIC – Dr. Arti Patel</strong> is a premier Dermatology, Skin Care, and Cosmetology Clinic located at Rosevill Sky, Shukan, Nikol–Naroda Road, New Naroda, Ahmedabad. Every consultation is designed around thorough clinical diagnosis, evidence-based care, and natural skin confidence.
                </p>
              </div>

              <div>
                <h3 className="text-[#F46700] text-xl font-semibold pb-2.5 mb-4 border-b border-dashed border-[#0A3366]/20">
                  About Skills
                </h3>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#0A3366] font-medium">
                  {DOCTOR_SKILLS.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-sm sm:text-base">
                      <span className="w-5 h-5 rounded-full bg-[#F46700]/15 text-[#F46700] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Signature & Appointment Button */}
              <div className="pt-4 flex flex-wrap items-center gap-8">
                <div className="text-center">
                  <img
                    src="/images/sign.webp"
                    alt="Dr. Arti Patel Signature"
                    className="h-12 object-contain mx-auto mb-1"
                  />
                  <span className="text-xs font-semibold text-[#0A3366] block">
                    SKINIC – Dr. Arti Patel
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBooking('Consultation with Dr. Arti Patel')}
                  className="inline-flex items-center bg-[#F46700] hover:bg-[#cf5800] text-white font-semibold text-base pl-6 pr-2 py-2 rounded-[15px] shadow-[0_12px_30px_rgba(244,103,0,0.28)] transition-all cursor-pointer group"
                >
                  <span>Appointment</span>
                  <span className="w-11 h-11 bg-white rounded-[12px] text-[#0A3366] inline-flex items-center justify-center ml-3.5 group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
