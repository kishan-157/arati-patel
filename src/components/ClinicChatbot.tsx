import React, { useState, useRef, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { getInstantClinicReply, getSmartFallbackReply } from '../utils/chatbotKnowledge';
import {
  MessageCircle,
  X,
  Send,
  Calendar,
  PhoneCall,
  Sparkles,
  MapPin
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}

interface ClinicChatbotProps {
  onOpenBooking: (treatment?: string) => void;
}

const QUICK_QUESTIONS = [
  'Book Appointment',
  'Treatments Available',
  'Clinic Address & Timings',
  'Acne & Pigmentation Care',
  'Laser Hair Reduction',
];

export const ClinicChatbot: React.FC<ClinicChatbotProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Namaste! 👋 Welcome to SKINIC – Dr. Arti Patel (Dermatology, Skin Care & Cosmetology Clinic, New Naroda, Ahmedabad).\n\nHow can I help you with your skin, hair, or appointment enquiry today?',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const sendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // 1. Instant client-side response (~120ms) for common clinic questions & quick chips
    const instantReply = getInstantClinicReply(trimmed);
    if (instantReply) {
      setIsLoading(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            role: 'model',
            text: instantReply,
          },
        ]);
        setIsLoading(false);
      }, 120);
      return;
    }

    // 2. Server AI call with a fast 4.5s timeout + automatic smart fallback
    setIsLoading(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4500);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: messages.slice(-6).map((m) => ({ role: m.role, text: m.text })),
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: data.reply || getSmartFallbackReply(trimmed),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      clearTimeout(timeoutId);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-fallback-${Date.now()}`,
          role: 'model',
          text: getSmartFallbackReply(trimmed),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed z-50 left-4 sm:left-6 bottom-20 md:bottom-6">
      {/* Chat Panel */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-3xl shadow-[0_20px_60px_rgba(10,51,102,0.22)] border border-black/10 overflow-hidden flex flex-col max-h-[78vh] sm:max-h-[560px]">
          {/* Chatbot Header */}
          <div className="bg-[#0A3366] text-white px-5 py-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/images/avatar/middle/avatar1.webp"
                  alt="SKINIC – Dr. Arti Patel"
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#F46700]"
                />
                <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0A3366] absolute bottom-0 right-0" />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight text-white">
                  SKINIC – Dr. Arti Patel
                </h3>
                <span className="text-[11px] text-[#BED2E7] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#F46700]" />
                  <span>Instant Clinic Assistant • Online</span>
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F46700] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Action Strip */}
          <div className="bg-[#FDF5E8] px-4 py-2 border-b border-black/5 flex items-center justify-between gap-2 text-xs">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="inline-flex items-center gap-1.5 font-semibold text-[#0A3366] hover:text-[#F46700] transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#F46700]" />
              <span>Book Appointment</span>
            </button>

            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-semibold text-[#0A3366] hover:text-[#F46700] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F46700]" />
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>

            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#0A3366] hover:text-[#F46700] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F46700]" />
              <span>Map</span>
            </a>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FFFCF8] min-h-[260px]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-2xs ${
                    msg.role === 'user'
                      ? 'bg-[#F46700] text-white rounded-br-xs'
                      : 'bg-white text-[#0A3366] border border-black/5 rounded-bl-xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-[#0A3366] border border-black/5 rounded-2xl rounded-bl-xs px-4 py-3 text-xs flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#F46700] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#F46700] animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 rounded-full bg-[#F46700] animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-[#FDF5E8]/70 border-t border-black/5 flex items-center gap-1.5 overflow-x-auto">
            {QUICK_QUESTIONS.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => sendMessage(q)}
                className="px-3 py-1 rounded-full bg-white hover:bg-[#0A3366] text-[#0A3366] hover:text-white border border-black/10 text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleFormSubmit}
            className="p-3 bg-white border-t border-black/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about treatments, timings..."
              className="flex-1 py-2.5 px-3.5 rounded-xl bg-[#FDF5E8] text-xs sm:text-sm text-[#0A3366] placeholder:text-[#566593]/70 focus:outline-none focus:ring-2 focus:ring-[#F46700]"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              className="w-10 h-10 rounded-xl bg-[#F46700] hover:bg-[#cf5800] disabled:opacity-50 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open SKINIC – Dr. Arti Patel Chatbot"
        className="flex items-center gap-2.5 py-3 px-4 sm:px-5 rounded-full bg-[#F46700] hover:bg-[#0A3366] text-white shadow-[0_12px_30px_rgba(244,103,0,0.4)] transition-all cursor-pointer group"
      >
        <span className="w-9 h-9 rounded-full bg-white text-[#F46700] group-hover:text-[#0A3366] flex items-center justify-center shrink-0">
          {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
        </span>
        <div className="text-left pr-1">
          <span className="block text-[10px] uppercase tracking-wider font-semibold text-white/85 leading-none">
            Chat Assistant
          </span>
          <span className="text-xs sm:text-sm font-bold leading-tight">
            SKINIC – Dr. Arti Patel
          </span>
        </div>
      </button>
    </div>
  );
};
