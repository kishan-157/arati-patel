import React from 'react';

export const HeroClinicIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-gradient-to-br from-[#FDF9F7] via-[#FBF2EE] to-[#F5E7E2] border border-[#ECD9D4] shadow-soft ${className}`}>
      {/* Decorative architectural arch background */}
      <svg
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroArchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9F7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F7DDD8" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="plumAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5E2E3B" />
            <stop offset="100%" stopColor="#7E3E4F" />
          </linearGradient>
          <linearGradient id="terracotta" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D98A7B" />
            <stop offset="100%" stopColor="#C07162" />
          </linearGradient>
          <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Ambient background rays / soft warmth */}
        <circle cx="700" cy="80" r="180" fill="#FCECE7" fillOpacity="0.7" />
        <circle cx="150" cy="400" r="220" fill="#FBF2EE" fillOpacity="0.8" />

        {/* Architectural arches */}
        <path
          d="M 450 500 L 450 200 A 150 150 0 0 1 750 200 L 750 500 Z"
          fill="url(#heroArchGrad)"
          stroke="#E8CEC8"
          strokeWidth="1.5"
        />
        <path
          d="M 480 500 L 480 220 A 120 120 0 0 1 720 220 L 720 500 Z"
          fill="#FFFDFD"
          fillOpacity="0.7"
        />

        {/* Window grid line */}
        <line x1="600" y1="100" x2="600" y2="500" stroke="#EAD0CA" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="480" y1="220" x2="720" y2="220" stroke="#EAD0CA" strokeWidth="1" />

        {/* Minimalist gallery framed art on left wall */}
        <rect x="120" y="70" width="160" height="190" rx="6" fill="#FFFFFF" stroke="#DEC1BB" strokeWidth="1.5" />
        <rect x="135" y="85" width="130" height="160" rx="3" fill="#FBF3F0" />
        {/* Abstract botanical line art in frame */}
        <path
          d="M 200 230 Q 185 180 200 130 Q 215 160 200 180 Q 225 150 205 130"
          stroke="#5E2E3B"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="200" cy="120" r="14" fill="#E8B5AB" fillOpacity="0.6" />

        {/* Modern clean consultation desk */}
        <path
          d="M 80 440 L 720 440 L 680 470 L 60 470 Z"
          fill="#FFFFFF"
          stroke="#E5CEC8"
          strokeWidth="1.5"
        />
        <rect x="120" y="470" width="18" height="30" fill="#E2CCC6" rx="2" />
        <rect x="640" y="470" width="18" height="30" fill="#E2CCC6" rx="2" />

        {/* Ceramic planter with botanical eucalyptus on desk */}
        <ellipse cx="610" cy="435" rx="32" ry="12" fill="#E0CDC8" fillOpacity="0.6" />
        <path
          d="M 585 435 L 592 375 L 628 375 L 635 435 Z"
          fill="url(#terracotta)"
          stroke="#AC5F50"
          strokeWidth="1"
        />
        {/* Eucalyptus stems */}
        <path d="M 610 375 Q 580 300 560 240" stroke="#688172" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <ellipse cx="585" cy="330" rx="14" ry="10" transform="rotate(-30 585 330)" fill="#8EA798" />
        <ellipse cx="568" cy="275" rx="13" ry="9" transform="rotate(-40 568 275)" fill="#9CB5A6" />
        <ellipse cx="555" cy="235" rx="10" ry="8" transform="rotate(-20 555 235)" fill="#B0C7BA" />

        <path d="M 610 375 Q 635 290 660 230" stroke="#688172" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <ellipse cx="628" cy="325" rx="13" ry="9" transform="rotate(25 628 325)" fill="#8EA798" />
        <ellipse cx="645" cy="270" rx="12" ry="8" transform="rotate(35 645 270)" fill="#9CB5A6" />

        {/* Doctor consultation equipment on desk */}
        {/* Consultation clipboard */}
        <rect x="230" y="405" width="130" height="42" rx="4" transform="rotate(-6 230 405)" fill="#FFFFFF" stroke="#DEC3BC" strokeWidth="1.2" />
        <rect x="240" y="414" width="70" height="3" rx="1.5" transform="rotate(-6 240 414)" fill="#5E2E3B" fillOpacity="0.7" />
        <rect x="241" y="423" width="90" height="2.5" rx="1.2" transform="rotate(-6 241 423)" fill="#B8A4A0" />
        <rect x="242" y="431" width="60" height="2.5" rx="1.2" transform="rotate(-6 242 431)" fill="#B8A4A0" />

        {/* Medical Dermatoscope / magnifying lens */}
        <circle cx="395" cy="425" r="22" fill="#F8FAFA" stroke="#5E2E3B" strokeWidth="2" />
        <circle cx="395" cy="425" r="16" fill="#EDF3F2" stroke="#9AB3AD" strokeWidth="1" />
        <line x1="410" y1="440" x2="440" y2="465" stroke="#5E2E3B" strokeWidth="4" strokeLinecap="round" />

        {/* Aesthetic glass dropper serum bottles on tray */}
        <rect x="465" y="428" width="85" height="16" rx="4" fill="#FDF3F0" stroke="#DEC1BB" strokeWidth="1" />
        {/* Bottle 1 */}
        <rect x="475" y="390" width="18" height="38" rx="3" fill="#ECD3CD" stroke="#5E2E3B" strokeWidth="1" />
        <rect x="478" y="380" width="12" height="10" rx="1" fill="#FFFFFF" stroke="#5E2E3B" strokeWidth="1" />
        <path d="M 482 380 L 482 374 C 482 371 486 371 486 374 L 486 380 Z" fill="#5E2E3B" />
        {/* Bottle 2 */}
        <rect x="502" y="398" width="16" height="30" rx="3" fill="#D9E6E2" stroke="#5E2E3B" strokeWidth="1" />
        <rect x="505" y="390" width="10" height="8" rx="1" fill="#FFFFFF" stroke="#5E2E3B" strokeWidth="1" />
        <path d="M 508 390 L 508 385 C 508 382 512 382 512 385 L 512 390 Z" fill="#5E2E3B" />

        {/* Soft floating light accents */}
        <circle cx="480" cy="140" r="4" fill="#E8B5AB" />
        <circle cx="350" cy="190" r="3" fill="#E8B5AB" fillOpacity="0.7" />
        <circle cx="680" cy="360" r="5" fill="#E8B5AB" fillOpacity="0.5" />
      </svg>

      {/* Floating Badges with real, supportable clinic attributes */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#ECD9D4] shadow-sm flex items-center gap-2.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#5E2E3B]"></div>
        <div>
          <p className="text-xs font-semibold text-[#292224] tracking-wide">Dr. Arti Patel</p>
          <p className="text-[11px] text-[#786D70]">Dermatology & Cosmetology</p>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#ECD9D4] shadow-sm flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#FAF0ED] text-[#5E2E3B] flex items-center justify-center font-serif font-bold text-sm">
          S
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wider text-[#8A797D] font-medium">Location</p>
          <p className="text-xs font-semibold text-[#292224]">New Naroda, Ahmedabad</p>
        </div>
      </div>
    </div>
  );
};
