import React from "react";
import Image from "next/image";
import Link from "next/link";
import AsideAppointmentForm from "@/components/ui/AsideAppointmentForm";
import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import SurgeryLeadDesk from "@/components/ui/SurgeryLeadDesk";
import { DOCTOR_PHYSICIAN_SCHEMA, ORL_HOSPITAL_SCHEMA } from "@/lib/surgicalSchema";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Stethoscope,
  Sparkles,
  Volume2,
  HeartPulse,
  UserCheck,
  Baby,
  Ear,
  Activity,
  ArrowDownCircle,
} from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.com/specialities/cochlear-hearing-implants";

  return {
    title:
      "Best Cochlear Implant Surgeon in Delhi | Pediatric & Adult Hearing Specialist - Dr. Dhirendra Singh Kushwah",

    description:
      "Consult Dr. (Prof.) Dhirendra Singh Kushwah, senior ENT surgeon in Delhi specializing in minimally invasive cochlear implant surgery for infants, children, and adults. Real pediatric patient recovery case studies, switch-on photos & hospital follow-up videos.",

    keywords: [
      "Cochlear implant surgery Delhi",
      "Pediatric cochlear implant Delhi",
      "Hearing implant specialist India",
      "Child hearing loss treatment",
      "Cochlear implant before and after photo",
      "Cochlear implant hospital follow up video",
      "Bionic ear surgery Delhi",
      "Severe hearing loss treatment",
      "Dr Dhirendra Singh Kushwah",
      "Best cochlear implant surgeon India",
    ],

    authors: [{ name: "Dr. (Prof.) Dhirendra Singh Kushwah" }],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: "Pediatric Cochlear Implant Surgery & Recovery in Delhi | Dr. Dhirendra Singh Kushwah",
      description:
        "Transforming lives through bionic hearing restoration. Real patient case studies, before-and-after activation photos, and hospital follow-up videos.",
      url: url,
      siteName: "Dr. (Prof.) Dhirendra Singh Kushwah - Senior ENT Surgeon",
      type: "article",
      locale: "en_IN",
      images: [
        {
          url: "https://www.drdhirendrasinghkushwah.com/images/pediatric-cochlear-implant-child-after-surgery-activation.jpeg",
          width: 960,
          height: 1280,
          alt: "Pediatric Cochlear Implant Patient After Surgery and Switch-On Activation",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Best Cochlear Implant Surgeon in Delhi | Dr. Dhirendra Singh Kushwah",
      description:
        "Expert hearing implant solutions for profound deafness in children and adults. Real pediatric recovery videos & case studies.",
      images: [
        "https://www.drdhirendrasinghkushwah.com/images/pediatric-cochlear-implant-child-after-surgery-activation.jpeg",
      ],
    },

    robots: {
      index: true,
      follow: true,
    },

    category: "healthcare",
  };
}

