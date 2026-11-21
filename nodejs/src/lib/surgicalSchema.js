// lib/surgicalSchema.js
// Standardized Google Rich Snippets Schema for Dr. (Prof.) Dhirendra Singh Kushwah & ORL Hospital

export const DOCTOR_PHYSICIAN_SCHEMA = {
  "@type": "Physician",
  "@id": "https://www.drdhirendrasinghkushwah.com/#physician",
  name: "Dr. (Prof.) Dhirendra Singh Kushwah",
  alternateName: "Dr. Dhirendra Singh Kushwah ENT Surgeon Delhi",
  jobTitle: "Senior ENT Surgeon & Professor (25+ Years Experience)",
  medicalSpecialty: "Otolaryngology",
  telephone: "+91-9311449825",
  priceRange: "₹₹",
  image: "https://www.drdhirendrasinghkushwah.com/images/gallery/11.webp",
  url: "https://www.drdhirendrasinghkushwah.com/",
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "MS (ENT), DNB, Senior Professor of Otolaryngology",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "742",
    reviewCount: "742",
  },
};

export const ORL_HOSPITAL_SCHEMA = {
  "@type": "Hospital",
  "@id": "https://www.drdhirendrasinghkushwah.com/#hospital",
  name: "ORL International Hospital & ENT Clinic",
  url: "https://www.drdhirendrasinghkushwah.com/",
  telephone: "+91-9311449825",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "J-1981, Near Market No 1, Below ICICI Bank, Bipin Chandra Pal Marg, CR Park",
    addressLocality: "New Delhi",
    postalCode: "110019",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "742",
    reviewCount: "742",
  },
};

export function buildSurgicalProcedureGraph({
  pageUrl,
  pageName,
  pageDesc,
  procedureName,
  alternateNames = [],
  bodyLocation,
  procedureDesc,
  indications = [],
  preparation,
  followup,
  faqs = [],
}) {
  const graph = [
    {
      "@type": "MedicalWebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageName,
      description: pageDesc,
      medicalAudience: {
        "@type": "MedicalAudience",
        audienceType: "Patient",
      },
      about: {
        "@id": `${pageUrl}#procedure`,
      },
    },
    {
      "@type": "SurgicalProcedure",
      "@id": `${pageUrl}#procedure`,
      name: procedureName,
      alternateName: alternateNames,
      description: procedureDesc,
      bodyLocation: bodyLocation,
      procedureType: "Surgical",
      status: "Daycare (Painless, Same-Day Discharge)",
      provider: {
        "@id": "https://www.drdhirendrasinghkushwah.com/#physician",
      },
      performer: {
        "@id": "https://www.drdhirendrasinghkushwah.com/#physician",
      },
      hospitalAffiliation: {
        "@id": "https://www.drdhirendrasinghkushwah.com/#hospital",
      },
      preparation: preparation || "Pre-op ENT evaluation, CT Scan / MRI or Audiometry report review.",
      followup: followup || "Same-day discharge with 24/7 post-operative follow-up and monitoring.",
      indication: indications,
    },
    DOCTOR_PHYSICIAN_SCHEMA,
    ORL_HOSPITAL_SCHEMA,
  ];

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: {
          "@type": "Answer",
          text: a,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
