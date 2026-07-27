import {
  ClipboardList,
  Pill,
  Scissors,
  Stethoscope,
  BedDouble,
  Truck,
  Smartphone,
  PackageSearch,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "prescription-medicine",
    title: "প্রেসক্রিপশন ঔষধ",
    description:
      "ডাক্তারের প্রেসক্রিপশন অনুযায়ী সঠিক কোম্পানির সঠিক ঔষধ। প্রতিটি ঔষধের মেয়াদ ও মান যাচাই করে দেওয়া হয়।",
    icon: ClipboardList,
    highlights: ["সঠিক ডোজ ও কোম্পানি যাচাই", "মেয়াদ পরীক্ষা করে বিক্রি", "প্রেসক্রিপশন সংরক্ষণের পরামর্শ"],
  },
  {
    slug: "otc-medicine",
    title: "ওটিসি ঔষধ",
    description:
      "জ্বর, সর্দি-কাশি, গ্যাস্ট্রিক, ব্যথাসহ দৈনন্দিন প্রয়োজনীয় সব ধরনের ওষুধ হাতের নাগালে।",
    icon: Pill,
    highlights: ["দেশি-বিদেশি সব ব্র্যান্ড", "ভিটামিন ও সাপ্লিমেন্ট", "শিশু ও বয়স্কদের ঔষধ"],
  },
  {
    slug: "surgical-products",
    title: "সার্জিক্যাল সামগ্রী",
    description:
      "হাসপাতাল ও অপারেশনের জন্য প্রয়োজনীয় সব ধরনের সার্জিক্যাল আইটেম — গজ, ব্যান্ডেজ, সিরিঞ্জ, গ্লাভস, ক্যাথেটার ইত্যাদি।",
    icon: Scissors,
    highlights: ["হাসপাতাল মানের সামগ্রী", "স্টেরাইল ও নিরাপদ", "পাইকারি ও খুচরা"],
  },
  {
    slug: "medical-equipment",
    title: "মেডিকেল যন্ত্রপাতি",
    description:
      "ব্লাড প্রেসার মেশিন, গ্লুকোমিটার, নেবুলাইজার, থার্মোমিটার, অক্সিমিটারসহ ঘরে বসে স্বাস্থ্য পরীক্ষার যন্ত্র।",
    icon: Stethoscope,
    highlights: ["ওয়ারেন্টিসহ ব্র্যান্ডের পণ্য", "ব্যবহারের নিয়ম শিখিয়ে দেওয়া হয়", "সাশ্রয়ী মূল্য"],
  },
  {
    slug: "cabin-delivery",
    title: "কেবিন ডেলিভারি",
    description:
      "টিএমএসএস হাসপাতালে ভর্তি রোগীদের কেবিনে বা ওয়ার্ডে ঔষধ পৌঁছে দেওয়া হয় — রোগীর স্বজনদের কষ্ট করতে হয় না।",
    icon: BedDouble,
    highlights: ["হাসপাতালের ভেতরে দ্রুত ডেলিভারি", "জরুরি ঔষধ অগ্রাধিকার", "ফোনেই অর্ডার"],
  },
  {
    slug: "home-delivery",
    title: "হোম ডেলিভারি",
    description:
      "বগুড়া শহরের মধ্যে ঘরে বসেই ঔষধ পান। হোয়াটসঅ্যাপে প্রেসক্রিপশনের ছবি পাঠান, বাকিটা আমাদের দায়িত্ব।",
    icon: Truck,
    highlights: ["হোয়াটসঅ্যাপে প্রেসক্রিপশন", "দ্রুত ডেলিভারি", "ক্যাশ অন ডেলিভারি"],
  },
  {
    slug: "digital-payment",
    title: "ডিজিটাল পেমেন্ট",
    description:
      "বিকাশ, নগদ, রকেটসহ সব ধরনের মোবাইল ব্যাংকিংয়ে পেমেন্ট করার সুবিধা — নগদ টাকা সাথে না থাকলেও চিন্তা নেই।",
    icon: Smartphone,
    highlights: ["বিকাশ / নগদ / রকেট", "নিরাপদ লেনদেন", "ডিজিটাল রসিদ"],
  },
  {
    slug: "medicine-availability",
    title: "ঔষধ প্রাপ্যতা নিশ্চিতকরণ",
    description:
      "দুর্লভ বা বিদেশি কোনো ঔষধ প্রয়োজন? আমাদের জানান — আমরা খুঁজে এনে দেওয়ার সর্বোচ্চ চেষ্টা করি।",
    icon: PackageSearch,
    highlights: ["দুর্লভ ঔষধ সংগ্রহ", "বিদেশি ঔষধের ব্যবস্থা", "ফোনে স্টক জানার সুবিধা"],
  },
];
