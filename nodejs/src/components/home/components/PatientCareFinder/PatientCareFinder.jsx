"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Wind,
  Ear,
  Activity,
  Baby,
  CheckCircle2,
  ShieldCheck,
  Clock,
  CreditCard,
  MessageCircle,
  PhoneCall,
  ArrowRight,
  Sparkles,
  Star,
  FileText
} from "lucide-react";
import AppointmentModal from "@/components/ui/AppointmentModal";
import "./PatientCareFinder.css";

const CATEGORIES = [
  {
    id: "nose",
    name: "Nose & Sinus",
    hindiName: "नाक व साइनस",
    icon: Wind,
    color: "teal",
    headline: "Nose Blockage & Sinus Treatment (नाक बंद व साइनस का दर्द-रहित इलाज)",
    subheadline: "Chronic breathing difficulty, sinus headache, and nasal polyps treated with packless endoscopy.",
    symptoms: [
      { en: "Blocked Nose", hi: "नाक बंद रहना" },
      { en: "Sinus Headache & Pressure", hi: "साइनस का सिरदर्द व भारीपन" },
      { en: "Frequent Sneezing & Allergy", hi: "बार-बार छींकें व एलर्जी" },
      { en: "Night Snoring", hi: "रात में तेज खर्राटे" },
      { en: "Loss of Smell", hi: "सूंघने की शक्ति कम होना" },
      { en: "Post-Nasal Mucus Drip", hi: "गले में बलगम गिरना" },
    ],
    cureTitle: "Dr. Kushwah's Packless Endoscopic Septoplasty & Micro-FESS",
    cureTagline: "Zero Cloth Packing • Breathe Freely Immediately • Same-Day Discharge",
    cureDesc:
      "Unlike traditional painful surgery where tight cloth strips are packed inside the nose for 48 hours, Dr. Kushwah uses 4K endoscopes and micro-sutures. You wake up with open nostrils, breathe freely immediately, and return home within 24 hours.",
    guarantees: [
      "Zero cloth packing inside nose (बिना पट्टी)",
      "Same-day daycare discharge (24 घंटे में छुट्टी)",
      "No cuts or scars on face (चेहरे पर कोई निशान नहीं)",
      "100% Cashless Mediclaim accepted (कैशलेस इलाज)",
    ],
    waMessage: "Hello Dr. Kushwah, mujhe naak band rehne / sinus ki problem hai. Consultation chahiye.",
    learnMoreLink: "/conditions/nose-sinus",
  },
  {
    id: "ear",
    name: "Ear & Hearing",
    hindiName: "कान व सुनना",
    icon: Ear,
    color: "blue",
    headline: "Ear Discharge & Hearing Care (कान बहना व सुनने की समस्या)",
    subheadline: "Eardrum holes, chronic pus discharge, and hearing loss treated with stitchless microsurgery.",
    symptoms: [
      { en: "Ear Discharge & Pus", hi: "कान से पीप या पानी आना" },
      { en: "Decreased Hearing", hi: "कम सुनाई देना" },
      { en: "Ear Ringing / Tinnitus", hi: "कान में सीटी या घंटी बजना" },
      { en: "Eardrum Perforation (Hole)", hi: "कान का पर्दा फटना" },
      { en: "Ear Fullness & Heaviness", hi: "कान भारी व बंद लगना" },
      { en: "Vertigo & Dizziness", hi: "चक्कर आना व असंतुलन" },
    ],
    cureTitle: "Endoscopic Stitchless Tympanoplasty (Eardrum Repair)",
    cureTagline: "Done Entirely Through Ear Canal • No Cuts Behind Ear • No Stitches",
    cureDesc:
      "Dr. Kushwah performs eardrum repairs completely through the natural ear canal using Zeiss high-resolution microscopy. There is no large cut behind the ear, no painful stitches, and hearing is preserved with rapid recovery.",
    guarantees: [
      "Done through ear canal (बिना चीरे का इलाज)",
      "Zero stitches & zero visible scars (बिना टांके)",
      "Eardrum closure & hearing repair (पर्दा व सुनने का इलाज)",
      "Daycare procedure (उसी दिन घर वापसी)",
    ],
    waMessage: "Hello Dr. Kushwah, mujhe kaan se peep aane / sunai kam aane ki dikkat hai. Consultation chahiye.",
    learnMoreLink: "/conditions/ear-hearing",
  },
  {
    id: "throat",
    name: "Throat & Tonsils",
    hindiName: "गला व आवाज",
    icon: Activity,
    color: "amber",
    headline: "Sore Throat, Tonsils & Voice Care (गले में दर्द, टॉन्सिल व आवाज बैठना)",
    subheadline: "Recurrent tonsillitis, swallowing pain, and voice disorders treated with low-temp plasma.",
    symptoms: [
      { en: "Recurrent Tonsillitis", hi: "बार-बार टॉन्सिल पकना" },
      { en: "Throat Pain When Swallowing", hi: "थूक व खाना निगलने में दर्द" },
      { en: "Hoarse / Changed Voice", hi: "आवाज बैठना या बदलना" },
      { en: "Foreign Sensation in Throat", hi: "गले में कुछ अटका महसूस होना" },
      { en: "Chronic Cough & Throat Itch", hi: "पुरानी खांसी व खराश" },
      { en: "Sleep Choking Spells", hi: "सोते समय सांस में रुकावट" },
    ],
    cureTitle: "Coblation Plasma Tonsillectomy (Cool Technology)",
    cureTagline: "Low-Temperature Wand • Minimal Bleeding • 48-Hour Rapid Diet Recovery",
    cureDesc:
      "Traditional hot blades burn sensitive throat tissue, causing intense post-op pain. Dr. Kushwah utilizes advanced Coblation plasma wands operating at gentle temperatures (40-70°C). It gently dissolves diseased tonsils with minimal pain and fast normal diet return.",
    guarantees: [
      "Low-temp plasma wand (न्यूनतम दर्द)",
      "Minimal bleeding risk (रक्तस्राव का नगण्य खतरा)",
      "Normal diet in 48 hours (जल्दी सामान्य भोजन)",
      "Permanent relief from infections (संक्रमण से स्थाई मुक्ति)",
    ],
    waMessage: "Hello Dr. Kushwah, mujhe gale me dard / tonsil ki takleef hai. Consultation chahiye.",
    learnMoreLink: "/conditions/voice-throat-disorders-treatment-delhi",
  },
  {
    id: "kids",
    name: "Pediatric ENT",
    hindiName: "बच्चों का ईएनटी",
    icon: Baby,
    color: "emerald",
    headline: "Child Mouth Breathing & Adenoids (बच्चों में नाक व गले का इलाज)",
    subheadline: "Gentle, non-traumatic pediatric care for adenoid enlargement, snoring, and fluid in ears.",
    symptoms: [
      { en: "Mouth Breathing at Night", hi: "रात में मुंह खोलकर सोना" },
      { en: "Enlarged Adenoids", hi: "नाक के पीछे मांस (एडेनोइड्स) बढ़ना" },
      { en: "Child Snoring & Restless Sleep", hi: "बच्चों में तेज खर्राटे" },
      { en: "Frequent Cold & Ear Pain", hi: "बार-बार सर्दी, बुखार व कान दर्द" },
      { en: "Fluid in Ear (Glue Ear)", hi: "कान में पानी भरना" },
      { en: "Speech Delay & Poor Focus", hi: "बोलने में देरी व चिड़चिड़ापन" },
    ],
    cureTitle: "Gentle Daycare Pediatric Coblation Adenoidectomy",
    cureTagline: "Child-Safe Protocol • No Blood Loss • Same-Day Back Home",
    cureDesc:
      "Designed specifically to eliminate surgical trauma in children. Using cool plasma, enlarged adenoids are removed in under 20 minutes under expert pediatric anesthesia. Children recover smoothly without stitches and return home happily the same afternoon.",
    guarantees: [
      "Child-safe gentle anesthesia (विशेष बाल एनेस्थीसिया)",
      "Zero stitches, zero blood loss (बिना टांके, बिना खून बहे)",
      "Same-day discharge (उसी दिन दोपहर घर वापसी)",
      "Immediate clear breathing (तुरंत खुली सांस)",
    ],
    waMessage: "Hello Dr. Kushwah, mere bachhe ko naak/kaan/gale me dikkat hai. Consultation chahiye.",
    learnMoreLink: "/conditions/paediatric-ent",
  },
];

