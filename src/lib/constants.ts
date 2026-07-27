/**
 * Single source of truth for all business information.
 * Update here once — reflected across the entire website.
 */
export const SITE = {
  name: "ফাহিম ফার্মেসি এন্ড সার্জিক্যাল",
  nameEn: "Fahim Pharmacy & Surgical",
  tagline: "বিশ্বাসের সাথে সুস্থতার পথে",
  description:
    "এখানে সকল প্রকার দেশি-বিদেশি ঔষধ ও সার্জিক্যাল সামগ্রী সুলভ মূল্যে পাওয়া যায়।",
  url: "https://www.fahimpharmacytmss.xyz",
  email: "fahimpharmacytmss@gmail.com",
  phones: [
    { number: "01870832666", display: "01870-832666", label: "নাসির" },
    { number: "01701052720", display: "01701-052720", label: "ফাহিম" },
    { number: "01309003712", display: "01309-003712", label: "জাফর" },
  ],
  primaryPhone: "01870832666",
  primaryPhoneDisplay: "01870-832666",
  address: {
    line1: "টিএমএসএস মেডিকেল কলেজ ও রফাতুল্লাহ কমিউনিটি হাসপাতাল",
    line2: "ফার্মেসি মার্কেট, ঠেঙ্গামারা, বগুড়া",
    en: "TMSS Medical College & Rafatullah Community Hospital, Pharmacy Market, Thengamara, Bogura, Bangladesh",
  },
  mapUrl: "https://maps.app.goo.gl/eUq6eC59vYxJe8Ay7",
  mapEmbedUrl:
    "https://www.google.com/maps?q=24.908583471739103,89.35495299999992&output=embed",
  mapCoords: { lat: 24.908583471739103, lng: 89.35495299999992 } as const,
  facebook: "https://www.facebook.com/fahimpharmacy26",
  whatsapp:
    "https://wa.me/8801701052720?text=Assalamualaikum%20Fahim%2C%20I%20found%20your%20profile%20and%20would%20like%20to%20get%20in%20touch.",
  whatsappNumber: "8801701052720",
  whatsappCommunity: "https://chat.whatsapp.com/HENvqJoQmjJ5Yshl9n2DQT",
  hours: "প্রতিদিন সকাল ৮টা — রাত ১১টা",
  hoursNote: "জরুরি প্রয়োজনে ফোনে যোগাযোগ করুন — আমরা সবসময় পাশে আছি",
} as const;

/** All images live in /public — semantic names for SEO-friendly URLs. */
export const IMAGES = {
  logo: "/logo.jpeg",
  storefront: "/storefront.jpeg",
  storeCounter: "/store-counter.jpeg",
  storeInterior1: "/store-interior-1.jpeg",
  storeInterior2: "/store-interior-2.jpeg",
  bannerWeb: "/banner-web.jpeg",
  bannerInfo: "/banner-info.jpeg",
  bannerPromo1: "/banner-promo-1.jpeg",
  bannerPromo2: "/banner-promo-2.jpeg",
  bannerPromo3: "/banner-promo-3.jpeg",
  businessCard: "/business-card.jpeg",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "হোম" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
  { href: "/services", label: "সেবাসমূহ" },
  { href: "/offers", label: "অফার" },
  { href: "/health-tips", label: "স্বাস্থ্য টিপস" },
  { href: "/gallery", label: "গ্যালারি" },
  { href: "/contact", label: "যোগাযোগ" },
] as const;

/** Builds a WhatsApp deep link with a custom Bengali message. */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telLink(number: string): string {
  return `tel:+88${number}`;
}
