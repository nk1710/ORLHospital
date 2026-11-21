import ContactForm from "@/components/forms/ContactForm";
import PatientCareFinder from "@/components/home/components/PatientCareFinder/PatientCareFinder";

const Adddres_one = () => (
  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div className="bg-teal-600 p-4 text-white">
      <h3 className="text-xl font-semibold">
        ORL International Group of Hospitals
      </h3>
    </div>

    <div className="bg-slate-50 p-4">
      {/* Existing Google Maps Navigation / Location */}
      <div className="mb-5 overflow-hidden rounded-xl">
        <iframe
          src="https://maps.google.com/maps?q=ORL+International+Group+of+Hospitals+Jasola+Vihar+New+Delhi+110025&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="h-[220px] w-full border-0"
          loading="lazy"
          title="ORL International Group of Hospitals Jasola Vihar location map"
        />
      </div>

      <div className="space-y-3 text-sm leading-6 text-slate-600">
        <p>
          <strong className="text-slate-900">
            ORL International Group of Hospitals
          </strong>
        </p>

        <p>
          <strong className="text-slate-900">
            Plot No. 89, Pocket 1, Jasola Vihar,
            <br />
            New Delhi - 110025
          </strong>
        </p>

        <p>
          <strong className="text-slate-900">Email:</strong>{" "}
          <a
            href="mailto:drdhirendrasinghent@gmail.com"
            className="text-teal-700 hover:underline"
          >
            drdhirendrasinghent@gmail.com
          </a>
        </p>

        <p>
          <strong className="text-slate-900">Phone:</strong>{" "}
          <a
            href="tel:+919311449825"
            className="text-teal-700 hover:underline"
          >
            +91-9311449825
          </a>
          <br />
          <span className="text-slate-500">
            011-35667722, 35005471, 35103410
          </span>
        </p>

        <p>
          <strong className="text-slate-900">Availability:</strong>{" "}
          Mon-Sun 9:30 AM to 03:30 PM
        </p>
      </div>

      {/* Navigation */}
      <div className="mt-5">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=ORL+International+Group+of+Hospitals,+Plot+No.+89,+Pocket+1,+Jasola+Vihar,+New+Delhi+110025"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
        >
          Get Directions to Jasola Clinic
        </a>
      </div>
    </div>
  </div>
);

export async function generateMetadata() {
  return {
    title:
      "Best ENT Doctor in Jasola, South Delhi | Dr. Dhirendra Singh Kushwah",

    description:
      "Consult Dr. (Prof.) Dhirendra Singh Kushwah, top-rated ENT doctor & surgeon in Jasola Vihar, South Delhi. 25+ yrs exp in sinus, ear surgery & hearing. Call now.",

    keywords: [
      "best ENT doctor in Jasola",
      "best ENT doctor in Jasola Vihar",
      "best ENT doctor in South Delhi",
      "best ENT surgeon in Jasola",
      "ENT specialist in Jasola",
      "ENT doctor in Jasola",
      "ENT surgeon in Jasola",
      "ENT specialist in Jasola Vihar",
      "ENT doctor in Jasola Vihar",
      "ENT surgeon in Jasola Vihar",
      "best ENT surgeon in Delhi",
      "ENT specialist in South Delhi",
      "ENT doctor in South Delhi",
      "ENT surgeon in South Delhi",
      "ENT clinic in Jasola",
      "ENT clinic in Jasola Vihar",
      "sinus specialist in Jasola",
      "sinus surgeon in South Delhi",
      "ear specialist in South Delhi",
      "hearing loss specialist in Delhi",
      "cochlear implant surgeon in Delhi",
      "endoscopic sinus surgery in Delhi",
      "vertigo specialist in South Delhi",
      "throat specialist in Delhi",
    ],

    authors: [
      {
        name: "Dr.(Prof.) Dhirendra Singh Kushwah",
      },
    ],

    alternates: {
      canonical:
        "https://www.drdhirendrasinghkushwah.com/location/jasola",
    },

    openGraph: {
      title:
        "Best ENT Doctor in Jasola, South Delhi | Dr. Dhirendra Singh Kushwah",

      description:
        "Top-rated ENT doctor & specialist surgeon providing advanced ear, nose, throat, and sinus care in Jasola Vihar, South Delhi. 25+ years experience.",

      url: "https://www.drdhirendrasinghkushwah.com/location/jasola",

      type: "website",
    },
  };
}

