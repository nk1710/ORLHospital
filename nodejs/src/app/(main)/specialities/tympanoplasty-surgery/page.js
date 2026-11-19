import AsideAppointmentForm from "@/components/ui/AsideAppointmentForm";
import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import { Award, ShieldCheck, CheckCircle2, Phone, Stethoscope, Sparkles } from "lucide-react";
import Link from "next/link";

export async function generateMetadata() {
  const url =
    "https://www.drdhirendrasinghkushwah.com/specialities/tympanoplasty-surgery";

  return {
    title:
      "Best Tympanoplasty Surgeon in Delhi | Eardrum Repair Specialist - Dr. Dhirendra Singh Kushwah",

    description:
      "Consult Dr. Dhirendra Singh Kushwah, experienced ENT surgeon in Delhi for tympanoplasty and eardrum repair. Treatment for perforated eardrum, chronic ear discharge, hearing loss and recurrent ear infections.",

    keywords: [
      "Tympanoplasty Surgeon in Delhi",
      "Best Tympanoplasty Surgeon in Delhi",
      "Tympanoplasty Doctor in Delhi",
      "Tympanoplasty Surgery Delhi",
      "Eardrum Repair Surgery Delhi",
      "Eardrum Repair Specialist Delhi",
      "Perforated Eardrum Treatment Delhi",
      "Perforated Eardrum Surgery Delhi",
      "Ear Drum Repair Delhi",
      "Chronic Ear Infection Treatment Delhi",
      "Chronic Ear Discharge Treatment Delhi",
      "Hearing Loss Treatment Delhi",
      "Ear Surgery Specialist Delhi",
      "ENT Surgeon in Delhi",
      "ENT Specialist in Delhi",
      "Tympanoplasty Specialist India",
      "Tympanoplasty Surgery India",
      "Eardrum Perforation Treatment",
      "Dr Dhirendra Singh Kushwah",
    ],

    authors: [
      {
        name: "Dr. Dhirendra Singh Kushwah",
      },
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        "Best Tympanoplasty Surgeon in Delhi | Eardrum Repair Specialist",
      description:
        "Expert evaluation and treatment for perforated eardrum, chronic ear discharge, hearing loss and ear infections with tympanoplasty surgery in Delhi.",
      url,
      siteName: "Dr. Dhirendra Singh Kushwah",
      type: "article",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Best Tympanoplasty Surgeon in Delhi | Dr. Dhirendra Singh Kushwah",
      description:
        "Tympanoplasty and eardrum repair treatment for perforation, hearing loss and chronic ear problems in Delhi.",
    },

    robots: {
      index: true,
      follow: true,
    },

    category: "healthcare",
  };
}

