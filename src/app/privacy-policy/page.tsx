import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "প্রাইভেসি পলিসি",
  description: `${SITE.name} এর প্রাইভেসি পলিসি — আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার ও সংরক্ষণ করি।`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        badge="প্রাইভেসি পলিসি"
        title="গোপনীয়তা নীতি"
        description="আমরা আপনার ব্যক্তিগত তথ্যের গোপনীয়তা ও নিরাপত্তাকে সর্বোচ্চ গুরুত্ব দিই"
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="prose prose-primary max-w-none space-y-6 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              {SITE.name} আপনার গোপনীয়তাকে সম্মান করে। এই নীতিমালায় আমরা ব্যাখ্যা করছি
              যে আমরা কীভাবে আপনার ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার ও সংরক্ষণ করি।
            </p>

            <h2 className="text-xl font-bold text-primary-900">আমরা কী তথ্য সংগ্রহ করি</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>আপনার নাম ও ফোন নম্বর (যোগাযোগের জন্য)</li>
              <li>ঔষধ অর্ডারের সময় প্রদত্ত তথ্য</li>
              <li>আপনার পাঠানো হোয়াটসঅ্যাপ মেসেজ</li>
            </ul>

            <h2 className="text-xl font-bold text-primary-900">তথ্য ব্যবহারের উদ্দেশ্য</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>ঔষধ ও সেবা সম্পর্কিত যোগাযোগ</li>
              <li>অর্ডার প্রক্রিয়াকরণ ও ডেলিভারি</li>
              <li>গ্রাহক সেবা ও সহায়তা প্রদান</li>
              <li>নতুন অফার সম্পর্কে তথ্য প্রদান (আপনার সম্মতি সাপেক্ষে)</li>
            </ul>

            <h2 className="text-xl font-bold text-primary-900">তথ্যের নিরাপত্তা</h2>
            <p>
              আমরা আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে যথাযথ নিরাপত্তা ব্যবস্থা গ্রহণ করি।
              আপনার তথ্য তৃতীয় পক্ষের সাথে শেয়ার করা হয় না, আইনগত বাধ্যবাধকতা ছাড়া।
            </p>

            <h2 className="text-xl font-bold text-primary-900">তথ্য সংরক্ষণ</h2>
            <p>
              আপনার তথ্য কেবলমাত্র প্রয়োজনীয় সময়ের জন্য সংরক্ষণ করা হয়। আপনি যেকোনো সময়
              আপনার তথ্য মুছে ফেলার অনুরোধ জানাতে পারেন।
            </p>

            <h2 className="text-xl font-bold text-primary-900">আপডেট</h2>
            <p>
              এই নীতিমালা যেকোনো সময় আপডেট করা হতে পারে। আপডেটের জন্য আমাদের ওয়েবসাইট
              পর্যবেক্ষণ করুন।
            </p>

            <h2 className="text-xl font-bold text-primary-900">যোগাযোগ</h2>
            <p>
              প্রাইভেসি পলিসি নিয়ে যেকোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন:
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
