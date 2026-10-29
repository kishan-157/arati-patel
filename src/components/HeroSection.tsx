import React from 'react';
import { RotatingPlayBadge } from './ClinicLogo';
import { CLINIC_INFO } from '../data/clinicData';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: (treatment?: string) => void;
  onOpenVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenVideo }) => {
  const tickerItems = [
    'Accessories',
    'Haircare',
    'Nailcare',
    'Beautycare',
    'Bodycare',
    'Skincare',
    'Accessories',
    'Haircare',
    'Nailcare',
    'Beautycare',
    'Bodycare',
    'Skincare',
  ];

  return (
    <>
      {/* ==================== BLOCK 0: HERO BANNER ==================== */}
      <div
        id="home"
        className="relative pt-24 xl:pt-20 bg-[#FDF5E8] overflow-hidden z-10 min-h-[680px] xl:min-h-[820px] flex items-center"
      >
        {/* Background decorative wave image from template */}
        <div
          className="absolute inset-0 -z-10 bg-no-repeat bg-right-bottom opacity-90 pointer-events-none"
          style={{ backgroundImage: 'url(/images/hero-banner/bg.png)' }}
        />

        {/* Ambient blurred orange glow blobs */}
        <div className="top-[10%] -left-24 opacity-20 w-64 aspect-square rounded-full absolute bg-[#F46700] blur-[100px] -z-10 pointer-events-none" />
        <div className="-right-24 -bottom-24 opacity-30 w-64 aspect-square rounded-full absolute bg-[#F46700] blur-[100px] -z-10 pointer-events-none" />
        <div className="left-[30%] -bottom-36 opacity-20 w-64 aspect-square rounded-full absolute bg-[#F46700] blur-[100px] -z-10 pointer-events-none" />

        {/* Left Vertical Social Sidebar (80px wide, matching ClinicMaster header left box) */}
        <div className="h-[calc(100%-80px)] w-20 min-w-20 absolute bottom-0 left-0 hidden xl:flex justify-between items-center flex-col py-16 px-3.5 border-r border-black/10 z-20">
          <ul className="flex gap-8 writing-vertical">
            <li>
              <a
                className="text-xs uppercase text-[#0A3366] hover:text-[#F46700] tracking-[1.5px] font-medium transition-colors"
                href={CLINIC_INFO.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="text-xs uppercase text-[#0A3366] hover:text-[#F46700] tracking-[1.5px] font-medium transition-colors"
                href={CLINIC_INFO.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="text-xs uppercase text-[#0A3366] hover:text-[#F46700] tracking-[1.5px] font-medium transition-colors"
                href={CLINIC_INFO.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="bg-white hover:bg-[#F46700] text-[#0A3366] hover:text-white text-xs font-bold py-4 px-2.5 shadow-md writing-vertical rounded-2xl transition-colors cursor-pointer tracking-wider"
          >
            LET’S TALK
          </button>
        </div>

        {/* Main Hero Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:pl-24 w-full pt-8 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4">
            {/* Left Column: Text, Callout, Button & Avatars */}
            <div className="lg:col-span-6 space-y-6 pb-8 lg:pb-16 z-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#F46700]/20 text-[#F46700] text-xs font-semibold shadow-2xs">
                <span>SKINIC – Dr. Arti Patel</span>
                <span>•</span>
                <span className="text-[#0A3366]">New Naroda, Ahmedabad</span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-[64px] font-bold text-[#0A3366] leading-[1.15] tracking-tight">
                Skincare is Like A Workout For Your Skin
              </h1>

              <div className="text-[#0A3366] py-3.5 px-5 lg:text-lg text-sm max-w-xl border-l-4 border-[#0A3366] bg-gradient-to-r from-[#0A3366]/10 to-transparent font-medium">
                Experienced dermatology & cosmetology care by Dr. Arti Patel dedicated to improving your skin & hair health and enhancing natural confidence.
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center bg-[#F46700] hover:bg-[#cf5800] text-white font-semibold text-base pl-6 pr-2 py-2 rounded-[15px] shadow-[0_12px_30px_rgba(244,103,0,0.3)] transition-all cursor-pointer group"
                >
                  <span>Appointment</span>
                  <span className="w-11 h-11 bg-white rounded-[12px] text-[#0A3366] inline-flex items-center justify-center ml-3.5 group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>

                {/* Overlapping Avatars + Arrow Button */}
                <div className="flex items-center">
                  {['/images/avatar/small/avatar1.webp', '/images/avatar/small/avatar2.webp', '/images/avatar/small/avatar3.webp', '/images/avatar/small/avatar4.webp'].map(
                    (src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt="Patient avatar"
                        className="w-13 h-13 rounded-full object-cover border-2 border-white -ml-3 first:ml-0 shadow-xs"
                      />
                    )
                  )}
                  <a
                    href="#about"
                    aria-label="Explore About SKINIC"
                    className="w-13 h-13 rounded-full bg-white hover:bg-[#0A3366] text-[#0A3366] hover:text-white shadow-md flex items-center justify-center -ml-3 transition-colors group"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Model Image + Floating Pictures + Stars + Rotating Badge */}
            <div className="lg:col-span-6 relative flex justify-center items-end min-h-[420px] sm:min-h-[560px]">
              {/* Main Hero Model Image */}
              <div className="relative z-10 w-full max-w-[540px] flex justify-center">
                <img
                  src="/images/hero-banner/img1.png"
                  alt="Skincare specialist model"
                  className="w-full h-auto object-contain max-h-[640px]"
                />
              </div>

              {/* Rotating Circular Play Badge (Top-Left of Model) */}
              <div className="absolute top-6 left-2 sm:left-8 z-20">
                <RotatingPlayBadge onClick={onOpenVideo} size="md" />
              </div>

              {/* Floating Image 2 (Circular portrait) */}
              <div className="hidden sm:block absolute top-[14%] right-4 xl:right-8 z-20 animate-float">
                <div className="overflow-hidden rounded-full shadow-lg border-4 border-white w-24 h-24 xl:w-28 xl:h-28">
                  <img
                    src="/images/hero-banner/img2.jpg"
                    alt="Skincare detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Image 3 (Rounded bottom-right leaf shape) */}
              <div className="hidden sm:block absolute bottom-[8%] left-0 sm:left-6 z-20 animate-float-alt">
                <img
                  src="/images/hero-banner/img3.jpg"
                  alt="Radiant skin care"
                  className="rounded-br-[65%] rounded-tl-2xl w-24 h-24 xl:w-28 xl:h-28 object-cover shadow-lg border-2 border-white"
                />
              </div>

              {/* Floating Image 4 (Rounded-e-5xl vertical pill on bottom right) */}
              <div className="hidden md:block absolute bottom-10 right-6 xl:right-12 z-20 animate-float">
                <img
                  src="/images/hero-banner/img4.jpg"
                  alt="Aesthetic treatment"
                  className="rounded-r-[40px] rounded-l-xl w-20 h-36 xl:w-24 xl:h-44 object-cover shadow-lg border-2 border-white"
                />
              </div>

              {/* Decorative 4-Point Primary Star SVGs */}
              <svg
                className="absolute top-[15%] right-[32%] w-10 sm:w-14 animate-spin-slow pointer-events-none z-20"
                viewBox="0 0 61 61"
                fill="none"
              >
                <path
                  d="M30.5 0L34.4251 26.5749L61 30.5L34.4251 34.4251L30.5 61L26.5749 34.4251L0 30.5L26.5749 26.5749L30.5 0Z"
                  fill="#F46700"
                />
              </svg>
              <svg
                className="absolute top-[48%] right-[6%] w-6 sm:w-8 animate-spin-reverse pointer-events-none z-20"
                viewBox="0 0 61 61"
                fill="none"
              >
                <path
                  d="M30.5 0L34.4251 26.5749L61 30.5L34.4251 34.4251L30.5 61L26.5749 34.4251L0 30.5L26.5749 26.5749L30.5 0Z"
                  fill="#F46700"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Edge Vertical Rotated Google Rating Pill */}
        <a
          href={CLINIC_INFO.googleProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden xl:flex absolute right-6 top-1/2 -translate-y-1/2 writing-vertical rotate-180 z-20 bg-white shadow-[0_0_25px_rgba(10,51,102,0.08)] px-3 py-5 rounded-full items-center gap-2 text-[#0A3366] text-xs font-medium hover:shadow-lg transition-shadow"
        >
          <div className="flex gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="font-bold text-[#F46700]">(4.8)</span>
          <span className="text-xs font-semibold">12k+ ratings on google</span>
        </a>
      </div>

      {/* ==================== BLOCK 1: BEYOND SKIN DEEP SECTION ==================== */}
      <section id="about" className="py-16 lg:py-24 bg-[#FDF5E8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Arched Image + Navy SVG Frame + Rotating Badge */}
            <div className="lg:col-span-5 relative pb-14 sm:pb-16">
              <div className="relative mx-auto max-w-md lg:max-w-none sm:ml-6">
                {/* Main Arched Clinic Video from Google Maps */}
                <div className="relative overflow-hidden h-[380px] sm:h-[500px] rounded-bl-[140px] sm:rounded-bl-[170px] rounded-t-3xl rounded-br-3xl z-10 shadow-lg bg-[#0A3366]">
                  <video
                    src="/videos/clinic-video-1.mp4"
                    poster="/images/about/img1.webp"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative #0A3366 SVG Frame Outline */}
                <div className="absolute top-6 -left-4 sm:-left-7 h-full w-[42%] pointer-events-none z-20">
                  <svg className="w-full h-full" viewBox="0 0 217 620" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 2H215V618H170C133.427 618 99.5833 606.313 72 586.471V588.927C99.6969 608.5 133.505 620 170 620H215H217V618V2V0H215H2H0V2V450C0 487.378 12.0629 521.938 32.508 550H34.9905C14.2616 522.06 2 487.462 2 450V2Z"
                      fill="#0A3366"
                    />
                    <path
                      d="M57.8488 560.9L53.5269 569.179L56.9986 577.849L48.7195 573.527L40.0494 576.999L44.3713 568.72L40.8996 560.05L49.1787 564.371L57.8488 560.9Z"
                      fill="#0A3366"
                    />
                  </svg>
                </div>

                {/* Bottom Floating Rotating Play Badge */}
                <div className="absolute -bottom-12 left-[28%] sm:left-[30%] z-30">
                  <RotatingPlayBadge onClick={onOpenVideo} size="md" />
                </div>
              </div>
            </div>

            {/* Right Column: Heading, Copy, Doctor Pill, Rating & Floating Polaroids */}
            <div className="lg:col-span-7 relative">
              <div className="space-y-6 max-w-2xl">
                <h2 className="text-2xl sm:text-4xl xl:text-[42px] font-bold text-[#0A3366] leading-[1.25] capitalize">
                  Beyond Skin Deep Personalized Care for Your Unique Beauty Journey At SKINIC – Dr. Arti Patel
                </h2>

                <p className="text-sm sm:text-base xl:text-lg text-[#566593] font-light leading-relaxed">
                  We believe healthy, radiant skin is achievable for everyone. At <strong className="font-semibold text-[#0A3366]">SKINIC – Dr. Arti Patel</strong> in New Naroda, Ahmedabad, we combine advanced clinical dermatology with innovative cosmetic solutions to address your unique skin concerns. We create personalized treatment plans to achieve your desired results, whether it&apos;s treating acne, restoring sun damage, laser hair reduction, or enhancing your natural beauty.
                </p>

                {/* Pill Box with 4 Avatars + Talk to Doctor + Arrow Button */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <div className="rounded-full inline-flex items-center py-2.5 pl-3.5 pr-7 border border-[#0A3366] bg-transparent">
                    <div className="flex pr-5 mr-5 border-r border-black/10">
                      {['/images/avatar/small/avatar1.webp', '/images/avatar/small/avatar2.webp', '/images/avatar/small/avatar3.webp', '/images/avatar/small/avatar4.webp'].map(
                        (src, idx) => (
                          <img
                            key={idx}
                            src={src}
                            alt="Patient"
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white -ml-3 first:ml-0 object-cover"
                          />
                        )
                      )}
                    </div>
                    <span className="text-xs sm:text-base font-medium text-[#0A3366]">
                      SKINIC – Dr. Arti Patel
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenBooking()}
                    aria-label="Book consultation"
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white hover:bg-[#F46700] text-[#F46700] hover:text-white shadow-lg flex items-center justify-center transition-colors cursor-pointer group"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </button>
                </div>

                {/* 5-Star Rating Row */}
                <div className="flex items-center gap-2 text-sm font-medium pt-1">
                  <div className="flex gap-1 text-[#F46700]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-[#0A3366]">(4.8)</span>
                  <a
                    href={CLINIC_INFO.googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#566593] hover:text-[#F46700] underline underline-offset-4"
                  >
                    SKINIC – Dr. Arti Patel • Google Reviews
                  </a>
                </div>
              </div>

              {/* Floating Tilted Skincare Images in Bottom-Right (img2 & img3) */}
              <div className="hidden xl:block absolute -bottom-10 right-0 pointer-events-none">
                <img
                  src="/images/about/img2.webp"
                  alt="Skincare treatment"
                  className="w-32 rounded-2xl shadow-md absolute -left-20 -rotate-16 border-2 border-white"
                />
                <img
                  src="/images/about/img3.webp"
                  alt="Facial care"
                  className="w-32 rounded-2xl shadow-lg relative z-10 border-2 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BLOCK 2: MARQUEE TICKER STRIP ==================== */}
      <div className="relative py-5 sm:py-6 bg-[#0A3366] overflow-hidden">
        <div className="animate-ticker flex items-center">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div
              key={idx}
              className="text-white text-lg sm:text-2xl xl:text-3xl font-normal flex items-center capitalize shrink-0"
            >
              <span>{item}</span>
              {/* Spinning 8-point white star separator */}
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 mx-6 sm:mx-10 text-white animate-spin-slow shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
