"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { BrunoPawStar } from "@/components/illustrations/BrunoPawStar";
import { QrCodeSvg } from "@/components/ui/QrCodeSvg";
import {
  generateReviewSuggestions,
  ReviewLanguage,
  ReviewLength,
} from "@/data/reviewTemplates";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { SHOP_DATA } from "@/data/shop";
import {
  Star,
  Copy,
  ExternalLink,
  RotateCw,
  Check,
  Sparkles,
  MessageCircle,
  QrCode,
} from "lucide-react";

export const WriteReviewStepper: React.FC = () => {
  // Stepper active step: 1 (PICK), 2 (CHOOSE), 3 (POST)
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [rating, setRating] = useState<number>(5);
  const [petType, setPetType] = useState<"dog" | "cat">("dog");
  const [service, setService] = useState<string>("Full Groom");
  const [selectedLiked, setSelectedLiked] = useState<string[]>([
    "Gentle groomers",
    "Super clean shop",
  ]);
  const [petName, setPetName] = useState<string>("");
  const [groomer, setGroomer] = useState<string>("");
  const [language, setLanguage] = useState<ReviewLanguage>("en");
  const [lengthPref, setLengthPref] = useState<ReviewLength>("detailed");
  const [seedOffset, setSeedOffset] = useState<number>(0);
  const [isFlipping, setIsFlipping] = useState(false);

  // Editable Textarea content & custom edits
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState<number>(0);
  const [customReviewText, setCustomReviewText] = useState<string | null>(null);

  // Toast & Confetti
  const [showToast, setShowToast] = useState(false);
  const [celebratingReturn, setCelebratingReturn] = useState(false);
  const hasClickedPostRef = useRef(false);

  const placeId =
    process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "ChIJAnimaliaPetCareRewari";
  const googleWriteReviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

  // Chip options
  const serviceOptions = [
    "Bath",
    "Full Groom",
    "Spa",
    "De-shedding",
    "Tick treatment",
    "Nail & Ear",
  ];

  const likedOptions = [
    "Gentle groomers",
    "Super clean shop",
    "On time",
    "Fair price",
    "Pick-up & drop",
    "Calm for my anxious pet",
    "Smells amazing",
    "Loved the photos",
  ];

  // Suggestions generation
  const suggestions = generateReviewSuggestions({
    rating,
    petName,
    groomer,
    petType,
    service,
    likedChips: selectedLiked,
    language,
    length: lengthPref,
    seedOffset,
  });

  const activeReviewText =
    customReviewText !== null
      ? customReviewText
      : suggestions[selectedSuggestionIndex] || suggestions[0] || "";

  // Handle Tab Return listener for Paw-Print Confetti and Thank You celebration!
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (
        document.visibilityState === "visible" &&
        hasClickedPostRef.current &&
        !celebratingReturn
      ) {
        setCelebratingReturn(true);
        // Automatically hide celebration confetti after 10 seconds
        const timer = setTimeout(() => {
          setCelebratingReturn(false);
          hasClickedPostRef.current = false;
        }, 10000);
        return () => clearTimeout(timer);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [celebratingReturn]);

  // Toggle multi-select liked chips
  const toggleLiked = (chip: string) => {
    if (selectedLiked.includes(chip)) {
      setSelectedLiked(selectedLiked.filter((c) => c !== chip));
    } else {
      setSelectedLiked([...selectedLiked, chip]);
    }
  };

  // Shuffle suggestions with flip animation
  const handleShuffle = () => {
    setIsFlipping(true);
    setSeedOffset((prev) => prev + 1);
    setCustomReviewText(null);
    setTimeout(() => setIsFlipping(false), 300);
  };

  // Copy text to clipboard with textarea fallback
  const copyToClipboard = async (textToCopy: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
        return true;
      }
    } catch {
      // Fallback
    }

    try {
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const success = document.execCommand("copy");
      textArea.remove();
      return success;
    } catch {
      return false;
    }
  };

  // Step 3 Main Action: "Copy & open Google"
  const handleCopyAndOpenGoogle = async () => {
    const textToSubmit = activeReviewText.trim() || (suggestions[0] ?? "");
    await copyToClipboard(textToSubmit);
    setShowToast(true);
    hasClickedPostRef.current = true;

    // Hide toast after 6 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 6000);

    // Open Google write-review in a new tab
    window.open(googleWriteReviewUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="write-review"
      className="py-12 md:py-20 bg-cream relative"
      aria-label="Write a Google Review"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOAST NOTIFICATION (ACCESSIBLE ARIA-LIVE) */}
        {showToast && (
          <div
            role="status"
            aria-live="polite"
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-ink text-white px-6 py-3.5 rounded-full border-2 border-white shadow-sticker flex items-center gap-3 animate-in fade-in slide-in-from-top duration-300 max-w-md text-center"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500 text-ink flex items-center justify-center shrink-0 font-extrabold text-xs">
              ✓
            </div>
            <span className="text-sm font-bold">
              Copied! Paste it into the Google box and tap Post 🚀
            </span>
          </div>
        )}

        {/* CELEBRATION CONFETTI BANNER ON RETURN TO TAB */}
        {celebratingReturn && (
          <div
            className="mb-8 p-6 bg-peacock-soft border-3 border-ink rounded-3xl shadow-sticker text-center animate-in zoom-in duration-300 relative overflow-hidden"
            role="alert"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl animate-bounce">🎉 🐾 🌟</span>
              <h3 className="font-display font-extrabold text-2xl text-ink">
                Thank You for Supporting Local Pet Care!
              </h3>
              <p className="text-sm text-ink-soft max-w-md">
                Our team at Animalia Pet Care in Rewari is doing joyful zoomies right now! Your review helps other pet parents find dependable, loving care for their babies.
              </p>
              <button
                onClick={() => setCelebratingReturn(false)}
                className="mt-2 text-xs font-bold text-peacock underline cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}

        {/* SECTION HEADER CARD WITH BRUNO HOLDING PAW-STAR */}
        <div className="sticker-card bg-white p-6 md:p-8 mb-8 shadow-sticker-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-marigold border-2 border-ink text-ink font-extrabold text-xs uppercase tracking-wide mb-3 shadow-sticker-sm">
              <Sparkles className="w-3.5 h-3.5 fill-ink" />
              <span>30-Second Google Review Helper</span>
            </div>
            <h2 className="type-h2 text-ink mb-2">
              Loved your visit? Tell Google in 30 seconds!
            </h2>
            <p className="type-body text-ink-soft max-w-lg">
              Pick your stars, customize a quick honest draft, and copy it straight into Google Maps. Honest reviews help our cage-free salon grow!
            </p>

            {/* POLICY BADGE NOTICE */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-bold text-peacock">
              <span className="inline-flex items-center gap-1 bg-peacock-soft px-2.5 py-1 rounded-full border border-ink/20">
                <span>🛡️</span> 100% Unbiased & Policy Compliant
              </span>
              <span className="inline-flex items-center gap-1 bg-cream px-2.5 py-1 rounded-full border border-ink/20 text-ink-soft">
                <span>✍️</span> You always edit before posting
              </span>
            </div>
          </div>

          <div className="shrink-0 flex justify-center">
            <BrunoPawStar className="w-40 h-40 md:w-48 md:h-48" celebrating={celebratingReturn} />
          </div>
        </div>

        {/* 3-STEPPER CONTAINER CARD */}
        <div className="sticker-card bg-white p-6 md:p-10 shadow-sticker-lg">
          {/* STEPPER HEADER TABS */}
          <div className="flex items-center justify-between gap-2 border-b-2 border-ink/10 pb-6 mb-8 max-w-xl mx-auto">
            {[
              { num: 1, label: "1. Pick Details" },
              { num: 2, label: "2. Choose Draft" },
              { num: 3, label: "3. Copy & Post" },
            ].map((step) => (
              <button
                key={step.num}
                onClick={() => setCurrentStep(step.num as 1 | 2 | 3)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border-2 border-ink text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  currentStep === step.num
                    ? "bg-marigold text-ink shadow-sticker-sm scale-105"
                    : currentStep > step.num
                    ? "bg-peacock-soft text-peacock"
                    : "bg-cream text-ink-soft opacity-70"
                }`}
              >
                <span>{step.label}</span>
              </button>
            ))}
          </div>

          {/* ========================================================= */}
          {/* STEP 1: PICK DETAILS */}
          {/* ========================================================= */}
          {currentStep === 1 && (
            <div className="space-y-8 animate-in fade-in duration-200">
              {/* STAR RATING PICKER (1 TO 5 PAW ICONS) */}
              <div className="text-center">
                <label className="block font-display font-bold text-lg md:text-xl text-ink mb-3">
                  How was your pet&apos;s experience today? 🐾
                </label>
                <div
                  className="inline-flex items-center justify-center gap-2 p-2 bg-cream rounded-full border-2 border-ink shadow-sticker-sm"
                  role="radiogroup"
                  aria-label="Star rating selection"
                >
                  {[1, 2, 3, 4, 5].map((starVal) => {
                    const isSelected = starVal <= rating;
                    return (
                      <button
                        key={starVal}
                        type="button"
                        onClick={() => {
                          setRating(starVal);
                          setCustomReviewText(null);
                        }}
                        className={`w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 focus:outline-none cursor-pointer ${
                          isSelected
                            ? "bg-marigold text-ink shadow-sticker-sm"
                            : "bg-white text-ink-soft hover:bg-blush"
                        }`}
                        aria-label={`${starVal} star rating`}
                        aria-checked={rating === starVal}
                        role="radio"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            isSelected
                              ? "fill-ink stroke-ink"
                              : "stroke-ink/40 fill-none"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
                <div className="mt-2 text-xs font-bold text-ink-soft">
                  {rating === 5
                    ? "🌟 Pawsome! 5-star visit!"
                    : rating === 4
                    ? "⭐ Very good experience"
                    : "💬 Honest constructive feedback"}
                </div>
              </div>

              {/* PET TYPE & LANGUAGE TOGGLES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Pet Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-2">
                    Who visited us?
                  </label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setPetType("dog");
                        setCustomReviewText(null);
                      }}
                      className={`flex-1 py-2.5 px-4 rounded-2xl border-2 border-ink font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        petType === "dog"
                          ? "bg-marigold text-ink shadow-sticker-sm"
                          : "bg-cream text-ink hover:bg-white"
                      }`}
                    >
                      <span>🐶</span>
                      <span>Dog</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPetType("cat");
                        setCustomReviewText(null);
                      }}
                      className={`flex-1 py-2.5 px-4 rounded-2xl border-2 border-ink font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        petType === "cat"
                          ? "bg-peacock text-white shadow-sticker-sm"
                          : "bg-cream text-ink hover:bg-white"
                      }`}
                    >
                      <span>🐱</span>
                      <span>Cat</span>
                    </button>
                  </div>
                </div>

                {/* Language Toggle */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-2">
                    Draft Language
                  </label>
                  <div className="flex gap-2">
                    {[
                      { key: "en", label: "English" },
                      { key: "hinglish", label: "Hinglish" },
                      { key: "hi", label: "हिन्दी" },
                    ].map((langItem) => (
                      <button
                        key={langItem.key}
                        type="button"
                        onClick={() => {
                          setLanguage(langItem.key as ReviewLanguage);
                          setCustomReviewText(null);
                        }}
                        className={`flex-1 py-2.5 px-2 rounded-2xl border-2 border-ink text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                          language === langItem.key
                            ? "bg-ink text-white shadow-sticker-sm"
                            : "bg-cream text-ink hover:bg-white"
                        }`}
                      >
                        {langItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* SERVICE RECEIVED CHIPS */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-2">
                  Service Received
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((serv) => (
                    <button
                      key={serv}
                      type="button"
                      onClick={() => {
                        setService(serv);
                        setCustomReviewText(null);
                      }}
                      className={`px-3.5 py-1.5 rounded-full border-2 border-ink text-xs font-bold transition-all cursor-pointer ${
                        service === serv
                          ? "bg-peacock text-white shadow-sticker-sm"
                          : "bg-cream text-ink hover:bg-white"
                      }`}
                    >
                      {serv}
                    </button>
                  ))}
                </div>
              </div>

              {/* WHAT YOU LIKED (MULTI-SELECT CHIPS) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-2">
                  What did you like most? (Select multiple)
                </label>
                <div className="flex flex-wrap gap-2">
                  {likedOptions.map((item) => {
                    const isSelected = selectedLiked.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          toggleLiked(item);
                          setCustomReviewText(null);
                        }}
                        className={`px-3 py-1.5 rounded-full border-2 border-ink text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                          isSelected
                            ? "bg-marigold text-ink shadow-sticker-sm"
                            : "bg-white text-ink-soft hover:bg-cream"
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        <span>{item}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* OPTIONAL INPUTS: PET NAME & GROOMER NAME */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-ink mb-1.5">
                    Pet&apos;s Name <span className="text-ink-soft font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={petName}
                    onChange={(e) => {
                      setPetName(e.target.value);
                      setCustomReviewText(null);
                    }}
                    placeholder="e.g. Simba, Bruno, Mimi"
                    className="w-full px-4 py-2.5 rounded-2xl border-2 border-ink bg-cream text-sm font-bold focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink mb-1.5">
                    Groomer&apos;s Name <span className="text-ink-soft font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={groomer}
                    onChange={(e) => {
                      setGroomer(e.target.value);
                      setCustomReviewText(null);
                    }}
                    placeholder="e.g. Sreekumar, Priyanka, Rohit"
                    className="w-full px-4 py-2.5 rounded-2xl border-2 border-ink bg-cream text-sm font-bold focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* NEXT BUTTON */}
              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="sticker-btn bg-marigold hover:bg-marigold-deep text-ink px-8 py-3.5 text-base font-extrabold shadow-sticker flex items-center gap-2 cursor-pointer"
                >
                  <span>Generate Suggestions</span>
                  <span>✨</span>
                </button>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* STEP 2: CHOOSE & EDIT SUGGESTION */}
          {/* ========================================================= */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-ink/10">
                <div>
                  <h3 className="font-display font-bold text-lg text-ink">
                    Pick a Draft or Customize
                  </h3>
                  <p className="text-xs text-ink-soft">
                    Tap any card to load it into the editor. You can freely edit every word.
                  </p>
                </div>

                {/* CONTROLS: SHORT / DETAILED & SHUFFLE */}
                <div className="flex items-center gap-2">
                  <div className="flex rounded-full border-2 border-ink p-0.5 bg-cream">
                    <button
                      type="button"
                      onClick={() => {
                        setLengthPref("short");
                        setCustomReviewText(null);
                      }}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                        lengthPref === "short" ? "bg-peacock text-white" : "text-ink-soft"
                      }`}
                    >
                      Short
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLengthPref("detailed");
                        setCustomReviewText(null);
                      }}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                        lengthPref === "detailed" ? "bg-peacock text-white" : "text-ink-soft"
                      }`}
                    >
                      Detailed
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleShuffle}
                    className="sticker-btn bg-white hover:bg-cream text-ink px-3 py-1.5 text-xs font-extrabold flex items-center gap-1.5 cursor-pointer shadow-sticker-sm"
                    title="Generate new suggestions"
                  >
                    <RotateCw className={`w-3.5 h-3.5 ${isFlipping ? "animate-spin" : ""}`} />
                    <span>Shuffle</span>
                  </button>
                </div>
              </div>

              {/* 3 SUGGESTION CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {suggestions.map((sug, idx) => {
                  const isSelected = selectedSuggestionIndex === idx && customReviewText === null;
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedSuggestionIndex(idx);
                        setCustomReviewText(null);
                      }}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "border-peacock bg-peacock-soft/60 shadow-sticker scale-[1.01]"
                          : "border-ink/20 bg-cream hover:border-ink hover:bg-white"
                      }`}
                    >
                      <p className="text-xs text-ink leading-relaxed italic mb-3">
                        &ldquo;{sug}&rdquo;
                      </p>
                      <div className="flex items-center justify-between text-[11px] font-bold">
                        <span className="text-peacock">Draft #{idx + 1}</span>
                        {isSelected ? (
                          <span className="text-peacock flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> Selected
                          </span>
                        ) : (
                          <span className="text-ink-soft opacity-60">Tap to load</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* EDITABLE TEXTAREA */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-extrabold text-ink uppercase tracking-wide">
                    Your Review Draft
                  </label>
                  <span className="text-xs text-ink-soft font-bold">
                    {activeReviewText.length} characters
                  </span>
                </div>
                <textarea
                  rows={4}
                  value={activeReviewText}
                  onChange={(e) => {
                    setCustomReviewText(e.target.value);
                  }}
                  className="w-full p-4 rounded-2xl border-2 border-ink bg-white text-sm text-ink leading-relaxed focus:outline-none focus:ring-2 focus:ring-peacock"
                  placeholder="Feel free to adjust or add specific details about your pet..."
                />
                <p className="text-[11px] text-ink-soft mt-1.5 italic">
                  💡 Note: Edit it so it matches your real visit. Honest reviews help other pet parents the most.
                </p>
              </div>

              {/* STEP 2 BUTTONS */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="sticker-btn bg-white hover:bg-cream text-ink px-5 py-2.5 text-sm font-bold cursor-pointer"
                >
                  ← Back to Options
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="sticker-btn bg-marigold hover:bg-marigold-deep text-ink px-8 py-3 text-sm md:text-base font-extrabold shadow-sticker flex items-center gap-2 cursor-pointer"
                >
                  <span>Ready to Post</span>
                  <span>🚀</span>
                </button>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* STEP 3: POST TO GOOGLE */}
          {/* ========================================================= */}
          {currentStep === 3 && (
            <div className="space-y-8 text-center max-w-xl mx-auto animate-in fade-in duration-200">
              <div>
                <h3 className="font-display font-extrabold text-2xl text-ink mb-1">
                  Ready to Share on Google! 🐾
                </h3>
                <p className="text-xs md:text-sm text-ink-soft">
                  Click the button below to copy your text and instantly jump to Google Reviews.
                </p>
              </div>

              {/* REVIEW PREVIEW BUBBLE */}
              <div className="p-5 bg-cream rounded-3xl border-2 border-ink shadow-sticker-sm text-left relative speech-bubble">
                <div className="flex items-center gap-1 text-marigold mb-2">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-marigold stroke-ink stroke-[1.2]" />
                  ))}
                  <span className="text-xs font-bold text-ink-soft ml-1.5">
                    ({rating} Stars)
                  </span>
                </div>
                <p className="text-sm text-ink leading-relaxed font-medium">
                  &ldquo;{activeReviewText}&rdquo;
                </p>
              </div>

              {/* 3-ICON HELPER: COPY -> PASTE -> POST */}
              <div className="grid grid-cols-3 gap-3 py-2 text-center border-y border-ink/10">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-marigold border-2 border-ink flex items-center justify-center mb-1 text-ink shadow-sticker-sm">
                    <Copy className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-extrabold text-ink">1. We Copy</span>
                  <span className="text-[10px] text-ink-soft">Text saved</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-peacock-soft border-2 border-ink flex items-center justify-center mb-1 text-peacock shadow-sticker-sm">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-extrabold text-ink">2. Tab Opens</span>
                  <span className="text-[10px] text-ink-soft">Google popup</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blush border-2 border-ink flex items-center justify-center mb-1 text-chilli shadow-sticker-sm">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-extrabold text-ink">3. Paste & Post</span>
                  <span className="text-[10px] text-ink-soft">Takes 5 seconds</span>
                </div>
              </div>

              {/* PRIMARY ACTION BUTTON */}
              <div className="flex flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyAndOpenGoogle}
                  className="sticker-btn bg-marigold hover:bg-marigold-deep text-ink text-base md:text-lg px-8 py-4 font-extrabold shadow-sticker-lg flex items-center gap-3 w-full sm:w-auto cursor-pointer"
                >
                  <Copy className="w-5 h-5 fill-ink" />
                  <span>Copy & Open Google</span>
                  <ExternalLink className="w-5 h-5" />
                </button>

                {/* SECONDARY LINK */}
                <a
                  href={googleWriteReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    hasClickedPostRef.current = true;
                  }}
                  className="text-xs font-bold text-peacock hover:text-marigold-deep transition-colors underline underline-offset-4"
                >
                  Open Google without copied text →
                </a>
              </div>

              {/* PRIVATE FEEDBACK OPTION (POLICY COMPLIANT: NEVER REPLACES GOOGLE) */}
              <div className="pt-4 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-soft">
                <span>Want to share private feedback directly with our owner?</span>
                <a
                  href={getWhatsAppLink(`Hi ${SHOP_DATA.name}, I want to share private feedback about my recent visit.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat privately on WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* QR CODE CARD: "SCAN TO REVIEW US" */}
        <div className="mt-8 sticker-card bg-peacock-soft p-6 md:p-8 shadow-sticker flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border-2 border-ink text-peacock font-bold text-xs uppercase tracking-wide mb-2 shadow-sticker-sm">
              <QrCode className="w-3.5 h-3.5" />
              <span>In-Salon Quick Review</span>
            </div>
            <h3 className="font-display font-bold text-xl text-ink mb-1">
              Visiting our Rewari parlour right now?
            </h3>
            <p className="text-xs md:text-sm text-ink-soft max-w-md">
              Point your phone camera at the QR code to review us directly on Google Maps in seconds.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 justify-center md:justify-start">
              <Link
                href="/review-qr"
                target="_blank"
                className="sticker-btn bg-white hover:bg-cream text-ink text-xs px-4 py-2 font-bold shadow-sticker-sm flex items-center gap-1.5"
              >
                <span>🖨️</span>
                <span>Print Counter Display Page</span>
              </Link>
            </div>
          </div>

          <div className="shrink-0 p-3 bg-white rounded-2xl border-2 border-ink shadow-sticker-sm">
            <QrCodeSvg value={googleWriteReviewUrl} size={130} showCenterPaw={true} />
          </div>
        </div>
      </div>
    </section>
  );
};
