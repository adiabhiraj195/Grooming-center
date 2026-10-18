"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi";

export interface Translations {
  nav: {
    services: string;
    pricing: string;
    reviews: string;
    products: string;
    gallery: string;
    howItWorks: string;
    about: string;
    contact: string;
    bookNow: string;
    callNow: string;
    whatsapp: string;
    reviewUs: string;
  };
  hero: {
    eyebrow: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustRating: string;
    trustReviews: string;
    badgeVetApproved: string;
    badgeNoCage: string;
    badgeOpen7Days: string;
    badgePickupDrop: string;
  };
  trustStrip: {
    hygiene: string;
    hygieneDesc: string;
    safeProducts: string;
    safeProductsDesc: string;
    groomers: string;
    groomersDesc: string;
    cctv: string;
    cctvDesc: string;
    pickup: string;
    pickupDesc: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    sizeSmall: string;
    sizeMedium: string;
    sizeLarge: string;
    startsFrom: string;
    bookService: string;
    viewDetails: string;
    includedTag: string;
  };
  estimator: {
    eyebrow: string;
    title: string;
    subtitle: string;
    petTypeLabel: string;
    dog: string;
    cat: string;
    breedLabel: string;
    serviceLabel: string;
    estimateLabel: string;
    bookOnWhatsapp: string;
    note: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    beforeLabel: string;
    afterLabel: string;
    wowSticker: string;
    dragHint: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  reviews: {
    eyebrow: string;
    title: string;
    subtitle: string;
    writeGoogle: string;
    scanQr: string;
    filterAll: string;
    filterDogs: string;
    filterCats: string;
    filterFullGroom: string;
    filterSpa: string;
    filterPuppies: string;
    filterAnxious: string;
    leaveReviewBtn: string;
    leaveReviewTitle: string;
    leaveReviewDesc: string;
    yourName: string;
    petName: string;
    petBreed: string;
    yourRating: string;
    yourFeedback: string;
    submitReview: string;
    thankYou: string;
    pendingApproval: string;
    petOfMonth: string;
  };
  groomers: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  seasonal: {
    summerTitle: string;
    summerDesc: string;
    monsoonTitle: string;
    monsoonDesc: string;
    winterTitle: string;
    winterDesc: string;
    diwaliTitle: string;
    diwaliDesc: string;
    limitedOffer: string;
    claimOffer: string;
  };
  packages: {
    eyebrow: string;
    title: string;
    subtitle: string;
    membershipTitle: string;
    firstVisitTitle: string;
    referTitle: string;
    claimBtn: string;
  };
  faqs: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stillQuestions: string;
    chatWithUs: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ownerName: string;
    ownerNamePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    petType: string;
    breed: string;
    breedPlaceholder: string;
    service: string;
    preferredDate: string;
    preferredTime: string;
    notes: string;
    notesPlaceholder: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    chatWhatsappNow: string;
    bookAnother: string;
  };
  location: {
    eyebrow: string;
    title: string;
    subtitle: string;
    openNow: string;
    closedNow: string;
    openHours: string;
    getDirections: string;
    callStore: string;
    addressTitle: string;
  };
  footer: {
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    hoursTitle: string;
    paymentsAccepted: string;
    madeWithLove: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      services: "Services",
      pricing: "Pricing",
      reviews: "Reviews",
      products: "Products",
      gallery: "Transformations",
      howItWorks: "How It Works",
      about: "Our Team",
      contact: "Find Us",
      bookNow: "Book Appointment",
      callNow: "Call Us",
      whatsapp: "WhatsApp",
      reviewUs: "Review Us",
    },
    hero: {
      eyebrow: "Rewari's 5.0★ All-in-One Pet Care & Grooming Center",
      titleMain: "Paws, Bubbles &",
      titleHighlight: "Bahut Saara Pyaar!",
      subtitle:
        "Rewari's trusted all-in-one pet destination. Dedicated grooming clinic, medical clinic & animal hospital for all pet treatments, and prominent dealer for pet accessories & essentials.",
      ctaPrimary: "Book on WhatsApp",
      ctaSecondary: "See Happy Tails",
      trustRating: "5.0★ Rating on Google & Justdial",
      trustReviews: "40+ Customer Reviews",
      badgeVetApproved: "Animal Hospital & Clinic",
      badgeNoCage: "Dedicated Grooming Clinic",
      badgeOpen7Days: "Open 7 Days (8:00 AM – 8:30 PM)",
      badgePickupDrop: "Walk-ins & Free Parking",
    },
    trustStrip: {
      hygiene: "Medical Clinic & Hospital",
      hygieneDesc: "Full pet treatments, health checks & animal hospital care",
      safeProducts: "Dedicated Grooming Clinic",
      safeProductsDesc: "Clean, well-maintained pets with tearless gentle washes",
      groomers: "Dependable Care & Service",
      groomersDesc: "Expert team managing basic grooming to medical treatments",
      cctv: "Pet Supplies & Food Dealer",
      cctvDesc: "Prominent local dealer for accessories, food & daily essentials",
      pickup: "Walk-Ins & Free Parking",
      pickupDesc: "Accommodating quick visits, on-site parking & NFC mobile payments",
    },
    services: {
      eyebrow: "Tail-Wagging Services",
      title: "Spa Care Crafted for Every Furry Friend",
      subtitle: "Transparent pricing with no surprise charges. Select your pet size below to view custom rates.",
      sizeSmall: "Small (< 10 kg)",
      sizeMedium: "Medium (10 - 25 kg)",
      sizeLarge: "Large (25+ kg)",
      startsFrom: "Starts from",
      bookService: "Book Session",
      viewDetails: "View Details",
      includedTag: "Includes blow-dry, ear cleaning & nail trim",
    },
    estimator: {
      eyebrow: "Quick Cost Calculator",
      title: "Breed-Friendly Price Estimator",
      subtitle: "Pick your pet's breed and grooming package for an instant estimated price in Indian Rupees.",
      petTypeLabel: "Pet Species",
      dog: "Dog 🐶",
      cat: "Cat 🐱",
      breedLabel: "Breed / Mix",
      serviceLabel: "Select Grooming Package",
      estimateLabel: "Estimated Price:",
      bookOnWhatsapp: "Book This on WhatsApp",
      note: "*Prices may vary slightly based on coat matted condition or extra thick undercoat. Final quote confirmed before bath.",
    },
    gallery: {
      eyebrow: "Real Transformations",
      title: "From Scruffy to Pawsitively Gorgeous",
      subtitle: "Slide to compare the magic hands of our groomers! Real Rewari pets before & after their spa sessions.",
      beforeLabel: "Before Groom",
      afterLabel: "After Pampering",
      wowSticker: "✨ What a Glow-up!",
      dragHint: "← Drag slider to compare →",
    },
    howItWorks: {
      eyebrow: "The Pampering Journey",
      title: "How Grooming & Care Works at Pawfect Care",
      subtitle: "Step-by-step stress-free experience so your pet feels safe, loved and excited to visit.",
    },
    reviews: {
      eyebrow: "Real Pet Parents, Real Love",
      title: "Rated 5.0★ by Pet Parents in Rewari",
      subtitle: "Read genuine 5.0-star reviews from Google and Justdial across Radha Swami Colony, Sector 3 Road & Rewari.",
      writeGoogle: "Write a Google Review",
      scanQr: "Scan in store with your phone camera",
      filterAll: "All Stories",
      filterDogs: "Dogs 🐶",
      filterCats: "Cats 🐱",
      filterFullGroom: "Full Grooming",
      filterSpa: "Bath & Spa",
      filterPuppies: "Puppies 🐾",
      filterAnxious: "Anxious / First-timers",
      leaveReviewBtn: "Leave Your Review",
      leaveReviewTitle: "Share Your Fur-baby's Experience",
      leaveReviewDesc: "Tell the community how our team cared for your pet's grooming and healthcare needs!",
      yourName: "Your Name",
      petName: "Pet's Name",
      petBreed: "Breed (e.g. Indie, Shih Tzu)",
      yourRating: "Paw Rating",
      yourFeedback: "Your Story",
      submitReview: "Submit Review",
      thankYou: "Pawsome! Review submitted for verification.",
      pendingApproval: "Review under review & will be displayed shortly",
      petOfMonth: "Pet of the Month 👑",
    },
    groomers: {
      eyebrow: "Meet Our Gentle Handlers",
      title: "The Fur-loving Humans Behind the Scissor Magic",
      subtitle: "Trained in canine body language, gentle cat-handling, and stress-reduction techniques.",
    },
    seasonal: {
      summerTitle: "☀️ Rewari Summer Cooling Splash",
      summerDesc: "Aloe vera hydrating bath, paw-pad balm, and sanitary trim to keep heat rashes away.",
      monsoonTitle: "🌧️ Monsoon Anti-Fungal Shield",
      monsoonDesc: "Neem & tea tree wash, tick and flea prevention, and warm blow dry to protect from damp paws.",
      winterTitle: "❄️ Winter Coat Deep Moisture",
      winterDesc: "Coconut oil massage, de-shedding bath, and conditioning mask to banish dry, itchy skin.",
      diwaliTitle: "🪔 Diwali Noise-Free Calm Spa",
      diwaliDesc: "Aromatherapy lavender bath, calm acoustic room, and festive marigold bandana for your baby.",
      limitedOffer: "Special Festival Package",
      claimOffer: "Book Festival Spa on WhatsApp",
    },
    packages: {
      eyebrow: "Value Bundles",
      title: "Packages & Pet Parent Perks",
      subtitle: "Save more with our monthly spa routines and first-visit welcome offers.",
      membershipTitle: "Monthly Spa Club (Unlimited Baths)",
      firstVisitTitle: "First-Timer Welcome Pack (Flat 15% Off)",
      referTitle: "Refer a Fellow Pet Parent (Free Nail Trim)",
      claimBtn: "Claim on WhatsApp",
    },
    faqs: {
      eyebrow: "Got Questions?",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about preparing your fur-baby for spa day.",
      stillQuestions: "Have a special requirement or anxious pet?",
      chatWithUs: "Chat with Head Groomer on WhatsApp",
    },
    booking: {
      eyebrow: "Hassle-Free Appointments",
      title: "Book Your Pet's Spa Day",
      subtitle: "Fill in your details below to get instant WhatsApp confirmation and priority slot booking.",
      ownerName: "Pet Parent Name *",
      ownerNamePlaceholder: "e.g. Ananya Sharma",
      phone: "Mobile Phone (+91) *",
      phonePlaceholder: "98765 43210",
      petType: "Pet Type *",
      breed: "Pet Breed *",
      breedPlaceholder: "e.g. Indie, Golden Retriever, Persian",
      service: "Desired Service *",
      preferredDate: "Preferred Date *",
      preferredTime: "Preferred Time Slot *",
      notes: "Any pet anxiety, allergies or special requests?",
      notesPlaceholder: "e.g. He is afraid of loud dryers, please use towel wrap",
      submitBtn: "Confirm & Open WhatsApp Booking",
      submitting: "Preparing Booking...",
      successTitle: "Woof-tastic! You're almost set!",
      successMessage: "We've redirected you to WhatsApp to finalize your slot with our Rewari parlour coordinator.",
      chatWhatsappNow: "Open WhatsApp Chat Now",
      bookAnother: "Book Another Session",
    },
    location: {
      eyebrow: "Come Visit Us in Rewari",
      title: "Near Pilot Chowk, Gate No-2, Sector 3 Road",
      subtitle: "Free street & on-site parking, walk-ins welcome, NFC mobile payments, and gender-neutral restroom.",
      openNow: "🟢 Open Now (Closes at 8:30 PM IST)",
      closedNow: "🔴 Closed (Opens tomorrow at 8:00 AM IST)",
      openHours: "Open Monday – Sunday: 8:00 AM to 8:30 PM",
      getDirections: "Get Directions on Google Maps",
      callStore: "Call 098765 43210 / 098765 43211",
      addressTitle: "Salon Address",
    },
    footer: {
      quickLinks: "Quick Links",
      servicesTitle: "Our Services",
      contactTitle: "Visit & Contact",
      hoursTitle: "Working Hours",
      paymentsAccepted: "We Accept NFC Mobile Payments, UPI (GPay, PhonePe, Paytm), Cards & Cash",
      madeWithLove: "Handcrafted with ❤️ for Rewari's sweetest pets & their parents.",
    },
  },
  hi: {
    nav: {
      services: "सेवाएं",
      pricing: "कीमतें",
      reviews: "समीक्षाएं",
      products: "उत्पाद",
      gallery: "तस्वीरें",
      howItWorks: "प्रक्रिया",
      about: "हमारी टीम",
      contact: "पता",
      bookNow: "अभी बुक करें",
      callNow: "कॉल करें",
      whatsapp: "व्हाट्सएप",
      reviewUs: "रिव्यू दें",
    },
    hero: {
      eyebrow: "रेवाड़ी का 5.0★ ऑल-इन-वन पेट केयर, ग्रूमिंग सेंटर व हॉस्पिटल",
      titleMain: "पंजे, बुलबुले और",
      titleHighlight: "बहुत सारा प्यार!",
      subtitle:
        "रेवाड़ी में आपके प्यारे पेट्स का सम्पूर्ण ठिकाना: समर्पित ग्रूमिंग क्लिनिक, मेडिकल क्लिनिक व पशु अस्पताल, और पेट एक्सेसरीज व फूड्स के प्रमुख डीलर।",
      ctaPrimary: "व्हाट्सएप पर बुक करें",
      ctaSecondary: "खुशहाल पालतू देखें",
      trustRating: "5.0★ गूगल व जस्टडायल रेटिंग",
      trustReviews: "40+ खुशहाल पेट पैरेंट्स",
      badgeVetApproved: "मेडिकल क्लिनिक व हॉस्पिटल",
      badgeNoCage: "समर्पित ग्रूमिंग क्लिनिक",
      badgeOpen7Days: "सातों दिन खुला (सुबह 8 से रात 8:30)",
      badgePickupDrop: "वॉक-इन व फ्री पार्किंग",
    },
    trustStrip: {
      hygiene: "मेडिकल क्लिनिक व हॉस्पिटल",
      hygieneDesc: "पशु चिकित्सा, स्वास्थ्य जांच, दवाइयां व सम्पूर्ण इलाज",
      safeProducts: "समर्पित ग्रूमिंग क्लिनिक",
      safeProductsDesc: "पेट्स को साफ, सुंदर और स्वस्थ रखने के लिए पेशेवर ग्रूमिंग",
      groomers: "विश्वसनीय व निरंतर सेवा",
      groomersDesc: "बेसिक ग्रूमिंग से लेकर आवश्यक मेडिकल ट्रीटमेंट तक कुशल टीम",
      cctv: "पेट एक्सेसरीज व सप्लाइज",
      cctvDesc: "पेट फूड्स, एक्सेसरीज और दैनिक उपयोग के सामान के प्रमुख डीलर",
      pickup: "वॉक-इन व मुफ्त पार्किंग",
      pickupDesc: "त्वरित विजिट, ऑन-साइट व स्ट्रीट पार्किंग और एनएफसी पेमेंट्स",
    },
    services: {
      eyebrow: "हमारी विशेष सेवाएं",
      title: "हर प्यारे दोस्त के लिए प्यार भरा स्पा",
      subtitle: "पारदर्शी कीमतें, कोई छुपा हुआ शुल्क नहीं। अपने पेट का आकार चुनकर सही कीमत देखें।",
      sizeSmall: "छोटा (< 10 किग्रा)",
      sizeMedium: "मध्यम (10 - 25 किग्रा)",
      sizeLarge: "बड़ा (25+ किग्रा)",
      startsFrom: "शुरुआती कीमत",
      bookService: "स्लॉट बुक करें",
      viewDetails: "विवरण देखें",
      includedTag: "ब्लो-ड्राई, कान की सफाई और नाखून काटना शामिल है",
    },
    estimator: {
      eyebrow: "आसान मूल्य कैलकुलेटर",
      title: "नस्ल के अनुसार तुरंत मूल्य अनुमान",
      subtitle: "अपने पेट की नस्ल और मनपसंद सेवा चुनें और तुरंत सही कीमत जानें।",
      petTypeLabel: "पालतू जानवर का प्रकार",
      dog: "कुत्ता 🐶",
      cat: "बिल्ली 🐱",
      breedLabel: "नस्ल (Breed)",
      serviceLabel: "ग्रूमिंग पैकेज चुनें",
      estimateLabel: "अनुमानित कीमत:",
      bookOnWhatsapp: "व्हाट्सएप पर यह बुक करें",
      note: "*बालों की स्थिति या ज्यादा उलझे होने पर कीमत में हल्का बदलाव संभव है। नहलाने से पहले अंतिम पुष्टि की जाएगी।",
    },
    gallery: {
      eyebrow: "अनोखा बदलाव",
      title: "उलझे बालों से चमकते रूप तक",
      subtitle: "स्लाइडर को खिसका कर देखें हमारे ग्रूमर्स का जादू! रेवाड़ी के प्यारे पेट्स का असली बदलाव।",
      beforeLabel: "ग्रूमिंग से पहले",
      afterLabel: "स्पा के बाद",
      wowSticker: "✨ कितना प्यारा बदलाव!",
      dragHint: "← स्लाइडर खिसका कर देखें →",
    },
    howItWorks: {
      eyebrow: "स्पा का प्यारा सफर",
      title: "Pawfect Care में ग्रूमिंग व देखभाल कैसे होती है?",
      subtitle: "बिना किसी तनाव के चरण-दर-चरण देखभाल ताकि आपका पेट खुशी-खुशी आए।",
    },
    reviews: {
      eyebrow: "सच्चे पेट पैरेंट्स, सच्चा प्यार",
      title: "रेवाड़ी के 40+ पेट पैरेंट्स का 5.0★ भरोसा",
      subtitle: "गूगल और जस्टडायल पर रेवाड़ी, राधा स्वामी कॉलोनी व भक्ति नगर के ग्राहकों के वास्तविक रिव्यू पढ़ें।",
      writeGoogle: "गूगल पर रिव्यू लिखें",
      scanQr: "स्टोर में फोन से स्कैन करें",
      filterAll: "सभी रिव्यू",
      filterDogs: "कुत्ते 🐶",
      filterCats: "बिल्लियां 🐱",
      filterFullGroom: "फुल ग्रूमिंग",
      filterSpa: "नहलाना व स्पा",
      filterPuppies: "छोटे पपीज 🐾",
      filterAnxious: "शर्मीले या पहली बार आए",
      leaveReviewBtn: "अपनी समीक्षा लिखें",
      leaveReviewTitle: "अपने अनुभव साझा करें",
      leaveReviewDesc: "बताएं कि पॉफ़ेक्ट पेट केयर की ग्रूमिंग और मेडिकल टीम ने आपके पेट का ख्याल कैसे रखा!",
      yourName: "आपका नाम",
      petName: "पेट का नाम",
      petBreed: "नस्ल (जैसे इंडी, शीह त्ज़ू)",
      yourRating: "पंजे रेटिंग",
      yourFeedback: "आपकी राय",
      submitReview: "समीक्षा भेजें",
      thankYou: "बहुत धन्यवाद! आपकी समीक्षा प्राप्त हो गई है।",
      pendingApproval: "जांच के बाद आपकी समीक्षा वेबसाइट पर दिखेगी",
      petOfMonth: "महीने का सबसे प्यारा पेट 👑",
    },
    groomers: {
      eyebrow: "हमारे दयालु ग्रूमर्स",
      title: "कैंची के पीछे वो इंसान जो जानवरों से प्यार करते हैं",
      subtitle: "कैनिन बॉडी लैंग्वेज और तनाव-मुक्त कैट हैंडलिंग में विशेष रूप से प्रशिक्षित।",
    },
    seasonal: {
      summerTitle: "☀️ रेवाड़ी समर कूलिंग स्प्लैश",
      summerDesc: "एलोवेरा हाइड्रेटिंग बाथ, पॉ-पैड बाम और गर्मियों के रैश से सुरक्षा।",
      monsoonTitle: "🌧️ मानसून एंटी-फंगल केयर",
      monsoonDesc: "नीम और टी-ट्री बाथ, किलनी (Tick) व पिस्सू से सुरक्षा और गर्म ब्लो-ड्राई।",
      winterTitle: "❄️ विंटर कोट डीप मॉइस्चराइज",
      winterDesc: "नारियल तेल मालिश और कंडीशनिंग ताकि सर्दियों में त्वचा रूखी न हो।",
      diwaliTitle: "🪔 दिवाली शांत स्पा पैकेज",
      diwaliDesc: "लैवेंडर अरोमाथेरेपी बाथ, शांत कमरा और फेस्टिव गेंदे का बंदना आपके पेट के लिए।",
      limitedOffer: "विशेष त्यौहार ऑफर",
      claimOffer: "व्हाट्सएप पर ऑफर प्राप्त करें",
    },
    packages: {
      eyebrow: "बचत पैकेज",
      title: "मासिक मेंबरशिप और विशेष छूट",
      subtitle: "नियमित ग्रूमिंग पर बड़ी बचत और पहली बार आने पर खास स्वागत छूट।",
      membershipTitle: "मासिक स्पा क्लब (अनलिमिटेड बाथ)",
      firstVisitTitle: "पहली बार आने वालों के लिए 15% छूट",
      referTitle: "दोस्त को रेफर करें और मुफ्त नेल ट्रिम पाएं",
      claimBtn: "व्हाट्सएप पर क्लेम करें",
    },
    faqs: {
      eyebrow: "कोई सवाल है?",
      title: "अक्सर पूछे जाने वाले सवाल",
      subtitle: "स्पा डे की तैयारी से जुड़ी हर ज़रूरी जानकारी।",
      stillQuestions: "क्या आपका पेट डरता है या कोई विशेष ज़रूरत है?",
      chatWithUs: "व्हाट्सएप पर हेड ग्रूमर से बात करें",
    },
    booking: {
      eyebrow: "आसान बुकिंग",
      title: "अपने पेट के लिए स्पा डे बुक करें",
      subtitle: "नीचे अपनी जानकारी भरें और व्हाट्सएप पर तुरंत अपॉइंटमेंट कन्फर्म करें।",
      ownerName: "पेट पैरेंट का नाम *",
      ownerNamePlaceholder: "उदा. अनन्य शर्मा",
      phone: "मोबाइल नंबर (+91) *",
      phonePlaceholder: "98765 43210",
      petType: "जानवर का प्रकार *",
      breed: "नस्ल *",
      breedPlaceholder: "उदा. इंडी, लैब्राडोर, पर्शियन",
      service: "आवश्यक सेवा *",
      preferredDate: "पसंदीदा तारीख *",
      preferredTime: "पसंदीदा समय *",
      notes: "कोई एलर्जी, डर या विशेष बात?",
      notesPlaceholder: "उदा. ड्रायर की आवाज से डरता है, कृपया तौलिये से सुखाएं",
      submitBtn: "पुष्टि करें और व्हाट्सएप पर भेजें",
      submitting: "बुकिंग तैयार हो रही है...",
      successTitle: "वाह! बस एक कदम और!",
      successMessage: "आपको व्हाट्सएप पर रीडायरेक्ट किया गया है ताकि हमारे रेवाड़ी सेंटर से स्लॉट तुरंत फाइनल हो सके।",
      chatWhatsappNow: "व्हाट्सएप चैट खोलें",
      bookAnother: "दूसरा स्लॉट बुक करें",
    },
    location: {
      eyebrow: "पॉफ़ेक्ट पेट केयर, रेवाड़ी पधारें",
      title: "पायलट चौक के पास, गेट नं-2, सेक्टर 3 रोड",
      subtitle: "फ्री स्ट्रीट व ऑन-साइट पार्किंग, त्वरित वॉक-इन और एनएफसी मोबाइल पेमेंट्स।",
      openNow: "🟢 अभी खुला है (रात 8:30 बजे तक)",
      closedNow: "🔴 अभी बंद है (कल सुबह 8:00 बजे खुलेगा)",
      openHours: "सोमवार - रविवार: सुबह 8:00 से रात 8:30 बजे तक",
      getDirections: "गूगल मैप्स पर रास्ता देखें",
      callStore: "098765 43210 / 098765 43211 पर कॉल करें",
      addressTitle: "सैलून का पता",
    },
    footer: {
      quickLinks: "महत्वपूर्ण लिंक",
      servicesTitle: "हमारी सेवाएं",
      contactTitle: "संपर्क और पता",
      hoursTitle: "खुलने का समय",
      paymentsAccepted: "हम एनएफसी मोबाइल पेमेंट, यूपीआई (GPay, PhonePe, Paytm), कार्ड और नकद स्वीकार करते हैं",
      madeWithLove: "रेवाड़ी के सबसे प्यारे पेट्स और उनके पैरेंट्स के लिए प्यार से निर्मित ❤️",
    },
  },
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    try {
      const saved = localStorage.getItem("pawfect_lang") as Language;
      if (saved === "en" || saved === "hi") return saved;
    } catch {
      // Fallback
    }
    return "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("pawfect_lang", newLang);
    document.documentElement.lang = newLang;
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "hi" : "en");
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang], toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (!context) {
    // Fallback to English if used outside provider
    return {
      lang: "en",
      setLang: () => {},
      t: translations.en,
      toggleLang: () => {},
    };
  }
  return context;
}
