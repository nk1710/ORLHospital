export default function sitemap() {
  const baseUrl = "https://www.drdhirendrasinghkushwah.in";
  const now = new Date();

  // Core Static Pages
  const coreRoutes = [
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: "daily" },
    { url: `${baseUrl}/about/drdhirendrasinghkushwah`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/facilities`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${baseUrl}/our-branches`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/featuredblog`, priority: 0.8, changeFrequency: "daily" },
    { url: `${baseUrl}/gallery`, priority: 0.85, changeFrequency: "weekly" },
    { url: `${baseUrl}/faq`, priority: 0.8, changeFrequency: "weekly" },
  ];

  // 5 Hospital & Clinic Locations
  const locationRoutes = [
    "/location/jasola",
    "/location/cr-park",
    "/location/arjun-nagar",
    "/location/palwal",
    "/location/dhampur",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    priority: 0.95,
    changeFrequency: "weekly",
  }));

  // Conditions We Treat
  const conditionRoutes = [
    "/conditions",
    "/conditions/ear-hearing",
    "/conditions/nose-sinus",
    "/conditions/voice-throat-disorders-treatment-delhi",
    "/conditions/vertigo",
    "/conditions/paediatric-ent",
    "/conditions/sinusitis",
    "/conditions/hearingloss",
    "/conditions/tonsillitis",
    "/conditions/allergies",
    "/conditions/ear-infections",
    "/conditions/nasal-blockage",
    "/conditions/skull-base",
    "/conditions/throat-voice",
    "/conditions/we-care",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    priority: 0.85,
    changeFrequency: "monthly",
  }));

  // Surgical Specialties & Procedures
  const specialityRoutes = [
    "/specialities",
    "/specialities/otology",
    "/specialities/tympanoplasty-surgery",
    "/specialities/ossiculoplasty-surgery",
    "/specialities/mastoidectomy",
    "/specialities/tonsillectomy-surgery",
    "/specialities/stapedotomy-surgery",
    "/specialities/cochlear-hearing-implants",
    "/specialities/skull-base-surgery",
    "/specialities/septoplasty",
    "/specialities/pediatric-ent",
    "/specialities/head-neck-surgery",
    "/specialities/laryngology",
    "/specialities/neuro-otology",
    "/specialities/nose-sinus-rhinology",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    priority: 0.9,
    changeFrequency: "weekly",
  }));

  const allUrls = [
    ...coreRoutes,
    ...locationRoutes,
    ...conditionRoutes,
    ...specialityRoutes,
  ];

  return allUrls.map((entry) => ({
    url: entry.url,
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}

