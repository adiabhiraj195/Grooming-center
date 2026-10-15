export type DogWeightCategory = "small" | "medium" | "large" | "giant";
export type CatCoatCategory = "short" | "long";

export interface PricingTierItem {
  id: "fresh-bath" | "full-groom" | "royal-spa";
  name: string;
  nameHi: string;
  tagline: string;
  taglineHi: string;
  isPopular?: boolean;
  dogPrices: Record<DogWeightCategory, number>;
  catPrices: Record<CatCoatCategory, number>;
  features: {
    title: string;
    included: boolean;
  }[];
}

export interface AddOnItem {
  id: string;
  name: string;
  nameHi: string;
  price: number;
  priceDisplay: string;
  description: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  nameHi: string;
  subtitle: string;
  tag: string;
  badge?: string;
  regularPrice: number;
  discountPrice: number;
  frequency: "Single visit" | "4-visit pack" | "Quarterly";
  description: string;
  perks: string[];
}

export interface ComparisonFeatureRow {
  name: string;
  category: "Bathing & Drying" | "Coat & Fur" | "Hygiene & Wellness" | "Extras & Styling";
  freshBath: boolean | string;
  fullGroom: boolean | string;
  royalSpa: boolean | string;
}

export interface PricingConfig {
  disclaimer: string;
  disclaimerHi: string;
  tiers: PricingTierItem[];
  addOns: AddOnItem[];
  membershipPacks: MembershipPlan[];
  comparisonFeatures: ComparisonFeatureRow[];
  offers: {
    id: string;
    title: string;
    badge: string;
    description: string;
    terms: string;
  }[];
}

