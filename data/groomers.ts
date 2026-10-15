export interface GroomerItem {
  id: string;
  name: string;
  role: string;
  roleHi: string;
  experienceYears: number;
  speciality: string;
  specialityHi: string;
  funFact: string;
  funFactHi: string;
  petLove: string;
  badge: string;
}

export const GROOMERS_DATA: GroomerItem[] = [
  {
    id: "groomer-sreekumar",
    name: "Sreekumar Nair",
    role: "Master Stylist & Founder",
    roleHi: "मास्टर स्टाइलिस्ट व संस्थापक",
    experienceYears: 9,
    speciality: "Double-coat styling, puppy scissor cuts & Indie rehabilitation",
    specialityHi: "डबल-कोट स्टाइलिंग, पपी सिज़र कट व देसी कुत्तों की देखभाल",
    funFact: "Can calm an agitated Husky in under 60 seconds with belly rubs & filter coffee nearby ☕",
    funFactHi: "किसी भी गुस्सैल हस्की को सिर्फ 60 सेकंड में शांत कर सकते हैं ☕",
    petLove: "Dog dad to 3 rescue Indies: Sheru, Chutki & Badshah",
    badge: "Certified Fear-Free Professional",
  },
  {
    id: "groomer-priyanka",
    name: "Priyanka Roy",
    role: "Senior Feline Whisperer & Spa Specialist",
    roleHi: "सीनियर कैट एक्सपर्ट व स्पा स्पेशलिस्ट",
    experienceYears: 6,
    speciality: "Persian cat tangle removal, lion cuts & stress-free claw pedicures",
    specialityHi: "पर्शियन कैट डीमैटिंग, लायन कट व शांत नेल पेडिक्योर",
    funFact: "Speaks fluent 'meow' and hums Bollywood retro songs during bubble baths 🎵",
    funFactHi: "बिल्लियों की भाषा समझती हैं और नहलाते समय पुराने गाने गुनगुनाती हैं 🎵",
    petLove: "Feline mama to 2 calico cats: Mishti & Chamcham",
    badge: "Certified Feline Grooming Specialist",
  },
  {
    id: "groomer-rohit",
    name: "Rohit Anthony",
    role: "Canine Hydrotherapist & Skin Care Expert",
    roleHi: "हाइड्रोथेरेपिस्ट व स्किन केयर विशेषज्ञ",
    experienceYears: 5,
    speciality: "Ayurvedic hot-oil massage, tick mitigation & fungal dermatitis relief",
    specialityHi: "आयुर्वेदिक तेल मालिश, टिक सुरक्षा व त्वचा एलर्जी समाधान",
    funFact: "Has given over 4,000 gentle ear-rubs and knows every dog's tickle spot 🐾",
    funFactHi: "4,000 से ज्यादा पेट्स को प्यार भरी मालिश दे चुके हैं 🐾",
    petLove: "Proud parent of a goofball Golden Retriever named Waffles",
    badge: "Pet First Aid & CPR Certified",
  },
];

