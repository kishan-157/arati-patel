import React from 'react';
import { Play } from 'lucide-react';

export const ClinicLogo: React.FC<{ variant?: 'dark' | 'white'; className?: string }> = ({
  variant = 'dark',
  className = ''
}) => {
  const mainTextColor = variant === 'white' ? '#FFFFFF' : '#0A3366';
  const strokePrimary = variant === 'white' ? '#FFFFFF' : '#0A3366';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg
        width="44"
        height="42"
        viewBox="0 0 130 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M66.3259 47.4649L66.9819 47.9679C70.4669 50.6369 73.4049 53.9539 75.6359 57.7359C78.7369 62.9939 80.3719 68.9869 80.3719 75.0909V96.1079C80.3719 100.706 78.4819 105.101 75.1439 108.263C68.8629 114.214 59.0829 114.398 52.5809 108.69L52.3789 108.513C48.6949 105.278 46.5829 100.612 46.5829 95.7089V74.7679C46.5829 74.3099 46.2119 73.9379 45.7539 73.9379H24.0539C19.5309 73.9379 15.1929 72.1419 11.9949 68.9439C5.50894 62.4569 5.31495 52.0019 11.5569 45.2799L11.7379 45.0849C15.0169 41.5539 19.6189 39.5469 24.4379 39.5469H42.9669C51.4119 39.5469 59.6209 42.3299 66.3259 47.4649ZM66.3259 47.4649L63.3319 51.3729"
          stroke={strokePrimary}
          strokeWidth="10"
        />
        <path
          d="M74.073 9.30996L74.275 9.48696V9.48797C77.959 12.722 80.071 17.388 80.071 22.291V43.232C80.071 43.69 80.443 44.062 80.901 44.062H102.601C107.124 44.062 111.461 45.858 114.659 49.056C121.146 55.543 121.339 65.998 115.098 72.72L114.916 72.915C111.637 76.446 107.036 78.453 102.216 78.453H83.688C75.243 78.453 67.033 75.67 60.329 70.535L59.673 70.032C56.187 67.363 53.249 64.046 51.019 60.264C47.918 55.006 46.282 49.013 46.282 42.909V21.892C46.282 17.294 48.173 12.899 51.51 9.73696C57.791 3.78596 67.572 3.60096 74.073 9.30996ZM74.073 9.30996L70.774 13.067"
          stroke="#F46700"
          strokeWidth="10"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className="text-xl sm:text-2xl font-extrabold tracking-tight"
          style={{ color: mainTextColor }}
        >
          SKINIC
        </span>
        <span className="text-[11px] sm:text-xs font-bold tracking-wide text-[#F46700] mt-0.5">
          Dr. Arti Patel
        </span>
      </div>
    </div>
  );
};

export const RotatingPlayBadge: React.FC<{
  onClick?: () => void;
  size?: 'md' | 'lg';
  text?: string;
}> = ({
  onClick,
  size = 'lg',
  text = 'More Collection Explore • More Collection Explore • '
}) => {
  const dimensions = size === 'lg' ? 'w-32 h-32 xl:w-40 xl:h-40' : 'w-28 h-28 xl:w-36 xl:h-36';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Play clinic overview video"
      className={`group relative ${dimensions} rounded-full bg-white/85 backdrop-blur-md shadow-[0_0_60px_rgba(10,51,102,0.16)] flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105`}
    >
      {/* Rotating circular SVG text */}
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full p-2 animate-spin-slow"
      >
        <defs>
          <path
            id="circleTextPath"
            d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
          />
        </defs>
        <text
          fill="#0A3366"
          fontSize="11.5"
          fontWeight="600"
          letterSpacing="2.1px"
        >
          <textPath href="#circleTextPath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center Play Icon */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-12 h-12 rounded-full bg-[#FDF5E8] group-hover:bg-[#F46700] text-[#0A3366] group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
          <Play className="w-5 h-5 fill-current ml-0.5" />
        </span>
      </span>
    </button>
  );
};
