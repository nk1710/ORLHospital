import AsideAppointmentForm from "@/components/ui/AsideAppointmentForm";
import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import { Award, ShieldCheck, CheckCircle2, Phone, Stethoscope } from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.com/septoplasty" // update if needed

  return {
    title:
      "Best Septoplasty Surgeon in Delhi | Deviated Septum (DNS) Surgery Specialist - Dr. Dhirendra Singh Kushwah",

    description:
      "Consult Dr. Dhirendra Singh Kushwah, an experienced ENT surgeon in Delhi for septoplasty surgery to correct deviated septum (DNS). Improve breathing, relieve nasal blockage, and get safe, advanced treatment with expert care.",

    keywords: [
      "Septoplasty surgery Delhi",
      "Deviated septum treatment India",
      "DNS surgery Delhi",
      "Nasal blockage treatment",
      "Breathing problem nose treatment",
      "ENT surgeon in Delhi",
      "Nose surgery specialist",
      "Best ENT doctor Delhi",
      "Dr Dhirendra Singh Kushwah",
    ],

    authors: [{ name: "Dr. Dhirendra Singh Kushwah" }],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        "Septoplasty (DNS Surgery) in Delhi | Nose Correction Specialist",
      description:
        "Advanced septoplasty surgery for deviated septum and nasal blockage by Dr. Dhirendra Singh Kushwah.",
      url: url,
      siteName: "Dr. Dhirendra Singh Kushwah",
      type: "article",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Best Septoplasty Surgeon in Delhi",
      description:
        "Safe and effective surgery for deviated septum and breathing improvement.",
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
    "@type": "SurgicalProcedure",
    "name": "Septoplasty (Pain Free Packless Septoplasty)",
    "description": "Septoplasty is a surgical procedure used to correct a deviated nasal septum. The surgery straightens and repositions the cartilage and bone inside the nose to improve breathing and restore proper airflow without changing the external shape of the nose.",
    "bodyLocation": "Nasal Septum",
    "procedureType": "Surgical",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Otolaryngology"
    },
    "howPerformed": "During septoplasty surgery, the ENT surgeon gently lifts the nasal lining and straightens or repositions the deviated septum. Excess cartilage or bone causing obstruction may be removed or reshaped to allow smooth airflow through both nostrils.",
    "preparation": "Before septoplasty, patients undergo an ENT evaluation and nasal examination. The doctor may advise avoiding certain medications, fasting before surgery, and arranging transportation after the procedure.",
    "followup": "Most patients experience improved breathing within a few weeks. Follow-up visits help monitor healing and ensure proper nasal airflow recovery.",
    "indication": [
      "Difficulty breathing through one or both nostrils",
      "Frequent nasal blockage",
      "Snoring or noisy breathing during sleep",
      "Repeated sinus infections",
      "Nosebleeds",
      "Facial pressure or headaches",
      "Postnasal drip",
      "Reduced sense of smell"
    ],
    "riskFactor": [
      "Bleeding",
      "Infection",
      "Temporary nasal swelling",
      "Mild discomfort during recovery"
    ],
    "provider": {
      "@type": "Physician",
      "name": "Dr. Dhirendra Singh Kushwah",
      "medicalSpecialty": "Otolaryngology",
      "jobTitle": "ENT Specialist",
      "url": "https://www.youtube.com/@dr.dhirendrasingh"
    },
    "availableAtOrFrom": {
      "@type": "MedicalClinic",
      "name": "ENT & Gynae Clinic",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "19-C, Arjun Nagar Safdarjung Enclave",
        "addressLocality": "New Delhi",
        "postalCode": "110029",
        "addressCountry": "IN"
      },
      "telephone": "+91-9311449825"
    },
    "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.drdhirendrasinghkushwah.com/septoplasty"
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
            { label: "Septoplasty Surgery", href: "/specialities/septoplasty" },
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
              <span>Nasal Microsurgery & Septal Correction</span>
              <span>•</span>
              <span>Delhi, India</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-tight">
              Best Septoplasty (Pain-Free, Pack-Less) Surgery in Delhi – Dr. Dhirendra Singh Kushwah
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
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> 100% Pack-Less & Pain-Free
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed text-base pt-1">
              Septoplasty is a specialized procedure used to correct a deviated septum—the
              wall of cartilage and bone that separates the nostrils. When this
              wall is crooked or displaced, it blocks normal airflow and causes chronic nasal congestion.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              During modern pack-less septoplasty, the septum is gently straightened and
              repositioned to restore smooth, natural breathing without painful nasal packing.
              This surgery does not change the outer shape of the nose—it exclusively improves internal airflow and sinus ventilation.
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
                Daycare Procedure • Fast 24-48h Normalcy • Cashless TPA
              </span>
            </div>
          </div>

          {/* Right Column: High Conversion Appointment Booking Form */}
          <div className="lg:col-span-5">
            <AsideAppointmentForm />
          </div>
        </div>
      </section>

        <MedicalReviewBadge procedureName="Septoplasty (Pack-Less Deviated Septum Surgery)" />

      {/* Main Content Sections */}
      <div className="space-y-10">

            {/* Symptoms */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">
                Symptoms That May Require Septoplasty
              </h2>

              <p className="text-slate-600">
                A deviated septum can cause the following issues:
              </p>

              <ul className="space-y-2 text-slate-600">
                <li>• Difficulty breathing through one or both nostrils</li>
                <li>• Frequent nasal blockage</li>
                <li>• Snoring or noisy breathing</li>
                <li>• Recurrent sinus infections</li>
                <li>• Nosebleeds</li>
                <li>• Facial pain or pressure</li>
                <li>• Headaches</li>
                <li>• Postnasal drip</li>
                <li>• Dryness inside the nose</li>
                <li>• Reduced sense of smell</li>
              </ul>

              <p className="text-slate-600">
                These symptoms occur due to restricted airflow and irritation
                inside the nasal passages.
              </p>
            </div>

            {/* Video 1 */}
            <div className="space-y-3">
              <p className="font-semibold text-slate-800">
                Learn more through our videos:
              </p>

              <iframe
                className="w-full h-[315px] rounded-xl"
                src="https://www.youtube.com/embed/XNAf__Xp_FE"
                title="Septoplasty video"
                allowFullScreen
              />
            </div>

            {/* Importance */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">
                Why Septal Deviation Correction Is Important
              </h2>

              <p className="text-slate-600">
                Correcting a deviated septum helps improve overall quality of life:
              </p>

              <ul className="space-y-2 text-slate-600">
                <li>• Better nasal airflow</li>
                <li>• Improved sleep quality</li>
                <li>• Enhanced sense of smell</li>
                <li>• Reduced sinus infections</li>
                <li>• Long-term breathing comfort</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-slate-50 border rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Book Your Consultation Today
              </h3>
              <p className="text-slate-600">
                Get expert diagnosis and advanced treatment for septal deviation.
                Modern techniques ensure safe procedures and faster recovery.
              </p>
            </div>

            {/* Testimonial Video */}
            <div className="space-y-3">
              <p className="font-semibold text-slate-800">
                Patient Testimonial:
              </p>

              <iframe
                className="w-full h-[315px] rounded-xl"
                src="https://www.youtube.com/embed/hPpGMAuFRvM"
                title="Patient testimonial"
                allowFullScreen
              />
            </div>

          </div>
      </main>
    </>
  );
}