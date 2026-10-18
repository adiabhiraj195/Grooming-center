export type ReviewLanguage = "en" | "hinglish" | "hi";
export type ReviewLength = "short" | "detailed";

export interface ReviewTemplate {
  id: string;
  ratingBand: "5" | "4" | "3-or-below";
  language: ReviewLanguage;
  length: ReviewLength;
  template: string;
}

export const REVIEW_TEMPLATES: ReviewTemplate[] = [
  // ==========================================
  // ENGLISH (12+ templates)
  // ==========================================
  // 5 Stars - Short
  {
    id: "en-5-s-1",
    ratingBand: "5",
    language: "en",
    length: "short",
    template:
      "Had an amazing experience bringing {petName} for {service}! The team was gentle, friendly, and {liked}. Highly recommend Pawfect Care!",
  },
  {
    id: "en-5-s-2",
    ratingBand: "5",
    language: "en",
    length: "short",
    template:
      "Best pet parlour in Rewari! {petName} looks fresh, smells delightful, and was treated with so much love. {liked}. 🐾",
  },
  {
    id: "en-5-s-3",
    ratingBand: "5",
    language: "en",
    length: "short",
    template:
      "Totally stress-free grooming for {petName}. Loved the cage-free setup and {liked}. Special shoutout to {groomer}!",
  },
  // 5 Stars - Detailed
  {
    id: "en-5-d-1",
    ratingBand: "5",
    language: "en",
    length: "detailed",
    template:
      "I was nervous about {service} because {petName} usually gets anxious during grooming. But Pawfect Care completely blew me away! {groomer} was so gentle and patient. What stood out most was {liked}. {petName} came out glowing and happy without any stress. 10/10 service!",
  },
  {
    id: "en-5-d-2",
    ratingBand: "5",
    language: "en",
    length: "detailed",
    template:
      "Such a premium yet compassionate pet parlour in Rewari! Took {petName} for {service}. The facility is spotless, medical-grade clean, and {liked}. You can clearly see how passionate {groomer} is about animals. Will definitely be our regular grooming spot!",
  },
  {
    id: "en-5-d-3",
    ratingBand: "5",
    language: "en",
    length: "detailed",
    template:
      "Outstanding pet care! From the warm welcome to the final blow-dry, everything was handled professionally. {petName} received {service} and the results are stunning. Really appreciated that they are {liked}. Thank you Pawfect Care team!",
  },

  // 4 Stars - Short & Detailed
  {
    id: "en-4-s-1",
    ratingBand: "4",
    language: "en",
    length: "short",
    template:
      "Very good {service} for {petName}. Clean salon, polite staff, and {liked}. Would definitely visit again.",
  },
  {
    id: "en-4-s-2",
    ratingBand: "4",
    language: "en",
    length: "short",
    template:
      "Nice experience at Pawfect Care. {petName} was handled with care during {service}. Loved that they were {liked}.",
  },
  {
    id: "en-4-d-1",
    ratingBand: "4",
    language: "en",
    length: "detailed",
    template:
      "Booked {service} for {petName}. Overall a very solid experience! The groomers were patient, and {liked}. It took a few minutes longer than expected due to weekend rush, but {groomer} ensured {petName} was comfortable throughout.",
  },
  {
    id: "en-4-d-2",
    ratingBand: "4",
    language: "en",
    length: "detailed",
    template:
      "Good quality grooming in Rewari. {petName} looked great after {service}. The clinic is hygienic, and {liked}. Would recommend booking appointments well in advance.",
  },

  // 3 or Below - Constructive
  {
    id: "en-3-s-1",
    ratingBand: "3-or-below",
    language: "en",
    length: "short",
    template:
      "Visited with {petName} for {service}. The staff was polite and {liked}, but there is room for improvement in slot timings.",
  },
  {
    id: "en-3-s-2",
    ratingBand: "3-or-below",
    language: "en",
    length: "detailed",
    template:
      "Average experience for {petName}'s {service}. While {liked}, the waiting time was longer than quoted. Hope they streamline their scheduling because the groomers themselves are quite gentle.",
  },

  // ==========================================
  // HINGLISH (8+ templates)
  // ==========================================
  // 5 Stars
  {
    id: "hi-en-5-s-1",
    ratingBand: "5",
    language: "hinglish",
    length: "short",
    template:
      "Bahut hi pyaara salon hai! {petName} ka {service} karwaya aur result ekdum first class tha. {liked}. Best pet parlour in Rewari!",
  },
  {
    id: "hi-en-5-s-2",
    ratingBand: "5",
    language: "hinglish",
    length: "short",
    template:
      "{petName} generally grooming se darta hai, but yahan {groomer} ne itne pyaar se handle kiya. {liked}. Truly cage-free and stress-free!",
  },
  {
    id: "hi-en-5-d-1",
    ratingBand: "5",
    language: "hinglish",
    length: "detailed",
    template:
      "Pawfect Care ka experience bahut zabardast tha! {petName} ko {service} ke liye le gaye the. Staff bahut polite hai aur salon bilkul clean aur hygienic hai. Sabse acchi baat lagi ki {liked}. {groomer} did an exceptional job. Highly recommended to all pet parents in Rewari!",
  },
  {
    id: "hi-en-5-d-2",
    ratingBand: "5",
    language: "hinglish",
    length: "detailed",
    template:
      "Rewari mein aisa pet salon milna blessing hai. No cages, only gentle care! {petName} ka coat ekdum soft aur shiny ho gaya after {service}. Plus {liked}. Thank you {groomer} and team!",
  },
  // 4 Stars
  {
    id: "hi-en-4-s-1",
    ratingBand: "4",
    language: "hinglish",
    length: "short",
    template:
      "Accha experience raha {petName} ke {service} ke sath. Staff cooperative hai aur {liked}. Zaroor dobara aayenge.",
  },
  {
    id: "hi-en-4-d-1",
    ratingBand: "4",
    language: "hinglish",
    length: "detailed",
    template:
      "{petName} ka {service} kaafi accha hua. Groomer {groomer} ne patience se kaam kiya. {liked}. Thoda waiting time tha weekend pe, but overall service was very satisfying.",
  },
  // 3 or Below
  {
    id: "hi-en-3-s-1",
    ratingBand: "3-or-below",
    language: "hinglish",
    length: "short",
    template:
      "{petName} ke {service} ke liye gaye the. Staff polite tha aur {liked}, but thoda delay ho gaya tha time par.",
  },
  {
    id: "hi-en-3-d-1",
    ratingBand: "3-or-below",
    language: "hinglish",
    length: "detailed",
    template:
      "Overall theek-thaak tha. {petName} ka {service} complete hua aur {liked}, lekin appointment management thoda aur better ho sakta hai.",
  },

  // ==========================================
  // HINDI (हिन्दी) (6+ templates)
  // ==========================================
  {
    id: "hi-5-s-1",
    ratingBand: "5",
    language: "hi",
    length: "short",
    template:
      "{petName} के लिए {service} का अनुभव बहुत ही शानदार रहा। स्टाफ बहुत ही विनम्र और दयालु है, और {liked}। धन्यवाद पॉफेक्ट टेल्स!",
  },
  {
    id: "hi-5-d-1",
    ratingBand: "5",
    language: "hi",
    length: "detailed",
    template:
      "इंदिरानगर का सबसे बेहतरीन पेट स्पा! {petName} को {service} के दौरान बिना किसी पिंजरे या तनाव के बहुत प्यार से नहलाया गया। विशेषकर {groomer} का तरीका बहुत सराहनीय था। हमें सबसे अच्छा लगा कि {liked}। सभी पेट पेरेंट्स को अवश्य आना चाहिए।",
  },
  {
    id: "hi-5-d-2",
    ratingBand: "5",
    language: "hi",
    length: "detailed",
    template:
      "हमारे {petName} की पहली ग्रूमिंग थी और हम बहुत चिंतित थे। लेकिन यहाँ {service} इतने शांत वातावरण में हुआ कि {petName} को बिल्कुल डर नहीं लगा। {liked}। उत्कृष्ट सेवा!",
  },
  {
    id: "hi-4-s-1",
    ratingBand: "4",
    language: "hi",
    length: "short",
    template:
      "{petName} के {service} की सेवा अच्छी रही। सैलून बहुत साफ-सुथरा है और {liked}। दोबारा जरूर आएँगे।",
  },
  {
    id: "hi-4-d-1",
    ratingBand: "4",
    language: "hi",
    length: "detailed",
    template:
      "पॉफैक्ट टेल्स में {petName} की {service} कराई। काम बहुत सफाई से किया गया और {liked}। सप्ताहांत में थोड़ी प्रतीक्षा करनी पड़ी, पर ग्रूमर {groomer} का व्यवहार बहुत अच्छा था।",
  },
  {
    id: "hi-3-s-1",
    ratingBand: "3-or-below",
    language: "hi",
    length: "short",
    template:
      "{petName} के {service} के लिए गए थे। स्टाफ अच्छा था और {liked}, पर समय प्रबंधन में थोड़ा सुधार हो सकता है।",
  },
];

