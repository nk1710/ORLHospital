// components/GTMScript.jsx
// ─────────────────────────────────────────────────────────────
// Renders the two GTM script snippets.
// Place <GTMScript /> in your root layout's <head> section.
// The noscript fallback goes right after <body> opens.
//
// Split into two exports so you can place each in the right spot:
//   <GTMScript />        → inside <head>
//   <GTMNoScript />      → first child of <body>
// ─────────────────────────────────────────────────────────────
import Script from "next/script";
import { GTM_ID } from "@/lib/gtm";

// Injected into <head> — initialises dataLayer before GTM loads
// so any dataLayerPush() calls before the container fires are queued.
export function GTMScript() {
  if (!GTM_ID) return null;

  return (
    <>
      {/* dataLayer init — must run before GTM container script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTM_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

export function GTMNoScript() {
  return null;
}