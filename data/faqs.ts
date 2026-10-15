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
    id: "faq-vaccines",
    question: "Do you require up-to-date vaccinations before grooming?",
    questionHi: "क्या ग्रूमिंग से पहले टीकाकरण (Vaccination) का रिकॉर्ड जरूरी है?",
    answer: "Yes, for the safety of all pets in our salon, we require dogs to be vaccinated for Rabies and DHPPi (annual 7-in-1/9-in-1). For cats, Rabies and Tricat/FVRCP are required. You can simply share a photo of your vaccination card on WhatsApp before your first appointment.",
    answerHi: "जी हां, सभी पेट्स की सुरक्षा के लिए रेबीज और वार्षिक 7-in-1 या 9-in-1 का टीका लगा होना अनिवार्य है। आप अपने पहले अपॉइंटमेंट से पहले व्हाट्सएप पर वैक्सीनेशन कार्ड की फोटो भेज सकते हैं।",
    category: "safety",
  },
  {
    id: "faq-how-long",
    question: "How long does a grooming session usually take?",
    questionHi: "एक ग्रूमिंग सेशन में आमतौर पर कितना समय लगता है?",
    answer: "A basic Bath & Blow-dry takes approximately 45–60 minutes. A Full Royal Grooming or Breed Scissor Cut takes 75–90 minutes. We never rush our groomers because gentle, stress-free handling takes patience. You are welcome to relax in our parent lounge with complimentary tea/coffee or watch through the glass partition.",
    answerHi: "सामान्य नहलाने और ब्लो-ड्राई में 45 से 60 मिनट लगते हैं। फुल रॉयल ग्रूमिंग में 75 से 90 मिनट लगते हैं। हम कभी भी जल्दबाजी नहीं करते ताकि पेट्स पर कोई मानसिक दबाव न आए।",
    category: "services",
  },
  {
    id: "faq-anxious-pets",
    question: "My pet gets anxious, aggressive, or scared of dryers. Can you handle them?",
    questionHi: "मेरा पेट डरता है या ड्रायर से घबराता है। क्या आप संभाल सकते हैं?",
    answer: "Absolutely! Our groomers are certified in Fear-Free handling and canine/feline calming techniques. We use Happy Hoodies (gentle ear wraps) to dampen dryer noise, warm low-speed airflow, and positive treat reinforcement. We never use sedation or harsh physical restraints. If a pet feels overwhelmed, we pause and allow them to take a sniff break.",
    answerHi: "बिल्कुल! हमारे ग्रूमर्स 'फियर-फ्री' तकनीकों में प्रशिक्षित हैं। हम ड्रायर की आवाज कम करने के लिए कानों पर सौम्य ईयर-रैप (Happy Hoodie) लगाते हैं और कभी भी बेहोशी की दवा या जबरदस्ती का प्रयोग नहीं करते।",
    category: "safety",
  },
  {
    id: "faq-pickup-drop",
    question: "Do you offer home pickup and drop in Bengaluru?",
    questionHi: "क्या आप बेंगलुरु में घर से पिकअप और ड्रॉप की सुविधा देते हैं?",
    answer: "Yes! We operate dedicated air-conditioned pet transit cabs covering Indiranagar, Domlur, HAL, Koramangala, Ulsoor, and CV Raman Nagar. Every cab is equipped with safety seat-belt harnesses, sanitised crates, and an attendant who stays with your pet throughout the journey.",
    answerHi: "जी हां! हमारे पास इंदिरानगर, डोमलूर, कोरमंगला और आसपास के इलाकों के लिए एसी पेट कैब सेवा उपलब्ध है, जिसमें सुरक्षा बेल्ट और पूरी तरह से सैनिटाइज्ड व्यवस्था होती है।",
    category: "logistics",
  },
  {
    id: "faq-cat-grooming",
    question: "Do you groom cats, and is it in a dog-free area?",
    questionHi: "क्या आप बिल्लियों की ग्रूमिंग करते हैं, और क्या वहां कुत्ते नहीं होते?",
    answer: "Yes! Cats have a dedicated, sound-insulated cat suite located away from barking dogs. We use feline-specific calming pheromones (Feliway) and waterless organic foaming mousse baths or gentle warm water washes depending on what your feline friend is comfortable with.",
    answerHi: "जी हां! बिल्लियों के लिए हमारे पास कुत्तों से बिल्कुल अलग और शांत कमरा है जिसमें फेरोमोन डिफ्यूज़र लगे हैं ताकि बिल्ली बिना किसी डर के शांत महसूस करे।",
    category: "services",
  },
  {
    id: "faq-cancellation",
    question: "What is your cancellation and rescheduling policy?",
    questionHi: "अपॉइंटमेंट रद्द या बदलने का क्या नियम है?",
    answer: "Life happens! If you need to reschedule or cancel, just drop us a message on WhatsApp at least 3 hours before your scheduled slot so we can allocate that time to another furry friend. There are zero cancellation fees.",
    answerHi: "हम समझते हैं कि प्लान बदल सकते हैं! बस अपॉइंटमेंट से 3 घंटे पहले हमें व्हाट्सएप पर सूचित कर दें ताकि हम किसी अन्य पेट को वह समय दे सकें। कोई कैंसिलेशन चार्ज नहीं है।",
    category: "logistics",
  },
  {
    id: "faq-products",
    question: "What kind of shampoos and grooming products do you use?",
    questionHi: "आप किस प्रकार के शैम्पू और उत्पादों का उपयोग करते हैं?",
    answer: "We strictly use tearless, sulphate-free, paraben-free herbal formulations infused with aloe vera, neem, virgin coconut oil, and oatmeal. If your vet has prescribed a medicated shampoo for a skin allergy or dermatitis, you are welcome to bring it and our groomers will gladly apply it following the doctor's instructions.",
    answerHi: "हम केवल टियरलेस, सल्फेट-मुक्त और प्राकृतिक हर्बल शैंपू इस्तेमाल करते हैं जिनमें नीम, एलोवेरा और नारियल तेल होता है। यदि आपके डॉक्टर ने कोई औषधीय शैंपू लिखा है, तो आप वह भी ला सकते हैं।",
    category: "safety",
  },
];

