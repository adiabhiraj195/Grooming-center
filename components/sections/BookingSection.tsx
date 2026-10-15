"use client";

import React, { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { SHOP_DATA } from "@/data/shop";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { BrunoMascot } from "@/components/illustrations/BrunoMascot";
import { MishtiCat } from "@/components/illustrations/MishtiCat";
import { Calendar, MessageCircle, Check, Car } from "lucide-react";

export const BookingSection: React.FC = () => {
  const { lang } = useI18n();

  const [petType, setPetType] = useState<"Dog" | "Cat">("Dog");
  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [service, setService] = useState("Full Royal Grooming");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Morning (10:00 AM – 1:00 PM)");
  const [needPickup, setNeedPickup] = useState(false);
  const [notes, setNotes] = useState("");

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingLines = [
      `🐾 *New Pet Care & Grooming Booking Request* 🐾`,
      `• *Shop*: ${SHOP_DATA.name} (${SHOP_DATA.area}, ${SHOP_DATA.city})`,
      `• *Pet*: ${petName.trim() || "My Pet"} (${petType}${breed ? ` - ${breed.trim()}` : ""})`,
      `• *Service*: ${service}`,
      `• *Preferred Slot*: ${preferredDate || "Earliest available"} • ${preferredTime}`,
      `• *Parking / Visit*: ${needPickup ? "Need on-site parking assistance at Gate No-2" : "Direct walk-in / visit"}`,
      notes.trim() ? `• *Special Notes*: ${notes.trim()}` : "",
      `\nPlease let me know the confirmed slot! Thank you! 🐶✨`,
    ].filter(Boolean);

    const message = bookingLines.join("\n");
    const waUrl = getWhatsAppLink(message);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="book"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      aria-label="Book a Grooming Appointment"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT PROMO CARD */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-peacock-soft border-2 border-ink shadow-sticker-sm text-peacock font-extrabold text-xs uppercase mb-4 w-fit">
              <Calendar className="w-3.5 h-3.5" />
              <span>{lang === "hi" ? "त्वरित अपॉइंटमेंट" : "Book Your Spa Slot"}</span>
            </div>

            <h2 className="type-h2 text-ink mb-4">
              {lang === "hi" ? (
                <>
                  अपने पेट के लिए <span className="text-peacock">प्यार भरा स्पा डे</span> बुक करें!
                </>
              ) : (
                <>
                  Treat Your Furry Bestie to a <span className="text-peacock">Pampering Day</span>
                </>
              )}
            </h2>

            <p className="type-body text-ink-soft mb-6">
              {lang === "hi"
                ? "फॉर्म भरें और एक क्लिक में हमारे स्टाइलिस्ट के साथ व्हाट्सएप पर अपॉइंटमेंट पक्का करें।"
                : "Fill out the quick 30-second form below. It pre-populates your booking details directly into WhatsApp for instant confirmation!"}
            </p>

            {/* MASCOTS DUO */}
            <div className="bg-cream p-6 rounded-3xl border-2 border-ink shadow-sticker flex items-center justify-around gap-4 mb-6">
              <div className="flex flex-col items-center">
                <BrunoMascot variant="happy" className="w-24 h-24" wagTail={false} />
                <span className="text-xs font-extrabold mt-1">Bruno awaits! 🐾</span>
              </div>
              <div className="flex flex-col items-center">
                <MishtiCat className="w-20 h-20" />
                <span className="text-xs font-extrabold mt-1">Mishti approves! 🐱</span>
              </div>
            </div>

            {/* QUICK BENEFITS */}
            <div className="space-y-2 text-xs font-bold text-ink">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-500">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Zero advance deposit required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-500">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Free cancellation anytime up to 3 hours prior</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-500">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Complimentary fresh herbal coat spray & bow-tie</span>
              </div>
            </div>
          </div>

          {/* RIGHT BOOKING FORM CARD */}
          <div className="lg:col-span-7 sticker-card bg-cream p-6 sm:p-8">
            <form onSubmit={handleBookingSubmit} className="space-y-5">
              {/* PET TYPE TOGGLE */}
              <div>
                <label className="block text-xs font-extrabold uppercase text-ink-soft mb-2">
                  Pet Species:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPetType("Dog")}
                    className={`py-2.5 px-4 rounded-xl border-2 border-ink text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      petType === "Dog"
                        ? "bg-marigold text-ink shadow-sticker-sm"
                        : "bg-white text-ink hover:bg-cream"
                    }`}
                  >
                    <span>🐶</span> Dog / Puppy
                  </button>
                  <button
                    type="button"
                    onClick={() => setPetType("Cat")}
                    className={`py-2.5 px-4 rounded-xl border-2 border-ink text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      petType === "Cat"
                        ? "bg-peacock text-white shadow-sticker-sm"
                        : "bg-white text-ink hover:bg-cream"
                    }`}
                  >
                    <span>🐱</span> Cat / Kitten
                  </button>
                </div>
              </div>

              {/* PET NAME & BREED ROW */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-ink mb-1.5">
                    Pet&apos;s Name <span className="text-chilli">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="e.g. Bruno, Simba, Bella"
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-ink bg-white text-sm font-bold focus:outline-none focus:ring-2 focus:ring-peacock"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-ink mb-1.5">
                    Breed / Mix (Optional)
                  </label>
                  <input
                    type="text"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    placeholder="e.g. Shih Tzu, Indie, Persian"
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-ink bg-white text-sm font-bold focus:outline-none focus:ring-2 focus:ring-peacock"
                  />
                </div>
              </div>

              {/* SERVICE SELECTION */}
              <div>
                <label className="block text-xs font-extrabold text-ink mb-1.5">
                  Desired Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border-2 border-ink bg-white text-sm font-bold focus:outline-none focus:ring-2 focus:ring-peacock cursor-pointer"
                >
                  <option value="Bath & Blow-Dry">Bath & Blow-Dry (Squeaky clean wash)</option>
                  <option value="Full Royal Grooming">Full Royal Grooming (Bath + Haircut)</option>
                  <option value="Ayurvedic Luxury Spa">Ayurvedic Luxury Spa (Hot oil massage)</option>
                  <option value="Furminator De-Shedding">Furminator De-Shedding (Undercoat rake)</option>
                  <option value="Feline Whisperer Groom">Feline Whisperer Groom (Quiet cat suite)</option>
                  <option value="Tick & Flea Defense">Tick & Flea Defense (Herbal neem wash)</option>
                  <option value="Pawdi-Cure & Ear Care">Pawdi-Cure & Ear Care (Quick touch-up)</option>
                </select>
              </div>

              {/* PREFERRED DATE & TIME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-ink mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-ink bg-white text-sm font-bold focus:outline-none focus:ring-2 focus:ring-peacock cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-ink mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-ink bg-white text-sm font-bold focus:outline-none focus:ring-2 focus:ring-peacock cursor-pointer"
                  >
                    <option value="Morning (9:30 AM – 12:00 PM)">Morning (9:30 AM – 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                    <option value="Evening (4:00 PM – 8:00 PM)">Evening (4:00 PM – 8:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* ON-SITE PARKING & WALK-IN ASSISTANCE CHECKBOX */}
              <label className="flex items-start gap-3 p-3.5 rounded-xl border-2 border-ink bg-peacock-soft/60 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={needPickup}
                  onChange={(e) => setNeedPickup(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-2 border-ink text-peacock focus:ring-peacock"
                />
                <div className="text-xs">
                  <span className="font-extrabold text-ink flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-peacock" />
                    Request On-Site Parking Assistance at Gate No-2, Sector 3 Road
                  </span>
                  <span className="text-ink-soft text-[11px] block mt-0.5">
                    Free street & on-site parking available. Accommodating for quick visits.
                  </span>
                </div>
              </label>

              {/* SPECIAL NOTES */}
              <div>
                <label className="block text-xs font-extrabold text-ink mb-1.5">
                  Special Notes or Sensitivities (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Scared of dryers, sensitive paws, needs hypoallergenic wash"
                  className="w-full px-3.5 py-2.5 rounded-xl border-2 border-ink bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-peacock"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full sticker-btn bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 text-base font-extrabold shadow-sticker flex items-center justify-center gap-2 cursor-pointer transition-transform"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Confirm on WhatsApp • Instant Reply</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
