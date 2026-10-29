import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { getInstantClinicReply, getSmartFallbackReply } from './src/utils/chatbotKnowledge.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SYSTEM_INSTRUCTION = `You are the official virtual clinic assistant for **SKINIC – Dr. Arti Patel**, a premier Dermatology, Skin Care, and Cosmetology Clinic in Ahmedabad.
Keep answers very concise (2 to 4 short bullet points or 2 to 3 short sentences max) so they generate fast and are easy to read.

Verified Clinic Details:
- **Clinic Name:** SKINIC – Dr. Arti Patel
- **Doctor:** Dr. Arti Patel (Dermatology, Skin Care & Cosmetology)
- **Address:** Block A, 2nd Floor, 231/32, Rosevill Sky, Shukan, Nikol–Naroda Road, Opp. Pushkar Icon, Char Rasta, New Naroda, Nikol, Ahmedabad, Gujarat 382345, India
- **Phone / WhatsApp:** +91 93132 84243
- **Google Maps:** https://maps.app.goo.gl/iVVf61v4cL7CjhQL9
- **Consultation Hours:** Monday to Saturday, 10:00 AM – 8:00 PM (Prior appointment recommended)
- **Key Treatments & Services:**
  1. Cosmetic Dermatology & Aesthetic Care
  2. Acne & Acne Scar Revision Care
  3. Pigmentation, Melasma & Uneven Skin Tone Care
  4. Laser Hair Reduction & Laser Resurfacing
  5. Skin Rejuvenation & Signature Medi-Facials
  6. Precision Earlobe Repair & Minor Dermatologic Surgery
  7. Hair & Scalp Health (Trichology, Hair Fall, Dandruff Care)
  8. Anti-Aging, Fine Line & Collagen Support Care
  9. General Clinical Dermatology (Allergies, Eczema, Fungal Infections)

Guidelines:
- Respond warmly, concisely, and professionally in the same language/style the user writes in (English, Hindi, Hinglish, or Gujarati).
- Never diagnose medical conditions online, prescribe medications, or guarantee specific medical outcomes. Always recommend an in-person consultation with Dr. Arti Patel at SKINIC.
- For treatment costs/fees, explain that exact treatment plans and costs are tailored after Dr. Arti Patel examines the skin/hair in person, and invite the visitor to book a consultation or enquire on WhatsApp at +91 93132 84243.`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.post('/api/chat', async (req, res) => {
    const { message, history } = req.body || {};
    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Please enter a valid message.' });
      return;
    }

    // Fast path: return instant clinic answer for common questions
    const instant = getInstantClinicReply(message);
    if (instant) {
      res.json({ reply: instant });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
      res.json({ reply: getSmartFallbackReply(message) });
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

      const replyText = response.text || getSmartFallbackReply(message);
      res.json({ reply: replyText });
    } catch (error) {
      console.error('Gemini API chat error:', error);
      res.json({ reply: getSmartFallbackReply(message) });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`SKINIC server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
