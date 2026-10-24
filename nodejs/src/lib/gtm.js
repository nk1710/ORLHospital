// lib/gtm.js
// ─────────────────────────────────────────────────────────────
// Central place for all GTM/dataLayer interactions.
// Import { gtmPageview, gtmEvent } wherever you need tracking.
// ─────────────────────────────────────────────────────────────

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID; // e.g. G-XXXXXXX

// ── Base gtag function ────────────────────────────────────────
export function gtag() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

export function dataLayerPush(payload) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

// ── Virtual pageview ──────────────────────────────────────────
// Call this on every Next.js route change (see GTMProvider below).
export function gtmPageview(url) {
  gtag('config', GTM_ID, {
    page_path: url,
    page_title: document.title,
  });
}

// ── Generic event ─────────────────────────────────────────────
// Use for any custom interaction.
// e.g. gtmEvent("form_submit", { form_id: "appointment" })
export function gtmEvent(eventName, params = {}) {
  gtag('event', eventName, params);
}

// ── Pre-built events for this site ───────────────────────────
// Keeps event names consistent across the codebase.

export const GTMEvents = {
  // Appointment form
  formStart: (location, problem) =>
    gtmEvent("form_start", {
      form_id: "appointment",
      clinic_location: location,
      condition: problem,
    }),

  formSubmit: (location, problem, department) =>
    gtmEvent("form_submit", {
      form_id: "appointment",
      clinic_location: location,
      condition: problem,
      department,
    }),

  formError: (location, errorMsg) =>
    gtmEvent("form_error", {
      form_id: "appointment",
      clinic_location: location,
      error_message: errorMsg,
    }),

  // CTA clicks
  phoneClick: (location, source) =>
    gtmEvent("phone_click", {
      phone_number: "+91-9311449825",
      clinic_location: location,
      click_source: source, // "header" | "cta_block" | "footer"
    }),

  whatsappClick: (location) =>
    gtmEvent("whatsapp_click", {
      clinic_location: location,
    }),

  ctaClick: (label, destination) =>
    gtmEvent("cta_click", {
      cta_label: label,
      destination_url: destination,
    }),

  // SEO page tracking
  intentPageView: (location, problem, intent) =>
    gtmEvent("intent_page_view", {
      clinic_location: location,
      condition: problem,
      intent_type: intent, // "treatment" | "cost" | "best-doctor" etc.
    }),

  // FAQ interaction
  faqOpen: (question, problem) =>
    gtmEvent("faq_open", {
      faq_question: question,
      condition: problem,
    }),
};