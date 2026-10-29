import React, { useState, useEffect } from 'react';
import { ClinicLogo } from './ClinicLogo';
import { CLINIC_INFO } from '../data/clinicData';
import {
  PhoneCall,
  ArrowRight,
  X,
  MapPin,
  Mail,
  Send,
  Menu
} from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (treatment?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [infoDrawerOpen, setInfoDrawerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#services' },
    { name: 'Before & After', href: '#results' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Specialists', href: '#specialists' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black/10 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-[#FDF5E8]/90 backdrop-blur-xs'
        }`}
      >
        <div className="w-full flex items-center justify-between h-20 relative xl:pl-20 px-4 sm:px-6 lg:px-8">
          {/* Leftmost Offcanvas Toggle Button (Exact ClinicMaster 80px square box) */}
          <div className="border-r border-black/10 h-full w-20 min-w-20 hidden xl:flex justify-center items-center absolute left-0 top-0">
            <button
              type="button"
              onClick={() => setInfoDrawerOpen(true)}
              aria-label="Open clinic information drawer"
              className="py-2.5 px-4 rounded-lg cursor-pointer group"
            >
              <span className="w-5 h-0.5 bg-[#0A3366] block transition-all duration-300 group-hover:bg-[#F46700]" />
              <span className="w-4 my-1.5 h-0.5 bg-[#0A3366] block transition-all duration-300 group-hover:w-5 group-hover:bg-[#F46700]" />
              <span className="w-5 h-0.5 bg-[#0A3366] block transition-all duration-300 group-hover:bg-[#F46700]" />
            </button>
          </div>

          {/* Website Logo */}
          <div className="flex items-center xl:ml-4">
            <a href="#home" className="focus:outline-none">
              <ClinicLogo variant="dark" />
            </a>
          </div>

          {/* Desktop Navigation Links with 4-point star separator */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-2 px-2.5 xl:px-3 text-[15px] font-medium text-[#0A3366] hover:text-[#F46700] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>{item.name}</span>
                <svg
                  className="w-2.5 h-2.5 text-[#F46700] opacity-75"
                  viewBox="0 0 14 14"
                  fill="currentColor"
                >
                  <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" />
                </svg>
              </a>
            ))}
          </nav>

          {/* Right Action Widgets */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Phone Call Widget */}
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="hidden 2xl:inline-flex items-center gap-3 group"
            >
              <div className="w-11 h-11 rounded-full bg-[#F46700]/10 text-[#F46700] flex items-center justify-center">
                <PhoneCall className="w-5 h-5 animate-dzRing" />
              </div>
              <div className="text-left leading-tight">
                <span className="block text-xs text-[#566593]">Contact us?</span>
                <span className="text-sm font-bold text-[#0A3366] group-hover:text-[#F46700] transition-colors">
                  {CLINIC_INFO.phoneDisplay}
                </span>
              </div>
            </a>

            {/* Primary Appointment Button (Exact ClinicMaster style with white icon box) */}
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center bg-[#F46700] hover:bg-[#cf5800] text-white font-medium text-sm sm:text-base pl-5 pr-1.5 py-1.5 rounded-[15px] shadow-[0_10px_25px_rgba(244,103,0,0.28)] transition-all cursor-pointer group"
            >
              <span>Appointment</span>
              <span className="w-10 h-10 bg-white rounded-[12px] text-[#0A3366] inline-flex items-center justify-center ml-3 group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden w-11 h-11 rounded-lg bg-[#0A3366] text-white flex items-center justify-center cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-72 max-w-[85vw] bg-white h-full overflow-y-auto p-6 z-10 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-gray-200">
                <ClinicLogo variant="dark" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#0A3366]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ul className="mt-4 divide-y divide-gray-100">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-3 flex items-center justify-between text-sm font-semibold text-[#0A3366] hover:text-[#F46700]"
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-4 h-4 text-[#F46700]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-200 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 bg-[#F46700] text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="w-full py-2.5 px-4 bg-[#FDF5E8] text-[#0A3366] rounded-xl font-semibold text-xs flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#F46700]" />
                <span>{CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Offcanvas Right Clinic Info Sidebar (#offcanvas-right) */}
      {infoDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setInfoDrawerOpen(false)}
          />
          <div className="relative w-full max-w-md bg-[#FFFCF8] h-full overflow-y-auto p-8 z-10 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-black/10">
                <ClinicLogo variant="dark" />
                <button
                  type="button"
                  onClick={() => setInfoDrawerOpen(false)}
                  className="w-9 h-9 rounded-full bg-[#FDF5E8] text-[#0A3366] hover:bg-[#F46700] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="my-7">
                <h4 className="text-xl font-bold text-[#0A3366] mb-3">About SKINIC – Dr. Arti Patel</h4>
                <p className="text-sm text-[#566593] leading-relaxed">
                  SKINIC – Dr. Arti Patel provides personalized dermatology, skin care, hair and cosmetology treatments in New Naroda, Ahmedabad. Combining clinical diagnostics with modern aesthetic care.
                </p>
              </div>

              <div className="my-7 space-y-4">
                <h4 className="text-xl font-bold text-[#0A3366] mb-3">Contact Us</h4>
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FDF5E8] text-[#F46700] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold text-[#0A3366]">Clinic Address</h6>
                    <p className="text-xs text-[#566593] leading-relaxed">{CLINIC_INFO.addressFull}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FDF5E8] text-[#F46700] flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold text-[#0A3366]">Call / WhatsApp</h6>
                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="text-sm font-bold text-[#F46700] hover:underline"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FDF5E8] text-[#F46700] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold text-[#0A3366]">Consultation Booking</h6>
                    <p className="text-xs text-[#566593]">Mon – Sat: 10:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="my-7">
                <h4 className="text-xl font-bold text-[#0A3366] mb-3">Newsletter</h4>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterSent(true);
                    setNewsletterEmail('');
                  }}
                  className="relative"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="w-full py-3 pl-4 pr-12 text-sm text-[#0A3366] border-b border-[#0A3366]/30 bg-transparent focus:outline-none focus:border-[#F46700]"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#F46700] p-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                {newsletterSent && (
                  <p className="text-xs text-emerald-600 mt-2">Thank you for subscribing to SKINIC updates!</p>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#0A3366] mb-3">Connect With Us</h4>
              <div className="flex items-center gap-2.5">
                {['Instagram', 'Facebook', 'Google', 'WhatsApp'].map((net) => (
                  <a
                    key={net}
                    href={net === 'WhatsApp' ? `https://wa.me/${CLINIC_INFO.whatsappNumber}` : CLINIC_INFO.googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-full bg-[#FDF5E8] text-[#F46700] hover:bg-[#F46700] hover:text-white text-xs font-semibold transition-colors"
                  >
                    {net}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
