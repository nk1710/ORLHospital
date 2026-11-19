import AsideAppointmentForm from "@/components/ui/AsideAppointmentForm";
import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import { Award, ShieldCheck, CheckCircle2, Phone, Stethoscope } from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.com/neuro-otology" // update if needed

  return {
    title:
      "Top Neuro-Otology Surgeon in Delhi | Vertigo & Balance Disorder Specialist - Dr. Dhirendra Singh Kushwah",

    description:
      "Consult Dr. Dhirendra Singh Kushwah, leading Neuro-Otology surgeon in Delhi. Expert treatment for vertigo, dizziness, balance disorders, Ménière's disease, and vestibular issues with advanced ENT care. Book your consultation today.",

    keywords: [
      "Neuro-otology surgeon Delhi",
      "Vertigo treatment India",
      "Dizziness specialist Delhi",
      "Balance disorder doctor",
      "Ménière's disease treatment",
      "Vestibular disorder specialist",
      "ENT vertigo specialist Delhi",
      "Best ENT doctor Delhi",
      "Dr Dhirendra Singh Kushwah",
    ],

    authors: [{ name: "Dr. Dhirendra Singh Kushwah" }],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        "Neuro-Otology & Vertigo Specialist in Delhi",
      description:
        "Advanced treatment for vertigo, dizziness, and balance disorders by Dr. Dhirendra Singh Kushwah.",
      url: url,
      siteName: "Dr. Dhirendra Singh Kushwah",
      type: "article",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Top Neuro-Otology Surgeon in Delhi",
      description:
        "Expert ENT care for vertigo, dizziness, and vestibular disorders.",
    },

    robots: {
      index: true,
      follow: true,
    },

    category: "healthcare",
  }
}

