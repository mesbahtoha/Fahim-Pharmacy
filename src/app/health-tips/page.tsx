import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { HEALTH_TIPS, TIP_CATEGORIES } from "@/lib/data/health-tips";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "স্বাস্থ্য টিপস",
  description: `${SITE.name} এর স্বাস্থ্য টিপস — ঔষধ সচেতনতা, দৈনন্দিন স্বাস্থ্য, প্রাথমিক চিকিৎসা, মা ও শিশু স্বাস্থ্য ও আরও অনেক বিষয়ে সচেতনতামূলক টিপস।`,
};

export default function HealthTipsPage() {
  return (
    <>
      <PageHeader
        badge="স্বাস্থ্য টিপস"
        title="সুস্থ থাকার সহজ উপায়"
        description="বিশেষজ্ঞদের পরামর্শ মেনে চলুন — সুস্থ থাকুন, সুন্দর থাকুন"
      />

      {TIP_CATEGORIES.map((category) => {
        const tips = HEALTH_TIPS.filter((t) => t.category === category);
        return (
          <section key={category} aria-label={category} className="section-padding bg-white even:bg-gradient-to-br even:from-primary-50 even:via-background even:to-teal-50/60">
            <div className="container">
              <SectionHeading
                align="left"
                badge={category}
                title={category}
              />
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {tips.map((tip) => (
                  <Reveal key={tip.id}>
                    <div className="group rounded-2xl border border-border/60 bg-white p-6 transition-shadow hover:shadow-card-hover">
                      <h3 className="mb-2 text-[15px] font-bold text-primary-900">{tip.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{tip.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
