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
import { GTM_ID } from "@/lib/gtm";

// Injected into <head> — renders standard Google tag scripts into raw SSR HTML
// so Google Tag Assistant and connection crawlers detect it immediately.
export function GTMScript() {
  const tagId = GTM_ID || "G-T33BSPH0Z0";

  return (
    <>
      {/* Google tag (gtag.js) */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`}
      />
      <script
        id="google-tag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${tagId}');
          `,
        }}
      />
    </>
  );
}

export function GTMNoScript() {
  return null;
}