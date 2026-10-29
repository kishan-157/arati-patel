import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ClinicLogo } from './ClinicLogo';
import {
  Phone,
  Mail,
  Clock,
  Send,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  onOpenBooking: (treatment?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [subEmail, setSubEmail] = useState('');
  const [subSent, setSubSent] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollPct(pct);
      setShowTopBtn(scrollTop > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dashOffset = 100.53 - (100.53 * scrollPct) / 100;

  return (
    <>
      <footer
        className="text-[#BED2E7] bg-[#07121E] bg-blend-luminosity bg-cover bg-no-repeat bg-center relative"
        style={{ backgroundImage: 'url(/images/background/bg1.webp)' }}
      >
        {/* Footer Head: White Logo on Left + Contact Us & Appointment Buttons on Right */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-10 pb-6 border-b border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="#home" className="focus:outline-none">
              <ClinicLogo variant="white" />
            </a>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="py-3 px-7 rounded-2xl border border-white text-white hover:bg-white hover:text-[#0A3366] font-semibold text-sm sm:text-base transition-colors"
              >
                Contact Us
              </a>

              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="py-3 px-7 rounded-2xl bg-white hover:bg-[#F46700] text-[#F46700] hover:text-white font-semibold text-sm sm:text-base transition-colors cursor-pointer"
              >
                Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Footer Top: Newsletter + 4 Link Columns */}
        <div className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Newsletter Column */}
              <div className="lg:col-span-4 space-y-4">
                <h2 className="text-xl font-medium text-white leading-snug">
                  Important Updates <br />
                  Waiting for you
                </h2>
                <p className="text-sm text-[#BED2E7] leading-relaxed">
                  Get our latest skincare insights and clinic updates right into your inbox
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubSent(true);
                    setSubEmail('');
                  }}
                  className="relative flex items-center"
                >
                  <input
                    type="email"
                    required
                    value={subEmail}
                    onChange={(e) => setSubEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="w-full py-3.5 pl-5 pr-14 text-sm text-[#BED2E7] bg-[#07121E]/90 border border-white/15 rounded-2xl placeholder:text-[#BED2E7]/70 focus:outline-none focus:border-[#F46700]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-2 w-10 h-10 rounded-xl text-[#F46700] hover:bg-[#F46700] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                {subSent && (
                  <p className="text-xs text-emerald-400">Subscribed! Thank you for connecting with SKINIC.</p>
                )}
              </div>

              {/* 4 Navigation Columns */}
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
                {/* Col 1: Our Services */}
                <div>
                  <h2 className="text-lg font-medium text-white mb-4">Our Services</h2>
                  <ul className="space-y-2.5 text-sm">
                    {[
                      'Cosmetic Dermatology',
                      'Acne & Scar Care',
                      'Pigmentation Care',
                      'Laser Hair Reduction',
                      'Skin Rejuvenation',
                    ].map((srv) => (
                      <li key={srv}>
                        <button
                          type="button"
                          onClick={() => onOpenBooking(srv)}
                          className="hover:text-[#F46700] transition-colors text-left cursor-pointer"
                        >
                          {srv}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 2: Useful Links */}
                <div>
                  <h2 className="text-lg font-medium text-white mb-4">Useful Links</h2>
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <a href="#about" className="hover:text-[#F46700] transition-colors">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#faqs" className="hover:text-[#F46700] transition-colors">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="hover:text-[#F46700] transition-colors">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#blogs" className="hover:text-[#F46700] transition-colors">
                        Latest News
                      </a>
                    </li>
                    <li>
                      <a
                        href={CLINIC_INFO.googleProfileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F46700] transition-colors"
                      >
                        Google Reviews
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Col 3: Nearby Hubs */}
                <div>
                  <h2 className="text-lg font-medium text-white mb-4">Areas Served</h2>
                  <ul className="space-y-2.5 text-sm">
                    {['New Naroda', 'Nikol Road', 'Shukan Char Rasta', 'Bapunagar', 'Ahmedabad'].map(
                      (loc) => (
                        <li key={loc}>
                          <a
                            href={CLINIC_INFO.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#F46700] transition-colors"
                          >
                            {loc}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Col 4: Quick Links */}
                <div>
                  <h2 className="text-lg font-medium text-white mb-4">Quick Links</h2>
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <a href="#about-doctor" className="hover:text-[#F46700] transition-colors">
                        About Dr. Arti Patel
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="hover:text-[#F46700] transition-colors">
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="#specialists" className="hover:text-[#F46700] transition-colors">
                        Specialists
                      </a>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => onOpenBooking()}
                        className="hover:text-[#F46700] transition-colors cursor-pointer"
                      >
                        Appointments
                      </button>
                    </li>
                    <li>
                      <a href="#contact" className="hover:text-[#F46700] transition-colors">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Middle Contact Bar (#07121E rounded-3xl) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#07121E] border border-white/10 rounded-3xl py-6 px-6 sm:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Get in Touch with us
                </h3>
                <p className="text-xs text-[#BED2E7]">
                  SKINIC – Dr. Arti Patel, Ahmedabad
                </p>
              </div>

              {/* Call Us */}
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 rounded-full bg-[#F46700] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-base font-medium text-white">Call Us</h5>
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="text-sm text-[#BED2E7] hover:text-[#F46700] transition-colors"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Location / WhatsApp */}
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 rounded-full bg-[#F46700] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-base font-medium text-white">Clinic Location</h5>
                  <p className="text-xs text-[#BED2E7] line-clamp-2">
                    Rosevill Sky, Nikol–Naroda Rd, Ahmedabad
                  </p>
                </div>
              </div>

              {/* Opening Time */}
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 rounded-full bg-[#F46700] text-white flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-base font-medium text-white">Opening Time</h5>
                  <p className="text-sm text-[#BED2E7]">Mon - Sat: 10:00 - 20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright + Disclaimer + Payment Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 md:pb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-center lg:text-left space-y-1">
              <p>
                © {new Date().getFullYear()}{' '}
                <span className="text-[#F46700] font-semibold">
                  SKINIC – Dr. Arti Patel
                </span>
                . All Rights Reserved.
              </p>
              <p className="text-xs text-[#BED2E7]/70 max-w-2xl">
                {CLINIC_INFO.disclaimer}
              </p>
            </div>

            <div className="text-center lg:text-right">
              <img
                src="/images/card.webp"
                alt="Accepted payment methods"
                className="inline-block max-h-7 w-auto"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Circular SVG Progress Scroll-To-Top Button (Exact ClinicMaster #scrollProgress) */}
      {showTopBtn && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Scroll to top"
          className="fixed z-40 right-5 bottom-20 md:bottom-6 w-12 h-12 rounded-full bg-[#0A3366] text-white cursor-pointer flex items-center justify-center shadow-xl hover:bg-[#F46700] transition-colors"
        >
          <ArrowUp className="w-4 h-4 relative z-10" />
          <svg
            className="absolute top-0 left-0 -rotate-90"
            width="48"
            height="48"
            viewBox="0 0 50 50"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="#FFFFFF"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="100.53"
              strokeDashoffset={dashOffset}
            />
          </svg>
        </button>
      )}
    </>
  );
};
