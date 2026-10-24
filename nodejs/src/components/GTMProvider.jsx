"use client";
// ─────────────────────────────────────────────────────────────
// components/GTMProvider.jsx
//
// Fires a virtual pageview on every Next.js client-side navigation.
// Uses usePathname() and window.location.search inside useEffect
// to guarantee 100% clean static prerendering with ZERO CSR bailout.
// ─────────────────────────────────────────────────────────────
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gtmPageview } from "@/lib/gtm";

export default function GTMProvider() {
  const pathname = usePathname();
  const prevUrl = useRef(null);

  useEffect(() => {
    const search = typeof window !== "undefined" ? window.location.search : "";
    const url = search ? `${pathname}${search}` : pathname;

    if (url === prevUrl.current) return;
    prevUrl.current = url;

    const timer = setTimeout(() => {
      gtmPageview(url);
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
