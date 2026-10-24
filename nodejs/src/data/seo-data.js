// ─────────────────────────────────────────────────────────────
// lib/seo-data.js
// Single source of truth for all programmatic SEO combinations.
// Edit ONLY this file to add new locations, problems, or intents.
// ─────────────────────────────────────────────────────────────

export const DOCTOR = {
  name: "Dr. Dhirendra Singh Kushwah",
  credentials: "MBBS, MS | ENT Specialist",
  tagline: "Excellence, Noble, Trustworthy",
  phone: "+919311449825",
  email: "drdhirendrasinghent@gmail.com",
  domain: process.env.NEXT_PUBLIC_SITE_URL,
};

// ── Locations ────────────────────────────────────────────────
// slug        → URL segment  (lowercase, hyphenated)
// name        → display name
// region      → broader area (for schema + copy variation)
// clinicSlug  → maps to /clinics/[clinicSlug] page
// nearbyAreas → used in "also serves" copy to add unique content
export const LOCATIONS = [
  {
    slug: "jasola",
    name: "Jasola",
    region: "South Delhi",
    clinicSlug: "jasola",
    nearbyAreas: ["Sarita Vihar", "Okhla", "Madanpur Khadar"],
    mapUrl: "https://maps.google.com/?q=ORL+Jasola+Clinic",
  },
  {
    slug: "arjun-nagar",
    name: "Arjun Nagar",
    region: "South Delhi",
    clinicSlug: "arjun-nagar",
    nearbyAreas: ["Safdarjung Enclave", "Green Park", "Hauz Khas"],
    mapUrl: "https://maps.google.com/?q=ORL+Arjun+Nagar+Clinic",
  },
  {
    slug: "cr-park",
    name: "CR Park",
    region: "South Delhi",
    clinicSlug: "cr-park",
    nearbyAreas: ["Kalkaji", "Greater Kailash", "Govindpuri"],
    mapUrl: "https://maps.google.com/?q=ORL+CR+Park+Clinic",
  },
  {
    slug: "palwal",
    name: "Palwal",
    region: "Haryana NCR",
    clinicSlug: "palwal",
    nearbyAreas: ["Hodal", "Hathin", "Ballabhgarh"],
    mapUrl: "https://maps.google.com/?q=ORL+Palwal+Clinic",
  },
  {
    slug: "delhi",
    name: "Delhi",
    region: "Delhi NCR",
    clinicSlug: "jasola",    // main Delhi page resolves to Jasola as flagship
    nearbyAreas: ["South Delhi", "Central Delhi", "New Delhi"],
    mapUrl: "https://maps.google.com/?q=Dr+Kushwah+ENT+Delhi",
  },
];

// ── Problems (conditions) ─────────────────────────────────────
// Each problem maps to one base URL: /[location]/[problem]/
// intentPages lists which intent pages are worth generating for this problem.
export const PROBLEMS = [
  {
    slug: "sinusitis",
    name: "Sinusitis",
    displayName: "Sinus",
    icdCode: "J32",
    intentPages: ["treatment", "cost", "best-doctor", "symptoms"],
    shortDesc: "chronic or acute sinus infection and inflammation",
    synonyms: ["sinus infection", "sinus pain", "blocked sinus", "nasal congestion"],
  },
  {
    slug: "hearing-loss",
    name: "Hearing Loss",
    displayName: "Hearing Loss",
    icdCode: "H91",
    intentPages: ["treatment", "cost", "best-doctor", "hearing-aids"],
    shortDesc: "partial or complete loss of hearing in one or both ears",
    synonyms: ["deafness", "poor hearing", "audiological issues", "ear problem"],
  },
  {
    slug: "tonsillitis",
    name: "Tonsillitis",
    displayName: "Tonsils",
    icdCode: "J35",
    intentPages: ["treatment", "cost", "best-doctor", "surgery"],
    shortDesc: "inflammation of the tonsils, often causing sore throat and fever",
    synonyms: ["swollen tonsils", "throat infection", "tonsil pain"],
  },
  {
    slug: "nasal-polyps",
    name: "Nasal Polyps",
    displayName: "Nasal Polyps",
    icdCode: "J33",
    intentPages: ["treatment", "cost", "best-doctor", "surgery"],
    shortDesc: "non-cancerous growths in the nasal passages or sinuses",
    synonyms: ["nose polyp", "nasal growth", "FESS"],
  },
  {
    slug: "vertigo",
    name: "Vertigo & Dizziness",
    displayName: "Vertigo",
    icdCode: "H81",
    intentPages: ["treatment", "cost", "best-doctor"],
    shortDesc: "dizziness and balance disorders originating in the inner ear",
    synonyms: ["dizziness", "BPPV", "balance disorder", "spinning sensation"],
  },
];