export default async function DepartmentPage() {
  const pageUrl =
    "https://www.drdhirendrasinghkushwah.com/specialities/tympanoplasty-surgery";

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name:
          "Best Tympanoplasty Surgeon in Delhi | Eardrum Repair Specialist - Dr. Dhirendra Singh Kushwah",
        description:
          "Information about tympanoplasty surgery, eardrum perforation, symptoms, diagnosis, treatment, recovery and when to consult an ENT surgeon.",
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
        },
        about: {
          "@id": `${pageUrl}#tympanoplasty`,
        },
      },

      {
        "@type": "SurgicalProcedure",
        "@id": `${pageUrl}#tympanoplasty`,
        name: "Tympanoplasty Surgery",
        alternateName: [
          "Eardrum Repair Surgery",
          "Tympanic Membrane Repair",
        ],
        description:
          "Tympanoplasty is a surgical procedure used to repair a perforated or damaged eardrum and, when appropriate, improve hearing and protect the middle ear.",
        bodyLocation: "Tympanic membrane (eardrum)",
        procedureType: "Surgical",
        preparation:
          "Evaluation may include ear examination, hearing assessment and other tests depending on the cause and severity of the ear problem.",
        followup:
          "Follow-up examinations are performed to monitor healing of the graft and ear. Hearing improvement may occur gradually during recovery.",
        indication: [
          "Persistent perforated eardrum",
          "Chronic ear discharge",
          "Hearing loss associated with eardrum damage",
          "Recurrent middle ear infections",
          "Eardrum damage following trauma",
        ],
        benefit: [
          "Repair of the eardrum",
          "Protection of the middle ear",
          "Reduction of recurrent ear discharge in appropriate cases",
          "Potential improvement in hearing",
          "Reduction in the risk of water entering the middle ear through a perforation",
        ],
        riskFactor: [
          "Infection",
          "Bleeding",
          "Temporary discomfort",
          "Incomplete healing",
          "Persistent or recurrent hearing problems",
          "Graft failure in some cases",
        ],
        provider: {
          "@id":
            "https://www.drdhirendrasinghkushwah.com/#physician",
        },

        availableAtOrFrom: {
          "@type": "MedicalClinic",
          name: "ENT Clinic - Arjun Nagar",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "19-C, Arjun Nagar Safdarjung Enclave",
            addressLocality: "New Delhi",
            postalCode: "110029",
            addressCountry: "IN",
          },
          telephone: "+91-9311449825",
        },
      },

      {
        "@type": "VideoObject",
        name: "Tympanoplasty Surgery Explained",
        description:
          "Educational video explaining tympanoplasty surgery, eardrum repair and recovery.",
        thumbnailUrl:
          "https://img.youtube.com/vi/GNeHj38ahPs/hqdefault.jpg",
        uploadDate: "2024-01-01",
        embedUrl:
          "https://www.youtube.com/embed/GNeHj38ahPs",
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is tympanoplasty surgery?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Tympanoplasty is an operation used to repair a perforated or damaged eardrum. Depending on the condition of the ear, the procedure may also help improve hearing and protect the middle ear from repeated infection.",
            },
          },

          {
            "@type": "Question",
            name: "What are the symptoms of a perforated eardrum?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Common symptoms may include hearing loss, ear discharge, ear pain, ringing in the ear, recurrent ear infections and sometimes dizziness. Some people may have very few symptoms despite having an eardrum perforation.",
            },
          },

          {
            "@type": "Question",
            name: "Who may need tympanoplasty?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Tympanoplasty may be considered for patients with a persistent eardrum perforation, recurrent ear infections, chronic ear discharge, or hearing problems associated with damage to the eardrum. The need for surgery depends on the individual ear condition.",
            },
          },

          {
            "@type": "Question",
            name: "How is tympanoplasty diagnosed?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "An ENT specialist may examine the ear using an otoscope or microscope and may recommend hearing tests such as pure tone audiometry. Additional investigations may be advised when clinically necessary.",
            },
          },

          {
            "@type": "Question",
            name: "How long does tympanoplasty recovery take?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Initial healing generally takes several weeks, while complete healing and hearing improvement can take longer depending on the type of surgery, the condition of the ear and individual recovery.",
            },
          },

          {
            "@type": "Question",
            name: "Is tympanoplasty painful?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Tympanoplasty is performed under appropriate anaesthesia. Some patients may experience temporary discomfort, fullness or mild pain during recovery, which is managed according to the surgeon's instructions.",
            },
          },

          {
            "@type": "Question",
            name: "When should I see an ENT doctor for a perforated eardrum?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "You should consult an ENT doctor if you have persistent ear discharge, hearing loss, recurrent ear infections, an ear injury, a known eardrum perforation, severe ear pain, dizziness or symptoms that do not improve.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <ClinicalBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Specialities & Surgeries", href: "/specialities" },
            { label: "Tympanoplasty Surgery", href: "/specialities/tympanoplasty-surgery" },
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
                <span>Ear Microsurgery & Hearing Restoration</span>
                <span>•</span>
                <span>Delhi, India</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-tight">
                Best Tympanoplasty Surgeon in Delhi | Eardrum Repair Specialist – Dr. Dhirendra Singh Kushwah
              </h1>

              {/* Trust & Clinical Badges */}
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
                Dr. Dhirendra Singh Kushwah is an experienced ENT surgeon in
                Delhi providing evaluation and surgical treatment for eardrum
                perforation, chronic ear discharge, recurrent ear infections and
                hearing problems. Tympanoplasty, also known as eardrum repair
                surgery, is performed when a damaged or perforated eardrum does
                not heal adequately or requires surgical reconstruction.
              </p>

              <p className="text-slate-600 leading-relaxed text-base">
                If you are searching for a{" "}
                <strong>Tympanoplasty Surgeon in Delhi</strong>,{" "}
                <strong>eardrum repair specialist in Delhi</strong>, or{" "}
                <strong>perforated eardrum treatment</strong>, an ENT
                evaluation can help determine whether observation, medication,
                hearing rehabilitation or surgery is appropriate for your
                condition.
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
                  Cashless TPA Available • Safdarjung Enclave & Jasola Vihar
                </span>
              </div>
            </div>

            {/* Right Column: High Conversion Appointment Booking Form */}
            <div className="lg:col-span-5">
              <AsideAppointmentForm />
            </div>
          </div>
        </section>

        <MedicalReviewBadge procedureName="Tympanoplasty (Eardrum Repair Surgery)" />

        {/* =====================================================
            FEATURED SNIPPET
        ====================================================== */}

        <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border">
          <h2 className="text-2xl font-bold mb-4">
            What Is Tympanoplasty?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            <strong>Tympanoplasty is surgery to repair a perforated or
            damaged eardrum.</strong> The procedure may be recommended when
            an eardrum hole persists, causes recurrent ear discharge or
            contributes to hearing problems. During surgery, the ENT surgeon
            repairs the damaged tympanic membrane, often using a graft
            material, with the aim of restoring the structure of the eardrum
            and protecting the middle ear.
          </p>
        </section>

        {/* =====================================================
            VIDEO
        ====================================================== */}

        <section>
          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              className="w-full h-[300px] md:h-[450px]"
              src="https://www.youtube.com/embed/GNeHj38ahPs?si=Wg0MefNIa2US7_Ru"
              title="Tympanoplasty Surgery Explained"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="text-slate-600 mt-4 font-semibold">
            <a
              href="https://www.youtube.com/@dr.dhirendrasingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 hover:text-teal-800 underline font-medium"
            >
              Watch more ENT health videos from Dr. Dhirendra Singh Kushwah
            </a>
          </p>
        </section>

        {/* =====================================================
            SYMPTOMS
        ====================================================== */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Symptoms of a Perforated or Damaged Eardrum
          </h2>

          <p className="text-slate-600 leading-relaxed">
            A perforated eardrum may occur because of an ear infection,
            trauma, sudden pressure changes, foreign objects or other ear
            problems. Symptoms vary depending on the size and location of
            the perforation and whether the middle ear is also affected.
          </p>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Reduced or muffled hearing</li>
            <li>Ear discharge or fluid coming from the ear</li>
            <li>Repeated ear infections</li>
            <li>Ear pain or discomfort</li>
            <li>Ringing or buzzing sound in the ear (tinnitus)</li>
            <li>A feeling of fullness or pressure in the ear</li>
            <li>Sudden hearing changes following an injury</li>
            <li>Dizziness or imbalance in some cases</li>
            <li>Persistent wetness or discharge from the ear</li>
          </ul>

          <p className="text-slate-600 leading-relaxed">
            Not every patient with these symptoms requires surgery.
            Examination by an ENT specialist is important to identify the
            actual cause and determine the most appropriate treatment.
          </p>
        </section>

        {/* =====================================================
            CAUSES
        ====================================================== */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            What Causes Eardrum Perforation?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            The eardrum is a thin membrane separating the ear canal from the
            middle ear. It can develop a hole or tear for several reasons.
          </p>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Chronic or recurrent middle ear infections</li>
            <li>Ear trauma or injury</li>
            <li>Sudden changes in air pressure</li>
            <li>Insertion of objects or cotton buds into the ear</li>
            <li>Severe infection causing pressure on the eardrum</li>
            <li>Previous ear surgery</li>
            <li>Long-standing middle ear disease</li>
          </ul>
        </section>

        {/* =====================================================
            WHO NEEDS SURGERY
        ====================================================== */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Who May Need Tympanoplasty Surgery?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Tympanoplasty is not automatically required for every eardrum
            perforation. Some small perforations may heal naturally.
            Surgery may be considered when the perforation persists or when
            it is associated with recurrent infections, discharge or hearing
            problems.
          </p>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Persistent perforated eardrum</li>
            <li>Chronic ear discharge</li>
            <li>Recurrent middle ear infections</li>
            <li>Hearing loss associated with eardrum damage</li>
            <li>Eardrum damage following trauma</li>
            <li>Persistent ear problems despite appropriate treatment</li>
            <li>Selected cases requiring reconstruction of the eardrum</li>
          </ul>
        </section>

        {/* =====================================================
            DIAGNOSIS
        ====================================================== */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            How Is a Perforated Eardrum Diagnosed?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Diagnosis begins with a detailed history and examination of the
            ear. The ENT specialist evaluates the eardrum, ear canal and
            middle-ear condition before deciding whether surgery is required.
          </p>

          <h3 className="text-xl font-semibold">
            Tests May Include
          </h3>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Detailed ENT and ear examination</li>
            <li>Otoscopy or microscopic ear examination</li>
            <li>Pure tone audiometry</li>
            <li>Speech and hearing assessment when required</li>
            <li>Tympanometry in selected cases</li>
            <li>Additional imaging when clinically indicated</li>
          </ul>

          <p className="text-slate-600 leading-relaxed">
            The exact investigations depend on the symptoms, size and
            location of the perforation, hearing status and any associated
            middle-ear disease.
          </p>
        </section>

        {/* =====================================================
            TREATMENT
        ====================================================== */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Tympanoplasty Treatment and Eardrum Repair
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Treatment depends on the cause and severity of the eardrum
            problem. An ENT specialist may initially recommend observation
            or medical treatment when appropriate. Persistent perforations
            may require surgical repair.
          </p>

          <h3 className="text-xl font-semibold">
            Common Treatment Approaches
          </h3>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>
              Observation for selected perforations that may heal naturally
            </li>
            <li>
              Treatment of active ear infection or inflammation
            </li>
            <li>
              Keeping the affected ear protected from water when advised
            </li>
            <li>
              Hearing evaluation and management
            </li>
            <li>
              Tympanoplasty for suitable persistent perforations
            </li>
          </ul>
        </section>

        {/* =====================================================
            PROCEDURE
        ====================================================== */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            How Is Tympanoplasty Surgery Performed?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Tympanoplasty involves surgical reconstruction of the damaged
            eardrum. Depending on the condition, the surgeon uses an
            appropriate graft material to close the perforation and support
            healing of the tympanic membrane.
          </p>

          <p className="text-slate-600 leading-relaxed">
            The exact surgical technique depends on the size and location of
            the perforation, condition of the middle ear, hearing status and
            any associated ear disease. The surgeon discusses the proposed
            technique and expected outcome during consultation.
          </p>

          <h3 className="text-xl font-semibold">
            Main Goals of Tympanoplasty
          </h3>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Close the eardrum perforation</li>
            <li>Protect the middle ear</li>
            <li>Reduce recurrent ear discharge</li>
            <li>Reduce the risk of repeated middle-ear infection</li>
            <li>Improve hearing when possible</li>
          </ul>
        </section>

        {/* =====================================================
            BENEFITS
        ====================================================== */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Benefits of Tympanoplasty
          </h2>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Repair of a persistent eardrum perforation</li>
            <li>Protection of the middle ear</li>
            <li>Reduction in recurrent ear discharge in appropriate cases</li>
            <li>Potential improvement in hearing</li>
            <li>Improved ear protection during daily activities</li>
            <li>Better management of chronic ear disease</li>
          </ul>

          <p className="text-slate-600 leading-relaxed">
            Hearing improvement cannot be guaranteed in every patient.
            Results depend on the condition of the eardrum, middle ear,
            hearing mechanism and any associated disease.
          </p>
        </section>

        {/* =====================================================
            RECOVERY
        ====================================================== */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Tympanoplasty Recovery Time
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Recovery varies from patient to patient. Initial healing
            generally takes several weeks, while complete healing of the
            graft and improvement in hearing may take longer.
          </p>

          <h3 className="text-xl font-semibold">
            During Recovery
          </h3>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Attend scheduled follow-up appointments</li>
            <li>Keep the ear protected as advised by the surgeon</li>
            <li>Avoid putting anything inside the operated ear</li>
            <li>Follow prescribed medicines and ear-care instructions</li>
            <li>Avoid activities restricted by your ENT surgeon</li>
          </ul>

          <p className="text-slate-600 leading-relaxed">
            Hearing may initially feel blocked or different after surgery.
            Improvement is often gradual as the ear heals.
          </p>
        </section>

        {/* =====================================================
            RISKS
        ====================================================== */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Possible Risks and Limitations of Tympanoplasty
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Tympanoplasty is commonly performed to repair a damaged eardrum,
            but like other surgical procedures, it has potential risks.
            Your ENT surgeon will discuss these based on your individual
            condition.
          </p>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Temporary pain or discomfort</li>
            <li>Bleeding</li>
            <li>Infection</li>
            <li>Incomplete healing of the graft</li>
            <li>Persistent perforation in some cases</li>
            <li>Persistent or recurrent hearing loss</li>
            <li>Need for additional treatment or surgery in selected cases</li>
          </ul>
        </section>

        {/* =====================================================
            WHEN TO SEE ENT
        ====================================================== */}

        <section className="bg-red-50 rounded-2xl p-6 md:p-8 border border-red-100 space-y-5">
          <h2 className="text-2xl font-bold">
            When Should You See an ENT Doctor for a Perforated Eardrum?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Do not ignore persistent ear symptoms. An ENT consultation is
            advisable if you experience:
          </p>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Persistent ear discharge</li>
            <li>Reduced or worsening hearing</li>
            <li>Repeated ear infections</li>
            <li>A known hole or perforation in the eardrum</li>
            <li>Ear injury or trauma</li>
            <li>Persistent ear pain</li>
            <li>Ringing or buzzing in the ear</li>
            <li>Dizziness or balance problems</li>
            <li>Sudden hearing changes</li>
          </ul>

          <p className="text-slate-600 leading-relaxed font-medium">
            Early evaluation can help identify the cause of the ear problem
            and determine whether observation, medical treatment or surgical
            repair is appropriate.
          </p>
        </section>

        {/* =====================================================
            WHY CHOOSE
        ====================================================== */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Why Consult Dr. Dhirendra Singh Kushwah for Tympanoplasty in Delhi?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Dr. Dhirendra Singh Kushwah is an experienced ENT specialist and
            surgeon providing comprehensive care for ear, nose and throat
            conditions in Delhi. His evaluation-based approach focuses on
            understanding the cause of hearing loss, ear discharge,
            infection or eardrum damage before recommending treatment.
          </p>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Experienced ENT surgical care</li>
            <li>Evaluation of perforated and damaged eardrums</li>
            <li>Hearing assessment and treatment planning</li>
            <li>Management of chronic ear infections and discharge</li>
            <li>Individualised surgical recommendations</li>
            <li>Follow-up care after ear surgery</li>
          </ul>
        </section>

        {/* =====================================================
            LOCAL SEO
        ====================================================== */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Tympanoplasty Surgeon in Delhi NCR
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Patients looking for{" "}
            <strong>tympanoplasty surgery in Delhi</strong>,{" "}
            <strong>eardrum repair in South Delhi</strong>,{" "}
            <strong>perforated eardrum treatment in Delhi NCR</strong>, or
            an experienced <strong>ENT surgeon near Safdarjung Enclave</strong>
            can consult Dr. Dhirendra Singh Kushwah for evaluation and
            treatment planning.
          </p>

          <p className="text-slate-600 leading-relaxed">
            The clinic location in Arjun Nagar, Safdarjung Enclave, provides
            access for patients from South Delhi and surrounding areas
            including Green Park, Hauz Khas, AIIMS, Saket, Malviya Nagar,
            Greater Kailash, CR Park, Vasant Kunj, Lajpat Nagar, Jasola,
            Okhla, Defence Colony and other parts of Delhi NCR.
          </p>

          <p className="text-slate-600 leading-relaxed">
            If you are searching online for a{" "}
            <strong>
              tympanoplasty doctor near me in Delhi
            </strong>
            , an ENT examination is recommended before deciding whether
            surgery is necessary.
          </p>
        </section>

        {/* =====================================================
            LOCAL SEO KEYWORDS
        ====================================================== */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Tympanoplasty and Eardrum Treatment Services
          </h2>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Tympanoplasty Surgeon in Delhi",
              "Best Tympanoplasty Doctor in Delhi",
              "Eardrum Repair Specialist in Delhi",
              "Eardrum Perforation Treatment Delhi",
              "Perforated Eardrum Surgery Delhi",
              "Tympanoplasty Surgery South Delhi",
              "Ear Surgery Specialist Delhi",
              "Chronic Ear Discharge Treatment Delhi",
              "Chronic Ear Infection Treatment Delhi",
              "Hearing Loss Treatment Delhi",
              "ENT Surgeon Safdarjung Enclave",
              "ENT Specialist South Delhi",
              "Tympanoplasty Doctor South Delhi",
              "Eardrum Repair Arjun Nagar",
              "ENT Doctor near Green Park",
              "ENT Doctor near Hauz Khas",
              "Ear Specialist near AIIMS Delhi",
              "ENT Surgeon Delhi NCR",
            ].map((keyword) => (
              <div
                key={keyword}
                className="border rounded-lg p-3 text-slate-600"
              >
                {keyword}
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">
            Frequently Asked Questions About Tympanoplasty
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-lg font-semibold">
                Can a perforated eardrum heal without surgery?
              </h3>
              <p className="text-slate-600 mt-2 leading-relaxed">
                Some eardrum perforations may heal naturally, particularly
                when they are small and the underlying cause is treated.
                Persistent perforations may require surgical repair after
                assessment by an ENT specialist.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Does tympanoplasty improve hearing?
              </h3>
              <p className="text-slate-600 mt-2 leading-relaxed">
                Tympanoplasty may improve hearing when hearing loss is
                related to the eardrum or associated middle-ear problems.
                The expected hearing outcome depends on the condition of the
                middle and inner ear.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                How long does tympanoplasty surgery take?
              </h3>
              <p className="text-slate-600 mt-2 leading-relaxed">
                Surgical time varies according to the type and complexity of
                the procedure and the condition of the ear. Your ENT surgeon
                can provide a more accurate estimate after examination.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Can I travel after tympanoplasty?
              </h3>
              <p className="text-slate-600 mt-2 leading-relaxed">
                Travel restrictions depend on the procedure and individual
                recovery. Air travel and activities involving pressure
                changes should only be resumed according to your surgeon's
                advice.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Is tympanoplasty suitable for children?
              </h3>
              <p className="text-slate-600 mt-2 leading-relaxed">
                Tympanoplasty may be performed in selected children when
                clinically appropriate. The ENT specialist considers the
                child's age, ear disease, hearing status and overall
                condition before recommending surgery.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                What is the cost of tympanoplasty in Delhi?
              </h3>
              <p className="text-slate-600 mt-2 leading-relaxed">
                The cost of tympanoplasty varies depending on the type of
                surgery, hospital or surgical facility, investigations,
                anaesthesia, complexity of the ear condition and follow-up
                requirements. A personalised estimate can be provided after
                clinical evaluation.
              </p>
            </div>

          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="bg-teal-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold">
            Consult a Tympanoplasty Surgeon in Delhi
          </h2>

          <p className="mt-4 leading-relaxed max-w-3xl mx-auto">
            Persistent ear discharge, hearing loss or a perforated eardrum
            should be properly evaluated. Consult Dr. Dhirendra Singh
            Kushwah for an ENT assessment and personalised treatment plan
            for eardrum perforation and chronic ear problems.
          </p>

          <p className="mt-5 font-semibold">
            Timely diagnosis can help protect your hearing and prevent
            complications associated with untreated chronic ear disease.
          </p>
        </section>

      </main>
    </>
  );
}