import Link from "next/link";
import FacilityImage from "./facilities";
import { FaqAccordion } from "@/components/ui/custom";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import {
  ShieldCheck,
  Award,
  Calendar,
  CheckCircle2,
  Phone,
  MessageCircle,
  Clock,
  Sparkles,
  ArrowRight,
  Activity,
  Stethoscope,
  Microscope,
  Waves,
  Eye,
  Volume2,
  Zap,
  MapPin,
  ChevronRight,
} from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.in/facilities";

  return {
    title:
      "World-Class ENT Care Facilities | Dr. (Prof.) Dhirendra Singh Kushwah",
    description:
      "Explore advanced ENT diagnostic and surgical facilities by Dr. (Prof.) Dhirendra Singh Kushwah: modular OTs, Zeiss microscopes, Storz 4K endoscopy, cochlear implants & audiology suites.",
    keywords: [
      "ENT specialist in Delhi",
      "ENT facilities in Delhi",
      "best ENT hospital in Delhi",
      "cochlear implant facility Delhi",
      "modular OT ENT surgery Delhi",
      "Karl Storz endoscopy ENT Delhi",
      "Zeiss ear surgery microscope Delhi",
      "audiology lab Delhi",
      "newborn hearing screening Delhi",
      "sinus surgery clinic Jasola",
      "ENT hospital Jasola Vihar",
      "Dr Dhirendra Singh Kushwah facilities",
    ],
    authors: [{ name: "Dr. (Prof.) Dhirendra Singh Kushwah" }],
    alternates: { canonical: url },
    openGraph: {
      title:
        "World-Class ENT Care Facilities | Dr. (Prof.) Dhirendra Singh Kushwah",
      description:
        "Explore advanced ENT surgical and diagnostic facilities: modular OTs, Zeiss microscopes, 4K endoscopy, cochlear implants, and audiology suites in South Delhi.",
      url: url,
      siteName: "Dr. (Prof.) Dhirendra Singh Kushwah ENT Hospital",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "https://www.drdhirendrasinghkushwah.in/images/ORL-Hospital-Facility-ENT-Surgeon-Dr-Dhirendra-Singh-Kushwah.png",
          width: 1200,
          height: 630,
          alt: "Dr. (Prof.) Dhirendra Singh Kushwah ENT Hospital Facilities",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "World-Class ENT Care Facilities | Dr. (Prof.) Dhirendra Singh Kushwah",
      description:
        "Advanced modular OTs, Zeiss microscopes, Storz 4K endoscopy, and cochlear implant facilities in Delhi NCR.",
    },
    robots: { index: true, follow: true },
  };
}

