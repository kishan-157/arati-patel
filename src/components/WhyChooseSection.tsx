import React, { useState } from 'react';
import { CLINIC_INFO, CLINIC_VIDEOS } from '../data/clinicData';
import {
  Check,
  ArrowRight,
  ArrowUpRight,
  PhoneCall,
  Star,
  Quote,
  Play,
  MapPin
} from 'lucide-react';

interface WhyChooseSectionProps {
  onOpenBooking?: (treatment?: string) => void;
  onOpenVideo?: (videoSrc?: string) => void;
}

const WHY_CHOOSE_ITEMS = [
  'Comprehensive Specialties',
  'Research and Development',
  'Emergency Services',
  'Advanced Imaging Services',
  'Intensive Care Units (ICUs)',
  'Rehabilitation Services',
  'Telemedicine Facilities',
  'Patient-Centric Approach',
  'Multidisciplinary Team',
  'Health Information Technology',
];

const TESTIMONIAL_SLIDES = [
  {
    id: 0,
    quote:
      'Dr. Arti Patel at SKINIC – Dr. Arti Patel took the time to thoroughly examine my skin and explain the root cause of my recurring acne and pigmentation. The care plan was gentle, practical, and tailored to my daily routine in Ahmedabad.',
    author: 'Verified Clinic Visitor',
    role: 'SKINIC – Dr. Arti Patel • Ahmedabad',
    badge: 'Best Treatment',
    image: '/images/testimonial/large/img1.webp',
  },
  {
    id: 1,
    quote:
      'The clinic environment at SKINIC – Dr. Arti Patel (Rosevill Sky, Nikol–Naroda Road) is spotless and calming. Everything from scheduling on WhatsApp to the in-depth trichology and skincare consultation felt professional and unhurried.',
    author: 'Patient Feedback',
    role: 'SKINIC – Dr. Arti Patel • New Naroda',
    badge: 'Personalized Care',
    image: '/images/testimonial/large/img1.webp',
  },
  {
    id: 2,
    quote:
      'Highly recommend SKINIC – Dr. Arti Patel for ethical cosmetic dermatology and laser consultations. No unnecessary procedures—only clear, honest medical advice.',
    author: 'Google Review Visitor',
    role: 'SKINIC – Dr. Arti Patel • Ahmedabad',
    badge: 'Expert Guidance',
    image: '/images/testimonial/large/img1.webp',
  },
];

