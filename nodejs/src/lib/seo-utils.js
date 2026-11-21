// ─────────────────────────────────────────────────────────────
// lib/seo-utils.js
// ─────────────────────────────────────────────────────────────
import { DOCTOR, LOCATIONS, PROBLEMS, INTENTS, COST_RANGES, FAQS } from "@/data/seo-data";

// ── Token interpolation ───────────────────────────────────────
function fill(template, location, problem, intent) {
  return template
    .replace(/{problem}/g, problem?.displayName ?? problem?.name ?? "")
    .replace(/{location}/g, location?.name ?? "")
    .replace(/{region}/g, location?.region ?? "")
    .replace(/{doctor}/g, DOCTOR.name)
    .replace(/{phone}/g, DOCTOR.phone)
    .replace(/{intent}/g, intent?.label ?? "");
}

// ── Lookup helpers ────────────────────────────────────────────
export function getLocation(slug) {
  return LOCATIONS.find((l) => l.slug === slug) ?? null;
}

export function getProblem(slug) {
  return PROBLEMS.find((p) => p.slug === slug) ?? null;
}

export function getIntent(slug) {
  return INTENTS[slug] ?? null;
}

// Returns all valid [location, problem, intent] combos for generateStaticParams.
// Filters out intents not listed in the problem's intentPages array.
export function getAllValidPaths() {
  const paths = [];
  for (const loc of LOCATIONS) {
    for (const prob of PROBLEMS) {
      // base problem page (no intent)
      paths.push({ location: loc.slug, problem: prob.slug });

      // intent-specific pages
      for (const intentSlug of prob.intentPages) {
        if (INTENTS[intentSlug]) {
          paths.push({ location: loc.slug, problem: prob.slug, intent: intentSlug });
        }
      }
    }
  }
  return paths;
}

// ── Metadata builder ─────────────────────────────────────────
// Call from generateMetadata() in each route segment.
export function buildMetadata({ location, problem, intent }) {
  const loc = getLocation(location);
  const prob = getLocation ? getProblem(problem) : null;
  const int = intent ? getIntent(intent) : null;

  if (!loc || !prob) return { title: "Page not found", robots: "noindex" };

  const canonicalPath = intent
    ? `/${loc.slug}/${prob.slug}/${int.slug}/`
    : `/${loc.slug}/${prob.slug}/`;

  const titlePattern = int
    ? int.metaTitlePattern
    : "Best {problem} Treatment in {location} | {doctor}";

  const descPattern = int
    ? int.metaDescPattern
    : "Consult {doctor}, Senior ENT Specialist (25+ Yrs Exp) for {problem} in {location}. Expert audiometry, stitchless ear surgery & advanced daycare care. Call {phone}.";

  return {
    title: fill(titlePattern, loc, prob, int),
    description: fill(descPattern, loc, prob, int),
    alternates: {
      canonical: `${DOCTOR.domain}${canonicalPath}`,
    },
    openGraph: {
      title: fill(titlePattern, loc, prob, int),
      description: fill(descPattern, loc, prob, int),
      url: `${DOCTOR.domain}${canonicalPath}`,
      siteName: `${DOCTOR.name} ENT Clinic`,
      locale: "en_IN",
      type: "website",
    },
    // noindex low-value combos (symptoms pages without a clinic in that location)
    robots:
      int?.bucket === "informational" && loc.slug === "delhi"
        ? "index, follow"
        : "index, follow",
  };
}

// ── H1 builder ────────────────────────────────────────────────
export function buildH1(location, problem, intent) {
  const loc = getLocation(location);
  const prob = getProblem(problem);
  const int = intent ? getIntent(intent) : null;

  const pattern = int
    ? int.h1Pattern
    : "{problem} Specialist in {location}";

  return fill(pattern, loc, prob, int);
}

// ── Schema builders ───────────────────────────────────────────

