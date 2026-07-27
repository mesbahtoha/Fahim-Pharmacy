import { SITE } from "@/lib/constants";
import { MapPin, ExternalLink } from "lucide-react";

export function Map() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border/60 bg-white shadow-card">
      <div className="aspect-[21/9] w-full md:aspect-[21/9]">
        <iframe
          title={`${SITE.name} — গুগল ম্যাপ লোকেশন`}
          src={SITE.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-primary-900">{SITE.address.line1}</p>
            <p className="text-sm text-muted-foreground">{SITE.address.line2}</p>
          </div>
        </div>
        <a
          href={SITE.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          গুগল ম্যাপে খুলুন
        </a>
      </div>
    </div>
  );
}
