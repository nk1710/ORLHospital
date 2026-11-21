import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import SurgeryLeadDesk from "@/components/ui/SurgeryLeadDesk";
import {
  Activity,
  AlertCircle,
  Award,
  CheckCircle2,
  Clock,
  Ear,
  FileText,
  Headphones,
  MapPin,
  Phone,
  Stethoscope,
  UserRound,
} from "lucide-react";

export async function generateMetadata() {
  const url =
    "https://www.drdhirendrasinghkushwah.com/specialities/tonsillectomy-surgery";

  return {
    title:
      "Best Tonsillectomy Surgeon in Delhi | Coblation Plasma Specialist - Dr. (Prof.) Dhirendra Singh Kushwah",

    description:
      "Consult Dr. (Prof.) Dhirendra Singh Kushwah (25+ Yrs Exp) in Delhi for Coblation Plasma Tonsillectomy. Minimal pain, zero bleeding, rapid 48-hr recovery, 100% cashless mediclaim.",

    keywords: [
      "Tonsillectomy Surgeon in Delhi",
      "Best Tonsillectomy Surgeon in Delhi",
      "Tonsillectomy Surgery Delhi",
      "Tonsil Removal Surgery in Delhi",
      "Tonsil Surgery in Delhi",
      "Tonsil Specialist in Delhi",
      "Tonsil Doctor in Delhi",
      "Tonsil Removal Specialist Delhi",
      "Tonsillectomy Specialist Delhi",
      "Recurrent Tonsillitis Treatment Delhi",
      "Chronic Tonsillitis Treatment Delhi",
      "Enlarged Tonsils Treatment Delhi",
      "Tonsil Stones Treatment Delhi",
      "Tonsil Infection Treatment Delhi",
      "Throat Infection Treatment Delhi",
      "Child Tonsillectomy Delhi",
      "ENT Surgeon in Delhi",
      "ENT Specialist in South Delhi",
      "Best ENT Doctor Delhi",
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
        "Best Tonsillectomy Surgeon in Delhi | Tonsil Removal Specialist",
      description:
        "ENT evaluation and tonsillectomy surgery for recurrent tonsillitis, enlarged tonsils, tonsil stones and selected sleep-related breathing problems by Dr. Dhirendra Singh Kushwah.",
      url,
      siteName: "Dr. Dhirendra Singh Kushwah",
      type: "website",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title: "Best Tonsillectomy Surgeon in Delhi",
      description:
        "Tonsillectomy and tonsil removal evaluation for recurrent tonsillitis, enlarged tonsils and tonsil-related breathing or swallowing problems.",
    },

    robots: {
      index: true,
      follow: true,
    },

    category: "healthcare",
  };
}

