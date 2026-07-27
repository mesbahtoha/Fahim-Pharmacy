import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/data/services";
import { SITE, telLink } from "@/lib/constants";
import { Phone, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "সেবাসমূহ",
  description: `${SITE.name} এর সকল সেবা — প্রেসক্রিপশন ঔষধ, ওটিসি ঔষধ, সার্জিক্যাল সামগ্রী, কেবিন ডেলিভারি, হোম ডেলিভারি ও আরও অনেক কিছু।`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="সেবাসমূহ"
        title="আমরা যা করি"
        description="রোগীদের সুস্থতার জন্য আমরা প্রতিদিন যা যা করি"
      />

      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading
            title="আমাদের সকল সেবা"
            description="প্রতিটি সেবাই ডিজাইন করা হয়েছে আপনার সুবিধা ও নিরাপত্তাকে সর্বোচ্চ গুরুত্ব দিয়ে"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Reveal key={service.slug}>
                <Card className="group h-full transition-shadow hover:shadow-card-hover">
                  <CardHeader>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <service.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <CardTitle className="mt-2">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="যোগাযোগ" className="section-padding bg-gradient-to-br from-primary-50 via-background to-teal-50/60">
        <div className="container text-center">
          <Reveal>
            <Badge variant="accent" className="mb-4">যে কোনো সেবার জন্য</Badge>
            <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
              আজই যোগাযোগ করুন
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[17px] text-muted-foreground">
              ফোন বা হোয়াটসঅ্যাপে আমাদের জানান — আমরা দ্রুত সেবা দিতে প্রস্তুত
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <a href={telLink(SITE.primaryPhone)}>
                  <Phone aria-hidden="true" /> কল করুন
                </a>
              </Button>
              <Button asChild size="lg" variant="whatsapp">
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden="true" /> হোয়াটসঅ্যাপ
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
