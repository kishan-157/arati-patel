import React from 'react';

export const DoctorIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-4/5 rounded-2xl overflow-hidden bg-gradient-to-b from-[#FAF4F2] via-[#FDF9F7] to-[#F5ECE8] border border-[#ECD9D4] shadow-soft flex items-center justify-center p-6 ${className}`}>
      <svg
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[460px]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="docArch" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF7F5" />
            <stop offset="100%" stopColor="#F5DED8" />
          </linearGradient>
          <linearGradient id="docCoat" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F5F5F7" />
          </linearGradient>
          <linearGradient id="docScarf" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5E2E3B" />
            <stop offset="100%" stopColor="#824151" />
          </linearGradient>
        </defs>

        {/* Backdrop arched alcove */}
        <path
          d="M 50 500 L 50 180 A 150 150 0 0 1 350 180 L 350 500 Z"
          fill="url(#docArch)"
          stroke="#E8D1CB"
          strokeWidth="1.5"
        />

        {/* Ambient warm glow circle */}
        <circle cx="200" cy="180" r="110" fill="#FFF2EE" />

        {/* Decorative subtle medical cross watermark in alcove */}
        <path
          d="M 195 70 H 205 V 85 H 220 V 95 H 205 V 110 H 195 V 95 H 180 V 85 H 195 Z"
          fill="#5E2E3B"
          fillOpacity="0.12"
        />

        {/* Doctor Silhouette & Medical Attire */}
        {/* Hair back */}
        <ellipse cx="200" cy="165" rx="55" ry="60" fill="#2B2123" />

        {/* Face contour */}
        <path
          d="M 170 165 C 170 205 180 225 200 225 C 220 225 230 205 230 165 Z"
          fill="#F2C8B8"
        />
        {/* Neck */}
        <rect x="190" y="215" width="20" height="28" fill="#E8B9A7" rx="3" />

        {/* Hair front / stylish professional parted hair */}
        <path
          d="M 152 165 C 152 115 248 115 248 165 C 248 175 238 185 232 175 C 222 155 208 148 198 148 C 180 148 168 158 162 178 C 155 185 152 178 152 165 Z"
          fill="#20181A"
        />
        {/* Earrings */}
        <circle cx="166" cy="182" r="3" fill="#D4AF37" />
        <circle cx="234" cy="182" r="3" fill="#D4AF37" />

        {/* Stethoscope around neck */}
        <path
          d="M 178 238 C 178 280 188 300 200 300 C 212 300 222 280 222 238"
          stroke="#5E2E3B"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="200" cy="312" r="9" fill="#E2DCDA" stroke="#5E2E3B" strokeWidth="2.5" />
        <line x1="200" y1="300" x2="200" y2="303" stroke="#5E2E3B" strokeWidth="3" />

        {/* Professional Plum Inner Blouse / Scarf */}
        <path d="M 186 242 L 200 270 L 214 242 Z" fill="url(#docScarf)" />

        {/* Doctor Lab Coat */}
        <path
          d="M 130 500 L 140 260 C 150 248 170 242 186 242 L 200 278 L 180 500 Z"
          fill="url(#docCoat)"
          stroke="#E0D2CF"
          strokeWidth="1.5"
        />
        <path
          d="M 270 500 L 260 260 C 250 248 230 242 214 242 L 200 278 L 220 500 Z"
          fill="url(#docCoat)"
          stroke="#E0D2CF"
          strokeWidth="1.5"
        />
        {/* Lapels */}
        <path d="M 186 242 L 158 290 L 182 320 L 200 278 Z" fill="#FDFDFE" stroke="#DEC8C3" strokeWidth="1" />
        <path d="M 214 242 L 242 290 L 218 320 L 200 278 Z" fill="#FDFDFE" stroke="#DEC8C3" strokeWidth="1" />

        {/* Doctor pocket & name tag */}
        <rect x="150" y="340" width="34" height="38" rx="2" fill="#FFFFFF" stroke="#E2D5D1" strokeWidth="1" />
        <rect x="154" y="346" width="26" height="4" rx="1" fill="#5E2E3B" />
        <line x1="168" y1="334" x2="168" y2="346" stroke="#9C8B88" strokeWidth="1.5" strokeLinecap="round" />

        {/* Clinical Dermatoscope tool in hand / pocket */}
        <rect x="236" y="360" width="8" height="42" rx="3" transform="rotate(-15 236 360)" fill="#5E2E3B" />
        <circle cx="233" cy="350" r="10" fill="#E8F0EE" stroke="#5E2E3B" strokeWidth="2" />

        {/* Foreground floral / botanical accent */}
        <path d="M 60 500 Q 80 430 70 380" stroke="#7A9386" strokeWidth="2" strokeLinecap="round" fill="none" />
        <ellipse cx="65" cy="420" rx="10" ry="6" transform="rotate(-30 65 420)" fill="#A1B8AC" />
        <ellipse cx="78" cy="385" rx="8" ry="5" transform="rotate(20 78 385)" fill="#B5C9BE" />

        <path d="M 340 500 Q 320 440 330 390" stroke="#7A9386" strokeWidth="2" strokeLinecap="round" fill="none" />
        <ellipse cx="330" cy="435" rx="10" ry="6" transform="rotate(30 330 435)" fill="#A1B8AC" />
        <ellipse cx="320" cy="400" rx="8" ry="5" transform="rotate(-20 320 400)" fill="#B5C9BE" />
      </svg>

      {/* Trust Tag */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-[#ECD9D4] shadow-sm text-center">
        <p className="text-xs font-semibold text-[#2B2123]">Dr. Arti Patel</p>
        <p className="text-[11px] text-[#7A6F72]">Dermatologist & Cosmetologist · SKINIC</p>
      </div>
    </div>
  );
};