// ── Intents ───────────────────────────────────────────────────
// bucket: informational | commercial | transactional
// metaTitlePattern: use {problem}, {location}, {doctor} tokens
export const INTENTS = {
  treatment: {
    slug: "treatment",
    bucket: "commercial",
    label: "Treatment",
    metaTitlePattern: "{problem} Treatment in {location} | {doctor}",
    metaDescPattern:
      "Get expert {problem} treatment in {location}. {doctor} offers advanced ENT care. Call {phone} to book.",
    h1Pattern: "{problem} Treatment in {location}",
    // Related intents Google might also associate — used for internal linking
    related: ["cost", "best-doctor"],
  },
  cost: {
    slug: "cost",
    bucket: "commercial",
    label: "Cost & Fees",
    metaTitlePattern: "{problem} Treatment Cost in {location} | {doctor}",
    metaDescPattern:
      "Know the cost of {problem} treatment in {location}. Transparent fee structure from {doctor}, MS ENT Specialist.",
    h1Pattern: "{problem} Treatment Cost in {location}",
    related: ["treatment", "best-doctor"],
  },
  "best-doctor": {
    slug: "best-doctor",
    bucket: "transactional",
    label: "Best Doctor",
    metaTitlePattern: "Best ENT Doctor for {problem} in {location} | {doctor}",
    metaDescPattern:
      "Looking for the best ENT specialist for {problem} in {location}? {doctor}, MS ENT with 25+ years experience.",
    h1Pattern: "Best ENT Specialist for {problem} in {location}",
    related: ["treatment", "cost"],
  },
  symptoms: {
    slug: "symptoms",
    bucket: "informational",
    label: "Symptoms",
    metaTitlePattern: "{problem} Symptoms & Causes in {location} | {doctor}",
    metaDescPattern:
      "Understand {problem} symptoms, causes and when to see a doctor. Expert ENT advice from {doctor} in {location}.",
    h1Pattern: "{problem} – Symptoms, Causes & When to See a Doctor",
    related: ["treatment", "best-doctor"],
  },
  surgery: {
    slug: "surgery",
    bucket: "commercial",
    label: "Surgery",
    metaTitlePattern: "{problem} Surgery in {location} | {doctor}",
    metaDescPattern:
      "{problem} surgery by {doctor}, MS ENT Specialist in {location}. Safe, minimally invasive procedures.",
    h1Pattern: "{problem} Surgery in {location} – What to Expect",
    related: ["cost", "best-doctor"],
  },
  "hearing-aids": {
    slug: "hearing-aids",
    bucket: "commercial",
    label: "Hearing Aids",
    metaTitlePattern: "Hearing Aid Fitting & Cost in {location} | {doctor}",
    metaDescPattern:
      "Get hearing aid consultation and fitting in {location} by {doctor}. All major brands, all budgets.",
    h1Pattern: "Hearing Aid Fitting in {location} – Types, Brands & Cost",
    related: ["treatment", "cost"],
  },
};

// ── Cost ranges (used to avoid thin content on /cost pages) ──
// Ranges are estimates — update with real figures.
export const COST_RANGES = {
  sinusitis: { low: 500, high: 2500, surgery: "15,000–40,000", currency: "₹" },
  "hearing-loss": { low: 800, high: 3000, aids: "8,000–1,20,000", currency: "₹" },
  tonsillitis: { low: 500, high: 2000, surgery: "20,000–50,000", currency: "₹" },
  "nasal-polyps": { low: 600, high: 2500, surgery: "18,000–45,000", currency: "₹" },
  vertigo: { low: 500, high: 2000, surgery: null, currency: "₹" },
};

