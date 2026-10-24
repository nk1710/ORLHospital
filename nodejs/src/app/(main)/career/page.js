import Link from "next/link";
import {
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.in/career";

  return {
    title: "Careers & Clinical Fellowships | ORL International Hospitals Delhi",
    description:
      "Join the clinical and surgical team of Dr.(Prof.) Dhirendra Singh Kushwah. Explore career opportunities for ENT surgeons, audiologists, OT staff nurses, and clinic administrators in Delhi NCR.",
    keywords: [
      "ENT Surgeon jobs Delhi",
      "Audiologist jobs South Delhi",
      "Hospital Nurse careers Delhi",
      "ORL International Hospital careers",
      "ENT fellowship Delhi",
    ],
    authors: [{ name: "Dr.(Prof.) Dhirendra Singh Kushwah" }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Careers at ORL International Hospitals | Dr. Dhirendra Singh Kushwah",
      description:
        "Build your healthcare career in advanced Otorhinolaryngology, micro-ear surgery, and audiology.",
      url: url,
      siteName: "Dr.(Prof.) Dhirendra Singh Kushwah - Senior ENT Surgeon",
      type: "website",
      locale: "en_IN",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const OPENINGS = [
  {
    title: "Senior Resident / Associate ENT Surgeon",
    department: "Department of Otorhinolaryngology",
    location: "Jasola Vihar Hospital, New Delhi",
    type: "Full-Time",
    experience: "MS / DNB (ENT) with 1-3 years clinical exposure",
    description:
      "Assist in complex microscopic ear surgeries, FESS procedures, emergency airway management, and outpatient clinical evaluations.",
  },
  {
    title: "Senior Audiologist & Speech-Language Pathologist",
    department: "Audiology & Cochlear Implant Rehab",
    location: "CR Park & Jasola, New Delhi",
    type: "Full-Time",
    experience: "BASLP / MASLP with 2+ years experience",
    description:
      "Conduct pure tone audiometry, impedance, BERA, ASSR, vestibular function profiling, and pediatric speech-language therapy.",
  },
  {
    title: "Operation Theatre (OT) Staff Nurse - ENT Speciality",
    department: "Surgical Services & Laminar OTs",
    location: "ORL International Hospital, Jasola",
    type: "Full-Time / Shifts",
    experience: "B.Sc Nursing / GNM with 2+ years surgical OT experience",
    description:
      "Assistance during microscopic otology, endoscopy, coblation procedures, laser handling, and post-operative surgical monitoring.",
  },
  {
    title: "Hospital Front Desk & Patient Care Coordinator",
    department: "Administration & Patient Relations",
    location: "South Delhi Centres",
    type: "Full-Time",
    experience: "Graduate with fluent English & Hindi communication",
    description:
      "Manage patient triage, appointment scheduling, TPA insurance pre-authorizations, and patient assistance.",
  },
];

export default async function CareerPage() {
  return (
    <>
      {/* ────────────────── HERO BANNER ────────────────── */}
      <section
        className="relative text-white pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-teal-950"
        style={{
          background: "linear-gradient(135deg, #022c22 0%, #064e3b 40%, #0f766e 85%, #042f2e 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-teal-200 mb-4 font-medium">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-white">Careers</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-700/50 border border-teal-500/40 text-teal-200 text-xs font-semibold mb-3 backdrop-blur-sm">
              <Briefcase className="w-3.5 h-3.5 text-teal-300" />
              <span>Join Our Medical &amp; Clinical Team</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Careers &amp; Opportunities
            </h1>

            <p className="mt-3 text-sm sm:text-base text-teal-100 leading-relaxed">
              Work alongside <strong className="text-white font-semibold">Dr.(Prof.) Dhirendra Singh Kushwah</strong> and our dedicated multi-disciplinary clinical team. Advance your skills in high-precision micro-ear surgery, cochlear implants, and modern healthcare delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────── OPEN POSITIONS ────────────────── */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Current Openings
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2">
              Explore Available Clinical &amp; Hospital Roles
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              We offer continuous professional mentorship, advanced technology exposure, and competitive compensation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OPENINGS.map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-100">
                      {job.type}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {job.department}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                    <span>{job.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-700">
                      <span className="text-slate-400 font-normal">Eligibility: </span>
                      {job.experience}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="mailto:drdhirendrasinghent@gmail.com?subject=Job%20Application%20-%20"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs rounded-xl transition"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Apply via Email</span>
                  </a>

                  <a
                    href="tel:+919311449825"
                    className="text-xs font-semibold text-slate-600 hover:text-teal-700"
                  >
                    Inquire: +91-9311449825
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* General Application Banner */}
          <div className="mt-10 bg-teal-800 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Don&apos;t See a Matching Role?</h3>
              <p className="text-xs sm:text-sm text-teal-100 mt-1 max-w-xl">
                We are always eager to meet skilled ENT surgeons, fellows, and medical specialists. Send your CV and clinical portfolio directly to our medical director.
              </p>
            </div>
            <a
              href="mailto:drdhirendrasinghent@gmail.com?subject=Spontaneous%20Application%20-%20ENT%20Hospital"
              className="px-6 py-3 bg-white text-teal-900 font-bold text-xs sm:text-sm rounded-xl shadow hover:bg-teal-50 transition whitespace-nowrap"
            >
              Email Your Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
