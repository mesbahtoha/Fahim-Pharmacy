import { ShieldCheck, Globe2, Scissors, HandCoins, HeartHandshake } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "১০০% অরিজিনাল ঔষধ",
    description: "অনুমোদিত ডিস্ট্রিবিউটর থেকে সংগৃহীত",
  },
  {
    icon: Globe2,
    title: "দেশি-বিদেশি ঔষধ",
    description: "সব ব্র্যান্ডের বিশাল সংগ্রহ",
  },
  {
    icon: Scissors,
    title: "সার্জিক্যাল সামগ্রী",
    description: "হাসপাতাল মানের সব আইটেম",
  },
  {
    icon: HandCoins,
    title: "সুলভ মূল্য",
    description: "ন্যায্য দামে সব পণ্য",
  },
  {
    icon: HeartHandshake,
    title: "অভিজ্ঞ সেবা",
    description: "আন্তরিক ও বিশ্বস্ত পরামর্শ",
  },
];

/** Trust bar directly under the hero — the first credibility signal. */
export function TrustSection() {
  return (
    <section aria-label="আমাদের প্রতিশ্রুতি" className="relative z-10 -mt-1 bg-white py-10">
      <div className="container">
        <RevealGroup
          stagger={0.08}
          className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5"
        >
          {TRUST_POINTS.map((point) => (
            <RevealItem key={point.title}>
              <div className="group flex flex-col items-center gap-3 rounded-2xl p-4 text-center transition-colors hover:bg-primary-50/60">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <point.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-primary-900">{point.title}</h3>
                  <p className="mt-1 text-[13px] leading-snug text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
