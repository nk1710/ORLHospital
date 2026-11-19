import Link from "next/link";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Microscope,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.com/training-programs";

  return {
    title:
      "Advanced ENT Surgical Training & Hands-On Workshops | Dr.(Prof.) Dhirendra Singh Kushwah",
    description:
      "Hands-on surgical training courses in Micro-Ear Surgery, FESS, Temporal Bone Dissection & Skull Base Navigation led by Dr.(Prof.) Dhirendra Singh Kushwah for ENT postgraduates and junior surgeons in Delhi.",
    keywords: [
      "ENT surgical training Delhi",
      "Temporal bone dissection workshop India",
      "FESS hands-on workshop Delhi",
      "Micro ear surgery course",
      "Skull base dissection workshop",
      "Dr Dhirendra Singh Kushwah training programs",
    ],
    authors: [{ name: "Dr.(Prof.) Dhirendra Singh Kushwah" }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "ENT Surgical Training & Workshops | Dr. Dhirendra Singh Kushwah",
      description:
        "Comprehensive hands-on cadaveric dissection, microscopic otology, and endoscopic sinus workshops in Delhi NCR.",
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

const COURSES = [
  {
    title: "Comprehensive Temporal Bone Dissection Workshop",
    level: "Postgraduates & Early-Career ENT Surgeons",
    duration: "3-Day Intensive Hands-On Program",
    badge: "Otology Masterclass",
    description:
      "Master high-speed drill techniques, facial nerve tracing, cortical mastoidectomy, posterior tympanotomy (facial recess approach), and endolymphatic sac decompression on cadaveric temporal bones.",
    highlights: [
      "Dedicated Zeiss microscope station for every delegate",
      "Facial nerve skeletonization & labyrinthine landmarks",
      "Cochlear implant round window insertion practice",
      "Direct one-on-one mentorship by Dr.(Prof.) Dhirendra Singh Kushwah",
    ],
  },
  {
    title: "Advanced FESS & Endoscopic Skull Base Workshop",
    level: "Practicing ENT Surgeons",
    duration: "2-Day Cadaveric Masterclass",
    badge: "Rhinology & Skull Base",
    description:
      "Step-by-step dissection covering uncinectomy, maxillary antrostomy, complete ethmoidectomy, sphenoidotomy, frontal sinusotomy (Draf I-II), and transnasal optic nerve & carotid artery identification.",
    highlights: [
      "High-definition 4K Karl Storz endoscopes & microdebriders",
      "Electromagnetic navigation guidance practice",
      "Endoscopic CSF leak fistula repair technique",
      "Live OT transmission & case discussions",
    ],
  },
  {
    title: "Clinical Observership in Microscopic & Laser ENT Surgery",
    level: "ENT Fellows & International Delegates",
    duration: "2 to 4 Weeks Structured Observership",
    badge: "Clinical Fellowship",
    description:
      "In-depth clinical and surgical observership in high-volume Otology, Stapedotomy, Ossiculoplasty, Coblation Adenotonsillectomy, and Phonosurgery at ORL International Group of Hospitals.",
    highlights: [
      "Observation in laminar airflow modular surgical suites",
      "Comprehensive pre-op planning & audiological workup",
      "Case debriefing and surgical pearls review",
      "Certificate of clinical completion awarded",
    ],
  },
];

export default async function TrainingProgramsPage() {
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
            <span className="text-white">Training Programs</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-700/50 border border-teal-500/40 text-teal-200 text-xs font-semibold mb-3 backdrop-blur-sm">
              <GraduationCap className="w-3.5 h-3.5 text-teal-300" />
              <span>Academic &amp; Surgical Excellence</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Surgical Training &amp; Masterclasses
            </h1>

            <p className="mt-3 text-sm sm:text-base text-teal-100 leading-relaxed">
              Advancing surgical education in Otorhinolaryngology. Directed by <strong className="text-white font-semibold">Dr.(Prof.) Dhirendra Singh Kushwah</strong>, providing hands-on cadaveric dissection, microscopic otology, and endoscopic sinus surgical fellowships for delegates across India.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────── COURSES LIST ────────────────── */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Curriculum &amp; Workshops
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2">
              Featured Hands-On Dissection Programs
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Small batch sizes ensuring personal microscope access and direct faculty guidance.
            </p>
          </div>

          <div className="space-y-6">
            {COURSES.map((course, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 px-3 py-1 rounded-md border border-teal-200">
                    {course.badge}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-teal-600" />
                      {course.level}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {course.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {course.description}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Practical Modules:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {course.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href="mailto:drdhirendrasinghent@gmail.com?subject=Inquiry%20-%20ENT%20Surgical%20Workshop"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl transition shadow-sm"
                  >
                    Register / Inquire for Next Batch
                  </a>
                  <a
                    href="tel:+919311449825"
                    className="text-xs font-semibold text-slate-600 hover:text-teal-700"
                  >
                    Call Academic Coordinator: +91-9311449825
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
