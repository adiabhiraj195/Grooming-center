export interface ShopConfig {
  name: string;
  tagline: string;
  city: string;
  area: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
  };
  phone: string;
  phoneRaw: string;
  alternatePhone: string;
  alternatePhoneRaw: string;
  whatsappNumber: string;
  email: string;
  hours: {
    open: string;
    close: string;
    display: string;
    days: string;
    openHour24: number;
    closeHour24: number;
  };
  stats: {
    petsGroomed: string;
    petsGroomedCount: number;
    rating: number;
    reviewsCount: number;
    experienceYears: number;
    platforms: string;
  };
  amenities: {
    walkIns: boolean;
    quickVisits: boolean;
    freeStreetParking: boolean;
    onSiteParking: boolean;
    nfcPayments: boolean;
    genderNeutralRestroom: boolean;
    wheelchairAccessible: boolean;
  };
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
    whatsapp: string;
  };
  legal: {
    gstin: string;
    license: string;
    copyright: string;
  };
  mapUrl: string;
  directionsUrl: string;
}

export const SHOP_DATA: ShopConfig = {
  name: "Pawfect Care Pet Grooming Parlour",
  tagline: "Rewari's Premier Pet Care & Grooming Center, Medical Clinic & Animal Hospital",
  city: "Rewari",
  area: "Radha Swami Colony, Bhakti Nagar",
  address: {
    line1: "Gate No-2, Sector 3 Road",
    line2: "Radha Swami Colony, Bhakti Nagar",
    city: "Rewari",
    state: "Haryana",
    pincode: "123401",
    landmark: "Near Pilot Chowk at Gate No-2",
  },
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  alternatePhone: "+91 98765 43211",
  alternatePhoneRaw: "+919876543211",
  whatsappNumber: "919876543210",
  email: "care@pawfectpetcare.example.com",
  hours: {
    open: "8:00 AM",
    close: "8:30 PM",
    display: "Mon - Sun: 8:00 AM – 8:30 PM",
    days: "Open all 7 days",
    openHour24: 8.0,
    closeHour24: 20.5,
  },
  stats: {
    petsGroomed: "1,200+",
    petsGroomedCount: 1250,
    rating: 5.0,
    reviewsCount: 42,
    experienceYears: 6,
    platforms: "Google & Justdial",
  },
  amenities: {
    walkIns: true,
    quickVisits: true,
    freeStreetParking: true,
    onSiteParking: true,
    nfcPayments: true,
    genderNeutralRestroom: true,
    wheelchairAccessible: false,
  },
  socials: {
    instagram: "https://instagram.com/pawfectpetcare",
    facebook: "https://facebook.com/pawfectpetcare",
    youtube: "https://youtube.com/@pawfectpetcare",
    whatsapp: "https://wa.me/919876543210",
  },
  legal: {
    gstin: "06AAAPL0000A1Z5",
    license: "Pet Healthcare & Grooming Establishment Reg: HR-REW-PET-MOCK-001",
    copyright: "© 2026 Pawfect Care Pet Grooming Parlour. All rights reserved.",
  },
  mapUrl: "https://maps.google.com/maps?q=Pilot+Chowk,+Sector+3+Road,+Radha+Swami+Colony,+Bhakti+Nagar,+Rewari,+Haryana+123401&t=&z=15&ie=UTF8&iwloc=&output=embed",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Pawfect+Care+Pet+Grooming+Parlour+Pilot+Chowk+Sector+3+Road+Radha+Swami+Colony+Bhakti+Nagar+Rewari+Haryana",
};
