import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { getInstantClinicReply, getSmartFallbackReply } from '../src/utils/chatbotKnowledge';

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

  // Instant zero-latency answer for common clinic queries
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