export default async function DepartmentPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Dizziness and Vertigo (Neuro-Otology) - Dr. Dhirendra Singh Kushwah",
    "url": "https://www.drdhirendrasinghkushwah.com/neuro-otology",
    "mainEntity": {
      "@type": "MedicalCondition",
      "name": "Dizziness and Vertigo",
      "alternateName": ["Vertigo", "Balance Disorders", "BPPV", "Meniere's Disease"],
      "description": "Dizziness and vertigo are conditions affecting balance and coordination, often caused by inner ear, vestibular, or neurological issues. Symptoms include spinning sensations, lightheadedness, imbalance, nausea, and difficulty walking.",
      "possibleTreatment": [
        {
          "@type": "MedicalTherapy",
          "name": "Vestibular Rehabilitation",
          "description": "Exercises and therapies to improve balance, coordination, and reduce dizziness or vertigo episodes."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Vestibular Testing",
          "description": "Advanced tests like VNG, balance tests, and hearing tests to diagnose the underlying cause of dizziness and vertigo."
        },
        {
          "@type": "MedicalTherapy",
          "name": "Medication Therapy",
          "description": "Use of medications to reduce symptoms of vertigo, nausea, or inflammation affecting the inner ear."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Ear Surgery",
          "description": "Procedures such as tympanoplasty or other interventions for structural ear problems affecting balance."
        }
      ],
      "possibleComplication": [
        "Falls due to imbalance",
        "Chronic vertigo",
        "Persistent nausea",
        "Reduced quality of life"
      ],
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Inner ear, vestibular system, auditory nerve, brain"
      },
      "signOrSymptom": [
        "Spinning sensation",
        "Lightheadedness",
        "Imbalance",
        "Nausea",
        "Ear ringing (tinnitus)"
      ],
      "cause": [
        "Benign Paroxysmal Positional Vertigo (BPPV)",
        "Meniere's disease",
        "Vestibular neuritis",
        "Migraines affecting balance",
        "Ear infections",
        "Neurological disorders"
      ],
      "possibleTreatmentOutcome": [
        "Improved balance and coordination",
        "Reduction or elimination of vertigo episodes",
        "Enhanced quality of life",
        "Prevention of falls"
      ],
      "expertConsideration": {
        "@type": "Physician",
        "name": "Dr. Dhirendra Singh Kushwah",
        "medicalSpecialty": "Neuro-Otology",
        "jobTitle": "Neuro-Otology & ENT Surgeon",
        "url": "https://www.drdhirendrasinghkushwah.com/",
        "telephone": "+91-9311449825"
      }
    }
  }
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
            { label: "Neuro-Otology & Vertigo", href: "/specialities/neuro-otology" },
          ]}
        />
      {/* =====================================================
          HERO / PAGE INTRODUCTION WITH APPOINTMENT FORM
      ====================================================== */}
      <section className="relative bg-slate-50 rounded-3xl p-6 md:p-10 border border-teal-100 shadow-sm overflow-hidden" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f0fdfa 50%, #f1f5f9 100%)" }}>
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Title, Credentials & Clinical Overview */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold">
              <Stethoscope className="w-3.5 h-3.5 text-teal-700" />
              <span>Vestibular Medicine & Neuro-Otology</span>
              <span>•</span>
              <span>Delhi, India</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-tight">
              Best Neuro-Otology & Vertigo Specialist in Delhi – Dr. Dhirendra Singh Kushwah
            </h1>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs font-medium text-slate-700">
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                <Award className="w-4 h-4 text-teal-600" /> 25+ Years Experience
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-teal-600" /> MS (ENT) Specialist
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> Comprehensive Balance Clinic
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed text-base pt-1">
              Neuro-otology investigates the intricate relationship between the inner ear balance apparatus (vestibular system) and the brain. Recurring vertigo, room spinning, postural unsteadiness, and motion sickness require accurate localized diagnosis.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              Dr. Dhirendra Singh Kushwah provides advanced diagnostic workups and evidence-based management for BPPV, Ménière's disease, vestibular neuritis, labyrinthitis, and acoustic neuroma with personalized repositioning maneuvers and therapy.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="tel:+919311449825"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-xl transition shadow-sm"
              >
                <Phone className="w-4 h-4" />
                Call: +91-9311449825
              </a>
              <span className="text-xs text-slate-500 font-medium">
                VNG & Vestibular Rehab • Safdarjung Enclave & Jasola Vihar
              </span>
            </div>
          </div>

          {/* Right Column: High Conversion Appointment Booking Form */}
          <div className="lg:col-span-5">
            <AsideAppointmentForm />
          </div>
        </div>
      </section>

        <MedicalReviewBadge procedureName="Neuro-Otological Evaluation & Vertigo Management" />

      {/* Main Content */}
      <div className="space-y-10">

        {/* VIDEO */}
        <div className="rounded-xl overflow-hidden shadow">
          <iframe
            className="w-full h-[300px] md:h-[400px]"
            src="https://www.youtube.com/embed/X5fMt6BNgMc"
            title="Neuro-Otology Video"
            allowFullScreen
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-6">

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              What is Dizziness?
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Feeling faint or lightheaded</li>
              <li>Loss of balance</li>
              <li>Feeling like you may fall</li>
              <li>Floating sensation</li>
            </ul>
            <p className="text-slate-600">
              It may be caused by inner ear issues, low blood pressure, dehydration, anxiety, or neurological conditions.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              What is Vertigo?
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Spinning sensation even when still</li>
              <li>Feeling of movement in the head</li>
            </ul>
            <p className="text-slate-600">
              Common causes include BPPV, Meniere’s disease, vestibular neuritis, migraines, and inner ear infections.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              How Neuro-Otology Helps
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Evaluation of inner ear balance organs</li>
              <li>Assessment of nerve connections to the brain</li>
              <li>Balance and coordination testing</li>
              <li>Advanced diagnostic tests and imaging</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              When to See a Specialist
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Frequent dizziness</li>
              <li>Sudden spinning episodes</li>
              <li>Difficulty walking straight</li>
              <li>Ringing in ears with imbalance</li>
              <li>Nausea with vertigo</li>
            </ul>
            <p className="text-slate-600">
              Early diagnosis helps prevent falls, anxiety, and long-term complications.
            </p>
          </div>

          {/* SECOND VIDEO */}
          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              className="w-full h-[300px] md:h-[400px]"
              src="https://www.youtube.com/embed/fjfoJ6Hf1ac"
              title="Patient Testimonial"
              allowFullScreen
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              Book Your Consultation
            </h3>
            <p className="text-slate-600">
              If you are experiencing persistent dizziness or balance issues, early consultation can help restore stability and improve quality of life with the right treatment approach.
            </p>
          </div>

        </div>
      </div>
    </main>
    </>
  );
}
