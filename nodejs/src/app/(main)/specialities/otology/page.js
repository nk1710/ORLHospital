
import AsideAppointmentForm from "@/components/ui/AsideAppointmentForm";
import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import { Award, ShieldCheck, CheckCircle2, Phone, Stethoscope } from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.com/ear" // update if needed

  return {
    title:
      "Best Otology Surgeon in India | Ear Specialist in Delhi - Dr. Dhirendra Singh Kushwah",

    description:
      "Consult Dr. Dhirendra Singh Kushwah, a leading otology surgeon in Delhi with 25+ years of experience in treating hearing loss, ear infections, cochlear implants, and complex ear disorders. Book your appointment today.",

    keywords: [
      "Otology surgeon India",
      "Ear specialist in Delhi",
      "Hearing loss treatment India",
      "Cochlear implant surgeon Delhi",
      "Ear infection treatment",
      "Middle ear surgery India",
      "ENT doctor for ear problems",
      "Best ENT doctor in Delhi",
      "Dr Dhirendra Singh Kushwah",
    ],

    authors: [{ name: "Dr. Dhirendra Singh Kushwah" }],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        "Otology (Ear) Specialist | Dr. Dhirendra Singh Kushwah",
      description:
        "Advanced ear treatments including hearing loss, cochlear implants, and middle ear surgeries by an experienced ENT specialist in Delhi.",
      url: url,
      siteName: "Dr. Dhirendra Singh Kushwah",
      type: "website",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Best Otology Surgeon in India",
      description:
        "Expert ear care for hearing loss, infections & advanced otology treatments.",
    },

    robots: {
      index: true,
      follow: true,
    },

    category: "healthcare",
  }
}

export default async function OtologyPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Dr. Dhirendra Singh Kushwah ENT & Otology Clinic",
    "url": "https://www.drdhirendrasinghkushwah.com",
    "image": "https://www.drdhirendrasinghkushwah.com/images/gallery/9.webp",
    "logo": "https://www.drdhirendrasinghkushwah.com/.png",
    "description": "Expert Otology care in Delhi, India. Dr. Dhirendra Singh Kushwah specializes in diagnosing and treating ear conditions, hearing loss, tinnitus, vertigo, eardrum perforations, and congenital ear disorders, using advanced ear surgery techniques.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jasola Vihar, Arjun Nagar",
      "addressLocality": "New Delhi",
      "postalCode": "110025",
      "addressCountry": "IN"
    },
    "telephone": "+91-9311449825",
    "medicalSpecialty": [
      "Otology",
      "Ear Surgery",
      "Hearing Disorders",
      "Balance Disorders"
    ],
    "founder": {
      "@type": "Physician",
      "name": "Dr. Dhirendra Singh Kushwah",
      "image": "https://www.drdhirendrasinghkushwah.com/images/gallery/11.webp",
      "description": "Renowned Otology Specialist in India with over 25 years of experience in diagnosing and treating complex ear conditions, hearing loss, vertigo, tinnitus, and performing ear surgeries.",
      "alumniOf": "Jiwaji University, Gwalior",
      "medicalSpecialty": ["Otology", "ENT", "Ear Surgery"],
      "availableService": [
        {
          "@type": "MedicalProcedure",
          "name": "Tympanoplasty",
          "description": "Surgical repair of perforated eardrum to restore hearing and prevent infection."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Mastoid Surgery",
          "description": "Treatment of chronic ear infections and cholesteatoma in the mastoid bone."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Stapedectomy",
          "description": "Surgical procedure to improve hearing in patients with otosclerosis."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Ossiculoplasty",
          "description": "Reconstruction of the small bones of the middle ear to restore hearing."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Cochlear Implant Support",
          "description": "Comprehensive management and follow-up for cochlear implant patients."
        }
      ],
      "treatsCondition": [
        "Chronic ear infections",
        "Hearing loss",
        "Tinnitus",
        "Vertigo and balance disorders",
        "Eardrum perforation",
        "Cholesteatoma",
        "Congenital ear deformities"
      ]
    },
    "openingHours": "Mo-Su 09:00-20:00",
        "sameAs": [
          "https://www.facebook.com/people/Dr-Dhirendra-Singh-Kushwah/61560817359879/",
          "https://www.instagram.com/dr.dhirendrasinghkushwah"
        ],
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
            { label: "Otology & Ear Surgery", href: "/specialities/otology" },
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
              <span>Advanced Otology & Neuro-Otology Centre</span>
              <span>•</span>
              <span>Delhi, India</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-tight">
              Best Otology Surgeon in Delhi – Dr. Dhirendra Singh Kushwah
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
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> 10,000+ Surgeries
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed text-base pt-1">
              When treating complex ear conditions, choosing an experienced otologist makes a lifelong difference. Dr. Dhirendra Singh Kushwah provides specialized medical and microsurgical care for hearing loss, chronic discharge, tinnitus, perforated eardrums, and inner ear balance disorders.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              From advanced microscopic ear reconstructions to minimally invasive endoscopic procedures, every treatment plan is tailored to eliminate infection, preserve acoustic nerve health, and maximize hearing outcomes.
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
                Safdarjung Enclave & Jasola Vihar • Cashless TPA Accepted
              </span>
            </div>
          </div>

          {/* Right Column: High Conversion Appointment Booking Form */}
          <div className="lg:col-span-5">
            <AsideAppointmentForm />
          </div>
        </div>
      </section>

        <MedicalReviewBadge procedureName="Advanced Otology & Microscopic Ear Surgery" />

      {/* Main Content */}
      <div className="space-y-10">

        {/* VIDEO */}
        <div className="rounded-xl overflow-hidden shadow">
          <iframe
            className="w-full h-[300px] md:h-[400px]"
            src="https://www.youtube.com/embed/193QnbpKmZ8"
            title="Otology Video"
            allowFullScreen
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-6">

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              What Is Otology?
            </h2>
            <p className="text-slate-600">
              Otology is a branch of medicine focused on ear health, including hearing and balance disorders. Specialists diagnose and treat conditions affecting the outer, middle, and inner ear.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Common Conditions Treated
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Chronic ear infections</li>
              <li>Hearing loss</li>
              <li>Tinnitus (ringing in ears)</li>
              <li>Eardrum perforation</li>
              <li>Cholesteatoma</li>
              <li>Vertigo and balance disorders</li>
              <li>Congenital ear conditions</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Benefits of Treatment
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Improves hearing naturally</li>
              <li>Prevents long-term complications</li>
              <li>Reduces pain and discomfort</li>
              <li>Enhances balance and stability</li>
              <li>Repairs damaged ear structures</li>
              <li>Improves overall quality of life</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              When Should You See a Specialist?
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Frequent ear infections</li>
              <li>Hearing loss or muffled hearing</li>
              <li>Persistent ear discharge</li>
              <li>Ringing or buzzing sounds</li>
              <li>Vertigo or dizziness</li>
              <li>Ear pain or pressure</li>
              <li>Ear blockage or fullness</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Why Choose This Specialist?
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Accurate diagnosis</li>
              <li>Patient-first approach</li>
              <li>Clear communication</li>
              <li>Advanced surgical expertise</li>
              <li>High success rates</li>
            </ul>
          </div>

        </div>

        {/* SECOND VIDEO */}
        <div className="rounded-xl overflow-hidden shadow">
          <iframe
            className="w-full h-[300px] md:h-[400px]"
            src="https://www.youtube.com/embed/9p7rwn1meRg"
            title="Patient Testimonial"
            allowFullScreen
          />
        </div>

      </div>
    </main>
    </>
  );
}
