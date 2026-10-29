export interface Treatment {
  id: string;
  title: string;
  category: 'acne' | 'pigmentation' | 'rejuvenation' | 'hair' | 'laser' | 'cosmetic' | 'clinical';
  badge: string;
  summary: string;
  details: string[];
  durationNote: string;
  suitableFor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic & Ambience' | 'Consultation' | 'Aesthetics' | 'Care Protocols';
  description: string;
  accent: string;
}

export const CLINIC_INFO = {
  name: "SKINIC – Dr. Arti Patel",
  shortName: "SKINIC",
  doctor: "Dr. Arti Patel",
  specialization: "Dermatology, Skin Care & Cosmetology",
  phoneDisplay: "+91 93132 84243",
  phoneRaw: "+919313284243",
  whatsappNumber: "919313284243",
  addressFull: "Rosevill Sky, Shukan, Nikol–Naroda Road, Char Rasta, New Naroda, Ahmedabad, Gujarat 382345, India",
  addressShort: "Rosevill Sky, Nikol–Naroda Road, New Naroda, Ahmedabad",
  landmark: "Near Shukan Char Rasta",
  googleProfileUrl: "https://www.google.com/search?client=ms-android-xiaomi-terr1-rso2&hs=YLZB&sca_esv=353cea88b42a76a3&cs=0&hl=en-IN&output=search&kgmid=/g/11sstbvltf&q=SKINIC+-+Dr.+Arti+Patel",
  googleMapsUrl: "https://maps.app.goo.gl/iVVf61v4cL7CjhQL9",
  hoursNote: "Consultations by prior appointment · Monday to Saturday",
  disclaimer: "Website information is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment."
};

export const CLINIC_VIDEOS = [
  {
    id: 'video-1',
    title: 'SKINIC – Dr. Arti Patel Clinic Tour & Skincare Care',
    subtitle: 'Featured Google Maps Clinic Video',
    src: '/videos/clinic-video-1.mp4',
  },
  {
    id: 'video-2',
    title: 'Advanced Dermatology & Aesthetic Care at SKINIC',
    subtitle: 'Clinical Treatment & Consultation Suite',
    src: '/videos/clinic-video-2.mp4',
  },
  {
    id: 'video-3',
    title: 'Skin Rejuvenation & Cosmetology Procedures',
    subtitle: 'SKINIC – Dr. Arti Patel • New Naroda, Ahmedabad',
    src: '/videos/clinic-video-3.mp4',
  },
  {
    id: 'video-4',
    title: 'Inside SKINIC – Modern Dermatology Infrastructure',
    subtitle: 'Rosevill Sky, Nikol–Naroda Road, Ahmedabad',
    src: '/videos/clinic-video-4.mp4',
  },
  {
    id: 'update-1',
    title: 'Dr. Arti Patel – Clinical Skincare Update',
    subtitle: 'Google Business Profile Highlight',
    src: '/videos/clinic-update-1.mp4',
  },
  {
    id: 'update-2',
    title: 'Laser & Aesthetic Care Highlight',
    subtitle: 'SKINIC – Dr. Arti Patel',
    src: '/videos/clinic-update-2.mp4',
  },
];

