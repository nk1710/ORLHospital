"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Stethoscope,
  Globe2,
  HeartHandshake,
  Award,
  Users,
  Video,
  ZoomIn,
  Phone,
  Calendar,
  Building2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import "yet-another-react-lightbox/styles.css";
import { CLINICAL_MOMENTS } from "@/data/clinicalMomentsData";

// Dynamically import Lightbox for client-only rendering
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

// Helper component for rock-solid, high-performance responsive gallery images (mobile & desktop)
function GalleryCard({ item, label, onClick, priority = false }) {
  return (
    <div
      onClick={onClick}
      className="group relative h-48 sm:h-56 lg:h-64 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-slate-800/80 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center p-2"
    >
      <img
        src={item.src}
        alt={item.alt || label}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
        <span className="p-2.5 rounded-full bg-white/95 text-teal-800 shadow-md transform scale-90 group-hover:scale-100 transition-transform">
          <ZoomIn className="w-4 h-4" />
        </span>
      </div>
      <div className="absolute bottom-2 left-2 right-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="inline-block px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-700/60 text-[11px] text-white font-medium truncate max-w-full shadow-xs">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function GalleryClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const moments = CLINICAL_MOMENTS || [];

  // Categorized subsets
  const otItems = moments.filter((item) => item.category === "ot");
  const internationalItems = moments.filter((item) => item.category === "international");
  const patientItems = moments.filter((item) => item.category === "patients");
  const conferenceItems = moments.filter((item) => item.category === "conferences");
  const teamItems = moments.filter((item) => item.category === "team");
  const videoItems = moments.filter((item) => item.category === "videos");

  // All image slides for full-screen lightbox
  const allImageSlides = moments
    .filter((item) => !item.isVideo)
    .map((item) => ({
      src: item.src,
      title: item.title,
      description: item.caption,
    }));

  const openLightboxAt = (src) => {
    const idx = allImageSlides.findIndex((slide) => slide.src === src);
    if (idx !== -1) {
      setLightboxIndex(idx);
      setLightboxOpen(true);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ────────────────── SECTION QUICK JUMP BAR ────────────────── */}
      <nav
        aria-label="Gallery Section Navigation"
        className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-semibold">
            <span className="text-slate-400 uppercase tracking-wider text-[11px] mr-2 shrink-0 hidden md:inline">
              Jump To:
            </span>
            <a
              href="#cochlear-case-study"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 hover:text-emerald-900 text-emerald-800 transition shrink-0 border border-emerald-200 font-bold"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Cochlear Before &amp; After Case</span>
            </a>
            <a
              href="#surgical-ot"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-teal-50 hover:text-teal-800 text-slate-700 transition shrink-0 border border-slate-200/60"
            >
              <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
              <span>Surgical OT ({otItems.length})</span>
            </a>
            <a
              href="#international-patients"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-teal-50 hover:text-teal-800 text-slate-700 transition shrink-0 border border-slate-200/60"
            >
              <Globe2 className="w-3.5 h-3.5 text-teal-600" />
              <span>International Patients ({internationalItems.length})</span>
            </a>
            <a
              href="#patient-care"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-teal-50 hover:text-teal-800 text-slate-700 transition shrink-0 border border-slate-200/60"
            >
              <HeartHandshake className="w-3.5 h-3.5 text-teal-600" />
              <span>Patient Care ({patientItems.length})</span>
            </a>
            <a
              href="#global-conferences"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-teal-50 hover:text-teal-800 text-slate-700 transition shrink-0 border border-slate-200/60"
            >
              <Award className="w-3.5 h-3.5 text-teal-600" />
              <span>Conferences &amp; Trips ({conferenceItems.length})</span>
            </a>
            <a
              href="#hospital-team"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-teal-50 hover:text-teal-800 text-slate-700 transition shrink-0 border border-slate-200/60"
            >
              <Users className="w-3.5 h-3.5 text-teal-600" />
              <span>Team &amp; Staff ({teamItems.length})</span>
            </a>
            {videoItems.length > 0 && (
              <a
                href="#video-stories"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-teal-50 hover:text-teal-800 text-slate-700 transition shrink-0 border border-slate-200/60"
              >
                <Video className="w-3.5 h-3.5 text-teal-600" />
                <span>Video Stories ({videoItems.length})</span>
              </a>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-20">

        {/* ══════════════════════════════════════════════════════════════
            SECTION 1: SURGICAL EXCELLENCE & OPERATION THEATER
        ══════════════════════════════════════════════════════════════ */}
        <section id="surgical-ot" className="scroll-mt-36">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Stethoscope className="w-3.5 h-3.5 text-teal-700" />
              <span>Operation Theater &amp; Procedures</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Surgical Precision in Advanced Laminar OT
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Equipped with German Carl Zeiss surgical operating microscopes, Karl Storz high-definition 4K endoscopic towers, and HEPA-filtered positive-pressure laminar airflow. Dr. (Prof.) Dhirendra Singh Kushwah performs minimally invasive micro-ear repairs, pack-less septoplasty, FESS sinus surgery, and cochlear implants under rigorous international safety protocols.
            </p>
          </div>

          {/* Photo Grid — Clean, image-focused UI */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {otItems.map((item, idx) => (
              <GalleryCard
                key={item.id}
                item={item}
                label={`OT Procedure #${idx + 1}`}
                onClick={() => openLightboxAt(item.src)}
                priority={idx < 4}
              />
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 2: INTERNATIONAL PATIENTS & MEDICAL TOURISM
        ══════════════════════════════════════════════════════════════ */}
        <section id="international-patients" className="scroll-mt-36 pt-8 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Globe2 className="w-3.5 h-3.5 text-teal-700" />
              <span>Global Medical Tourism</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              International Patients &amp; Overseas Care
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Patients travel from the United Kingdom, Middle East, Africa, CIS countries, and neighboring South Asian nations seeking Dr. Kushwah's world-class clinical expertise. Our international medical desk provides medical visa invitation letters, language coordination, airport pick-up assistance, and comprehensive surgical rehabilitation.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {internationalItems.map((item, idx) => (
              <GalleryCard
                key={item.id}
                item={item}
                label={`International Care #${idx + 1}`}
                onClick={() => openLightboxAt(item.src)}
              />
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FEATURED: PEDIATRIC COCHLEAR IMPLANT BEFORE & AFTER SHOWCASE
        ══════════════════════════════════════════════════════════════ */}
        <section id="cochlear-case-study" className="scroll-mt-36 pt-8 border-t border-slate-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-teal-200/90 shadow-md space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                  <span>Clinical Case Highlight &bull; Pediatric Bionic Hearing</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Pediatric Cochlear Implant: Before &amp; After Patient Story
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Real clinical documentation of a young boy diagnosed with congenital profound bilateral deafness. See the before photo when the boy was small, the after photo post-cochlear implant activation, and follow-up videos recorded on the same hospital visit day showing his natural hearing response and speech progress.
                </p>
              </div>

              <Link
                href="/specialities/cochlear-hearing-implants#pediatric-case-study"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shrink-0 shadow-sm transition"
              >
                <span>Read Full Procedure Case</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Before & After Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Before Card */}
              <div
                onClick={() => openLightboxAt("/images/pediatric-cochlear-implant-child-before-surgery.jpeg")}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-slate-800 cursor-pointer shadow-xs hover:shadow-xl transition"
              >
                <div className="relative w-full h-72 sm:h-96 p-2.5 flex items-center justify-center">
                  <img
                    src="/images/pediatric-cochlear-implant-child-before-surgery.jpeg"
                    alt="Pediatric cochlear implant patient when boy was small before surgery"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-bold shadow-md uppercase tracking-wider">
                      Before Surgery (Small Child)
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="p-3 rounded-full bg-white/95 text-teal-800 shadow-md">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                    <span className="block px-3 py-1.5 rounded-lg bg-slate-950/90 text-white text-xs font-medium border border-slate-700/80">
                      Initial Consultation: Congenital profound sensorineural deafness
                    </span>
                  </div>
                </div>
              </div>

              {/* After Card */}
              <div
                onClick={() => openLightboxAt("/images/pediatric-cochlear-implant-child-after-surgery-activation.jpeg")}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-slate-800 cursor-pointer shadow-xs hover:shadow-xl transition"
              >
                <div className="relative w-full h-72 sm:h-96 p-2.5 flex items-center justify-center">
                  <img
                    src="/images/pediatric-cochlear-implant-child-after-surgery-activation.jpeg"
                    alt="Pediatric cochlear implant patient post-activation smiling recovery"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-md uppercase tracking-wider">
                      After Surgery &amp; Activation
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="p-3 rounded-full bg-white/95 text-teal-800 shadow-md">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                    <span className="block px-3 py-1.5 rounded-lg bg-slate-950/90 text-white text-xs font-medium border border-slate-700/80">
                      Processor Fitted: Bionic sound perception restored &amp; happy recovery
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow-Up Visit Videos (Same Day) */}
            <div className="pt-4 border-t border-slate-100 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    Hospital Follow-Up Visit Videos (Both Recorded on the Same Day)
                  </h3>
                  <p className="text-xs text-slate-500">
                    The growing boy returns to visit Dr. (Prof.) Dhirendra Singh Kushwah at the hospital.
                  </p>
                </div>
                <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200 shrink-0 self-start sm:self-auto">
                  Exact Same Visit Day
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 space-y-2">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-contain"
                    >
                      <source
                        src="/images/pediatric-cochlear-implant-hearing-response-recovery-video-1.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <p className="text-xs font-semibold text-white">
                    Video 1: Auditory Response &amp; Sound Orientation
                  </p>
                </div>

                <div className="bg-slate-900 rounded-xl p-3 border border-slate-800 space-y-2">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-contain"
                    >
                      <source
                        src="/images/pediatric-cochlear-implant-speech-rehabilitation-video-2.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <p className="text-xs font-semibold text-white">
                    Video 2: Speech Comprehension &amp; Interaction with Doctor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 3: PATIENT CARE, CONSULTATIONS & RECOVERIES
        ══════════════════════════════════════════════════════════════ */}
        <section id="patient-care" className="scroll-mt-36 pt-8 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
              <HeartHandshake className="w-3.5 h-3.5 text-teal-700" />
              <span>Consultations &amp; Recovery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Patient Care, Consultations &amp; Bedside Support
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Compassionate clinical evaluation across our hospital and clinic locations in Jasola Vihar, Chittaranjan Park, Arjun Nagar / Safdarjung Enclave, Palwal, and Dhampur. Here are authentic smiles of children, adults, and elderly patients after successful ear restoration, sinus treatments, and airway relief.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {patientItems.map((item, idx) => (
              <GalleryCard
                key={item.id}
                item={item}
                label={`Patient Care #${idx + 1}`}
                onClick={() => openLightboxAt(item.src)}
              />
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 4: ACADEMIC CONFERENCES, FELLOWSHIPS & GLOBAL TRIPS
        ══════════════════════════════════════════════════════════════ */}
        <section id="global-conferences" className="scroll-mt-36 pt-8 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-teal-700" />
              <span>Global Academic Outreach</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              International Conferences, Keynotes &amp; Faculty Trips
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Advancing the boundaries of Otolaryngology through international surgical workshops, faculty masterclasses, and global medical congresses. Dr. Kushwah regularly shares operative innovations in tympanomastoidectomy, stapes surgery, and endoscopic sinus navigation with international surgical communities.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {conferenceItems.map((item, idx) => (
              <GalleryCard
                key={item.id}
                item={item}
                label={`Global Trip #${idx + 1}`}
                onClick={() => openLightboxAt(item.src)}
              />
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 5: HOSPITAL TEAM, CLINICAL STAFF & MILESTONES
        ══════════════════════════════════════════════════════════════ */}
        <section id="hospital-team" className="scroll-mt-36 pt-8 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5 text-teal-700" />
              <span>Clinical Staff &amp; Team</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Hospital Leadership, Surgical Nursing &amp; Clinical Staff
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              High surgical success rates are built upon a dedicated team. Our specialized OT nurses, clinical audiologists, patient coordinators, and surgical assistants work collaboratively to uphold NABH infection standards and patient comfort.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {teamItems.map((item, idx) => (
              <GalleryCard
                key={item.id}
                item={item}
                label={`Hospital Team & Leadership #${idx + 1}`}
                onClick={() => openLightboxAt(item.src)}
              />
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 6: VIDEO TESTIMONIALS & EXPERIENCES
        ══════════════════════════════════════════════════════════════ */}
        {videoItems.length > 0 && (
          <section id="video-stories" className="scroll-mt-36 pt-8 border-t border-slate-200">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
                <Video className="w-3.5 h-3.5 text-teal-700" />
                <span>Patient Video Reviews</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Authentic Patient Stories &amp; Surgical Feedback
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Real, unscripted video experiences shared by domestic and international patients detailing their diagnosis, surgical experience, and prompt recovery under Dr. Kushwah's care.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
              {videoItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden"
                >
                  <div className="relative aspect-video bg-slate-950">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-contain bg-black"
                      poster="/images/dr-kushwah-banner.webp"
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* ────────────────── FULL-SCREEN LIGHTBOX ────────────────── */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={allImageSlides}
        />
      )}

      {/* ────────────────── BOTTOM HOSPITAL CTA ────────────────── */}
      <section className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-950 text-white py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>5 Hospital &amp; Clinic Centers Across Delhi NCR, Haryana &amp; UP</span>
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Consult Dr. (Prof.) Dhirendra Singh Kushwah
          </h2>

          <p className="text-sm sm:text-base text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Whether you require a second opinion for complex ear microsurgery, endoscopic sinus intervention, or overseas medical tourism guidance, our clinical team is ready to assist.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:+919311449825"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-teal-950 font-bold text-sm shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: +91-9311449825</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Hospital Consultation</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

