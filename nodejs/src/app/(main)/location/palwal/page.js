import ContactForm from "@/components/forms/ContactForm";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Best ENT Surgeon in Palwal, Haryana | ENT Specialist & Doctor",
    description:
      "Consult Dr. Dhirendra Singh Kushwah, experienced ENT specialist and surgeon in Palwal, Haryana. Expert care for sinus, ear, hearing, nose, throat and voice conditions at Asha Tower, New Sohna Road.",
    keywords: [
      "best ENT surgeon in Palwal",
      "best ENT specialist in Palwal",
      "best ENT doctor in Palwal",
      "ENT specialist in Palwal",
      "ENT doctor in Palwal",
      "ENT surgeon in Palwal",
      "best ENT clinic in Palwal",
      "ENT hospital in Palwal",
      "ENT specialist near me in Palwal",
      "ENT doctor near me in Palwal",
      "ENT specialist in New Sohna Road Palwal",
      "ENT doctor in New Sohna Road Palwal",
      "ENT specialist near Ambedkar College Palwal",
      "ENT doctor near Ambedkar College Palwal",
      "ENT specialist near Asha Tower Palwal",
      "sinus specialist in Palwal",
      "sinus surgeon in Palwal",
      "sinus surgery in Palwal",
      "endoscopic sinus surgery in Palwal",
      "ear specialist in Palwal",
      "hearing loss specialist in Palwal",
      "hearing doctor in Palwal",
      "vertigo specialist in Palwal",
      "throat specialist in Palwal",
      "voice disorder specialist in Palwal",
      "pediatric ENT specialist in Palwal",
      "sleep apnea specialist in Palwal",
    ],
    authors: [
      {
        name: "Dr. Dhirendra Singh Kushwah",
      },
    ],
    alternates: {
      canonical: "https://www.drdhirendrasinghkushwah.in/location/palwal",
    },
    openGraph: {
      title: "Best ENT Surgeon in Palwal, Haryana | Dr. Dhirendra Singh Kushwah",
      description:
        "Expert ENT consultation and surgical care in Palwal for ear, nose, sinus, hearing, throat, voice, vertigo and sleep-related conditions.",
      url: "https://www.drdhirendrasinghkushwah.in/location/palwal",
      type: "website",
      locale: "en_IN",
      siteName: "Dr. Dhirendra Singh Kushwah",
    },
  };
}

const faqs = [
  {
    question: "Who is the best ENT surgeon in Palwal?",
    answer:
      "Dr. Dhirendra Singh Kushwah is a senior ENT specialist and surgeon with more than 25 years of clinical experience. He provides advanced ENT consultation and surgical care, with appointments available at the Palwal hospital on Tuesdays by prior appointment.",
  },
  {
    question: "Where is the ENT hospital in Palwal?",
    answer:
      "The Palwal hospital is located at Asha Tower, Ground Floor, New Sohna Road, near Ambedkar College, Palwal, Haryana – 121103.",
  },
  {
    question: "Does Dr. Dhirendra Singh Kushwah visit Palwal?",
    answer:
      "Yes. Dr. Dhirendra Singh Kushwah is available at the Palwal hospital every Tuesday by prior appointment. The ENT team is available 24×7.",
  },
  {
    question: "What ENT problems are treated in Palwal?",
    answer:
      "ENT care includes ear infections, hearing problems, sinusitis, nasal blockage, allergies, tonsil problems, throat disorders, voice problems, vertigo and other ear, nose and throat conditions.",
  },
  {
    question: "Is sinus treatment available in Palwal?",
    answer:
      "Yes. Patients with sinusitis, chronic sinus problems, nasal blockage and related conditions can receive ENT evaluation and appropriate medical or surgical treatment.",
  },
  {
    question: "Can I consult for hearing loss in Palwal?",
    answer:
      "Yes. Hearing loss and other ear-related concerns can be evaluated by an ENT specialist. Depending on the cause, further hearing assessment, medical treatment or advanced intervention may be recommended.",
  },
  {
    question: "How can I book an ENT appointment in Palwal?",
    answer:
      "You can contact the clinic at +91-9311449825 to enquire about availability and schedule an appointment with Dr. Dhirendra Singh Kushwah.",
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
        "ENT",
        "Otorhinolaryngology",
        "Cochlear Implants",
        "Endoscopic Sinus Surgery",
        "Head and Neck Surgery",
        "Sleep Apnea Surgery",
        "Ear Surgery",
        "Hearing Loss",
        "Vertigo",
        "Sinusitis",
      ],
    },

    {
      "@type": "MedicalClinic",
      "@id":
        "https://www.drdhirendrasinghkushwah.in/location/palwal#clinic",
      name: "ORL International Hospital Palwal",
      url: "https://www.drdhirendrasinghkushwah.in/location/palwal",
      telephone: "+91-9311449825",
      medicalSpecialty: "Otolaryngology",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Asha Tower, Ground Floor, New Sohna Road, Ambedkar College",
        addressLocality: "Palwal",
        addressRegion: "Haryana",
        postalCode: "121103",
        addressCountry: "IN",
      },
      areaServed: [
        "Palwal",
        "New Sohna Road",
        "Ambedkar College",
        "Hodal",
        "Hathin",
        "Sohna",
        "Faridabad",
        "Mathura",
      ],
      physician: {
        "@id":
          "https://www.drdhirendrasinghkushwah.in/#dr-dhirendra-singh-kushwah",
      },
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.drdhirendrasinghkushwah.in/location/palwal#faq",
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
        "https://www.drdhirendrasinghkushwah.in/location/palwal#breadcrumb",
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
          name: "Palwal",
          item: "https://www.drdhirendrasinghkushwah.in/location/palwal",
        },
      ],
    },
  ],
};

function AddressSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden min-h-[450px]">
            <iframe
              title="ORL International Hospital Palwal Location"
              src="https://maps.google.com/maps?q=ORL+International+Hospital+Palwal+Asha+Tower+New+Sohna+Road+Ambedkar+College+Palwal+Haryana+121103&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-10 flex flex-col justify-center">
            <span className="text-teal-300 font-semibold uppercase tracking-widest text-sm">
              Palwal ENT Hospital
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              ENT Specialist in Palwal
            </h2>

            <div className="space-y-6 text-slate-300">
              <div>
                <h3 className="font-semibold text-white mb-1">Address</h3>
                <p>
                  Asha Tower, Ground Floor,
                  <br />
                  New Sohna Road,
                  <br />
                  Ambedkar College,
                  <br />
                  Palwal, Haryana – 121103
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-1">
                  Dr. Dhirendra Singh Kushwah
                </h3>
                <p>Available every Tuesday by prior appointment.</p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-1">
                  Hospital Availability
                </h3>
                <p>ENT team available 24×7.</p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-1">
                  Appointment
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
              href="https://www.google.com/maps/dir/?api=1&destination=Asha+Tower,+Ground+Floor,+New+Sohna+Road,+Ambedkar+College,+Palwal,+Haryana+121103"
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

