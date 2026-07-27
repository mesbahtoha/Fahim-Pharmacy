"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { toBanglaDigits } from "@/lib/utils";

interface CounterProps {
  /** Target value to count up to. */
  value: number;
  suffix?: string;
  duration?: number;
}

/** Number counter that animates from 0 when scrolled into view, rendered in Bengali numerals. */
export function Counter({ value, suffix = "", duration = 1.8 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      // ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {toBanglaDigits(display)}
      {suffix}
    </span>
  );
}
