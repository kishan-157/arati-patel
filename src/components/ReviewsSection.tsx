import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ExternalLink, Star, ShieldCheck, MessageSquare, ArrowUpRight } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#FAF5F2]/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#ECD9D4] shadow-soft text-center space-y-6">
          {/* Authentic Google Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0ED] text-[#5E2E3B] text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#5E2E3B]" />
            <span>Verified Google Business Profile</span>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#271E20] tracking-tight">
              Authentic Patient Reviews on Google
            </h2>
            <p className="text-sm sm:text-base text-[#5B4F52] leading-relaxed">
              We uphold complete medical transparency. Rather than displaying fabricated testimonials on our website, we invite you to read genuine patient feedback directly on our verified Google profile for Dr. Arti Patel.
            </p>
          </div>

          {/* Key Trust Signals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 max-w-3xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-[#FCFAF9] border border-[#ECD9D4]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#5E2E3B] mb-1">
                <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                <span>Genuine Patient Feedback</span>
              </div>
              <p className="text-xs text-[#6E6165] leading-relaxed">
                Directly submitted by individuals who visited our clinic for skin and hair consultations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FCFAF9] border border-[#ECD9D4]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#5E2E3B] mb-1">
                <ShieldCheck className="w-4 h-4 text-[#5E2E3B]" />
                <span>Zero Fabricated Quotes</span>
              </div>
              <p className="text-xs text-[#6E6165] leading-relaxed">
                In strict compliance with clinical guidelines, no mock quotes or fake review counters are used.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FCFAF9] border border-[#ECD9D4]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#5E2E3B] mb-1">
                <MessageSquare className="w-4 h-4 text-[#5E2E3B]" />
                <span>Share Your Experience</span>
              </div>
              <p className="text-xs text-[#6E6165] leading-relaxed">
                Existing patients can contribute authentic feedback to help others find trusted care.
              </p>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CLINIC_INFO.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-7 rounded-xl bg-[#5E2E3B] hover:bg-[#48202B] text-white font-medium text-sm transition-all shadow-soft flex items-center justify-center gap-2 group"
            >
              <span>Read Google Reviews</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={CLINIC_INFO.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-xl bg-white hover:bg-[#FAF4F2] text-[#2B2123] border border-[#ECD9D4] font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>Write a Review on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#7A6F72]" />
            </a>
          </div>

          <p className="text-[11px] text-[#8C7D81]">
            * Links directly to the official Google Business search profile for SKINIC – Dr. Arti Patel, Ahmedabad.
          </p>
        </div>
      </div>
    </section>
  );
};
