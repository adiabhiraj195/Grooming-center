"use client";

import React, { useState } from "react";
import {
  PRICING_DATA,
  DogWeightCategory,
  CatCoatCategory,
  PricingTierItem,
} from "@/data/pricing";
import { formatINR } from "@/lib/utils";
import { BrunoMascot } from "@/components/illustrations/BrunoMascot";
import { MishtiCat } from "@/components/illustrations/MishtiCat";
import { SparkleBurst } from "@/components/illustrations/Dividers";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { SHOP_DATA } from "@/data/shop";
import {
  Check,
  X,
  Sparkles,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Percent,
  Gift,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const PricingSection: React.FC = () => {
  // Pet species toggle: dog | cat
  const [petType, setPetType] = useState<"dog" | "cat">("dog");
  const [dogSize, setDogSize] = useState<DogWeightCategory>("medium");
  const [catCoat, setCatCoat] = useState<CatCoatCategory>("short");

  // Selected Tier
  const [selectedTierId, setSelectedTierId] = useState<string>("full-groom");

  // Selected Add-ons
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);

  // Membership frequency filter
  const [membershipFreq, setMembershipFreq] = useState<
    "Single visit" | "4-visit pack" | "Quarterly"
  >("4-visit pack");

  // Comparison table expanded state
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  // Toggle add-on selection
  const toggleAddOn = (id: string) => {
    if (selectedAddOnIds.includes(id)) {
      setSelectedAddOnIds(selectedAddOnIds.filter((item) => item !== id));
    } else {
      setSelectedAddOnIds([...selectedAddOnIds, id]);
    }
  };

  // Helper to get price for a tier based on current pet type & size/coat
  const getTierPrice = (tier: PricingTierItem): number => {
    if (petType === "dog") {
      return tier.dogPrices[dogSize];
    }
    return tier.catPrices[catCoat];
  };

  // Currently selected tier object
  const currentTier =
    PRICING_DATA.tiers.find((t) => t.id === selectedTierId) ||
    PRICING_DATA.tiers[1];

  // Calculate live estimate total
  const tierPrice = getTierPrice(currentTier);
  const selectedAddOns = PRICING_DATA.addOns.filter((a) =>
    selectedAddOnIds.includes(a.id)
  );
  const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const grandTotal = tierPrice + addOnsTotal;

  // Build formatted WhatsApp message for booking
  const sizeOrCoatLabel =
    petType === "dog"
      ? dogSize === "small"
        ? "Small (< 10kg)"
        : dogSize === "medium"
        ? "Medium (10–25kg)"
        : dogSize === "large"
        ? "Large (25–40kg)"
        : "Giant (40kg+)"
      : catCoat === "short"
      ? "Short Coat"
      : "Long Coat";

  const addOnListText =
    selectedAddOns.length > 0
      ? selectedAddOns.map((a) => `• ${a.name} (${formatINR(a.price)})`).join("\n")
      : "None selected";

  const prefilledWhatsAppMessage = [
    `🐾 *Grooming Booking Enquiry - ${SHOP_DATA.name}* 🐾`,
    `Hello! I'd like to book a grooming appointment:`,
    ``,
    `🐶 *Pet:* ${petType === "dog" ? "Dog" : "Cat"} (${sizeOrCoatLabel})`,
    `✂️ *Package:* ${currentTier.name} (${formatINR(tierPrice)})`,
    `➕ *Add-ons:*`,
    addOnListText,
    `💰 *Estimated Total:* ${formatINR(grandTotal)} (incl. GST)`,
    ``,
    `Please let me know your earliest available slots at ${SHOP_DATA.area}! Thank you! 🛁`,
  ].join("\n");

  const dogSizesConfig: {
    key: DogWeightCategory;
    label: string;
    weight: string;
    scaleClass: string;
  }[] = [
    { key: "small", label: "Small", weight: "< 10kg", scaleClass: "w-5 h-5" },
    { key: "medium", label: "Medium", weight: "10–25kg", scaleClass: "w-7 h-7" },
    { key: "large", label: "Large", weight: "25–40kg", scaleClass: "w-9 h-9" },
    { key: "giant", label: "Giant", weight: "40kg+", scaleClass: "w-11 h-11" },
  ];

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-peacock-soft/40 relative overflow-hidden"
      aria-label="Pricing & Plans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border-2 border-ink text-peacock font-extrabold text-xs uppercase tracking-wider shadow-sticker-sm mb-3">
            <SparkleBurst size={16} />
            <span>Transparent Spa Rates</span>
          </div>

          <h2 className="type-h2 text-ink mb-3">
            Tail-Wagging Packages & Simple Pricing
          </h2>
          <p className="type-body text-ink-soft">
            Zero hidden charges. Cage-free blow-drying, UV-sterilised shears, and gentle love included in every package.
          </p>

          <p className="text-xs font-bold text-peacock mt-3 bg-white/80 py-1.5 px-4 rounded-full border border-ink/20 inline-block shadow-sticker-sm">
            💡 {PRICING_DATA.disclaimer}
          </p>
        </div>

        {/* TOP SELECTORS: PET TOGGLE & SIZE / COAT SELECTOR */}
        <div className="max-w-3xl mx-auto mb-12 flex flex-col items-center gap-6">
          {/* PET TYPE TOGGLE (DOG / CAT) */}
          <div className="inline-flex p-1.5 bg-white rounded-full border-2 border-ink shadow-sticker">
            <button
              type="button"
              onClick={() => setPetType("dog")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-display font-bold text-sm md:text-base transition-all cursor-pointer ${
                petType === "dog"
                  ? "bg-marigold text-ink shadow-sticker-sm scale-105"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              <span className="text-xl">🐶</span>
              <span>Dog Spa</span>
            </button>

            <button
              type="button"
              onClick={() => setPetType("cat")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-display font-bold text-sm md:text-base transition-all cursor-pointer ${
                petType === "cat"
                  ? "bg-peacock text-white shadow-sticker-sm scale-105"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              <span className="text-xl">🐱</span>
              <span>Cat Spa</span>
            </button>
          </div>

          {/* DOG WEIGHT SELECTOR WITH SCALING MINI BRUNO SILHOUETTE */}
          {petType === "dog" ? (
            <div className="w-full">
              <div className="flex items-center justify-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-ink-soft">
                <span>Select Dog Weight Category</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                {dogSizesConfig.map((item) => {
                  const isSelected = dogSize === item.key;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setDogSize(item.key)}
                      className={`sticker-card p-3 flex flex-col items-center justify-between gap-1 transition-all cursor-pointer ${
                        isSelected
                          ? "bg-marigold border-ink shadow-sticker scale-105"
                          : "bg-white hover:bg-cream"
                      }`}
                    >
                      {/* MINI BRUNO SILHOUETTE THAT CHANGES SIZE */}
                      <div className="h-12 flex items-center justify-center">
                        <BrunoMascot
                          variant="happy"
                          className={`${item.scaleClass} transition-all duration-300 drop-shadow-sm`}
                          wagTail={isSelected}
                        />
                      </div>
                      <div className="text-center">
                        <span className="font-display font-extrabold text-sm text-ink block leading-tight">
                          {item.label}
                        </span>
                        <span className="text-[11px] font-bold text-ink-soft block">
                          {item.weight}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            /* CAT COAT SELECTOR */
            <div className="w-full">
              <div className="flex items-center justify-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-ink-soft">
                <span>Select Feline Coat Type</span>
              </div>
              <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
                {[
                  { key: "short", label: "Short Coat", desc: "Indie, Domestic Shorthair, Bengal" },
                  { key: "long", label: "Long Coat", desc: "Persian, Maine Coon, Ragdoll" },
                ].map((item) => {
                  const isSelected = catCoat === item.key;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setCatCoat(item.key as CatCoatCategory)}
                      className={`flex-1 sticker-card p-4 flex flex-col items-center text-center gap-1 transition-all cursor-pointer ${
                        isSelected
                          ? "bg-peacock text-white shadow-sticker scale-105"
                          : "bg-white text-ink hover:bg-cream"
                      }`}
                    >
                      <MishtiCat className="w-12 h-12 mb-1 drop-shadow-sm" />
                      <span className="font-display font-extrabold text-sm block">
                        {item.label}
                      </span>
                      <span
                        className={`text-[11px] font-bold block ${
                          isSelected ? "text-peacock-soft" : "text-ink-soft"
                        }`}
                      >
                        {item.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* THREE TIER CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-16">
          {PRICING_DATA.tiers.map((tier) => {
            const price = getTierPrice(tier);
            const isSelected = selectedTierId === tier.id;

            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTierId(tier.id)}
                className={`sticker-card p-6 md:p-8 flex flex-col justify-between relative transition-all duration-300 cursor-pointer ${
                  tier.isPopular
                    ? "bg-white border-3 border-ink shadow-sticker-lg lg:-translate-y-2 ring-4 ring-marigold/40"
                    : "bg-white/95 hover:shadow-sticker-lg"
                } ${isSelected ? "border-peacock" : ""}`}
              >
                {/* POPULAR CARD: WIGGLING RIBBON & BRUNO PEEKING */}
                {tier.isPopular && (
                  <>
                    {/* Bruno peeking mascot from behind top rim */}
                    <div className="absolute -top-12 right-6 w-20 h-20 pointer-events-none z-10">
                      <BrunoMascot variant="happy" className="w-full h-full drop-shadow-md" />
                    </div>

                    {/* Wiggling ribbon badge */}
                    <div className="absolute -top-3.5 left-6 bg-chilli text-white text-xs font-extrabold px-3.5 py-1 rounded-full border-2 border-ink shadow-sticker-sm animate-bounce-subtle flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 fill-white" />
                      <span>Most Popular</span>
                    </div>
                  </>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-display font-extrabold text-2xl text-ink">
                      {tier.name}
                    </h3>
                    {isSelected && (
                      <span className="w-6 h-6 rounded-full bg-peacock text-white flex items-center justify-center font-bold text-xs shadow-sticker-sm">
                        ✓
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-ink-soft font-semibold mb-6">
                    {tier.tagline}
                  </p>

                  {/* ROLLING ANIMATED PRICE */}
                  <div className="mb-6 p-4 rounded-2xl bg-cream border-2 border-ink/20 flex items-baseline gap-2">
                    <span className="font-display font-extrabold text-4xl md:text-5xl text-ink">
                      {formatINR(price)}
                    </span>
                    <span className="text-xs font-bold text-ink-soft">
                      / session
                    </span>
                  </div>

                  {/* FEATURE CHECKLIST */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-ink-soft block">
                      Included in this ritual:
                    </span>
                    {tier.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-2.5 text-xs font-bold ${
                          feat.included ? "text-ink" : "text-gray-400 line-through opacity-70"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            feat.included
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {feat.included ? (
                            <Check className="w-3 h-3 stroke-[3]" />
                          ) : (
                            <X className="w-3 h-3" />
                          )}
                        </div>
                        <span>{feat.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SELECT TIER BUTTON */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTierId(tier.id);
                  }}
                  className={`w-full sticker-btn py-3 text-sm font-extrabold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-marigold text-ink shadow-sticker-sm"
                      : "bg-white hover:bg-cream text-ink"
                  }`}
                >
                  {isSelected ? "Selected Package ✓" : `Choose ${tier.name}`}
                </button>
              </div>
            );
          })}
        </div>

        {/* ADD-ONS SECTION & LIVE ESTIMATE SUMMARY */}
        <div className="max-w-6xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ADD-ONS CHIPS (2 COLUMNS) */}
          <div className="lg:col-span-2 sticker-card p-6 md:p-8 bg-white shadow-sticker">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-marigold fill-marigold" />
              <h3 className="font-display font-extrabold text-xl text-ink">
                Customize with Spa Add-Ons
              </h3>
            </div>
            <p className="text-xs text-ink-soft mb-6">
              Select optional enhancements to accompany your pet&apos;s bath or grooming session.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PRICING_DATA.addOns.map((addon) => {
                const isChecked = selectedAddOnIds.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddOn(addon.id)}
                    className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3 select-none ${
                      isChecked
                        ? "bg-marigold/20 border-ink shadow-sticker-sm"
                        : "bg-cream/60 border-ink/20 hover:border-ink hover:bg-white"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md border-2 border-ink flex items-center justify-center shrink-0 mt-0.5 ${
                        isChecked ? "bg-marigold text-ink" : "bg-white"
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-display font-bold text-xs md:text-sm text-ink">
                          {addon.name}
                        </span>
                        <span className="font-bold text-xs text-peacock shrink-0">
                          {formatINR(addon.price)}
                        </span>
                      </div>
                      <p className="text-[11px] text-ink-soft mt-0.5 leading-snug">
                        {addon.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* STICKY "YOUR ESTIMATE" SUMMARY CARD */}
          <div className="sticker-card p-6 md:p-8 bg-cream border-3 border-ink shadow-sticker-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-ink/10 pb-3 mb-4">
                <span className="type-eyebrow text-peacock">Instant Calculator</span>
                <span className="text-xs font-bold text-ink-soft">Live Total</span>
              </div>

              <h4 className="font-display font-extrabold text-xl text-ink mb-1">
                Your Estimate
              </h4>
              <p className="text-xs text-ink-soft mb-4">
                {petType === "dog" ? "Dog" : "Cat"} • {sizeOrCoatLabel}
              </p>

              <div className="space-y-2.5 text-xs font-bold text-ink mb-6">
                <div className="flex justify-between items-center">
                  <span>{currentTier.name}</span>
                  <span>{formatINR(tierPrice)}</span>
                </div>

                {selectedAddOns.map((addon) => (
                  <div
                    key={addon.id}
                    className="flex justify-between items-center text-peacock font-normal"
                  >
                    <span className="line-clamp-1">+ {addon.name}</span>
                    <span className="font-bold">{formatINR(addon.price)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t-2 border-dashed border-ink/20">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-extrabold uppercase text-ink-soft">
                  Estimated Total:
                </span>
                <span className="font-display font-extrabold text-3xl text-ink">
                  {formatINR(grandTotal)}
                </span>
              </div>

              <a
                href={getWhatsAppLink(prefilledWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sticker-btn bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 text-sm md:text-base font-extrabold shadow-sticker flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Book This on WhatsApp</span>
              </a>

              <p className="text-[10px] text-center text-ink-soft mt-2.5">
                GST included • Final coat check at salon • AC transit available
              </p>
            </div>
          </div>
        </div>

        {/* MEMBERSHIP PLANS ROW */}
        <div className="max-w-6xl mx-auto mb-16 pt-8 border-t border-ink/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-marigold border-2 border-ink text-ink font-bold text-xs uppercase shadow-sticker-sm mb-2">
                <Gift className="w-3.5 h-3.5" />
                <span>Club Memberships & Multi-Packs</span>
              </div>
              <h3 className="type-h3 text-ink">Save More with Regular Grooming</h3>
            </div>

            {/* TOGGLE: SINGLE VISIT / 4-PACK / QUARTERLY */}
            <div className="flex p-1 bg-white rounded-full border-2 border-ink shadow-sticker-sm self-start sm:self-auto">
              {(["Single visit", "4-visit pack", "Quarterly"] as const).map((freq) => (
                <button
                  key={freq}
                  type="button"
                  onClick={() => setMembershipFreq(freq)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                    membershipFreq === freq
                      ? "bg-peacock text-white shadow-sticker-sm"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {freq}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_DATA.membershipPacks.map((plan) => {
              const savingsRupees = plan.regularPrice - plan.discountPrice;
              const savingsPercent = Math.round(
                (savingsRupees / plan.regularPrice) * 100
              );
              const isMatched = plan.frequency === membershipFreq;

              return (
                <div
                  key={plan.id}
                  className={`sticker-card p-6 flex flex-col justify-between transition-all duration-300 ${
                    isMatched
                      ? "bg-white border-3 border-ink shadow-sticker-lg ring-2 ring-peacock"
                      : "bg-white/80 opacity-90 hover:opacity-100"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-peacock-soft border border-ink text-[11px] font-extrabold text-peacock">
                        {plan.tag}
                      </span>
                      {plan.badge && (
                        <span className="px-2.5 py-0.5 rounded-full bg-marigold border border-ink text-[11px] font-extrabold text-ink shadow-sticker-sm">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="font-display font-extrabold text-xl text-ink">
                      {plan.name}
                    </h4>
                    <p className="text-xs text-ink-soft font-semibold mb-4">
                      {plan.subtitle}
                    </p>

                    {/* PRICE & SAVINGS */}
                    <div className="p-3.5 rounded-2xl bg-cream border border-ink/20 mb-4 flex items-baseline justify-between">
                      <div>
                        <span className="font-display font-extrabold text-2xl text-ink">
                          {formatINR(plan.discountPrice)}
                        </span>
                        <span className="text-xs text-gray-400 line-through ml-2">
                          {formatINR(plan.regularPrice)}
                        </span>
                      </div>
                      <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Save {savingsPercent}% ({formatINR(savingsRupees)})
                      </span>
                    </div>

                    {/* PERKS LIST */}
                    <ul className="space-y-2 text-xs font-semibold text-ink-soft mb-6">
                      {plan.perks.map((perk, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-peacock stroke-[3] shrink-0" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={getWhatsAppLink(
                      `Hi ${SHOP_DATA.name}, I would like to enquire about the ${plan.name} (${plan.tag}) membership pack!`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sticker-btn bg-white hover:bg-cream text-ink py-2.5 text-xs font-extrabold shadow-sticker-sm flex items-center justify-center gap-1.5"
                  >
                    <span>Enquire on WhatsApp</span>
                    <span>🐾</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* COMPARISON TABLE ACCORDION */}
        <div className="max-w-6xl mx-auto mb-16 sticker-card bg-white p-6 md:p-8 shadow-sticker">
          <button
            type="button"
            onClick={() => setIsComparisonOpen(!isComparisonOpen)}
            className="w-full flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
            aria-expanded={isComparisonOpen}
          >
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-peacock uppercase tracking-wider mb-1">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Feature By Feature Matrix</span>
              </div>
              <h3 className="font-display font-extrabold text-xl md:text-2xl text-ink">
                Compare All Package Features
              </h3>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-ink bg-cream flex items-center justify-center shrink-0 shadow-sticker-sm">
              {isComparisonOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {isComparisonOpen && (
            <div className="mt-8 pt-6 border-t border-ink/10 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th className="py-3 px-4 font-display font-extrabold text-sm text-ink sticky left-0 bg-white z-10 w-2/5">
                      Feature & Ritual Detail
                    </th>
                    <th className="py-3 px-4 font-display font-extrabold text-sm text-center text-ink w-1/5">
                      Fresh Bath
                    </th>
                    <th className="py-3 px-4 font-display font-extrabold text-sm text-center text-peacock bg-peacock-soft/30 rounded-t-xl w-1/5">
                      Full Groom 🌟
                    </th>
                    <th className="py-3 px-4 font-display font-extrabold text-sm text-center text-ink w-1/5">
                      Royal Spa
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10 text-xs">
                  {PRICING_DATA.comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-cream/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-ink sticky left-0 bg-white z-10">
                        {row.name}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {typeof row.freshBath === "boolean" ? (
                          row.freshBath ? (
                            <Check className="w-4 h-4 text-emerald-600 stroke-[3] mx-auto" />
                          ) : (
                            <span className="text-gray-300 font-bold">—</span>
                          )
                        ) : (
                          <span className="font-bold text-ink">{row.freshBath}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center bg-peacock-soft/20">
                        {typeof row.fullGroom === "boolean" ? (
                          row.fullGroom ? (
                            <Check className="w-4 h-4 text-emerald-600 stroke-[3] mx-auto" />
                          ) : (
                            <span className="text-gray-300 font-bold">—</span>
                          )
                        ) : (
                          <span className="font-bold text-peacock">{row.fullGroom}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {typeof row.royalSpa === "boolean" ? (
                          row.royalSpa ? (
                            <Check className="w-4 h-4 text-emerald-600 stroke-[3] mx-auto" />
                          ) : (
                            <span className="text-gray-300 font-bold">—</span>
                          )
                        ) : (
                          <span className="font-bold text-ink">{row.royalSpa}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* OFFER STRIP ("FIRST VISIT 10% OFF" & "REFER A PET PARENT") */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRICING_DATA.offers.map((offer) => (
            <div
              key={offer.id}
              className="sticker-card p-6 bg-white border-2 border-ink shadow-sticker flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blush border border-ink text-xs font-extrabold text-chilli mb-2">
                  <Percent className="w-3 h-3" />
                  <span>{offer.badge}</span>
                </div>
                <h4 className="font-display font-extrabold text-lg text-ink mb-1">
                  {offer.title}
                </h4>
                <p className="text-xs text-ink-soft leading-relaxed mb-3">
                  {offer.description}
                </p>
              </div>

              <div className="pt-3 border-t border-ink/10 flex items-center justify-between text-[11px] font-bold text-ink-soft">
                <span>{offer.terms}</span>
                <ShieldCheck className="w-4 h-4 text-peacock shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
