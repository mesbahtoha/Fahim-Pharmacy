import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  MessageCircle,
  Users,
  Heart,
} from "lucide-react";
import { NAV_LINKS, SITE, IMAGES, telLink } from "@/lib/constants";
import { SERVICES } from "@/lib/data/services";
import { toBanglaDigits } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="container section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={IMAGES.logo}
                alt={`${SITE.name} লোগো`}
                width={52}
                height={52}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-white/20"
              />
              <div>
                <p className="text-lg font-bold text-white">ফাহিম ফার্মেসি</p>
                <p className="text-sm text-primary-100/70">এন্ড সার্জিক্যাল</p>
              </div>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-primary-100/80">
              {SITE.description}
            </p>
            <p className="mt-3 text-sm font-semibold text-secondary">
              “{SITE.tagline}”
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ফেসবুক পেজ"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#1877F2]"
              >
                <Facebook className="h-5 w-5 text-white" aria-hidden="true" />
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="হোয়াটসঅ্যাপে মেসেজ করুন"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#25D366]"
              >
                <MessageCircle className="h-5 w-5 text-white" aria-hidden="true" />
              </a>
              <a
                href={SITE.whatsappCommunity}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="হোয়াটসঅ্যাপ কমিউনিটিতে যোগ দিন"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#25D366]"
              >
                <Users className="h-5 w-5 text-white" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="ফুটার মেনু">
            <h3 className="text-lg font-bold text-white">দরকারি লিংক</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-primary-100/80 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[15px] text-primary-100/80 transition-colors hover:text-secondary"
                >
                  প্রাইভেসি পলিসি
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[15px] text-primary-100/80 transition-colors hover:text-secondary"
                >
                  শর্তাবলি
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white">আমাদের সেবা</h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="text-[15px] text-primary-100/80 transition-colors hover:text-secondary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white">যোগাযোগ</h3>
            <ul className="mt-5 space-y-4 text-[15px]">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <span className="text-primary-100/80">
                  {SITE.address.line1}, {SITE.address.line2}
                </span>
              </li>
              {SITE.phones.map((phone) => (
                <li key={phone.number} className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <a
                    href={telLink(phone.number)}
                    className="text-primary-100/80 transition-colors hover:text-secondary"
                  >
                    {phone.display} ({phone.label})
                  </a>
                </li>
              ))}
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-primary-100/80 transition-colors hover:text-secondary"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <span className="text-primary-100/80">{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-sm text-primary-100/60 md:flex-row">
          <p>
            © {toBanglaDigits(new Date().getFullYear())} {SITE.name} — সর্বস্বত্ব সংরক্ষিত
          </p>
          <p className="flex items-center gap-1.5">
            <Heart className="h-4 w-4 text-secondary" aria-hidden="true" />
            আপনার সুস্থতাই আমাদের অঙ্গীকার
          </p>
        </div>
      </div>
    </footer>
  );
}
