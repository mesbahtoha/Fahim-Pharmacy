import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { Map } from "@/components/shared/map";
import { ContactForm } from "./contact-form";
import { SITE } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock, Facebook, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "যোগাযোগ",
  description: `${SITE.name} এর সাথে যোগাযোগ করুন। ফোন, ইমেইল, হোয়াটসঅ্যাপ বা সরাসরি দোকানে এসে আপনার প্রয়োজনীয় তথ্য জানাতে পারেন।`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="যোগাযোগ"
        title="আমাদের সাথে কথা বলুন"
        description="যেকোনো প্রশ্ন, পরামর্শ বা অর্ডার জানাতে চাইলে আমাদের জানান"
      />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal direction="right">
              <h2 className="text-2xl font-bold text-primary-900">বার্তা পাঠান</h2>
              <p className="mt-2 text-[15px] text-muted-foreground">
                নিচের ফর্ম পূরণ করে পাঠান — আমরা দ্রুত উত্তর দেব
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal direction="left">
              <h2 className="text-2xl font-bold text-primary-900">যোগাযোগের তথ্য</h2>
              <p className="mt-2 text-[15px] text-muted-foreground">
                নিচের যেকোনো মাধ্যমে আমাদের সাথে যোগাযোগ করতে পারেন
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-primary-900">ঠিকানা</p>
                    <p className="mt-1 text-[15px] text-muted-foreground">
                      {SITE.address.line1}<br />{SITE.address.line2}
                    </p>
                    <a
                      href={SITE.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      গুগল ম্যাপে দেখুন
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-primary-900">ফোন</p>
                    <div className="mt-1 space-y-1">
                      {SITE.phones.map((p) => (
                        <a
                          key={p.number}
                          href={`tel:+88${p.number}`}
                          className="block text-[15px] text-muted-foreground transition-colors hover:text-primary"
                        >
                          {p.display} ({p.label})
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-primary-900">ইমেইল</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-1 block text-[15px] text-muted-foreground transition-colors hover:text-primary"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-primary-900">খোলার সময়</p>
                    <p className="mt-1 text-[15px] text-muted-foreground">{SITE.hours}</p>
                    <p className="text-sm text-muted-foreground">{SITE.hoursNote}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-primary-900">সোশ্যাল মিডিয়া</p>
                    <div className="mt-2 flex gap-3">
                      <a
                        href={SITE.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary transition-colors hover:bg-primary hover:text-white"
                        aria-label="ফেসবুক"
                      >
                        <Facebook className="h-5 w-5" aria-hidden="true" />
                      </a>
                      <a
                        href={SITE.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors hover:bg-emerald-500 hover:text-white"
                        aria-label="হোয়াটসঅ্যাপ"
                      >
                        <MessageCircle className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-label="মানচিত্র" className="section-padding bg-gradient-to-br from-primary-50 via-background to-teal-50/60">
        <div className="container">
          <Reveal>
            <h2 className="text-2xl font-bold text-primary-900">আমাদের অবস্থান</h2>
            <p className="mt-2 text-[15px] text-muted-foreground">
              টিএমএসএস মেডিকেল কলেজ হাসপাতাল প্রাঙ্গণ — ফার্মেসি মার্কেট, ঠেঙ্গামারা, বগুড়া
            </p>
            <div className="mt-8">
              <Map />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