export interface SuggestionParams {
  rating: number; // 1 to 5
  petName?: string;
  groomer?: string;
  petType?: "dog" | "cat";
  service?: string;
  likedChips?: string[];
  language?: ReviewLanguage;
  length?: ReviewLength;
  seedOffset?: number;
}

/**
 * Generates 3 suggested review texts filled with selected details
 */
export function generateReviewSuggestions(params: SuggestionParams): string[] {
  const {
    rating,
    petName = "",
    groomer = "",
    petType = "dog",
    service = "",
    likedChips = [],
    language = "en",
    length = "detailed",
    seedOffset = 0,
  } = params;

  // Determine rating band
  const ratingBand: "5" | "4" | "3-or-below" =
    rating >= 5 ? "5" : rating === 4 ? "4" : "3-or-below";

  // Filter templates matching rating band and language
  let pool = REVIEW_TEMPLATES.filter(
    (t) => t.ratingBand === ratingBand && t.language === language && t.length === length
  );

  // If pool is small, relax length constraint
  if (pool.length < 3) {
    pool = REVIEW_TEMPLATES.filter(
      (t) => t.ratingBand === ratingBand && t.language === language
    );
  }

  // If still empty (e.g. Hindi short), fallback to English
  if (pool.length === 0) {
    pool = REVIEW_TEMPLATES.filter((t) => t.ratingBand === ratingBand);
  }

  // Fallback defaults for tokens
  const cleanPetName = petName.trim() || (petType === "cat" ? "my cat" : "my dog");
  const cleanGroomer = groomer.trim() || (language === "hi" ? "ग्रूमर" : "the groomer");
  const cleanService =
    service.trim() ||
    (language === "hi"
      ? "ग्रूमिंग सेशन"
      : language === "hinglish"
      ? "grooming session"
      : "grooming session");

  // Format liked chips
  let likedText = "";
  if (likedChips.length > 0) {
    if (likedChips.length === 1) {
      likedText = likedChips[0].toLowerCase();
    } else {
      const allExceptLast = likedChips.slice(0, -1).map((c) => c.toLowerCase()).join(", ");
      const last = likedChips[likedChips.length - 1].toLowerCase();
      likedText = `${allExceptLast} and ${last}`;
    }
  } else {
    likedText =
      language === "hi"
        ? "सफाई और प्यार भरा व्यवहार"
        : language === "hinglish"
        ? "super clean shop and gentle handling"
        : "gentle groomers and super clean shop";
  }

  // Shuffle and pick 3 templates with offset
  const sorted = [...pool].sort((a, b) => a.id.localeCompare(b.id));
  const results: string[] = [];

  for (let i = 0; i < 3; i++) {
    const templateObj = sorted[(i + seedOffset) % sorted.length];
    if (!templateObj) continue;

    const text = templateObj.template
      .replace(/{petName}/g, cleanPetName)
      .replace(/{groomer}/g, cleanGroomer)
      .replace(/{service}/g, cleanService)
      .replace(/{liked}/g, likedText);

    results.push(text);
  }

  return results;
}
