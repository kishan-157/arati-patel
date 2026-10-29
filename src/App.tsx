/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { FaqSection } from './components/FaqSection';
import { DoctorSection } from './components/DoctorSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingMobileActions } from './components/FloatingMobileActions';
import { AppointmentModal } from './components/AppointmentModal';
import { ClinicChatbot } from './components/ClinicChatbot';
import { CLINIC_VIDEOS } from './data/clinicData';
import { X } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>('');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState<string>(CLINIC_VIDEOS[0].src);

  const handleOpenBooking = (treatmentName: string = '') => {
    setSelectedTreatment(treatmentName);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFCF8] text-[#566593] flex flex-col font-sans">
      {/* Header + Offcanvas Drawer */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content in Exact ClinicMaster Skincare Sequence */}
      <main className="flex-1">
        {/* Block 0 (Hero Banner), Block 1 (Beyond Skin Deep), Block 2 (Marquee Ticker) */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onOpenVideo={() => {
            setActiveVideoSrc(CLINIC_VIDEOS[0].src);
            setIsVideoOpen(true);
          }}
        />

        {/* Block 3 (Horizontal Expanding Accordion Services), Block 4 (Before/After Sliders) */}
        <TreatmentsSection onSelectTreatment={handleOpenBooking} />

        {/* Block 6 (Frequently Asked Questions + Portrait Image) */}
        <FaqSection />

        {/* Block 7 (We Employ only Specialists), Block 9 (About Dr. Arti Patel & Skills) */}
        <DoctorSection onOpenBooking={handleOpenBooking} />

        {/* Block 10 (Why Choose Us + Video Call + Google Maps Clinic Video Showcase + Full-width Gallery Strip), Block 11 (Testimonials), Block 12 (Health Blogs) */}
        <WhyChooseSection
          onOpenBooking={handleOpenBooking}
          onOpenVideo={(src) => {
            setActiveVideoSrc(src || CLINIC_VIDEOS[0].src);
            setIsVideoOpen(true);
          }}
        />

        {/* Block 13 (Google Map + Dismissible Office Address Card + Dark Navy Appointment Form + Partner Logos) */}
        <ContactSection selectedTreatment={selectedTreatment} />
      </main>

      {/* Block 14 (Dark Patterned Footer + Circular Scroll Progress Button) */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Mobile Floating Action Bar */}
      <FloatingMobileActions onOpenBooking={() => handleOpenBooking()} />

      {/* SKINIC – Dr. Arti Patel AI Chatbot */}
      <ClinicChatbot onOpenBooking={handleOpenBooking} />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        initialTreatment={selectedTreatment}
      />

      {/* Video Dialog Modal Playing Authentic SKINIC – Dr. Arti Patel Google Maps Videos */}
      {isVideoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0A3366] rounded-3xl overflow-hidden shadow-2xl border border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 bg-[#07121E] text-white border-b border-white/10">
              <div>
                <h3 className="text-base font-bold">SKINIC – Dr. Arti Patel • Clinic Videos</h3>
                <p className="text-xs text-white/70">Rosevill Sky, Nikol–Naroda Road, Ahmedabad</p>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                aria-label="Close video"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-[#F46700] text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video bg-black">
              <video
                key={activeVideoSrc}
                src={activeVideoSrc}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 bg-[#07121E] flex items-center gap-2.5 overflow-x-auto">
              {CLINIC_VIDEOS.map((vid, idx) => (
                <button
                  key={vid.id}
                  type="button"
                  onClick={() => setActiveVideoSrc(vid.src)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    activeVideoSrc === vid.src
                      ? 'bg-[#F46700] text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  Video {idx + 1}: {vid.title.split('–')[0].trim()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
