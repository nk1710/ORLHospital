import AsideAppointmentForm from "@/components/ui/AsideAppointmentForm";
import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import { Award, ShieldCheck, CheckCircle2, Phone, Stethoscope } from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.com/nose-sinus-rhinology" // update if needed

  return {
    title:
      "Best Nose & Sinus Surgeon in Delhi | Sinusitis & Nasal Treatment Specialist - Dr. Dhirendra Singh Kushwah",

    description:
      "Consult Dr. Dhirendra Singh Kushwah, an experienced ENT specialist in Delhi for advanced nose and sinus treatments. विशेषज्ञ care for sinusitis, nasal blockage, deviated septum (DNS), and allergies with modern surgical and non-surgical solutions.",

    keywords: [
      "Nose and sinus doctor Delhi",
      "Sinusitis treatment India",
      "Deviated septum surgery Delhi",
      "Nasal blockage treatment",
      "ENT sinus specialist Delhi",
      "FESS surgery India",
      "Allergic rhinitis treatment",
      "Best ENT doctor Delhi",
      "Dr Dhirendra Singh Kushwah",
    ],

    authors: [{ name: "Dr. Dhirendra Singh Kushwah" }],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        "Nose & Sinus Specialist in Delhi | Advanced ENT Care",
      description:
        "Expert treatment for sinusitis, nasal blockage, DNS, and allergies by Dr. Dhirendra Singh Kushwah.",
      url: url,
      siteName: "Dr. Dhirendra Singh Kushwah",
      type: "website",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Best Nose & Sinus Surgeon in Delhi",
      description:
        "Advanced treatment for sinus and nasal problems with expert ENT care.",
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
        "@id": "https://www.drdhirendrasinghkushwah.com/nose-sinus-rhinology",
        "url": "https://www.drdhirendrasinghkushwah.com/nose-sinus-rhinology",
        "name": "Best Nose and Sinus Surgeon in India – Dr Dhirendra Singh Kushwah",
        "description": "Advanced rhinology treatments for sinusitis, nasal blockage, deviated septum, and breathing disorders using modern surgical techniques.",
        "mainEntity": {
          "@id": "https://www.drdhirendrasinghkushwah.com/#rhinology"
        }
      },
  
      {
        "@type": "MedicalSpecialty",
        "@id": "https://www.drdhirendrasinghkushwah.com/#rhinology",
        "name": "Rhinology (Nose and Sinus Surgery)",
        "description": "Rhinology is a branch of ENT that focuses on diagnosis and treatment of nasal and sinus disorders including sinusitis, nasal obstruction, and breathing problems.",
  
        "relevantCondition": [
          { "@type": "MedicalCondition", "name": "Chronic Sinusitis" },
          { "@type": "MedicalCondition", "name": "Deviated Nasal Septum" },
          { "@type": "MedicalCondition", "name": "Nasal Polyps" },
          { "@type": "MedicalCondition", "name": "Allergic Rhinitis" },
          { "@type": "MedicalCondition", "name": "Nasal Obstruction" }
        ],
  
        "associatedProcedure": [
          { "@type": "MedicalProcedure", "name": "Septoplasty" },
          { "@type": "MedicalProcedure", "name": "Functional Endoscopic Sinus Surgery (FESS)" },
          { "@type": "MedicalProcedure", "name": "Turbinate Reduction" },
          { "@type": "MedicalProcedure", "name": "Balloon Sinuplasty" },
          { "@type": "MedicalProcedure", "name": "Nasal Polyp Removal Surgery" }
        ],
  
        "recognizingAuthority": {
          "@type": "Organization",
          "name": "American Academy of Otolaryngology–Head and Neck Surgery"
        }
      },
  
      {
        "@type": "Physician",
        "@id": "https://www.drdhirendrasinghkushwah.com/#physician",
        "name": "Dr. Dhirendra Singh Kushwah",
        "medicalSpecialty": "Otolaryngology",
        "jobTitle": "ENT Specialist",
        "url": "https://www.youtube.com/@dr.dhirendrasingh"
      },
  
      {
        "@type": "VideoObject",
        "name": "Nose and Sinus Surgery Explained",
        "description": "Learn about rhinology treatments including sinus surgery, septoplasty, and nasal procedures.",
        "thumbnailUrl": "https://img.youtube.com/vi/f8Si15IIe54/hqdefault.jpg",
        "uploadDate": "2024-01-01",
        "embedUrl": "https://www.youtube.com/embed/f8Si15IIe54"
      },
  
      {
        "@type": "VideoObject",
        "name": "Patient Testimonial - Nose and Sinus Treatment",
        "description": "Real patient experience after nose and sinus surgery.",
        "thumbnailUrl": "https://img.youtube.com/vi/hpNNLWB5jIQ/hqdefault.jpg",
        "uploadDate": "2024-01-01",
        "embedUrl": "https://www.youtube.com/embed/hpNNLWB5jIQ"
      },
  
      {
        "@type": "FAQPage",
        "mainEntity": [
  
          {
            "@type": "Question",
            "name": "What is rhinology?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rhinology is a branch of ENT that focuses on treating disorders of the nose and sinuses."
            }
          },
  
          {
            "@type": "Question",
            "name": "When should I see a nose and sinus specialist?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You should consult a specialist if you have chronic sinus infections, nasal blockage, breathing issues, or persistent allergies."
            }
          },
  
          {
            "@type": "Question",
            "name": "What surgeries are included in rhinology?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common surgeries include septoplasty, sinus surgery (FESS), turbinate reduction, and nasal polyp removal."
            }
          },
  
          {
            "@type": "Question",
            "name": "Is sinus surgery safe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, modern sinus surgery techniques are safe, minimally invasive, and provide long-term relief."
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
            { label: "Nose & Sinus (Rhinology)", href: "/specialities/nose-sinus-rhinology" },
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
              <span>Advanced Rhinology & Endoscopic Sinus Surgery</span>
              <span>•</span>
              <span>Delhi, India</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-tight">
              Best Nose and Sinus Surgeon in Delhi – Dr. Dhirendra Singh Kushwah
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
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> HD Endoscopy & FESS
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed text-base pt-1">
              Living with constant nasal blockage, recurrent sinusitis, headache, or breathing obstruction severely compromises your sleep and daily well-being. Dr. Dhirendra Singh Kushwah provides modern medical and minimally invasive endoscopic treatments.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              From advanced Functional Endoscopic Sinus Surgery (FESS) to packless septoplasty and turbinoplasty, our procedures clear nasal passages and restore healthy sinus drainage without painful packing or facial scars.
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
                Daycare Micro-FESS • Fast Recovery • Cashless TPA Accepted
              </span>
            </div>
          </div>

          {/* Right Column: High Conversion Appointment Booking Form */}
          <div className="lg:col-span-5">
            <AsideAppointmentForm />
          </div>
        </div>
      </section>

        <MedicalReviewBadge procedureName="Functional Endoscopic Sinus Surgery (FESS)" />

      {/* Main Content */}
      <div className="space-y-10">

            {/* Video Section */}
            <div className="space-y-4">
              <p className="font-semibold text-slate-800">
                Learn more through our videos:
              </p>

              <iframe
                className="w-full h-[315px] rounded-xl"
                src="https://www.youtube.com/embed/f8Si15IIe54"
                title="YouTube video"
                allowFullScreen
              />
            </div>

            {/* Reasons */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Why People Need a Nose and Sinus Surgeon
              </h2>

              <ul className="space-y-3 text-slate-600 leading-relaxed">
                <li><strong>Breathing Problems:</strong> Blocked nose or deviated septum can restrict airflow.</li>
                <li><strong>Chronic Sinus Infections:</strong> Recurrent infections may require surgical treatment.</li>
                <li><strong>Headaches & Facial Pressure:</strong> Caused by blocked sinus passages.</li>
                <li><strong>Snoring & Sleep Issues:</strong> Structural issues can disturb sleep.</li>
                <li><strong>Nasal Polyps:</strong> Growths that block airflow and often recur.</li>
                <li><strong>Deviated Septum:</strong> Leads to breathing difficulty and infections.</li>
                <li><strong>Allergies:</strong> Chronic swelling may need surgical correction.</li>
                <li><strong>Loss of Smell/Taste:</strong> Due to sinus blockage or inflammation.</li>
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Benefits After Treatment
              </h3>

              <ul className="grid grid-cols-2 gap-2 text-slate-600">
                <li>✔ Better sleep</li>
                <li>✔ Improved breathing</li>
                <li>✔ Fewer infections</li>
                <li>✔ More energy</li>
                <li>✔ Less medication</li>
              </ul>
            </div>

            {/* Why Choose */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Why Patients Trust This Treatment
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong>Expertise:</strong> Accurate diagnosis with personalized
                  treatment plans.
                </p>
                <p>
                  <strong>Advanced Techniques:</strong> Includes FESS,
                  Septoplasty, Turbinate Reduction, and Balloon Sinuplasty.
                </p>
                <p>
                  <strong>Comprehensive Care:</strong> Covers all nasal and sinus
                  conditions under one roof.
                </p>
                <p>
                  <strong>Patient-Friendly Approach:</strong> Focus on long-term
                  relief and clear communication.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-50 p-6 rounded-2xl border">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Book a Consultation Today
              </h3>
              <p className="text-slate-600">
                If you’re facing breathing issues, sinus problems, or nasal
                discomfort, consulting a specialist can provide long-term relief.
              </p>
            </div>

            {/* Testimonial Video */}
            <div className="space-y-4">
              <p className="font-semibold text-slate-800">
                Patient Testimonial:
              </p>

              <iframe
                className="w-full h-[315px] rounded-xl"
                src="https://www.youtube.com/embed/hpNNLWB5jIQ"
                title="Patient testimonial"
                allowFullScreen
              />
            </div>
        </div>
    </main>
    </>
  );
}