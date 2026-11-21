import Link from "next/link";
import PatientCareFinder from "@/components/home/components/PatientCareFinder/PatientCareFinder";
import { DOCTOR_PHYSICIAN_SCHEMA, ORL_HOSPITAL_SCHEMA } from "@/lib/surgicalSchema";
import {
  Building2,
  Clock,
  Compass,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
  ShieldCheck,
  Stethoscope,
  ChevronRight,
} from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.com/location";

  return {
    title:
      "Best ENT Clinics Near Me in South Delhi & New Delhi | Locations & OPD | Dr. Kushwah",
    description:
      "Find the best ENT doctor and hospital clinic near you across South Delhi (Jasola Vihar, CR Park, Safdarjung Enclave), Palwal & Dhampur. Book OPD consultation with Dr. Dhirendra Singh Kushwah.",
    keywords: [
      "best ENT doctor near me",
      "best ENT clinic near me",
      "best ENT specialist in South Delhi",
      "best ENT doctor in New Delhi",
      "ENT Clinic Jasola Vihar",
      "ENT Doctor CR Park Delhi",
      "ENT Clinic Safdarjung Enclave",
      "ENT Hospital Palwal",
      "ENT Specialist Dhampur",
      "ORL International Hospital Jasola",
      "Dr Dhirendra Singh Kushwah Clinic Locations",
      "ENT Consultation Delhi NCR",
    ],
    authors: [{ name: "Dr.(Prof.) Dhirendra Singh Kushwah" }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title:
        "Hospital & Clinic Locations | Dr.(Prof.) Dhirendra Singh Kushwah ENT Specialist",
      description:
        "Consult Dr. Dhirendra Singh Kushwah across 5 specialized centres: Jasola Hospital, CR Park Clinic, Arjun Nagar Clinic, Palwal Hospital & Dhampur Hospital.",
      url: url,
      siteName: "Dr.(Prof.) Dhirendra Singh Kushwah - Senior ENT Surgeon",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: "ENT Hospital & Clinic Locations | Delhi NCR",
      description:
        "Consult Dr.(Prof.) Dhirendra Singh Kushwah at 5 hospital and clinic locations in Delhi, Haryana & UP.",
    },
    robots: {
      index: true,
      follow: true,
    },
    category: "healthcare",
  };
}

