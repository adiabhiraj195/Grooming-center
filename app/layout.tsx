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
  title: `${SHOP_DATA.name} | Pet Care, Grooming & Animal Hospital in ${SHOP_DATA.city}`,
  description: `${SHOP_DATA.name} in ${SHOP_DATA.city}: 5.0★ rated all-in-one pet destination. Dedicated grooming clinic, medical clinic & animal hospital, and pet accessories dealer near Pilot Chowk, Sector 3 Road.`,
  keywords: [
    `pet grooming ${SHOP_DATA.city}`,
    `animal hospital ${SHOP_DATA.city}`,
    `pet clinic ${SHOP_DATA.city}`,
    `dog grooming ${SHOP_DATA.city}`,
    SHOP_DATA.name,
    `pet accessories ${SHOP_DATA.city}`,
    `vet doctor ${SHOP_DATA.city}`,
    "pet care near Pilot Chowk",
  ],
  authors: [{ name: SHOP_DATA.name }],
  metadataBase: new URL("https://pawfectpetcare.example.com"),
  openGraph: {
    title: `${SHOP_DATA.name} - 5.0★ Pet Care, Grooming Parlour & Animal Hospital`,
    description: `All-in-one pet destination in ${SHOP_DATA.city}. Grooming clinic, medical treatments, animal hospital, and pet supplies dealer. Rated 5.0★ on Google & Justdial.`,
    url: "https://pawfectpetcare.example.com",
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
