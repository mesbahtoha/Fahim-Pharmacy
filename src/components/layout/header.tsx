"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE, IMAGES, telLink } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu on navigation
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled ? "glass shadow-soft" : "bg-white"
      )}
    >
      <div className="container flex h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${SITE.name} — হোমপেজ`}
        >
          <Image
            src={IMAGES.logo}
            alt={`${SITE.name} লোগো`}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/10"
            priority
          />
          <span className="hidden flex-col sm:flex">
            <span className="text-lg font-bold leading-tight text-primary-900">
              ফাহিম ফার্মেসি
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              এন্ড সার্জিক্যাল
            </span>
          </span>
        </Link>

        <nav aria-label="প্রধান মেনু" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = mounted && pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-[15px] font-semibold transition-colors",
                  active
                    ? "bg-primary-50 text-primary-800"
                    : "text-foreground/70 hover:bg-primary-50/60 hover:text-primary-800"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href={telLink(SITE.primaryPhone)}>
              <Phone aria-hidden="true" />
              {SITE.primaryPhoneDisplay}
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-primary-900 transition-colors hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="মোবাইল মেনু"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border/60 bg-white lg:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => {
                const active = mounted && pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                      active
                        ? "bg-primary-50 text-primary-800"
                        : "text-foreground/80 hover:bg-primary-50/60"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button asChild className="mt-3">
                <a href={telLink(SITE.primaryPhone)}>
                  <Phone aria-hidden="true" />
                  এখনই কল করুন — {SITE.primaryPhoneDisplay}
                </a>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
