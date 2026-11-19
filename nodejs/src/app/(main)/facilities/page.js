import Link from "next/link";
import FacilityImage from "./facilities";
import { FaqAccordion } from "@/components/ui/custom";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Microscope,
  Waves,
  Eye,
  Volume2,
  Zap,
  MapPin,
  ChevronRight,
  Clock,
  CreditCard,
  Building2,
  BedDouble,
  HeartPulse,
  Sparkles,
} from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.com/facilities";

  return {
    title: "Hospital Facilities & Technology | Dr. (Prof.) Dhirendra Singh Kushwah",
    description:
      "Explore state-of-the-art ENT hospital facilities: modular laminar-flow OTs, Carl Zeiss surgical microscopes, Karl Storz 4K endoscopy, cochlear implant & audiology labs in Delhi NCR.",
    keywords: [
      "ENT hospital facilities Delhi",
      "best ENT hospital in Delhi",
      "modular OT ENT surgery Delhi",
      "Karl Storz 4K endoscopy Delhi",
      "Zeiss ear surgery microscope Delhi",
      "cochlear implant facility Delhi",
      "audiology lab South Delhi",
      "ORL International Hospital Jasola",
      "Dr Dhirendra Singh Kushwah facilities",
    ],
    authors: [{ name: "Dr. (Prof.) Dhirendra Singh Kushwah" }],
    alternates: { canonical: url },
    openGraph: {
      title: "Hospital Facilities & Technology | Dr. (Prof.) Dhirendra Singh Kushwah",
      description:
        "Modern modular OTs, Zeiss microscopes, Karl Storz 4K endoscopy, and cochlear implant facilities under Dr. (Prof.) Dhirendra Singh Kushwah.",
      url: url,
      siteName: "Dr. (Prof.) Dhirendra Singh Kushwah ENT Hospital",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "https://www.drdhirendrasinghkushwah.com/images/dhirendra%20kushwah.webp",
          width: 1200,
          height: 630,
          alt: "Dr. (Prof.) Dhirendra Singh Kushwah ENT Hospital Facilities",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Hospital Facilities & Technology | Dr. (Prof.) Dhirendra Singh Kushwah",
      description:
        "Advanced modular OTs, Zeiss microscopes, Storz 4K endoscopy, and audiology suites in Delhi NCR.",
    },
    robots: { index: true, follow: true },
  };
}

