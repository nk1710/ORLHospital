import AsideAppointmentForm from "@/components/ui/AsideAppointmentForm";
import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import { Award, ShieldCheck, CheckCircle2, Phone, Stethoscope } from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.in/mastoidectomy"

  return {
    title:
      "Best Mastoidectomy Surgeon in Delhi | Cholesteatoma & Ear Infection Surgery - Dr. Dhirendra Singh Kushwah",

    description:
      "Consult Dr. Dhirendra Singh Kushwah, an experienced ENT surgeon in Delhi specializing in mastoidectomy surgery for chronic ear infections and cholesteatoma. Safe and advanced treatment for long-term ear health and hearing preservation.",

    keywords: [
      "Mastoidectomy surgery Delhi",
      "Cholesteatoma treatment India",
      "Chronic ear infection surgery",
      "Ear surgery specialist Delhi",
      "ENT surgeon in Delhi",
      "Hearing preservation surgery",
      "Middle ear infection treatment",
      "Best ENT doctor Delhi",
      "Dr Dhirendra Singh Kushwah",
    ],

    authors: [{ name: "Dr. Dhirendra Singh Kushwah" }],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        "Mastoidectomy Surgeon in Delhi | Advanced Ear Surgery",
      description:
        "Expert mastoidectomy surgery for cholesteatoma and chronic ear infections by Dr. Dhirendra Singh Kushwah.",
      url: url,
      siteName: "Dr. Dhirendra Singh Kushwah",
      type: "article",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Best Mastoidectomy Surgeon in Delhi",
      description:
        "Advanced surgical treatment for chronic ear infections and cholesteatoma.",
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
    "@graph": [

      {
        "@type": "MedicalWebPage",
        "@id": "https://www.drdhirendrasinghkushwah.in/mastoidectomy",
        "url": "https://www.drdhirendrasinghkushwah.in/mastoidectomy",
        "name": "Best Mastoidectomy Surgeon in India – Dr Dhirendra Singh Kushwah",
        "description": "Advanced mastoidectomy surgery in India for chronic ear infections, cholesteatoma, and hearing restoration performed by expert ENT surgeon Dr. Dhirendra Singh Kushwah.",
        "mainEntity": {
          "@id": "https://www.drdhirendrasinghkushwah.in/#mastoidectomy"
        }
      },

      {
        "@type": "MedicalProcedure",
        "@id": "https://www.drdhirendrasinghkushwah.in/#mastoidectomy",
        "name": "Mastoidectomy Surgery",
        "alternateName": "Ear Surgery for Mastoid Bone",
        "description": "Mastoidectomy is a surgical procedure to remove infected tissue from the mastoid bone, treating conditions like cholesteatoma and chronic ear infections to restore ear health and hearing.",
        "procedureType": "SurgicalProcedure",
        "bodyLocation": "Ear",
        "howPerformed": "Performed using modern ENT surgical tools, minimally invasive techniques, and advanced imaging for precise removal of infected tissue from the mastoid bone.",
        "preparation": "Patients undergo evaluation of ear health, imaging studies, and consultation to plan surgery.",
        "followup": "Post-surgery care includes monitoring for infection, medications, and hearing rehabilitation if needed.",
        "indication": [
          "Chronic ear infections",
          "Cholesteatoma",
          "Ear discharge",
          "Hearing loss",
          "Mastoid bone infection"
        ],
        "physician": {
          "@id": "https://www.drdhirendrasinghkushwah.in/#physician"
        }
      },

      {
        "@type": "Physician",
        "@id": "https://www.drdhirendrasinghkushwah.in/#physician",
        "name": "Dr. Dhirendra Singh Kushwah",
        "medicalSpecialty": "Otolaryngology",
        "jobTitle": "ENT Specialist",
        "url": "https://www.youtube.com/@dr.dhirendrasingh"
      },

      {
        "@type": "VideoObject",
        "name": "Mastoidectomy Surgery Explained",
        "description": "Learn about mastoidectomy surgery, benefits, and recovery from Dr. Dhirendra Singh Kushwah.",
        "thumbnailUrl": "https://img.youtube.com/vi/Jn8l7h5fPQ8/hqdefault.jpg",
        "uploadDate": "2024-01-01",
        "embedUrl": "https://www.youtube.com/embed/WdymiTpD0wo"
      },

      {
        "@type": "VideoObject",
        "name": "Mastoidectomy Patient Testimonial",
        "description": "Patient testimonial after mastoidectomy surgery by Dr. Dhirendra Singh Kushwah.",
        "thumbnailUrl": "https://img.youtube.com/vi/oC-REFK3qpo/hqdefault.jpg",
        "uploadDate": "2024-01-01",
        "embedUrl": "https://www.youtube.com/embed/oC-REFK3qpo"
      },

      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is mastoidectomy surgery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mastoidectomy is a surgical procedure to remove infected tissue from the mastoid bone, treating chronic ear infections and cholesteatoma."
            }
          },
          {
            "@type": "Question",
            "name": "Who needs mastoidectomy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Patients with persistent ear infections, cholesteatoma, hearing loss, ear discharge, or mastoid bone infection may require mastoidectomy surgery."
            }
          },
          {
            "@type": "Question",
            "name": "What are the benefits of mastoidectomy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It relieves ear pain and infections, prevents complications, improves hearing, and reduces the risk of infection spreading to nearby structures."
            }
          },
          {
            "@type": "Question",
            "name": "Is mastoidectomy safe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, when performed by an experienced ENT surgeon like Dr. Dhirendra Singh Kushwah using modern techniques, mastoidectomy is safe and effective."
            }
          }
        ]
      }

    ]
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
            { label: "Mastoidectomy Surgery", href: "/specialities/mastoidectomy" },
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
              <span>Mastoid Microsurgery & Infection Eradication</span>
              <span>•</span>
              <span>Delhi, India</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-tight">
              Best Mastoidectomy Surgeon in Delhi – Dr. Dhirendra Singh Kushwah
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
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> Cholesteatoma Clearance
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed text-base pt-1">
              Mastoidectomy is an advanced ear microsurgery used to safely remove chronic infected tissue and cholesteatoma from the mastoid bone behind the ear, preventing serious complications and preserving hearing.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              Dr. Dhirendra Singh Kushwah utilizes high-speed micro-drills, continuous irrigation, and state-of-the-art operating microscopes to achieve complete infection clearance while protecting the facial nerve and middle ear structures.
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
                Canal Wall Up / Down Procedures • Cashless Insurance
              </span>
            </div>
          </div>

          {/* Right Column: High Conversion Appointment Booking Form */}
          <div className="lg:col-span-5">
            <AsideAppointmentForm />
          </div>
        </div>
      </section>

        <MedicalReviewBadge procedureName="Mastoidectomy & Cholesteatoma Surgery" />

      {/* Main Content */}
      <div className="space-y-10">

          {/* VIDEO */}
          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              className="w-full h-[300px] md:h-[400px]"
              src="https://www.youtube.com/embed/WdymiTpD0wo"
              title="Mastoidectomy Video"
              allowFullScreen
            />
          </div>

          {/* CONTENT */}
          <div className="space-y-6">

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">
                Benefits of Surgery
              </h2>
              <ul className="list-disc pl-5 text-slate-600 space-y-1">
                <li>Relief from persistent ear pain and infection</li>
                <li>Prevention of serious complications</li>
                <li>Improved hearing and ear function</li>
                <li>Reduced risk of infection spread</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">
                Signs You May Need Surgery
              </h2>
              <ul className="list-disc pl-5 text-slate-600 space-y-1">
                <li>Continuous ear discharge</li>
                <li>Hearing loss or muffled hearing</li>
                <li>Repeated ear infections</li>
                <li>Pain or swelling behind the ear</li>
                <li>Cholesteatoma diagnosis</li>
              </ul>
              <p className="text-slate-600">
                Early diagnosis ensures faster recovery and better long-term ear health.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">
                Why Choose Expert Care?
              </h2>
              <ul className="list-disc pl-5 text-slate-600 space-y-1">
                <li>Expert in mastoid and middle ear surgeries</li>
                <li>Modern, minimally invasive techniques</li>
                <li>High success rate</li>
                <li>Personalized recovery and aftercare</li>
                <li>Advanced diagnostic support</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                Book Your Consultation
              </h3>
              <p className="text-slate-600">
                Early treatment can prevent complications and ensure better hearing outcomes. Consult a specialist today for safe and effective ear care and long-term relief.
              </p>
            </div>

        </div>
      </div>
    </main>
    </>
  );
}
