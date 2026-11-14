/**
 * Dr. (Prof.) Dhirendra Singh Kushwah ENT — Autonomous Daily SEO Engine
 * Runs completely standalone in GitHub Actions or Local Environment (Zero Dependencies)
 */

const fs = require("fs");
const path = require("path");

let localKey = "";
try {
  const toolConfig = require("c:/Users/PC/Desktop/Tool/config.js");
  localKey = toolConfig.geminiApiKey || "";
} catch (e) {}

const CONFIG = {
  domain: "https://www.drdhirendrasinghkushwah.in",
  blogsPath: path.join(__dirname, "..", "nodejs", "data", "blogs.json"),
  apiKey: process.env.GEMINI_API_KEY || localKey,
  model: "gemini-3.1-flash-lite",
  fallbackModel: "gemini-3-flash-preview",
  indexNowKey: "e3d7a82c4f194582b810d738fca54192",
  doctorName: "Dr. (Prof.) Dhirendra Singh Kushwah"
};

// Strategic Keyword Matrix (Domestic OPD + Surgery + Medical Tourism)
const TOPIC_MATRIX = [
  {
    keyword: "Best ENT Doctor Near Me in South Delhi",
    category: "General & Emergency ENT",
    target: "India",
    titleSuggestion: "Best ENT Doctor Near Me in South Delhi: When to Consult an ENT Specialist",
    hubLink: "/location/jasola",
    hubAnchor: "Best ENT Doctor near Jasola & South Delhi"
  },
  {
    keyword: "Best ENT Doctor in CR Park South Delhi",
    category: "Ear Nose Throat Clinic",
    target: "India",
    titleSuggestion: "ENT Clinic in CR Park: Advanced Ear, Sinus & Throat Care by Dr. Kushwah",
    hubLink: "/location/cr-park",
    hubAnchor: "Best ENT Doctor in CR Park South Delhi"
  },
  {
    keyword: "Best ENT Doctor in Safdarjung Enclave",
    category: "Specialist ENT",
    target: "India",
    titleSuggestion: "Top ENT Surgeon in Safdarjung Enclave & Arjun Nagar: Complete Guide",
    hubLink: "/location/arjun-nagar",
    hubAnchor: "Best ENT Doctor in Safdarjung Enclave"
  },
  {
    keyword: "Best ENT Doctor in New Delhi for Ear Surgery",
    category: "Ear Surgery (Otology)",
    target: "India",
    titleSuggestion: "How to Choose the Best ENT Doctor in New Delhi for Ear & Hearing Surgery",
    hubLink: "/specialities/tympanoplasty-surgery",
    hubAnchor: "Stitchless Ear Surgery in Delhi"
  },
  {
    keyword: "Chronic Sinusitis & FESS Surgery Delhi",
    category: "Nose & Sinus (Rhinology)",
    target: "India",
    titleSuggestion: "Chronic Sinusitis & Headache Relief: Advanced FESS Surgery in South Delhi",
    hubLink: "/location/jasola",
    hubAnchor: "Sinus Specialist in Jasola"
  },
  {
    keyword: "Coblation Tonsillectomy for Kids Delhi",
    category: "Throat & Pediatric ENT",
    target: "India",
    titleSuggestion: "Painless Coblation Tonsillectomy for Children: Safe Daycare Surgery in Delhi",
    hubLink: "/specialities/tonsillectomy-surgery",
    hubAnchor: "Coblation Tonsillectomy in Delhi"
  },
  {
    keyword: "Deviated Septum & Packless Septoplasty Delhi",
    category: "Nose & Sinus (Rhinology)",
    target: "India",
    titleSuggestion: "Packless Septoplasty in Delhi: Breath Easily Without Painful Nasal Packs",
    hubLink: "/specialities/septoplasty",
    hubAnchor: "Deviated Septum Surgery Specialist Delhi"
  },
  {
    keyword: "Vertigo & Dizziness Treatment in Delhi",
    category: "Neurotology & Balance",
    target: "India",
    titleSuggestion: "Instant Vertigo & BPPV Relief: How Canalith Repositioning Cures Dizziness",
    hubLink: "/location/cr-park",
    hubAnchor: "Vertigo Specialist Doctor in South Delhi"
  },
  {
    keyword: "Cochlear Implant Surgery Cost in India for Foreign Patients",
    category: "Cochlear & Bionic Hearing",
    target: "International",
    titleSuggestion: "Affordable Cochlear Implant Surgery in India: Complete Guide for Global Families",
    hubLink: "/specialities/cochlear-hearing-implants",
    hubAnchor: "Cochlear Implant Surgery in India"
  },
  {
    keyword: "Microscopic Stapedotomy for Otosclerosis Delhi",
    category: "Ear Surgery (Otology)",
    target: "India",
    titleSuggestion: "Otosclerosis Hearing Loss: How Microscopic Stapedotomy Restores Hearing",
    hubLink: "/specialities/stapedotomy-surgery",
    hubAnchor: "Stapedotomy Surgery in Delhi NCR"
  }
];

