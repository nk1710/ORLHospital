import AsideAppointmentForm from "@/components/ui/AsideAppointmentForm";
import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import { Award, ShieldCheck, CheckCircle2, Phone, Stethoscope } from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.in/pediatric-ent" // update with actual URL

  return {
    title:
      "Best Pediatric ENT Specialists in Delhi | Child Ear, Nose & Throat Care - Dr. Dhirendra Singh Kushwah",

    description:
      "Consult Dr. Dhirendra Singh Kushwah, leading Pediatric ENT specialist in Delhi. Expert care for children with ear infections, tonsillitis, adenoids, hearing problems, and sinus issues. Schedule an appointment today.",

    keywords: [
      "Pediatric ENT doctor Delhi",
      "Child ENT specialist India",
      "Ear infection treatment for kids",
      "Tonsillitis treatment in children",
      "Adenoid surgery Delhi",
      "Hearing problems child ENT",
      "Sinus treatment for kids",
      "Best ENT doctor Delhi",
      "Dr Dhirendra Singh Kushwah",
    ],

    authors: [{ name: "Dr. Dhirendra Singh Kushwah" }],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        "Pediatric ENT Specialists in Delhi | Child ENT Care",
      description:
        "Expert care for children with ear, nose, and throat problems by Dr. Dhirendra Singh Kushwah.",
      url: url,
      siteName: "Dr. Dhirendra Singh Kushwah",
      type: "article",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Best Pediatric ENT Specialists in Delhi",
      description:
        "Expert ENT care for children: ear infections, tonsillitis, adenoids, hearing, and sinus issues.",
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
    "name": "Pediatric ENT Specialists in Delhi - Dr. Dhirendra Singh Kushwah",
    "url": "https://www.drdhirendrasinghkushwah.in/pediatric-ent",
    "mainEntity": {
      "@type": "MedicalCondition",
      "name": "Pediatric ENT Conditions",
      "alternateName": ["Child ENT Disorders", "Ear, Nose, and Throat Issues in Children"],
      "description": "Pediatric ENT conditions include ear infections, hearing loss, breathing problems, airway obstruction, neck masses, and other ENT issues in children. Early diagnosis and treatment are essential for proper development and quality of life.",
      "signOrSymptom": [
        "Recurrent ear infections",
        "Hearing loss or difficulty responding to sounds",
        "Hoarseness or voice changes",
        "Noisy breathing or obstructed airflow",
        "Swollen or painful neck lumps"
      ],
      "possibleTreatment": [
        {
          "@type": "MedicalProcedure",
          "name": "Adenoidectomy",
          "description": "Surgical removal of the adenoids to improve breathing and reduce recurrent infections."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Myringotomy with Grommets",
          "description": "Small incision in the eardrum with insertion of ventilation tubes to prevent recurrent middle ear infections and improve hearing."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Laryngo-Tracheo-Bronchoscopy",
          "description": "Endoscopic examination of the airway to diagnose hoarseness, noisy breathing, or airway obstructions."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Laryngotracheal Reconstruction (LTR)",
          "description": "Surgical widening of a narrowed airway using cartilage grafts to restore normal breathing."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Neck Mass Excision",
          "description": "Surgical removal of congenital, inflammatory, or abnormal neck masses in children."
        }
      ],
      "possibleComplication": [
        "Hearing impairment",
        "Airway obstruction",
        "Persistent infections",
        "Difficulty breathing or swallowing"
      ],
      "expertConsideration": {
        "@type": "Physician",
        "name": "Dr. Dhirendra Singh Kushwah",
        "medicalSpecialty": "Pediatric ENT",
        "jobTitle": "ENT Surgeon & Pediatric ENT Specialist",
        "url": "https://www.drdhirendrasinghkushwah.in/",
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
            { label: "Pediatric ENT", href: "/specialities/pediatric-ent" },
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
              <span>Pediatric ENT & Airway Specialists</span>
              <span>•</span>
              <span>Delhi, India</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-tight">
              Top Pediatric ENT Specialists in Delhi – Dr. Dhirendra Singh Kushwah
            </h1>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs font-medium text-slate-700">
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                <Award className="w-4 h-4 text-teal-600" /> 25+ Years Experience
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-teal-600" /> Child-Friendly Clinic
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600" /> Advanced Diagnostic Care
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed text-base pt-1">
              Finding experienced pediatric ENT specialists in Delhi is essential for timely care.
              At Dr. Dhirendra Singh Kushwah’s ORL Clinic, we provide gentle, exceptional
              care for your child's ear infections, enlarged tonsils, adenoids, airway obstruction, and hearing issues.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              Our clinic is equipped with child-friendly diagnostic tools and advanced facilities
              dedicated to diagnosing and managing both common and complex pediatric ENT conditions with minimum discomfort.
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
                Safdarjung Enclave & Jasola Vihar • Emergency OPD Available
              </span>
            </div>
          </div>

          {/* Right Column: High Conversion Appointment Booking Form */}
          <div className="lg:col-span-5">
            <AsideAppointmentForm />
          </div>
        </div>
      </section>

        <MedicalReviewBadge procedureName="Pediatric Otolaryngology & Coblation Surgery" />

      {/* Main Content */}
      <div className="space-y-10">

            {/* Video */}
            <div className="space-y-3">
              <p className="font-semibold text-slate-800">
                Learn more through our videos:
              </p>

              <iframe
                className="w-full h-[315px] rounded-xl"
                src="https://www.youtube.com/embed/oSbnr43vSdE"
                title="YouTube video"
                allowFullScreen
              />
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900">
                Pediatric ENT Services We Offer
              </h2>

              <div className="space-y-5 text-slate-600 leading-relaxed">

                <div>
                  <p className="font-semibold">1. Adenoidectomy</p>
                  <p><strong>What it is:</strong> Removal of adenoids located behind the nose.</p>
                  <p><strong>Benefits:</strong> Improves breathing, reduces infections, and helps with sleep issues.</p>
                </div>

                <div>
                  <p className="font-semibold">2. Myringotomy & Grommets</p>
                  <p><strong>What it is:</strong> Small incision in the eardrum to insert a tube.</p>
                  <p><strong>Benefits:</strong> Prevents infections, improves hearing, and reduces fluid buildup.</p>
                </div>

                <div>
                  <p className="font-semibold">3. Laryngo-Tracheo-Bronchoscopy</p>
                  <p><strong>What it is:</strong> Endoscopic airway examination.</p>
                  <p><strong>Benefits:</strong> Detects airway issues, foreign bodies, or inflammation.</p>
                </div>

                <div>
                  <p className="font-semibold">4. Laryngotracheal Reconstruction (LTR)</p>
                  <p><strong>What it is:</strong> Surgery to widen narrowed airways.</p>
                  <p><strong>Benefits:</strong> Improves breathing and airway function.</p>
                </div>

                <div>
                  <p className="font-semibold">5. Neck Mass Excision</p>
                  <p><strong>What it is:</strong> Removal of abnormal neck lumps.</p>
                  <p><strong>Benefits:</strong> Treats persistent masses and prevents complications.</p>
                </div>

              </div>
            </div>

            {/* Why Choose */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">
                Why Choose Our Clinic
              </h2>

              <div className="space-y-3 text-slate-600 leading-relaxed">
                <p><strong>Expert Care:</strong> Led by experienced ENT specialists.</p>
                <p><strong>Advanced Facilities:</strong> Modern diagnostic and surgical tools.</p>
                <p><strong>Personalized Treatment:</strong> Tailored plans for each child.</p>
                <p><strong>Comprehensive Support:</strong> From diagnosis to recovery.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-50 border rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Schedule Your Appointment
              </h3>
              <p className="text-slate-600">
                If your child is experiencing ENT issues, consult a specialist for
                accurate diagnosis and effective treatment.
              </p>
              <p className="mt-2 font-medium">
                📞 Call: +91-9311449825
              </p>
            </div>

            {/* FAQ */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-5 text-slate-600 leading-relaxed">

                <div>
                  <p className="font-semibold">
                    1. When should my child see a pediatric ENT specialist?
                  </p>
                  <p>
                    Persistent ear infections, hearing issues, breathing problems,
                    or neck swelling are common signs.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">
                    2. What is adenoidectomy?
                  </p>
                  <p>
                    A surgery to remove adenoids to improve breathing and reduce infections.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">
                    3. What is myringotomy with grommets?
                  </p>
                  <p>
                    A procedure to drain fluid and prevent ear infections using small tubes.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">
                    4. What is LTR surgery?
                  </p>
                  <p>
                    A procedure to widen narrowed airways and improve breathing.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">
                    5. When is neck mass surgery needed?
                  </p>
                  <p>
                    When the mass persists, grows, or causes discomfort or breathing issues.
                  </p>
                </div>

              </div>
            </div>

            {/* Image */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">
                Happy Patients
              </h3>

              <img
                src="/images/pat13.webp"
                alt="Happy Patients"
                className="w-full rounded-xl"
              />
            </div>

          </div>
      </main>
    </>
  );
}