export default async function DepartmentPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://www.drdhirendrasinghkushwah.com/specialities/cochlear-hearing-implants#webpage",
        name: "Cochlear and Hearing Implants in Delhi, India",
        url: "https://www.drdhirendrasinghkushwah.com/specialities/cochlear-hearing-implants",
        description:
          "Comprehensive clinical guide and patient recovery documentation for pediatric and adult cochlear implant surgery by Dr. (Prof.) Dhirendra Singh Kushwah in Delhi NCR.",
        mainEntity: {
          "@type": "SurgicalProcedure",
          name: "Pediatric & Adult Cochlear Implant Surgery",
          description:
            "Surgical procedure for patients with severe or profound sensorineural hearing loss. Involves placing an internal multichannel electrode array into the cochlea to stimulate the auditory nerve directly.",
          procedureType: "SurgicalProcedure",
          bodyLocation: "Inner Ear & Auditory Nerve",
          status: "Hospital Surgical Admission (100% Cashless Mediclaim)",
          provider: {
            "@id": "https://www.drdhirendrasinghkushwah.com/#physician",
          },
          performer: {
            "@id": "https://www.drdhirendrasinghkushwah.com/#physician",
          },
          hospitalAffiliation: {
            "@id": "https://www.drdhirendrasinghkushwah.com/#hospital",
          },
          howPerformed:
            "Minimally invasive microscopic posterior tympanotomy and round window insertion with intraoperative neural response telemetry (NRT).",
          indication: [
            "Infants and children born with congenital bilateral profound deafness",
            "Pre-lingual and post-lingual pediatric hearing loss",
            "Adults with progressive or sudden severe-to-profound sensorineural deafness not aided by hearing aids",
            "Auditory neuropathy spectrum disorders",
          ],
        },
      },
      DOCTOR_PHYSICIAN_SCHEMA,
      ORL_HOSPITAL_SCHEMA,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <ClinicalBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Specialities & Surgeries", href: "/specialities" },
            { label: "Cochlear Implants", href: "/specialities/cochlear-hearing-implants" },
          ]}
        />

        {/* =====================================================
            HERO / PAGE INTRODUCTION WITH APPOINTMENT FORM
        ====================================================== */}
        <section
          className="relative bg-slate-50 rounded-3xl p-6 md:p-10 border border-teal-100 shadow-sm overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #f8fafc 0%, #f0fdfa 50%, #f1f5f9 100%)",
          }}
        >
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Title, Credentials & Clinical Overview */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold">
                <Stethoscope className="w-3.5 h-3.5 text-teal-700" />
                <span>Advanced Hearing Implantation &amp; Bionic Hearing</span>
                <span>&bull;</span>
                <span>Delhi NCR, India</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-[2.4rem] font-extrabold text-slate-900 leading-tight">
                Top Cochlear &amp; Hearing Implant Surgeon in Delhi &ndash; Dr. (Prof.) Dhirendra Singh Kushwah
              </h1>

              {/* Direct Anchor Pill to Before/After Photos & Videos */}
              <div>
                <a
                  href="#pediatric-case-study"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs md:text-sm font-bold transition shadow-xs group"
                >
                  <Sparkles className="w-4 h-4 text-teal-200" />
                  <span>View Child&apos;s Before &amp; After Photos + Hospital Follow-up Videos &darr;</span>
                  <ArrowDownCircle className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1 text-xs font-medium text-slate-700">
                <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                  <Award className="w-4 h-4 text-teal-600" /> 25+ Years Experience
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-teal-600" /> Pediatric &amp; Adult Implants
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" /> German Zeiss Microscopy
                </span>
              </div>

              <p className="text-slate-600 leading-relaxed text-base pt-1">
                Dr. (Prof.) Dhirendra Singh Kushwah is a nationally recognized senior cochlear implant surgeon in India with over 25 years of surgical excellence. He specializes in atraumatic micro-surgical auditory restoration for infants, toddlers, and adults facing profound bilateral sensorineural deafness.
              </p>

              <p className="text-slate-600 leading-relaxed text-base">
                A cochlear implant bypasses non-functioning sensory hair cells in the cochlea to stimulate the auditory nerve fibers directly with precision electronic impulses. This enables recipients to perceive sound, acquire natural spoken language, and thrive in mainstream life.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="tel:+919311449825"
                  className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold px-5 py-2.5 rounded-xl transition shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  Direct Helpline: +91-9311449825
                </a>
                <span className="text-xs text-slate-500 font-medium">
                  Same-Day BERA &amp; Candidate Mapping Guidance
                </span>
              </div>
            </div>

            {/* Right Column: High Conversion Appointment Booking Form */}
            <div className="lg:col-span-5">
              <AsideAppointmentForm />
            </div>
          </div>
        </section>

        <MedicalReviewBadge procedureName="Cochlear Implant Surgery & Auditory Rehabilitation" />

        {/* =====================================================
            REAL PEDIATRIC PATIENT CASE STUDY: BEFORE & AFTER PHOTOS
        ====================================================== */}
        <section
          id="pediatric-case-study"
          className="relative bg-white rounded-3xl p-6 md:p-10 border border-slate-200/90 shadow-md overflow-hidden space-y-8 scroll-mt-24"
        >
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Real Patient Case Study &bull; Pediatric Otology</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Real Child Case: Congenital Profound Deafness to Fluent Hearing &amp; Speech
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Photographic and video documentation of a young boy treated by Dr. (Prof.) Dhirendra Singh Kushwah. See the before photo when the boy was small with profound hearing loss, the after photo post-cochlear implant activation, and follow-up videos recorded on the same hospital visit day showing his incredible real-world response.
            </p>
          </div>

          {/* Before & After Visual Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Card 1: Before Photo (When boy was small) */}
            <div
              className="rounded-2xl border border-rose-200/80 p-5 space-y-4 shadow-xs hover:shadow-md transition bg-rose-50/40"
              style={{ background: "linear-gradient(180deg, #fff1f2 0%, #ffffff 40%, #f8fafc 100%)" }}
            >
              <div className="flex items-center justify-between gap-2 border-b border-rose-100 pb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-extrabold tracking-wide uppercase">
                  <Activity className="w-3.5 h-3.5 text-rose-600" />
                  Before Surgery (Small Child)
                </span>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Initial Consultation
                </span>
              </div>

              {/* Image Frame with Ambient Backdrop (Explicit height so it NEVER collapses) */}
              <div
                style={{ minHeight: "380px", height: "420px" }}
                className="relative w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-md group"
              >
                <Image
                  src="/images/pediatric-cochlear-implant-child-before-surgery.jpeg"
                  alt="Pre-operative evaluation of pediatric patient when boy was small with severe bilateral hearing loss"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover blur-lg opacity-30 scale-110 pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute inset-2 flex items-center justify-center">
                  <Image
                    src="/images/pediatric-cochlear-implant-child-before-surgery.jpeg"
                    alt="Small child diagnosed with profound deafness before cochlear implant surgery by Dr Dhirendra Singh Kushwah"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              </div>

              {/* Clinical Narrative Notes */}
              <div className="space-y-2 text-xs md:text-sm text-slate-700 pt-1">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <p>
                    <strong className="text-slate-900">Patient Background:</strong> Brought to Dr. Kushwah when he was very small, unable to hear or respond to loud sounds.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <p>
                    <strong className="text-slate-900">Diagnosis:</strong> Congenital bilateral profound sensorineural deafness (&gt;90 dB hearing threshold).
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <p>
                    <strong className="text-slate-900">Pre-Op State:</strong> No benefit from digital hearing aids; recommended for urgent bionic cochlear implantation.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: After Photo (Post-Surgery & Processor Activation) */}
            <div
              className="rounded-2xl border border-teal-200/90 p-5 space-y-4 shadow-xs hover:shadow-md transition bg-teal-50/50"
              style={{ background: "linear-gradient(180deg, #f0fdfa 0%, #ffffff 40%, #f8fafc 100%)" }}
            >
              <div className="flex items-center justify-between gap-2 border-b border-teal-100 pb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-extrabold tracking-wide uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                  After Surgery &amp; Activation
                </span>
                <span className="text-[11px] font-semibold text-teal-700 uppercase tracking-wider">
                  Post-Op Milestone
                </span>
              </div>

              {/* Image Frame with Ambient Backdrop (Explicit height so it NEVER collapses) */}
              <div
                style={{ minHeight: "380px", height: "420px" }}
                className="relative w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-md group"
              >
                <Image
                  src="/images/pediatric-cochlear-implant-child-after-surgery-activation.jpeg"
                  alt="Post-operative switch-on recovery of child with cochlear implant processor fitted on ear"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover blur-lg opacity-30 scale-110 pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute inset-2 flex items-center justify-center">
                  <Image
                    src="/images/pediatric-cochlear-implant-child-after-surgery-activation.jpeg"
                    alt="Happy child smiling after successful cochlear implant activation by Dr Dhirendra Singh Kushwah"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Clinical Narrative Notes */}
              <div className="space-y-2 text-xs md:text-sm text-slate-700 pt-1">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                  <p>
                    <strong className="text-slate-900">Surgical Result:</strong> Minimally invasive atraumatic round-window implantation performed by Dr. Kushwah.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                  <p>
                    <strong className="text-slate-900">Activation State:</strong> Sound processor comfortably fitted; child is smiling, engaged, and hearing acoustic sounds.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                  <p>
                    <strong className="text-slate-900">Transformative Impact:</strong> Successfully bridged from silence to active sound perception and normal development.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* =====================================================
              HOSPITAL FOLLOW-UP VISIT VIDEOS (BOTH FROM SAME DAY)
          ====================================================== */}
          <div className="pt-4 space-y-6">
            <div className="border-t border-slate-200 pt-6">
              <span className="text-xs font-bold text-teal-700 tracking-wider uppercase block mb-1">
                Hospital Follow-Up Visit &bull; Both Videos Recorded on the Same Day
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                The Growing Boy Returns to Visit Dr. Kushwah at the Hospital
              </h3>
              <p className="text-slate-600 text-xs md:text-sm mt-1 leading-relaxed">
                After some time had passed following his cochlear implant surgery, the growing boy returned to the hospital to visit Dr. (Prof.) Dhirendra Singh Kushwah. Both videos below were recorded on that <strong>exact same visit day</strong>, demonstrating how naturally he now responds to sound, understands questions, and interacts happily with the doctor.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Video 1: Hospital Visit - Auditory Response */}
              <div className="rounded-2xl border border-slate-200 bg-slate-900 p-4 space-y-3 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-300 pb-2 mb-2 border-b border-slate-800">
                    <span className="inline-flex items-center gap-1.5 font-bold text-teal-300">
                      <Volume2 className="w-4 h-4 text-teal-400" />
                      Hospital Visit: Sound Response (Video 1)
                    </span>
                    <span className="text-[11px] text-teal-400 font-semibold bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">
                      Same Visit Day
                    </span>
                  </div>
                  
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black shadow-inner">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-contain bg-black"
                      aria-label="Cochlear implant patient hospital follow-up sound response video"
                    >
                      <source
                        src="/images/pediatric-cochlear-implant-hearing-response-recovery-video-1.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-300 space-y-1">
                  <p className="font-semibold text-white">
                    Natural Auditory Localization &amp; Sound Detection
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Watch the boy during his hospital follow-up consultation with Dr. Kushwah, demonstrating sharp sound perception, turning towards voices, and alert listening.
                  </p>
                </div>
              </div>

              {/* Video 2: Hospital Visit - Speech & Response */}
              <div className="rounded-2xl border border-slate-200 bg-slate-900 p-4 space-y-3 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-300 pb-2 mb-2 border-b border-slate-800">
                    <span className="inline-flex items-center gap-1.5 font-bold text-emerald-300">
                      <HeartPulse className="w-4 h-4 text-emerald-400" />
                      Hospital Visit: Speech &amp; Interaction (Video 2)
                    </span>
                    <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                      Same Visit Day
                    </span>
                  </div>
                  
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black shadow-inner">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-contain bg-black"
                      aria-label="Cochlear implant patient hospital follow-up speech and interaction video"
                    >
                      <source
                        src="/images/pediatric-cochlear-implant-speech-rehabilitation-video-2.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-300 space-y-1">
                  <p className="font-semibold text-white">
                    Verbal Communication &amp; Happy Doctor Interaction
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Recorded on the exact same day during his hospital follow-up, showing the boy engaging, answering, and smiling happily alongside Dr. Kushwah and the clinical team.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Consultation Box */}
          <div className="rounded-2xl bg-teal-50 border border-teal-200 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Baby className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm md:text-base font-bold text-slate-900">
                  Does Your Child Have Hearing Difficulty or Speech Delay?
                </h4>
                <p className="text-xs text-slate-600">
                  Early cochlear implantation before 2–3 years ensures age-appropriate speech acquisition and brain neuroplasticity.
                </p>
              </div>
            </div>
            <a
              href="tel:+919311449825"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-xl shrink-0 transition shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Book Child Evaluation</span>
            </a>
          </div>
        </section>

        {/* =====================================================
            CLINICAL GUIDE & MEDICAL CONTENT
        ====================================================== */}
        <div className="space-y-12">
          
          {/* Section: What Is a Cochlear Implant? */}
          <section className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm space-y-5">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
                Bionic Hearing Technology
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                How Does a Cochlear Implant Work?
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Unlike traditional hearing aids that merely amplify sound waves through damaged ear anatomy, a cochlear implant is an advanced neural prosthesis. It bypasses damaged inner ear hair cells and delivers precisely engineered electrical impulses directly to the spiral ganglion cells of the auditory nerve.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                  <Volume2 className="w-4 h-4 text-teal-600" />
                  <span>1. External Sound Processor</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Discreetly worn behind the ear, its sensitive microphones capture acoustic sound, digitize the frequencies, and transmit the filtered signal wirelessly through skin via a magnetic headpiece transmitter.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                  <Activity className="w-4 h-4 text-teal-600" />
                  <span>2. Internal Microscopic Receiver &amp; Electrode Array</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Surgically positioned under the scalp, the hermetically sealed receiver decodes the radio signals and channels electric pulses through 12 to 24 flexible intra-cochlear electrode contacts, stimulating hearing nerve fibers.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Candidacy Criteria */}
          <section className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-teal-700 tracking-wider uppercase">
                Clinical Suitability
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Who Is an Ideal Candidate for Cochlear Implantation?
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Cochlear implantation is recommended when bilateral sensorineural hearing loss is too severe to benefit meaningfully from high-powered digital hearing aids.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-xs">
                  <Baby className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Infants &amp; Toddlers (9m – 4y)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Infants diagnosed with congenital deafness or born deaf. Early implantation capitalizes on peak auditory cortex neuroplasticity for normal speech development.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-xs">
                  <Ear className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Older Children &amp; Teens</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Children experiencing progressive hearing deterioration or post-meningitic deafness where hearing aid word comprehension drops below 50%.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-xs">
                  <UserCheck className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Adults &amp; Seniors</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Adults with sudden sensorineural loss or long-standing profound loss who have lost the ability to follow phone conversations or communicate in social settings.
                </p>
              </div>
            </div>
          </section>

          {/* Section: 4-Step Patient Journey */}
          <section className="bg-slate-900 text-white rounded-3xl p-6 md:p-10 shadow-lg space-y-8">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">
                End-to-End Surgical Protocol
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                The 4-Step Cochlear Implant Journey with Dr. Kushwah
              </h2>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                Our hospital centers provide seamless multi-disciplinary care combining advanced micro-surgery, intraoperative electrophysiology, and comprehensive speech rehabilitation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <span className="text-xs font-bold text-teal-400">STEP 01</span>
                <h3 className="font-bold text-white text-sm">Comprehensive Workup</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  BERA, ASSR, high-resolution CT temporal bone &amp; MRI inner ear to assess cochlear patency and nerve integrity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <span className="text-xs font-bold text-teal-400">STEP 02</span>
                <h3 className="font-bold text-white text-sm">Minimally Invasive Surgery</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  2-hour procedure under general anesthesia. Posterior tympanotomy and gentle round-window insertion with Zeiss microscope.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <span className="text-xs font-bold text-teal-400">STEP 03</span>
                <h3 className="font-bold text-white text-sm">Switch-On &amp; Mapping</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  3 to 4 weeks post-surgery after incision healing. External processor is attached, activated, and calibrated to comfort thresholds.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <span className="text-xs font-bold text-teal-400">STEP 04</span>
                <h3 className="font-bold text-white text-sm">Speech Therapy (AVT)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Dedicated Auditory Verbal Therapy sessions train the brain to interpret new electrical auditory signals into fluent speech.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Surgical Excellence Videos (YouTube) */}
          <section className="space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs font-bold text-teal-700 tracking-wider uppercase block mb-1">
                Clinical Educational Series
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Educational Videos &amp; Surgical Insights by Dr. Kushwah
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-black">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/FiRuF6BSx70"
                  title="Dr Dhirendra Singh Kushwah Cochlear Implant Surgery Insights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-black">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/cr6XCPzl1Nk"
                  title="Hearing Restoration & Pediatric ENT Care by Dr Dhirendra Singh Kushwah"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>

          {/* VIP Surgical Desk & 100% Cashless / Insurance Support */}
          <SurgeryLeadDesk 
            procedureName="Cochlear Implant Surgery (Bionic Ear)" 
            customMessage="Hello Dr. Kushwah, I am inquiring about Cochlear Implant candidacy, package cost and insurance/TPA support at ORL Hospital." 
          />

          {/* Bottom Consultation CTA */}
          <section
            className="rounded-3xl p-8 md:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0f766e 0%, #064e3b 55%, #022c22 100%)",
              backgroundColor: "#0f766e"
            }}
          >
            <div className="space-y-2 text-center md:text-left relative z-10">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white" style={{ color: "#ffffff" }}>
                Schedule a Cochlear Implant Candidacy Consultation
              </h3>
              <p className="text-sm md:text-base max-w-xl leading-relaxed" style={{ color: "#ccfbf1" }}>
                Consult with Dr. (Prof.) Dhirendra Singh Kushwah across our 5 Delhi NCR hospital centers: Jasola, CR Park, Arjun Nagar, Palwal, and Dhampur.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto relative z-10">
              <a
                href="tel:+919311449825"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-teal-900 font-bold rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                style={{ backgroundColor: "#ffffff", color: "#134e4a" }}
              >
                Call: +91-9311449825
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold rounded-xl border border-teal-300/40 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: "rgba(4, 47, 46, 0.75)",
                  color: "#ffffff",
                  borderColor: "rgba(94, 234, 212, 0.45)"
                }}
              >
                Visit Clinic
              </Link>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