export default function PalwalLocationPage() {
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
              Best ENT Surgeon in Palwal, Haryana
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-8 text-slate-300 max-w-3xl">
              Consult Dr. Dhirendra Singh Kushwah for expert evaluation and
              treatment of ear, nose, sinus, hearing, throat, voice and balance
              problems in Palwal.
            </p>

            <p className="mt-4 text-slate-400 max-w-3xl leading-7">
              With more than 25 years of clinical experience, Dr. Kushwah
              provides advanced ENT care with a focus on accurate diagnosis,
              evidence-based treatment and appropriate surgical intervention.
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
              Experienced ENT Specialist in Palwal
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Comprehensive Ear, Nose & Throat Care
            </h2>

            <p className="mt-6 text-slate-600 text-lg leading-8">
              Dr. Dhirendra Singh Kushwah is a senior ENT specialist and skull
              base surgeon offering consultation for a wide range of
              ear, nose and throat conditions. Patients from Palwal and nearby
              areas can seek specialist evaluation for sinus problems, hearing
              loss, ear infections, vertigo, throat disorders, voice problems
              and other ENT concerns.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-3xl mb-12">
            <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">
              ENT Services in Palwal
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              ENT Conditions & Treatments
            </h2>

            <p className="mt-4 text-slate-600 leading-7">
              Specialist assessment is available for common and complex
              ear, nose, throat, hearing and balance conditions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Ear & Hearing",
                text: "Evaluation and treatment for ear infections, hearing loss, ear discharge and other otological conditions.",
                href: "/conditions/ear-infections",
              },
              {
                title: "Hearing Loss",
                text: "Assessment of hearing problems and guidance regarding appropriate medical, hearing or implant-based treatment.",
                href: "/conditions/hearing-loss",
              },
              {
                title: "Sinus & Nose",
                text: "Treatment for sinusitis, chronic sinus problems, allergies and nasal blockage.",
                href: "/conditions/sinusitis",
              },
              {
                title: "Vertigo & Balance",
                text: "Evaluation of dizziness, vertigo and balance-related ENT conditions.",
                href: "/conditions/vertigo",
              },
              {
                title: "Throat & Voice",
                text: "Care for throat discomfort, tonsil problems, voice disorders and related conditions.",
                href: "/conditions/voice-disorders",
              },
              {
                title: "Pediatric ENT",
                text: "ENT evaluation and treatment for children with ear, nose, throat and hearing concerns.",
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

      {/* TREATMENT AREAS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">
                Advanced ENT Care
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
                Advanced ENT Treatment in Palwal
              </h2>

              <p className="mt-5 text-slate-600 leading-8">
                Depending on the diagnosis, patients may be advised medical
                treatment, further diagnostic testing, minimally invasive
                procedures or surgery. Treatment is planned according to the
                individual condition and clinical requirements.
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
                When should you see an ENT specialist?
              </h3>

              <ul className="mt-6 space-y-4 text-slate-300">
                <li>✓ Persistent ear pain or ear discharge</li>
                <li>✓ Difficulty hearing or sudden hearing changes</li>
                <li>✓ Recurrent sinus infections</li>
                <li>✓ Persistent nasal blockage</li>
                <li>✓ Recurrent dizziness or vertigo</li>
                <li>✓ Chronic throat discomfort</li>
                <li>✓ Persistent hoarseness or voice changes</li>
                <li>✓ Snoring or suspected sleep apnea</li>
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
              Why Choose Dr. Kushwah?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Experienced ENT Specialist for Complex & Routine ENT Care
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "25+ Years Experience",
                text: "More than two decades of experience in ENT diagnosis and treatment.",
              },
              {
                title: "Advanced ENT Expertise",
                text: "Specialized experience in cochlear implants, sinus surgery, head and neck surgery and sleep-related ENT care.",
              },
              {
                title: "Patient-Centred Care",
                text: "Treatment recommendations are based on clinical evaluation and the patient's individual condition.",
              },
              {
                title: "Comprehensive Care",
                text: "Evaluation and management of ear, hearing, nose, sinus, throat, voice and balance conditions.",
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
              Serving Palwal & Nearby Areas
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              ENT Specialist Near New Sohna Road & Ambedkar College
            </h2>

            <p className="mt-5 text-slate-600 leading-8">
              The Palwal hospital is conveniently located on New Sohna Road
              near Ambedkar College. Patients looking for an ENT doctor in
              Palwal, ENT specialist near New Sohna Road or ENT care near
              Ambedkar College can enquire about an appointment.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              The clinic can also serve patients travelling from surrounding
              areas including Hodal, Hathin, Sohna and other parts of the
              Palwal region, depending on appointment availability.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              {[
                "Palwal",
                "New Sohna Road",
                "Ambedkar College",
                "Hodal",
                "Hathin",
                "Sohna",
                "Faridabad",
                "Mathura",
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

      {/* CONTACT + FORM */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <span className="text-teal-300 font-semibold uppercase tracking-widest text-sm">
                Book an ENT Consultation
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Need an ENT Specialist in Palwal?
              </h2>

              <p className="mt-5 text-slate-300 leading-8">
                If you are experiencing persistent ear, nose, sinus, hearing,
                throat, voice or balance problems, arrange an ENT consultation
                for proper evaluation and treatment planning.
              </p>

              <div className="mt-8 space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">Doctor:</strong>{" "}
                  Dr. Dhirendra Singh Kushwah
                </p>

                <p>
                  <strong className="text-white">Location:</strong> Asha Tower,
                  Ground Floor, New Sohna Road, Ambedkar College, Palwal
                </p>

                <p>
                  <strong className="text-white">Doctor Availability:</strong>{" "}
                  Every Tuesday by prior appointment
                </p>

                <p>
                  <strong className="text-white">Phone:</strong>{" "}
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
      <AddressSection />

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">
              Frequently Asked Questions
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              ENT Specialist in Palwal – FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden"
              >
                <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-slate-900 flex items-center justify-between">
                  <span>{faq.question}</span>

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
            Looking for an ENT Doctor in Palwal?
          </h2>

          <p className="mt-5 text-lg text-teal-50 max-w-2xl mx-auto leading-8">
            Schedule an appointment with Dr. Dhirendra Singh Kushwah for
            specialist evaluation of ear, nose, throat, hearing, sinus,
            vertigo and voice-related problems.
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
