import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface FloatingMobileActionsProps {
  onOpenBooking: () => void;
}

export const FloatingMobileActions: React.FC<FloatingMobileActionsProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-black/10 shadow-lg px-3 py-2"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#FDF5E8] text-[#0A3366] text-[11px] font-semibold"
        >
          <Phone className="w-4 h-4 text-[#F46700] mb-0.5" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=Hello%20Dr.%20Arti%20Patel%20%2F%20SKINIC%2C%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#FDF5E8] text-[#0A3366] text-[11px] font-semibold"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#F46700] text-white text-[11px] font-semibold shadow-xs cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span>Appointment</span>
        </button>
      </div>
    </aside>
  );
};
