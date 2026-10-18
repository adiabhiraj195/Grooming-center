export interface FAQItem {
  id: string;
  question: string;
  questionHi: string;
  answer: string;
  answerHi: string;
  category: "safety" | "services" | "pricing" | "logistics";
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-services-offered",
    question: "What services are offered at Pawfect Care?",
    questionHi: "Pawfect Care में कौन-कौन सी सेवाएं उपलब्ध हैं?",
    answer: "Pawfect Care acts as an all-in-one pet destination in Rewari. We feature a dedicated grooming clinic to keep pets clean, styled, and well-maintained; a fully functioning medical clinic and animal hospital to handle various pet treatments and healthcare needs; and a prominent local pet supply dealership offering pet foods, accessories, and daily essentials.",
    answerHi: "Pawfect Care रेवाड़ी में ऑल-इन-वन पेट सेंटर है। यहां साफ-सफाई व स्टाइलिंग के लिए समर्पित ग्रूमिंग क्लिनिक, विभिन्न बीमारियों व स्वास्थ्य जरूरतों के लिए मेडिकल क्लिनिक व पशु चिकित्सालय, और पेट फूड्स व एक्सेसरीज की पूरी दुकान उपलब्ध है।",
    category: "services",
  },
  {
    id: "faq-walkins-parking",
    question: "Do you accept walk-ins and is parking available?",
    questionHi: "क्या बिना अपॉइंटमेंट (Walk-in) आ सकते हैं और क्या पार्किंग की सुविधा है?",
    answer: "Yes! Our facility is accommodating for quick visits and warmly welcomes walk-ins. We offer both free street parking and on-site parking right outside Gate No-2 on Sector 3 Road. You can also contact us in advance at 098765 43210 or 098765 43211.",
    answerHi: "जी हां! हमारे यहां त्वरित विजिट के लिए वॉक-इन की पूरी सुविधा है। गेट नं-2, सेक्टर 3 रोड पर ऑन-साइट पार्किंग और मुफ्त स्ट्रीट पार्किंग दोनों उपलब्ध हैं। आप हमें 098765 43210 या 098765 43211 पर कॉल भी कर सकते हैं।",
    category: "logistics",
  },
  {
    id: "faq-hours-days",
    question: "What are your operating hours and open days?",
    questionHi: "सेंटर खुलने का समय और दिन क्या हैं?",
    answer: "We are open seven days a week (Monday through Sunday) from 8:00 AM to 8:30 PM, making it convenient for both early morning and evening visits.",
    answerHi: "हम सातों दिन (सोमवार से रविवार) सुबह 8:00 बजे से रात 8:30 बजे तक खुले रहते हैं ताकि आप अपनी सुविधानुसार सुबह या शाम कभी भी आ सकें।",
    category: "logistics",
  },
  {
    id: "faq-payment-modes",
    question: "What payment methods do you accept?",
    questionHi: "भुगतान (Payment) के कौन-कौन से तरीके स्वीकार किए जाते हैं?",
    answer: "We accept NFC mobile contactless payments (Google Pay, Apple Pay, PhonePe, Paytm), UPI, all major debit/credit cards, and cash.",
    answerHi: "हम एनएफसी कॉन्टैक्टलेस मोबाइल पेमेंट (Google Pay, PhonePe, Paytm), यूपीआई, डेबिट/क्रेडिट कार्ड और नकद सभी स्वीकार करते हैं।",
    category: "pricing",
  },
  {
    id: "faq-accessibility-amenities",
    question: "What amenities and accessibility features does the facility have?",
    questionHi: "सेंटर में क्या सुविधाएं और एक्सेसिबिलिटी व्यवस्था है?",
    answer: "We offer free on-site and street parking, quick walk-in service, and provide a clean gender-neutral restroom for pet parents. Please note that the facility currently lacks wheelchair-accessible entrances, parking, or seating, but our friendly team is always ready to assist you at your vehicle if needed.",
    answerHi: "हमारे यहां मुफ्त ऑन-साइट व स्ट्रीट पार्किंग, वॉक-इन सेवा और साफ जेंडर-न्यूट्रल वॉशरूम उपलब्ध है। कृपया ध्यान दें कि वर्तमान में व्हीलचेयर-सुलभ प्रवेश द्वार या सीटिंग उपलब्ध नहीं है, लेकिन जरूरत पड़ने पर हमारा स्टाफ आपकी गाड़ी तक आकर सहयोग करने के लिए सदैव तत्पर रहता है।",
    category: "logistics",
  },
  {
    id: "faq-medical-treatments",
    question: "Can your team manage both grooming and medical treatments?",
    questionHi: "क्या आपकी टीम ग्रूमिंग और मेडिकल इलाज दोनों संभाल सकती है?",
    answer: "Yes, customers consistently commend our team's ability to efficiently manage everything from basic grooming (baths, haircuts, nail trimming) to necessary medical treatments, skin allergy therapies, wound dressings, and vet health consultations under one roof.",
    answerHi: "जी हां, हमारे ग्राहक हमारी इस खूबी की विशेष सराहना करते हैं कि हमारी अनुभवी टीम बेसिक ग्रूमिंग (नहलाना, हेयरकट, नाखून काटना) से लेकर जरूरी मेडिकल ट्रीटमेंट, त्वचा एलर्जी इलाज और स्वास्थ्य जांच सब कुछ कुशलतापूर्वक संभालती है।",
    category: "services",
  },
  {
    id: "faq-vaccines",
    question: "Do you require up-to-date vaccinations before grooming?",
    questionHi: "क्या ग्रूमिंग से पहले टीकाकरण (Vaccination) का रिकॉर्ड जरूरी है?",
    answer: "Yes, for the safety and hygiene of all pets, we recommend dogs have their annual Rabies and 7-in-1/9-in-1 vaccinations. If your pet is due for a booster, our on-site medical clinic can administer it during your visit!",
    answerHi: "जी हां, सभी पेट्स की सुरक्षा के लिए रेबीज और वार्षिक 7-in-1 या 9-in-1 का टीका लगा होना बेहतर है। यदि टीकाकरण बाकी है, तो हमारी मेडिकल क्लिनिक में विजिट के दौरान ही टीका लगाया जा सकता है!",
    category: "safety",
  },
  {
    id: "faq-products",
    question: "What pet supplies and accessories do you distribute?",
    questionHi: "आप कौन-कौन से पेट प्रोडक्ट्स और एक्सेसरीज उपलब्ध कराते हैं?",
    answer: "Beyond healthcare and grooming, Pawfect Care is a prominent local dealer for pet accessories in Rewari. We distribute top-tier dog and cat foods, treats, leashes, harnesses, gentle tearless shampoos, grooming brushes, toys, and daily essentials at very affordable prices.",
    answerHi: "हेल्थकेयर और ग्रूमिंग के अलावा, हम रेवाड़ी में पेट एक्सेसरीज के प्रमुख स्थानीय डीलर हैं। हम प्रीमियम डॉग व कैट फूड, ट्रीट्स, लीश, हार्नेस, हर्बल शैंपू, ग्रूमिंग टूल्स और दैनिक जरूरत की सभी चीजें बहुत किफायती दरों पर उपलब्ध कराते हैं।",
    category: "services",
  },
];
