import AsideAppointmentForm from "@/components/ui/AsideAppointmentForm";
import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import { Award, ShieldCheck, CheckCircle2, Phone, Stethoscope } from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.com/laryngology"

  return {
    title:
      "Top Laryngology Surgeon in Delhi | Voice & Throat Specialist - Dr. Dhirendra Singh Kushwah",

    description:
      "Consult Dr. Dhirendra Singh Kushwah, a leading ENT surgeon in Delhi specializing in laryngology. Expert care for voice disorders, throat problems, vocal cord surgery, and swallowing issues with advanced treatment. Book your consultation today.",

    keywords: [
      "Laryngology surgeon Delhi",
      "Voice disorder treatment India",
      "Vocal cord surgery Delhi",
      "Throat specialist India",
      "ENT surgeon for voice problems",
      "Swallowing disorder treatment",
      "Hoarseness treatment Delhi",
      "Best ENT doctor Delhi",
      "Dr Dhirendra Singh Kushwah",
    ],

    authors: [{ name: "Dr. Dhirendra Singh Kushwah" }],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        "Voice & Throat Specialist in Delhi | Laryngology Care",
      description:
        "Advanced treatment for voice disorders, throat problems, and vocal cord surgery by Dr. Dhirendra Singh Kushwah.",
      url: url,
      siteName: "Dr. Dhirendra Singh Kushwah",
      type: "article",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Top Laryngology Surgeon in Delhi",
      description:
        "Expert ENT care for voice disorders, throat problems, and vocal cord surgery.",
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
        "@id": "https://www.drdhirendrasinghkushwah.com/laryngoloy",
        "url": "https://www.drdhirendrasinghkushwah.com/laryngology",
        "name": "Best Laryngology Surgeon in India – Dr. Dhirendra Singh Kushwah",
        "description": "Expert laryngology care for voice, throat, and vocal cord disorders including hoarseness, swallowing difficulty, and airway issues.",
        "medicalAudience": {
          "@type": "MedicalAudience",
          "audienceType": "Patient"
        },
        "mainEntity": {
          "@id": "https://www.drdhirendrasinghkushwah.com/#laryngology"
        }
      },
  
      {
        "@type": "MedicalSpecialty",
        "@id": "https://www.drdhirendrasinghkushwah.com/#laryngology",
        "name": "Laryngology",
        "description": "A branch of ENT focused on disorders of the larynx, voice, throat, and airway including vocal cord conditions and swallowing disorders.",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Otolaryngology"
        }
      },
  
      {
        "@type": "MedicalCondition",
        "name": "Voice Disorders",
        "associatedAnatomy": {
          "@type": "AnatomicalStructure",
          "name": "Vocal Cords"
        },
        "possibleTreatment": {
          "@type": "MedicalTherapy",
          "name": "Voice Therapy and Laryngeal Surgery"
        }
      },
  
      {
        "@type": "MedicalCondition",
        "name": "Hoarseness",
        "symptom": "Rough or weak voice",
        "possibleTreatment": {
          "@type": "MedicalTherapy",
          "name": "Medication and Voice Rest"
        }
      },
  
      {
        "@type": "MedicalCondition",
        "name": "Swallowing Difficulty",
        "alternateName": "Dysphagia",
        "possibleTreatment": {
          "@type": "MedicalTherapy",
          "name": "Swallowing Therapy"
        }
      },
  
      {
        "@type": "Physician",
        "@id": "https://www.drdhirendrasinghkushwah.com/#physician",
        "name": "Dr. Dhirendra Singh Kushwah",
        "jobTitle": "Laryngology & ENT Specialist",
        "medicalSpecialty": "Otolaryngology",
        "url": "https://www.drdhirendrasinghkushwah.com/",
        "telephone": "+91-9311449825",
        "sameAs": [
          "https://www.facebook.com/people/Dr-Dhirendra-Singh-Kushwah/61560817359879/",
          "https://www.instagram.com/dr.dhirendrasinghkushwah"
        ]
      },
  
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is laryngology?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Laryngology is a branch of ENT that focuses on disorders of the voice box, throat, and airway."
            }
          },
          {
            "@type": "Question",
            "name": "When should I see a laryngologist?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You should consult a laryngologist if you have persistent hoarseness, throat pain, voice changes, or difficulty swallowing."
            }
          },
          {
            "@type": "Question",
            "name": "What conditions are treated in laryngology?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common conditions include vocal cord nodules, hoarseness, laryngitis, swallowing disorders, and airway problems."
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
            { label: "Laryngology & Voice Care", href: "/specialities/laryngology" },
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
              <span>Voice Restoration & Phonosurgery</span>
              <span>•</span>
              <span>Delhi, India</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-tight">
              Best Laryngology & Voice Surgeon in Delhi – Dr. Dhirendra Singh Kushwah
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
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> Micro-Laryngeal Surgery
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed text-base pt-1">
              Laryngology focuses on preserving and restoring the voice box (larynx), swallowing function, and upper airway stability. Persistent hoarseness, vocal strain, or breathing distress require precise fiberoptic evaluation.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              Dr. Dhirendra Singh Kushwah offers state-of-the-art laryngoscopy, stroboscopy, vocal cord polyp and nodule micro-excision (phonosurgery), and airway reconstruction for singers, professionals, and patients across Delhi NCR.
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
                HD Video Stroboscopy • Safdarjung Enclave & Jasola
              </span>
            </div>
          </div>

          {/* Right Column: High Conversion Appointment Booking Form */}
          <div className="lg:col-span-5">
            <AsideAppointmentForm />
          </div>
        </div>
      </section>

        <MedicalReviewBadge procedureName="Laryngology & Endoscopic Voice Surgery" />

      {/* Main Content */}
      <div className="space-y-10">

        {/* VIDEO */}
        <div className="rounded-xl overflow-hidden shadow">
          <iframe
            className="w-full h-[300px] md:h-[400px]"
            src="https://www.youtube.com/embed/Y9nKZVU9X1I"
            title="Laryngology Video"
            allowFullScreen
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-6">

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              What Laryngology Covers
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Voice disorders</li>
              <li>Throat conditions</li>
              <li>Vocal cord issues</li>
              <li>Breathing passage problems</li>
              <li>Swallowing difficulties</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Common Symptoms
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Hoarseness or voice changes</li>
              <li>Loss or weakness of voice</li>
              <li>Frequent throat pain or irritation</li>
              <li>Difficulty swallowing</li>
              <li>Persistent cough</li>
              <li>Noisy or difficult breathing</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Expert Treatment Approach
            </h2>
            <p className="text-slate-600">
              Patients with voice strain, throat discomfort, or breathing issues receive accurate diagnosis and personalized treatment plans. Advanced tools and modern techniques ensure safe and effective care.
            </p>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Voice disorder management</li>
              <li>Vocal cord treatment</li>
              <li>Airway and swallowing care</li>
              <li>Minimally invasive procedures</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Who Needs This Care?
            </h2>
            <p className="text-slate-600">
              This specialty is especially important for professionals who rely heavily on their voice, such as singers, teachers, and public speakers, as well as individuals facing chronic throat or airway issues.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              Book Your Consultation
            </h3>
            <p className="text-slate-600">
              Early diagnosis and expert care can significantly improve voice quality and overall throat health. Consult a specialist for long-term relief and better quality of life.
            </p>
          </div>

        </div>
      </div>
    </main>
    </>
  );
}