const LOCATIONS_DATA = [
  {
    id: "jasola",
    name: "ORL International Group of Hospitals",
    area: "Jasola Vihar, New Delhi",
    type: "Main Surgical Hospital & Centre of Excellence",
    badge: "Super-Speciality Hospital",
    address: "Plot No. 89, Pocket 1, Jasola Vihar, New Delhi - 110025",
    landmark: "Near Living Style Mall, 400m from Jasola Apollo Metro Station",
    phone: "+91-9311449825",
    altPhone: "011-35667722 / 35005471 / 35103410",
    timings: "Monday – Sunday: 9:30 AM to 3:00 PM",
    slug: "/location/jasola",
    mapQuery: "ORL+International+Group+of+Hospitals+Jasola+Vihar+New+Delhi+110025",
    mapEmbed:
      "https://maps.google.com/maps?q=ORL+International+Group+of+Hospitals+Jasola+Vihar+New+Delhi+110025&t=&z=15&ie=UTF8&iwloc=&output=embed",
    facilities: [
      "Modular Laminar Flow Operation Theatres",
      "24x7 Emergency ENT Care & Inpatient Beds",
      "Cochlear Implant Rehabilitation Unit",
      "Cashless TPA & All Major Insurances Accepted",
      "Advanced Audiology & Speech Therapy Lab",
    ],
  },
  {
    id: "cr-park",
    name: "ORL International Clinic",
    area: "CR Park, South Delhi",
    type: "Evening Speciality Consultation Clinic",
    badge: "South Delhi OPD",
    address:
      "J-1981, Near Market No 1, Below ICICI Bank, Bipin Chandra Pal Marg, CR Park, New Delhi - 110019",
    landmark: "Near Nehru Enclave / Greater Kailash Metro Station",
    phone: "+91-9311449825",
    altPhone: "011-40224820",
    timings: "Monday – Saturday: 6:30 PM to 9:00 PM",
    slug: "/location/cr-park",
    mapQuery: "ORL+International+Clinic+CR+Park+New+Delhi+110019",
    mapEmbed:
      "https://maps.google.com/maps?q=ORL+International+Clinic+CR+Park+New+Delhi+110019&t=&z=15&ie=UTF8&iwloc=&output=embed",
    facilities: [
      "Diagnostic Video Otoscopy & High-Definition Endoscopy",
      "Pure Tone Audiometry & Tympanometry",
      "Microscopic Ear Wax Removal & Minor Procedures",
      "Vertigo / Dizziness Assessment & Epley Maneuvers",
    ],
  },
  {
    id: "arjun-nagar",
    name: "Gynae & ENT Speciality Clinic",
    area: "Safdarjung Enclave, New Delhi",
    type: "Afternoon Consultation Clinic",
    badge: "Central-South Delhi OPD",
    address:
      "19 C Basement, Arjun Nagar, Near Sukhmani Hospital, Safdarjung Enclave, New Delhi - 110029",
    landmark: "Near Sukhmani Hospital & Green Park Metro Station",
    phone: "+91-9311449825",
    altPhone: "011-40199203",
    timings: "Monday – Sunday: 4:00 PM to 5:00 PM",
    slug: "/location/arjun-nagar",
    mapQuery:
      "19+C+Basement+Arjun+Nagar+Safdarjung+Enclave+New+Delhi+110029",
    mapEmbed:
      "https://maps.google.com/maps?q=19+C+Basement+Arjun+Nagar+Safdarjung+Enclave+New+Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed",
    facilities: [
      "ENT Diagnostic Evaluation",
      "Sinus & Allergy Consultations",
      "Hearing Health Assessment",
      "Minor Daycare Treatment",
    ],
  },
  {
    id: "palwal",
    name: "ORL International Hospital Centre - Palwal",
    area: "Palwal, Haryana",
    type: "Regional Hospital Centre",
    badge: "Haryana Centre",
    address:
      "Aasha Tower, Ground Floor, New Sohna Road, Opp. Ambedkar College, Palwal, Haryana - 121103",
    landmark: "Opposite Dr. B.R. Ambedkar Government College",
    phone: "+91-9311449825",
    altPhone: "OPD Booking Desk",
    timings: "Designated Days / By Prior Appointment",
    slug: "/location/palwal",
    mapQuery:
      "Aasha+Tower+New+Sohna+Road+Ambedkar+College+Palwal+Haryana+121103",
    mapEmbed:
      "https://maps.google.com/maps?q=Aasha+Tower+New+Sohna+Road+Palwal+Haryana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    facilities: [
      "Specialist ENT Consultations",
      "Surgical Evaluation & Second Opinions",
      "Hearing Loss Screening",
      "Pre & Post-Operative Patient Care",
    ],
  },
  {
    id: "dhampur",
    name: "ORL International Hospital Centre - Dhampur",
    area: "Dhampur, Bijnor (UP)",
    type: "Regional Hospital Centre",
    badge: "Uttar Pradesh Centre",
    address:
      "Near RSM Tiraha, Front of Pari Farm House, Moradabad Road, Dhampur, Uttar Pradesh - 246761",
    landmark: "Moradabad Road, Near RSM Tiraha",
    phone: "+91-9311449825",
    altPhone: "Direct Hospital Desk",
    timings: "Scheduled Surgical Camps & Prior Appointment",
    slug: "/location/dhampur",
    mapQuery: "RSM+Tiraha+Moradabad+Road+Dhampur+Uttar+Pradesh+246761",
    mapEmbed:
      "https://maps.google.com/maps?q=RSM+Tiraha+Dhampur+Uttar+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed",
    facilities: [
      "Advanced ENT Clinical OPD",
      "Hearing Aid & Rehabilitation Counselling",
      "Sinusitis & Allergy Diagnostics",
      "Cochlear Implant Surgical Second Opinions",
    ],
  },
];