const faqs = [
  {
    question: "What is tonsillectomy?",
    answer:
      "Tonsillectomy is a surgical procedure to remove the tonsils. It may be recommended for selected patients with recurrent or severe tonsillitis, chronically enlarged tonsils, repeated tonsil-related complications, or breathing and swallowing problems associated with enlarged tonsils.",
  },
  {
    question: "Who may need tonsil removal surgery?",
    answer:
      "Tonsillectomy may be considered for patients with recurrent or severe tonsillitis, chronically infected tonsils, significantly enlarged tonsils causing swallowing or breathing problems, selected sleep-related breathing problems, recurrent peritonsillar abscess, or other tonsil-related complications.",
  },
  {
    question: "What are the symptoms of enlarged or infected tonsils?",
    answer:
      "Symptoms may include recurrent sore throat, painful swallowing, fever during infections, red or swollen tonsils, white patches or pus, swollen neck glands, bad breath, tonsil stones, snoring, mouth breathing and sleep-related breathing difficulties.",
  },
  {
    question: "How long does tonsillectomy surgery take?",
    answer:
      "The surgical procedure is generally completed within a relatively short operative period, but the exact duration depends on the patient's age, anatomy, medical condition, surgical findings and hospital and anaesthesia protocols.",
  },
  {
    question: "How long does recovery take after tonsillectomy?",
    answer:
      "Recovery varies between patients. Throat pain, painful swallowing, tiredness and changes in eating or drinking can occur during the early recovery period. The ENT surgeon provides individualized instructions regarding hydration, diet, medicines and activity.",
  },
  {
    question: "Can tonsillectomy help with snoring?",
    answer:
      "Tonsillectomy may help selected patients whose snoring or sleep-related breathing problems are significantly related to enlarged tonsils. Because snoring can have multiple causes, an ENT assessment is important before deciding on surgery.",
  },
  {
    question: "Can tonsils grow back after tonsillectomy?",
    answer:
      "After complete removal of the tonsils, significant regrowth is uncommon. If only part of the tonsil tissue is removed during a particular surgical technique, some tissue remains and may potentially enlarge again.",
  },
  {
    question: "Is tonsillectomy painful?",
    answer:
      "Throat pain is common after tonsillectomy, particularly while swallowing. Pain varies between patients and changes during recovery. The treating surgeon provides appropriate pain-control, hydration and dietary instructions.",
  },
  {
    question: "What happens if recurrent tonsillitis is not treated?",
    answer:
      "Some patients may continue to experience repeated throat infections, difficulty swallowing, disturbed sleep, missed school or work and reduced quality of life. Certain infections can also develop complications, so recurrent or severe symptoms should be assessed by an ENT specialist.",
  },
  {
    question: "Which doctor performs tonsillectomy in Delhi?",
    answer:
      "Tonsillectomy is performed by an ENT specialist or otolaryngology surgeon. Dr. Dhirendra Singh Kushwah provides ENT evaluation and surgical care for tonsil-related conditions in Delhi.",
  },
];