export default async function Facilities() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Dr. (Prof.) Dhirendra Singh Kushwah ENT Hospital & Facilities",
    url: "https://www.drdhirendrasinghkushwah.com/facilities",
    logo: "https://www.drdhirendrasinghkushwah.com/images/logo.png",
    image: "https://www.drdhirendrasinghkushwah.com/images/dhirendra%20kushwah.webp",
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
        description: "Minimally invasive FESS surgery using high-definition Karl Storz 4K endoscopy.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Microscopic Ear Surgery",
        description: "High-magnification Zeiss microscopic surgical repair for eardrum perforation and hearing restoration.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Coblation Plasma Surgery",
        description: "Bloodless low-temperature surgical removal of tonsils and adenoids.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Cochlear & Brainstem Implant Program",
        description: "Comprehensive bionic hearing restoration with post-implant AVT rehabilitation.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Sound-Treated Audiological Testing",
        description: "PTA, Impedance Tympanometry, BERA, ASSR, and newborn OAE hearing screening.",
      },
    ],
    openingHours: "Mo-Su 09:00-20:00",
  };

  const faqItems = [
    {
      q: "What surgical infrastructure is available at the hospital?",
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
      a: "High-definition video endoscopy displays the ear canal, eardrum, nasal passages, sinus pathways, and vocal cords on a high-resolution monitor in real-time. This provides clear diagnostic precision and allows patients to see and understand their condition clearly.",
    },
    {
      q: "Where are the clinical and surgical centers located?",
      a: "Surgeries and advanced consultations are conducted at ORL International Hospital (Plot No. 89, Pocket 1, Jasola Vihar, New Delhi - 110025), with outpatient OPD facilities at CR Park (J-1981, Market No. 1) and Arjun Nagar (Safdarjung Enclave).",
    },
    {
      q: "Are cashless insurance and mediclaim facilities available for surgeries?",
      a: "Yes, our hospital has a dedicated insurance TPA coordination desk providing seamless cashless admission and reimbursement support for all ENT surgical procedures across major health insurance providers.",
    },
  ];

  const facilities = [
    {
      title: "Modular Operation Theatres (OT)",
      category: "Surgical Infrastructure",
      icon: ShieldCheck,
      desc: "Ultra-modern surgical suites equipped with Class 10,000 HEPA-filtered laminar airflow and positive pressure ventilation to ensure zero-infection sterile conditions.",
      points: ["100% HEPA laminar airflow", "Advanced multi-parameter anaesthesia monitors"],
      image: "/images/NewImages/OT.jpeg",
    },
    {
      title: "Carl Zeiss Surgical Microscopes",
      category: "Ear Microsurgery",
      icon: Microscope,
      desc: "High-magnification German optical microscopes providing unmatched depth perception for delicate stitchless tympanoplasty, ossicular chain reconstruction, and stapedotomy.",
      points: ["Sub-millimeter surgical accuracy", "Maximum hearing preservation"],
      image: "/images/clinical-moments/dr-dhirendra-kushwah-ent-surgery-operation-theater-02.webp",
    },
    {
      title: "Karl Storz 4K HD Video Endoscopy",
      category: "Sinus & Skull Base",
      icon: Eye,
      desc: "Ultra-high definition video endoscopy towers allowing clear visualization of intricate nasal sinuses, polyps, and skull base structures with zero external incisions.",
      points: ["4K real-time surgical visualization", "Minimally invasive with rapid recovery"],
      image: "/images/clinical-moments/dr-dhirendra-kushwah-ent-surgery-operation-theater-03.webp",
    },
    {
      title: "Coblation Plasma Surgical System",
      category: "Bloodless Care",
      icon: Zap,
      desc: "Gentle low-temperature molecular plasma technology (<60°C) for virtually bloodless, low-pain tonsillectomy, adenoidectomy, and turbinate reduction in children and adults.",
      points: ["Minimal post-operative pain", "Same-day or 24-hour discharge"],
      image: "/images/NewImages/OT2.jpeg",
    },
    {
      title: "Sound-Treated Audiology Suite",
      category: "Diagnostic Lab",
      icon: Waves,
      desc: "Double-walled acoustic chambers equipped with calibrated diagnostic audiometers for Pure Tone Audiometry (PTA), Impedance Tympanometry, BERA/ABR, and newborn OAE screening.",
      points: ["Full diagnostic hearing battery", "Universal newborn screening"],
      image: "/images/fwdupdatesontheentswebsite/facility9.png",
    },
    {
      title: "Cochlear Implant & Bionic Hearing Program",
      category: "700+ Implants",
      icon: Volume2,
      desc: "Complete bionic hearing restoration: pre-operative CT/MRI candidate evaluation, precise surgical implantation, telemetry verification, and dedicated post-implant AVT speech therapy.",
      points: ["Cochlear & BAHA implant systems", "In-house Auditory Verbal Therapy (AVT)"],
      image: "/images/fwdupdatesontheentswebsite/drdhirendrasinghkushwah-ENT-Surgeon.png",
    },
  ];

  const amenities = [
    {
      icon: HeartPulse,
      title: "24x7 Emergency ENT Care",
      desc: "Immediate emergency attention for foreign bodies in ear/nose/throat, nasal bleeding (epistaxis), and acute airway trauma.",
    },
    {
      icon: CreditCard,
      title: "Cashless Mediclaim & TPA",
      desc: "Hassle-free cashless hospitalization and reimbursement support across all major private and PSU health insurance providers.",
    },
    {
      icon: BedDouble,
      title: "Comfortable Inpatient Day Care",
      desc: "Clean, hygienic, air-conditioned patient recovery rooms with attentive nursing care for comfortable post-operative monitoring.",
    },
    {
      icon: Building2,
      title: "In-House Pharmacy & Diagnostics",
      desc: "Immediate on-premise access to prescribed medicines, surgical disposables, and routine ENT pre-operative laboratory investigations.",
    },
  ];

  const centers = [
    {
      tag: "Main Surgical Hospital",
      name: "ORL International Hospital",
      address: "Plot No. 89, Pocket 1, Jasola Vihar, New Delhi - 110025",
      landmark: "Above Kotak Bank, Near Jasola Apollo Metro Station",
      timing: "Open Daily · 24x7 Emergency",
      features: "Modular OTs · Inpatient Wards · Audiology Lab",
    },
    {
      tag: "South Delhi Clinic",
      name: "Dr. Kushwah ENT Clinic, CR Park",
      address: "J-1981, Chittaranjan Park, New Delhi – 110019",
      landmark: "Near Market No. 1, Below ICICI Bank",
      timing: "Monday – Saturday (OPD)",
      features: "Outpatient OPD · Video Endoscopy · Hearing Care",
    },
    {
      tag: "Safdarjung Enclave",
      name: "ENT & Gynae Clinic, Arjun Nagar",
      address: "19-C, Basement, Arjun Nagar, Safdarjung Enclave, New Delhi – 110029",
      landmark: "Near Sukhmani Hospital",
      timing: "Evening OPD by Appointment",
      features: "Consultations · Post-Op Follow-ups",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* =========================================================
          HERO SECTION - CLEAN, WELCOMING, USER-FRIENDLY
      ========================================================== */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/40 via-white to-slate-50/60 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500"
          >
            <Link href="/" className="hover:text-teal-700 transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-teal-700 font-semibold">Facilities</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80">
                <Sparkles size={14} className="text-teal-600" />
                <span>NABH Standard ENT Infrastructure</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                World-Class ENT Facilities &amp; Technology
              </h1>

              <p className="text-sm sm:text-base md:text-lg font-medium text-teal-800">
                Led by Dr. (Prof.) Dhirendra Singh Kushwah &middot; 25+ Years Experience
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Equipped with ultra-modern modular operation theatres, Carl Zeiss surgical microscopes, Karl Storz 4K HD video endoscopy, and complete sound-treated audiology labs designed for accurate diagnosis, painless surgery, and faster patient recovery.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="tel:+919311449825"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-teal-700"
                >
                  <Phone size={17} />
                  <span>Call Hospital: +91-9311449825</span>
                </a>

                <a
                  href="https://wa.me/919311449825?text=Hello%20Doctor,%20I%20would%20like%20to%20know%20more%20about%20your%20ENT%20facilities."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-600 bg-emerald-50 px-5 py-3.5 text-sm font-bold text-emerald-800 transition hover:bg-emerald-100"
                >
                  <MessageCircle size={17} className="text-emerald-600" />
                  <span>WhatsApp Desk</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <span>Book Appointment</span>
                </Link>
              </div>

              {/* Key Trust Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-200 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-teal-600 shrink-0" />
                  <span>Modular OTs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-teal-600 shrink-0" />
                  <span>Zeiss &amp; Storz 4K</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-teal-600 shrink-0" />
                  <span>700+ Implants</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-teal-600 shrink-0" />
                  <span>Cashless TPA</span>
                </div>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg p-3">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100">
                  <FacilityImage
                    src="/images/dhirendra kushwah.webp"
                    alt="Dr. (Prof.) Dhirendra Singh Kushwah - Senior ENT Specialist & Surgeon"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl p-3 shadow-md backdrop-blur-xs bg-teal-900/90 text-white flex items-center justify-between text-xs">
                    <div>
                      <div className="font-extrabold text-sm sm:text-base">
                        Dr. (Prof.) Dhirendra Singh Kushwah
                      </div>
                      <div className="text-teal-200 text-[11px] sm:text-xs">
                        Senior ENT Specialist &amp; Surgeon
                      </div>
                    </div>
                    <span className="font-bold border border-teal-300/40 bg-teal-800/80 px-2.5 py-1 rounded-md text-teal-200 text-[10px] sm:text-xs">
                      25+ Yrs Exp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CORE FACILITIES GRID - CLEAN, VISUAL, PATIENT-FRIENDLY
      ========================================================== */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200/80">
              Technology &amp; Equipment
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              State-of-the-Art Clinical &amp; Surgical Infrastructure
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every facility has been designed to meet strict international sterilization and clinical safety standards, providing patients with superior outcomes and comfortable same-day care.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {facilities.map((facility, index) => {
              const IconComp = facility.icon;
              return (
                <article
                  key={index}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:shadow-md hover:border-teal-300"
                >
                  {/* Card Image */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <FacilityImage
                      src={facility.image}
                      alt={facility.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-lg bg-teal-800/90 backdrop-blur-xs px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                      <IconComp size={14} />
                      <span>{facility.category}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {facility.desc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                      {facility.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 size={14} className="text-teal-600 shrink-0 mt-0.5" />
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
          PATIENT AMENITIES & REASSURANCE
      ========================================================== */}
      <section className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full">
              Patient-First Care
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Hospital Amenities Designed for Your Comfort
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              From admission to discharge, we prioritize your family's convenience and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {amenities.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition hover:shadow-md hover:border-teal-200"
                >
                  <div className="inline-flex p-3 rounded-xl bg-teal-50 text-teal-700 mb-3">
                    <IconComp size={22} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOSPITAL & CLINIC CENTERS
      ========================================================== */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/80">
              Hospital Locations
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Hospital &amp; Consultation Centers
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Visit Dr. (Prof.) Dhirendra Singh Kushwah at our specialized surgical hospital or outpatient clinics across South Delhi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {centers.map((center, cIdx) => (
              <div
                key={cIdx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-xs hover:border-teal-400 hover:bg-white transition-all"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-teal-100 text-teal-800 mb-3">
                    {center.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{center.name}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <MapPin size={15} className="inline mr-1 text-teal-600" />
                    {center.address}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 italic">
                    {center.landmark}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/70 space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-teal-700 font-semibold">
                    <Clock size={14} />
                    <span>{center.timing}</span>
                  </div>
                  <div className="text-slate-500">
                    <strong>Facilities:</strong> {center.features}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ ACCORDION
      ========================================================== */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full">
              Patient Questions
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hospital Facilities &amp; Equipment FAQs
            </h2>
          </div>

          <FaqAccordion faqItems={faqItems} />
        </div>
      </section>

      {/* =========================================================
          CLEAN, ATTRACTIVE BOTTOM CTA
      ========================================================== */}
      <section className="py-10 sm:py-14 bg-gradient-to-r from-teal-800 via-teal-700 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                Experience Advanced ENT Care in South Delhi
              </h2>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-teal-100 max-w-2xl">
                Consult Dr. (Prof.) Dhirendra Singh Kushwah at our Jasola Vihar hospital or CR Park clinic. Cashless mediclaim accepted for all surgical procedures.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href="tel:+919311449825"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-teal-900 shadow-md transition hover:bg-teal-50"
              >
                <Phone size={17} />
                <span>Call +91-9311449825</span>
              </a>

              <a
                href="https://wa.me/919311449825?text=Hello%20Doctor,%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/20"
              >
                <MessageCircle size={17} />
                <span>WhatsApp Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
