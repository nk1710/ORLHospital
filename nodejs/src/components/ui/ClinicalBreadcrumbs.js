import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function ClinicalBreadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  const siteUrl = "https://www.drdhirendrasinghkushwah.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const fullUrl = item.href
        ? item.href.startsWith("http")
          ? item.href
          : `${siteUrl}${item.href.startsWith("/") ? "" : "/"}${item.href}`
        : siteUrl;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: fullUrl,
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className="mb-4 flex items-center text-xs sm:text-sm text-slate-500 font-medium"
      >
        <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="inline-flex items-center gap-1.5 sm:gap-2">
                {index === 0 ? (
                  <Link
                    href={item.href || "/"}
                    className="inline-flex items-center gap-1 text-slate-600 hover:text-teal-700 transition"
                  >
                    <Home className="h-3.5 w-3.5 text-slate-400" />
                    <span>{item.label}</span>
                  </Link>
                ) : isLast || !item.href ? (
                  <span
                    aria-current="page"
                    className="text-slate-800 font-semibold truncate max-w-[220px] sm:max-w-md"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-teal-700 transition"
                  >
                    {item.label}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

