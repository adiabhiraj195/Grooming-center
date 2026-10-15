# Pawfect Tails Pet Spa — Bengaluru

Luxury, fear-free pet grooming & wellness centre website for dogs and cats in Indiranagar, Bengaluru. Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🌟 Key Features

1. **Google Reviews Integration (Places API New)**:
   - Server-side caching with 6-hour Next.js revalidation (`revalidate: 21600`).
   - Complies 100% with Google review guidelines: unmodified text, clear Google branding, no filtering of negative reviews, zero review gating, and no review incentive offers.
   - Dual-direction marquee with curated pet parent testimonials.
   - 3-step interactive review generator ("Loved your visit? Tell Google in 30 seconds") with copy-to-clipboard, toast notification, and celebration confetti.
   - In-salon counter QR stand printable at `/review-qr`.

2. **Prices & Plans Section (`#pricing`)**:
   - Interactive dog size weight selector (< 10kg, 10–25kg, 25–40kg, 40kg+) with dynamic scaling Bruno mascot silhouette.
   - Cat coat selector (Short Coat, Long/Double Coat).
   - Rolling prices across 3 primary packages (Fresh Bath, Full Groom, Royal Ayurvedic Spa).
   - Multi-select add-ons with sticky live estimate card and one-tap WhatsApp booking pre-fill.
   - Membership plans (Pawfect Pass, Glow Club, Family Pack) showing exact ₹ and % savings.
   - Expandable feature comparison matrix.

3. **The Groomer's Shelf — Products Section (`#products`)**:
   - 12 curated products across 7 categories (Shampoo, Food, Toys, Walk Gear, Health, Cat Corner, Accessories).
   - Seasonal bundles banner (Summer Splash, Monsoon Tick-Shield, Diwali Calm).
   - Quick-view modal with variant selector and in-stock badges.
   - Floating WhatsApp enquiry basket with slide-over drawer, quantity controls, pickup/appointment toggles, and single itemised WhatsApp message.
   - Injected Schema.org `Product` + `Offer` JSON-LD for rich search results.

4. **Full Page Flow**:
   - Top announcement bar with Bengaluru fear-free badge and live open/closed pulse indicator.
   - Sticky navbar with language toggle (English / हिन्दी) and floating review chip.
   - Trust strip with 5 safety pill cards (Medical-grade hygiene, 100% natural, Fear-free certified, Live CCTV, AC pet-cab).
   - Interactive Before/After transformation gallery with Caveat handwritten parent quotes.
   - 4-step gentle fear-free grooming journey.
   - Master groomers showcase (Sreekumar, Priyanka, Rohit).
   - FAQ accordion with category filters.
   - Quick WhatsApp booking form.
   - Indiranagar studio map & operating hours schedule.
   - Footer with Bengaluru 24x7 emergency vet numbers (Cessna, CUPA, CARE) and wagging-tail Bruno silhouette.
   - Mobile sticky bottom bar (Call, WhatsApp, Book, Basket).

---

## 🚀 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Configure Environment Variables

Create `.env.local` in the project root (see `.env.example`):

