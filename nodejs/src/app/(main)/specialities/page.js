import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Award,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Headphones,
  HeartHandshake,
  Layers,
  Microscope,
  Phone,
  ShieldCheck,
  Stethoscope,
  Sparkles,
} from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.com/specialities";

  return {
    title:
      "Advanced ENT Specialities & Surgical Care | Dr.(Prof.) Dhirendra Singh Kushwah Delhi",
    description:
      "Explore comprehensive super-speciality ENT surgical care by Dr.(Prof.) Dhirendra Singh Kushwah (25+ yrs exp). Expert Cochlear Implants, Micro-Ear Surgery, FESS Sinus Surgery, Rhinoplasty, Pediatric ENT & Skull Base Surgery across Delhi NCR.",
    keywords: [
      "ENT Specialities Delhi",
      "Cochlear Implant Centre Delhi",
      "Micro Ear Surgery Specialist",
      "FESS Sinus Surgery Delhi",
      "Skull Base Surgeon Delhi",
      "Tympanoplasty Surgery India",
      "Mastoidectomy Surgeon Delhi",
      "Pediatric ENT Specialist South Delhi",
      "Voice and Throat Surgery Delhi",
      "Neuro-otology Vertigo Clinic Delhi",
      "Septoplasty Surgeon Delhi",
      "Dr Dhirendra Singh Kushwah Specialities",
      "ORL International Group of Hospitals",
    ],
    authors: [{ name: "Dr.(Prof.) Dhirendra Singh Kushwah" }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title:
        "Advanced ENT Specialities & Surgical Excellence | Dr.(Prof.) Dhirendra Singh Kushwah",
      description:
        "Comprehensive ENT super-specialities: Otology, Rhinology, Skull Base, Cochlear Implants, Voice Care, and Pediatric ENT. Over 25 years of surgical excellence in Delhi.",
      url: url,
      siteName: "Dr.(Prof.) Dhirendra Singh Kushwah - Senior ENT Surgeon",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "https://www.drdhirendrasinghkushwah.com/images/gallery/11.webp",
          width: 1200,
          height: 630,
          alt: "Dr. Dhirendra Singh Kushwah ENT Super-Specialities",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Advanced ENT Specialities | Dr.(Prof.) Dhirendra Singh Kushwah",
      description:
        "25+ Years Experience in Advanced ENT & Skull Base Surgery. Consult at Jasola, CR Park & Arjun Nagar.",
    },
    robots: {
      index: true,
      follow: true,
    },
    category: "healthcare",
  };
}

