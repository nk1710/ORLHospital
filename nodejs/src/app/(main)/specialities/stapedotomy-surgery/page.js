import AsideAppointmentForm from "@/components/ui/AsideAppointmentForm";
import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import { Award, ShieldCheck, CheckCircle2, Phone, Stethoscope } from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.com/stapedotomy" // update if needed

  return {
    title:
      "Best Stapedotomy Surgeon in Delhi | Otosclerosis Hearing Surgery - Dr. Dhirendra Singh Kushwah",

    description:
      "Consult Dr. Dhirendra Singh Kushwah, an experienced ENT surgeon in Delhi specializing in stapedotomy surgery for otosclerosis. Restore hearing with advanced, minimally invasive ear surgery and expert care.",

    keywords: [
      "Stapedotomy surgery Delhi",
      "Otosclerosis treatment India",
      "Hearing loss surgery Delhi",
      "Stapes surgery specialist",
      "Middle ear surgery India",
      "ENT ear surgeon Delhi",
      "Hearing restoration surgery",
      "Best ENT doctor Delhi",
      "Dr Dhirendra Singh Kushwah",
    ],

    authors: [{ name: "Dr. Dhirendra Singh Kushwah" }],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        "Stapedotomy (Otosclerosis Surgery) in Delhi",
      description:
        "Advanced stapedotomy surgery for hearing restoration in otosclerosis patients by Dr. Dhirendra Singh Kushwah.",
      url: url,
      siteName: "Dr. Dhirendra Singh Kushwah",
      type: "article",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Best Stapedotomy Surgeon in Delhi",
      description:
        "Specialized surgery for otosclerosis and hearing loss treatment.",
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
        "@id": "https://www.drdhirendrasinghkushwah.com/stapedo.html",
        "url": "https://www.drdhirendrasinghkushwah.com/stapedo.html",
        "name": "Best Stapedotomy Surgeon in Delhi – Dr Dhirendra Singh Kushwah",
        "description": "Advanced stapedotomy surgery for otosclerosis and hearing loss by experienced ENT specialist. Safe and effective ear microsurgery.",
        "mainEntity": {
          "@id": "https://www.drdhirendrasinghkushwah.com/#stapedotomy"
        }
      },
  
      {
        "@type": "SurgicalProcedure",
        "@id": "https://www.drdhirendrasinghkushwah.com/#stapedotomy",
        "name": "Stapedotomy Surgery",
        "alternateName": "Stapes Surgery",
        "description": "Stapedotomy is a microsurgical procedure used to treat otosclerosis by creating a small opening in the stapes bone and inserting a prosthesis to restore hearing.",
        "bodyLocation": "Middle Ear (Stapes Bone)",
        "procedureType": "Surgical",
  
        "howPerformed": "The surgeon creates a tiny opening in the fixed stapes bone and inserts a prosthetic device to allow sound vibrations to reach the inner ear effectively.",
        
        "preparation": "Patients undergo hearing tests and ear examination. Pre-surgery instructions may include avoiding certain medications and fasting before the procedure.",
        
        "followup": "Most patients experience hearing improvement within weeks. Follow-up visits help monitor recovery and hearing outcomes.",
  
        "indication": [
          "Otosclerosis",
          "Conductive hearing loss",
          "Stapes fixation",
          "Hearing imbalance",
          "Failed previous stapes surgery"
        ],
  
        "benefit": [
          "Improves hearing ability",
          "Enhances sound clarity",
          "Reduces dependence on hearing aids",
          "Improves quality of life"
        ],
  
        "riskFactor": [
          "Dizziness",
          "Hearing fluctuation",
          "Infection",
          "Rare risk of hearing loss"
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
        "@type": "VideoObject",
        "name": "Stapedotomy Surgery Explained",
        "description": "Learn how stapedotomy surgery treats otosclerosis and restores hearing.",
        "thumbnailUrl": "https://img.youtube.com/vi/79C8eyQ4NUI/hqdefault.jpg",
        "uploadDate": "2024-01-01",
        "embedUrl": "https://www.youtube.com/embed/79C8eyQ4NUI"
      },
  
      {
        "@type": "FAQPage",
        "mainEntity": [
  
          {
            "@type": "Question",
            "name": "What is stapedotomy surgery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Stapedotomy is a surgical procedure used to treat otosclerosis by replacing the fixed stapes bone with a prosthetic device to restore hearing."
            }
          },
  
          {
            "@type": "Question",
            "name": "Who needs stapedotomy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Patients with otosclerosis or conductive hearing loss due to stapes fixation may require stapedotomy surgery."
            }
          },
  
          {
            "@type": "Question",
            "name": "Is stapedotomy safe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, stapedotomy is a safe and effective microsurgical procedure when performed by an experienced ENT specialist."
            }
          },
  
          {
            "@type": "Question",
            "name": "How long does recovery take after stapedotomy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most patients notice hearing improvement within a few weeks, with full recovery monitored through follow-up visits."
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
            { label: "Stapedotomy Surgery", href: "/specialities/stapedotomy-surgery" },
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
              <span>Otosclerosis Surgery & Hearing Restoration</span>
              <span>•</span>
              <span>Delhi, India</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-tight">
              Best Stapedotomy Surgeon in Delhi – Dr. Dhirendra Singh Kushwah
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
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> Precision Teflon Micro-Piston
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed text-base pt-1">
              Stapedotomy is a delicate microsurgical procedure used to treat conductive deafness caused by otosclerosis (abnormal bone remodeling that fixes the stapes bone in place).
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              Dr. Dhirendra Singh Kushwah performs laser or micro-drill stapedotomy to replace the fixed stapes with a high-grade Teflon or titanium piston prosthesis, achieving instant and long-lasting conversational hearing recovery.
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
                Daycare Surgery • Rapid Recovery • Cashless TPA Accepted
              </span>
            </div>
          </div>

          {/* Right Column: High Conversion Appointment Booking Form */}
          <div className="lg:col-span-5">
            <AsideAppointmentForm />
          </div>
        </div>
      </section>

        <MedicalReviewBadge procedureName="Stapedotomy (Otosclerosis Microsurgery)" />

      {/* Main Content */}
      <div className="space-y-10">

        {/* VIDEO */}
        <div className="rounded-xl overflow-hidden shadow">
          <iframe
            className="w-full h-[300px] md:h-[400px]"
            src="https://www.youtube.com/embed/79C8eyQ4NUI"
            title="Stapedotomy Video"
            allowFullScreen
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-6">

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Why Choose a Specialized Surgeon?
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Accurate diagnosis with advanced tools</li>
              <li>Safe microsurgical techniques</li>
              <li>Better hearing outcomes</li>
              <li>Faster recovery</li>
              <li>Personalized patient care</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Conditions Treated
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Otosclerosis</li>
              <li>Conductive hearing loss</li>
              <li>Stapes fixation</li>
              <li>Failed previous ear surgery</li>
              <li>Middle ear bone disorders</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              How This Surgery Helps
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Improves hearing ability</li>
              <li>Enhances sound clarity</li>
              <li>Reduces dependence on hearing aids</li>
              <li>Improves overall quality of life</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              Book Your Consultation
            </h3>
            <p className="text-slate-600">
              Take the first step towards better hearing by consulting an experienced specialist. Early treatment can significantly improve outcomes and quality of life.
            </p>
          </div>

        </div>
      </div>
    </main>
    </>
  );
}
