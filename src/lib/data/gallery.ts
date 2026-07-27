import { IMAGES } from "@/lib/constants";

export interface GalleryImage {
  src: string;
  alt: string;
  /** Approximate aspect ratio (width / height) used for masonry layout. */
  aspect: number;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: IMAGES.storefront,
    alt: "ফাহিম ফার্মেসি এন্ড সার্জিক্যাল - দোকানের সামনের দৃশ্য, ঠেঙ্গামারা বগুড়া",
    aspect: 3 / 4,
  },
  {
    src: IMAGES.storeCounter,
    alt: "ফাহিম ফার্মেসির বিক্রয় কাউন্টার ও ঔষধের তাক",
    aspect: 4 / 3,
  },
  {
    src: IMAGES.storeInterior1,
    alt: "ফার্মেসির ভেতরে সাজানো দেশি-বিদেশি ঔষধের বিশাল সংগ্রহ",
    aspect: 4 / 3,
  },
  {
    src: IMAGES.storeInterior2,
    alt: "ঔষধ ও সার্জিক্যাল সামগ্রীতে পরিপূর্ণ ফার্মেসির শেলফ",
    aspect: 4 / 3,
  },
  {
    src: IMAGES.bannerWeb,
    alt: "ফাহিম ফার্মেসি এন্ড সার্জিক্যাল - অফিসিয়াল ব্যানার",
    aspect: 3 / 1,
  },
  {
    src: IMAGES.bannerPromo1,
    alt: "১০০% অরিজিনাল ঔষধের নিশ্চয়তা - ফাহিম ফার্মেসির প্রচারণা ব্যানার",
    aspect: 3 / 2,
  },
  {
    src: IMAGES.bannerPromo2,
    alt: "দেশি-বিদেশি ঔষধ ও সার্জিক্যাল সামগ্রীর বিশ্বস্ত প্রতিষ্ঠান - প্রচারণা ব্যানার",
    aspect: 3 / 2,
  },
  {
    src: IMAGES.bannerPromo3,
    alt: "সেবা আমাদের অঙ্গীকার, সুস্থতাই আমাদের লক্ষ্য - ফাহিম ফার্মেসি ব্যানার",
    aspect: 16 / 9,
  },
  {
    src: IMAGES.bannerInfo,
    alt: "ফাহিম ফার্মেসির ঠিকানা, হটলাইন ও যোগাযোগের তথ্য",
    aspect: 3 / 2,
  },
  {
    src: IMAGES.businessCard,
    alt: "ফাহিম ফার্মেসি এন্ড সার্জিক্যাল - ভিজিটিং কার্ড",
    aspect: 16 / 9,
  },
];