async function callGemini(prompt, model = CONFIG.model) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${CONFIG.apiKey}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 8192 }
    })
  });

  if (!response.ok) {
    if (response.status === 404 && model !== CONFIG.fallbackModel) {
      console.warn(`Model ${model} unavailable, switching to fallback ${CONFIG.fallbackModel}`);
      return callGemini(prompt, CONFIG.fallbackModel);
    }
    const errBody = await response.text();
    throw new Error(`Gemini API Error (${response.status}): ${errBody}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.find(p => p.text)?.text;
  if (!text) throw new Error("Empty response from Gemini API");
  return text;
}

function selectNextTopic(existingBlogs) {
  const existingTitles = existingBlogs.map(b => b.title.toLowerCase());
  for (const topic of TOPIC_MATRIX) {
    const kParts = topic.keyword.toLowerCase().split(" ");
    const matches = existingTitles.filter(t => t.includes(kParts[0]) && t.includes(kParts[1]));
    if (matches.length === 0) {
      return topic;
    }
  }
  // If all covered, return random topic with fresh perspective
  return TOPIC_MATRIX[Math.floor(Math.random() * TOPIC_MATRIX.length)];
}

function chooseImage(category, target) {
  if (target === "International") {
    return "/images/DrDhirendraSinghKushwahWithInternationalPatient.jpeg";
  }
  const cat = (category || "").toLowerCase();
  if (cat.includes("ear") || cat.includes("hearing") || cat.includes("otology")) return "/images/blog2.jpg";
  if (cat.includes("sinus") || cat.includes("nose")) return "/images/blog3.jpg";
  if (cat.includes("throat") || cat.includes("tonsil")) return "/images/blog4.jpg";
  if (cat.includes("vertigo")) return "/images/vertigo.jpg";
  return "/images/DrDhirendraSinghKushwahWithPatient.jpeg";
}

async function pingIndexNow(urlList) {
  try {
    const payload = {
      host: "www.drdhirendrasinghkushwah.in",
      key: CONFIG.indexNowKey,
      keyLocation: `${CONFIG.domain}/${CONFIG.indexNowKey}.txt`,
      urlList: Array.isArray(urlList) ? urlList : [urlList]
    };
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload)
    });
    console.log(`IndexNow Ping Status: ${res.status}`);
  } catch (err) {
    console.warn("IndexNow ping failed:", err.message);
  }
}

async function runAutonomousDailySEO() {
  console.log(`=======================================================`);
  console.log(`🚀 Starting Cloud Autonomous SEO Auto-Pilot...`);
  console.log(`⏰ Time: ${new Date().toISOString()}`);
  console.log(`=======================================================`);

  // 1. Read existing blogs
  const raw = fs.readFileSync(CONFIG.blogsPath, "utf-8");
  const blogs = JSON.parse(raw);
  const nextTopic = selectNextTopic(blogs);

  console.log(`📌 Chosen Topic: "${nextTopic.titleSuggestion}"`);
  console.log(`🎯 Target Keyword: "${nextTopic.keyword}" (${nextTopic.target})`);

  // 2. Build Doctor E-E-A-T Prompt
  const prompt = `
You are an expert Medical SEO Copywriter writing for Dr. (Prof.) Dhirendra Singh Kushwah.
Doctor Profile:
- Senior Consultant ENT, Head & Neck Surgeon with 25+ years of clinical and surgical experience.
- Director at ORL Hospital & ENT Centers, Delhi, India.
- Clinics located across South Delhi, Jasola, CR Park, Arjun Nagar (Safdarjung Enclave), Palwal, and Dhampur.
- Treats domestic patients (Delhi-NCR) and international patients from Middle East, Africa, UK, and SAARC.

Target Keyword: "${nextTopic.keyword}"
Primary Topic: "${nextTopic.titleSuggestion}"
Category: "${nextTopic.category}"
Target Audience: "${nextTopic.target}"
Required Internal Link: Point naturally to "${nextTopic.hubLink}" using anchor text "${nextTopic.hubAnchor}".

Generate a comprehensive, doctor-grade medical article in JSON format ONLY:
{
  "title": "Compelling H1 Title (under 65 chars)",
  "meta_title": "SEO Meta Title with primary keyword (under 60 chars)",
  "meta_description": "Click-worthy meta description with CTA (140-155 chars)",
  "slug": "url-friendly-slug-with-hyphens",
  "excerpt": "2-sentence summary hook explaining the condition and Dr. Kushwah's modern minimally invasive treatment.",
  "content": "Full HTML content with <h2>, <h3>, <p>, <ul>, <li>, internal link, and 3-4 FAQs. Include medical disclaimer at end."
}
Return raw JSON ONLY. No markdown code blocks.
`;

  console.log(`✍️ Generating Article with Gemini AI...`);
  const rawText = await callGemini(prompt);
  let cleaned = rawText.trim();
  if (cleaned.startsWith("```json")) cleaned = cleaned.replace(/^```json/, "").replace(/```$/, "").trim();
  else if (cleaned.startsWith("```")) cleaned = cleaned.replace(/^```/, "").replace(/```$/, "").trim();

  const article = JSON.parse(cleaned);

  // 3. Ensure Unique ID & Slug
  const maxId = blogs.reduce((max, b) => Math.max(max, b.id || 0), 0);
  const newId = maxId + 1;
  let slug = (article.slug || nextTopic.keyword.toLowerCase().replace(/[^a-z0-9]+/g, "-")).replace(/^-+|-+$/g, "");
  if (blogs.some(b => b.slug === slug)) {
    slug = `${slug}-${Date.now().toString().slice(-4)}`;
  }

  const nowIso = new Date().toISOString();
  const newPost = {
    id: newId,
    title: article.title,
    meta_title: article.meta_title || article.title,
    meta_description: article.meta_description || article.excerpt,
    slug: slug,
    excerpt: article.excerpt,
    featured_image: chooseImage(nextTopic.category, nextTopic.target),
    category: nextTopic.category,
    status: "published",
    featured: false,
    author: CONFIG.doctorName,
    author_name: CONFIG.doctorName,
    created_at: nowIso,
    updated_at: nowIso,
    content: article.content
  };

  blogs.unshift(newPost);
  fs.writeFileSync(CONFIG.blogsPath, JSON.stringify(blogs, null, 2), "utf-8");

  const fullUrl = `${CONFIG.domain}/blog/${newPost.slug}`;
  console.log(`✅ Successfully published article: "${newPost.title}"`);
  console.log(`🌐 Live URL: ${fullUrl}`);

  // 4. Ping IndexNow & Google
  await pingIndexNow([fullUrl, `${CONFIG.domain}/sitemap.xml`]);

  console.log(`🎉 Daily SEO Cycle Completed Successfully!`);
}

runAutonomousDailySEO()
  .then(() => process.exit(0))
  .catch(err => {
    console.error("❌ Fatal Error in Daily SEO Auto-Pilot:", err);
    process.exit(1);
  });