const SPECIALITIES_DATA = [
  {
    id: "cochlear-implants",
    title: "Cochlear & Hearing Implants",
    category: "Otology & Hearing",
    slug: "/specialities/cochlear-hearing-implants",
    badge: "Super Speciality",
    description:
      "Life-transforming bionic hearing restoration for infants, children, and adults with severe-to-profound sensorineural deafness. Comprehensive pre-implant evaluation and post-activation rehabilitation.",
    keyPoints: [
      "Minimally invasive round window surgical insertion",
      "Candidate mapping & speech therapy integration",
      "Bilateral & pediatric implant programs",
    ],
    tech: "Karl Storz & Zeiss High-Magnification Surgical Systems",
  },
  {
    id: "ear-otology",
    title: "Ear Surgery & Micro-Otology",
    category: "Otology & Hearing",
    slug: "/specialities/otology",
    badge: "Core Speciality",
    description:
      "Precision microscopic treatment for chronic ear discharge (CSOM), ear drum perforations, cholesteatoma, hearing loss, and ossicular chain defects.",
    keyPoints: [
      "Endoscopic & microscopic ear techniques",
      "Hearing reconstruction & ossiculoplasty",
      "High success rate eardrum repair",
    ],
    tech: "German Leica / Zeiss Surgical Microscopes",
  },
  {
    id: "tympanoplasty",
    title: "Tympanoplasty Surgery",
    category: "Otology & Hearing",
    slug: "/specialities/tympanoplasty-surgery",
    badge: "Advanced Procedure",
    description:
      "State-of-the-art eardrum grafting and reconstruction surgery to stop recurrent ear discharge, eliminate pain, and restore crisp natural acoustic clarity.",
    keyPoints: [
      "Endaural, post-aural & transcanal approaches",
      "Autologous fascia & cartilage graft preservation",
      "Same-day or short-stay daycare discharge",
    ],
    tech: "Micro-Surgical Instruments & Endoscopes",
  },
  {
    id: "ossiculoplasty",
    title: "Ossiculoplasty Surgery",
    category: "Otology & Hearing",
    slug: "/specialities/ossiculoplasty-surgery",
    badge: "Acoustic Reconstruction",
    description:
      "Precision reconstruction of damaged middle ear tiny bones (Malleus, Incus, Stapes) using titanium/TORP/PORP prostheses to restore mechanical hearing conduction.",
    keyPoints: [
      "Titanium TORP & PORP micro-implants",
      "Overcomes conductive hearing loss",
      "Rigid middle ear biomechanical stability",
    ],
    tech: "Micro-Doppler & High-Definition Otology Equipment",
  },
  {
    id: "mastoidectomy",
    title: "Mastoidectomy Surgery",
    category: "Otology & Hearing",
    slug: "/specialities/mastoidectomy",
    badge: "Infection Eradication",
    description:
      "Complete surgical clearance of cholesteatoma and deep-seated bone infection from the mastoid air cells, safeguarding the facial nerve and brain cavity.",
    keyPoints: [
      "Canal wall up & canal wall down options",
      "Preservation of facial nerve integrity",
      "Prevents life-threatening intracranial spread",
    ],
    tech: "High-Speed Micro Drill with Continuous Irrigation",
  },
  {
    id: "stapedotomy",
    title: "Stapedotomy Surgery",
    category: "Otology & Hearing",
    slug: "/specialities/stapedotomy-surgery",
    badge: "Otosclerosis Cure",
    description:
      "Microscopic laser or fenestration surgery for Otosclerosis (fixed stapes bone). Replaces frozen bone with a Teflon or titanium piston for instant hearing restoration.",
    keyPoints: [
      "Permanent cure for progressive conductive deafness",
      "Local or gentle general anesthesia",
      "Instant improvement in conversational hearing",
    ],
    tech: "Teflon Micro-Piston Implantation",
  },
  {
    id: "nose-sinus-rhinology",
    title: "Nose & Sinus (Rhinology & FESS)",
    category: "Rhinology & Sinus",
    slug: "/specialities/nose-sinus-rhinology",
    badge: "Minimally Invasive",
    description:
      "Advanced Functional Endoscopic Sinus Surgery (FESS) for chronic sinusitis, polyposis, recurrent fungal infections, sinus headaches, and nasal blockages.",
    keyPoints: [
      "No external cuts or visible facial incisions",
      "Endoscopic opening of natural sinus ostia",
      "Rapid relief from chronic pressure & congestion",
    ],
    tech: "HD 4K Karl Storz Endoscopy & Microdebriders",
  },
  {
    id: "septoplasty",
    title: "Pain-Free Packless Septoplasty",
    category: "Rhinology & Sinus",
    slug: "/specialities/septoplasty",
    badge: "Patient-First Technique",
    description:
      "Revolutionary packless septoplasty technique for deviated nasal septum (DNS). Straightens nasal airflow without the agonizing pain of traditional nasal packing.",
    keyPoints: [
      "No painful ribbon gauze or nasal packing",
      "Breathe through nose immediately post-op",
      "Fast return to work within 48 to 72 hours",
    ],
    tech: "Quilting Suture Technique & Coblation Coagulation",
  },
  {
    id: "skull-base",
    title: "Skull Base Surgery",
    category: "Head, Neck & Skull Base",
    slug: "/specialities/skull-base-surgery",
    badge: "Super Speciality",
    description:
      "Multidisciplinary endoscopic transnasal approach to pituitary tumours, CSF rhinorrhea leaks, angiofibromas, and anterior skull base lesions without craniotomy.",
    keyPoints: [
      "Minimally invasive transnasal navigation",
      "CSF leak fistula repair with vascularized flaps",
      "Joint neurosurgical & ENT precision protocols",
    ],
    tech: "Electromagnetic Stealth Navigation & 4-Hand Technique",
  },
  {
    id: "head-neck",
    title: "Head & Neck Surgery & Oncology",
    category: "Head, Neck & Skull Base",
    slug: "/specialities/head-neck-surgery",
    badge: "Oncology Care",
    description:
      "Comprehensive surgical management of neck lumps, thyroid nodules, parotid salivary gland tumours, laryngeal growths, and oral cavity lesions.",
    keyPoints: [
      "Nerve monitoring during parotid & thyroidectomy",
      "Organ preservation and cosmetic neck incisions",
      "Early cancer screening and biopsy clinics",
    ],
    tech: "Intraoperative Nerve Monitoring (NIM Systems)",
  },
  {
    id: "laryngology",
    title: "Voice & Throat (Laryngology)",
    category: "Throat & Voice",
    slug: "/specialities/laryngology",
    badge: "Vocal Care",
    description:
      "Specialized phonosurgery for professional voice users, vocal cord polyps, nodules, cysts, sulcus vocalis, hoarseness, and spasmodic dysphonia.",
    keyPoints: [
      "Stroboscopic dynamic vocal cord diagnostics",
      "Cold-steel micro-laryngeal & laser phonosurgery",
      "Voice rest protocol & clinical speech therapy",
    ],
    tech: "High-Definition Video Laryngo-Stroboscopy",
  },
  {
    id: "tonsillectomy",
    title: "Advanced Coblation Tonsillectomy",
    category: "Throat & Voice",
    slug: "/specialities/tonsillectomy-surgery",
    badge: "Low-Pain Plasma",
    description:
      "Gentle plasma-field Coblation technology for recurrent tonsillitis, enlarged kissing tonsils, and adenoid hypertrophy in pediatric and adult patients.",
    keyPoints: [
      "Low temperature molecular dissolution (40-70°C)",
      "Minimal thermal injury & drastically reduced pain",
      "Rapid return to normal eating within days",
    ],
    tech: "Smith & Nephew Coblation Wand System",
  },
  {
    id: "pediatric-ent",
    title: "Pediatric ENT & Airway Clinic",
    category: "Pediatric ENT",
    slug: "/specialities/pediatric-ent",
    badge: "Child-Centric",
    description:
      "Compassionate, child-friendly care for mouth breathing, childhood snoring, glue ear, adenoids, congenital stridor, foreign body removal, and speech delays.",
    keyPoints: [
      "Tonsil & adenoid reduction without trauma",
      "Grommet ventilation tube insertion for glue ear",
      "Specialized pediatric anesthesia protocols",
    ],
    tech: "Ultra-Thin Pediatric Flexible Video Endoscopes",
  },
  {
    id: "neuro-otology",
    title: "Dizziness & Vertigo (Neuro-Otology)",
    category: "Otology & Hearing",
    slug: "/specialities/neuro-otology",
    badge: "Vestibular Center",
    description:
      "Accurate vestibular assessment and therapeutic maneuvers for BPPV, Meniere's disease, vestibular neuritis, labyrinthitis, and unexplained balance imbalance.",
    keyPoints: [
      "Epley & Semont canalith repositioning therapy",
      "Differential diagnosis of peripheral vs central vertigo",
      "Non-invasive vestibular rehabilitation protocols",
    ],
    tech: "Videonystagmography (VNG) & Balance Profiling",
  },
];

