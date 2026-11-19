import React from "react";
import Link from "next/link";
import {
  Award,
  Globe2,
  Heart,
  Microscope,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import GalleryClient from "./GalleryClient";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.com/gallery";

  return {
    title:
      "Clinical Gallery & Global Moments | Dr. (Prof.) Dhirendra Singh Kushwah ENT Surgeon Delhi",
    description:
      "Explore the clinical gallery of Dr. (Prof.) Dhirendra Singh Kushwah: advanced ear & skull base surgeries in laminar OT, international medical tourism patients, global academic conferences, and patient recovery stories in New Delhi.",
    keywords: [
      "Dr Dhirendra Singh Kushwah gallery",
      "ENT surgery OT photos Delhi",
      "International patient ENT surgery India",
      "Micro ear surgery gallery",
      "Cochlear implant surgery photos",
      "FESS sinus surgery Delhi",
      "ORL International hospital facilities",
      "ENT specialist clinical moments",
    ],
    authors: [{ name: "Dr. (Prof.) Dhirendra Singh Kushwah" }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title:
        "Clinical Gallery & Global Moments | Dr. (Prof.) Dhirendra Singh Kushwah",
      description:
        "Real moments of surgical precision in laminar OT, international medical tourism patients, and global academic fellowships by Senior ENT Surgeon Dr. Dhirendra Singh Kushwah.",
      url,
      siteName: "Dr. (Prof.) Dhirendra Singh Kushwah - Senior ENT Surgeon",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "https://www.drdhirendrasinghkushwah.com/images/clinical-moments/dr-dhirendra-kushwah-ent-surgery-operation-theater-01.webp",
          width: 1200,
          height: 800,
          alt: "Dr. (Prof.) Dhirendra Singh Kushwah in Operation Theater",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Clinical Gallery | Dr. (Prof.) Dhirendra Singh Kushwah",
      description:
        "Advanced surgical procedures, international patient care, and academic milestones in Delhi NCR.",
    },
    robots: {
      index: true,
      follow: true,
    },
    category: "healthcare",
  };
}

export default function GalleryPage() {
  const pageUrl = "https://www.drdhirendrasinghkushwah.com/gallery";

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.drdhirendrasinghkushwah.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Clinical Moments & Gallery",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ImageGallery",
        "@id": `${pageUrl}#gallery`,
        name: "Dr. (Prof.) Dhirendra Singh Kushwah - Clinical Moments & Surgical Gallery",
        description:
          "Photographic documentation of advanced ENT microsurgery, international patient care, hospital facilities, and academic surgical conferences.",
        url: pageUrl,
        publisher: {
          "@type": "Physician",
          name: "Dr. (Prof.) Dhirendra Singh Kushwah",
          medicalSpecialty: "Otolaryngology",
          url: "https://www.drdhirendrasinghkushwah.com/",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ────────────────── HERO BANNER ────────────────── */}
      <section
        className="relative bg-[#021f1a] text-white pt-14 pb-16 px-4 sm:px-6 lg:px-8 border-b border-teal-950 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #021f1a 0%, #053b30 45%, #084c42 80%, #02231b 100%)",
        }}
      >
        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-6 font-semibold" aria-label="Breadcrumb">
            <Link href="/" className="text-teal-300 hover:text-white transition underline underline-offset-4 font-medium">
              Home
            </Link>
            <span className="text-teal-400 font-bold">/</span>
            <span className="text-white font-bold bg-teal-950/80 px-2.5 py-0.5 rounded border border-teal-700/60 shadow-xs">Moments &amp; Gallery</span>
          </nav>

          <div className="max-w-4xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-teal-400/80 text-teal-200 text-xs font-bold mb-4 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              <span className="tracking-wide">Surgical Precision &middot; Global Trust &middot; Patient Care</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-sm">
              Clinical Excellence &amp; Global Moments
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-100 leading-relaxed font-normal max-w-3xl">
              Authentic visual documentation of advanced surgical procedures in laminar airflow operating theatres, global medical tourism patients, academic surgical masterclasses, and compassionate patient recoveries led by <strong className="text-white font-bold bg-teal-950/80 px-2 py-0.5 rounded border border-teal-500/40">Dr. (Prof.) Dhirendra Singh Kushwah</strong> across 25+ years of clinical service.
            </p>

            {/* Key Clinical Metric Badges */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs font-semibold">
              <div className="p-3.5 rounded-xl bg-slate-900/95 border border-teal-500/50 shadow-md flex items-center gap-3">
                <div className="p-2 rounded-lg bg-teal-950 text-teal-300 shrink-0 border border-teal-800/60">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-base font-extrabold text-white">15,000+</p>
                  <p className="text-[11px] text-teal-300 font-medium">Surgeries Performed</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/95 border border-teal-500/50 shadow-md flex items-center gap-3">
                <div className="p-2 rounded-lg bg-teal-950 text-teal-300 shrink-0 border border-teal-800/60">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-base font-extrabold text-white">20+ Countries</p>
                  <p className="text-[11px] text-teal-300 font-medium">International Patients</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/95 border border-teal-500/50 shadow-md flex items-center gap-3">
                <div className="p-2 rounded-lg bg-teal-950 text-teal-300 shrink-0 border border-teal-800/60">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-base font-extrabold text-white">25+ Years</p>
                  <p className="text-[11px] text-teal-300 font-medium">Professor &amp; Senior ENT</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/95 border border-teal-500/50 shadow-md flex items-center gap-3">
                <div className="p-2 rounded-lg bg-teal-950 text-teal-300 shrink-0 border border-teal-800/60">
                  <Microscope className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-base font-extrabold text-white">German Zeiss</p>
                  <p className="text-[11px] text-teal-300 font-medium">Precision Microscopy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── CLIENT MEDIA INTERACTIVE COMPONENT ────────────────── */}
      <GalleryClient />
    </>
  );
}
