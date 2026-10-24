import ContactForm from "@/components/forms/ContactForm";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Best ENT Surgeon in Dhampur, UP | ENT Specialist & Doctor",
    description:
      "Consult Dr. Dhirendra Singh Kushwah, experienced ENT specialist and surgeon near RSM Tiraha, Muradabad Road, Dhampur. Expert care for sinus, ear, hearing, nose, throat and vertigo conditions.",
    keywords: [
      "best ENT surgeon in Dhampur",
      "best ENT specialist in Dhampur",
      "best ENT doctor in Dhampur",
      "ENT specialist in Dhampur",
      "ENT doctor in Dhampur",
      "ENT surgeon in Dhampur",
      "ENT clinic in Dhampur",
      "ENT hospital in Dhampur",
      "ENT specialist near me in Dhampur",
      "ENT doctor near me in Dhampur",
      "ENT specialist near RSM Tiraha Dhampur",
      "ENT doctor near RSM Tiraha Dhampur",
      "ENT surgeon near RSM Tiraha",
      "ENT specialist on Muradabad Road Dhampur",
      "ENT doctor on Muradabad Road Dhampur",
      "ENT clinic near Pari Farm House Dhampur",
      "ENT specialist near Pari Farm House",
      "ENT doctor near Pari Farm House Dhampur",
      "sinus specialist in Dhampur",
      "best sinus doctor in Dhampur",
      "sinus surgeon in Dhampur",
      "sinus surgery in Dhampur",
      "endoscopic sinus surgery in Dhampur",
      "ear specialist in Dhampur",
      "hearing loss specialist in Dhampur",
      "hearing doctor in Dhampur",
      "vertigo specialist in Dhampur",
      "throat specialist in Dhampur",
      "voice disorder specialist in Dhampur",
      "pediatric ENT specialist in Dhampur",
      "sleep apnea specialist in Dhampur",
    ],
    authors: [
      {
        name: "Dr. Dhirendra Singh Kushwah",
      },
    ],
    alternates: {
      canonical:
        "https://www.drdhirendrasinghkushwah.in/location/dhampur",
    },
    openGraph: {
      title:
        "Best ENT Surgeon in Dhampur, UP | Dr. Dhirendra Singh Kushwah",
      description:
        "Expert ENT consultation and treatment for ear, nose, sinus, hearing, throat, voice and balance conditions in Dhampur, Uttar Pradesh.",
      url: "https://www.drdhirendrasinghkushwah.in/location/dhampur",
      type: "website",
      locale: "en_IN",
      siteName: "Dr. Dhirendra Singh Kushwah",
    },
  };
}

