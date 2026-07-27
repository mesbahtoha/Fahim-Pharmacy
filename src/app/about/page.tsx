import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Map } from "@/components/shared/map";
import { SITE, IMAGES } from "@/lib/constants";
import { ShieldCheck, HeartHandshake, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে",
  description: `${SITE.name} — টিএমএসএস মেডিকেল কলেজ হাসপাতাল, ঠেঙ্গামারা, বগুড়ায় অবস্থিত একটি বিশ্বস্ত ফার্মেসি এন্ড সার্জিক্যাল। জানুন আমাদের পরিচয়, লক্ষ্য ও অঙ্গীকার।`,
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "১০০% অরিজিনাল",
    description: "সরাসরি অনুমোদিত ডিস্ট্রিবিউটর থেকে সংগ্রহ — নকল ঔষধের কোনো সুযোগ নেই।",
  },
  {
    icon: HeartHandshake,
    title: "আন্তরিক সেবা",
    description: "প্রতিটি ক্রেতার চাহিদা বোঝার চেষ্টা করি এবং সঠিক পরামর্শ দিই।",
  },
  {
    icon: Award,
    title: "গুণগত মান",
    description: "সব পণ্যের মেয়াদ ও মান যাচাই করে তবেই বিক্রি করা হয়।",
  },
  {
    icon: Users,
    title: "অভিজ্ঞ টিম",
    description: "দীর্ঘ অভিজ্ঞতা সম্পন্ন টিম সবসময় প্রস্তুত আপনার সেবায়।",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="আমাদের সম্পর্কে"
        title="ফাহিম ফার্মেসি এন্ড সার্জিক্যাল"
        description="বিশ্বাসের সাথে সুস্থতার পথে — একটি পরিপূর্ণ ফার্মেসি ও সার্জিক্যাল সেন্টার"
      />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal direction="right">
              <SectionHeading
                align="left"
                badge="আমাদের পরিচয়"
                title="বগুড়ার বিশ্বস্ত ফার্মেসি"
                description={`টিএমএসএস মেডিকেল কলেজ ও রফাতুল্লাহ কমিউনিটি হাসপাতালের ফার্মেসি মার্কেটে অবস্থিত ${SITE.name}। দেশি-বিদেশি ঔষধ ও সার্জিক্যাল সামগ্রীর পূর্ণাঙ্গ সংগ্রহ নিয়ে আমরা প্রতিদিন সকাল ৮টা থেকে রাত ১১টা পর্যন্ত সেবা দিয়ে থাকি।`}
              />
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                হাসপাতালে ভর্তি রোগীদের জন্য কেবিন ডেলিভারি, বগুড়া শহরের মধ্যে হোম ডেলিভারি,
                বিকাশ-নগদ-রকেটে পেমেন্টসহ আধুনিক সব সুবিধা রাখার চেষ্টা করছি। রোগীদের সুস্থতাই
                আমাদের প্রধান লক্ষ্য।
              </p>
            </Reveal>
            <Reveal direction="left">
              <div className="overflow-hidden rounded-3xl shadow-card-hover ring-1 ring-primary/10">
                <Image
                  src={IMAGES.storefront}
                  alt={`${SITE.name} - দোকানের সামনের দৃশ্য`}
                  width={640}
                  height={480}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-label="আমাদের মূল্যবোধ" className="section-padding bg-gradient-to-br from-primary-50 via-background to-teal-50/60">
        <div className="container">
          <SectionHeading
            badge="আমাদের মূল্যবোধ"
            title="যে নীতিতে আমরা পরিচালিত"
            description="আমাদের প্রতিটি কাজের পেছনে রয়েছে সততা, আন্তরিকতা ও দায়িত্ববোধ"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <Reveal key={v.title}>
                <div className="rounded-2xl border border-border/60 bg-white p-6 text-center transition-shadow hover:shadow-card-hover">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                    <v.icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-primary-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="আমাদের অবস্থান" className="section-padding bg-white">
        <div className="container">
          <Reveal>
            <SectionHeading
              badge="আমাদের অবস্থান"
              title="কোথায় পাবেন আমাদের?"
              description="ঠেঙ্গামারা, বগুড়া — টিএমএসএস মেডিকেল কলেজ হাসপাতালের ফার্মেসি মার্কেট"
            />
            <div className="mt-8">
              <Map />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