// ── FAQs ──────────────────────────────────────────────────────
// Each problem has a base FAQ set. Intents override/extend with targeted Qs.
// Used for both FAQ schema and rendered content.
export const FAQS = {
  sinusitis: {
    base: [
      {
        q: "What is sinusitis and what causes it?",
        a: "Sinusitis is inflammation of the sinuses, often caused by viral infections, allergies, nasal polyps, or a deviated nasal septum. It can be acute (less than 4 weeks) or chronic (more than 12 weeks).",
      },
      {
        q: "Can sinusitis be cured without surgery?",
        a: "Yes, most cases of acute sinusitis resolve with medication — decongestants, nasal saline rinses, antibiotics (if bacterial), and antihistamines for allergy-related cases. Surgery is recommended only for chronic or recurrent sinusitis that does not respond to medical management.",
      },
      {
        q: "How long does sinus treatment take to show results?",
        a: "Acute sinusitis typically improves within 7–14 days with proper medication. Chronic sinusitis may require 4–8 weeks of medical treatment before surgery is considered.",
      },
    ],
    cost: [
      {
        q: "What is the cost of sinus treatment in Delhi?",
        a: "Consultation fees for sinus treatment typically range from ₹500–₹2,500. Sinus surgery (FESS) in Delhi costs approximately ₹15,000–₹40,000 depending on the extent of disease and the facility.",
      },
      {
        q: "Does insurance cover sinus surgery?",
        a: "Yes, most health insurance policies in India cover sinus surgery under ENT procedures. Pre-authorisation from your insurer is recommended before scheduling surgery.",
      },
    ],
    treatment: [
      {
        q: "What are the treatment options for chronic sinusitis?",
        a: "Treatment ranges from nasal saline irrigation and steroid sprays to antibiotics, oral steroids, and Functional Endoscopic Sinus Surgery (FESS). The right option depends on the severity and underlying cause.",
      },
    ],
    "best-doctor": [
      {
        q: "How do I choose the best ENT doctor for sinusitis?",
        a: "Look for an ENT with post-graduate MS qualification, experience in endoscopic sinus surgery, and good patient reviews. Dr. Kushwah holds an MS in ENT and has over 25 years of clinical experience.",
      },
    ],
  },
  "hearing-loss": {
    base: [
      {
        q: "What are the types of hearing loss?",
        a: "Hearing loss is classified as conductive (outer/middle ear problem), sensorineural (inner ear or nerve damage), or mixed. Identifying the type is essential to choosing the right treatment.",
      },
      {
        q: "Can hearing loss be reversed?",
        a: "Conductive hearing loss is often treatable with medication or surgery. Sensorineural hearing loss is usually permanent, but hearing aids or cochlear implants can significantly improve quality of life.",
      },
    ],
    cost: [
      {
        q: "How much do hearing aids cost in Delhi?",
        a: "Hearing aids range from ₹8,000 for basic BTE models to ₹1,20,000+ for premium invisible-in-canal (IIC) digital aids. The right device depends on the degree of loss and your lifestyle.",
      },
    ],
    "hearing-aids": [
      {
        q: "Which hearing aid brands are available at the clinic?",
        a: "We offer fittings for all major brands including Phonak, Oticon, Signia, Starkey, and Resound. Each brand is recommended based on your audiogram results and daily needs.",
      },
      {
        q: "Is a prescription needed to buy a hearing aid?",
        a: "An audiological assessment and fitting by a qualified ENT or audiologist is strongly recommended to ensure the device is properly calibrated to your hearing profile.",
      },
    ],
  },
  tonsillitis: {
    base: [
      {
        q: "When is tonsillectomy (tonsil removal) recommended?",
        a: "Tonsillectomy is recommended when tonsillitis recurs 7 or more times in a year, or 5 times per year for two consecutive years, or if it causes complications like breathing obstruction during sleep.",
      },
      {
        q: "How long is recovery after tonsil surgery?",
        a: "Most adults recover within 10–14 days. Children typically recover in 7–10 days. A soft or liquid diet is recommended for the first week.",
      },
    ],
    cost: [
      {
        q: "What does tonsillectomy surgery cost in Delhi?",
        a: "Tonsillectomy in Delhi typically costs between ₹20,000–₹50,000 including surgeon's fee, anaesthesia, and one-night hospital stay. Insurance coverage is widely available.",
      },
    ],
  },
  "nasal-polyps": {
    base: [
      {
        q: "What causes nasal polyps?",
        a: "Nasal polyps are linked to chronic inflammation from asthma, allergies, recurring sinus infections, aspirin sensitivity, or certain immune disorders. They are more common in adults.",
      },
      {
        q: "Will nasal polyps come back after removal?",
        a: "Polyps can recur, especially if the underlying inflammation is not controlled. Post-surgical treatment with nasal steroid sprays and regular follow-up significantly reduces recurrence rates.",
      },
    ],
    cost: [
      {
        q: "How much does nasal polyp surgery cost?",
        a: "FESS for nasal polyps in Delhi costs approximately ₹18,000–₹45,000. The exact cost depends on the size and extent of the polyps and whether the procedure is done under local or general anaesthesia.",
      },
    ],
  },
  vertigo: {
    base: [
      {
        q: "What is BPPV and how is it treated?",
        a: "Benign Paroxysmal Positional Vertigo (BPPV) is the most common type of vertigo, caused by tiny calcium crystals dislodging in the inner ear. It is treated with the Epley manoeuvre — a simple, non-surgical repositioning technique.",
      },
      {
        q: "Is vertigo dangerous?",
        a: "Vertigo itself is not dangerous, but it can increase fall risk, particularly in the elderly. It is important to get a proper diagnosis to rule out rare central causes such as a cerebellar lesion.",
      },
    ],
    cost: [
      {
        q: "What does vertigo treatment cost?",
        a: "Diagnosis and initial treatment (Epley manoeuvre) for BPPV typically costs ₹500–₹2,000. Vestibular rehabilitation therapy, if required, may cost ₹1,500–₹4,000 per session.",
      },
    ],
  },
};