import type { Metadata, Viewport } from "next";
import { Hind_Siliguri } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { SITE, IMAGES } from "@/lib/constants";
import { getPharmacySchema } from "@/lib/schema";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bangla",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.description} টিএমএসএস মেডিকেল কলেজ হাসপাতাল, ঠেঙ্গামারা, বগুড়া। হটলাইন: ${SITE.primaryPhoneDisplay}`,
  keywords: [
    "ফার্মেসি বগুড়া",
    "ঔষধের দোকান বগুড়া",
    "সার্জিক্যাল সামগ্রী বগুড়া",
    "Fahim Pharmacy",
    "pharmacy Bogura",
    "TMSS Medical College pharmacy",
    "medicine home delivery Bogura",
    "surgical products Bangladesh",
  ],
  authors: [{ name: SITE.nameEn }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: IMAGES.bannerWeb,
        width: 1280,
        height: 426,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [IMAGES.bannerWeb],
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: IMAGES.logo,
    apple: IMAGES.logo,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0F766E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" className={hindSiliguri.variable} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPharmacySchema()),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-white"
        >
          মূল কনটেন্টে যান
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
