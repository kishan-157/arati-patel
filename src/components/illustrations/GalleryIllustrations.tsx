import React from 'react';

export const GalleryArtSuite: React.FC<{ variant: string; className?: string }> = ({ variant, className = '' }) => {
  if (variant === 'gallery-1') {
    // Consultation Suite
    return (
      <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#FAF5F2] to-[#F5ECE8] flex items-center justify-center p-6 ${className}`}>
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[190px]">
          {/* Room backdrop with warm sunlight window */}
          <rect x="20" y="20" width="280" height="180" rx="8" fill="#FFFBF9" stroke="#E8D5D0" strokeWidth="1" />
          <path d="M 60 40 H 130 V 130 H 60 Z" fill="#FBF0EC" stroke="#ECD2CB" strokeWidth="1" />
          <line x1="95" y1="40" x2="95" y2="130" stroke="#ECD2CB" strokeWidth="1" />
          <line x1="60" y1="85" x2="130" y2="85" stroke="#ECD2CB" strokeWidth="1" />
          
          {/* Modern consultation desk & laptop/chart */}
          <rect x="110" y="125" width="160" height="12" rx="2" fill="#E8D2CB" />
          <rect x="130" y="137" width="10" height="55" fill="#D8BEB6" />
          <rect x="245" y="137" width="10" height="55" fill="#D8BEB6" />
          {/* Laptop & clinical lamp */}
          <rect x="145" y="105" width="34" height="20" rx="2" fill="#5E2E3B" fillOpacity="0.8" />
          <polygon points="140,125 184,125 180,120 144,120" fill="#422029" />
          
          {/* Minimalist lamp */}
          <path d="M 230 125 L 230 75 Q 230 65 220 65 L 210 65" stroke="#5E2E3B" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 205 60 L 215 60 L 220 70 L 200 70 Z" fill="#5E2E3B" />
          <polygon points="202,70 218,70 235,125 185,125" fill="#FFF2E8" fillOpacity="0.4" />

          {/* Plant on floor */}
          <path d="M 45 192 L 48 165 L 62 165 L 65 192 Z" fill="#D18374" />
          <path d="M 55 165 Q 40 140 35 125" stroke="#688172" strokeWidth="2" strokeLinecap="round" />
          <path d="M 55 165 Q 65 135 75 120" stroke="#688172" strokeWidth="2" strokeLinecap="round" />
          <circle cx="35" cy="125" r="7" fill="#8EA798" />
          <circle cx="75" cy="120" r="7" fill="#8EA798" />
        </svg>
      </div>
    );
  }

  if (variant === 'gallery-2') {
    // Calming Waiting Lounge
    return (
      <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#FBF2EF] to-[#F2E5E0] flex items-center justify-center p-6 ${className}`}>
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[190px]">
          <rect x="20" y="20" width="280" height="180" rx="8" fill="#FFFDFC" stroke="#E8D5D0" strokeWidth="1" />
          {/* Lounge wall with decorative arch mouldings */}
          <path d="M 50 190 L 50 70 A 40 40 0 0 1 130 70 L 130 190" stroke="#EAD3CD" strokeWidth="1.2" fill="#FAF1ED" />
          <path d="M 190 190 L 190 70 A 40 40 0 0 1 270 70 L 270 190" stroke="#EAD3CD" strokeWidth="1.2" fill="#FAF1ED" />
          
          {/* Aesthetic Armchair in Lounge */}
          <rect x="110" y="120" width="100" height="45" rx="8" fill="#5E2E3B" fillOpacity="0.85" />
          <rect x="125" y="100" width="70" height="35" rx="6" fill="#753C4B" />
          <rect x="100" y="130" width="15" height="30" rx="5" fill="#4B242F" />
          <rect x="205" y="130" width="15" height="30" rx="5" fill="#4B242F" />
          {/* Chair tapered wooden legs */}
          <line x1="115" y1="165" x2="108" y2="190" stroke="#B8978F" strokeWidth="3" strokeLinecap="round" />
          <line x1="205" y1="165" x2="212" y2="190" stroke="#B8978F" strokeWidth="3" strokeLinecap="round" />
          
          {/* Modern Round coffee table */}
          <ellipse cx="160" cy="180" rx="36" ry="12" fill="#FFFFFF" stroke="#DEC4BD" strokeWidth="1" />
          <rect x="156" y="180" width="8" height="16" fill="#DEC4BD" />
          {/* Small succulent bowl */}
          <ellipse cx="160" cy="178" rx="8" ry="3" fill="#D98A7B" />
          <circle cx="160" cy="174" r="5" fill="#7FA08E" />
        </svg>
      </div>
    );
  }

  if (variant === 'gallery-3') {
    // Aesthetic Treatment Suite
    return (
      <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#F5F8F7] to-[#E9F0EE] flex items-center justify-center p-6 ${className}`}>
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[190px]">
          <rect x="20" y="20" width="280" height="180" rx="8" fill="#FCFEFE" stroke="#D3E2DD" strokeWidth="1" />
          
          {/* Medical Clinical Recliner Bed */}
          <rect x="50" y="130" width="150" height="16" rx="4" fill="#FFFFFF" stroke="#5E2E3B" strokeWidth="1.5" />
          <path d="M 60 130 L 40 100 L 70 100 L 80 130 Z" fill="#FFFFFF" stroke="#5E2E3B" strokeWidth="1.5" />
          <rect x="42" y="96" width="30" height="8" rx="4" fill="#E8D1CB" />
          <rect x="110" y="146" width="20" height="45" fill="#9FB5AF" />
          <rect x="80" y="185" width="80" height="6" rx="3" fill="#6A807A" />

          {/* Aesthetic Medical Equipment Tower */}
          <rect x="230" y="70" width="55" height="110" rx="6" fill="#F4F8F7" stroke="#90AFA7" strokeWidth="1.5" />
          <rect x="240" y="82" width="35" height="24" rx="3" fill="#3B5A53" />
          <line x1="244" y1="94" x2="271" y2="94" stroke="#7FE0CA" strokeWidth="2" strokeDasharray="2 3" />
          {/* Dials / ports */}
          <circle cx="248" cy="120" r="4" fill="#5E2E3B" />
          <circle cx="264" cy="120" r="4" fill="#90AFA7" />
          <rect x="238" y="135" width="38" height="3" rx="1.5" fill="#D3E2DD" />
          
          {/* Gentle applicator handpiece cord */}
          <path d="M 230 120 Q 200 110 190 125" stroke="#5E2E3B" strokeWidth="2" fill="none" strokeLinecap="round" />
          <rect x="175" y="120" width="16" height="7" rx="3" fill="#5E2E3B" />

          {/* Clinical warm ambient task light */}
          <path d="M 200 35 L 170 65" stroke="#90AFA7" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="165" cy="70" rx="14" ry="7" transform="rotate(-30 165 70)" fill="#5E2E3B" />
          <polygon points="155,75 175,65 195,120 125,125" fill="#FFFBE6" fillOpacity="0.4" />
        </svg>
      </div>
    );
  }

  // Diagnostic & Trichology Desk
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-gradient-to-br from-[#FAF5F0] to-[#F1E5DA] flex items-center justify-center p-6 ${className}`}>
      <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[190px]">
        <rect x="20" y="20" width="280" height="180" rx="8" fill="#FFFCF9" stroke="#E5D3C5" strokeWidth="1" />
        
        {/* Trichoscopy / Dermatoscopy high resolution screen */}
        <rect x="60" y="50" width="110" height="80" rx="5" fill="#201A1C" stroke="#87675D" strokeWidth="1.5" />
        <rect x="66" y="56" width="98" height="68" rx="3" fill="#FAF5F2" />
        {/* High resolution hair follicle graphic on monitor */}
        <path d="M 95 110 Q 100 80 115 70" stroke="#5E2E3B" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 115 112 Q 120 85 135 75" stroke="#5E2E3B" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="95" cy="110" r="4" fill="#D98A7B" />
        <circle cx="115" cy="112" r="4" fill="#D98A7B" />
        <rect x="108" y="130" width="14" height="25" fill="#A88B81" />
        <rect x="90" y="155" width="50" height="5" rx="2" fill="#755B53" />

        {/* Handheld trichoscope device on stand */}
        <rect x="205" y="100" width="22" height="55" rx="6" fill="#FFFFFF" stroke="#5E2E3B" strokeWidth="1.5" />
        <circle cx="216" cy="95" r="9" fill="#EDF3F2" stroke="#5E2E3B" strokeWidth="1.5" />
        <line x1="216" y1="120" x2="216" y2="145" stroke="#E2D0C8" strokeWidth="2" />
        <path d="M 216 155 Q 216 170 170 160" stroke="#755B53" strokeWidth="1.5" fill="none" />

        {/* Clinical notes pad */}
        <rect x="240" y="135" width="40" height="48" rx="2" fill="#FAF0EA" stroke="#D9C3B6" strokeWidth="1" />
        <line x1="246" y1="145" x2="272" y2="145" stroke="#5E2E3B" strokeWidth="1.5" />
        <line x1="246" y1="153" x2="268" y2="153" stroke="#9E877F" strokeWidth="1" />
        <line x1="246" y1="161" x2="270" y2="161" stroke="#9E877F" strokeWidth="1" />
      </svg>
    </div>
  );
};
