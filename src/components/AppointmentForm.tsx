import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Sparkles,
  MessageCircle,
  AlertCircle,
  PhoneCall,
  Check
} from 'lucide-react';

interface AppointmentFormProps {
  initialTreatment?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialTreatment = '',
  onSuccess,
  isModal = false
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('Morning (10:00 AM - 1:00 PM)');
  const [treatmentInterest, setTreatmentInterest] = useState(
    initialTreatment || 'Cosmetic Dermatology'
  );
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialTreatment) {
      setTreatmentInterest(initialTreatment);
    }
  }, [initialTreatment]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const cleanPhone = phone.replace(/[\s\-()]/g, '');
    if (!phone.trim()) {
      newErrors.phone = 'Please enter your contact number';
    } else if (!/^\+?[0-9]{10,13}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!date) {
      newErrors.date = 'Please select a preferred date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      `*Appointment Consultation Enquiry – SKINIC*`,
      ``,
      `Hello Dr. Arti Patel / Clinic Team,`,
      `I would like to enquire about booking a consultation:`,
      `• *Patient Name:* ${name.trim()}`,
      `• *Contact Number:* ${phone.trim()}`,
      `• *Preferred Date:* ${date}`,
      `• *Preferred Time:* ${timeSlot}`,
      `• *Consultation Concern:* ${treatmentInterest}`,
    ];

    if (message.trim()) {
      lines.push(`• *Additional Note:* ${message.trim()}`);
    }

    lines.push(``);
    lines.push(`Please let me know available slots to confirm this appointment. Thank you!`);

    const fullMessage = lines.join('\n');
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodedMessage}`;

    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, 1500);
    }
  };

  return (
    <div
      className={`w-full ${
        isModal
          ? 'p-0'
          : 'bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-xl'
      }`}
    >
      {submitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 bg-[#F46700]/15 text-[#F46700] rounded-full flex items-center justify-center mx-auto">
            <Check className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-[#0A3366]">WhatsApp Enquiry Launched</h3>
          <p className="text-sm text-[#566593] max-w-md mx-auto leading-relaxed">
            Your consultation request has been prepared in WhatsApp. Please press{' '}
            <strong className="text-[#0A3366]">Send</strong> in WhatsApp to deliver the message to our clinic desk.
          </p>
          <div className="bg-[#FDF5E8] rounded-2xl p-4 max-w-sm mx-auto text-xs text-[#0A3366] space-y-1">
            <p className="font-semibold">Confirmation Notice:</p>
            <p className="text-[#566593]">
              Appointments are confirmed by the clinic based on Dr. Arti Patel&apos;s schedule availability.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-xs font-semibold text-[#F46700] underline underline-offset-4 cursor-pointer"
            >
              Send another enquiry
            </button>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="text-xs font-semibold text-[#0A3366] flex items-center gap-1.5 hover:text-[#F46700]"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F46700]" /> Call clinic: {CLINIC_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label
              htmlFor="modal-patient-name"
              className="block text-xs font-semibold uppercase tracking-wider text-[#0A3366] mb-1.5"
            >
              Patient Full Name <span className="text-[#F46700]">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#F46700] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="modal-patient-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priya Sharma"
                className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-[#FDF5E8]/50 focus:bg-white text-[#0A3366] focus:outline-none transition-colors ${
                  errors.name ? 'border-red-500' : 'border-black/10 focus:border-[#F46700]'
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="modal-patient-phone"
              className="block text-xs font-semibold uppercase tracking-wider text-[#0A3366] mb-1.5"
            >
              Contact / WhatsApp Number <span className="text-[#F46700]">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-[#F46700] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="modal-patient-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 98765 43210"
                className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-[#FDF5E8]/50 focus:bg-white text-[#0A3366] focus:outline-none transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-black/10 focus:border-[#F46700]'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.phone}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="modal-preferred-date"
                className="block text-xs font-semibold uppercase tracking-wider text-[#0A3366] mb-1.5"
              >
                Preferred Date <span className="text-[#F46700]">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-[#F46700] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="modal-preferred-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-black/10 bg-[#FDF5E8]/50 focus:bg-white text-[#0A3366] focus:outline-none focus:border-[#F46700]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="modal-preferred-time"
                className="block text-xs font-semibold uppercase tracking-wider text-[#0A3366] mb-1.5"
              >
                Preferred Slot
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-[#F46700] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="modal-preferred-time"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-black/10 bg-[#FDF5E8]/50 focus:bg-white text-[#0A3366] focus:outline-none focus:border-[#F46700]"
                >
                  <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                  <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="modal-treatment"
              className="block text-xs font-semibold uppercase tracking-wider text-[#0A3366] mb-1.5"
            >
              Service / Consultation Focus
            </label>
            <div className="relative">
              <Sparkles className="w-4 h-4 text-[#F46700] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="modal-treatment"
                type="text"
                value={treatmentInterest}
                onChange={(e) => setTreatmentInterest(e.target.value)}
                list="skinic-services-list"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-black/10 bg-[#FDF5E8]/50 focus:bg-white text-[#0A3366] focus:outline-none focus:border-[#F46700]"
              />
              <datalist id="skinic-services-list">
                <option value="Cosmetic Dermatology" />
                <option value="Dermatologic Surgery & Acne Scars" />
                <option value="Earlobe Repair & Pigmentation" />
                <option value="Laser Resurfacing & Hair Reduction" />
                <option value="Anti Aging & Skin Rejuvenation" />
                {TREATMENTS.map((t) => (
                  <option key={t.id} value={t.title} />
                ))}
              </datalist>
            </div>
          </div>

          <div>
            <label
              htmlFor="modal-notes"
              className="block text-xs font-semibold uppercase tracking-wider text-[#0A3366] mb-1.5"
            >
              Notes <span className="text-[#566593] font-normal normal-case">(optional)</span>
            </label>
            <textarea
              id="modal-notes"
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Any specific skin or hair concern..."
              className="w-full px-4 py-2 text-sm rounded-xl border border-black/10 bg-[#FDF5E8]/50 focus:bg-white text-[#0A3366] focus:outline-none focus:border-[#F46700]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 bg-[#F46700] hover:bg-[#cf5800] text-white font-semibold text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book An Appointment via WhatsApp</span>
          </button>

          <p className="text-[11px] text-[#566593] text-center">
            Opens WhatsApp to <strong className="text-[#0A3366]">{CLINIC_INFO.phoneDisplay}</strong> • SKINIC, New Naroda, Ahmedabad
          </p>
        </form>
      )}
    </div>
  );
};