export function buildLocalBusinessSchema(location) {
  const loc = getLocation(location);
  if (!loc) return null;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${DOCTOR.name} – ${loc.name} ENT Clinic`,
    url: `${DOCTOR.domain}/clinics/${loc.clinicSlug}/`,
    telephone: DOCTOR.phone,
    email: DOCTOR.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.name,
      addressRegion: loc.region,
      addressCountry: "IN",
    },
    medicalSpecialty: "Otolaryngology",
    physician: {
      "@type": "Physician",
      name: DOCTOR.name,
      medicalSpecialty: "Otolaryngology",
    },
  };
}

export function buildMedicalConditionSchema(problem) {
  const prob = getProblem(problem);
  if (!prob) return null;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: prob.name,
    code: {
      "@type": "MedicalCode",
      codeValue: prob.icdCode,
      codingSystem: "ICD-10",
    },
    description: prob.shortDesc,
    alternateName: prob.synonyms,
  };
}

export function buildFAQSchema(problem, intent) {
  const faqs = getFAQs(problem, intent);
  if (!faqs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

// ── FAQ helper ────────────────────────────────────────────────
// Returns base FAQs + intent-specific FAQs merged. No duplicates.
export function getFAQs(problem, intent) {
  const all = FAQS[problem];
  if (!all) return [];
  const base = all.base ?? [];
  const extra = intent && all[intent] ? all[intent] : [];
  // deduplicate by question text
  const seen = new Set();
  return [...base, ...extra].filter(({ q }) => {
    if (seen.has(q)) return false;
    seen.add(q);
    return true;
  });
}

// ── Cost data helper ──────────────────────────────────────────
export function getCostData(problem) {
  return COST_RANGES[problem] ?? null;
}

// ── Internal linking helper ───────────────────────────────────
// Returns an array of { href, label } for the "related pages" section.
export function getInternalLinks(location, problem, intent) {
  const loc = getLocation(location);
  const prob = getProblem(problem);
  const int = intent ? getIntent(intent) : null;
  const links = [];

  // 1. Sibling intents for this problem + location
  const relatedIntentSlugs = int?.related ?? (prob?.intentPages?.slice(0, 3) ?? []);
  for (const slug of relatedIntentSlugs) {
    if (slug === intent) continue;
    const rel = getIntent(slug);
    if (rel) {
      links.push({
        href: `/${loc.slug}/${prob.slug}/${slug}/`,
        label: `${prob.displayName} ${rel.label} in ${loc.name}`,
        type: "sibling-intent",
      });
    }
  }

  // 2. Same intent in other locations (nearby clinics)
  for (const otherLoc of LOCATIONS) {
    if (otherLoc.slug === location) continue;
    const href = intent
      ? `/${otherLoc.slug}/${prob.slug}/${intent}/`
      : `/${otherLoc.slug}/${prob.slug}/`;
    links.push({
      href,
      label: `${prob.displayName} ${int?.label ?? "Specialist"} in ${otherLoc.name}`,
      type: "nearby-location",
    });
  }

  // 3. Parent page (base problem page for this location)
  if (intent) {
    links.push({
      href: `/${loc.slug}/${prob.slug}/`,
      label: `${prob.name} – Overview in ${loc.name}`,
      type: "parent",
    });
  }

  // 4. Clinic page
  links.push({
    href: `/clinics/${loc.clinicSlug}/`,
    label: `${loc.name} ENT Clinic – Directions & Hours`,
    type: "clinic",
  });

  return links;
}

// ── Validation ────────────────────────────────────────────────
// Call during build to detect bad combos before they go live.
export function validatePath(location, problem, intent) {
  const loc = getLocation(location);
  const prob = getProblem(problem);

  if (!loc) return { valid: false, reason: `Unknown location: ${location}` };
  if (!prob) return { valid: false, reason: `Unknown problem: ${problem}` };

  if (intent) {
    const int = getIntent(intent);
    if (!int) return { valid: false, reason: `Unknown intent: ${intent}` };
    if (!prob.intentPages.includes(intent)) {
      return {
        valid: false,
        reason: `Intent "${intent}" not listed for problem "${problem}". Add it to intentPages in seo-data.js.`,
      };
    }
  }

  return { valid: true };
}

// ── Content variation ─────────────────────────────────────────
// Returns a deterministic intro paragraph variant based on
// location + problem combo so no two pages share identical copy.
// Hashes the combo to pick from a pool of sentence structures.
function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

const INTRO_STRUCTURES = [
  (loc, prob) =>
    `If you are looking for reliable ${prob.name.toLowerCase()} care in ${loc.name}, ${DOCTOR.name} brings over 25 years of ENT expertise to every consultation. Patients from ${loc.nearbyAreas.join(", ")} and nearby areas regularly visit the ${loc.name} clinic for precise diagnosis and effective treatment.`,

  (loc, prob) =>
    `${loc.name} residents dealing with ${prob.name.toLowerCase()} can now access specialist-level ENT care close to home. ${DOCTOR.name} (${DOCTOR.credentials}) offers thorough evaluation and personalised treatment plans tailored to each patient's condition and lifestyle.`,

  (loc, prob) =>
    `${prob.name} is among the most common ENT conditions treated at the ${loc.name} clinic. ${DOCTOR.name} has successfully managed hundreds of cases across ${loc.region}, combining medical management with surgical expertise where needed.`,

  (loc, prob) =>
    `Getting expert help for ${prob.name.toLowerCase()} in ${loc.name} is straightforward at ${DOCTOR.name}'s clinic. Serving patients from ${loc.nearbyAreas[0]}, ${loc.nearbyAreas[1]}, and the wider ${loc.region} area, the clinic offers same-week appointments for new consultations.`,
];

export function getIntroVariant(location, problem) {
  const loc = getLocation(location);
  const prob = getProblem(problem);
  if (!loc || !prob) return "";
  const idx = hashCode(`${location}-${problem}`) % INTRO_STRUCTURES.length;
  return INTRO_STRUCTURES[idx](loc, prob);
}
