import AsideAppointmentForm from "@/components/ui/AsideAppointmentForm";
import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import SurgeryLeadDesk from "@/components/ui/SurgeryLeadDesk";
import { DOCTOR_PHYSICIAN_SCHEMA, ORL_HOSPITAL_SCHEMA } from "@/lib/surgicalSchema";
import { Award, ShieldCheck, CheckCircle2, Phone, Stethoscope } from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.com/specialities/skull-base-surgery" // update if needed

  return {
    title:
      "Best Skull Base Surgeon in Delhi | Advanced ENT & Brain Tumor Surgery - Dr. Dhirendra Singh Kushwah",

    description:
      "Consult Dr. Dhirendra Singh Kushwah, a leading skull base surgeon in Delhi specializing in advanced ENT and skull base procedures. Expert treatment for tumors, acoustic neuroma, and complex head & neck conditions with precision and care.",

    keywords: [
      "Skull base surgery Delhi",
      "Skull base surgeon India",
      "Acoustic neuroma treatment",
      "Head and neck tumor surgery",
      "ENT skull base specialist",
      "Endoscopic skull base surgery",
      "Brain tumor ENT surgeon Delhi",
      "Advanced ENT surgery India",
      "Dr Dhirendra Singh Kushwah",
    ],

    authors: [{ name: "Dr. Dhirendra Singh Kushwah" }],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        "Skull Base Surgery Specialist in Delhi",
      description:
        "Advanced skull base surgery for tumors and complex ENT conditions by Dr. Dhirendra Singh Kushwah.",
      url: url,
      siteName: "Dr. Dhirendra Singh Kushwah",
      type: "article",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Best Skull Base Surgeon in Delhi",
      description:
        "Expert care for skull base tumors and complex ENT surgeries.",
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
        "@id": "https://www.drdhirendrasinghkushwah.com/specialities/skull-base-surgery",
        "url": "https://www.drdhirendrasinghkushwah.com/specialities/skull-base-surgery",
        "name": "Best Skull Base Surgery Specialist in India – Dr Dhirendra Singh Kushwah",
        "description": "Advanced skull base surgery for tumors, nerve disorders, and complex conditions using minimally invasive techniques.",
        "mainEntity": {
          "@id": "https://www.drdhirendrasinghkushwah.com/#skullbasesurgery"
        }
      },
  
      {
        "@type": "MedicalProcedure",
        "@id": "https://www.drdhirendrasinghkushwah.com/#skullbasesurgery",
        "name": "Skull Base Surgery",
        "description": "Skull base surgery is an advanced medical procedure used to treat tumors, nerve disorders, and structural problems located at the base of the skull using minimally invasive and endoscopic techniques.",
        "procedureType": "Surgical",
  
        "howPerformed": "The procedure is performed using minimally invasive endoscopic techniques through the nose or small openings in the skull, allowing surgeons to access deep structures with high precision.",
        
        "preparation": "Patients undergo imaging tests such as MRI or CT scans, along with neurological evaluation before surgery.",
        
        "followup": "Post-surgery recovery involves monitoring neurological function, follow-up imaging, and rehabilitation if needed.",
  
        "indication": [
          "Brain tumors",
          "Pituitary tumors",
          "Acoustic neuroma",
          "Meningioma",
          "Skull base fractures",
          "Facial nerve disorders",
          "Sinus or nasal tumors"
        ],
  
        "benefit": [
          "Minimally invasive approach",
          "Faster recovery",
          "Reduced complications",
          "Improved neurological outcomes",
          "Better quality of life"
        ],
  
        "riskFactor": [
          "Infection",
          "Bleeding",
          "Neurological complications",
          "CSF leak",
          "Temporary swelling or discomfort"
        ],
  
        "provider": {
          "@id": "https://www.drdhirendrasinghkushwah.com/#physician"
        },
  
        "availableAtOrFrom": {
          "@type": "MedicalClinic",
          "name": "ENT Clinic - Arjun Nagar",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "19-C, Arjun Nagar Safdarjung Enclave",
            "addressLocality": "New Delhi",
            "postalCode": "110029",
            "addressCountry": "IN"
          },
          "telephone": "+91-9311449825"
        }
      },
  
      {
        "@type": "MedicalCondition",
        "name": "Otosclerosis"
      },
      {
        "@type": "MedicalCondition",
        "name": "Pituitary Tumor"
      },
      {
        "@type": "MedicalCondition",
        "name": "Acoustic Neuroma"
      },
      {
        "@type": "MedicalCondition",
        "name": "Meningioma"
      },
  
      {
        "@type": "VideoObject",
        "name": "Skull Base Surgery Explained",
        "description": "Learn about skull base surgery, conditions treated, and advanced surgical techniques.",
        "thumbnailUrl": "https://img.youtube.com/vi/npLW6kqidYk/hqdefault.jpg",
        "uploadDate": "2024-01-01",
        "embedUrl": "https://www.youtube.com/embed/npLW6kqidYk"
      },
  
      {
        "@type": "FAQPage",
        "mainEntity": [
  
          {
            "@type": "Question",
            "name": "What is skull base surgery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Skull base surgery is a specialized procedure used to treat tumors and disorders located at the base of the skull using advanced techniques."
            }
          },
  
          {
            "@type": "Question",
            "name": "Who needs skull base surgery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Patients with brain tumors, pituitary tumors, nerve disorders, or skull base abnormalities may require this surgery."
            }
          },
  
          {
            "@type": "Question",
            "name": "Is skull base surgery safe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, with modern minimally invasive techniques and experienced surgeons, skull base surgery is safe and effective."
            }
          },
  
          {
            "@type": "Question",
            "name": "How long is recovery after skull base surgery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Recovery time varies depending on the condition, but many patients recover within a few weeks to months with proper care."
            }
          }
  
        ]
      },
      DOCTOR_PHYSICIAN_SCHEMA,
      ORL_HOSPITAL_SCHEMA
  
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
            { label: "Skull Base Surgery", href: "/specialities/skull-base-surgery" },
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
              <span>Craniofacial & Endoscopic Skull Base Surgery</span>
              <span>•</span>
              <span>Delhi, India</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-tight">
              Best Skull Base Surgeon in Delhi – Dr. Dhirendra Singh Kushwah
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
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> Endoscopic Endonasal Approach
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed text-base pt-1">
              Skull base surgery deals with lesions located at the interface between the ear, nose, paranasal sinuses, and the brain floor. Treating these requires supreme micro-anatomic knowledge, HD visualization, and surgical dexterity.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              Dr. Dhirendra Singh Kushwah performs minimally invasive endoscopic endonasal skull base procedures for pituitary tumors, CSF rhinorrhea repair, inverted papilloma, angiofibroma, and acoustic neuromas without external incisions.
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
                Advanced Image-Guided Navigation • Safdarjung Enclave
              </span>
            </div>
          </div>

          {/* Right Column: High Conversion Appointment Booking Form */}
          <div className="lg:col-span-5">
            <AsideAppointmentForm />
          </div>
        </div>
      </section>

        <MedicalReviewBadge procedureName="Endoscopic Skull Base & Pituitary Surgery" />

      {/* Main Content */}
      <div className="space-y-10">

        {/* VIDEO */}
        <div className="rounded-xl overflow-hidden shadow">
          <iframe
            className="w-full h-[300px] md:h-[400px]"
            src="https://www.youtube.com/embed/npLW6kqidYk"
            title="Skull Base Surgery Video"
            allowFullScreen
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-6">

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Why This Surgery Is Performed
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Brain tumors</li>
              <li>Skull base fractures</li>
              <li>Pituitary tumors</li>
              <li>Acoustic neuroma</li>
              <li>Meningiomas</li>
              <li>Sinus or nasal growths</li>
              <li>Facial nerve disorders</li>
              <li>Vascular issues near the brain</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Treatment Approach
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Accurate diagnosis using advanced imaging</li>
              <li>Minimally invasive endoscopic surgery</li>
              <li>Reduced complications and faster recovery</li>
              <li>Personalized treatment plans</li>
              <li>Continuous follow-up care</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Benefits of Expert Care
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Advanced surgical technology</li>
              <li>Experienced neurosurgical team</li>
              <li>High success rates</li>
              <li>Transparent treatment process</li>
              <li>Patient-friendly environment</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              When to Consult a Specialist
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Persistent headaches</li>
              <li>Vision or hearing problems</li>
              <li>Facial numbness or weakness</li>
              <li>Balance issues</li>
              <li>Recurrent sinus problems</li>
              <li>Ringing in ears</li>
              <li>Seizures or neurological symptoms</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Why Choose This Specialist?
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Extensive surgical experience</li>
              <li>Specialized skull base training</li>
              <li>Advanced endoscopic techniques</li>
              <li>Multidisciplinary care team</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              Book Your Consultation
            </h3>
            <p className="text-slate-600">
              Take the first step towards advanced and safe treatment by consulting an experienced specialist. Early diagnosis and expert care can significantly improve outcomes.
            </p>
          </div>

          {/* VIP High-Converting Surgery Lead Desk */}
          <div className="mt-8">
            <SurgeryLeadDesk 
              procedureName="Endoscopic Skull Base Surgery" 
              customMessage="Hello Dr. Kushwah, I want to check Skull Base surgery evaluation and cashless insurance at ORL Hospital." 
            />
          </div>

        </div>
      </div>
    </main>
    </>
  );
}
