import React, { Suspense } from "react";
import { TopAnnouncementBar } from "@/components/ui/TopAnnouncementBar";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesShowcaseSection } from "@/components/sections/ServicesShowcaseSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { GoogleReviewsSection } from "@/components/reviews/GoogleReviewsSection";
import { ReviewsSkeleton } from "@/components/reviews/ReviewsSkeleton";
import { ProductsSection } from "@/components/products/ProductsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { GroomersSection } from "@/components/sections/GroomersSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { PawTrail } from "@/components/illustrations/PawTrail";
import { WavyDivider } from "@/components/illustrations/Dividers";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink overflow-x-hidden selection:bg-marigold selection:text-ink">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <TopAnnouncementBar />

      {/* 2. STICKY NAVBAR */}
      <Navbar />

      <main className="flex-1 pt-24 md:pt-32">
        {/* 3. HERO SECTION */}
        <HeroSection />

        {/* 4. TRUST STRIP (5 PILL CARDS) */}
        <TrustStrip />

        {/* PAW TRAIL DIVIDER */}
        <PawTrail count={8} color="#0F766E" />

        {/* SECTION DIVIDER TO SERVICES */}
        <WavyDivider fillColor="#D9F2EE" />

        {/* 5. SERVICES SHOWCASE (id="services") */}
        <ServicesShowcaseSection />

        {/* WAVY DIVIDER TO PRICING */}
        <WavyDivider fillColor="#D9F2EE" flip={true} />

        {/* 6. PRICES & PLANS SECTION (id="pricing") */}
        <PricingSection />

        {/* WAVY DIVIDER TO REVIEWS */}
        <WavyDivider fillColor="#FFF8EC" />

        {/* 7. GOOGLE REVIEWS SECTION & WRITE REVIEW FLOW (id="reviews" and id="write-review") */}
        <Suspense fallback={<ReviewsSkeleton />}>
          <GoogleReviewsSection />
        </Suspense>

        {/* WAVY DIVIDER TO PRODUCTS */}
        <WavyDivider fillColor="#FFF8EC" flip={true} />

        {/* 8. PRODUCTS SECTION - THE GROOMER'S SHELF (id="products") */}
        <ProductsSection />

        {/* WAVY DIVIDER TO GALLERY */}
        <WavyDivider fillColor="#FFFFFF" />

        {/* 9. BEFORE & AFTER GALLERY (id="gallery") */}
        <GallerySection />

        {/* WAVY DIVIDER TO HOW IT WORKS */}
        <WavyDivider fillColor="#FFF8EC" flip={true} />

        {/* 10. HOW IT WORKS (id="how-it-works") */}
        <HowItWorksSection />

        {/* WAVY DIVIDER TO GROOMERS */}
        <WavyDivider fillColor="#FFFFFF" />

        {/* 11. MEET THE GROOMERS (id="groomers") */}
        <GroomersSection />

        {/* WAVY DIVIDER TO FAQ */}
        <WavyDivider fillColor="#FFF8EC" flip={true} />

        {/* 12. FAQ ACCORDION (id="faq") */}
        <FaqSection />

        {/* WAVY DIVIDER TO BOOKING */}
        <WavyDivider fillColor="#FFFFFF" />

        {/* 13. CONTACT & QUICK BOOKING FORM (id="book") */}
        <BookingSection />

        {/* WAVY DIVIDER TO LOCATION */}
        <WavyDivider fillColor="#FFF8EC" flip={true} />

        {/* 14. LOCATION, HOURS & DIRECTIONS (id="contact") */}
        <LocationSection />
      </main>

      {/* 15. GLOBAL FOOTER WITH EMERGENCY PET NUMBERS */}
      <Footer />
    </div>
  );
}

