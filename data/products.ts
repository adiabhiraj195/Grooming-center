export type ProductCategory =
  | "Shampoo & Grooming"
  | "Food & Treats"
  | "Toys"
  | "Walk Gear"
  | "Health"
  | "Cat Corner"
  | "Accessories";

export type ProductTag =
  | "Groomer's Pick"
  | "New"
  | "Used in our spa"
  | "Best seller"
  | "Limited stock";

export interface ProductVariant {
  id: string;
  label: string; // e.g. "250 ml", "500 ml", "Small", "Chicken & Rice"
  price: number;
  mrp: number;
}

export interface ProductItem {
  id: string;
  name: string;
  nameHi: string;
  brand: string;
  category: ProductCategory;
  description: string;
  descriptionHi: string;
  imageUrl: string;
  variants: ProductVariant[];
  tags: ProductTag[];
  inStock: boolean;
  groomerNote: string; // Caveat note
  ingredientsOrSuitability: string;
  ageAndSizeGuidance: string;
  safeFor: string[]; // e.g. ["Puppies 3+ mos", "Adult dogs", "Sensitive skin"]
  isPartnerLink?: boolean;
  partnerUrl?: string;
  isFeatured?: boolean;
}

export const PRODUCTS_DATA: ProductItem[] = [
  // 1. Shampoo & Grooming (Spa favorite)
  {
    id: "prod-herbal-shampoo",
    name: "Ayurvedic Neem & Lavender Calming Bath Wash",
    nameHi: "आयुर्वेदिक नीम व लैवेंडर कामिंग शैम्पू",
    brand: "Bark & Botanicals",
    category: "Shampoo & Grooming",
    description: "Tearless, sulfate-free herbal shampoo enriched with cold-pressed organic neem and English lavender oil.",
    descriptionHi: "बिना आंसू वाला, सल्फेट-मुक्त हर्बल शैम्पू जो त्वचा को खुजली से राहत देता है।",
    imageUrl: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&auto=format&fit=crop&q=80",
    variants: [
      { id: "v1-250", label: "250 ml", price: 449, mrp: 549 },
      { id: "v1-500", label: "500 ml", price: 799, mrp: 999 },
    ],
    tags: ["Used in our spa", "Groomer's Pick"],
    inStock: true,
    groomerNote: "We use this exact soothing blend on Bruno every single Saturday!",
    ingredientsOrSuitability: "Organic Neem extract, Lavender hydrosol, Aloe Vera juice, Coconut glucoside.",
    ageAndSizeGuidance: "Safe for puppies from 8 weeks and all adult dogs.",
    safeFor: ["Puppies 8wks+", "Adult Dogs", "Sensitive Skin", "Itchy Coats"],
    isFeatured: true,
  },

  // 2. Shampoo & Grooming (Silk Conditioner)
  {
    id: "prod-silk-conditioner",
    name: "Pure Silk Coat Detangling Creme",
    nameHi: "सिल्क कोट डिटैंगलिंग कंडीशनर",
    brand: "Groomer's Touch India",
    category: "Shampoo & Grooming",
    description: "Deep conditioning rinse that dissolves stubborn mats and undercoat knots in Golden Retrievers, Shih Tzus & Persians.",
    descriptionHi: "गहरी कंडीशनिंग जो उलझे बालों को पल भर में रेशमी और सुलझा हुआ बनाती है।",
    imageUrl: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&auto=format&fit=crop&q=80",
    variants: [
      { id: "v2-200", label: "200 ml", price: 549, mrp: 699 },
      { id: "v2-400", label: "400 ml", price: 949, mrp: 1199 },
    ],
    tags: ["Best seller", "Used in our spa"],
    inStock: true,
    groomerNote: "Sreekumar swears by this for lion cuts and puppy scissor styling.",
    ingredientsOrSuitability: "Hydrolyzed silk protein, Argan kernel oil, Shea butter, Pro-Vitamin B5.",
    ageAndSizeGuidance: "All long-haired breeds and double-coated dogs & cats.",
    safeFor: ["Long Hair Breeds", "Cats & Dogs", "Double Coats"],
    isFeatured: true,
  },

  // 3. Food & Treats
  {
    id: "prod-crunchy-treats",
    name: "Slow-Roasted Chicken Jerky Coins",
    nameHi: "स्लो रोस्टेड चिकन जर्की कॉइन्स",
    brand: "Pawfect Pantry",
    category: "Food & Treats",
    description: "100% human-grade farm chicken breast, zero preservatives, grains, or artificial coloring. High protein training treat.",
    descriptionHi: "100% शुद्ध चिकन ब्रेस्ट, बिना किसी प्रिजर्वेटिव या अनाज के।",
    imageUrl: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600&auto=format&fit=crop&q=80",
    variants: [
      { id: "v3-100g", label: "100 grams", price: 299, mrp: 349 },
      { id: "v3-250g", label: "250 grams", price: 649, mrp: 799 },
    ],
    tags: ["Best seller"],
    inStock: true,
    groomerNote: "Our secret weapon for keeping pups cooperative on the grooming table!",
    ingredientsOrSuitability: "100% Dehydrated Chicken Breast, Turmeric powder, Chia seeds.",
    ageAndSizeGuidance: "Dogs of all breeds and ages above 3 months.",
    safeFor: ["All Dog Breeds", "Puppies 3+ mos", "Grain-Free"],
    isFeatured: true,
  },

  // 4. Food & Treats (Partner pick)
  {
    id: "prod-salmon-bites",
    name: "Wild Atlantic Salmon & Blueberry Bites",
    nameHi: "वाइल्ड सेल्मन व ब्लूबेरी बाइट्स",
    brand: "OceanPaws",
    category: "Food & Treats",
    description: "Rich in Omega-3 & 6 fatty acids for a glossy, itch-free coat and healthy joint mobility.",
    descriptionHi: "ओमेगा-3 से भरपूर जो बालों को प्राकृतिक चमक और त्वचा को नमी प्रदान करता है।",
    imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&auto=format&fit=crop&q=80",
    variants: [
      { id: "v4-150g", label: "150 g Pouch", price: 499, mrp: 599 },
    ],
    tags: ["New"],
    inStock: true,
    groomerNote: "Noticeable coat shine within just 2 weeks of daily rewards.",
    ingredientsOrSuitability: "Atlantic Salmon 75%, Blueberries, Sweet Potato flour, Rosemary extract.",
    ageAndSizeGuidance: "Suitable for dogs and cats aged 4 months and above.",
    safeFor: ["Dogs & Cats", "Shiny Coat", "Joint Support"],
    isPartnerLink: true,
    partnerUrl: "https://example.com/partner/oceanpaws-salmon",
  },

  // 5. Toys (Durable)
  {
    id: "prod-tough-rubber-bone",
    name: "Indie-Tough Natural Rubber Treat Bone",
    nameHi: "नेचुरल रबर टफ ट्रीट बोन",
    brand: "ChewMaster India",
    category: "Toys",
    description: "Non-toxic food-grade natural rubber bone that withstands aggressive chewers. Stuffable with peanut butter.",
    descriptionHi: "मजबूत प्राकृतिक रबर से बना खिलौना जो दांतों को साफ और पेट को व्यस्त रखता है।",
    imageUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&auto=format&fit=crop&q=80",
    variants: [
      { id: "v5-m", label: "Medium (Dogs 10–25kg)", price: 399, mrp: 499 },
      { id: "v5-l", label: "Large (Dogs 25kg+)", price: 549, mrp: 699 },
    ],
    tags: ["Groomer's Pick"],
    inStock: true,
    groomerNote: "Even Sultan the German Shepherd hasn't managed to puncture this one!",
    ingredientsOrSuitability: "100% Natural Hevea Rubber, BPA-free, Phthalate-free.",
    ageAndSizeGuidance: "Medium to large chewers.",
    safeFor: ["Heavy Chewers", "Dental Cleaning", "Dishwasher Safe"],
    isFeatured: false,
  },

  // 6. Walk Gear
  {
    id: "prod-padded-harness",
    name: "City Walk No-Pull Padded Comfort Harness",
    nameHi: "नो-पुल पैडेड डॉग हार्नेस",
    brand: "Pawfect Pet Gear",
    category: "Walk Gear",
    description: "Breathable air-mesh harness with front leash attachment to discourage pulling on daily city walks.",
    descriptionHi: "गले पर दबाव डाले बिना आराम से चलने के लिए सुरक्षित पैडेड हार्नेस।",
    imageUrl: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=600&auto=format&fit=crop&q=80",
    variants: [
      { id: "v6-s", label: "Small (Pugs, Shih Tzu)", price: 799, mrp: 999 },
      { id: "v6-m", label: "Medium (Indies, Beagles)", price: 999, mrp: 1299 },
      { id: "v6-l", label: "Large (Labs, Goldens)", price: 1199, mrp: 1499 },
    ],
    tags: ["Best seller"],
    inStock: true,
    groomerNote: "Distributes pressure across the chest so your dog's throat stays protected.",
    ingredientsOrSuitability: "Ripstop nylon, 3M reflective threading, zinc alloy D-rings.",
    ageAndSizeGuidance: "All sizes available.",
    safeFor: ["No-Choke", "Reflective Night Walks", "Machine Washable"],
    isFeatured: true,
  },

  // 7. Walk Gear (Biothane Leash)
  {
    id: "prod-waterproof-leash",
    name: "Monsoon-Proof Biothane Waterproof Leash",
    nameHi: "वॉटरप्रूफ बायोथेन डॉग लीश",
    brand: "Pawfect Pet Gear",
    category: "Walk Gear",
    description: "Mud-resistant, waterproof 5ft leash that wipes clean in seconds after rainy or dusty walks.",
    descriptionHi: "कीचड़ और पानी से सुरक्षित लीश जो कभी गंदी या बदबूदार नहीं होती।",
    imageUrl: "https://images.unsplash.com/photo-1608096299210-db7e38487075?w=600&auto=format&fit=crop&q=80",
    variants: [
      { id: "v7-teal", label: "Peacock Teal (5 ft)", price: 699, mrp: 899 },
      { id: "v7-marigold", label: "Marigold Yellow (5 ft)", price: 699, mrp: 899 },
    ],
    tags: ["New"],
    inStock: true,
    groomerNote: "Zero soggy dog leash smell even after the heaviest monsoon downpour.",
    ingredientsOrSuitability: "PVC coated biothane webbing, rust-proof brass snap hook.",
    ageAndSizeGuidance: "Tested up to 50kg pull strength.",
    safeFor: ["Monsoon Walks", "Stink-Free", "Zero Tangle"],
  },

  // 8. Health
  {
    id: "prod-paw-balm",
    name: "Herbal Healing Paw-Pad & Snout Balm",
    nameHi: "हर्बल पॉ-पैड व स्नाउट हीलिंग बाम",
    brand: "Bark & Botanicals",
    category: "Health",
    description: "Lick-safe organic beeswax and coconut butter salve that soothes cracked paws and hyperkeratosis.",
    descriptionHi: "चाटने पर पूरी तरह सुरक्षित आयुर्वेदिक बाम जो फटे पंजों को तुरंत आराम देता है।",
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&auto=format&fit=crop&q=80",
    variants: [
      { id: "v8-50g", label: "50 g Tin", price: 349, mrp: 449 },
    ],
    tags: ["Used in our spa", "Groomer's Pick"],
    inStock: true,
    groomerNote: "Applied at the end of every royal groom to protect paws against hot tarmac.",
    ingredientsOrSuitability: "Organic Beeswax, Virgin Coconut Oil, Shea Butter, Calendula Extract.",
    ageAndSizeGuidance: "Safe for dogs and cats of all ages.",
    safeFor: ["100% Lick Safe", "Cracked Paws", "Dry Snouts"],
    isFeatured: true,
  },

  // 9. Health (Tick Defense)
  {
    id: "prod-tick-spray",
    name: "Ayurvedic Lemongrass & Neem Tick Shield Mist",
    nameHi: "आयुर्वेदिक टिक व पिस्सू शील्ड स्प्रे",
    brand: "Groomer's Touch India",
    category: "Health",
    description: "Chemical-free daily repellent spray before park walks. Keeps fleas, ticks, and mosquitoes away.",
    descriptionHi: "बिना केमिकल वाला नीम व लेमनग्रास स्प्रे जो टिक्स और मच्छरों को दूर रखता है।",
    imageUrl: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?w=600&auto=format&fit=crop&q=80",
    variants: [
      { id: "v9-200ml", label: "200 ml Spray", price: 399, mrp: 499 },
    ],
    tags: ["Best seller"],
    inStock: false, // Tested out of stock state!
    groomerNote: "Essential companion for evening walks in Cubbon Park and HAL gardens.",
    ingredientsOrSuitability: "Cold-pressed Neem Oil, Lemongrass essential oil, Citronella, Purified water.",
    ageAndSizeGuidance: "Dogs 12 weeks and older. Not for felines.",
    safeFor: ["Canine Daily Walks", "Chemical-Free", "Natural Repellent"],
  },

  // 10. Cat Corner
  {
    id: "prod-cat-foam",
    name: "Waterless Calming Feline Foam Mousse",
    nameHi: "कैट वाटरलेस फोमिंग मूस",
    brand: "Feline Whisperer",
    category: "Cat Corner",
    description: "Stress-free waterless shampoo for cats who panic around water tubs. Infused with catnip hydrosol.",
    descriptionHi: "बिना पानी के बिल्लियों को साफ और खुशबूदार रखने वाला झागदार मूस।",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80",
    variants: [
      { id: "v10-150ml", label: "150 ml Pump", price: 499, mrp: 599 },
    ],
    tags: ["Used in our spa", "Groomer's Pick"],
    inStock: true,
    groomerNote: "Priyanka uses this on Mishti to keep her coat fluffy without bath anxiety.",
    ingredientsOrSuitability: "Chamomile extract, Catnip floral water, Silk amino acids, Oat milk.",
    ageAndSizeGuidance: "All kittens and adult cats.",
    safeFor: ["All Cats", "Zero Water Needed", "Stress-Free"],
    isFeatured: true,
  },

  // 11. Cat Corner (Treats)
  {
    id: "prod-cat-puree",
    name: "Creamy Chicken & Tuna Lickable Puree (Pack of 5)",
    nameHi: "कैट क्रीमी लिकेबल ट्रीट (5 का पैक)",
    brand: "Mishti's Pantry",
    category: "Cat Corner",
    description: "Irresistible lickable puree treats for bond building and distraction during nail trimming.",
    descriptionHi: "नेल ट्रिमिंग के दौरान बिल्ली को शांत रखने वाला स्वादिष्ट प्यूरी ट्रीट।",
    imageUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&auto=format&fit=crop&q=80",
    variants: [
      { id: "v11-5pk", label: "5 x 14g Tubes", price: 199, mrp: 249 },
    ],
    tags: ["Best seller"],
    inStock: true,
    groomerNote: "One lick of this and even the most feisty cat completely forgets their claws are being clipped!",
    ingredientsOrSuitability: "Real Chicken meat, Skipjack tuna, Taurine, Green tea extract.",
    ageAndSizeGuidance: "Kittens from 2 months and all adult cats.",
    safeFor: ["All Felines", "Hydration Boost", "Grain Free"],
  },

  // 12. Accessories
  {
    id: "prod-deshed-brush",
    name: "Self-Cleaning Undercoat Slicker Brush",
    nameHi: "सेल्फ-क्लीनिंग अंडरकोट ब्रश",
    brand: "Groomer's Touch India",
    category: "Accessories",
    description: "Fine bent wire bristles with coated safety tips. Press the rear button and trapped hair pops out instantly.",
    descriptionHi: "एक बटन दबाते ही सारा फंसा हुआ बाल बाहर निकल जाता है। पंजों और कोट के लिए कोमल।",
    imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop&q=80",
    variants: [
      { id: "v12-m", label: "Standard Size", price: 499, mrp: 649 },
    ],
    tags: ["Groomer's Pick", "Limited stock"],
    inStock: true,
    groomerNote: "The exact brush we recommend to every Golden Retriever and Indie parent.",
    ingredientsOrSuitability: "Stainless steel pins with rubber tips, ergonomic ABS handle.",
    ageAndSizeGuidance: "Medium and long-coated pets.",
    safeFor: ["Dogs & Cats", "Undercoat Removal", "Push-Button Clean"],
    isFeatured: true,
  },
];