const faqs = [
  {
    question: "Who is the best ENT surgeon in Dhampur?",
    answer:
      "Dr. Dhirendra Singh Kushwah is a senior ENT specialist and surgeon with more than 25 years of clinical experience. He specializes in comprehensive ear, nose and throat care, including advanced ENT surgery, cochlear implants, endoscopic sinus surgery, head and neck surgery and sleep apnea surgery.",
  },
  {
    question: "Where is the ENT clinic in Dhampur?",
    answer:
      "The Dhampur clinic is located near RSM Tiraha, in front of Pari Farm House, on Muradabad Road, Dhampur, Uttar Pradesh – 246761.",
  },
  {
    question: "What ENT problems can be treated in Dhampur?",
    answer:
      "Patients can seek specialist evaluation for ear infections, hearing loss, sinusitis, nasal blockage, allergies, vertigo, tonsil problems, throat disorders, voice problems and other ear, nose and throat conditions.",
  },
  {
    question: "Is sinus treatment available in Dhampur?",
    answer:
      "Yes. Patients with sinusitis, recurrent sinus problems, nasal blockage and related nasal conditions can receive specialist ENT evaluation and appropriate medical or surgical treatment.",
  },
  {
    question: "Can I consult an ENT specialist for hearing loss in Dhampur?",
    answer:
      "Yes. Hearing loss should be properly evaluated to identify its underlying cause. An ENT specialist can recommend appropriate examination, hearing assessment and treatment based on the diagnosis.",
  },
  {
    question: "Does Dr. Dhirendra Singh Kushwah perform ENT surgery?",
    answer:
      "Dr. Dhirendra Singh Kushwah has specialized experience in advanced ENT procedures including cochlear implants, endoscopic sinus surgery, head and neck surgery and sleep apnea surgery.",
  },
  {
    question: "How can I book an ENT appointment in Dhampur?",
    answer:
      "You can contact the clinic at +91-9311449825 to enquire about the doctor's Dhampur availability and schedule an appointment.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.drdhirendrasinghkushwah.in/#website",
      url: "https://www.drdhirendrasinghkushwah.in/",
      name: "Dr. Dhirendra Singh Kushwah",
      inLanguage: "en-IN",
    },

    {
      "@type": "Physician",
      "@id":
        "https://www.drdhirendrasinghkushwah.in/#dr-dhirendra-singh-kushwah",
      name: "Dr. Dhirendra Singh Kushwah",
      url: "https://www.drdhirendrasinghkushwah.in/",
      telephone: "+91-9311449825",
      email: "drdhirendrasingent@gmail.com",
      medicalSpecialty: "Otolaryngology",
      description:
        "Senior ENT Specialist and Skull Base Surgeon with more than 25 years of clinical experience.",
      knowsAbout: [
        "Otolaryngology",
        "ENT",
        "Cochlear Implants",
        "Endoscopic Sinus Surgery",
        "Head and Neck Surgery",
        "Sleep Apnea Surgery",
        "Hearing Loss",
        "Vertigo",
        "Sinusitis",
      ],
    },

    {
      "@type": "MedicalClinic",
      "@id":
        "https://www.drdhirendrasinghkushwah.in/location/dhampur#clinic",
      name: "Dr. Dhirendra Singh Kushwah ENT Clinic Dhampur",
      url: "https://www.drdhirendrasinghkushwah.in/location/dhampur",
      telephone: "+91-9311449825",
      medicalSpecialty: "Otolaryngology",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Near RSM Tiraha, Front of Pari Farm House, Muradabad Road",
        addressLocality: "Dhampur",
        addressRegion: "Uttar Pradesh",
        postalCode: "246761",
        addressCountry: "IN",
      },
      areaServed: [
        "Dhampur",
        "RSM Tiraha",
        "Muradabad Road",
        "Seohara",
        "Nagina",
        "Afzalgarh",
        "Bijnor",
        "Moradabad",
      ],
      physician: {
        "@id":
          "https://www.drdhirendrasinghkushwah.in/#dr-dhirendra-singh-kushwah",
      },
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.drdhirendrasinghkushwah.in/location/dhampur#faq",
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
      "@id":
        "https://www.drdhirendrasinghkushwah.in/location/dhampur#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.drdhirendrasinghkushwah.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: "https://www.drdhirendrasinghkushwah.in/location",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Dhampur",
          item: "https://www.drdhirendrasinghkushwah.in/location/dhampur",
        },
      ],
    },
  ],
};