export default async function SpecialitiesHubPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.drdhirendrasinghkushwah.com/specialities/#medicalbusiness",
    name: "Dr.(Prof.) Dhirendra Singh Kushwah - ENT Super-Specialities Department",
    url: "https://www.drdhirendrasinghkushwah.com/specialities",
    telephone: "+91-9311449825",
    image: "https://www.drdhirendrasinghkushwah.com/images/gallery/11.webp",
    medicalSpecialty: [
      "Otolaryngology",
      "PediatricOtolaryngology",
      "HeadAndNeckSurgery",
      "Neurotology",
    ],
    description:
      "World-class super-speciality ENT surgical care department headed by Dr.(Prof.) Dhirendra Singh Kushwah. Providing Cochlear Implants, Micro-Ear Surgery, FESS, Packless Septoplasty, Skull Base Surgery, and Coblation Tonsillectomy in Delhi NCR.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 89, Pocket 1, Jasola Vihar",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110025",
      addressCountry: "IN",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Advanced ENT Surgical Procedures",
      itemListElement: SPECIALITIES_DATA.map((item, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: item.title,
          description: item.description,
          url: `https://www.drdhirendrasinghkushwah.com${item.slug}`,
        },
      })),
    },
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
            <Link href="/" className="text-teal-300 hover:text-white transition underline underline-offset-4 font-medium">Home</Link>
            <span className="text-teal-400 font-bold">/</span>
            <span className="text-white font-bold bg-teal-950/80 px-2.5 py-0.5 rounded border border-teal-700/60 shadow-xs">Specialities</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-teal-400/80 text-teal-200 text-xs font-bold mb-4 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                <span className="tracking-wide">Centers of Surgical Excellence · Delhi NCR</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-sm">
                Super-Speciality ENT Surgical Care
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-100 max-w-2xl leading-relaxed font-normal">
                Led by <strong className="text-white font-bold bg-teal-950/80 px-2 py-0.5 rounded border border-teal-500/40">Dr.(Prof.) Dhirendra Singh Kushwah</strong> (25+ years experience, 15,000+ successful surgeries). We deliver cutting-edge microscopic, endoscopic, and laser surgical interventions across 5 specialized hospital centres.
              </p>

              {/* Trust Badges */}
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-white">
                <div className="flex items-center gap-2 bg-slate-900/95 px-3.5 py-2 rounded-xl border border-teal-500/50 shadow-md">
                  <Microscope className="w-4 h-4 text-teal-300" />
                  <span className="text-slate-100">German Zeiss Microscopes</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/95 px-3.5 py-2 rounded-xl border border-teal-500/50 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-teal-300" />
                  <span className="text-slate-100">Coblation Plasma Wand</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/95 px-3.5 py-2 rounded-xl border border-teal-500/50 shadow-md">
                  <Award className="w-4 h-4 text-teal-300" />
                  <span className="text-slate-100">Stealth Navigation FESS</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="lg:col-span-4 bg-slate-950/95 border border-teal-500/40 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
              <p className="text-xs font-extrabold uppercase tracking-widest text-teal-300">
                Direct OPD Helpline
              </p>
              <h3 className="text-xl font-bold text-white mt-1">
                Have a Complex ENT Case?
              </h3>
              <p className="text-xs text-slate-200 mt-2 leading-relaxed">
                Connect with our clinical team for immediate consultation bookings, second opinions, or cashless TPA guidance.
              </p>
              <a
                href="tel:+919311449825"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm rounded-xl transition shadow-lg hover:shadow-teal-500/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91-9311449825</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── SPECIALITIES GRID ────────────────── */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Complete Spectrum of ENT Medicine
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Explore Our Surgical Specialities & Clinics
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Every procedure is executed using international patient safety protocols, precision magnification, and modern tissue-sparing technologies.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALITIES_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold text-teal-700 uppercase tracking-wider bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-100">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  {/* Special spotlight for Cochlear Implant real patient case */}
                  {item.id === "cochlear-implants" && (
                    <div className="mb-2">
                      <Link
                        href="/specialities/cochlear-hearing-implants#pediatric-case-study"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-bold transition"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Real Child Before &amp; After Case + Videos &rarr;</span>
                      </Link>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition">
                    <Link href={item.slug} className="focus:outline-none">
                      {item.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Clinical Highlights:
                    </p>
                    <ul className="space-y-1.5">
                      {item.keyPoints.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech indicator */}
                  <div className="mt-4 text-[11px] text-teal-800 bg-teal-50/70 p-2 rounded-lg border border-teal-100 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                    <span className="font-medium truncate">{item.tech}</span>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={item.slug}
                    className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    <span>View Full Procedure</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="tel:+919311449825"
                    className="text-[11px] font-semibold text-slate-600 hover:text-teal-700 transition"
                  >
                    Book OPD
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── WHY CHOOSE US STRIP ────────────────── */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-3">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">25+ Years Experience</h4>
              <p className="text-xs text-slate-500 mt-1">
                Senior professorial surgical leadership with 15,000+ documented successful ENT procedures.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-3">
                <Microscope className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Modular Micro-Surgical OTs</h4>
              <p className="text-xs text-slate-500 mt-1">
                Ultra-sterile laminar airflow operation theatres equipped with German visualization optics.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Cashless TPA & Insurance</h4>
              <p className="text-xs text-slate-500 mt-1">
                Hassle-free pre-authorization with all leading national insurance networks and TPAs.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-3">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">5 Convenient Centres</h4>
              <p className="text-xs text-slate-500 mt-1">
                Serving South Delhi (Jasola, CR Park, Safdarjung Enclave) and regional centres in Palwal & Dhampur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── BOTTOM CTA ────────────────── */}
      <section className="py-14 bg-teal-700 text-white text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Schedule an Expert Consultation with Dr. Kushwah
          </h2>
          <p className="text-teal-100 text-sm sm:text-base mt-3 leading-relaxed">
            Get accurate diagnosis, clear surgical counseling, and transparent treatment plans tailored to your medical condition.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919311449825"
              className="px-6 py-3 bg-white text-teal-800 font-bold text-sm rounded-xl shadow-md hover:bg-teal-50 transition"
            >
              Call +91-9311449825
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 bg-teal-800 border border-teal-500 text-white font-bold text-sm rounded-xl hover:bg-teal-900 transition"
            >
              Request Appointment Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