export default async function Facilities() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Dr. (Prof.) Dhirendra Singh Kushwah ENT Hospital & Facilities",
    url: "https://www.drdhirendrasinghkushwah.in/facilities",
    logo: "https://www.drdhirendrasinghkushwah.in/images/logo.png",
    image:
      "https://www.drdhirendrasinghkushwah.in/images/ORL-Hospital-Facility-ENT-Surgeon-Dr-Dhirendra-Singh-Kushwah.png",
    description:
      "State-of-the-art ENT hospital offering modular laminar-flow operation theatres, Zeiss surgical microscopes, Karl Storz 4K endoscopy, cochlear implant suites, and complete audiology labs.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 89, Pocket 1, Jasola Vihar",
      addressLocality: "New Delhi",
      postalCode: "110025",
      addressCountry: "IN",
    },
    telephone: "+91-9311449825",
    medicalSpecialty: [
      "Otolaryngology",
      "Pediatric ENT",
      "Audiology",
      "Speech-Language Pathology",
      "Sleep Medicine",
      "Allergy & Immunology",
      "Skull Base Surgery",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Endoscopic Sinus & Skull Base Surgery",
        description:
          "Minimally invasive FESS surgery using high-definition 4K endoscopic systems.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Microscopic Ear Surgery",
        description:
          "High-magnification Zeiss microscopic surgical repair for eardrum perforation and hearing reconstruction.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Coblation Plasma Surgery",
        description:
          "Bloodless low-temperature surgical removal of tonsils and adenoids.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Cochlear & Brainstem Implant Program",
        description:
          "Comprehensive bionic hearing restoration with post-implant AVT rehabilitation.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Sound-Treated Audiological Testing",
        description:
          "PTA, Impedance Tympanometry, BERA, ASSR, and newborn OAE hearing screening.",
      },
    ],
    openingHours: "Mo-Su 09:00-20:00",
  };

  const faqItems = [
    {
      q: "What surgical infrastructure is available at Dr. (Prof.) Dhirendra Singh Kushwah's hospital?",
      a: "Our hospital features ultra-modern modular operation theatres equipped with HEPA laminar air filtration, Carl Zeiss operating microscopes, Karl Storz 4K HD endoscopic visualization towers, and low-temperature Coblation plasma surgical systems for painless, bloodless procedures.",
    },
    {
      q: "Is pediatric cochlear implant surgery available with full rehabilitation?",
      a: "Yes. Dr. (Prof.) Dhirendra Singh Kushwah has guided over 700 successful cochlear implant recipients. The facility provides complete pre-implant audiological evaluation, bionic surgical implantation, digital processor mapping, and dedicated Auditory Verbal Therapy (AVT).",
    },
    {
      q: "What newborn and pediatric hearing screening facilities are available?",
      a: "We perform universal newborn hearing screenings using non-invasive Otoacoustic Emissions (OAE) and automated Auditory Brainstem Response (BERA / ABR) tests to detect congenital hearing loss within the critical first months of life.",
    },
    {
      q: "How does video endoscopy benefit ENT diagnosis?",
      a: "High-definition video endoscopy displays the ear canal, eardrum, nasal passages, sinus pathways, and vocal cords on a high-resolution monitor in real-time. This provides clear diagnostic precision and allows patients to see their condition clearly.",
    },
    {
      q: "Where are the clinical and surgical centers located?",
      a: "Surgeries and advanced consultations are conducted at ORL International Group of Hospitals (Plot No. 89, Pocket 1, Jasola Vihar, New Delhi - 110025), with outpatient OPD facilities at CR Park (J-1981, Market No. 1) and Arjun Nagar (Safdarjung Enclave).",
    },
    {
      q: "Are cashless insurance and mediclaim facilities available for surgeries?",
      a: "Yes, our hospital has a dedicated insurance TPA coordination desk providing seamless cashless admission and reimbursement support for all ENT surgical procedures across major health insurance providers.",
    },
  ];

  const facilityHighlights = [
    {
      icon: Microscope,
      title: "Modular Operation Theatres",
      badge: "Infection Control",
      desc: "HEPA-filtered laminar airflow, positive pressure ventilation, and rigorous sterile protocols ensuring maximum safety for delicate microsurgery.",
      points: [
        "Class 10,000 sterile laminar airflow",
        "Multi-parameter surgical anaesthesia monitors",
        "Dedicated post-operative recovery bays",
      ],
      img: "/images/NewImages/OT1.jpeg",
    },
    {
      icon: Eye,
      title: "Carl Zeiss Operating Microscopes",
      badge: "Microsurgery",
      desc: "High-magnification surgical visualization for stitchless tympanoplasty, ossiculoplasty, and stapedotomy with hearing preservation.",
      points: [
        "Unrivalled stereoscopic depth & clarity",
        "Preserves delicate middle-ear ossicles",
        "Micro-instrumentation for stitchless repair",
      ],
      img: "/images/clinical-moments/dr-dhirendra-kushwah-ent-surgery-operation-theater-02.webp",
    },
    {
      icon: Zap,
      title: "Karl Storz 4K HD Endoscopy",
      badge: "Sinus & Skull Base",
      desc: "Next-generation 4K ultra-definition video towers for precision Functional Endoscopic Sinus Surgery (FESS) and skull base defect repairs.",
      points: [
        "Crystal-clear visualization of sinus anatomy",
        "Minimally invasive with zero external scars",
        "Faster recovery with packless techniques",
      ],
      img: "/images/clinical-moments/dr-dhirendra-kushwah-ent-surgery-operation-theater-03.webp",
    },
    {
      icon: Volume2,
      title: "Cochlear & Auditory Implant Suite",
      badge: "700+ Implants",
      desc: "End-to-end bionic hearing restoration: pre-operative CT/MRI candidate evaluation, precise surgical placement, and telemetry verification.",
      points: [
        "Cochlear, BAHA, Bonebridge & ABI systems",
        "Neural response telemetry (NRT) verification",
        "Full post-implant processor programming",
      ],
      img: "/images/fwdupdatesontheentswebsite/facility9.png",
    },
    {
      icon: Waves,
      title: "Sound-Treated Audiology Suite",
      badge: "Diagnostic Lab",
      desc: "Double-walled acoustic chambers equipped with calibrated diagnostic audiometers, tympanometers, and electrophysiological testing units.",
      points: [
        "Pure Tone (PTA) & Speech Audiometry",
        "BERA / ABR & ASSR threshold testing",
        "OAE newborn hearing screening tests",
      ],
      img: "/images/fwdupdatesontheentswebsite/drdhirendrasinghkushwah-ENT-Surgeon.png",
    },
    {
      icon: Activity,
      title: "Coblation Plasma Surgical Unit",
      badge: "Bloodless Care",
      desc: "Gentle low-temperature molecular plasma technology for virtually bloodless, low-pain tonsillectomy, adenoidectomy, and turbinate reduction.",
      points: [
        "Operating temperature under 60°C (prevents burns)",
        "Drastically reduced post-op pain for children",
        "Same-day or 24-hour rapid discharge",
      ],
      img: "/images/NewImages/OT2.jpeg",
    },
  ];

  return (
    <>
      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* =========================================================
          HERO SECTION - RESPONSIVE ACROSS ALL DEVICES
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Ambient Gradient Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(13, 148, 136, 0.28) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(15, 118, 110, 0.22) 0%, transparent 50%), linear-gradient(180deg, rgba(2, 6, 23, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)",
          }}
        />

        {/* Subtle Grid Backdrop Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-14 md:pb-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs md:text-sm text-slate-400"
          >
            <Link href="/" className="hover:text-teal-300 transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-slate-600" />
            <span className="text-teal-400 font-medium">Facilities</span>
          </nav>

          <div className="max-w-4xl">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-teal-300 backdrop-blur-sm">
              <ShieldCheck size={16} className="text-teal-400 shrink-0" />
              <span>Advanced Surgical &amp; Diagnostic Infrastructure</span>
            </div>

            {/* H1 Heading */}
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              World-Class ENT Care Facilities &amp; Technology
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-300">
              Equipped with ultra-modern modular operation theatres, Carl Zeiss
              high-magnification surgical microscopes, Karl Storz 4K HD video
              endoscopy towers, and full-spectrum audiological suites under the
              clinical leadership of{" "}
              <strong className="text-white font-semibold">
                Dr. (Prof.) Dhirendra Singh Kushwah
              </strong>
              .
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="tel:+919311449825"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-600/30 transition hover:bg-teal-500 hover:shadow-teal-500/40"
              >
                <Phone size={17} />
                <span>Call Hospital: +91-9311449825</span>
              </a>

              <a
                href="https://wa.me/919311449825?text=Hello%20Doctor,%20I%20would%20like%20to%20know%20more%20about%20your%20ENT%20facilities."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-3.5 text-sm font-bold text-emerald-300 backdrop-blur-sm transition hover:bg-emerald-500/20 hover:border-emerald-400/50"
              >
                <MessageCircle size={17} />
                <span>WhatsApp Desk</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <span>Book Appointment</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Key Metric Highlights Strip */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-teal-300">
                25+ Years
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
                Surgical &amp; Clinical Excellence
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-teal-300">
                15,000+
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
                Completed Micro &amp; Endoscopic Surgeries
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-teal-300">
                700+
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
                Cochlear &amp; Bionic Implant Recipients
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-teal-300">
                100%
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
                Modular HEPA-Filtered OTs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MEDICAL REVIEW BADGE - NOW WITH REAL DOCTOR PORTRAIT
      ========================================================== */}
      <section className="bg-slate-50 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <MedicalReviewBadge procedureName="Advanced ENT Hospital Facilities &amp; Technology" />
        </div>
      </section>

      {/* =========================================================
          KEY INFRASTRUCTURE PILLARS (CARD GRID)
      ========================================================== */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
              Technology &amp; Equipment
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              State-of-the-Art ENT Clinical &amp; Surgical Infrastructure
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every procedure is backed by globally recognized surgical equipment
              ensuring patient safety, microscopic accuracy, and comfortable
              same-day recovery.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {facilityHighlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <article
                  key={idx}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-teal-300"
                >
                  {/* Card Image */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <FacilityImage
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 60%)",
                      }}
                    />
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 rounded-lg bg-teal-700/95 px-2.5 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-sm">
                      <IconComp size={14} />
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      {item.points.map((pt, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-teal-600 shrink-0 mt-0.5"
                          />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          DETAILED SECTION 1: ADVANCED DIAGNOSTIC SUITES
      ========================================================== */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-y border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-lg p-3">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                  <FacilityImage
                    src="/images/ORL-Hospital-Facility-ENT-Surgeon-Dr-Dhirendra-Singh-Kushwah.png"
                    alt="Advanced ENT Diagnostic & Endoscopy Equipment"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 bg-teal-50/70 rounded-xl mt-3 border border-teal-100 flex items-center justify-between text-xs text-teal-900 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Sparkles size={14} className="text-teal-600" />
                    HD Video Endoscopy
                  </span>
                  <span>Same-Day Transparent Diagnosis</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 uppercase tracking-wider border border-teal-200/60">
                Precision Diagnosis
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Advanced Diagnostic Facilities for Ear, Nose &amp; Throat
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Accurate diagnosis is the cornerstone of successful clinical
                treatment. Dr. (Prof.) Dhirendra Singh Kushwah’s outpatient clinics
                are equipped with cutting-edge visual and electrophysiological
                tools, allowing patients to clearly see and understand their own
                findings in real time.
              </p>

              <div className="space-y-4 pt-2">
                <div className="rounded-xl bg-white border border-slate-200/80 p-4 shadow-xs">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Eye size={17} className="text-teal-600" />
                    Video Endoscopy of the Ear, Nose &amp; Larynx
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    High-definition digital endoscopy provides high-magnification
                    views of the ear canal, eardrum perforation, deviated nasal
                    septum, sinus ostia, and vocal cord nodules on an external
                    display for total diagnostic transparency.
                  </p>
                </div>

                <div className="rounded-xl bg-white border border-slate-200/80 p-4 shadow-xs">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Activity size={17} className="text-teal-600" />
                    Allergy Testing — Blood Tests &amp; Skin Prick Tests
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pinpoints exact environmental and dietary allergens triggering
                    chronic rhinitis, sneezing, nasal polyps, and recurrent
                    sinusitis, replacing guesswork with targeted immunotherapy.
                  </p>
                </div>

                <div className="rounded-xl bg-white border border-slate-200/80 p-4 shadow-xs">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Waves size={17} className="text-teal-600" />
                    Specialized Balance &amp; Vertigo Evaluation Lab
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Differentiates inner-ear vestibular balance disorders (such as
                    BPPV, Meniere’s, and labyrinthitis) from central neurological
                    causes to establish precise medical rehabilitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DETAILED SECTION 2: SURGICAL EXCELLENCE & MODULAR OTS
      ========================================================== */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 uppercase tracking-wider border border-teal-200/60">
                Minimally Invasive Surgery
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Modern Surgical Suites &amp; Infection-Controlled Theatres
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Operating within dedicated hospital OT suites in South Delhi, Dr.
                Kushwah performs intricate microsurgical and endoscopic
                procedures with advanced equipment designed to reduce trauma,
                accelerate wound healing, and minimize hospital stay.
              </p>

              <div className="space-y-4 pt-2">
                <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-4">
                  <h3 className="text-base font-bold text-slate-900">
                    Endoscopic Sinus (FESS) &amp; Skull Base Surgery
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Utilizing 4K Karl Storz optical towers, micro-debriders, and
                    navigation systems for gentle clearance of refractory nasal
                    polyps, chronic sinus blockage, and endoscopic repair of CSF
                    leaks without facial incisions.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-4">
                  <h3 className="text-base font-bold text-slate-900">
                    High-Precision Microscopic Ear Surgery
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Stitchless tympanoplasty (eardrum repair), mastoidectomy for
                    cholesteatoma, ossicular chain reconstruction, and stapedotomy
                    performed under high-magnification Carl Zeiss operating
                    microscopes.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-4">
                  <h3 className="text-base font-bold text-slate-900">
                    Coblation Plasma &amp; Radiofrequency Surgery
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Molecular dissociation plasma enables virtually bloodless
                    removal of tonsils and adenoids at low temperatures (40°C–70°C),
                    vastly reducing post-operative pain for pediatric and adult
                    patients.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-lg p-3">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                  <FacilityImage
                    src="/images/clinical-moments/dr-dhirendra-kushwah-ent-surgery-operation-theater-01.webp"
                    alt="Dr. Dhirendra Singh Kushwah Operating in Modular OT"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 bg-teal-50/70 rounded-xl mt-3 border border-teal-100 flex items-center justify-between text-xs text-teal-900 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-teal-600" />
                    Modular OT Suite
                  </span>
                  <span>HEPA Laminar Air Flow System</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DETAILED SECTION 3: COCHLEAR IMPLANT & AUDITORY PROGRAM
      ========================================================== */}
      <section className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(13, 148, 136, 0.25) 0%, transparent 50%), linear-gradient(180deg, #0f172a 0%, #020617 100%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 uppercase tracking-wider border border-teal-400/30">
              Pioneering Bionic Hearing
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Cochlear Implant &amp; Auditory Brainstem Implant Program
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Dr. (Prof.) Dhirendra Singh Kushwah leads one of North India’s most
              established cochlear implant centres, having successfully
              performed over{" "}
              <strong className="text-teal-300 font-semibold">
                700+ implant surgeries
              </strong>{" "}
              for congenital deaf children and adults with profound hearing
              loss.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Volume2 size={18} className="text-teal-400" />
                Cochlear Implants (CI)
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Directly stimulates the auditory nerve endings inside the cochlea,
                transforming sound waves into electrical pulses for patients with
                severe-to-profound hearing loss.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Waves size={18} className="text-teal-400" />
                BAHA &amp; Bonebridge
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Bone-conduction hearing implants that bypass congenital ear canal
                atresia, chronic middle-ear drainage, or single-sided deafness
                via skull bone transmission.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Microscope size={18} className="text-teal-400" />
                Auditory Brainstem Implants
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Specialized implant for cases where the auditory nerve is absent
                or non-functional (such as NF-2), stimulating the brainstem
                auditory nuclei directly.
              </p>
            </div>
          </div>

          {/* Post-Implant AVT Strip */}
          <div className="mt-8 rounded-2xl border border-teal-500/30 bg-teal-950/40 p-6 backdrop-blur-sm">
            <h3 className="text-base sm:text-lg font-bold text-teal-300">
              End-to-End Post-Implant Speech Rehabilitation &amp; AVT
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Surgery is only step one. Our in-house audiological rehabilitation
              team delivers regular digital processor mapping, telemetry checks,
              and one-on-one Auditory Verbal Therapy (AVT) to help children develop
              natural speech and language proficiency for mainstream schooling.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          DETAILED SECTION 4: COMPLETE AUDIOLOGY & SPEECH LABS
      ========================================================== */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-lg p-3">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                  <FacilityImage
                    src="/images/fwdupdatesontheentswebsite/facility9.png"
                    alt="Audiology and Hearing Evaluation Lab"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 bg-teal-50/70 rounded-xl mt-3 border border-teal-100 flex items-center justify-between text-xs text-teal-900 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Volume2 size={14} className="text-teal-600" />
                    Sound-Treated Chambers
                  </span>
                  <span>Calibrated Audiometers &amp; BERA</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 uppercase tracking-wider border border-teal-200/60">
                Hearing &amp; Speech Diagnostics
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Complete Audiological &amp; Speech-Language Pathology Lab
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                From universal newborn hearing screening to complex neurological
                speech disorders, our specialized diagnostic labs provide
                certified testing for all age groups.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Pure Tone Audiogram (PTA)
                  </h4>
                  <p className="mt-1 text-xs text-slate-600">
                    Standardized hearing acuity test classifying conductive,
                    sensorineural, or mixed hearing loss.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Impedance Tympanometry
                  </h4>
                  <p className="mt-1 text-xs text-slate-600">
                    Evaluates middle-ear pressure, fluid effusion, and Eustachian
                    tube patency in adults and children.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    BERA / ABR Testing
                  </h4>
                  <p className="mt-1 text-xs text-slate-600">
                    Electrophysiological assessment of brainstem auditory evoked
                    potentials for infants and non-cooperative patients.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    OAE Newborn Screening
                  </h4>
                  <p className="mt-1 text-xs text-slate-600">
                    Quick, non-invasive otoacoustic emission test checking outer
                    hair cell function within the first days of life.
                  </p>
                </div>
              </div>

              {/* Speech Therapy Overview */}
              <div className="mt-4 rounded-xl border border-teal-200/80 bg-teal-50/50 p-4 text-xs sm:text-sm text-slate-700">
                <strong className="text-teal-900 font-bold block mb-1">
                  Speech &amp; Voice Pathology Services:
                </strong>
                Therapy for childhood stuttering, articulation delays, post-stroke
                dysphasia, vocal cord nodule voice training, and post-implant
                auditory habilitation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BRANCH CLINICS & HOSPITAL CENTRES
      ========================================================== */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
              Locations
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hospital &amp; Clinic Centers in Delhi NCR
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Consult Dr. (Prof.) Dhirendra Singh Kushwah across convenient
              hospital and outpatient facilities in South Delhi.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Center 1: Jasola Vihar */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-teal-400 transition-colors">
              <div className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider mb-2">
                <MapPin size={16} />
                <span>Primary Hospital Centre</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                ORL International Hospital, Jasola
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Plot No. 89, Pocket 1, Jasola Vihar, New Delhi - 110025 (Above
                Kotak Bank, Near Jasola Apollo Metro).
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Modular OT &amp; Surgeries</span>
                <span className="font-semibold text-teal-700">Open Daily</span>
              </div>
            </div>

            {/* Center 2: CR Park */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-teal-400 transition-colors">
              <div className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider mb-2">
                <MapPin size={16} />
                <span>South Delhi Clinic</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Dr. Kushwah ENT Clinic, CR Park
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                J-1981, Near Market No. 1, Below ICICI Bank, Bipin Chandra Pal
                Marg, Chittaranjan Park, New Delhi – 110019.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>OPD &amp; Endoscopy</span>
                <span className="font-semibold text-teal-700">Mon - Sat</span>
              </div>
            </div>

            {/* Center 3: Arjun Nagar */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-teal-400 transition-colors">
              <div className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider mb-2">
                <MapPin size={16} />
                <span>Safdarjung Center</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                ENT &amp; Gynae Clinic, Arjun Nagar
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                19-C, Basement, Arjun Nagar, Safdarjung Enclave, Near Sukhmani
                Hospital, New Delhi – 110029.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Consultations</span>
                <span className="font-semibold text-teal-700">Evening OPD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ ACCORDION SECTION
      ========================================================== */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hospital Facilities &amp; Equipment FAQs
            </h2>
          </div>

          <FaqAccordion faqItems={faqItems} />
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA SECTION
      ========================================================== */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-teal-700 via-teal-800 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Need Advanced ENT Surgical or Diagnostic Care?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-teal-100 max-w-2xl">
                Consult Dr. (Prof.) Dhirendra Singh Kushwah at our advanced
                Jasola Vihar hospital or CR Park clinic. Cashless mediclaim
                accepted for all surgical procedures.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="tel:+919311449825"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-teal-900 shadow-md transition hover:bg-teal-50"
              >
                <Phone size={17} />
                <span>Call +91-9311449825</span>
              </a>

              <a
                href="https://wa.me/919311449825?text=Hello%20Doctor,%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/20"
              >
                <MessageCircle size={17} />
                <span>WhatsApp Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