const BLOG_POSTS = [
  {
    id: 0,
    date: '12 Jan 2026',
    title: 'Radiant reflections: expert dermatology at SKINIC – Dr. Arti Patel.',
    excerpt:
      'Discover how barrier-first skincare routines and targeted dermatological care protect your skin in humid and sunny climates.',
    largeImg: '/images/blog/large/img1.webp',
    thumbImg: '/images/blog/middle/img1.webp',
  },
  {
    id: 1,
    date: '18 Jan 2026',
    title: 'Understanding acne scars & pigmentation care with Dr. Arti Patel.',
    excerpt:
      'Learn why early clinical evaluation prevents post-inflammatory hyperpigmentation and supports smoother skin texture.',
    largeImg: '/images/blog/large/img2.webp',
    thumbImg: '/images/blog/middle/img2.webp',
  },
  {
    id: 2,
    date: '24 Jan 2026',
    title: 'Essential hair & scalp wellness guide by SKINIC – Dr. Arti Patel.',
    excerpt:
      'Practical trichology insights on managing seasonal hair shedding, dandruff, and maintaining follicular strength.',
    largeImg: '/images/blog/large/img3.webp',
    thumbImg: '/images/blog/middle/img3.webp',
  },
];

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  onOpenBooking,
  onOpenVideo,
}) => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [activeBlog, setActiveBlog] = useState<number>(0);
  const [activeClinicVideo, setActiveClinicVideo] = useState<number>(0);

  return (
    <>
      {/* ==================== BLOCK 10: WHY CHOOSE US + VIDEO CALL + GALLERY STRIP ==================== */}
      <section id="why-us" className="py-16 lg:py-24 bg-[#FFFCF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
            {/* Left Column: Why Choose Us List + Navy Appointment Button + Phone Ring */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-4xl xl:text-[42px] font-bold text-[#0A3366] capitalize mb-3">
                  why choose us
                </h2>
                <p className="text-sm sm:text-base xl:text-lg text-[#566593] font-light leading-relaxed">
                  At SKINIC – Dr. Arti Patel, we combine thorough clinical diagnostics with individualized cosmetic dermatology in a calm, hygienic environment.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#0A3366]">
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm sm:text-base font-medium py-1"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#F46700] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-8">
                <button
                  type="button"
                  onClick={() => onOpenBooking && onOpenBooking()}
                  className="inline-flex items-center bg-[#0A3366] hover:bg-[#031742] text-white font-semibold text-base pl-6 pr-2 py-2 rounded-[15px] shadow-lg transition-all cursor-pointer group"
                >
                  <span>Appointment</span>
                  <span className="w-11 h-11 bg-white rounded-[12px] text-[#0A3366] inline-flex items-center justify-center ml-3.5 group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>

                <div className="inline-flex items-center gap-3.5">
                  <div className="text-[#F46700]">
                    <PhoneCall className="w-8 h-8 animate-dzRing" />
                  </div>
                  <div>
                    <h6 className="text-xs text-[#566593] font-normal">Contact us?</h6>
                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="text-base sm:text-lg font-bold text-[#0A3366] hover:text-[#F46700] transition-colors"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Staggered 2-Column Video Call & Google Card Layout */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                {/* Sub-col 1: Clinic Video + Video Call Support Badge + Frosted Call Bar */}
                <div className="relative">
                  <video
                    src="/videos/clinic-video-2.mp4"
                    poster="/images/about/img6.webp"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-80 sm:h-[430px] object-cover rounded-3xl shadow-lg bg-[#0A3366]"
                  />

                  {/* Floating Video Call Support Card */}
                  <div className="hidden sm:flex items-center gap-3 bg-white shadow-xl absolute top-[58%] -left-6 rounded-2xl rounded-br-none py-3 px-4">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 44 44"
                      fill="none"
                    >
                      <path
                        d="M37.6232 13.8804L27.0337 21.4443L37.6232 29.0083V13.8804Z"
                        stroke="#F46700"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24.0081 10.855H7.36738C5.6964 10.855 4.3418 12.2096 4.3418 13.8806V29.0085C4.3418 30.6795 5.6964 32.0341 7.36738 32.0341H24.0081C25.6791 32.0341 27.0337 30.6795 27.0337 29.0085V13.8806C27.0337 12.2096 25.6791 10.855 24.0081 10.855Z"
                        stroke="#F46700"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs font-semibold text-[#0A3366] leading-tight">
                      SKINIC <br /> Video Tour
                    </span>
                  </div>

                  {/* Bottom Frosted Call Control Bar */}
                  <div className="absolute bottom-5 left-4 right-4 bg-white/55 backdrop-blur-xl h-13 rounded-full flex items-center justify-between px-5 shadow-md">
                    <button
                      type="button"
                      onClick={() => onOpenVideo && onOpenVideo('/videos/clinic-video-1.mp4')}
                      className="cursor-pointer"
                    >
                      <img src="/images/svg/camra.svg" alt="Camera" className="w-5 h-5" />
                    </button>
                    <button type="button" onClick={() => onOpenBooking && onOpenBooking()} className="cursor-pointer">
                      <img src="/images/svg/message.svg" alt="Message" className="w-5 h-5" />
                    </button>
                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="bg-red-500 w-8 h-8 p-1.5 flex items-center justify-center rounded-full shadow-xs"
                    >
                      <img src="/images/svg/call.svg" alt="Call" className="w-5 h-5" />
                    </a>
                    <button type="button" onClick={() => onOpenBooking && onOpenBooking()} className="cursor-pointer">
                      <img src="/images/svg/mike.svg" alt="Mic" className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenVideo && onOpenVideo('/videos/clinic-video-2.mp4')}
                      className="cursor-pointer"
                    >
                      <img src="/images/svg/video.svg" alt="Video" className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Sub-col 2: Google Rating Card + Clinic Video 3 */}
                <div className="space-y-4 sm:mt-10">
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 bg-white rounded-3xl p-5 shadow-md border border-black/5 hover:border-[#F46700] transition-colors"
                  >
                    <img
                      src="/images/google.svg"
                      alt="Google"
                      className="w-12 h-12 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="font-bold text-sm text-[#0A3366] ml-1">
                          (4.8)
                        </span>
                      </div>
                      <span className="text-xs text-[#566593] block mt-0.5">
                        SKINIC – Dr. Arti Patel • Google Maps
                      </span>
                    </div>
                  </a>

                  <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                    <video
                      src="/videos/clinic-video-3.mp4"
                      poster="/images/about/img7.webp"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-80 sm:h-[360px] object-cover bg-[#0A3366]"
                    />
                    <button
                      type="button"
                      onClick={() => onOpenVideo && onOpenVideo('/videos/clinic-video-3.mp4')}
                      aria-label="Play full clinic video"
                      className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#F46700] text-white flex items-center justify-center shadow-lg hover:bg-[#0A3366] transition-colors cursor-pointer"
                    >
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CLINIC GOOGLE MAPS VIDEO SHOWCASE ==================== */}
      <section id="clinic-video" className="py-16 lg:py-20 bg-[#FDF5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#F46700]/10 text-[#F46700] text-xs font-semibold mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Verified Google Maps Clinic Videos</span>
              </span>
              <h2 className="text-2xl sm:text-4xl xl:text-[42px] font-bold text-[#0A3366] capitalize leading-tight">
                Experience SKINIC – Dr. Arti Patel in Action
              </h2>
            </div>

            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start md:self-auto inline-flex items-center gap-2 py-3 px-6 rounded-2xl bg-white hover:bg-[#0A3366] text-[#0A3366] hover:text-white font-semibold text-sm shadow-md border border-black/5 transition-colors"
            >
              <span>View on Google Maps</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Featured Video Player */}
            <div className="lg:col-span-8">
              <div className="relative rounded-3xl overflow-hidden bg-[#0A3366] shadow-2xl border-4 border-white aspect-video">
                <video
                  key={CLINIC_VIDEOS[activeClinicVideo].src}
                  src={CLINIC_VIDEOS[activeClinicVideo].src}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain bg-black"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 bg-white rounded-2xl p-4 sm:px-6 shadow-xs border border-black/5">
                <div>
                  <h3 className="text-lg font-bold text-[#0A3366]">
                    {CLINIC_VIDEOS[activeClinicVideo].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#566593]">
                    {CLINIC_VIDEOS[activeClinicVideo].subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenBooking && onOpenBooking(CLINIC_VIDEOS[activeClinicVideo].title)}
                  className="py-2.5 px-5 rounded-xl bg-[#F46700] hover:bg-[#cf5800] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Book Consultation
                </button>
              </div>
            </div>

            {/* Right Playlist of Clinic Videos from Google Maps */}
            <div className="lg:col-span-4 space-y-3">
              {CLINIC_VIDEOS.map((vid, idx) => {
                const isCurrent = activeClinicVideo === idx;
                return (
                  <button
                    key={vid.id}
                    type="button"
                    onClick={() => setActiveClinicVideo(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl flex items-center gap-3.5 transition-all cursor-pointer border ${
                      isCurrent
                        ? 'bg-[#0A3366] text-white border-[#0A3366] shadow-lg'
                        : 'bg-white text-[#0A3366] border-black/5 hover:border-[#F46700]'
                    }`}
                  >
                    <div className="w-20 h-14 rounded-xl overflow-hidden bg-black shrink-0 relative">
                      <video
                        src={vid.src}
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover opacity-85"
                      />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center ${
                            isCurrent ? 'bg-[#F46700] text-white' : 'bg-white/90 text-[#0A3366]'
                          }`}
                        >
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </span>
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4
                        className={`text-sm font-bold truncate ${
                          isCurrent ? 'text-white' : 'text-[#0A3366]'
                        }`}
                      >
                        {vid.title}
                      </h4>
                      <span
                        className={`text-xs block truncate ${
                          isCurrent ? 'text-white/75' : 'text-[#566593]'
                        }`}
                      >
                        {vid.subtitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Panoramic Gallery Strip from Template */}
      <div className="w-full overflow-hidden bg-[#FFFCF8]">
        <img
          src="/images/gallery.png"
          alt="SKINIC Clinic Visual Showcase"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* ==================== BLOCK 11: WHAT OUR PATIENT SAY ==================== */}
      <section className="py-16 lg:py-24 bg-[#FFFCF8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl xl:text-[44px] font-bold text-[#0A3366] capitalize mb-2.5">
              What our patient say
            </h2>
            <p className="text-sm sm:text-base text-[#566593] font-light">
              Read patient experiences and visit our verified Google Business Profile for authentic reviews of SKINIC – Dr. Arti Patel.
            </p>
          </div>

          {/* Active Testimonial Slide */}
          <div className="max-w-5xl mx-auto">
            {TESTIMONIAL_SLIDES.map((slide, idx) => {
              if (idx !== activeTestimonial) return null;
              return (
                <div
                  key={slide.id}
                  className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 lg:gap-12"
                >
                  {/* Left Quote Side */}
                  <div className="md:col-span-7 space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#F46700]/10 text-[#F46700] flex items-center justify-center">
                      <Quote className="w-8 h-8 fill-current" />
                    </div>

                    <p className="text-lg sm:text-xl xl:text-2xl text-[#0A3366] leading-relaxed font-normal">
                      “{slide.quote}”
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <h5 className="text-xl font-bold text-[#0A3366]">
                          {slide.author}
                        </h5>
                        <span className="text-sm text-[#566593]">{slide.role}</span>
                      </div>

                      <a
                        href={CLINIC_INFO.googleProfileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-[#F46700] hover:underline flex items-center gap-1"
                      >
                        <span>Read Google Reviews</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Pagination Dots (01 / 02 / 03) */}
                    <div className="flex items-center gap-3 pt-4">
                      {TESTIMONIAL_SLIDES.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={() => setActiveTestimonial(dotIdx)}
                          className={`h-2.5 rounded-full transition-all cursor-pointer ${
                            activeTestimonial === dotIdx
                              ? 'w-9 bg-[#F46700]'
                              : 'w-2.5 bg-[#0A3366]/20 hover:bg-[#0A3366]/40'
                          }`}
                          aria-label={`View testimonial ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right Arched Image + Floating 5-Star Card */}
                  <div className="md:col-span-5 relative">
                    <div className="relative h-80 sm:h-96 rounded-3xl rounded-br-[120px] overflow-hidden shadow-xl">
                      <img
                        src={slide.image}
                        alt={slide.author}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="absolute bottom-6 -left-4 sm:-left-8 bg-white rounded-2xl py-4 px-6 shadow-xl border border-black/5">
                      <div className="flex gap-1 text-amber-500 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <h3 className="text-base font-bold text-[#0A3366]">
                        {slide.badge}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== BLOCK 12: STAY INFORMED WITH OUR LATEST HEALTH BLOGS ==================== */}
      <section id="blogs" className="py-16 lg:py-24 bg-[#FDF5E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <h2 className="text-2xl sm:text-4xl xl:text-[42px] font-bold text-[#0A3366] capitalize leading-tight">
              Stay Informed with <br /> Our Latest Health Blogs
            </h2>

            <button
              type="button"
              onClick={() => onOpenBooking && onOpenBooking('Skincare Guidance Consultation')}
              className="self-start sm:self-auto inline-flex items-center bg-[#F46700] hover:bg-[#cf5800] text-white font-semibold text-sm sm:text-base pl-6 pr-2 py-2 rounded-[15px] shadow-md transition-all cursor-pointer group"
            >
              <span>View All</span>
              <span className="w-10 h-10 bg-white rounded-[12px] text-[#0A3366] inline-flex items-center justify-center ml-3 group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Large Featured Image Synced with Active Blog */}
            <div className="lg:col-span-5">
              <div className="h-80 sm:h-[520px] lg:h-full rounded-3xl overflow-hidden shadow-lg relative">
                <img
                  src={BLOG_POSTS[activeBlog].largeImg}
                  alt={BLOG_POSTS[activeBlog].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </div>

            {/* Right 3 Stacked Horizontal Blog Cards */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-5">
              {BLOG_POSTS.map((post, idx) => {
                const isSelected = activeBlog === idx;
                return (
                  <div
                    key={post.id}
                    onMouseEnter={() => setActiveBlog(idx)}
                    onClick={() => setActiveBlog(idx)}
                    className={`flex flex-col md:flex-row items-center gap-6 p-4 rounded-3xl bg-white/80 hover:bg-white border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'border-[#F46700] shadow-md bg-white'
                        : 'border-transparent'
                    }`}
                  >
                    <div className="flex-1 space-y-2.5">
                      <span className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-[#F46700]/10 text-[#F46700] text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F46700]" />
                        {post.date}
                      </span>

                      <h3 className="text-xl xl:text-2xl font-bold text-[#0A3366] hover:text-[#F46700] transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#566593] leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="w-full md:w-56 h-40 shrink-0 relative rounded-2xl overflow-hidden">
                      <img
                        src={post.thumbImg}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBooking && onOpenBooking(post.title);
                        }}
                        aria-label={`Read ${post.title}`}
                        className="w-11 h-11 rounded-full bg-white hover:bg-[#F46700] text-[#0A3366] hover:text-white absolute bottom-3 right-3 flex items-center justify-center shadow-md transition-colors cursor-pointer"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
