import AsideAppointmentForm from "@/components/ui/AsideAppointmentForm";
import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import { Award, ShieldCheck, CheckCircle2, Phone, Stethoscope } from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.in/head-neck-surgery" // update with actual URL

  return {
    title:
      "Top Head and Neck Surgeon in India | Advanced ENT Surgery - Dr. Dhirendra Singh Kushwah",

    description:
      "Consult Dr. Dhirendra Singh Kushwah, leading Head and Neck Surgery Specialist in India. Expert care for tumors, cancers, reconstructive surgery, and advanced ENT procedures. Book your consultation today.",

    keywords: [
      "Head and Neck Surgery India",
      "ENT head and neck surgeon Delhi",
      "Tumor and cancer ENT surgery",
      "Reconstructive ENT surgery",
      "Skull base surgery Delhi",
      "Advanced ENT treatments India",
      "Best ENT doctor Delhi",
      "Dr Dhirendra Singh Kushwah",
    ],

    authors: [{ name: "Dr. Dhirendra Singh Kushwah" }],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        "Head and Neck Surgery Specialist in India | Advanced ENT Care",
      description:
        "Expert treatment for head and neck tumors, cancer, and reconstructive ENT surgery by Dr. Dhirendra Singh Kushwah.",
      url: url,
      siteName: "Dr. Dhirendra Singh Kushwah",
      type: "article",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Top Head and Neck Surgeon in India",
      description:
        "Advanced ENT surgery for head and neck conditions by Dr. Dhirendra Singh Kushwah.",
    },

    robots: {
      index: true,
      follow: true,
    },

    category: "healthcare",
  }
}