export default function PatientCareFinder() {
  const [activeTab, setActiveTab] = useState("nose");
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const currentCategory = CATEGORIES.find((c) => c.id === activeTab) || CATEGORIES[0];

  return (
    <>
      <AppointmentModal open={appointmentOpen} onClose={() => setAppointmentOpen(false)} />

      <section className="pcf-container py-12 sm:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ─── 1. SECTION TITLE & TRUST BADGE ─── */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold bg-teal-50 text-teal-800 border border-teal-200 shadow-2xs mb-3">
              <Sparkles size={14} className="text-teal-600" />
              <span>PATIENT CARE &amp; SYMPTOM TRIAGE (मरीज की सुविधा व सही इलाज)</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Select Your Symptom • Get Painless Care
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              अपने लक्षण पहचानें — डॉ. (प्रो.) धीरेंद्र सिंह कुशवाह (25+ Yrs Exp) से पाएं बिना दर्द, बिना पट्टी व बिना चीरे का आधुनिक डेकेयर इलाज।
            </p>
          </div>

          {/* ─── 2. SPECIALITY TABS ─── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-4xl mx-auto mb-8">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`pcf-tab-btn flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border text-center cursor-pointer transition-all ${
                    isActive
                      ? "pcf-tab-active"
                      : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-xs"
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon size={24} className={isActive ? "text-white" : "text-teal-600"} />
                  <span className="mt-1.5 font-bold text-xs sm:text-sm tracking-tight leading-tight">
                    {cat.name}
                  </span>
                  <span className={`pcf-tab-sub text-[11px] font-medium leading-tight ${isActive ? "text-teal-100" : "text-slate-500"}`}>
                    ({cat.hindiName})
                  </span>
                </button>
              );
            })}
          </div>

          {/* ─── 3. ACTIVE SPECIALITY DETAILS CARD ─── */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-12">
            <div className="p-6 sm:p-8 lg:p-10">
              
              {/* Header */}
              <div className="border-b border-slate-100 pb-6 mb-6">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-2.5 py-0.5 rounded-md">
                  Common Symptoms &amp; Painless Cure
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 leading-snug">
                  {currentCategory.headline}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {currentCategory.subheadline}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Symptoms Checklist (5 Cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                    <span>Do You Have Any of These Symptoms? (क्या ये लक्षण हैं?)</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {currentCategory.symptoms.map((s, idx) => (
                      <div
                        key={idx}
                        className="pcf-chip flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-800"
                      >
                        <CheckCircle2 size={16} className="text-teal-600 shrink-0" />
                        <div>
                          <span className="text-slate-900">{s.en}</span>
                          <span className="text-slate-500 block text-xs font-normal">({s.hi})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Dr. Kushwah's Painless Solution (7 Cols) */}
                <div className="lg:col-span-7 pcf-card-gradient rounded-2xl p-6 sm:p-8 border border-teal-100/80">
                  <span className="text-[11px] font-extrabold text-teal-800 bg-teal-100/70 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
                    Dr. Kushwah&#39;s Advanced Medical Protocol
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    {currentCategory.cureTitle}
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-teal-700 mt-1">
                    {currentCategory.cureTagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {currentCategory.cureDesc}
                  </p>

                  {/* Guarantees Box */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800 bg-white/90 p-4 rounded-xl border border-teal-100">
                    {currentCategory.guarantees.map((g, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <ShieldCheck size={15} className="text-emerald-600 shrink-0" />
                        <span>{g}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action CTAs */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setAppointmentOpen(true)}
                      className="pcf-btn-book px-5 py-3 rounded-xl text-white font-bold text-xs sm:text-sm shadow-md transition cursor-pointer flex items-center gap-2"
                      style={{ backgroundColor: "#0d9488", color: "#ffffff" }}
                    >
                      <span style={{ color: "#ffffff" }}>Book Consultation (अपॉइंटमेंट लें)</span>
                      <ArrowRight size={15} style={{ color: "#ffffff" }} />
                    </button>

                    <a
                      href={`https://wa.me/919311449825?text=${encodeURIComponent(currentCategory.waMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pcf-btn-whatsapp-ask px-4 py-3 rounded-xl text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
                      style={{ backgroundColor: "#16a34a", color: "#ffffff" }}
                    >
                      <MessageCircle size={15} style={{ color: "#ffffff" }} />
                      <span style={{ color: "#ffffff" }}>Ask on WhatsApp (व्हाट्सएप पूछें)</span>
                    </a>

                    <Link
                      href={currentCategory.learnMoreLink}
                      className="text-xs font-bold text-teal-700 hover:text-teal-900 underline underline-offset-4 ml-auto"
                    >
                      Read Clinical Details &rarr;
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ─── 4. FEAR-KILLER 4 PATIENT GUARANTEES ─── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-100">
                <Wind size={20} />
              </div>
              <div>
                <h5 className="font-extrabold text-sm text-slate-900">Zero Nasal Packing</h5>
                <p className="text-xs text-teal-700 font-semibold">(बिना पट्टी का इलाज)</p>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  No painful cloth strips packed inside nose. Breathe right after surgery.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-100">
                <Ear size={20} />
              </div>
              <div>
                <h5 className="font-extrabold text-sm text-slate-900">Stitchless Ear Surgery</h5>
                <p className="text-xs text-teal-700 font-semibold">(बिना चीरे का इलाज)</p>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  Done through ear canal via endoscopy. No cuts behind the ear &amp; no stitches.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-100">
                <Clock size={20} />
              </div>
              <div>
                <h5 className="font-extrabold text-sm text-slate-900">24-Hour Daycare Discharge</h5>
                <p className="text-xs text-teal-700 font-semibold">(उसी दिन घर वापसी)</p>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  Morning admission, evening home recovery. No prolonged hospital stay.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-100">
                <CreditCard size={20} />
              </div>
              <div>
                <h5 className="font-extrabold text-sm text-slate-900">100% Cashless Mediclaim</h5>
                <p className="text-xs text-teal-700 font-semibold">(कैशलेस मेडिक्लेम)</p>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  Hassle-free pre-authorization with all major insurance companies &amp; TPAs.
                </p>
              </div>
            </div>
          </div>

          {/* ─── 5. HIGH-INTENT LEAD MAGNET: FREE 2ND OPINION WHATSAPP DESK ─── */}
          <div
            className="pcf-second-opinion-banner rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl mb-10"
            style={{
              background: "linear-gradient(135deg, #041d1a 0%, #064e3b 50%, #031a17 100%)",
              color: "#ffffff"
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl space-y-2 text-center md:text-left">
                <span
                  className="pcf-badge-second-opinion inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black tracking-wide uppercase"
                  style={{ backgroundColor: "#f59e0b", color: "#0f172a" }}
                >
                  <FileText size={13} />
                  <span>SECOND OPINION DESK (दूसरी राय की सुविधा)</span>
                </span>
                <h3
                  className="text-xl sm:text-2xl lg:text-3xl font-black leading-tight"
                  style={{ color: "#ffffff" }}
                >
                  Advised Surgery Elsewhere? Get a FREE 2nd Opinion
                </h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed font-normal"
                  style={{ color: "#e2e8f0" }}
                >
                  क्या किसी अन्य अस्पताल या डॉक्टर ने आपको सर्जरी बताई है? अपनी <strong style={{ color: "#ffffff", fontWeight: 700 }}>CT Scan / MRI रिपोर्ट या डॉक्टर की पर्ची</strong> व्हाट्सएप पर भेजें और डॉ. (प्रो.) धीरेंद्र सिंह कुशवाह से निष्पक्ष एवं सही सलाह लें।
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <a
                  href="https://wa.me/919311449825?text=Hello%20Dr.%20Dhirendra%20Singh%20Kushwah,%20maine%20doosre%20doctor%20ko%20dikhaya%20tha%20unhone%20surgery%20boli%20hai.%20Main%20apni%20report/parchi%20bhej%20kar%20second%20opinion%20lena%20chahta%20hoon."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pcf-btn-whatsapp-parchi pcf-whatsapp-pulse w-full sm:w-auto px-6 py-3.5 rounded-2xl text-white font-extrabold text-sm shadow-xl transition flex items-center justify-center gap-2.5 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
                    color: "#ffffff"
                  }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Par Parchi Bhejein</span>
                </a>

                <a
                  href="tel:+919311449825"
                  className="pcf-btn-call-desk w-full sm:w-auto px-5 py-3.5 rounded-2xl font-bold text-sm transition flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.12)",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.3)"
                  }}
                >
                  <PhoneCall size={16} style={{ color: "#5eead4" }} />
                  <span>Call +91-9311449825</span>
                </a>
              </div>
            </div>
          </div>

          {/* ─── 6. REAL GOOGLE 5.0 REVIEWS (PROVING DOCTOR'S HONESTY) ─── */}
          <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base sm:text-lg font-black text-slate-900">
                    Verified Google Patient Reviews
                  </h4>
                  <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 text-xs font-black px-2.5 py-0.5 rounded-full border border-amber-300">
                    <Star size={12} className="fill-amber-500 text-amber-500" /> 5.0 Rating
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Real feedback from Google Business Profile &bull; Jasola Vihar Clinic &amp; ORL Hospital
                </p>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1"
              >
                <span>Read on Google Maps</span>
                <ArrowRight size={13} />
              </a>
            </div>

            {/* Reviews Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Review 1: Nikhil Singh (Killing the fear of unnecessary medicines/surgery) */}
              <div className="pcf-review-card bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 text-white font-black text-xs flex items-center justify-center">
                        NS
                      </div>
                      <div>
                        <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                          NIKHIL SINGH
                          <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-1.5 py-0.2 rounded border border-blue-200">
                            Local Guide
                          </span>
                        </span>
                        <span className="text-[11px] text-slate-400 block">7 reviews &bull; 4 photos</span>
                      </div>
                    </div>
                    <div className="flex items-center text-amber-400 text-xs">★★★★★</div>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    &ldquo;Without doubt the best ENT doctor in Jasola, Delhi. Dr. (Prof.) Dhirendra Singh Kushwah listened to my problem very patiently and gave the right diagnosis without prescribing unnecessary medicines. The clinic at ORL Hospital Jasola Vihar is clean and well-maintained. Highly recommended for any ear, nose, or throat issue!&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <span className="font-bold text-teal-700">Response from Dr. Dhirendra Singh Kushwah:</span>
                  <p className="italic mt-0.5">&ldquo;Thank you for your valuable feedback. My priority is always to listen carefully to every patient and provide the best possible ENT care...&rdquo;</p>
                </div>
              </div>

              {/* Review 2: Ghous Zaidi */}
              <div className="pcf-review-card bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-teal-600 to-emerald-500 text-white font-black text-xs flex items-center justify-center">
                        GZ
                      </div>
                      <div>
                        <span className="font-bold text-xs text-slate-900">Ghous Zaidi</span>
                        <span className="text-[11px] text-slate-400 block">Verified Patient Review</span>
                      </div>
                    </div>
                    <div className="flex items-center text-amber-400 text-xs">★★★★★</div>
                  </div>
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed italic">
                    &ldquo;best ent doctor in Jasola , Delhi&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <span className="font-bold text-teal-700">Response from Dr. Dhirendra Singh Kushwah:</span>
                  <p className="italic mt-0.5">&ldquo;Thank you for your kind words! We truly appreciate your trust and support. We are glad to know that you had a positive experience. 😊&rdquo;</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
