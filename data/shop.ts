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
  name: "Pawfect Tails Pet Spa",
  tagline: "Bengaluru's Happiest Pet Grooming & Wellness Centre",
  city: "Bengaluru",
  area: "Indiranagar",
  address: {
    line1: "No. 428, 12th Main Road, HAL 2nd Stage",
    line2: "Opposite Starbucks & Near 100ft Road",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560038",
    landmark: "Indiranagar 100ft Road Junction",
  },
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsappNumber: "919876543210",
  email: "woof@pawfecttailspa.in",
  hours: {
    open: "9:30 AM",
    close: "8:30 PM",
    display: "Mon - Sun: 9:30 AM – 8:30 PM",
    days: "Open all 7 days",
    openHour24: 9.5,
    closeHour24: 20.5,
  },
  stats: {
    petsGroomed: "5,000+",
    petsGroomedCount: 5240,
    rating: 4.9,
    reviewsCount: 512,
    experienceYears: 8,
  },
  socials: {
    instagram: "https://instagram.com/pawfecttails_petspa",
    facebook: "https://facebook.com/pawfecttailsspa",
    youtube: "https://youtube.com/@pawfecttailspatspa",
    whatsapp: "https://wa.me/919876543210",
  },
  legal: {
    gstin: "29AABCP1234D1Z5",
    license: "BBMP Pet Establishment Reg: KA-BLR-PET-2022-8491",
    copyright: "© 2026 Pawfect Tails Pet Spa Pvt Ltd. All rights reserved.",
  },
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.973950478174!2d77.63934377598835!3d12.97355021484179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a70a8d67f7%3A0x6b19a0a0be23871!2s12th%20Main%20Rd%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka%20560038!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  directionsUrl: "https://maps.google.com/?q=12.97355,77.63934",
};

