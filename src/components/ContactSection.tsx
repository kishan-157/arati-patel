import React, { useState } from 'react';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';
import { ClinicLogo } from './ClinicLogo';
import {
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  Sparkles,
  X,
  MessageSquare,
  Check,
  MapPin
} from 'lucide-react';

interface ContactSectionProps {
  selectedTreatment?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedTreatment }) => {
  const [showAddressCard, setShowAddressCard] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('11:00 AM');
  const [service, setService] = useState(selectedTreatment || 'Cosmetic Dermatology');
  const [errorMsg, setErrorMsg] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg('Please enter your Name and Phone Number.');
      return;
    }
    setErrorMsg('');

    const lines = [
      `*Appointment Booking Request – SKINIC*`,
      ``,
      `Hello Dr. Arti Patel / SKINIC Team,`,
      `I would like to book an appointment:`,
      `• *Name:* ${name.trim()}`,
      email.trim() ? `• *Email:* ${email.trim()}` : '',
      `• *Phone:* ${phone.trim()}`,
      `• *Preferred Date:* ${date}`,
      `• *Preferred Time:* ${time}`,
      `• *Service:* ${service}`,
      ``,
      `Please confirm available slot timing. Thank you!`,
    ].filter(Boolean);

    const encoded = encodeURIComponent(lines.join('\n'));
    window.open(
      `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encoded}`,
      '_blank',
      'noopener,noreferrer'
    );
    setSentSuccess(true);
  };

  const partnerLogos = [
    '/images/logo/small/logo1.png',
    '/images/logo/small/logo2.png',
    '/images/logo/small/logo3.png',
    '/images/logo/small/logo4.png',
    '/images/logo/small/logo5.png',
    '/images/logo/small/logo6.png',
  ];

  return (
    <section id="contact" className="bg-[#FDF5E8] relative">
      {/* Main Map + Floating Address Card + Right Dark Navy Booking Card */}
      <div className="relative pt-12 lg:pt-20 pb-12">
        {/* Background / Left Map Iframe */}
        <div className="lg:absolute relative w-full lg:h-full h-[420px] left-0 bottom-0 z-0">
          <iframe
            title="SKINIC – Dr. Arti Patel Location Map"
            src="https://www.google.com/maps?q=Rosevill+Sky+Shukan+Nikol+Naroda+Road+New+Naroda+Ahmedabad+382345&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Floating Dismissible Office Address Card (Exact ClinicMaster Block 13 style) */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {showAddressCard ? (
              <div
                role="region"
                aria-label="Clinic Address Card"
                className="bg-white p-6 sm:p-7 rounded-3xl w-76 sm:w-84 shadow-2xl absolute bottom-6 left-4 sm:left-8 z-20 border border-black/5"
              >
                <div className="mb-5">
                  <ClinicLogo variant="dark" />
                </div>

                <div className="mb-4">
                  <h6 className="text-base font-bold text-[#0A3366] mb-1">
                    Office Address:
                  </h6>
                  <p className="text-xs sm:text-sm text-[#566593] leading-relaxed">
                    {CLINIC_INFO.addressFull}
                  </p>
                </div>

                <div>
                  <h6 className="text-base font-bold text-[#0A3366] mb-1">
                    Working Hours:
                  </h6>
                  <p className="text-xs sm:text-sm text-[#566593] leading-relaxed">
                    Mon – Sat: 10:00am – 8:00pm <br />
                    Phone: {CLINIC_INFO.phoneDisplay}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAddressCard(false)}
                  aria-label="Hide address card"
                  className="absolute top-5 right-5 text-[#AFAAA4] hover:text-[#0A3366] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowAddressCard(true)}
                className="bg-white py-2.5 px-4 rounded-full shadow-lg text-xs font-bold text-[#0A3366] flex items-center gap-2 absolute bottom-6 left-6 z-20 cursor-pointer hover:bg-[#F46700] hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#F46700]" />
                <span>Show Office Address</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Side: Dark Navy (#0A3366) "Book Your Appointment" Form Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
          <div className="flex justify-end">
            <div className="w-full lg:w-6/12 xl:w-5/12 pointer-events-auto mt-6 lg:mt-0">
              <div className="relative rounded-3xl p-7 sm:p-10 xl:p-12 bg-[#0A3366] shadow-2xl overflow-hidden">
                {/* Decorative Speech Bubble Watermark in Top Right */}
                <MessageSquare className="w-28 h-28 text-white/5 absolute right-5 top-5 pointer-events-none" />

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 relative z-10">
                  Book Your Appointment
                </h2>

                {sentSuccess ? (
                  <div className="py-8 text-center text-white space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#F46700] text-white flex items-center justify-center mx-auto">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      WhatsApp Request Opened!
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Please click <strong>Send</strong> in WhatsApp to send your appointment details to SKINIC – Dr. Arti Patel ({CLINIC_INFO.phoneDisplay}).
                    </p>
                    <button
                      type="button"
                      onClick={() => setSentSuccess(false)}
                      className="py-2.5 px-5 rounded-xl bg-white text-[#0A3366] text-xs font-bold cursor-pointer"
                    >
                      Book Another Slot
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-red-500/20 border border-red-400 text-white text-xs">
                        {errorMsg}
                      </div>
                    )}

                    {/* Your Name */}
                    <div className="relative">
                      <User className="w-5 h-5 text-[#F46700] absolute left-0 top-3.5" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full py-3 pl-9 text-base text-white placeholder:text-white/75 bg-transparent border-b border-white/70 focus:border-[#F46700] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Your Email */}
                    <div className="relative">
                      <Mail className="w-5 h-5 text-[#F46700] absolute left-0 top-3.5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="w-full py-3 pl-9 text-base text-white placeholder:text-white/75 bg-transparent border-b border-white/70 focus:border-[#F46700] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                      <Phone className="w-5 h-5 text-[#F46700] absolute left-0 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone Number"
                        className="w-full py-3 pl-9 text-base text-white placeholder:text-white/75 bg-transparent border-b border-white/70 focus:border-[#F46700] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Date & Time Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative">
                        <Calendar className="w-5 h-5 text-[#F46700] absolute left-0 top-3.5 pointer-events-none" />
                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full py-3 pl-9 text-base text-white bg-transparent border-b border-white/70 focus:border-[#F46700] focus:outline-none transition-colors scheme-dark"
                        />
                      </div>

                      <div className="relative">
                        <Clock className="w-5 h-5 text-[#F46700] absolute left-0 top-3.5 pointer-events-none" />
                        <select
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="w-full py-3 pl-9 text-base text-white bg-[#0A3366] border-b border-white/70 focus:border-[#F46700] focus:outline-none transition-colors"
                        >
                          <option value="10:30 AM">10:30 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="03:00 PM">03:00 PM</option>
                          <option value="05:00 PM">05:00 PM</option>
                          <option value="07:00 PM">07:00 PM</option>
                        </select>
                      </div>
                    </div>

                    {/* Service Selector */}
                    <div className="relative">
                      <Sparkles className="w-5 h-5 text-[#F46700] absolute left-0 top-3.5 pointer-events-none" />
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full py-3 pl-9 text-base text-white bg-[#0A3366] border-b border-white/70 focus:border-[#F46700] focus:outline-none transition-colors"
                      >
                        <option value="Cosmetic Dermatology">Cosmetic Dermatology</option>
                        {TREATMENTS.map((t) => (
                          <option key={t.id} value={t.title}>
                            {t.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-2xl bg-[#F46700] hover:bg-[#cf5800] text-white font-semibold text-base shadow-lg transition-all cursor-pointer mt-2"
                    >
                      Book An appointment
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner / Skincare Logos Strip at Bottom of Block 13 */}
      <div className="py-10 bg-[#FDF5E8] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {partnerLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center py-3 px-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Partner skincare brand ${idx + 1}`}
                  className="max-h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