export const TREATMENTS: Treatment[] = [
  {
    id: "acne-care",
    title: "Acne & Acne Scar Assessment & Care",
    category: "acne",
    badge: "Clinical Dermatology",
    summary: "Systematic medical assessment to identify triggers of persistent breakouts, comedones, and tailor evidence-guided active care.",
    details: [
      "Evaluation of active acne severity, hormonal links, and dietary triggers",
      "Personalized topical and medical management plans",
      "Assessment of post-inflammatory hyperpigmentation (PIH)",
      "Targeted consultations for acne scar texture improvement"
    ],
    durationNote: "Individual consultation required",
    suitableFor: "Active breakouts, recurring acne, post-acne blemishes & scar texture"
  },
  {
    id: "pigmentation",
    title: "Pigmentation & Uneven Skin Tone Care",
    category: "pigmentation",
    badge: "Skin Rejuvenation",
    summary: "In-depth diagnostic evaluation for melasma, freckles, tanning, and sun damage with customized barrier-safe regimens.",
    details: [
      "Differential diagnosis of epidermal vs dermal pigmentation",
      "Melasma care regimens focused on prevention of rebound darkening",
      "Targeted skin brightening & tone balancing protocols",
      "Comprehensive daily photoprotection and maintenance guidance"
    ],
    durationNote: "Stepwise clinical care plan",
    suitableFor: "Melasma, dark patches, stubborn sun tan, uneven complexion"
  },
  {
    id: "skin-rejuvenation",
    title: "Skin Rejuvenation & Medi-Facials",
    category: "rejuvenation",
    badge: "Aesthetic Care",
    summary: "Doctor-directed clinical facials and gentle restorative exfoliation designed to refresh tired skin and boost cellular hydration.",
    details: [
      "Customized clinical medi-facials suited to specific skin barrier health",
      "Gentle dead-cell exfoliation and hydration infusion",
      "Pre-event skin revitalization and dullness management",
      "Non-comedogenic, medical-grade formulations"
    ],
    durationNote: "Procedure duration discussed in clinic",
    suitableFor: "Dull skin, dehydrated barrier, rough texture, pre-event glow"
  },
  {
    id: "hair-scalp",
    title: "Hair & Scalp Health Consultations",
    category: "hair",
    badge: "Trichology Focus",
    summary: "Clinical trichology assessment targeting excessive hair shedding, dandruff, itchy scalp conditions, and early thinning patterns.",
    details: [
      "Trichoscopy and clinical scalp examination",
      "Nutritional, hormonal, and stress trigger screening",
      "Care plans for persistent dandruff, seborrheic dermatitis & flaking",
      "Personalized hair vitality and scalp restoration guidance"
    ],
    durationNote: "Detailed history taking",
    suitableFor: "Excessive hair fall, male/female pattern thinning, stubborn dandruff"
  },
  {
    id: "laser-hair-reduction",
    title: "Laser Hair Reduction Consultations",
    category: "laser",
    badge: "Advanced Aesthetic",
    summary: "Doctor-supervised laser hair reduction assessments tailored to your specific skin phototype and hair texture.",
    details: [
      "Detailed patch test and Fitzpatrick skin phototype evaluation",
      "Full face, underarm, arms, legs, and full-body suitability checks",
      "Targeted reduction of ingrown hairs and razor irritation",
      "Clear guidance on necessary sessions and interval care"
    ],
    durationNote: "Multi-session protocol discussed at clinic",
    suitableFor: "Unwanted facial hair, recurrent ingrown hair, smooth skin care"
  },
  {
    id: "anti-ageing-cosmetic",
    title: "Cosmetic Dermatology & Age-Defying Care",
    category: "cosmetic",
    badge: "Cosmetic Dermatology",
    summary: "Ethical aesthetic consultations focusing on skin elasticity, fine lines, collagen preservation, and graceful age-positive care.",
    details: [
      "Skin laxity and structural volume assessment",
      "Topical retinoid guidance and peptide skincare regimens",
      "Non-invasive collagen-stimulating procedures consultation",
      "Natural-looking outcomes prioritizing skin harmony"
    ],
    durationNote: "Tailored to individual age & goals",
    suitableFor: "Early fine lines, loss of firmness, dullness, mature skin care"
  },
  {
    id: "general-dermatology",
    title: "General Clinical Dermatology",
    category: "clinical",
    badge: "Medical Dermatology",
    summary: "Comprehensive diagnostic care for everyday medical dermatological conditions affecting infants, teenagers, and adults.",
    details: [
      "Eczema, atopic dermatitis, and dry skin flare-ups",
      "Fungal, bacterial, and viral skin infections",
      "Urticaria (hives), allergic reactions, and contact rashes",
      "Skin allergy identification and long-term maintenance"
    ],
    durationNote: "In-person clinical evaluation",
    suitableFor: "Skin rashes, chronic itching, fungal infections, allergic reactions"
  }
];