export default async function HeadSpecialityPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
  
      {
        "@type": "MedicalWebPage",
        "@id": "https://www.drdhirendrasinghkushwah.in/head-neck-surgery",
        "url": "https://www.drdhirendrasinghkushwah.in/head-neck-surgery",
        "name": "Head and Neck Surgery Specialist in India – Dr Dhirendra Singh Kushwah",
        "description": "Expert head and neck surgery in India for thyroid disorders, tumors, airway problems, salivary gland diseases, and complex reconstructive procedures by Dr. Dhirendra Singh Kushwah.",
        "mainEntity": {
          "@id": "https://www.drdhirendrasinghkushwah.in/#headneck-surgery"
        }
      },
  
      {
        "@type": "MedicalProcedure",
        "@id": "https://www.drdhirendrasinghkushwah.in/#headneck-surgery",
        "name": "Head and Neck Surgery",
        "alternateName": "ENT Head & Neck Procedures",
        "description": "Surgical procedures for conditions affecting the head and neck, including tumors, thyroid disorders, voice and airway issues, and salivary gland diseases, using modern minimally invasive techniques.",
        "procedureType": "SurgicalProcedure",
        "bodyLocation": "Head, Neck",
        "howPerformed": "Performed using advanced surgical techniques, minimally invasive approaches where possible, and personalized care for safe, effective treatment.",
        "preparation": "Patients undergo preoperative evaluation including imaging, lab tests, and consultation for a customized surgical plan.",
        "followup": "Postoperative care includes wound monitoring, medications, rehabilitation, and follow-up consultations to ensure recovery and long-term health.",
        "indication": [
          "Thyroid disorders",
          "Head and neck tumors",
          "Voice disorders",
          "Salivary gland diseases",
          "Neck masses",
          "Complex airway problems"
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
        "jobTitle": "Head and Neck Surgery Specialist",
        "url": "https://www.youtube.com/@dr.dhirendrasingh"
      },
  
      {
        "@type": "VideoObject",
        "name": "Head and Neck Surgery Explained",
        "description": "Learn about head and neck surgery procedures, benefits, and recovery from Dr. Dhirendra Singh Kushwah.",
        "thumbnailUrl": "https://img.youtube.com/vi/ULn7Q72_F1c/hqdefault.jpg",
        "uploadDate": "2024-01-01",
        "embedUrl": "https://www.youtube.com/embed/ULn7Q72_F1c"
      },
  
      {
        "@type": "VideoObject",
        "name": "Head and Neck Surgery Patient Testimonial",
        "description": "Patient shares their experience with head and neck surgery performed by Dr. Dhirendra Singh Kushwah.",
        "thumbnailUrl": "https://img.youtube.com/vi/oC-REFK3qpo/hqdefault.jpg",
        "uploadDate": "2024-01-01",
        "embedUrl": "https://www.youtube.com/embed/oC-REFK3qpo"
      },
  
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What conditions does head and neck surgery treat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Head and neck surgery treats thyroid disorders, head and neck tumors, voice and airway issues, salivary gland diseases, and complex neck masses."
            }
          },
          {
            "@type": "Question",
            "name": "Is head and neck surgery safe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, when performed by an experienced specialist like Dr. Dhirendra Singh Kushwah using advanced surgical techniques, it is safe and effective."
            }
          },
          {
            "@type": "Question",
            "name": "How long is recovery after head and neck surgery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Recovery depends on the procedure, but minimally invasive techniques often reduce pain, scarring, and recovery time. Follow-up consultations ensure proper healing."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose Dr. Dhirendra Singh Kushwah for head and neck surgery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "He combines modern surgical techniques with deep clinical expertise, ensures personalized treatment plans, clear communication, and compassionate care."
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
            { label: "Head & Neck Surgery", href: "/specialities/head-neck-surgery" },
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
              <span>Head & Neck Oncosurgery & Reconstruction</span>
              <span>•</span>
              <span>Delhi, India</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-tight">
              Best Head and Neck Surgeon in Delhi – Dr. Dhirendra Singh Kushwah
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
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> Comprehensive Tumor & Neck Care
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed text-base pt-1">
              Head and neck conditions can critically affect breathing, speech, swallowing, and appearance. Choosing a seasoned ENT head and neck surgical specialist ensures precise margins, functional preservation, and compassionate care.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              Dr. Dhirendra Singh Kushwah provides advanced surgical evaluation and intervention for thyroid nodules, salivary gland tumors, neck lumps, cysts, and reconstructive head and neck conditions using modern tissue-sparing techniques.
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
                Advanced Histopathology & Oncology Network • Safdarjung Enclave
              </span>
            </div>
          </div>

          {/* Right Column: High Conversion Appointment Booking Form */}
          <div className="lg:col-span-5">
            <AsideAppointmentForm />
          </div>
        </div>
      </section>

        <MedicalReviewBadge procedureName="Head & Neck Surgical Evaluation & Oncology" />

      {/* Main Content */}
      <div className="space-y-10">
        <p className="text-slate-600 leading-relaxed">
          Dr. Dhirendra Singh Kushwah is a highly experienced specialist known for treating thyroid disorders, tumors, voice issues, salivary gland diseases, and complex airway conditions with precision and care.
        </p>

        {/* VIDEO */}
        <div className="rounded-xl overflow-hidden shadow">
          <iframe
            className="w-full h-[300px] md:h-[400px]"
            src="https://www.youtube.com/embed/ULn7Q72_F1c"
            title="Head and Neck Surgery Video"
            allowFullScreen
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-6">

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Advanced Surgical Care
            </h2>
            <p className="text-slate-600">
              Modern surgical techniques are used to ensure minimal pain, reduced scarring, and faster recovery. Each treatment is tailored based on the patient’s condition and long-term health goals.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              Why Choose This Specialist?
            </h3>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Expertise in complex head and neck conditions</li>
              <li>Minimally invasive surgical techniques</li>
              <li>Patient-first approach</li>
              <li>Clear and simple communication</li>
              <li>High precision and safety standards</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              Book Your Consultation
            </h3>
            <p className="text-slate-600">
              Patients trust this specialist for both routine and complex procedures. With a focus on safety, accuracy, and personalized care, every patient receives dedicated attention throughout their treatment journey.
            </p>
          </div>

        </div>
      </div>
    </main>
    </>
  );
}