export default async function DepartmentPage() {
  const url =
    "https://www.drdhirendrasinghkushwah.com/tonsillectomy-surgery";

  const physicianId =
    "https://www.drdhirendrasinghkushwah.com/#physician";

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#webpage`,
        url,
        name:
          "Best Tonsillectomy Surgeon in Delhi – Dr. Dhirendra Singh Kushwah",
        description:
          "Information about tonsillectomy, tonsil removal surgery, recurrent tonsillitis, enlarged tonsils, diagnosis, treatment, recovery and when to consult an ENT specialist in Delhi.",
        inLanguage: "en-IN",
        medicalSpecialty: "Otolaryngology",
        physician: {
          "@id": physicianId,
        },
        mainEntity: {
          "@id": `${url}#tonsillectomy`,
        },
      },

      {
        "@type": "MedicalProcedure",
        "@id": `${url}#tonsillectomy`,
        name: "Tonsillectomy",
        alternateName: "Tonsil Removal Surgery",
        description:
          "Tonsillectomy is a surgical procedure to remove the tonsils. It may be recommended for selected patients with recurrent or severe tonsillitis, enlarged tonsils, swallowing problems, sleep-related breathing problems or tonsil-related complications.",
        bodyLocation: "Tonsils",
        procedureType: "Surgical procedure",
        medicalSpecialty: "Otolaryngology",

        howPerformed:
          "Tonsillectomy involves surgical removal of the tonsils under appropriate anaesthesia. The exact surgical technique depends on the patient's condition, age, anatomy, clinical findings and surgical requirements.",

        preparation:
          "Preoperative evaluation may include medical history, ENT examination and additional investigations when clinically indicated. Patients receive instructions regarding food, medicines and preparation before surgery.",

        followup:
          "Postoperative care may include pain management, hydration, dietary advice, activity restrictions and ENT follow-up. Recovery varies between patients.",

        indication: [
          "Recurrent tonsillitis",
          "Severe or chronic tonsil infections",
          "Significantly enlarged tonsils",
          "Difficulty swallowing",
          "Selected sleep-related breathing problems",
          "Recurrent peritonsillar abscess",
          "Tonsil-related complications",
        ],

        benefit: [
          "May reduce recurrent tonsil infections",
          "May improve swallowing when enlarged tonsils are obstructive",
          "May help selected sleep-related breathing problems",
          "Removes chronically diseased tonsil tissue",
        ],

        riskFactor: [
          "Postoperative throat pain",
          "Bleeding",
          "Dehydration",
          "Infection",
          "Anaesthesia-related complications",
          "Painful swallowing during recovery",
        ],

        provider: {
          "@id": physicianId,
        },

        availableAtOrFrom: {
          "@type": "MedicalClinic",
          name: "ENT Clinic - Arjun Nagar",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "19-C, Arjun Nagar, Safdarjung Enclave",
            addressLocality: "New Delhi",
            postalCode: "110029",
            addressCountry: "IN",
          },
          telephone: "+91-9311449825",
        },
      },

      {
        "@type": "Physician",
        "@id": physicianId,
        name: "Dr. Dhirendra Singh Kushwah",
        jobTitle: "ENT Specialist Surgeon",
        medicalSpecialty: "Otolaryngology",
        url: "https://www.drdhirendrasinghkushwah.com/",
        telephone: "+91-9311449825",
        address: {
          "@type": "PostalAddress",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
          postalCode: "110025",
          addressCountry: "IN",
        },
      },

      {
        "@type": "VideoObject",
        "@id": `${url}#video`,
        name: "Tonsillectomy Surgery Explained",
        description:
          "Educational video about tonsil removal surgery, tonsil symptoms, treatment considerations and recovery.",
        thumbnailUrl:
          "https://img.youtube.com/vi/25I3NXdhQa8/hqdefault.jpg",
        embedUrl:
          "https://www.youtube.com/embed/25I3NXdhQa8",
        contentUrl:
          "https://www.youtube.com/watch?v=25I3NXdhQa8",
      },

      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.drdhirendrasinghkushwah.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tonsillectomy Surgery",
            item: url,
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

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.22),transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-300">
                <Stethoscope className="h-4 w-4" />
                ENT & Tonsil Surgery
              </div>

              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Best Tonsillectomy Surgeon in Delhi
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                ENT evaluation and surgical treatment for recurrent
                tonsillitis, enlarged tonsils, tonsil stones and selected
                sleep-related breathing problems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+919311449825"
                  className="inline-flex items-center rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book ENT Consultation
                </a>

                <a
                  href="#tonsillectomy-faq"
                  className="inline-flex items-center rounded-xl border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  View FAQs
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Award className="mb-2 h-6 w-6 text-teal-300" />
                  <p className="font-semibold">25+ Years</p>
                  <p className="text-sm text-slate-400">
                    ENT experience
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Stethoscope className="mb-2 h-6 w-6 text-teal-300" />
                  <p className="font-semibold">ENT Specialist</p>
                  <p className="text-sm text-slate-400">
                    Surgical evaluation
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <MapPin className="mb-2 h-6 w-6 text-teal-300" />
                  <p className="font-semibold">Delhi NCR</p>
                  <p className="text-sm text-slate-400">
                    South Delhi clinics
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur md:p-9">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/20">
                <Headphones className="h-7 w-7 text-teal-300" />
              </div>

              <h2 className="text-2xl font-bold">
                When might tonsil removal be considered?
              </h2>

              <ul className="mt-6 space-y-4 text-slate-300">
                {[
                  "Repeated or severe tonsillitis",
                  "Chronically enlarged or infected tonsils",
                  "Difficulty swallowing",
                  "Sleep-related breathing problems",
                  "Recurrent tonsil stones",
                  "Tonsil-related complications",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SNIPPET */}
      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <ClinicalBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Specialities & Surgeries", href: "/specialities" },
              { label: "Tonsillectomy Surgery", href: "/specialities/tonsillectomy-surgery" },
            ]}
          />

          <MedicalReviewBadge procedureName="Tonsillectomy (Tonsil Removal Surgery)" />

          <div className="rounded-3xl border border-teal-100 bg-teal-50 p-7 md:p-10">
            <div className="mb-4 flex items-center gap-3">
              <FileText className="h-6 w-6 text-teal-700" />

              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                What Is Tonsillectomy?
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-700">
              Tonsillectomy is a surgical procedure in which the tonsils are
              removed. It may be recommended for selected patients who have
              recurrent or severe tonsillitis, chronically enlarged tonsils,
              repeated tonsil-related complications, or breathing and
              swallowing problems associated with enlarged tonsils. The
              decision for surgery should be based on symptoms, examination
              findings, medical history and overall health.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="font-semibold uppercase tracking-wider text-teal-700">
                Tonsil Removal Surgery in Delhi
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                Evaluation and Treatment for Recurrent Tonsil Problems
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Tonsils are collections of lymphoid tissue located at the
                  back of the throat. They are part of the immune system, but
                  they can themselves become repeatedly infected or significantly
                  enlarged.
                </p>

                <p>
                  Recurrent tonsillitis can cause repeated sore throat, fever,
                  painful swallowing, swollen neck glands and time away from
                  school or work. Enlarged tonsils may also contribute to
                  snoring, mouth breathing and sleep-related breathing
                  difficulties.
                </p>

                <p>
                  Dr. Dhirendra Singh Kushwah provides ENT assessment for
                  patients with recurrent tonsil infections and other
                  tonsil-related conditions in Delhi. Tonsillectomy is
                  considered when the expected clinical benefits outweigh the
                  potential risks of surgery.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-7 text-white shadow-xl md:p-9">
              <h3 className="text-2xl font-bold">
                Common Reasons for Tonsillectomy
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "Recurrent tonsillitis",
                  "Chronic tonsil infection",
                  "Significant tonsil enlargement",
                  "Difficulty swallowing",
                  "Sleep-related breathing problems",
                  "Recurrent peritonsillar abscess",
                  "Tonsil stones in selected cases",
                  "Tonsil-related complications",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-white/10 pb-3 last:border-0"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-300" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-slate-50 px-4 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-wider text-teal-700">
              Patient Education
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Tonsillectomy Surgery Explained
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Learn about tonsil removal surgery, common indications and
              postoperative recovery.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl bg-black shadow-xl">
            <iframe
              className="h-[300px] w-full md:h-[500px]"
              src="https://www.youtube.com/embed/25I3NXdhQa8"
              title="Tonsillectomy Surgery Explained"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-teal-700">
              Symptoms
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Symptoms of Enlarged or Infected Tonsils
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Tonsil problems can cause both throat symptoms and sleep-related
              symptoms. Recurrent or persistent symptoms should be assessed by
              an ENT specialist.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Repeated sore throat",
                text: "Frequent episodes of throat pain or infection may indicate recurrent tonsillitis.",
              },
              {
                title: "Painful swallowing",
                text: "Inflamed or enlarged tonsils may make swallowing food or liquids uncomfortable.",
              },
              {
                title: "Fever during infections",
                text: "Tonsillar infections may be associated with fever and general illness.",
              },
              {
                title: "Swollen tonsils",
                text: "Tonsils may become enlarged, red or covered with inflammatory material.",
              },
              {
                title: "Tonsil stones",
                text: "Tonsil stones may cause throat irritation, foreign-body sensation or bad breath.",
              },
              {
                title: "Snoring or mouth breathing",
                text: "Large tonsils can contribute to snoring and obstructed breathing during sleep.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <CheckCircle2 className="mb-4 h-7 w-7 text-teal-700" />

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="bg-slate-50 px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-wider text-teal-700">
                Causes & Conditions
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                Why Do Tonsils Become a Problem?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Tonsil problems can occur because of repeated infections,
                chronic inflammation or significant enlargement. Not every
                tonsil infection requires surgery. An ENT examination helps
                determine whether medical treatment, observation or surgery is
                appropriate.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Recurrent tonsillitis",
                "Chronic tonsil inflammation",
                "Repeated throat infections",
                "Large or obstructive tonsils",
                "Tonsil stones",
                "Sleep-related breathing problems",
                "Peritonsillar abscess",
                "Difficulty swallowing",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-600" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNOSIS */}
      <section className="bg-slate-950 px-4 py-14 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-wider text-teal-300">
              Diagnosis
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              How Are Tonsil Problems Diagnosed?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Diagnosis starts with a detailed history and ENT examination.
              The specialist assesses the frequency and severity of infections,
              tonsil size, throat findings, swallowing problems and symptoms
              occurring during sleep.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Medical history",
                text: "Review of recurrent infections, medicines, previous treatment and complications.",
              },
              {
                title: "Throat examination",
                text: "Assessment of tonsils, throat, neck lymph nodes and surrounding structures.",
              },
              {
                title: "Sleep assessment",
                text: "Sleep and breathing symptoms may be assessed when enlarged tonsils are suspected to contribute to obstruction.",
              },
              {
                title: "Additional tests",
                text: "Further investigations may be advised when clinically necessary.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <Stethoscope className="mb-4 h-7 w-7 text-teal-300" />

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT */}
      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-wider text-teal-700">
              Treatment
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Tonsillectomy Treatment in Delhi
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Tonsillectomy involves surgical removal of the tonsils under
              appropriate anaesthesia. The specific surgical approach and
              postoperative plan depend on the patient's age, symptoms,
              anatomy, medical history and clinical findings.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Preoperative evaluation",
                text: "The ENT surgeon reviews symptoms, examination findings, medical history and investigations required before surgery.",
              },
              {
                number: "02",
                title: "Tonsil removal",
                text: "The tonsils are surgically removed using an appropriate technique under anaesthesia.",
              },
              {
                number: "03",
                title: "Postoperative care",
                text: "Pain control, hydration, diet, activity advice and follow-up are provided according to the patient's recovery.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="text-4xl font-black text-teal-100">
                  {item.number}
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SURGERY TIME & RECOVERY */}
      <section className="bg-teal-50 px-4 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[32px] border border-teal-100 bg-white p-7 shadow-lg md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-100">
                <Clock className="h-7 w-7 text-teal-700" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                  Tonsillectomy Surgery Time & Recovery
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  The operation is generally completed within a relatively
                  short surgical period, but the exact duration varies
                  according to the individual case and hospital protocols.
                  Recovery takes longer than the procedure itself.
                </p>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Throat pain, painful swallowing, tiredness, reduced food
                  intake and temporary changes in the throat can occur after
                  surgery. Recovery should be guided by the treating ENT
                  surgeon, particularly regarding hydration, diet, medicines
                  and activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-wider text-teal-700">
                Potential Benefits
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                Potential Benefits of Tonsillectomy
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                In appropriately selected patients, tonsillectomy can reduce
                problems related to recurrent tonsil disease. The expected
                benefit depends on the underlying condition and reason for
                surgery.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Reduction in recurrent tonsil infections",
                "Removal of chronically diseased tonsil tissue",
                "May improve swallowing when enlarged tonsils are obstructive",
                "May help selected patients with sleep-related breathing problems",
                "May reduce recurrent tonsil-related complications",
                "May improve quality of life in appropriately selected patients",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
                  <span className="leading-7 text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RISKS */}
      <section className="bg-slate-50 px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-teal-700">
              Risks & Limitations
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Possible Risks of Tonsillectomy
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Tonsillectomy is a surgical procedure and, like other surgeries,
              has potential risks. The individual risks should be discussed
              with the ENT surgeon before treatment.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Postoperative throat pain",
              "Painful swallowing",
              "Bleeding",
              "Dehydration",
              "Nausea or vomiting",
              "Infection",
              "Temporary voice or throat changes",
              "Anaesthesia-related complications",
              "Need for urgent medical assessment if significant bleeding occurs",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <AlertCircle className="mt-1 h-5 w-5 shrink-0 text-amber-600" />

                <span className="leading-7 text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNTREATED */}
      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-red-100 bg-red-50 p-7 md:p-10">
          <div className="flex items-start gap-4">
            <AlertCircle className="mt-1 h-7 w-7 shrink-0 text-red-600" />

            <div>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                What Can Happen If Recurrent Tonsil Problems Are Ignored?
              </h2>

              <div className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
                <p>
                  Not every episode of tonsillitis requires surgery. However,
                  recurrent or severe tonsil disease should not be repeatedly
                  ignored or self-treated without appropriate medical
                  assessment.
                </p>

                <p>
                  Persistent problems may result in repeated infections,
                  difficulty eating or swallowing, disturbed sleep, missed
                  school or work and reduced quality of life. Certain
                  infections can also develop complications.
                </p>

                <p>
                  If there are severe symptoms, rapidly increasing throat or
                  neck swelling, difficulty breathing, inability to swallow
                  fluids or significant bleeding, urgent medical attention is
                  required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN TO SEE ENT */}
      <section className="bg-slate-950 px-4 py-14 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="font-semibold uppercase tracking-wider text-teal-300">
                When to See an ENT
              </p>

              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                When Should You Visit a Tonsil Specialist?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                An ENT consultation is appropriate when throat infections are
                frequent, severe, persistent or affecting daily life.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Repeated tonsillitis",
                "Persistent or severe sore throat",
                "Difficulty swallowing",
                "Very large tonsils",
                "Snoring with enlarged tonsils",
                "Mouth breathing during sleep",
                "Recurrent tonsil stones",
                "History of peritonsillar abscess",
                "Persistent bad breath associated with tonsils",
                "Breathing difficulty",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-teal-300" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RED FLAGS */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl rounded-3xl border border-red-200 bg-red-50 p-7 md:p-9">
          <h2 className="text-2xl font-bold text-red-900">
            Seek Urgent Medical Care for Severe Symptoms
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Difficulty breathing",
              "Inability to swallow saliva or fluids",
              "Rapidly increasing throat or neck swelling",
              "Significant bleeding from the throat",
              "Severe dehydration",
              "Severe worsening pain with fever",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white p-4"
              >
                <AlertCircle className="h-5 w-5 text-red-600" />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-slate-50 px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Medical Treatment vs Tonsillectomy
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-slate-600">
            The appropriate treatment depends on the cause, frequency and
            severity of symptoms.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-slate-900 p-5 font-semibold text-white">
              <div>Factor</div>
              <div>Medical treatment</div>
              <div>Tonsillectomy</div>
            </div>

            {[
              [
                "Typical use",
                "Selected infections and symptoms",
                "Selected recurrent, severe or obstructive disease",
              ],
              ["Surgery", "No", "Yes"],
              [
                "Recovery",
                "Usually shorter",
                "Requires postoperative recovery",
              ],
              [
                "Main objective",
                "Treat or control the current condition",
                "Remove tonsil tissue contributing to the problem",
              ],
              [
                "Decision",
                "Based on clinical diagnosis",
                "Based on symptoms, findings and surgical suitability",
              ],
            ].map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-3 border-t border-slate-200 p-5 text-sm md:text-base"
              >
                <div className="font-semibold text-slate-900">
                  {row[0]}
                </div>

                <div className="pr-3 text-slate-600">{row[1]}</div>

                <div className="text-slate-600">{row[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DR KUSHWAH
      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[40px] bg-teal-700 p-8 text-white shadow-2xl md:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr]">
              <div>
                <p className="font-semibold uppercase tracking-wider text-teal-200">
                  ENT Specialist in Delhi
                </p>

                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Why Consult Dr. Dhirendra Singh Kushwah for Tonsil Problems?
                </h2>

                <p className="mt-5 text-lg leading-8 text-teal-50">
                  Dr. Dhirendra Singh Kushwah is an ENT specialist surgeon
                  providing evaluation and treatment for ear, nose and throat
                  conditions in Delhi. Tonsillectomy is considered after
                  reviewing the patient's symptoms, examination findings and
                  overall medical condition.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    "25+ years of ENT experience",
                    "ENT and otolaryngology surgical care",
                    "Evaluation of recurrent tonsillitis",
                    "Assessment of enlarged tonsils",
                    "Sleep-related breathing evaluation",
                    "Individualized treatment planning",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-white/10 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-teal-200" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white/10 p-7">
                <UserRound className="h-10 w-10 text-teal-200" />

                <h3 className="mt-5 text-2xl font-bold">
                  Book an ENT Consultation
                </h3>

                <p className="mt-4 leading-7 text-teal-50">
                  Discuss recurrent tonsillitis, enlarged tonsils, tonsil
                  stones, swallowing problems or sleep-related breathing
                  symptoms with an ENT specialist.
                </p>

                <a
                  href="tel:+919311449825"
                  className="mt-7 flex w-full items-center justify-center rounded-xl bg-white px-5 py-4 font-semibold text-teal-800 transition hover:bg-slate-100"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +91 93114 49825
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
{/* WHY DR KUSHWAH + BOOK APPOINTMENT */}
<section className="px-4 py-14 md:py-20">
  <div className="mx-auto max-w-6xl">
    <div className="rounded-[40px] bg-teal-700 p-8 text-white shadow-2xl md:p-14">

      {/* Doctor Information */}
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-semibold uppercase tracking-wider text-teal-200">
          ENT Specialist in Delhi
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Why Consult Dr. Dhirendra Singh Kushwah for Tonsil Problems?
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-teal-50">
          Dr. Dhirendra Singh Kushwah is an ENT specialist surgeon providing
          evaluation and treatment for ear, nose and throat conditions in
          Delhi. Tonsillectomy is considered after reviewing the patient's
          symptoms, examination findings and overall medical condition.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "25+ years of ENT experience",
            "ENT and otolaryngology surgical care",
            "Evaluation of recurrent tonsillitis",
            "Assessment of enlarged tonsils",
            "Sleep-related breathing evaluation",
            "Individualized treatment planning",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl bg-white/10 p-4 text-left"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-200" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* BOOK APPOINTMENT FORM - MAIN CONTENT */}
      <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-white p-6 text-slate-900 shadow-2xl md:p-10">

        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100">
            <Stethoscope className="h-7 w-7 text-teal-700" />
          </div>

          <h3 className="mt-5 text-2xl font-bold md:text-3xl">
            Book an ENT Appointment
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            Schedule a consultation for recurrent tonsillitis, enlarged
            tonsils, tonsil stones, swallowing problems, snoring or
            sleep-related breathing difficulties.
          </p>
        </div>

        <form
          action="/api/form-submit"
          method="POST"
          className="mt-8 grid gap-5 md:grid-cols-2"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Patient Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter patient name"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+91"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          {/* Preferred Date */}
          <div>
            <label
              htmlFor="appointmentDate"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Preferred Date
            </label>

            <input
              id="appointmentDate"
              name="appointmentDate"
              type="date"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Preferred Clinic
            </label>

            <select
              id="location"
              name="location"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            >
              <option value="">Select clinic</option>
              <option value="Jasola Vihar">
                Jasola Vihar
              </option>
              <option value="Arjun Nagar">
                Arjun Nagar / Safdarjung Enclave
              </option>
              <option value="CR Park">
                CR Park
              </option>
              <option value="Palwal">
                Palwal
              </option>
            </select>
          </div>

          {/* Concern */}
          <div>
            <label
              htmlFor="condition"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Reason for Consultation
            </label>

            <select
              id="condition"
              name="condition"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            >
              <option value="">Select concern</option>
              <option value="Recurrent Tonsillitis">
                Recurrent Tonsillitis
              </option>
              <option value="Enlarged Tonsils">
                Enlarged Tonsils
              </option>
              <option value="Tonsil Stones">
                Tonsil Stones
              </option>
              <option value="Difficulty Swallowing">
                Difficulty Swallowing
              </option>
              <option value="Snoring / Sleep Breathing">
                Snoring / Sleep-related Breathing
              </option>
              <option value="Other ENT Problem">
                Other ENT Problem
              </option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Briefly describe your symptoms or consultation requirement"
              className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          {/* Hidden source */}
          <input
            type="hidden"
            name="source"
            value="Tonsillectomy Surgery Page"
          />

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-xl bg-teal-700 px-6 py-4 font-semibold text-white transition hover:bg-teal-800"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Appointment
            </button>
          </div>
        </form>

        {/* Direct Call */}
        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-center sm:flex-row">
          <span className="text-sm text-slate-500">
            Prefer to call directly?
          </span>

          <a
            href="tel:+919311449825"
            className="inline-flex items-center font-semibold text-teal-700 hover:text-teal-800"
          >
            <Phone className="mr-1.5 h-4 w-4" />
            +91 93114 49825
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* LOCAL SEO */}
      <section className="bg-slate-50 px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-wider text-teal-700">
                Tonsillectomy Surgeon in Delhi
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                Tonsil Surgery Consultation in South Delhi
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Patients looking for tonsillectomy surgery, recurrent
                tonsillitis treatment or an ENT specialist for enlarged tonsils
                can consult Dr. Dhirendra Singh Kushwah in Delhi. Consultation
                locations include Jasola Vihar, Arjun Nagar/Safdarjung Enclave
                and CR Park.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Patients from South Delhi and nearby Delhi NCR areas can seek
                evaluation for recurrent throat infections, enlarged tonsils,
                tonsil stones, snoring and sleep-related breathing problems.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  area: "Jasola Vihar",
                  address:
                    "ORL International Group of Hospitals, Plot No. 89, Pocket 1, Jasola Vihar, New Delhi - 110025",
                },
                {
                  area: "Arjun Nagar",
                  address:
                    "ENT & Gynae Clinic, 19-C, Arjun Nagar, Safdarjung Enclave, New Delhi - 110029",
                },
                {
                  area: "CR Park",
                  address:
                    "J-1981, Near Market No. 1, Below ICICI Bank, Bipin Chandra Pal Marg, CR Park, New Delhi - 110019",
                },
              ].map((location) => (
                <div
                  key={location.area}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <MapPin className="mt-1 h-6 w-6 shrink-0 text-teal-700" />

                  <div>
                    <h3 className="font-bold text-slate-900">
                      {location.area}
                    </h3>

                    <p className="mt-1 leading-7 text-slate-600">
                      {location.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="tonsillectomy-faq"
        className="px-4 py-14 md:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-wider text-teal-700">
              Frequently Asked Questions
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Tonsillectomy FAQs
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  <span className="mr-3 text-teal-700">
                    {index + 1}.
                  </span>

                  {faq.question}
                </summary>

                <p className="mt-4 border-t border-slate-100 pt-4 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-slate-50 px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Related ENT Services
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="/conditions/ear-hearing"
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Ear className="h-7 w-7 text-teal-700" />

              <h3 className="mt-4 font-bold text-slate-900">
                Ear & Hearing Conditions
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Learn about common ear and hearing conditions.
              </p>
            </a>

            <a
              href="/specialities/tympanoplasty-surgery"
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Activity className="h-7 w-7 text-teal-700" />

              <h3 className="mt-4 font-bold text-slate-900">
                Tympanoplasty Surgery
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Surgical treatment for selected eardrum problems.
              </p>
            </a>

            <a
              href="/specialities/ossiculoplasty-surgery"
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Headphones className="h-7 w-7 text-teal-700" />

              <h3 className="mt-4 font-bold text-slate-900">
                Ossiculoplasty
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Evaluation and reconstruction of the middle-ear bones.
              </p>
            </a>

            <a
              href="/specialities/cochlear-hearing-implants"
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Award className="h-7 w-7 text-teal-700" />

              <h3 className="mt-4 font-bold text-slate-900">
                Cochlear Hearing Implants
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Information about cochlear implant evaluation and care.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* VIP Surgical Desk & 100% Cashless Mediclaim */}
      <div className="max-w-5xl mx-auto px-4">
        <SurgeryLeadDesk 
          procedureName="Coblation Plasma Tonsillectomy" 
          customMessage="Hello Dr. Kushwah, I want to check Coblation Plasma Tonsillectomy surgery package cost and 100% cashless mediclaim at ORL Hospital." 
        />
      </div>

      {/* FINAL CTA */}
      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[40px] bg-teal-600 p-8 text-center text-white shadow-2xl md:p-14">
          <Stethoscope className="mx-auto h-12 w-12 text-teal-100" />

          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Need an ENT Consultation for Tonsil Problems?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-teal-50">
            If you or your child has recurrent tonsillitis, enlarged tonsils,
            tonsil stones, painful swallowing, snoring or sleep-related
            breathing problems, an ENT assessment can help determine the most
            appropriate treatment.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
  <a
    href="tel:+919311449825"
    className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 font-semibold text-teal-700 transition hover:bg-slate-100">
    <Phone className="mr-2 h-5 w-5" />
    Call +91 93114 49825
  </a>

  <a href="/contact"  className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-transparent px-7 py-4 font-semibold text-white transition hover:bg-white/10">
    Contact Dr. Kushwah
  </a>
</div>
        </div>
      </section>
    </>
  );
}