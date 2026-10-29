import { GoogleGenAI, ThinkingLevel } from '@google/genai';

const SYSTEM_INSTRUCTION = `You are the official virtual clinic assistant for **SKINIC – Dr. Arti Patel**, a premier Dermatology, Skin Care, and Cosmetology Clinic in Ahmedabad.
Keep answers very concise (2 to 4 short bullet points or 2 to 3 short sentences max) so they generate fast and are easy to read.

Verified Clinic Details:
- **Clinic Name:** SKINIC – Dr. Arti Patel
- **Doctor:** Dr. Arti Patel (Dermatology, Skin Care & Cosmetology)
- **Address:** Block A, 2nd Floor, 231/32, Rosevill Sky, Shukan, Nikol–Naroda Road, Opp. Pushkar Icon, Char Rasta, New Naroda, Nikol, Ahmedabad, Gujarat 382345, India
- **Phone / WhatsApp:** +91 93132 84243
- **Google Maps:** https://maps.app.goo.gl/iVVf61v4cL7CjhQL9
- **Consultation Hours:** Monday to Saturday, 10:00 AM – 8:00 PM
- **Treatments:** Cosmetic Dermatology, Acne & Scar Care, Pigmentation & Melasma, Laser Hair Reduction & Resurfacing, Medi-Facials, Earlobe Repair, Hair & Scalp Trichology, Anti-Aging Care.

Reply in the same language as the user (English, Hindi, Hinglish, or Gujarati). Never diagnose or prescribe online; always invite them to consult Dr. Arti Patel in person or via WhatsApp at +91 93132 84243.`;

function getInstantClinicReply(userMessage: string): string | null {
  const q = userMessage.trim().toLowerCase();

  if (q === 'book appointment' || q.includes('appointment kaise') || q.includes('book kaise')) {
    return '📅 **Book Your Appointment at SKINIC – Dr. Arti Patel:**\n• **Call / WhatsApp:** +91 93132 84243\n• **Hours:** Mon – Sat, 10:00 AM – 8:00 PM\n• Click the **Book Appointment** button above to select your preferred date & time!';
  }

  if (q === 'treatments available' || q === 'treatments' || q.includes('konse treatment') || q.includes('kya treatment')) {
    return '✨ **Treatments at SKINIC – Dr. Arti Patel:**\n1. **Acne & Acne Scar Care** (Pimples, open pores & scar revision)\n2. **Pigmentation & Melasma** (Dark spots, uneven skin tone & sun tan)\n3. **Laser Hair Reduction & Resurfacing**\n4. **Skin Rejuvenation & Signature Medi-Facials**\n5. **Hair & Scalp Care** (Hair fall, dandruff & trichology)\n6. **Anti-Aging & Fine Line Care**\n7. **Earlobe Repair & Minor Dermatologic Surgery**\n\nCall/WhatsApp **+91 93132 84243** to book your consultation!';
  }

  if (q === 'clinic address & timings' || q.includes('address') || q.includes('location') || q.includes('kaha hai') || q.includes('where is')) {
    return '📍 **Clinic Address:**\nBlock A, 2nd Floor, Rosevill Sky, Shukan, Nikol–Naroda Road, Char Rasta, New Naroda, Ahmedabad, Gujarat 382345.\n\n🕒 **Timings:**\nMonday to Saturday: **10:00 AM – 8:00 PM**\n\n📞 **Phone / WhatsApp:** +91 93132 84243';
  }

  if (q === 'acne & pigmentation care' || q.includes('acne') || q.includes('pimple') || q.includes('pigmentation') || q.includes('melasma') || q.includes('dark spot')) {
    return '🌿 **Acne, Scar & Pigmentation Care at SKINIC – Dr. Arti Patel:**\nDr. Arti Patel provides personalized clinical evaluation for active acne, post-acne scars, melasma, sun tan, and uneven skin tone using safe, barrier-friendly protocols suited for Indian skin.\n\nBook a consultation at **+91 93132 84243**.';
  }

  if (q === 'laser hair reduction' || q.includes('laser')) {
    return '⚡ **Laser Hair Reduction & Resurfacing at SKINIC – Dr. Arti Patel:**\nWe offer doctor-supervised laser hair reduction and skin resurfacing tailored to Indian skin phototypes with customized energy settings for safe, smooth results.\n\nEnquire on WhatsApp: **+91 93132 84243**.';
  }

  if (q.includes('time') || q.includes('timing') || q.includes('open') || q.includes('kab khulta')) {
    return '🕒 **SKINIC – Dr. Arti Patel Timings:**\nMonday to Saturday: **10:00 AM – 8:00 PM**\n(Prior appointment recommended via call/WhatsApp at **+91 93132 84243**).';
  }

  if (q.includes('fee') || q.includes('price') || q.includes('cost') || q.includes('charge') || q.includes('kitna paisa') || q.includes('rates')) {
    return '💬 **Consultation & Treatment Charges:**\nBecause every skin and hair concern is unique, treatment plans and exact costs are shared after Dr. Arti Patel examines your skin in person.\n\nFor consultation fee details, please call or WhatsApp **+91 93132 84243**.';
  }

  if (q.includes('hair') || q.includes('baal') || q.includes('dandruff') || q.includes('bald')) {
    return '💆‍♀️ **Hair & Scalp Care (Trichology) at SKINIC:**\nDr. Arti Patel treats hair fall, thinning hair, stubborn dandruff, and scalp infections with root-cause clinical diagnosis.\n\nBook your hair & scalp checkup: **+91 93132 84243**.';
  }

  if (/^(hi|hello|hey|namaste|kem cho|hii+|hola)$/i.test(q)) {
    return 'Namaste! 👋 Welcome to **SKINIC – Dr. Arti Patel** in New Naroda, Ahmedabad.\n\nAsk me about our **skin & hair treatments**, **clinic address**, **timings**, or **booking an appointment** (+91 93132 84243)!';
  }

  return null;
}

