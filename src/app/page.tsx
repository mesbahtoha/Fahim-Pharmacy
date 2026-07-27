import { Hero } from "@/components/home/hero";
import { TrustSection } from "@/components/home/trust-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Counter } from "@/components/shared/counter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/lib/data/services";
import { OFFERS } from "@/lib/data/offers";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { HEALTH_TIPS } from "@/lib/data/health-tips";
import { GALLERY_IMAGES } from "@/lib/data/gallery";
import { FAQS } from "@/lib/data/faqs";
import { SITE, telLink } from "@/lib/constants";
import { getFaqSchema } from "@/lib/schema";
import {
  Phone, MessageCircle, MapPin, Star, ArrowRight, ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const STATS = [
  { value: 8, suffix: "+", label: "বছরের অভিজ্ঞতা" },
  { value: 5000, suffix: "+", label: "সন্তুষ্ট ক্রেতা" },
  { value: 500, suffix: "+", label: "ঔষধের ধরন" },
  { value: 24, suffix: "/৭", label: "সেবা" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />

      {/* Stats */}
      <section aria-label="পরিসংখ্যান" className="bg-primary-900 py-14">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <Reveal key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white md:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium text-primary-200">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section aria-label="আমাদের সেবা" className="section-padding bg-white">
        <div className="container">
          <SectionHeading
            badge="সেবাসমূহ"
            title="আমরা যা করি"
            description="রোগীর চাহিদাকে প্রাধান্য দিয়ে আমরা নিচের সেবাগুলো প্রদান করে থাকি"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 4).map((service) => (
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
          <Reveal className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                সব সেবা দেখুন <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Offers */}
      <section aria-label="অফার" className="section-padding bg-gradient-to-br from-primary-50 via-background to-teal-50/60">
        <div className="container">
          <SectionHeading
            badge="বর্তমান অফার"
            title="বিশেষ সুযোগগুলো হাতছাড়া করবেন না"
            description="আমাদের নিয়মিত অফার ও ডিসকাউন্টের মাধ্যমে সাশ্রয়ী মূল্যে পণ্য গ্রহণ করুন"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {OFFERS.map((offer) => (
              <Reveal key={offer.title}>
                <Card className={offer.featured ? "relative border-primary/30 shadow-card-hover" : ""}>
                  {offer.featured && (
                    <div className="absolute -right-2 -top-2">
                      <Badge variant="gold" className="px-3 py-1">{offer.badge}</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                      <offer.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <CardTitle className="mt-2">{offer.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{offer.description}</CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button asChild size="lg">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" /> অফার সম্পর্কে জানুন
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-label="গ্রাহক মতামত" className="section-padding bg-white">
        <div className="container">
          <SectionHeading
            badge="গ্রাহক মতামত"
            title="আমাদের সেবা নিয়ে রোগীরা কী বলছেন"
            description="হাজারো সন্তুষ্ট ক্রেতার আস্থা — আমাদের সবচেয়ে বড় প্রাপ্তি"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <Reveal key={t.name}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                      ))}
                    </div>
                    <CardTitle className="mt-2 text-lg">{t.name}</CardTitle>
                    <CardDescription>{t.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section aria-label="স্বাস্থ্য টিপস" className="section-padding bg-gradient-to-br from-primary-50 via-background to-teal-50/60">
        <div className="container">
          <SectionHeading
            badge="স্বাস্থ্য টিপস"
            title="সুস্থ থাকার সহজ উপায়"
            description="আমাদের বিশেষজ্ঞ টিপস মেনে চলুন — সুস্থ থাকুন, সুন্দর থাকুন"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HEALTH_TIPS.slice(0, 6).map((tip) => (
              <Reveal key={tip.id}>
                <div className="group rounded-2xl border border-border/60 bg-white p-5 transition-shadow hover:shadow-card-hover">
                  <Badge variant="accent" className="mb-3">{tip.category}</Badge>
                  <h3 className="mb-2 text-[15px] font-bold text-primary-900">{tip.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{tip.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/health-tips">
                আরও টিপস দেখুন <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section aria-label="গ্যালারি" className="section-padding bg-white">
        <div className="container">
          <SectionHeading
            badge="গ্যালারি"
            title="আমাদের ফার্মেসির কিছু ছবি"
            description="দেখে নিন আমাদের দোকানের পরিবেশ ও সংগ্রহ"
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
            {GALLERY_IMAGES.slice(0, 5).map((img) => (
              <Reveal key={img.src}>
                <div className="group relative overflow-hidden rounded-2xl shadow-card transition-shadow hover:shadow-card-hover">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110 md:h-52"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/gallery">
                সব ছবি দেখুন <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section aria-label="সচরাচর জিজ্ঞাসা" className="section-padding bg-gradient-to-br from-primary-50 via-background to-teal-50/60">
        <div className="container">
          <SectionHeading
            badge="FAQ"
            title="সচরাচর জিজ্ঞাসা"
            description="আপনার মনে প্রশ্ন থাকলেও থাকতে পারে — উত্তরগুলো জেনে নিন"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema()) }}
          />
          <Reveal className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="যোগাযোগ" className="section-padding bg-primary-900">
        <div className="container text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              আজই যোগাযোগ করুন
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-200">
              ঔষধ অর্ডার করতে বা যেকোনো তথ্যের জন্য আমাদের কল বা হোয়াটসঅ্যাপ করুন
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <a href={telLink(SITE.primaryPhone)}>
                  <Phone aria-hidden="true" /> {SITE.primaryPhoneDisplay}
                </a>
              </Button>
              <Button asChild size="lg" variant="whatsapp">
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden="true" /> হোয়াটসঅ্যাপ
                </a>
              </Button>
              <Button asChild size="lg" variant="outline-white">
                <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin aria-hidden="true" /> লোকেশন দেখুন
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
