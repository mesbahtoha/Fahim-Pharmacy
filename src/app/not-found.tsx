import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white">
      <div className="container text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-50">
          <Search className="h-10 w-10 text-primary" aria-hidden="true" />
        </div>
        <h1 className="mt-6 text-6xl font-bold text-primary-900">404</h1>
        <p className="mt-4 text-xl font-semibold text-primary-800">পেজটি পাওয়া যায়নি</p>
        <p className="mx-auto mt-2 max-w-md text-[15px] text-muted-foreground">
          আপনি যে পেজটি খুঁজছেন তা বিদ্যমান নেই বা সরিয়ে নেওয়া হয়েছে
        </p>
        <Button asChild className="mt-8">
          <Link href="/">
            <Home aria-hidden="true" /> হোমপেজে ফিরুন
          </Link>
        </Button>
      </div>
    </section>
  );
}
