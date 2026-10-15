import { PetSize } from "./services";

export interface BreedInfo {
  id: string;
  name: string;
  nameHi: string;
  petType: "dog" | "cat";
  defaultSize: PetSize;
  coatType: "short" | "double" | "long" | "curly";
  desheddingRecommended?: boolean;
  notes?: string;
}

export const BREEDS_DATA: BreedInfo[] = [
  // Dogs
  {
    id: "indie",
    name: "Indie / Desi Dog",
    nameHi: "देसी / इंडी डॉग",
    petType: "dog",
    defaultSize: "medium",
    coatType: "short",
    notes: "Super resilient short coat, responds amazingly to herbal baths & paw balm.",
  },
  {
    id: "labrador",
    name: "Labrador Retriever",
    nameHi: "लैब्राडोर रिट्रीवर",
    petType: "dog",
    defaultSize: "large",
    coatType: "double",
    desheddingRecommended: true,
    notes: "Heavy shedders in Indian weather. De-shedding wash is highly recommended.",
  },
  {
    id: "golden-retriever",
    name: "Golden Retriever",
    nameHi: "गोल्डन रिट्रीवर",
    petType: "dog",
    defaultSize: "large",
    coatType: "long",
    desheddingRecommended: true,
    notes: "Prone to hotspots and damp coat. Requires deep warm blow dry & detangling.",
  },
  {
    id: "shih-tzu",
    name: "Shih Tzu",
    nameHi: "शीह त्ज़ू",
    petType: "dog",
    defaultSize: "small",
    coatType: "long",
    notes: "Needs regular teddy bear face trimming and tear-stain cleansing.",
  },
  {
    id: "indian-spitz",
    name: "Indian Spitz",
    nameHi: "इंडियन स्पिट्ज़",
    petType: "dog",
    defaultSize: "small",
    coatType: "double",
    desheddingRecommended: true,
    notes: "Loves a fluffy de-shedding blow-out and cooling bath in Bengaluru heat.",
  },
  {
    id: "pomeranian",
    name: "Pomeranian",
    nameHi: "पोमेरेनियन",
    petType: "dog",
    defaultSize: "small",
    coatType: "double",
    notes: "Famous for our cloud-puff scissor cut and sanitary trimming.",
  },
  {
    id: "german-shepherd",
    name: "German Shepherd",
    nameHi: "जर्मन शेफर्ड",
    petType: "dog",
    defaultSize: "large",
    coatType: "double",
    desheddingRecommended: true,
    notes: "Thick double coat requires specialized undercoat rakes and tick prevention.",
  },
  {
    id: "pug",
    name: "Pug",
    nameHi: "पग",
    petType: "dog",
    defaultSize: "small",
    coatType: "short",
    notes: "Requires special facial wrinkle cleaning, ear care, and gentle nail smoothing.",
  },
  {
    id: "beagle",
    name: "Beagle",
    nameHi: "बीगल",
    petType: "dog",
    defaultSize: "medium",
    coatType: "short",
    notes: "Long floppy ears need extra anti-bacterial cleaning in humid weather.",
  },
  {
    id: "cocker-spaniel",
    name: "Cocker Spaniel",
    nameHi: "कॉकर स्पैनियल",
    petType: "dog",
    defaultSize: "medium",
    coatType: "long",
    notes: "Heavy silky ear feathering and foot rounding haircut.",
  },
  {
    id: "poodle",
    name: "Poodle / Toy Poodle",
    nameHi: "पूडल",
    petType: "dog",
    defaultSize: "small",
    coatType: "curly",
    notes: "Non-shedding coat that needs skilled scissor shaping and dematting.",
  },
  {
    id: "rottweiler",
    name: "Rottweiler",
    nameHi: "रॉटवीलर",
    petType: "dog",
    defaultSize: "large",
    coatType: "short",
    notes: "Short coarse coat that gleams with our coconut massage & deep deshedding.",
  },

  // Cats
  {
    id: "persian-cat",
    name: "Persian Cat",
    nameHi: "पर्शियन कैट",
    petType: "cat",
    defaultSize: "medium",
    coatType: "long",
    notes: "Dense long hair prone to knots. Lion-cut or knot de-matting available.",
  },
  {
    id: "indie-cat",
    name: "Indie / Domestic Shorthair Cat",
    nameHi: "देसी / इंडी कैट",
    petType: "cat",
    defaultSize: "small",
    coatType: "short",
    notes: "Waterless foam bath or quick stress-free claw trim.",
  },
  {
    id: "siamese-cat",
    name: "Siamese Cat",
    nameHi: "सियामीज़ कैट",
    petType: "cat",
    defaultSize: "small",
    coatType: "short",
    notes: "Sleek coat, handled in our dedicated sound-insulated feline lounge.",
  },
  {
    id: "british-shorthair",
    name: "British Shorthair Cat",
    nameHi: "ब्रिटिश शॉर्टहेयर कैट",
    petType: "cat",
    defaultSize: "medium",
    coatType: "short",
    notes: "Plush dense coat benefits from gentle silicone brush & ear cleaning.",
  },
];

