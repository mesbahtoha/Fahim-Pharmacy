import { SITE, IMAGES } from "@/lib/constants";
import { FAQS } from "@/lib/data/faqs";

/** schema.org Pharmacy + LocalBusiness structured data for rich search results. */
export function getPharmacySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "@id": `${SITE.url}/#pharmacy`,
    name: SITE.name,
    alternateName: SITE.nameEn,
    slogan: SITE.tagline,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}${IMAGES.logo}`,
    image: [`${SITE.url}${IMAGES.storefront}`, `${SITE.url}${IMAGES.bannerWeb}`],
    telephone: `+88${SITE.primaryPhone}`,
    email: SITE.email,
    priceRange: "৳",
    currenciesAccepted: "BDT",
    paymentAccepted: "Cash, bKash, Nagad, Rocket",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "TMSS Medical College & Rafatullah Community Hospital, Pharmacy Market",
      addressLocality: "Thengamara, Bogura",
      addressRegion: "Rajshahi Division",
      postalCode: "5800",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.8829,
      longitude: 89.3527,
    },
    hasMap: SITE.mapUrl,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "08:00",
      closes: "23:00",
    },
    sameAs: [SITE.facebook],
    contactPoint: SITE.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: `+88${p.number}`,
      contactType: "customer service",
      availableLanguage: ["Bengali", "English"],
    })),
  };
}

/** FAQPage structured data — enables FAQ rich snippets in Google. */
export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