function DhampurAddress() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden min-h-[450px]">
            <iframe
              title="ENT Clinic Dhampur Location"
              src="https://maps.google.com/maps?q=RSM+Tiraha+Pari+Farm+House+Muradabad+Road+Dhampur+Uttar+Pradesh+246761&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "450px",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-10 flex flex-col justify-center">

            <span className="text-teal-300 font-semibold uppercase tracking-widest text-sm">
              Dhampur ENT Clinic
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              ENT Specialist in Dhampur
            </h2>

            <div className="space-y-6 text-slate-300">

              <div>
                <h3 className="font-semibold text-white mb-1">
                  Address
                </h3>

                <p>
                  Near RSM Tiraha,
                  <br />
                  Front of Pari Farm House,
                  <br />
                  Muradabad Road,
                  <br />
                  Dhampur, Uttar Pradesh – 246761
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-1">
                  Doctor
                </h3>

                <p>
                  Dr. Dhirendra Singh Kushwah
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-1">
                  Appointment
                </h3>

                <p>
                  Prior appointment recommended.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-1">
                  Phone
                </h3>

                <a
                  href="tel:+919311449825"
                  className="text-teal-300 hover:text-teal-200 font-semibold"
                >
                  +91-9311449825
                </a>
              </div>

            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Near+RSM+Tiraha,+Front+of+Pari+Farm+House,+Muradabad+Road,+Dhampur,+Uttar+Pradesh+246761"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold transition"
            >
              Get Directions
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default async function DhampurLocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* HERO */}
      <section className="bg-slate-950 text-white relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.18),transparent_35%)]" />

        <div className="relative max-w-7xl mx-auto px-5 py-20 lg:py-28">

          <div className="max-w-4xl">

            <span className="inline-flex items-center rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm font-semibold text-teal-300">
              Senior ENT & Skull Base Surgeon · 25+ Years Experience
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Best ENT Surgeon in Dhampur, Uttar Pradesh
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-8 text-slate-300 max-w-3xl">
              Consult Dr. Dhirendra Singh Kushwah for specialist evaluation
              and treatment of ear, nose, sinus, hearing, throat, voice and
              balance-related conditions in Dhampur.
            </p>

            <p className="mt-4 text-slate-400 max-w-3xl leading-7">
              The clinic is conveniently located near RSM Tiraha, in front of
              Pari Farm House, on Muradabad Road, Dhampur.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="tel:+919311449825"
                className="px-7 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 font-semibold transition"
              >
                Call +91-9311449825
              </a>

              <a
                href="https://wa.me/919311449825"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 font-semibold transition"
              >
                WhatsApp Appointment
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5">

          <div className="max-w-4xl mx-auto text-center">

            <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">
              Experienced ENT Specialist in Dhampur
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Comprehensive Ear, Nose & Throat Care in Dhampur
            </h2>

            <p className="mt-6 text-slate-600 text-lg leading-8">
              Dr. Dhirendra Singh Kushwah provides specialist ENT consultation
              for patients with ear, hearing, sinus, nose, throat, voice and
              balance-related concerns. Patients from Dhampur and surrounding
              areas can seek evaluation and treatment according to their
              individual clinical needs.
            </p>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-5">

          <div className="max-w-3xl mb-12">

            <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">
              ENT Services in Dhampur
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              ENT Conditions & Treatments
            </h2>

            <p className="mt-4 text-slate-600 leading-7">
              Specialist evaluation is available for a broad range of
              ear, nose and throat conditions.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Ear & Hearing",
                text:
                  "Evaluation and treatment for ear infections, hearing loss, ear discharge and other ear-related conditions.",
                href: "/conditions/ear-infections",
              },
              {
                title: "Hearing Loss",
                text:
                  "Assessment of hearing difficulties and guidance regarding appropriate treatment options.",
                href: "/conditions/hearing-loss",
              },
              {
                title: "Sinus & Nose",
                text:
                  "Specialist care for sinusitis, nasal blockage, allergies and chronic nasal problems.",
                href: "/conditions/sinusitis",
              },
              {
                title: "Vertigo & Balance",
                text:
                  "Evaluation of dizziness, vertigo and balance-related ENT conditions.",
                href: "/conditions/vertigo",
              },
              {
                title: "Throat & Voice",
                text:
                  "Treatment for throat problems, tonsil conditions, voice disorders and related concerns.",
                href: "/conditions/voice-disorders",
              },
              {
                title: "Pediatric ENT",
                text:
                  "ENT evaluation for children with ear, nose, throat and hearing problems.",
                href: "/specialities/pediatric-ent",
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl border border-slate-200 p-7 hover:-translate-y-1 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  {service.text}
                </p>

                <span className="inline-block mt-5 text-teal-600 font-semibold">
                  Learn More →
                </span>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ADVANCED TREATMENT */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">
                Advanced ENT Care
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
                Advanced ENT Treatment Near Dhampur
              </h2>

              <p className="mt-5 text-slate-600 leading-8">
                Treatment recommendations depend on the diagnosis,
                symptoms, examination findings and individual patient
                requirements. Medical treatment, investigations,
                minimally invasive procedures or surgery may be considered
                when clinically appropriate.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">

                {[
                  "Sinusitis Treatment",
                  "Endoscopic Sinus Surgery",
                  "Ear Surgery",
                  "Hearing Loss",
                  "Cochlear Implants",
                  "Vertigo",
                  "Tonsil Problems",
                  "Voice Disorders",
                  "Sleep Apnea",
                  "Pediatric ENT",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 lg:p-10 text-white">

              <h3 className="text-2xl font-bold">
                When should you consult an ENT specialist?
              </h3>

              <ul className="mt-6 space-y-4 text-slate-300">
                <li>✓ Persistent ear pain or ear discharge</li>
                <li>✓ Difficulty hearing</li>
                <li>✓ Recurrent sinus infections</li>
                <li>✓ Persistent nasal blockage</li>
                <li>✓ Recurrent dizziness or vertigo</li>
                <li>✓ Chronic throat discomfort</li>
                <li>✓ Persistent hoarseness</li>
                <li>✓ Loud snoring or suspected sleep apnea</li>
              </ul>

              <a
                href="tel:+919311449825"
                className="inline-flex mt-8 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 font-semibold transition"
              >
                Consult an ENT Specialist
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* WHY DOCTOR */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-5">

          <div className="max-w-3xl mb-12">

            <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">
              Why Consult Dr. Kushwah?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Experienced ENT Specialist for Comprehensive Care
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "25+ Years Experience",
                text:
                  "More than two decades of experience in ENT diagnosis, treatment and surgery.",
              },
              {
                title: "Advanced ENT Expertise",
                text:
                  "Specialized experience in cochlear implants, endoscopic sinus surgery, head and neck surgery and sleep apnea surgery.",
              },
              {
                title: "Patient-Centred Care",
                text:
                  "Treatment recommendations are based on clinical evaluation and individual patient needs.",
              },
              {
                title: "Comprehensive ENT Care",
                text:
                  "Evaluation and management of ear, hearing, nose, sinus, throat, voice and balance conditions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-slate-200 p-7"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5">

          <div className="max-w-4xl">

            <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">
              Local ENT Care
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              ENT Specialist Near RSM Tiraha & Muradabad Road, Dhampur
            </h2>

            <p className="mt-5 text-slate-600 leading-8">
              Patients searching for an ENT specialist near RSM Tiraha,
              an ENT doctor on Muradabad Road or an ENT clinic near Pari
              Farm House can contact the Dhampur clinic for appointment
              information.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              The clinic location is convenient for patients from Dhampur
              and nearby areas of Bijnor district and surrounding towns.
              Patients travelling from Seohara, Nagina, Afzalgarh and
              other nearby areas can enquire about specialist ENT
              consultation.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">

              {[
                "Dhampur",
                "RSM Tiraha",
                "Muradabad Road",
                "Pari Farm House",
                "Seohara",
                "Nagina",
                "Afzalgarh",
                "Bijnor",
                "Moradabad",
              ].map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-700 text-sm"
                >
                  {area}
                </span>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-slate-950">

        <div className="max-w-7xl mx-auto px-5">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            <div className="text-white">

              <span className="text-teal-300 font-semibold uppercase tracking-widest text-sm">
                Book an ENT Consultation
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Looking for an ENT Doctor in Dhampur?
              </h2>

              <p className="mt-5 text-slate-300 leading-8">
                If you have persistent ear, nose, sinus, hearing, throat,
                voice or balance problems, arrange an ENT consultation
                for proper evaluation and treatment planning.
              </p>

              <div className="mt-8 space-y-4 text-slate-300">

                <p>
                  <strong className="text-white">
                    Doctor:
                  </strong>{" "}
                  Dr. Dhirendra Singh Kushwah
                </p>

                <p>
                  <strong className="text-white">
                    Location:
                  </strong>{" "}
                  Near RSM Tiraha, Front of Pari Farm House,
                  Muradabad Road, Dhampur
                </p>

                <p>
                  <strong className="text-white">
                    Phone:
                  </strong>{" "}
                  <a
                    href="tel:+919311449825"
                    className="text-teal-300 hover:text-teal-200"
                  >
                    +91-9311449825
                  </a>
                </p>

              </div>

            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <DhampurAddress />

      {/* FAQ */}
      <section className="py-20 bg-white">

        <div className="max-w-4xl mx-auto px-5">

          <div className="text-center mb-12">

            <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">
              Frequently Asked Questions
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              ENT Specialist in Dhampur – FAQs
            </h2>

          </div>

          <div className="space-y-4">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden"
              >

                <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-slate-900 flex items-center justify-between">

                  <span>
                    {faq.question}
                  </span>

                  <span className="text-teal-600 text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>

                </summary>

                <div className="px-6 pb-6 text-slate-600 leading-7">
                  {faq.answer}
                </div>

              </details>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-teal-600 text-white">

        <div className="max-w-5xl mx-auto px-5 text-center">

          <h2 className="text-3xl md:text-5xl font-bold">
            Need an ENT Specialist in Dhampur?
          </h2>

          <p className="mt-5 text-lg text-teal-50 max-w-2xl mx-auto leading-8">
            Contact Dr. Dhirendra Singh Kushwah for specialist evaluation
            of ear, nose, sinus, hearing, throat, vertigo and voice-related
            conditions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <a
              href="tel:+919311449825"
              className="px-7 py-3.5 rounded-xl bg-white text-teal-700 font-bold hover:bg-slate-100 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919311449825"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl border border-white/40 hover:bg-white/10 font-bold transition"
            >
              WhatsApp
            </a>

          </div>
        </div>
      </section>
    </>
  );
}
