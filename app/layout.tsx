import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito, Caveat, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { BasketProvider } from "@/context/BasketContext";
import { SHOP_DATA } from "@/data/shop";

const baloo2 = Baloo_2({
  subsets: ["latin", "devanagari"],
  weight: ["600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-caveat",
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SHOP_DATA.name} | ${SHOP_DATA.area}, ${SHOP_DATA.city}`,
  description: `Bangalore's happiest pet grooming spa for dogs and cats. Cage-free drying, herbal shampoos, certified fear-free groomers, and AC cab pickup/drop in Indiranagar.`,
  keywords: [
    "pet grooming Bangalore",
    "dog grooming Indiranagar",
    "cat grooming Bangalore",
    "pet spa near me",
    "dog haircut Indiranagar",
    "flea tick treatment dogs",
    "deshedding treatment Bangalore",
  ],
  authors: [{ name: SHOP_DATA.name }],
  metadataBase: new URL("https://pawfecttailspa.in"),
  openGraph: {
    title: `${SHOP_DATA.name} - Paws, Bubbles & Bahut Saara Pyaar!`,
    description: `Gentle, stress-free luxury pet spa in Indiranagar, Bengaluru. Rated 4.9★ by 500+ pet parents.`,
    url: "https://pawfecttailspa.in",
    siteName: SHOP_DATA.name,
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFF8EC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${baloo2.variable} ${nunito.variable} ${caveat.variable} ${notoSansDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-body selection:bg-marigold selection:text-ink">
        <I18nProvider>
          <BasketProvider>
            {children}
          </BasketProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
