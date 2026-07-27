"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/constants";
import { Send, CheckCircle2, AlertTriangle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "নাম দিন"),
  phone: z.string().min(1, "ফোন নম্বর দিন"),
  message: z.string().min(1, "বার্তা লিখুন"),
});

type ContactData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [popupBlocked, setPopupBlocked] = useState(false);
  const [sending, setSending] = useState(false);
  const popupRef = useRef<Window | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactData) => {
    setSending(true);
    const waMsg = encodeURIComponent(
      `*${data.name}*\n📞 ${data.phone}\n\n${data.message}`
    );
    const url = `https://wa.me/${SITE.whatsappNumber}?text=${waMsg}`;
    popupRef.current = window.open(url, "_blank");
    if (!popupRef.current || popupRef.current.closed) {
      setPopupBlocked(true);
    } else {
      setSent(true);
    }
    setSending(false);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold text-emerald-800">বার্তা পাঠানোর জন্য ধন্যবাদ</h3>
        <p className="mt-2 text-[15px] text-emerald-600">
          হোয়াটসঅ্যাপ খুলে গেছে — আমাদের জানাতে আর কিছু বাকি থাকলে সেখানে লিখুন
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSent(false)}>
          আবার ফর্ম পূরণ করুন
        </Button>
      </div>
    );
  }

  if (popupBlocked) {
    return (
      <div className="rounded-2xl border border-amber-100 bg-amber-50 p-8 text-center">
        <AlertTriangle className="mx-auto h-12 w-12 text-amber-500" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold text-amber-800">পপ-আপ ব্লক করা হয়েছে</h3>
        <p className="mt-2 text-[15px] text-amber-600">
          আপনার ব্রাউজার পপ-আপ ব্লক করছে। অনুগ্রহ করে আমাদের হোয়াটসঅ্যাপ নম্বরে সরাসরি মেসেজ
          দিন: <strong>{SITE.whatsappNumber}</strong>
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <a href={`https://wa.me/${SITE.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              হোয়াটসঅ্যাপ খুলুন
            </a>
          </Button>
          <Button variant="outline" onClick={() => setPopupBlocked(false)}>
            আবার চেষ্টা করুন
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-foreground">
          আপনার নাম
        </label>
        <Input
          id="name"
          placeholder="নাম লিখুন"
          {...register("name")}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-foreground">
          ফোন নম্বর
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="০১৭০০-০০০০০০"
          {...register("phone")}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
          আপনার বার্তা
        </label>
        <Textarea
          id="message"
          placeholder="ঔষধের নাম, পরিমাণ ও প্রয়োজনীয় তথ্য লিখুন..."
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={sending}>
        {sending ? (
          "পাঠানো হচ্ছে..."
        ) : (
          <>
            <Send aria-hidden="true" /> হোয়াটসঅ্যাপে পাঠান
          </>
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        ফর্মটি হোয়াটসঅ্যাপের মাধ্যমে আমাদের কাছে পৌঁছাবে
      </p>
    </form>
  );
}