```bash
# Server-only Google Places API key (Places API New)
GOOGLE_PLACES_API_KEY=your_places_api_key_here

# Google Place ID for fetching reviews (Server-only)
GOOGLE_PLACE_ID=ChIJN1t_tDeuEmsRUsoyG83frY4

# Public Google Place ID for the direct "Write a Review" link
NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJN1t_tDeuEmsRUsoyG83frY4

# WhatsApp salon phone number (Country code + 10 digits without '+' or spaces)
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

> **Note**: If `GOOGLE_PLACES_API_KEY` or `GOOGLE_PLACE_ID` is left empty, the website automatically falls back to curated pet parent reviews from `data/reviews.ts` with zero visitor downtime.

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📍 Google Places API Setup Guide

### 1. How to Find Your Google Place ID
1. Open the official [Google Maps Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id).
2. Enter your shop name and address (e.g. `Pawfect Tails Pet Spa, Indiranagar, Bengaluru`).
3. Copy the alphanumeric Place ID string (e.g. `ChIJ...`).
4. Set both `GOOGLE_PLACE_ID` and `NEXT_PUBLIC_GOOGLE_PLACE_ID` in `.env.local`.

### 2. How to Create & Restrict Google Places API Key
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create or select your Google Cloud project.
3. Enable **Places API (New)** under **APIs & Services > Library**.
4. Go to **APIs & Services > Credentials** and click **Create Credentials > API Key**.
5. Click **Edit API Key**:
   - **Application Restrictions**: Set to **None** or **IP addresses** (since this key is invoked exclusively on the Next.js server side in `lib/googleReviews.ts` and is never exposed to client browsers).
   - **API Restrictions**: Choose **Restrict key** and select only **Places API (New)**.
6. Copy the key into `GOOGLE_PLACES_API_KEY` in `.env.local`.

---

## 🛠️ Content & Catalog Management

### Editing Prices & Plans (`data/pricing.ts`)
- `PRICING_DATA.tiers`: Edit base packages (Fresh Bath, Full Royal Groom, Ayurvedic Luxury Spa). Update dog prices across 4 size bands (`small`, `medium`, `large`, `giant`) or cat coat types (`short`, `long`).
- `PRICING_DATA.addOns`: Add, remove, or modify optional spa add-ons (Tick & flea dip, Blueberry facial, Paw balm, Dematting).
- `PRICING_DATA.memberships`: Configure multi-visit discount packages, freebies, and savings.
- `PRICING_DATA.comparisonFeatures`: Update rows in the expandable package comparison matrix.

### Editing Products & Bundles (`data/products.ts`)
- Add or modify product items under `PRODUCTS_DATA`. Each product supports:
  - `variants`: Multiple sizes (e.g., 250ml, 500ml) with individual MRP and selling prices.
  - `tags`: Badges like `Best Seller`, `Ayurvedic`, `Organic`.
  - `isPartnerLink`: External affiliate URL support.
  - `seasonalBundle`: Seasonal banners (`Summer Splash`, `Monsoon Tick-Shield`, `Diwali Calm`).

### Adding Curated Reviews (`data/reviews.ts`)
- Add pet parent testimonials under `CURATED_REVIEWS`.
- Attributes: `id`, `authorName`, `petName`, `breed`, `service`, `rating`, `date`, `quote`, `reviewText`, `verified`, `photoUrl`.

### Adding Review Suggestions (`data/reviewTemplates.ts`)
- Contains categorized templates in English, Hinglish, and Hindi for ratings 5★, 4★, and 3★ or below.
- Uses replacement tokens `{petName}`, `{service}`, `{groomer}`, `{liked}`.

---

## 🎨 Design System Tokens

- **Fonts**:
  - Headings: `Baloo 2` (`font-display`)
  - Body: `Nunito` (`font-body`)
  - Accent / Handwriting: `Caveat` (`font-hand`)
  - Devanagari: `Noto Sans Devanagari` (`font-devanagari`)
- **Colours**:
  - `cream`: `#FFF8EC`
  - `marigold`: `#FFB524` (deep: `#E8940C`)
  - `chilli`: `#FF6B4A`
  - `peacock`: `#0F766E` (soft: `#D9F2EE`)
  - `blush`: `#FFE3E0`
  - `ink`: `#1F2A44` (soft: `#5B6580`)
- **Sticker Effects**:
  - Buttons: `.sticker-btn` (`shadow-sticker`: `4px 4px 0 #1F2A44`)
  - Cards: `.sticker-card` with hard offset shadows and hover push animations.
  - Mascots: Bruno the playful pup and Mishti the serene cat SVGs.
- **Accessibility**:
  - AA color contrast compliant.
  - Full keyboard focus rings (`outline: 3px solid var(--peacock)`).
  - Minimum 44px tap targets for all touch devices.
  - Respects `prefers-reduced-motion: reduce` across all animations and marquees.
