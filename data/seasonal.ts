export interface SeasonalOffer {
  id: string;
  season: "summer" | "monsoon" | "winter" | "diwali";
  title: string;
  titleHi: string;
  badge: string;
  badgeHi: string;
  description: string;
  descriptionHi: string;
  benefits: string[];
  benefitsHi: string[];
  priceNote: string;
  accentColor: string;
}

export const SEASONAL_DATA: SeasonalOffer[] = [
  {
    id: "summer",
    season: "summer",
    title: "Rewari Summer Heat Cooling Spa",
    titleHi: "रेवाड़ी समर कूलिंग स्पा",
    badge: "Active Care (March – June)",
    badgeHi: "गर्मियों की विशेष सुरक्षा",
    description: "Beat the North Indian summer heat with soothing aloe vera baths, cooling mint foot soaks, and hygiene belly trims to prevent heat rashes.",
    descriptionHi: "एलोवेरा बाथ, मिंट फुट सोक और बेली ट्रिम से गर्मियों के घमौरियों और रैश से तुरंत राहत।",
    benefits: [
      "Iced herbal tea towel wipe down",
      "Organic aloe vera & cucumber deep hydrating bath",
      "Pad moisturizer against burning sidewalks",
      "Sanitary & under-belly summer trim",
    ],
    benefitsHi: [
      "ठंडे हर्बल तौलिये से ताजगी",
      "एलोवेरा व खीरा हाइड्रेटिंग बाथ",
      "गर्म फुटपाथ से पंजों की सुरक्षा",
      "आरामदायक समर हेयर ट्रिम",
    ],
    priceNote: "Add to any service for just ₹299",
    accentColor: "#FFB524",
  },
  {
    id: "monsoon",
    season: "monsoon",
    title: "Monsoon Anti-Fungal & Anti-Tick Shield",
    titleHi: "मानसून एंटी-फंगल व टिक शील्ड",
    badge: "Rainy Season Shield (July – October)",
    badgeHi: "बरसाती मौसम सुरक्षा",
    description: "Monsoons bring damp paws, interdigital fungal issues, and rampant ticks. Protect your pet with our high-potency Ayurvedic neem and tea tree wash.",
    descriptionHi: "बरसात में गीले पंजों की फंगल इन्फेक्शन और टिक से 100% सुरक्षा।",
    benefits: [
      "Neem leaf & tea tree anti-microbial deep rinse",
      "Interdigital paw cleft sanitization & powder dry",
      "Warm high-velocity moisture expulsion from undercoat",
      "Natural citronella insect & tick barrier mist",
    ],
    benefitsHi: [
      "नीम और टी-ट्री एंटी-माइक्रोबियल रिंस",
      "पंजों के बीच की फंगस सफाई",
      "गहरी गर्माहट से अंडरकोट सुखाना",
      "नेचुरल सिट्रोनेला टिक शील्ड स्प्रे",
    ],
    priceNote: "Free with all Royal Full Groomings this month",
    accentColor: "#0F766E",
  },
  {
    id: "winter",
    season: "winter",
    title: "Winter Coat Conditioning & Coconut Drench",
    titleHi: "विंटर कोट कंडीशनिंग व कोकोनट बाथ",
    badge: "Winter Comfort (Nov – Feb)",
    badgeHi: "सर्दियों का आराम",
    description: "Dry Haryana winter air leads to flaky dandruff and static fur. Our warm virgin coconut oil therapy locks in coat hydration.",
    descriptionHi: "सर्दियों की शुष्क हवा से होने वाली डैंड्रफ और रूखेपन से छुटकारा।",
    benefits: [
      "Warm cold-pressed coconut oil body massage",
      "Honey & oatmeal soothing anti-itch shampoo",
      "Argan oil split-end smoothing treatment",
      "Snug fleece towel wrap dry",
    ],
    benefitsHi: [
      "गुनगुने शुद्ध नारियल तेल की मालिश",
      "शहद और ओटमील सुखद शैंपू",
      "आर्गन ऑयल कोट सीरम",
      "मुलायम तौलिए की गरमाहट",
    ],
    priceNote: "Flat 20% discount on weekday mornings",
    accentColor: "#CDEBFA",
  },
  {
    id: "diwali",
    season: "diwali",
    title: "Diwali Noise-Free Calming Sanctuary & Glow-Up",
    titleHi: "दिवाली शांत व खुशबूदार स्पा",
    badge: "Festive Special 🪔",
    badgeHi: "त्यौहार स्पेशल 🪔",
    description: "Firecracker stress relief with aromatherapy, acoustic sound dampening, lavender body rubs, plus a complimentary handcrafted marigold bandana!",
    descriptionHi: "पटाखों के शोर से डरने वाले पेट्स के लिए शांत अरोमाथेरेपी स्पा और सुंदर गेंदे का बंदना उपहार!",
    benefits: [
      "Lavender & chamomile calming mist room",
      "Sound-muffled ultrasonic ear protectors",
      "Hydro-massage to melt physical tension",
      "Festive marigold printed pet bandana gift",
    ],
    benefitsHi: [
      "लैवेंडर व कैमोमाइल शांत वातावरण",
      "शोर-रोधी सॉफ्ट ईयर प्रोटेक्टर्स",
      "तनाव-मुक्त करने वाला हाइड्रो मसाज",
      "सुंदर फेस्टिव बंदना उपहार",
    ],
    priceNote: "Special Festive Bundle ₹1,499 (All Sizes)",
    accentColor: "#FF6B4A",
  },
];

export const PACKAGES_DATA = [
  {
    id: "membership",
    title: "Animalia Care Club (Monthly Membership)",
    titleHi: "मासिक स्पा क्लब",
    tagline: "4 Baths + 2 Hygiene Trims / Month",
    taglineHi: "4 बाथ + 2 हाइजीन ट्रिम प्रति माह",
    price: "₹1,899 / mo",
    priceOld: "₹2,800",
    savings: "Save ₹900 every month",
    features: [
      "Weekly warm bath & high-velocity blow dry",
      "Bi-weekly nail trimming and ear sanitization",
      "Free priority booking on busy weekends",
      "10% off on all grooming products & treats",
      "Free emergency bath within 24 hours of muddy park runs",
    ],
    popular: true,
  },
  {
    id: "first-timer",
    title: "First-Timer Welcome Spa Pass",
    titleHi: "पहली बार आने वालों के लिए पास",
    tagline: "Flat 15% Off Your First Visit",
    taglineHi: "पहली विजिट पर फ्लैट 15% छूट",
    price: "Flat 15% OFF",
    priceOld: "Standard Rate",
    savings: "Use code: FIRSTPAW15",
    features: [
      "Complimentary temperament assessment",
      "Gentle introduction session with treats",
      "Free Animalia welcome bandana",
      "Digital grooming card with skin/coat notes",
    ],
    popular: false,
  },
  {
    id: "referral",
    title: "Refer a Pet Parent",
    titleHi: "दोस्त को रेफर करें",
    tagline: "Love Shared is Double Love",
    taglineHi: "प्यार बांटें और पुरस्कार पाएं",
    price: "FREE Spa Upgrade",
    priceOld: "₹499 value",
    savings: "Both you & your friend win",
    features: [
      "Your friend gets ₹200 off their first groom",
      "You receive a free Pawdi-Cure or Ayurvedic Oil Massage",
      "Unlimited referrals per pet parent",
    ],
    popular: false,
  },
];