export default async function LocationHubPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      ...LOCATIONS_DATA.map((loc) => ({
        "@type": "MedicalClinic",
        "@id": `https://www.drdhirendrasinghkushwah.com${loc.slug}/#clinic`,
        name: loc.name,
        description: loc.type,
        telephone: loc.phone,
        url: `https://www.drdhirendrasinghkushwah.com${loc.slug}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: loc.address,
          addressLocality: loc.area,
          addressCountry: "IN",
        },
        aggregateRating: DOCTOR_PHYSICIAN_SCHEMA.aggregateRating,
      })),
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

      {/* ────────────────── HERO BANNER ────────────────── */}
      <section
        className="relative text-white pt-14 pb-16 px-4 sm:px-6 lg:px-8 border-b border-teal-950 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #022c22 0%, #064e3b 40%, #0f766e 85%, #042f2e 100%)",
        }}
      >
        <div className="relative max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-teal-100 mb-6 font-semibold">
            <Link href="/" className="hover:text-white transition underline underline-offset-4">Home</Link>
            <span className="text-teal-300">/</span>
            <span className="text-white">Locations</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-400/40 text-emerald-200 text-xs font-bold mb-4 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-emerald-300" />
              <span>5 Centers Across Delhi NCR, Haryana &amp; UP</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Hospital &amp; Clinic Network
            </h1>

            <p className="mt-4 text-base sm:text-lg text-teal-50 leading-relaxed font-normal">
              Dr.(Prof.) Dhirendra Singh Kushwah offers consultation and surgical services across premier hospital facilities and neighborhood speciality clinics, ensuring accessible, world-class ENT care near you.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+919311449825"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm transition shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Central Booking Desk: +91-9311449825</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-teal-500/40 text-white font-semibold text-sm transition shadow-xs"
              >
                <span>Request Appointment Online</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ────────────────── LOCATIONS LIST ────────────────── */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Find Your Nearest Centre
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Consultation Centres &amp; Timings
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Please confirm slot availability before visiting to ensure minimal waiting time.
            </p>
          </div>

          <div className="space-y-8">
            {LOCATIONS_DATA.map((loc, idx) => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Column: Details */}
                  <div className="p-6 sm:p-8 lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Header tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider bg-teal-50 text-teal-800 px-2.5 py-1 rounded-md border border-teal-200">
                          {loc.badge}
                        </span>
                        <span className="text-xs font-medium text-slate-500">
                          Centre #{idx + 1}
                        </span>
                      </div>

                      {/* Hospital Name */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {loc.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-teal-700 mt-0.5">
                        {loc.type}
                      </p>

                      {/* Address & Metro */}
                      <div className="mt-5 space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <strong className="text-slate-900 block font-semibold">Address:</strong>
                            {loc.address}
                            <span className="block text-slate-500 text-xs mt-0.5">
                              Landmark: {loc.landmark}
                            </span>
                          </div>
                        </div>

                        {/* Timings */}
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <div className="text-xs sm:text-sm text-slate-700">
                            <strong className="text-slate-900 block font-semibold">OPD Timings:</strong>
                            <span className="text-teal-900 font-medium">{loc.timings}</span>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <div className="text-xs sm:text-sm text-slate-700">
                            <strong className="text-slate-900 block font-semibold">Contact:</strong>
                            <a
                              href={`tel:${loc.phone}`}
                              className="text-teal-700 font-bold hover:underline"
                            >
                              {loc.phone}
                            </a>
                            {loc.altPhone && (
                              <span className="block text-slate-500 text-xs mt-0.5">
                                {loc.altPhone}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Key Facilities */}
                      <div className="mt-5 pt-4 border-t border-slate-100">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Available Infrastructure &amp; Services:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {loc.facilities.map((fac, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-center gap-2 text-xs text-slate-600"
                            >
                              <ShieldCheck className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                              <span>{fac}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
                      <a
                        href={`tel:${loc.phone}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs rounded-xl transition shadow-sm"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Centre</span>
                      </a>

                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${loc.mapQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition"
                      >
                        <Navigation className="w-3.5 h-3.5 text-teal-700" />
                        <span>Get Driving Directions</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>

                      <Link
                        href={loc.slug}
                        className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-900 ml-auto"
                      >
                        <span>Location Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Google Maps Embed */}
                  <div className="bg-slate-100 lg:col-span-5 h-[280px] lg:h-auto min-h-[260px] relative border-t lg:border-t-0 lg:border-l border-slate-200">
                    <iframe
                      src={loc.mapEmbed}
                      className="w-full h-full border-0 absolute inset-0"
                      loading="lazy"
                      title={`${loc.name} Google Map`}
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Bilingual Patient Care Finder & Free 2nd Opinion Desk */}
      <PatientCareFinder />

      {/* ────────────────── BOTTOM CTA ────────────────── */}
      <section className="py-14 bg-teal-700 text-white text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Need Assistance Choosing the Right Hospital Centre?
          </h2>
          <p className="text-teal-100 text-sm sm:text-base mt-3 leading-relaxed">
            Our medical coordinators will guide you to the nearest OPD or schedule surgical admissions with priority cashless processing.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919311449825"
              className="px-6 py-3 bg-white text-teal-800 font-bold text-sm rounded-xl shadow-md hover:bg-teal-50 transition"
            >
              Call Coordinator: +91-9311449825
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 bg-teal-800 border border-teal-500 text-white font-bold text-sm rounded-xl hover:bg-teal-900 transition"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
