import Link from "next/link";
import FaqClient from "./FaqClient";
import { HelpCircle, Phone, Sparkles } from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.in/faq";

  return {
    title:
      "Top ENT Specialist | ENT FAQs – Common Ear, Nose & Throat Questions Answered",
    description:
      "Get answers to common ENT questions including sinus issues, throat problems, surgeries, recovery, and treatments by an experienced ENT specialist, Dr.(Prof.) Dhirendra Singh Kushwah.",
    keywords: [
      "Top ENT Surgeon in India",
      "ENT FAQs",
      "Tympanoplasty Surgery Delhi",
      "Sinus Issues",
      "Throat Problems",
      "ENT Treatments",
      "ENT Recovery",
      "Dr Dhirendra Singh Kushwah FAQ",
    ],
    authors: [{ name: "Dr.(Prof.) Dhirendra Singh kushwah" }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "ENT FAQs | Dr.(Prof.) Dhirendra Singh Kushwah - Senior ENT Surgeon",
      description:
        "Frequently asked questions regarding ear surgeries, sinus treatments, tonsillitis, and OPD consultations.",
      url: url,
      siteName: "Dr.(Prof.) Dhirendra Singh Kushwah - Senior ENT Surgeon",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: "ENT FAQs – Answers by Senior ENT Surgeon Dr. Kushwah",
      description:
        "Understand your symptoms, surgical options, and hospital care before visiting.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const FAQS_LIST = [
  {
    question: "Who is Dr.(Prof.) Dhirendra Singh Kushwah?",
    answer:
      "Dr.(Prof.) Dhirendra Singh Kushwah is a distinguished Senior Consultant ENT Specialist and Skull Base Surgeon with over 25 years of clinical and academic practice. He currently serves as Head of the ENT Department at ORL International Group of Hospitals, New Delhi.",
  },
  {
    question: "Where are Dr. Kushwah's hospital and clinics located?",
    answer:
      "Dr. Kushwah consults at ORL International Group of Hospitals (Plot 89, Pocket 1, Jasola Vihar), ORL International Clinic (J-1981, CR Park), Gynae & ENT Speciality Clinic (19 C Arjun Nagar, Safdarjung Enclave), and regional hospital centres in Palwal and Dhampur.",
  },
  {
    question: "What core ENT services and surgeries are offered?",
    answer:
      "Comprehensive services include Microscopic Ear Surgery (Tympanoplasty, Mastoidectomy, Stapedotomy, Ossiculoplasty), Cochlear & Hearing Implants, Functional Endoscopic Sinus Surgery (FESS), Pain-Free Packless Septoplasty, Coblation Tonsillectomy & Adenoidectomy, Skull Base Surgery, and Dizziness/Vertigo Clinic.",
  },
  {
    question: "What is 'Packless' Septoplasty and how does it benefit patients?",
    answer:
      "Packless Septoplasty is a modern surgical technique where quilting sutures or internal splints are used instead of painful traditional nasal ribbon gauze packs. Patients wake up breathing freely through both nostrils with virtually zero post-operative pain and no traumatic packing removal.",
  },
  {
    question: "How can I book an appointment with Dr. Kushwah?",
    answer:
      "You can book directly by calling our 24x7 OPD desk at +91-9311449825 or by completing the online appointment request form on our website.",
  },
  {
    question: "Does the hospital accept cashless health insurance and TPAs?",
    answer:
      "Yes, ORL International Group of Hospitals provides cashless insurance pre-authorization with all major national health insurance providers, TPAs, and corporate panels.",
  },
  {
    question: "What are the clinic timings across centres?",
    answer:
      "Jasola Hospital: Mon-Sun 9:30 AM to 3:00 PM; CR Park Clinic: Mon-Sat 6:30 PM to 9:00 PM; Safdarjung Enclave: Mon-Sun 4:00 PM to 5:00 PM. Palwal and Dhampur centres operate on designated days by prior appointment.",
  },
  {
    question: "What should I bring for my first clinical consultation?",
    answer:
      "Please bring your past medical records, previous audiological hearing tests (pure tone audiogram/impedance), sinus CT scans or MRI reports, and a list of current medications.",
  },
  {
    question: "Are telemedicine or online video second opinions available?",
    answer:
      "Yes, remote video consultations are available for outstation and international patients seeking second surgical opinions or post-operative follow-up guidance.",
  },
];

export default async function FaqPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_LIST.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs mb-5 font-semibold" aria-label="Breadcrumb">
            <Link href="/" className="text-teal-300 hover:text-white transition-colors underline underline-offset-4 font-medium">
              Home
            </Link>
            <span className="text-teal-400 font-bold">/</span>
            <span className="text-white font-bold bg-teal-950/80 px-2.5 py-0.5 rounded border border-teal-700/60 shadow-xs">Frequently Asked Questions</span>
          </nav>

          <div className="max-w-3xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-teal-400/80 text-teal-200 text-xs font-bold mb-4 shadow-md">
              <HelpCircle className="w-3.5 h-3.5 text-teal-300" />
              <span className="tracking-wide">Patient Education &amp; Advisory</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-sm">
              Frequently Asked Questions
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
              Find answers to commonly asked questions about ENT treatments, surgical procedures, recovery timelines, insurance coverage, and appointment scheduling with <strong className="text-white font-bold bg-teal-950/80 px-2 py-0.5 rounded border border-teal-500/40">Dr.(Prof.) Dhirendra Singh Kushwah</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────── ACCORDION LIST ────────────────── */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Common Clinical &amp; Hospital Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Click any question to view clinical guidance. Have a specific concern? Contact our team directly.
            </p>
          </div>

          <FaqClient faqs={FAQS_LIST} />

          {/* Quick Help Box */}
          <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Still have questions?</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Our clinical coordinator is available to answer your questions or assist with appointments.
              </p>
            </div>
            <a
              href="tel:+919311449825"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl transition whitespace-nowrap shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91-9311449825</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
