import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { GALLERY_IMAGES } from "@/lib/data/gallery";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "গ্যালারি",
  description: `${SITE.name} এর ছবির গ্যালারি — দেখে নিন আমাদের দোকানের পরিবেশ, সংগ্রহ ও কার্যক্রমের কিছু ছবি।`,
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        badge="গ্যালারি"
        title="আমাদের ফার্মেসির ছবি"
        description="দেখে নিন ফাহিম ফার্মেসি এন্ড সার্জিক্যালের কিছু ছবি"
      />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
            {GALLERY_IMAGES.map((img) => (
              <Reveal key={img.src}>
                <div className="mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-card transition-shadow hover:shadow-card-hover">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={Math.round(600 / img.aspect)}
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
