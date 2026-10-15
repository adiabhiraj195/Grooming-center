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
  name: "Animalia Pet Care Grooming Parlour",
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
  phone: "+91 85700 49726",
  phoneRaw: "+918570049726",
  alternatePhone: "+91 95188 81824",
  alternatePhoneRaw: "+919518881824",
  whatsappNumber: "918570049726",
  email: "care@animaliapetcare.in",
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
    instagram: "https://instagram.com/animaliapetcare_rewari",
    facebook: "https://facebook.com/animaliapetcare",
    youtube: "https://youtube.com/@animaliapetcarerewari",
    whatsapp: "https://wa.me/918570049726",
  },
  legal: {
    gstin: "06AAICA1234D1Z9",
    license: "Pet Healthcare & Grooming Establishment Reg: HR-REW-PET-2021",
    copyright: "© 2026 Animalia Pet Care Grooming Parlour. All rights reserved.",
  },
  mapUrl: "https://maps.google.com/maps?q=Pilot+Chowk,+Sector+3+Road,+Radha+Swami+Colony,+Bhakti+Nagar,+Rewari,+Haryana+123401&t=&z=15&ie=UTF8&iwloc=&output=embed",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Animalia+Pet+Care+Grooming+Parlour+Pilot+Chowk+Sector+3+Road+Radha+Swami+Colony+Bhakti+Nagar+Rewari+Haryana",
};