export const WHY_CHOOSE_POINTS = [
  {
    id: "individualized",
    number: "01",
    title: "Individualised Consultation",
    description: "Every skin type is clinically distinct. Dr. Arti Patel performs a dedicated evaluation of your specific skin biology, lifestyle, and concerns before recommending any step."
  },
  {
    id: "ethical",
    number: "02",
    title: "Ethical, Patient-Focused Practice",
    description: "We believe in honest communication with zero false guarantees. You receive realistic expectations, transparent guidance, and treatments suited to your genuine needs."
  },
  {
    id: "thorough",
    number: "03",
    title: "Comprehensive Clinical Assessment",
    description: "Beyond surface appearances, we investigate root causes — whether hormonal, lifestyle, or environmental factors influencing your skin and hair wellness."
  },
  {
    id: "hygiene",
    number: "04",
    title: "Calm, Hygienic Clinical Environment",
    description: "Our clinic at Rosevill Sky is designed to provide a spotless, peaceful, and respectful space where you can discuss concerns in complete privacy."
  },
  {
    id: "support",
    number: "05",
    title: "Direct WhatsApp & Phone Support",
    description: "Scheduling consultations and clarifying appointment logistics is seamless with our responsive clinic coordination team in Ahmedabad."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How can I book a consultation with Dr. Arti Patel?",
    answer: "You can book a consultation by filling out the appointment enquiry form on this website, which instantly prepares a pre-filled WhatsApp message to +91 93132 84243. Alternatively, you can directly tap the phone button to call our clinic reception. Our team will verify slot availability and confirm your timing."
  },
  {
    question: "How should I prepare for my first appointment?",
    answer: "Please bring along any current skincare products, creams, sunscreen, or medications you are using. If you have previous medical reports or dermatological prescriptions, please keep them handy. We recommend arriving with clean skin free of heavy makeup so Dr. Arti Patel can assess your natural skin texture accurately."
  },
  {
    question: "Which skin concerns can I discuss with the clinic?",
    answer: "You can discuss any concern regarding skin, hair, or scalp health. Common topics include active acne, acne scars, melasma, hyperpigmentation, uneven skin tone, dull skin, excessive hair shedding, dandruff, skin allergies, eczema, and medical aesthetic consultations."
  },
  {
    question: "How can I enquire about treatment costs?",
    answer: "Because dermatology and aesthetic care must be customized to individual skin severity, affected area, and necessary session counts, precise treatment costs are provided after Dr. Arti Patel examines your skin during the initial consultation. You may enquire about consultation fees directly via WhatsApp or phone."
  },
  {
    question: "Where is SKINIC located?",
    answer: "SKINIC is conveniently situated at Rosevill Sky, Shukan, Nikol–Naroda Road, Char Rasta, New Naroda, Ahmedabad, Gujarat 382345, India. The clinic is easily accessible from major Nikol and Naroda residential and commercial hubs."
  },
  {
    question: "How can I contact the clinic for urgent queries or directions?",
    answer: "You can call us directly at +91 93132 84243 or send a WhatsApp message to the same number. You can also click the Google Maps button on this page for live navigation directions."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Consultation Suite",
    category: "Consultation",
    description: "Private and comfortable clinical space where Dr. Arti Patel conducts detailed skin and hair evaluations.",
    accent: "bg-[#FDF6F4]"
  },
  {
    id: "gallery-2",
    title: "Calming Waiting Lounge",
    category: "Clinic & Ambience",
    description: "Thoughtfully designed reception with natural ivory tones, peaceful seating, and spotless clinical hygiene.",
    accent: "bg-[#FBF0EE]"
  },
  {
    id: "gallery-3",
    title: "Aesthetic Treatment Suite",
    category: "Aesthetics",
    description: "Sterile, calm treatment space equipped for doctor-guided medi-facials and clinical procedures.",
    accent: "bg-[#F5EFEB]"
  },
  {
    id: "gallery-4",
    title: "Diagnostic & Trichology Desk",
    category: "Care Protocols",
    description: "Focused examination tools used to evaluate hair roots, scalp conditions, and epidermal barrier health.",
    accent: "bg-[#F7EFE9]"
  }
];
