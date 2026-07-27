"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white">
      <div className="container text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
          <AlertCircle className="h-10 w-10 text-red-500" aria-hidden="true" />
        </div>
        <h1 className="mt-6 text-4xl font-bold text-primary-900">কিছু একটা সমস্যা হয়েছে</h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-muted-foreground">
          একটি অপ্রত্যাশিত ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।
        </p>
        <Button className="mt-8" onClick={reset}>
          <RotateCcw aria-hidden="true" /> আবার চেষ্টা করুন
        </Button>
      </div>
    </section>
  );
}
