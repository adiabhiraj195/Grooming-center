export type PetSize = "small" | "medium" | "large";

export interface ServiceItem {
  id: string;
  name: string;
  nameHi: string;
  tagline: string;
  taglineHi: string;
  description: string;
  descriptionHi: string;
  durationMinutes: number;
  iconName: "bathtub" | "scissors" | "towel" | "comb" | "nailClipper" | "shampooBottle" | "sparkles" | "catBath";
  popular?: boolean;
  pricing: {
    small: number;
    medium: number;
    large: number;
  };
  includes: string[];
  includesHi: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "bath-blowdry",
    name: "Bath & Blow-Dry",
    nameHi: "नहलाना व ब्लो-ड्राई",
    tagline: "The squeaky-clean essential freshener",
    taglineHi: "रोज़मर्रा की ताज़गी और खुशबूदार सफाई",
    description: "Gentle natural herbal bath with pH-balanced shampoo, warm towel wrap, cage-free high-velocity blow dry, and lavender coat mist.",
    descriptionHi: "हर्बल शैम्पू से गुनगुने पानी में स्नान, तौलिए की गरमाहट, पिंजरा-मुक्त ब्लो-ड्राई और लैवेंडर मिस्ट।",
    durationMinutes: 45,
    iconName: "bathtub",
    popular: true,
    pricing: {
      small: 499,
      medium: 799,
      large: 1099,
    },
    includes: [
      "Herbal tearless shampoo wash",
      "Warm velocity blow-dry (no cages)",
      "Nail clipping & edge smoothing",
      "Ear canal sanitization & cleaning",
      "Paw-pad organic conditioning balm",
      "Scented coat spritz",
    ],
    includesHi: [
      "हर्बल सुरक्षित शैंपू वॉश",
      "हल्का व सुरक्षित ब्लो-ड्राई",
      "नाखून काटना व किनारों की सफाई",
      "कान की गहराई से सफाई",
      "पॉ-पैड प्राकृतिक कंडीशनिंग बाम",
      "मनमोहक फ्रेगरेंस स्प्रे",
    ],
  },
  {
    id: "full-grooming",
    name: "Full Royal Grooming",
    nameHi: "रॉयल फुल ग्रूमिंग",
    tagline: "Head-to-tail styling & hygiene overhaul",
    taglineHi: "सिर से पूंछ तक संपूर्ण स्टाइलिंग व ग्रूमिंग",
    description: "The complete salon experience. Includes everything in Bath & Blow-dry plus customized scissor styling, breed standard haircut, and sanitary trim.",
    descriptionHi: "सम्पूर्ण स्पा अनुभव! नहलाने के साथ-साथ ब्रीड के अनुसार मनपसंद हेयरकट और सैनिटरी ट्रिम।",
    durationMinutes: 75,
    iconName: "scissors",
    popular: true,
    pricing: {
      small: 999,
      medium: 1399,
      large: 1899,
    },
    includes: [
      "Everything in Bath & Blow-dry",
      "Full body scissor haircut or breed trim",
      "Sanitary & groin hygiene trim",
      "Paw-pad underside hair shave",
      "Teeth brushing & mint breath spray",
      "Cute bow-tie or festive bandana gift",
    ],
    includesHi: [
      "नहलाना व ब्लो-ड्राई की सभी सुविधाएं",
      "बॉडी हेयरकट व मनपसंद स्टाइलिंग",
      "सैनिटरी एरिया की विशेष सफाई",
      "पंजों के बीच के बालों की ट्रिमिंग",
      "दांतों की सफाई व फ्रेश मिंट स्प्रे",
      "मुफ्त सुंदर बो-टाई या बंदना",
    ],
  },
  {
    id: "spa-day-deluxe",
    name: "Ayurvedic Luxury Spa",
    nameHi: "आयुर्वेदिक लक्ज़री स्पा",
    tagline: "Deep relaxation & coat therapy",
    taglineHi: "गहरा आराम और त्वचा की विशेष थेरेपी",
    description: "Aromatherapy hot oil massage with virgin coconut and neem, deep conditioning mud mask, hydrotherapy bubble soak, and paw reflexology.",
    descriptionHi: "शुद्ध नारियल व नीम तेल की मालिश, डीप कंडीशनिंग मास्क, बबल बाथ और पंजों की रिलैक्सिंग मसाज।",
    durationMinutes: 90,
    iconName: "sparkles",
    pricing: {
      small: 1299,
      medium: 1799,
      large: 2299,
    },
    includes: [
      "Warm organic oil pre-bath massage (20 mins)",
      "Hydrating keratin coat mask",
      "Hydro-bubble spa bath soak",
      "Ear flush & eye stain lightening",
      "Pad conditioning therapy with beeswax",
      "Stress-relief calming lavender mist",
    ],
    includesHi: [
      "20 मिनट गुनगुने प्राकृतिक तेल की मालिश",
      "हाइड्रेटिंग केराटिन कोट मास्क",
      "हाइड्रो-बबल रिलैक्सिंग बाथ",
      "आंखों के दाग व कान की सफाई",
      "बीजवैक्स पॉ थेरेपी",
      "तनाव-मुक्त करने वाला लैवेंडर मिस्ट",
    ],
  },
  {
    id: "deshedding-treatment",
    name: "Furminator De-Shedding",
    nameHi: "डी-शेडिंग हेयर ट्रीटमेंट",
    tagline: "Say goodbye to 90% loose shedding hair",
    taglineHi: "घर में उड़ते बालों से 90% तक छुटकारा",
    description: "Specialized undercoat removal for double-coated breeds like Labradors, Golden Retrievers, German Shepherds, and Huskies.",
    descriptionHi: "लैब्राडोर, गोल्डन रिट्रीवर और हस्की जैसे ब्रीड्स के लिए खास अंडरकोट क्लीनिंग जिससे घर साफ रहे।",
    durationMinutes: 60,
    iconName: "comb",
    pricing: {
      small: 799,
      medium: 1199,
      large: 1599,
    },
    includes: [
      "3-step undercoat de-shedding rake session",
      "Special anti-shedding fortifying shampoo",
      "High-velocity undercoat blow-out",
      "Silicone shedding glove massage",
      "Leave-in coat silk serum",
      "Nail trim & ear clean",
    ],
    includesHi: [
      "3-स्टेप अंडरकोट कंघी सेशन",
      "एंटी-शेडिंग मजबूत शैंपू वॉश",
      "हाई-स्पीड ब्लो-ड्राई द्वारा बाल हटाना",
      "सिलिकॉन मसाज और डी-शेडिंग",
      "सिल्की लीव-इन कोट सीरम",
      "नाखून व कान की सफाई",
    ],
  },
  {
    id: "tick-flea-shield",
    name: "Tick & Flea Defense",
    nameHi: "टिक और पिस्सू रक्षा",
    tagline: "Natural botanical parasite protection",
    taglineHi: "प्राकृतिक नीम व टी-ट्री परजीवी निवारक",
    description: "Medicated Ayurvedic wash using pure neem, eucalyptus, and tea tree extracts that kills ticks on contact and repels fleas without chemical burns.",
    descriptionHi: "नीम और यूकेलिप्टस का आयुर्वेदिक औषधीय स्नान जो कीड़ों को तुरंत खत्म करता है और त्वचा को ठंडक देता है।",
    durationMinutes: 60,
    iconName: "shampooBottle",
    pricing: {
      small: 699,
      medium: 999,
      large: 1399,
    },
    includes: [
      "Manual tick check & careful removal",
      "Neem & citronella medicated soak (15 mins)",
      "Anti-itch soothing aloe vera spray",
      "Flea comb deep inspection",
      "Post-bath tick prevention mist",
      "Ear cleansing against mites",
    ],
    includesHi: [
      "हाथों से पूरे शरीर की टिक जांच व सफाई",
      "15 मिनट नीम व सिट्रोनेला औषधीय वॉश",
      "खुजली शांत करने वाला एलोवेरा स्प्रे",
      "बारीक कंघी से पूरी सफाई",
      "सुरक्षात्मक एंटी-टिक स्प्रे",
      "कान के माइट्स की सफाई",
    ],
  },
  {
    id: "cat-grooming",
    name: "Feline Whisperer Groom",
    nameHi: "कैट ग्रूमिंग व स्पा",
    tagline: "Ultra-quiet, patient cat pampering",
    taglineHi: "बिल्कुल शांत माहौल में कोमल बिल्ली ग्रूमिंग",
    description: "Quiet stress-free grooming for Persian, Indie, and Siamese cats in our dedicated isolated cat suite with calming pheromone diffusers.",
    descriptionHi: "फारसी और देसी बिल्लियों के लिए अलग शांत सुइट में बिना पानी या सौम्य वॉटर बाथ के साथ कोमल देखभाल।",
    durationMinutes: 50,
    iconName: "catBath",
    popular: true,
    pricing: {
      small: 899,
      medium: 1199,
      large: 1499,
    },
    includes: [
      "Feline pheromone (Feliway) calming chamber",
      "Dry foam waterless or gentle warm bath",
      "Persian coat tangle de-matting & comb-out",
      "Gentle claw blunt trimming (no quick cuts)",
      "Tear-stain facial wipe with chamomile",
      "Ear canal wax removal",
    ],
    includesHi: [
      "फेलिवे फेरोमोन शांत कमरा",
      "वाटरलेस ड्राई फोम या गुनगुना सौम्य स्नान",
      "उलझे बालों को सुलझाना (डी-मैटिंग)",
      "नाखूनों की सुरक्षित ट्रिमिंग",
      "आंखों के दागों की कैमोमाइल सफाई",
      "कान की गहराई से सफाई",
    ],
  },
  {
    id: "hair-trim-style",
    name: "Puppy Cut & Scissor Style",
    nameHi: "पपी कट व सिज़र स्टाइल",
    tagline: "Teddy bear cuts & summer comfort clips",
    taglineHi: "टेडी बियर कट और गर्मियों के लिए आरामदायक क्लिप",
    description: "Precision hand scissor trimming tailored to your lifestyle. Great for Shih Tzus, Poodles, Pomeranians, and Maltese.",
    descriptionHi: "हाथ की कैंची से की जाने वाली कारीगरी। शीह त्ज़ू, पोमेरेनियन और पूडल के लिए सबसे उत्तम टेडी लुक।",
    durationMinutes: 60,
    iconName: "scissors",
    pricing: {
      small: 699,
      medium: 999,
      large: 1299,
    },
    includes: [
      "Consultation on desired face & body shape",
      "Precision hand-scissor facial shaping",
      "Paw-pad tidy & feet rounding",
      "Sanitary perimeter clip",
      "Tail plume styling",
      "Ear fringing & feathering",
    ],
    includesHi: [
      "चेहरे और शरीर के आकार की सलाह",
      "बारीक कैंची से गोल व प्यारा चेहरा बनाना",
      "पंजों की सफाई व गोल फिनिश",
      "सैनिटरी एरिया की ट्रिमिंग",
      "पूंछ की सुंदर स्टाइलिंग",
      "कानों के बालों की कटिंग",
    ],
  },
  {
    id: "nail-ear-touchup",
    name: "Pawdi-Cure & Ear Care",
    nameHi: "पॉडी-क्योर व कान की देखभाल",
    tagline: "Quick 20-minute hygiene refresh",
    taglineHi: "20 मिनट में नाखूनों और कानों की त्वरित सफाई",
    description: "Ideal for pets who walk on hard Bangalore pavements and need regular paw comfort and ear upkeep.",
    descriptionHi: "सड़क पर टहलने वाले पेट्स के लिए खुरदुरे पंजों की मरहम पट्टी और कान की त्वरित सफाई।",
    durationMinutes: 20,
    iconName: "nailClipper",
    pricing: {
      small: 299,
      medium: 399,
      large: 499,
    },
    includes: [
      "Nail clip & rotary edge grinder smoothing",
      "Paw pad hair clearing for better grip",
      "Nourishing coconut & shea butter paw wax",
      "Herbal ear cleaner & wax removal",
      "Quick coat brush-through",
      "Complimentary treat award",
    ],
    includesHi: [
      "नाखून काटना व स्मूथ बफरिंग",
      "पंजों के नीचे बाल हटाना ताकि फिसलन न हो",
      "नारियल व शिया बटर पॉ बाम",
      "हर्बल कान क्लीनर",
      "त्वरित ब्रश और कंघी",
      "स्वादिष्ट ट्रीट उपहार",
    ],
  },
];

