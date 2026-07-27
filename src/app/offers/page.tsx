import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OFFERS } from "@/lib/data/offers";
import { SITE, telLink } from "@/lib/constants";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "অফার সমূহ",
  description: `${SITE.name} এর বর্তমান অফার ও ডিসকাউন্ট — ৩,০০০ টাকার ঔষধে ফ্রি গিফট, লয়্যালটি কার্ড, বোনাস পয়েন্ট ও আরও অনেক কিছু।`,
};

export default function OffersPage() {
  return (
    <>
      <PageHeader
        badge="অফার সমূহ"
        title="বিশেষ সুযোগ"
        description="আমাদের বর্তমান অফার ও ডিসকাউন্ট — যা আপনাকে সাশ্রয়ী মূল্যে সেবা পেতে সাহায্য করবে"
      />

      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading
            title="বর্তমান অফার"
            description="আমাদের গ্রাহকদের জন্য নিয়ে এসেছি আকর্ষণীয় সব অফার"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {OFFERS.map((offer) => (
              <Reveal key={offer.title}>
                <Card
                  className={offer.featured ? "relative overflow-visible border-primary/30 shadow-card-hover" : ""}
                >
                  {offer.featured && (
                    <Badge variant="gold" className="absolute -right-2 -top-3 px-4 py-1.5 text-sm">
                      {offer.badge}
                    </Badge>
                  )}
                  <CardHeader>
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                      <offer.icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <CardTitle className="mt-3 text-2xl">{offer.title}</CardTitle>
                    <CardDescription className="text-base">{offer.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="যোগাযোগ" className="section-padding bg-gradient-to-br from-primary-50 via-background to-teal-50/60">
        <div className="container text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              আরও জানতে কল করুন
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[17px] text-muted-foreground">
              অফার সম্পর্কে বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <a href={telLink(SITE.primaryPhone)}>
                  <Phone aria-hidden="true" /> {SITE.primaryPhoneDisplay}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
