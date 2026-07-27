"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { SITE, telLink } from "@/lib/constants";

/**
 * Sticky WhatsApp + Call buttons, visible after a short scroll.
 * The single biggest conversion driver for a local pharmacy.
 */
export function FloatingActions() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 z-50 flex flex-col gap-3"
        >
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="হোয়াটসঅ্যাপে ঔষধ অর্ডার করুন"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-card-hover transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring"
            />
            <MessageCircle className="relative h-7 w-7 text-white" aria-hidden="true" />
          </a>
          <a
            href={telLink(SITE.primaryPhone)}
            aria-label={`কল করুন ${SITE.primaryPhoneDisplay}`}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-card-hover transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Phone className="h-6 w-6 text-white" aria-hidden="true" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
