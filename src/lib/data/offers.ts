import { Gift, Percent, CreditCard, Star, PartyPopper, type LucideIcon } from "lucide-react";

export interface Offer {
  title: string;
  description: string;
  badge: string;
  icon: LucideIcon;
  featured?: boolean;
}

export const OFFERS: Offer[] = [
  {
    title: "ফ্রি গিফট",
    description:
      "একসাথে ৩ হাজার টাকার ঔষধ কিনলেই পাচ্ছেন গেঞ্জি এবং ৫ হাজার টাকার ঔষধ কিনলেই সিরামিকের একটি গ্লাস/ মগ সম্পূর্ণ ফ্রি।",
    badge: "সেরা অফার",
    icon: Gift,
    featured: true,
  },
  {
    title: "মাসিক ডিসকাউন্ট",
    description:
      "প্রতি মাসে নির্বাচিত ঔষধ ও সার্জিক্যাল সামগ্রীতে বিশেষ ছাড়। বিস্তারিত জানতে দোকানে আসুন বা ফোন করুন।",
    badge: "প্রতি মাসে",
    icon: Percent,
  },
  {
    title: "লয়্যালটি কার্ড",
    description:
      "নিয়মিত ক্রেতাদের জন্য লয়্যালটি কার্ড — প্রতিটি কেনাকাটায় বাড়তি সুবিধা আর বিশেষ মূল্যছাড়।",
    badge: "নিয়মিত ক্রেতা",
    icon: CreditCard,
  },
  {
    title: "বোনাস পয়েন্ট",
    description:
      "প্রতিটি কেনাকাটায় জমবে বোনাস পয়েন্ট। নির্দিষ্ট পয়েন্ট জমলেই পাবেন ক্যাশব্যাক বা ফ্রি পণ্য।",
    badge: "পয়েন্ট জমান",
    icon: Star,
  },
  {
    title: "গিফট ক্যাম্পেইন",
    description:
      "ঈদ, পূজা ও বিশেষ উৎসবে থাকে আকর্ষণীয় উপহার ক্যাম্পেইন। আমাদের ফেসবুক পেজে চোখ রাখুন।",
    badge: "উৎসব অফার",
    icon: PartyPopper,
  },
];