function getSmartFallbackReply(userMessage: string): string {
  const instant = getInstantClinicReply(userMessage);
  if (instant) return instant;

  const q = userMessage.toLowerCase();
  if (q.includes('phone') || q.includes('contact') || q.includes('call') || q.includes('number') || q.includes('whatsapp')) {
    return '📞 **Contact SKINIC – Dr. Arti Patel:**\n• **Phone / WhatsApp:** +91 93132 84243\n• **Location:** Rosevill Sky, Nikol–Naroda Road, New Naroda, Ahmedabad';
  }

  return 'Thank you for your message! At **SKINIC – Dr. Arti Patel** (New Naroda, Ahmedabad), Dr. Arti Patel provides personalized care for **Acne, Scars, Pigmentation, Laser Hair Reduction, Medi-Facials, Earlobe Repair, and Hair & Scalp concerns**.\n\n📞 **Call / WhatsApp:** +91 93132 84243\n🕒 **Hours:** Mon – Sat (10:00 AM – 8:00 PM)';
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { message, history } = req.body || {};
  if (!message || typeof message !== 'string') {
    res.status(400).json({ error: 'Please enter a valid message.' });
    return;
  }

  const instant = getInstantClinicReply(message);
  if (instant) {
    res.status(200).json({ reply: instant });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    res.status(200).json({ reply: getSmartFallbackReply(message) });
    return;
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const conversationContents = Array.isArray(history)
      ? [
          ...history.slice(-6).map((msg: { role: string; text: string }) => ({
            role: msg.role === 'model' ? 'model' : 'user',
            parts: [{ text: String(msg.text || '') }],
          })),
          { role: 'user', parts: [{ text: message }] },
        ]
      : message;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: conversationContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5,
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.LOW,
        },
      },
    });

    res.status(200).json({
      reply: response.text || getSmartFallbackReply(message),
    });
  } catch (error) {
    console.error('Vercel /api/chat error:', error);
    res.status(200).json({ reply: getSmartFallbackReply(message) });
  }
}
