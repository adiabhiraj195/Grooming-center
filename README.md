# Animalia Pet Care Grooming Parlour — Rewari, Haryana

Highly-rated all-in-one pet care and grooming center, medical clinic, animal hospital, and pet accessories dealership located near Pilot Chowk at Gate No-2, Sector 3 Road, Radha Swami Colony, Bhakti Nagar in Rewari, Haryana. Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

📖 **[UI/UX Guide & Visual Documentation (Hinglish)](UI_UX_GUIDE.md)**: UI screenshots, design tokens, and user flow explanations in Hinglish.

---

## 🌟 Key Features

1. **All-in-One Pet Destination**:
   - **Dedicated Grooming Clinic**: Professional bathing, royal styling, coat maintenance, and hygiene.
   - **Medical Clinic & Animal Hospital**: Routine health checkups, veterinary treatments, skin allergy care, and wound dressings.
   - **Authorized Pet Supplies Dealer**: Pet foods, accessories, toys, walk gear, and daily essentials.

2. **Google & Justdial Reviews Integration**:
   - Exceptional reputation online with a perfect **5.0-star rating** gathered from over 40 customer reviews.
   - Server-side caching with 6-hour Next.js revalidation (`revalidate: 21600`).
   - Complies 100% with Google review guidelines: unmodified text, clear Google branding, no filtering of negative reviews, zero review gating, and no review incentive offers.
   - Dual-direction marquee with authentic pet parent testimonials.
   - 3-step interactive review generator ("Loved your visit? Tell Google in 30 seconds") with copy-to-clipboard, toast notification, and celebration confetti.
   - In-salon counter QR stand printable at `/review-qr`.

3. **Amenities & Accessibility Card**:
   - **Quick Visits & Walk-ins**: Accommodating for quick visits, walk-ins warmly accepted.
   - **Free Parking**: On-site parking and free street parking outside Gate No-2 on Sector 3 Road.
   - **Payment Modes**: NFC contactless mobile payments (Apple Pay, Google Pay, PhonePe, Paytm), UPI, Debit/Credit cards, and Cash.
   - **Gender-Neutral Restroom**: Clean on-site facilities for pet parents.
   - **Accessibility Transparency**: Transparent notice that facility currently lacks wheelchair-accessible entrances, parking, or seating, with curbside assistance offered.

4. **Prices & Plans Section (`#pricing`)**:
   - Interactive dog size weight selector (< 10kg, 10–25kg, 25–40kg, 40kg+) with dynamic scaling Bruno mascot silhouette.
   - Cat coat selector (Short Coat, Long/Double Coat).
   - Highly affordable, transparent pricing across 3 primary packages + Veterinary Check add-ons.
   - Membership plans (Animalia Care Pass & Glow Club) showing exact savings.

5. **The Groomer's Shelf — Products Section (`#products`)**:
   - Curated pet supplies across 7 categories (Shampoo, Food & Treats, Toys, Walk Gear, Health, Cat Corner, Accessories).
   - In-store pickup (`Sector 3 Road, Rewari`) and add-to-appointment fulfillment options.
   - WhatsApp order and inquiry cart.

6. **Hours & Contact**:
   - Open **7 days a week from 8:00 AM to 8:30 PM**.
   - Direct Contact Numbers: **085700 49726** and **095188 81824**.
   - Bilingual support: Full English and हिन्दी localization (`lib/i18n.tsx`).

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
GOOGLE_PLACE_ID=ChIJAnimaliaPetCareRewari

# Public Google Place ID for the direct "Write a Review" link
NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJAnimaliaPetCareRewari

# WhatsApp business phone number (Country code + 10 digits without '+' or spaces)
NEXT_PUBLIC_WHATSAPP_NUMBER=918570049726
```

> **Note**: If `GOOGLE_PLACES_API_KEY` or `GOOGLE_PLACE_ID` is left empty, the website automatically falls back to curated 5.0★ pet parent reviews from `data/reviews.ts` with zero visitor downtime.

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📍 Google Places API Setup Guide

### 1. How to Find Your Google Place ID
1. Open the official [Google Maps Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id).
2. Enter your shop name and address (e.g. `Animalia Pet Care Grooming Parlour, Bhakti Nagar, Rewari, Haryana`).
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
