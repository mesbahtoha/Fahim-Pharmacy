import Image from "next/image";
import { Phone, MessageCircle, MapPin, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";
import { SITE, IMAGES, telLink } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-background to-teal-50/60">
      {/* decorative blurred orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="right">
          <Badge variant="accent" className="mb-5">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            ১০০% অরিজিনাল ঔষধের নিশ্চয়তা
          </Badge>
          <h1 className="text-4xl font-bold leading-[1.15] text-primary-900 text-balance md:text-5xl xl:text-[3.4rem]">
            {SITE.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-primary-700 md:text-2xl">
            {SITE.tagline}
          </p>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            {SITE.description} টিএমএসএস মেডিকেল কলেজ হাসপাতাল প্রাঙ্গণেই আমাদের
            অবস্থান — রোগী ও স্বজনদের জন্য কেবিন ডেলিভারিসহ সব ধরনের সেবা।
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={telLink(SITE.primaryPhone)}>
                <Phone aria-hidden="true" />
                এখনই কল করুন
              </a>
            </Button>
            <Button asChild size="lg" variant="whatsapp">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                হোয়াটসঅ্যাপ
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">
                <MapPin aria-hidden="true" />
                লোকেশন দেখুন
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px] font-medium text-primary-800">
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-secondary" aria-hidden="true" />
              {SITE.hours}
            </span>
            <a
              href={telLink(SITE.primaryPhone)}
              className="flex items-center gap-2 text-lg font-bold text-primary transition-colors hover:text-primary-800"
            >
              <Phone className="h-5 w-5 text-secondary" aria-hidden="true" />
              {SITE.primaryPhoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.15}>
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="overflow-hidden rounded-4xl shadow-card-hover ring-1 ring-primary/10">
              <Image
                src={IMAGES.storeCounter}
                alt="ফাহিম ফার্মেসি এন্ড সার্জিক্যাল - দোকানের কাউন্টার ও ঔষধের সংগ্রহ"
                width={800}
                height={600}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>
            {/* floating trust chip */}
            <div className="glass absolute -bottom-5 left-1/2 flex w-max -translate-x-1/2 items-center gap-3 rounded-2xl px-5 py-3 shadow-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
                <ShieldCheck className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-primary-900">বিশ্বস্ত সেবা</p>
                <p className="text-xs text-muted-foreground">
                  হাজারো ক্রেতার আস্থার ঠিকানা
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
