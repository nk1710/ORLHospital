import AsideAppointmentForm from "@/components/ui/AsideAppointmentForm";
import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import { Award, ShieldCheck, CheckCircle2, Phone, Stethoscope } from "lucide-react";

export async function generateMetadata() {
  const url =
    "https://www.drdhirendrasinghkushwah.com/specialities/ossiculoplasty-surgery";

  return {
    title:
      "Best Ossiculoplasty Surgeon in Delhi | Hearing Reconstruction Surgery - Dr. Dhirendra Singh Kushwah",

    description:
      "Consult Dr. Dhirendra Singh Kushwah, experienced ENT surgeon in Delhi for ossiculoplasty and middle-ear hearing reconstruction. Treatment for conductive hearing loss, damaged ear bones, chronic ear disease and hearing problems.",

    keywords: [
      "Ossiculoplasty Surgeon in Delhi",
      "Best Ossiculoplasty Surgeon in Delhi",
      "Ossiculoplasty Doctor in Delhi",
      "Ossiculoplasty Surgery Delhi",
      "Ossicular Chain Reconstruction Delhi",
      "Hearing Reconstruction Surgery Delhi",
      "Middle Ear Surgery Delhi",
      "Middle Ear Bone Surgery Delhi",
      "Conductive Hearing Loss Treatment Delhi",
      "Ear Bone Repair Surgery Delhi",
      "Ossicle Reconstruction Delhi",
      "Ossicular Chain Repair Delhi",
      "Hearing Loss Surgery Delhi",
      "Ear Surgery Specialist Delhi",
      "ENT Surgeon in Delhi",
      "ENT Specialist South Delhi",
      "Ossiculoplasty Specialist India",
      "Middle Ear Surgeon Delhi",
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
        "Best Ossiculoplasty Surgeon in Delhi | Hearing Reconstruction Surgery",
      description:
        "Ossiculoplasty and middle-ear reconstruction for suitable patients with conductive hearing loss, damaged ossicles and chronic ear disease.",
      url,
      siteName: "Dr. Dhirendra Singh Kushwah",
      type: "article",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Best Ossiculoplasty Surgeon in Delhi | Dr. Dhirendra Singh Kushwah",
      description:
        "Expert evaluation and surgical treatment for ossicular damage and conductive hearing loss in Delhi.",
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
    "https://www.drdhirendrasinghkushwah.com/specialities/ossiculoplasty-surgery";

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name:
          "Best Ossiculoplasty Surgeon in Delhi | Hearing Reconstruction Surgery - Dr. Dhirendra Singh Kushwah",
        description:
          "Patient information about ossiculoplasty, ossicular chain reconstruction, conductive hearing loss, diagnosis, treatment, recovery and ENT consultation.",
        about: {
          "@id": `${pageUrl}#ossiculoplasty`,
        },
      },

      {
        "@type": "SurgicalProcedure",
        "@id": `${pageUrl}#ossiculoplasty`,
        name: "Ossiculoplasty",
        alternateName: [
          "Ossicular Chain Reconstruction",
          "Middle Ear Hearing Reconstruction",
          "Ossicle Reconstruction Surgery",
        ],
        description:
          "Ossiculoplasty is a middle-ear reconstructive procedure used to repair or reconstruct damaged or disrupted ossicles when clinically appropriate.",
        bodyLocation: "Middle ear ossicles",
        procedureType: "Surgical",

        indication: [
          "Ossicular chain damage",
          "Conductive hearing loss",
          "Chronic middle-ear disease",
          "Ossicular disruption following trauma",
          "Middle-ear damage associated with chronic ear disease",
          "Hearing loss following previous ear surgery in selected cases",
        ],

        benefit: [
          "Reconstruction of the middle-ear sound transmission mechanism",
          "Potential improvement in conductive hearing loss",
          "Restoration of continuity between middle-ear structures",
          "Improved hearing in appropriately selected patients",
        ],

        riskFactor: [
          "Infection",
          "Bleeding",
          "Persistent hearing loss",
          "Change in hearing",
          "Prosthesis displacement",
          "Need for further treatment in selected cases",
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
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is ossiculoplasty surgery?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Ossiculoplasty is a middle-ear reconstructive surgery used to repair or reconstruct damaged or disrupted ear bones called ossicles. It may be considered when ossicular damage contributes to conductive hearing loss.",
            },
          },

          {
            "@type": "Question",
            name: "What are the symptoms of ossicular damage?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The main symptom is conductive hearing loss, which may feel like muffled or reduced hearing. Some patients may also have a history of chronic ear infection, ear discharge, previous ear surgery or ear trauma.",
            },
          },

          {
            "@type": "Question",
            name: "Who may need ossiculoplasty?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Ossiculoplasty may be considered for selected patients with damaged or disrupted middle-ear ossicles and conductive hearing loss. The decision depends on the condition of the middle ear, eardrum, ossicles and hearing mechanism.",
            },
          },

          {
            "@type": "Question",
            name: "What causes damage to the ear bones?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Ossicular damage can occur because of chronic middle-ear disease, cholesteatoma, trauma, previous ear surgery or other conditions affecting the middle ear.",
            },
          },

          {
            "@type": "Question",
            name: "Can ossiculoplasty improve hearing?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Ossiculoplasty may improve hearing in appropriately selected patients by reconstructing the middle-ear sound transmission pathway. The hearing outcome varies according to the condition of the middle and inner ear.",
            },
          },

          {
            "@type": "Question",
            name: "How is ossicular damage diagnosed?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Diagnosis may include an ENT examination, microscopic ear examination and hearing tests such as pure tone audiometry and tympanometry. Additional investigations may be recommended when clinically indicated.",
            },
          },

          {
            "@type": "Question",
            name: "How long does recovery after ossiculoplasty take?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Initial healing takes several weeks, while hearing improvement may occur gradually as the middle ear heals. Recovery varies depending on the surgical technique and individual ear condition.",
            },
          },

          {
            "@type": "Question",
            name: "When should I see an ENT doctor for hearing loss?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Consult an ENT doctor for persistent or worsening hearing loss, recurrent ear discharge, repeated ear infections, ear trauma, sudden hearing changes or hearing loss that affects communication and daily life.",
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
            { label: "Ossiculoplasty Surgery", href: "/specialities/ossiculoplasty-surgery" },
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
                <span>Middle-Ear Reconstruction & Hearing Restoration</span>
                <span>•</span>
                <span>Delhi, India</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-tight">
                Best Ossiculoplasty Surgeon in Delhi | Hearing Reconstruction Surgery – Dr. Dhirendra Singh Kushwah
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
                  <CheckCircle2 className="w-4 h-4 text-teal-600" /> Advanced TORP & PORP Prostheses
                </span>
              </div>

              <p className="text-slate-600 leading-relaxed text-base pt-1">
                Dr. Dhirendra Singh Kushwah is an experienced ENT surgeon in
                Delhi providing evaluation and surgical management of middle-ear
                conditions, ossicular damage and conductive hearing loss.
                Ossiculoplasty is a reconstructive ear surgery designed to repair
                or reconstruct damaged or disrupted middle-ear bones when
                appropriate.
              </p>

              <p className="text-slate-600 leading-relaxed text-base">
                If you are searching for an{" "}
                <strong>Ossiculoplasty Surgeon in Delhi</strong>,{" "}
                <strong>middle-ear surgeon in Delhi</strong>, or{" "}
                <strong>hearing reconstruction specialist</strong>, an ENT
                evaluation can determine whether ossiculoplasty or another
                hearing treatment is suitable for your condition.
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

        <MedicalReviewBadge procedureName="Ossiculoplasty (Hearing Bone Reconstruction)" />


        {/* FEATURED SNIPPET */}

        <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border">
          <h2 className="text-2xl font-bold mb-4">
            What Is Ossiculoplasty?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            <strong>
              Ossiculoplasty is surgery to repair or reconstruct damaged
              middle-ear bones.
            </strong>{" "}
            The procedure is used in selected patients when damage or
            disruption of the ossicles contributes to conductive hearing
            loss. The aim is to restore the connection that transmits sound
            vibrations through the middle ear.
          </p>
        </section>


        {/* WHAT ARE OSSICLES */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            What Are the Ossicles in the Ear?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            The middle ear contains three tiny bones called the ossicles.
            They are known as the malleus, incus and stapes. These small
            bones work together to transmit sound vibrations from the eardrum
            toward the inner ear.
          </p>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>
              <strong>Malleus:</strong> connected to the eardrum
            </li>
            <li>
              <strong>Incus:</strong> connects the malleus and stapes
            </li>
            <li>
              <strong>Stapes:</strong> transmits vibrations toward the inner
              ear
            </li>
          </ul>

          <p className="text-slate-600 leading-relaxed">
            Damage or interruption of this chain can reduce the efficient
            transmission of sound and may result in conductive hearing loss.
          </p>
        </section>


        {/* SYMPTOMS */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Symptoms of Ossicular Chain Damage
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Ossicular damage does not always cause pain. The most common
            problem is reduced sound transmission through the middle ear,
            resulting in conductive hearing loss.
          </p>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Muffled or reduced hearing</li>
            <li>Difficulty understanding conversations</li>
            <li>Feeling that sounds are unusually faint</li>
            <li>One-sided hearing loss</li>
            <li>Hearing loss following ear trauma</li>
            <li>Hearing loss after chronic ear infection</li>
            <li>Persistent ear problems after previous ear surgery</li>
            <li>Ear discharge when associated with chronic middle-ear disease</li>
            <li>Difficulty hearing in noisy environments</li>
          </ul>

          <p className="text-slate-600 leading-relaxed">
            Because similar symptoms can occur with other ear conditions,
            hearing loss should be evaluated by an ENT specialist rather than
            assuming that the ossicles are damaged.
          </p>
        </section>


        {/* CAUSES */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            What Causes Ossicular Damage?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            The tiny bones of the middle ear can become damaged, displaced or
            disconnected due to several ear conditions.
          </p>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Chronic middle-ear infection</li>
            <li>Cholesteatoma and chronic ear disease</li>
            <li>Trauma to the ear or head</li>
            <li>Previous middle-ear surgery</li>
            <li>Long-standing eardrum problems</li>
            <li>Damage associated with chronic ear inflammation</li>
            <li>Other structural abnormalities of the middle ear</li>
          </ul>
        </section>


        {/* CONDUCTIVE HEARING LOSS */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Ossiculoplasty and Conductive Hearing Loss
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Conductive hearing loss occurs when sound is not efficiently
            transmitted through the outer or middle ear. Problems involving
            the eardrum or ossicles can interfere with the normal movement of
            sound vibrations.
          </p>

          <p className="text-slate-600 leading-relaxed">
            When hearing loss is caused by ossicular disruption, reconstructive
            surgery may be considered after a detailed examination and
            hearing assessment.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Ossiculoplasty is therefore different from procedures designed
            primarily for sensorineural hearing loss, such as cochlear
            implantation.
          </p>
        </section>


        {/* WHO NEEDS */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Who May Need Ossiculoplasty Surgery?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Ossiculoplasty is considered only when the clinical and hearing
            evaluation indicates that reconstruction of the middle-ear sound
            transmission mechanism may be beneficial.
          </p>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Patients with ossicular chain disruption</li>
            <li>Selected patients with conductive hearing loss</li>
            <li>Patients with middle-ear damage caused by chronic ear disease</li>
            <li>Selected patients following ear trauma</li>
            <li>Patients requiring middle-ear reconstruction during ear surgery</li>
            <li>Selected patients with hearing loss after previous ear surgery</li>
          </ul>
        </section>


        {/* DIAGNOSIS */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            How Is Ossicular Damage Diagnosed?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Diagnosis begins with a detailed history and examination of the
            ear. The ENT surgeon assesses the eardrum, middle ear and hearing
            function before deciding whether reconstruction may be useful.
          </p>

          <h3 className="text-xl font-semibold">
            Tests May Include
          </h3>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Detailed ENT examination</li>
            <li>Microscopic ear examination</li>
            <li>Pure tone audiometry</li>
            <li>Speech audiometry when appropriate</li>
            <li>Tympanometry</li>
            <li>Additional imaging when clinically indicated</li>
          </ul>

          <p className="text-slate-600 leading-relaxed">
            The exact tests depend on the patient's symptoms, previous ear
            history and suspected middle-ear disease.
          </p>
        </section>


        {/* TREATMENT */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Ossiculoplasty Treatment Options
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Treatment depends on the underlying cause of hearing loss.
            Ossiculoplasty is only one of several possible management
            options. An ENT specialist may recommend observation, treatment
            of active ear disease, hearing rehabilitation or reconstructive
            surgery depending on the individual case.
          </p>

          <h3 className="text-xl font-semibold">
            Treatment May Include
          </h3>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Treatment of active middle-ear infection</li>
            <li>Management of chronic ear disease</li>
            <li>Tympanoplasty when the eardrum requires repair</li>
            <li>Ossicular chain reconstruction</li>
            <li>Hearing aids when appropriate</li>
            <li>Other hearing restoration options depending on the cause</li>
          </ul>
        </section>


        {/* PROCEDURE */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            How Is Ossiculoplasty Surgery Performed?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Ossiculoplasty is performed to reconstruct the sound-conducting
            mechanism of the middle ear. Depending on the condition, the
            surgeon may repair or reconstruct the connection between the
            remaining ossicles, eardrum and inner-ear interface using an
            appropriate reconstructive technique or prosthetic material.
          </p>

          <p className="text-slate-600 leading-relaxed">
            The surgical approach depends on the anatomy of the ear, the
            condition of the ossicles, previous surgery, the status of the
            eardrum and the underlying disease.
          </p>

          <h3 className="text-xl font-semibold">
            Main Goals of Ossiculoplasty
          </h3>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Reconstruct the middle-ear sound pathway</li>
            <li>Restore continuity of the ossicular chain where possible</li>
            <li>Improve conductive hearing when possible</li>
            <li>Treat associated middle-ear disease</li>
            <li>Improve functional hearing in appropriately selected patients</li>
          </ul>
        </section>


        {/* BENEFITS */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Benefits of Ossiculoplasty
          </h2>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Reconstruction of damaged middle-ear structures</li>
            <li>Potential improvement in conductive hearing loss</li>
            <li>Restoration of the sound transmission mechanism</li>
            <li>Improved hearing in appropriately selected patients</li>
            <li>May be combined with other middle-ear procedures when required</li>
          </ul>

          <p className="text-slate-600 leading-relaxed">
            Hearing improvement varies between patients. The final outcome
            depends on the condition of the middle ear, inner ear, eardrum,
            ossicles and the underlying cause of hearing loss.
          </p>
        </section>


        {/* RECOVERY */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Ossiculoplasty Recovery Time
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Initial healing generally takes several weeks. Hearing may not
            improve immediately because the reconstructed middle ear needs
            time to heal and stabilise.
          </p>

          <h3 className="text-xl font-semibold">
            During Recovery
          </h3>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Attend all scheduled follow-up appointments</li>
            <li>Use prescribed medicines as directed</li>
            <li>Keep the operated ear protected as advised</li>
            <li>Do not put anything into the ear unless instructed</li>
            <li>Follow activity and water precautions provided by your surgeon</li>
            <li>Complete recommended hearing assessments</li>
          </ul>

          <p className="text-slate-600 leading-relaxed">
            Hearing assessment after healing helps determine the functional
            result of the reconstruction.
          </p>
        </section>


        {/* RISKS */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Possible Risks and Limitations of Ossiculoplasty
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Like other ear surgeries, ossiculoplasty has potential risks.
            The specific risks depend on the underlying disease, anatomy and
            surgical technique.
          </p>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Temporary pain or discomfort</li>
            <li>Bleeding</li>
            <li>Infection</li>
            <li>Persistent hearing loss</li>
            <li>Incomplete hearing improvement</li>
            <li>Movement or displacement of a reconstruction or prosthesis</li>
            <li>Need for additional treatment or surgery in selected cases</li>
          </ul>
        </section>


        {/* WHEN TO SEE ENT */}

        <section className="bg-red-50 rounded-2xl p-6 md:p-8 border border-red-100 space-y-5">
          <h2 className="text-2xl font-bold">
            When Should You See an ENT Doctor for Hearing Loss?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Persistent hearing problems should not be ignored, particularly
            when they affect one ear or occur after chronic ear disease or
            trauma.
          </p>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Persistent or worsening hearing loss</li>
            <li>Hearing loss in only one ear</li>
            <li>Hearing loss following an ear injury</li>
            <li>Repeated ear infections</li>
            <li>Chronic ear discharge</li>
            <li>Known damage to the eardrum or middle ear</li>
            <li>Hearing loss following previous ear surgery</li>
            <li>Sudden hearing changes</li>
            <li>Difficulty understanding normal conversations</li>
            <li>Hearing difficulty that affects work or daily communication</li>
          </ul>

          <p className="text-slate-600 font-medium leading-relaxed">
            Early ENT evaluation can help determine whether hearing loss is
            related to the outer ear, eardrum, middle-ear bones or inner ear
            and guide the appropriate treatment.
          </p>
        </section>


        {/* DIFFERENCE */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Ossiculoplasty vs Tympanoplasty
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Tympanoplasty primarily focuses on repairing a damaged or
            perforated eardrum, while ossiculoplasty focuses on repairing or
            reconstructing the tiny bones responsible for sound transmission
            through the middle ear.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr>
                  <th className="border p-3 text-left">
                    Procedure
                  </th>
                  <th className="border p-3 text-left">
                    Main Target
                  </th>
                  <th className="border p-3 text-left">
                    Main Purpose
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">
                    Tympanoplasty
                  </td>
                  <td className="border p-3">
                    Eardrum
                  </td>
                  <td className="border p-3">
                    Repair eardrum perforation
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">
                    Ossiculoplasty
                  </td>
                  <td className="border p-3">
                    Middle-ear ossicles
                  </td>
                  <td className="border p-3">
                    Reconstruct sound transmission
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-slate-600 leading-relaxed">
            In some patients, both procedures may be performed as part of the
            same middle-ear operation when both the eardrum and ossicular
            chain require reconstruction.
          </p>
        </section>


        {/* WHY DR KUSHWAH */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Why Consult Dr. Dhirendra Singh Kushwah for Ossiculoplasty in Delhi?
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Dr. Dhirendra Singh Kushwah is an experienced ENT specialist and
            surgeon in Delhi with expertise across otology and other areas of
            Otorhinolaryngology. His clinical services include microscopic
            ear surgery, tympanoplasty, ossiculoplasty, mastoidectomy and
            other ear procedures. Your website's facilities page also
            specifically describes microscopic ear surgery for delicate
            structures such as the ossicles and eardrum.
          </p>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>25+ years of ENT clinical and surgical experience</li>
            <li>Specialised ear and middle-ear surgical care</li>
            <li>Microscopic ear surgery</li>
            <li>Evaluation of conductive hearing loss</li>
            <li>Management of chronic ear disease</li>
            <li>Individualised treatment planning</li>
            <li>Postoperative follow-up and hearing assessment</li>
          </ul>
        </section>


        {/* LOCAL SEO */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Ossiculoplasty Surgeon in Delhi NCR
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Patients searching for{" "}
            <strong>ossiculoplasty surgery in Delhi</strong>,{" "}
            <strong>middle-ear surgery in South Delhi</strong>,{" "}
            <strong>ossicular chain reconstruction in Delhi</strong>, or
            <strong> conductive hearing loss treatment in Delhi NCR</strong>
            can consult an experienced ENT specialist for detailed
            evaluation.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Dr. Dhirendra Singh Kushwah provides ENT services through locations including Jasola Vihar, CR Park and Arjun Nagar in Delhi. The current website lists the Jasola hospital at Plot No. 89, Pocket 1, Jasola Vihar and the Arjun Nagar clinic at 19-C, Arjun Nagar, Safdarjung Enclave. 
            </p>

          <p className="text-slate-600 leading-relaxed">
            Patients from areas including Jasola, Okhla, CR Park, Greater
            Kailash, Saket, Hauz Khas, Green Park, Malviya Nagar, Defence
            Colony, Safdarjung Enclave, Lajpat Nagar, Vasant Kunj and other
            parts of Delhi NCR may seek consultation depending on their
            location and clinical requirements.
          </p>
        </section>


        {/* KEYWORD CLUSTER */}

        <section className="space-y-5">
          <h2 className="text-2xl font-bold">
            Ossiculoplasty and Hearing Reconstruction Services
          </h2>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Ossiculoplasty Surgeon in Delhi",
              "Best Ossiculoplasty Doctor in Delhi",
              "Ossiculoplasty Surgery Delhi",
              "Ossicular Chain Reconstruction Delhi",
              "Hearing Reconstruction Surgery Delhi",
              "Middle Ear Surgery Delhi",
              "Middle Ear Surgeon Delhi",
              "Middle Ear Bone Surgery Delhi",
              "Ear Bone Repair Surgery Delhi",
              "Ossicle Reconstruction Delhi",
              "Conductive Hearing Loss Treatment Delhi",
              "Conductive Hearing Loss Surgery Delhi",
              "Ossicular Chain Repair Delhi",
              "Hearing Loss Surgery Delhi",
              "Ear Surgery Specialist Delhi",
              "ENT Surgeon South Delhi",
              "ENT Specialist Safdarjung Enclave",
              "Ossiculoplasty Specialist India",
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


        {/* FAQ */}

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">
            Frequently Asked Questions About Ossiculoplasty
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-lg font-semibold">
                What is ossiculoplasty surgery?
              </h3>

              <p className="text-slate-600 mt-2 leading-relaxed">
                Ossiculoplasty is a reconstructive middle-ear surgery used
                to repair or reconstruct damaged or disrupted ossicles. It
                may be performed to improve sound transmission in selected
                patients with conductive hearing loss.
              </p>
            </div>


            <div>
              <h3 className="text-lg font-semibold">
                What are the three ossicles?
              </h3>

              <p className="text-slate-600 mt-2 leading-relaxed">
                The three middle-ear bones are the malleus, incus and
                stapes. Together they transmit sound vibrations from the
                eardrum toward the inner ear.
              </p>
            </div>


            <div>
              <h3 className="text-lg font-semibold">
                Does ossiculoplasty restore hearing?
              </h3>

              <p className="text-slate-600 mt-2 leading-relaxed">
                Ossiculoplasty may improve hearing in appropriately selected
                patients. The amount of improvement varies depending on the
                condition of the middle and inner ear and the underlying cause
                of hearing loss.
              </p>
            </div>


            <div>
              <h3 className="text-lg font-semibold">
                Is ossiculoplasty the same as tympanoplasty?
              </h3>

              <p className="text-slate-600 mt-2 leading-relaxed">
                No. Tympanoplasty primarily repairs a damaged or perforated
                eardrum, while ossiculoplasty reconstructs the middle-ear
                ossicles. Both procedures may sometimes be performed during
                the same ear operation.
              </p>
            </div>


            <div>
              <h3 className="text-lg font-semibold">
                How is ossicular damage diagnosed?
              </h3>

              <p className="text-slate-600 mt-2 leading-relaxed">
                ENT examination, microscopic ear examination and hearing
                tests such as pure tone audiometry and tympanometry may be
                used. Additional investigations may be recommended when
                clinically necessary.
              </p>
            </div>


            <div>
              <h3 className="text-lg font-semibold">
                How long does hearing improvement take after ossiculoplasty?
              </h3>

              <p className="text-slate-600 mt-2 leading-relaxed">
                Hearing improvement may occur gradually after surgery as the
                middle ear heals. The timing varies according to the surgical
                procedure and individual recovery.
              </p>
            </div>


            <div>
              <h3 className="text-lg font-semibold">
                What is the cost of ossiculoplasty in Delhi?
              </h3>

              <p className="text-slate-600 mt-2 leading-relaxed">
                The cost varies according to the complexity of the ear
                condition, surgical technique, hospital or surgical facility,
                investigations, anaesthesia and follow-up requirements. A
                personalised estimate can be provided after clinical
                evaluation.
              </p>
            </div>


            <div>
              <h3 className="text-lg font-semibold">
                When should I see an ENT doctor for hearing loss?
              </h3>

              <p className="text-slate-600 mt-2 leading-relaxed">
                You should consult an ENT specialist for persistent,
                worsening or one-sided hearing loss, recurrent ear discharge,
                repeated ear infections, hearing loss after trauma or sudden
                changes in hearing.
              </p>
            </div>

          </div>
        </section>


        {/* CTA */}

        <section className="bg-teal-600 rounded-3xl p-8 md:p-12 text-center text-white">

          <h2 className="text-2xl md:text-3xl font-bold">
            Consult an Ossiculoplasty Surgeon in Delhi
          </h2>

          <p className="mt-4 leading-relaxed max-w-3xl mx-auto">
            Persistent hearing loss may have several possible causes.
            A detailed ENT and hearing evaluation can help determine whether
            the problem involves the eardrum, middle-ear bones or inner ear.
          </p>

          <p className="mt-5 font-semibold">
            Consult Dr. Dhirendra Singh Kushwah for evaluation and
            personalised treatment planning for middle-ear disease,
            conductive hearing loss and ossicular problems.
          </p>

        </section>

      </main>
    </>
  );
}