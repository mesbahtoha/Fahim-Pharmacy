import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "শর্তাবলি",
  description: `${SITE.name} এর ব্যবহারের শর্তাবলি — ওয়েবসাইট ও সেবা ব্যবহারের নিয়ম জানুন।`,
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        badge="শর্তাবলি"
        title="ব্যবহারের শর্তাবলি"
        description="এই ওয়েবসাইট ও সেবা ব্যবহারের পূর্বে শর্তাবলি পড়ুন"
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-6 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              {SITE.name} ("আমরা", "আমাদের") এর ওয়েবসাইট ও সেবা ব্যবহারের শর্তাবলি নিচে
              বর্ণিত। ওয়েবসাইট ব্যবহার করার অর্থ আপনি এই শর্তাবলি মেনে চলতে সম্মত হয়েছেন।
            </p>

            <h2 className="text-xl font-bold text-primary-900">সেবার শর্ত</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>আমরা ১০০% অরিজিনাল ঔষধ সরবরাহের নিশ্চয়তা দিই</li>
              <li>ঔষধের মেয়াদ ও গুণগত মান যাচাই করে বিক্রি করা হয়</li>
              <li>
                প্রেসক্রিপশন ছাড়া নিয়ন্ত্রিত ঔষধ (অ্যান্টিবায়োটিক ইত্যাদি) বিক্রি করা
                হয় না
              </li>
            </ul>

            <h2 className="text-xl font-bold text-primary-900">অর্ডার ও পেমেন্ট</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>হোয়াটসঅ্যাপ বা ফোনে অর্ডার নেওয়া হয়</li>
              <li>পেমেন্ট নগদ, বিকাশ ও রকেটে গ্রহণ করা হয়</li>
              <li>হোম ডেলিভারি বগুড়া শহরের মধ্যে সীমিত</li>
            </ul>

            <h2 className="text-xl font-bold text-primary-900">রিটার্ন ও রিফান্ড</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>অব্যবহৃত ও অক্ষত ঔষধ রসিদসহ ফেরত দেওয়া যাবে</li>
              <li>
                ফ্রিজে রাখার ঔষধ (ইনসুলিন, ভ্যাকসিন) নিরাপত্তার কারণে ফেরত নেওয়া সম্ভব
                নয়
              </li>
              <li>সঠিক ঔষধ সরবরাহে আমরা সর্বোচ্চ সতর্কতা অবলম্বন করি</li>
            </ul>

            <h2 className="text-xl font-bold text-primary-900">দায় সীমা</h2>
            <p>
              আমাদের সেবা ব্যবহারের ফলে কোনো প্রকার ক্ষতির জন্য আমরা দায়ী থাকব না, যেখানে
              আমাদের পক্ষ থেকে অবহেলা প্রমাণিত না হয়। আমরা যথাসাধ্য সঠিক তথ্য ও পণ্য
              সরবরাহের চেষ্টা করি।
            </p>

            <h2 className="text-xl font-bold text-primary-900">যোগাযোগ</h2>
            <p>
              শর্তাবলি নিয়ে যেকোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন:
              <br />
              ফোন: {SITE.primaryPhoneDisplay}
              <br />
              ইমেইল: {SITE.email}
            </p>

            <p className="pt-6 text-sm">
              সর্বশেষ আপডেট: জানুয়ারি ২০২৬
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