export default async function JasolaPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id":
          "https://www.drdhirendrasinghkushwah.com/#website",
        url: "https://www.drdhirendrasinghkushwah.com/",
        name: "Dr.(Prof.) Dhirendra Singh Kushwah ENT Specialist",
        publisher: {
          "@id":
            "https://www.drdhirendrasinghkushwah.com/#physician",
        },
      },

      {
        "@type": "Physician",
        "@id":
          "https://www.drdhirendrasinghkushwah.com/#physician",

        name: "Dr.(Prof.) Dhirendra Singh Kushwah",

        alternateName:
          "ENT Specialist and Surgeon in Delhi",

        jobTitle: "ENT Surgeon",

        medicalSpecialty: "Otolaryngology",

        url: "https://www.drdhirendrasinghkushwah.com/",

        image:
          "https://www.drdhirendrasinghkushwah.com/images/gallery/11.webp",

        telephone: "+91-9311449825",

        priceRange: "₹₹₹",

        image:
          "https://www.drdhirendrasinghkushwah.com/images/gallery/11.webp",

        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          ratingCount: "725",
          reviewCount: "725",
        },

        sameAs: [
          "https://www.facebook.com/people/Dr-Dhirendra-Singh-Kushwah/61560817359879/",
          "https://www.instagram.com/dr.dhirendrasinghkushwah",
        ],

        areaServed: [
          {
            "@type": "City",
            name: "Delhi",
          },
          {
            "@type": "State",
            name: "Haryana",
          },
          {
            "@type": "State",
            name: "Uttar Pradesh",
          },
        ],

        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9311449825",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["Hindi", "English"],
        },

        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "Septoplasty",
          },
          {
            "@type": "MedicalProcedure",
            name: "Sinus Surgery",
          },
          {
            "@type": "MedicalProcedure",
            name: "Tonsillectomy",
          },
          {
            "@type": "MedicalProcedure",
            name: "Endoscopic Sinus Surgery",
          },
        ],

        worksFor: [
          {
            "@id":
              "https://www.drdhirendrasinghkushwah.com/#clinic-jasola",
          },
          {
            "@id":
              "https://www.drdhirendrasinghkushwah.com/#clinic-crpark",
          },
          {
            "@id":
              "https://www.drdhirendrasinghkushwah.com/#clinic-arjun",
          },
          {
            "@id":
              "https://www.drdhirendrasinghkushwah.com/#clinic-dhampur",
          },
          {
            "@id":
              "https://www.drdhirendrasinghkushwah.com/#clinic-palwal",
          },
        ],
      },

      {
        "@type": "MedicalClinic",

        "@id":
          "https://www.drdhirendrasinghkushwah.com/#clinic-jasola",

        name:
          "Dr.(Prof.) Dhirendra Singh Kushwah ENT Clinic - Jasola",

        url:
          "https://www.drdhirendrasinghkushwah.com/location/jasola",

        telephone: "+91-9311449825",

        priceRange: "₹₹",

        image:
          "https://www.drdhirendrasinghkushwah.com/images/gallery/11.webp",

        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          ratingCount: "725",
          reviewCount: "725",
        },

        address: {
          "@type": "PostalAddress",

          streetAddress:
            "Plot No. 89, Pocket-1, Jasola Vihar",

          addressLocality: "New Delhi",

          addressRegion: "Delhi",

          postalCode: "110025",

          addressCountry: "IN",
        },

        geo: {
          "@type": "GeoCoordinates",

          latitude: "28.535200",

          longitude: "77.270000",
        },

        medicalSpecialty: "Otolaryngology",

        areaServed: [
          {
            "@type": "Place",
            name: "Jasola Vihar",
          },
          {
            "@type": "Place",
            name: "South Delhi",
          },
          {
            "@type": "Place",
            name: "Sarita Vihar",
          },
          {
            "@type": "Place",
            name: "Okhla",
          },
          {
            "@type": "Place",
            name: "Kalindi Kunj",
          },
          {
            "@type": "Place",
            name: "Shaheen Bagh",
          },
          {
            "@type": "Place",
            name: "Abul Fazal Enclave",
          },
        ],
      },

      {
        "@type": "FAQPage",

        "@id":
          "https://www.drdhirendrasinghkushwah.com/location/jasola#faq",

        mainEntity: [
          {
            "@type": "Question",

            name:
              "Who is a leading ENT surgeon in Jasola, South Delhi?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Dr.(Prof.) Dhirendra Singh Kushwah is an experienced ENT specialist and surgeon providing consultation and treatment for ear, nose and throat conditions at ORL International Group of Hospitals in Jasola Vihar, South Delhi.",
            },
          },

          {
            "@type": "Question",

            name:
              "Where can I consult an ENT specialist in Jasola Vihar?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Patients can consult Dr. Dhirendra Singh Kushwah at ORL International Group of Hospitals, Plot No. 89, Pocket 1, Jasola Vihar, New Delhi - 110025.",
            },
          },

          {
            "@type": "Question",

            name:
              "Does the Jasola ENT clinic treat sinus and nasal problems?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Yes. ENT consultation includes evaluation and treatment of sinusitis, nasal blockage, nasal breathing problems and other nose and sinus conditions. Surgical treatment may be recommended when clinically appropriate.",
            },
          },

          {
            "@type": "Question",

            name:
              "Does the ENT specialist in Jasola treat hearing problems?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Yes. Patients can seek evaluation for hearing loss, ear infections, ear-related symptoms and other hearing and ear conditions.",
            },
          },

          {
            "@type": "Question",

            name:
              "How can I book an ENT appointment in Jasola?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "You can book an appointment by calling +91-9311449825 or by using the appointment form available on this page.",
            },
          },
        ],
      },

      {
        "@type": "BreadcrumbList",

        "@id":
          "https://www.drdhirendrasinghkushwah.com/location/jasola#breadcrumbs",

        itemListElement: [
          {
            "@type": "ListItem",

            position: 1,

            name: "Home",

            item:
              "https://www.drdhirendrasinghkushwah.com/",
          },

          {
            "@type": "ListItem",

            position: 2,

            name: "Locations",

            item:
              "https://www.drdhirendrasinghkushwah.com/location",
          },

          {
            "@type": "ListItem",

            position: 3,

            name: "Jasola",

            item:
              "https://www.drdhirendrasinghkushwah.com/location/jasola",
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-950 py-20 md:py-24">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(4,47,46,0.7) 0%, rgba(2,6,23,0.95) 50%, rgba(15,23,42,1) 100%)" }} />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-5 inline-block rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-300">
              Top-Rated ENT Specialist & Surgeon in Jasola Vihar
            </span>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Best ENT Doctor in Jasola, South Delhi
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Consult Dr. (Prof.) Dhirendra Singh Kushwah, widely recognized as the best ENT doctor in Jasola Vihar with 25+ years of surgical excellence. Providing advanced microscopic ear surgery, 4K endoscopic sinus surgery (FESS), cochlear implants, and vertigo treatment at ORL International Group of Hospitals, Plot No. 89, Pocket 1, Jasola Vihar.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:+919311449825"
                className="rounded-xl bg-teal-600 px-7 py-3.5 font-semibold text-white transition hover:bg-teal-500"
              >
                Call for Appointment
              </a>

              <a
                href="https://wa.me/919311449825"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              ENT Care in South Delhi
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Experienced ENT Specialist in Jasola Vihar
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Dr. (Prof.) Dhirendra Singh Kushwah provides specialist
              consultation and surgical care for a wide range of
              ear, nose and throat conditions in South Delhi. The Jasola
              clinic is located at ORL International Group of Hospitals
              and is convenient for patients from Jasola Vihar, Sarita
              Vihar, Okhla, Kalindi Kunj, Shaheen Bagh and nearby areas.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Whether you are looking for an ENT doctor in Jasola, an ENT
              surgeon in South Delhi, or specialist evaluation for sinus,
              hearing, ear or throat problems, the clinic provides
              patient-focused ENT assessment and treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Bilingual Patient Care Finder & Free 2nd Opinion Desk */}
      <PatientCareFinder />

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Comprehensive ENT Services
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              ENT Conditions & Treatments in Jasola
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Specialist evaluation and treatment for common and complex
              ear, nose and throat conditions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Ear & Hearing",
                items: [
                  "Ear infections",
                  "Hearing loss",
                  "Ear-related problems",
                  "Hearing evaluation",
                ],
              },
              {
                title: "Nose & Sinus",
                items: [
                  "Sinusitis",
                  "Nasal blockage",
                  "Sinus problems",
                  "Endoscopic sinus surgery",
                ],
              },
              {
                title: "Throat & Voice",
                items: [
                  "Tonsillitis",
                  "Throat conditions",
                  "Voice disorders",
                  "Swallowing problems",
                ],
              },
              {
                title: "Specialist Surgery",
                items: [
                  "Septoplasty",
                  "Sinus surgery",
                  "Tonsil surgery",
                  "Cochlear implant care",
                ],
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCAL SEO SECTION
      ========================================================== */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-teal-600">
                Local ENT Care
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                ENT Specialist Serving Jasola & South Delhi
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Finding the right ENT specialist near your home can make
                specialist consultation more convenient. The Jasola
                location of ORL International Group of Hospitals provides
                access to experienced ENT care for patients from across
                South Delhi.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Patients from <strong>Jasola Vihar</strong>,{" "}
                <strong>Sarita Vihar</strong>, <strong>Okhla</strong>,{" "}
                <strong>Kalindi Kunj</strong>,{" "}
                <strong>Shaheen Bagh</strong> and{" "}
                <strong>Abul Fazal Enclave</strong> can visit the Jasola
                clinic for ENT consultation and specialist treatment.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                If you are searching for an ENT doctor in South Delhi,
                an ENT surgeon in Jasola, or a specialist for sinus,
                hearing, ear or throat problems, you can schedule a
                consultation at the Jasola location.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white md:p-10">
              <span className="text-sm font-semibold uppercase tracking-wider text-teal-300">
                Convenient Location
              </span>

              <h3 className="mt-3 text-2xl font-bold">
                ORL International Group of Hospitals
              </h3>

              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                <p>
                  <strong className="text-white">Address:</strong>
                  <br />
                  Plot No. 89, Pocket 1,
                  <br />
                  Jasola Vihar, New Delhi - 110025
                </p>

                <p>
                  <strong className="text-white">Availability:</strong>
                  <br />
                  Mon-Sun, 9:30 AM to 03:30 PM
                </p>

                <p>
                  <strong className="text-white">Phone:</strong>
                  <br />
                  +91-9311449825
                </p>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=ORL+International+Group+of+Hospitals,+Plot+No.+89,+Pocket+1,+Jasola+Vihar,+New+Delhi+110025"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-500"
              >
                Navigate to Clinic
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE DOCTOR
      ========================================================== */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Specialist Care
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Why Consult Dr. Dhirendra Singh Kushwah?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "25+ Years Experience",
                text: "Extensive experience in ENT consultation, diagnosis and surgical care.",
              },
              {
                number: "02",
                title: "Advanced ENT Expertise",
                text: "Specialist expertise in cochlear implants, endoscopic sinus and head & neck surgery.",
              },
              {
                number: "03",
                title: "Comprehensive Care",
                text: "Evaluation and management of a broad range of ear, nose and throat conditions.",
              },
              {
                number: "04",
                title: "Patient-Focused Approach",
                text: "Treatment recommendations are based on individual symptoms, diagnosis and clinical needs.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span className="text-3xl font-bold text-teal-600">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TREATMENT KEYWORDS
      ========================================================== */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Specialist ENT Treatment
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Ear, Nose & Throat Treatment in South Delhi
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              ENT problems can range from temporary infections and
              allergies to conditions that require specialist assessment
              or surgery. At the Jasola location, patients can receive
              evaluation for ear, hearing, sinus, nasal, throat and voice
              concerns.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                "ENT Specialist in Jasola",
                "ENT Surgeon in South Delhi",
                "Sinus Specialist in Jasola",
                "Sinus Surgeon in Delhi",
                "Hearing Loss Specialist",
                "Ear Specialist in South Delhi",
                "Endoscopic Sinus Surgery",
                "Cochlear Implant",
                "Nasal Blockage Treatment",
                "Vertigo Evaluation",
                "Throat Treatment",
                "Voice Disorder Treatment",
              ].map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPOINTMENT + LOCATION
      ========================================================== */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* APPOINTMENT FORM */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="mb-7">
                  <span className="text-sm font-semibold uppercase tracking-wider text-teal-600">
                    Book Your Consultation
                  </span>

                  <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    Book an ENT Appointment in Jasola
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    Use the appointment form to request a consultation
                    with Dr. Dhirendra Singh Kushwah at the Jasola
                    location.
                  </p>
                </div>

                {/* Existing Appointment / Contact Form */}
                <ContactForm />
              </div>
            </div>

            {/* MAP + CONTACT */}
            <div>
              <h2 className="mb-5 text-3xl font-bold text-slate-900">
                ENT Clinic Location
              </h2>

              <Adddres_one />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section
        id="faq"
        className="bg-white py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Frequently Asked Questions
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              FAQs About ENT Consultation in Jasola
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {[
              {
                question:
                  "Who is a leading ENT surgeon in Jasola, South Delhi?",
                answer:
                  "Dr.(Prof.) Dhirendra Singh Kushwah is an experienced ENT specialist and surgeon providing consultation and treatment for a wide range of ear, nose and throat conditions at ORL International Group of Hospitals in Jasola Vihar, South Delhi.",
              },
              {
                question:
                  "Where can I consult an ENT specialist in Jasola Vihar?",
                answer:
                  "The Jasola consultation location is ORL International Group of Hospitals, Plot No. 89, Pocket 1, Jasola Vihar, New Delhi - 110025.",
              },
              {
                question:
                  "What ENT conditions are treated at the Jasola clinic?",
                answer:
                  "Patients can seek specialist evaluation for ear infections, hearing loss, sinusitis, nasal blockage, tonsillitis, allergies, vertigo, voice disorders and other ear, nose and throat conditions.",
              },
              {
                question:
                  "Can I consult an ENT surgeon for sinus problems in South Delhi?",
                answer:
                  "Yes. Patients with persistent sinus symptoms, nasal blockage or other nose and sinus concerns can seek ENT evaluation. Treatment depends on the underlying diagnosis and may include medical or surgical management when appropriate.",
              },
              {
                question:
                  "How can I book an appointment with the ENT specialist in Jasola?",
                answer:
                  "You can call +91-9311449825 or submit your details through the appointment form on this page.",
              },
              {
                question:
                  "Is the Jasola ENT clinic convenient for patients from nearby areas?",
                answer:
                  "The Jasola location can be convenient for patients from Jasola Vihar, Sarita Vihar, Okhla, Kalindi Kunj, Shaheen Bagh, Abul Fazal Enclave and other parts of South Delhi.",
              },
            ].map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  <span>{faq.question}</span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xl text-teal-700 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-slate-950 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-300">
            Need ENT Consultation?
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Consult an Experienced ENT Specialist in Jasola
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            If you are experiencing persistent ear, nose, sinus, hearing
            or throat problems, schedule an ENT consultation at the
            Jasola location in South Delhi.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+919311449825"
              className="rounded-xl bg-teal-600 px-7 py-3.5 font-semibold text-white transition hover:bg-teal-500"
            >
              Call +91-9311449825
            </a>

            <a
              href="https://wa.me/919311449825"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}