export const PRICING_DATA: PricingConfig = {
  disclaimer: "Starting prices. Final price confirmed after a quick coat check. Prices include GST.",
  disclaimerHi: "प्रारंभिक कीमतें। कोट की जांच के बाद अंतिम कीमत तय की जाएगी। जीएसटी सम्मिलित है।",

  tiers: [
    {
      id: "fresh-bath",
      name: "Fresh Bath",
      nameHi: "फ्रेश बाथ",
      tagline: "Essential hygiene freshener & blow-dry",
      taglineHi: "प्राकृतिक नहलाना, ब्लो-ड्राई व स्वच्छता",
      isPopular: false,
      dogPrices: {
        small: 499,
        medium: 699,
        large: 999,
        giant: 1299,
      },
      catPrices: {
        short: 699,
        long: 899,
      },
      features: [
        { title: "Herbal shampoo wash & deep rinse", included: true },
        { title: "Cage-free warm velocity blow-dry", included: true },
        { title: "Ear canal cleaning & sanitization", included: true },
        { title: "Nail clipping & paw smoothing", included: true },
        { title: "Paw-pad organic balm massage", included: true },
        { title: "Sanitary hygiene trim", included: false },
        { title: "Full breed scissor haircut", included: false },
        { title: "Undercoat de-shedding treatment", included: false },
        { title: "Ayurvedic hot-oil massage", included: false },
        { title: "Teeth brushing & mouth spray", included: false },
      ],
    },
    {
      id: "full-groom",
      name: "Full Groom",
      nameHi: "फुल ग्रूम",
      tagline: "Complete coat haircut, styling & freshener",
      taglineHi: "सम्पूर्ण हेयरकट, स्टाइलिंग व खुशबूदार बाथ",
      isPopular: true,
      dogPrices: {
        small: 899,
        medium: 1199,
        large: 1699,
        giant: 2199,
      },
      catPrices: {
        short: 1199,
        long: 1499,
      },
      features: [
        { title: "Herbal shampoo wash & deep rinse", included: true },
        { title: "Cage-free warm velocity blow-dry", included: true },
        { title: "Ear canal cleaning & sanitization", included: true },
        { title: "Nail clipping & paw smoothing", included: true },
        { title: "Paw-pad organic balm massage", included: true },
        { title: "Sanitary hygiene trim", included: true },
        { title: "Full breed scissor haircut", included: true },
        { title: "Gentle coat detangling comb-out", included: true },
        { title: "Ayurvedic hot-oil massage", included: false },
        { title: "Teeth brushing & mouth spray", included: false },
      ],
    },
    {
      id: "royal-spa",
      name: "Royal Spa",
      nameHi: "रॉयल स्पा",
      tagline: "The head-to-paw luxury pampering ritual",
      taglineHi: "अरोमा बाथ, डी-शेडिंग, टीथ क्लीनिंग व फोटो",
      isPopular: false,
      dogPrices: {
        small: 1399,
        medium: 1799,
        large: 2499,
        giant: 3199,
      },
      catPrices: {
        short: 1699,
        long: 1999,
      },
      features: [
        { title: "Herbal shampoo wash & deep rinse", included: true },
        { title: "Cage-free warm velocity blow-dry", included: true },
        { title: "Ear canal cleaning & sanitization", included: true },
        { title: "Nail clipping & paw smoothing", included: true },
        { title: "Paw-pad organic balm massage", included: true },
        { title: "Sanitary hygiene trim", included: true },
        { title: "Full breed scissor haircut", included: true },
        { title: "Deep undercoat de-shedding ritual", included: true },
        { title: "Herbal spa coat mask & conditioning", included: true },
        { title: "Teeth brushing & fresh breath mist", included: true },
        { title: "Designer satin bandana & treat box", included: true },
        { title: "Post-groom professional studio photo", included: true },
      ],
    },
  ],

  addOns: [
    {
      id: "addon-tick",
      name: "Tick & flea treatment",
      nameHi: "एंटी टिक व पिस्सू सुरक्षा",
      price: 299,
      priceDisplay: "₹299",
      description: "Neem & herbal repellent dip with manual tick check",
    },
    {
      id: "addon-dematting",
      name: "De-matting knot removal",
      nameHi: "उलझे बालों को सुलझाना (डी-मैटिंग)",
      price: 199,
      priceDisplay: "From ₹199",
      description: "Gentle detangling spray with organic silk conditioner",
    },
    {
      id: "addon-teeth",
      name: "Teeth brushing & mint mist",
      nameHi: "दांतों की सफाई व मिंट स्प्रे",
      price: 149,
      priceDisplay: "₹149",
      description: "Enzymatic poultry-flavoured paste with soft silicone brush",
    },
    {
      id: "addon-antifungal",
      name: "Anti-fungal medicated bath",
      nameHi: "एंटी-फंगल मेडिकेटेड बाथ",
      price: 349,
      priceDisplay: "₹349",
      description: "Chlorhexidine & Ketoconazole wash for itchy skin relief",
    },
    {
      id: "addon-pickup",
      name: "AC Pick-up & drop cab",
      nameHi: "एसी कैब पिकअप व ड्रॉप",
      price: 150,
      priceDisplay: "From ₹150",
      description: "Sanitised pet cab across Indiranagar, Domlur & HAL",
    },
    {
      id: "addon-nailgrind",
      name: "Nail grinding & edge rounding",
      nameHi: "नाखून स्मूथिंग व ग्राइंडिंग",
      price: 149,
      priceDisplay: "₹149",
      description: "Ultra-quiet rotary tool to prevent floor and sofa scratches",
    },
  ],

  membershipPacks: [
    {
      id: "pass-baths",
      name: "Pawfect Pass",
      nameHi: "पॉफैक्ट पास (4 बाथ)",
      subtitle: "4 Hydro-Baths + Blow-dry package",
      tag: "4-Visit Pack",
      badge: "Save 25%",
      frequency: "4-visit pack",
      regularPrice: 2796, // 4 x ₹699
      discountPrice: 2097, // ₹524 per bath
      description: "Keep your pet squeaky clean month after month. Valid for 6 months.",
      perks: [
        "4 cage-free herbal baths",
        "Free nail trim with every session",
        "Priority weekend slot reservation",
        "Shareable with other pets in your house",
      ],
    },
    {
      id: "glow-club",
      name: "Glow Club",
      nameHi: "ग्लो क्लब (मंथली फुल ग्रूम)",
      subtitle: "Monthly Full Royal Grooming + Styling",
      tag: "Quarterly",
      badge: "Best Value",
      frequency: "Quarterly",
      regularPrice: 3597, // 3 x ₹1199
      discountPrice: 2877, // ₹959 per groom (20% off)
      description: "Consistent breed coat maintenance so knots and mats never develop.",
      perks: [
        "3 Full Royal Grooming sessions",
        "Free teeth brushing & paw-pad balms",
        "10% off all shelf store products",
        "Complimentary post-groom studio photo",
      ],
    },
    {
      id: "family-pack",
      name: "Family Pack",
      nameHi: "फैमिली पैक (2+ पेट्स)",
      subtitle: "Multi-pet household discount",
      tag: "Single visit",
      badge: "15% Off 2nd Pet",
      frequency: "Single visit",
      regularPrice: 2398, // 2 x ₹1199
      discountPrice: 2038, // 15% off 2nd pet
      description: "Bring both your fur babies together for simultaneous pampering.",
      perks: [
        "15% off on the second pet's service",
        "Side-by-side grooming stations",
        "Joint AC cab transit pickup",
        "Free gourmet treat pack for both",
      ],
    },
  ],

  comparisonFeatures: [
    { name: "Warm Hydro-Bath & Tearless Herbal Wash", category: "Bathing & Drying", freshBath: true, fullGroom: true, royalSpa: true },
    { name: "Cage-Free High-Velocity Warm Blow-Dry", category: "Bathing & Drying", freshBath: true, fullGroom: true, royalSpa: true },
    { name: "Herbal Nourishing Coat Mask", category: "Bathing & Drying", freshBath: false, fullGroom: false, royalSpa: true },
    { name: "Full Breed Scissor Cut & Styling", category: "Coat & Fur", freshBath: false, fullGroom: true, royalSpa: true },
    { name: "Furminator Undercoat De-Shedding", category: "Coat & Fur", freshBath: false, fullGroom: "Basic Comb", royalSpa: "Deep 30-min" },
    { name: "Sanitary Hygiene & Belly Trim", category: "Coat & Fur", freshBath: false, fullGroom: true, royalSpa: true },
    { name: "Ear Canal Sanitization & Hair Plucking", category: "Hygiene & Wellness", freshBath: true, fullGroom: true, royalSpa: true },
    { name: "Nail Clipping & Safety Edge Smoothing", category: "Hygiene & Wellness", freshBath: true, fullGroom: true, royalSpa: true },
    { name: "Enzymatic Teeth Brushing & Mint Spray", category: "Hygiene & Wellness", freshBath: false, fullGroom: false, royalSpa: true },
    { name: "Organic Paw-Pad Herbal Balm Massage", category: "Hygiene & Wellness", freshBath: true, fullGroom: true, royalSpa: true },
    { name: "Designer Satin Bandana & Gourmet Treat", category: "Extras & Styling", freshBath: false, fullGroom: false, royalSpa: true },
    { name: "Post-Groom Studio Digital Photo", category: "Extras & Styling", freshBath: false, fullGroom: false, royalSpa: true },
  ],

  offers: [
    {
      id: "first-visit",
      title: "First Visit Welcome Treat: 10% OFF",
      badge: "New Pet Parents",
      description: "Get 10% instant discount on your pet's first grooming session with code PAW10 on WhatsApp.",
      terms: "Valid on Full Groom & Royal Spa tiers. Cannot be combined with memberships.",
    },
    {
      id: "refer-parent",
      title: "Refer a Bangalore Pet Parent: ₹200 Each",
      badge: "Community Love",
      description: "When your friend books their first session, both of you get ₹200 grooming spa credit.",
      terms: "Valid for all verified clients across Indiranagar, Domlur & Koramangala.",
    },
  ],
};

