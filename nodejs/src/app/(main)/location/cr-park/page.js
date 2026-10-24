import ContactForm from "@/components/forms/ContactForm";

const AddressOne = () => (
  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div className="bg-teal-600 p-4 text-white">
      <h3 className="text-xl font-semibold">
        Dr. Dhirendra Singh Kushwah ENT Clinic - CR Park
      </h3>
    </div>

    <div className="bg-slate-50 p-4">
      {/* Google Maps */}
      <div className="mb-5 overflow-hidden rounded-xl">
        <iframe
          src="https://maps.google.com/maps?q=J-1981,+Near+Market+No+1,+Below+ICICI+Bank,+Bipin+Chandra+Pal+Marg,+CR+Park,+New+Delhi+110019&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="h-[220px] w-full border-0"
          loading="lazy"
          title="Dr. Dhirendra Singh Kushwah ENT Clinic CR Park location map"
        />
      </div>

      <div className="space-y-3 text-sm leading-6 text-slate-600">
        <p>
          <strong className="text-slate-900">
            Dr. Dhirendra Singh Kushwah ENT Clinic
          </strong>
        </p>

        <p>
          <strong className="text-slate-900">
            J-1981, Near Market No. 1,
            <br />
            Below ICICI Bank, Bipin Chandra Pal Marg,
            <br />
            CR Park, New Delhi - 110019
          </strong>
        </p>

        <p>
          <strong className="text-slate-900">Phone:</strong>{" "}
          <a
            href="tel:+919311449825"
            className="text-teal-700 hover:underline"
          >
            +91-9311449825
          </a>
        </p>

        <p>
          <strong className="text-slate-900">Availability:</strong>{" "}
          Monday-Saturday, 6:00 PM to 8:00 PM
        </p>
      </div>

      {/* Google Maps Navigation */}
      <div className="mt-5">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=J-1981,+Near+Market+No+1,+Below+ICICI+Bank,+Bipin+Chandra+Pal+Marg,+CR+Park,+New+Delhi+110019"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
        >
          Get Directions to CR Park Clinic
        </a>
      </div>
    </div>
  </div>
);

export async function generateMetadata() {
  return {
    title:
      "Best ENT Surgeon in CR Park, South Delhi | ENT Specialist | Dr. Dhirendra Singh Kushwah",

    description:
      "Consult Dr. Dhirendra Singh Kushwah, experienced ENT specialist and surgeon in CR Park, Chittaranjan Park, South Delhi. Expert care for ear, nose, throat, sinus, hearing and voice conditions.",

    keywords: [
      "best ENT surgeon in CR Park",
      "ENT specialist in CR Park",
      "ENT doctor in CR Park",
      "ENT surgeon in CR Park",
      "best ENT specialist in CR Park",
      "best ENT doctor in CR Park",
      "best ENT surgeon in Chittaranjan Park",
      "ENT specialist in Chittaranjan Park",
      "ENT doctor in Chittaranjan Park",
      "ENT surgeon in Chittaranjan Park",
      "best ENT specialist in South Delhi",
      "best ENT surgeon in South Delhi",
      "ENT specialist in South Delhi",
      "ENT doctor in South Delhi",
      "ENT surgeon in South Delhi",
      "ENT clinic in South Delhi",
      "ENT specialist near CR Park",
      "ENT doctor near CR Park",
      "ENT specialist near Greater Kailash",
      "ENT doctor near GK",
      "ENT specialist near Kalkaji",
      "ENT doctor near Nehru Place",
      "ENT specialist near Alaknanda",
      "ENT doctor near Govindpuri",
      "sinus specialist in CR Park",
      "sinus surgeon in CR Park",
      "sinus surgery in South Delhi",
      "endoscopic sinus surgery in Delhi",
      "ear specialist in CR Park",
      "hearing loss specialist in South Delhi",
      "cochlear implant surgeon in Delhi",
      "vertigo specialist in South Delhi",
      "throat specialist in CR Park",
      "nasal blockage treatment in South Delhi",
    ],

    authors: [
      {
        name: "Dr.(Prof.) Dhirendra Singh Kushwah",
      },
    ],

    alternates: {
      canonical:
        "https://www.drdhirendrasinghkushwah.in/location/cr-park",
    },

    openGraph: {
      title:
        "Best ENT Surgeon in CR Park, South Delhi | Dr. Dhirendra Singh Kushwah",

      description:
        "Experienced ENT specialist and surgeon providing comprehensive ear, nose and throat care in CR Park, Chittaranjan Park, South Delhi.",

      url:
        "https://www.drdhirendrasinghkushwah.in/location/cr-park",

      type: "website",
    },
  };
}

export default async function CRParkPage() {
  const schemaData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "WebSite",

        "@id":
          "https://www.drdhirendrasinghkushwah.in/#website",

        url:
          "https://www.drdhirendrasinghkushwah.in/",

        name:
          "Dr.(Prof.) Dhirendra Singh Kushwah ENT Specialist",

        publisher: {
          "@id":
            "https://www.drdhirendrasinghkushwah.in/#physician",
        },
      },

      {
        "@type": "Physician",

        "@id":
          "https://www.drdhirendrasinghkushwah.in/#physician",

        name:
          "Dr.(Prof.) Dhirendra Singh Kushwah",

        alternateName:
          "ENT Specialist and Surgeon in Delhi",

        jobTitle: "ENT Surgeon",

        medicalSpecialty: "Otolaryngology",

        url:
          "https://www.drdhirendrasinghkushwah.in/",

        image:
          "https://www.drdhirendrasinghkushwah.in/images/gallery/11.webp",

        telephone: "+91-9311449825",

        priceRange: "₹₹₹",

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

          availableLanguage: [
            "Hindi",
            "English",
          ],
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
              "https://www.drdhirendrasinghkushwah.in/#clinic-crpark",
          },
          {
            "@id":
              "https://www.drdhirendrasinghkushwah.in/#clinic-jasola",
          },
          {
            "@id":
              "https://www.drdhirendrasinghkushwah.in/#clinic-arjun",
          },
          {
            "@id":
              "https://www.drdhirendrasinghkushwah.in/#clinic-dhampur",
          },
          {
            "@id":
              "https://www.drdhirendrasinghkushwah.in/#clinic-palwal",
          },
        ],
      },

      {
        "@type": "MedicalClinic",

        "@id":
          "https://www.drdhirendrasinghkushwah.in/#clinic-crpark",

        name:
          "Dr.(Prof.) Dhirendra Singh Kushwah ENT Clinic - CR Park",

        url:
          "https://www.drdhirendrasinghkushwah.in/location/cr-park",

        telephone: "+91-9311449825",

        medicalSpecialty: "Otolaryngology",

        address: {
          "@type": "PostalAddress",

          streetAddress:
            "J-1981, Near Market No 1, Below ICICI Bank, Bipin Chandra Pal Marg",

          addressLocality: "CR Park",

          addressRegion: "Delhi",

          postalCode: "110019",

          addressCountry: "IN",
        },

        geo: {
          "@type": "GeoCoordinates",

          latitude: "28.540381",

          longitude: "77.247059",
        },

        areaServed: [
          {
            "@type": "Place",
            name: "CR Park",
          },
          {
            "@type": "Place",
            name: "Chittaranjan Park",
          },
          {
            "@type": "Place",
            name: "Greater Kailash",
          },
          {
            "@type": "Place",
            name: "Kalkaji",
          },
          {
            "@type": "Place",
            name: "Nehru Place",
          },
          {
            "@type": "Place",
            name: "Alaknanda",
          },
          {
            "@type": "Place",
            name: "Govindpuri",
          },
          {
            "@type": "Place",
            name: "South Delhi",
          },
        ],

        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",

          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],

          opens: "18:00",

          closes: "20:00",
        },
      },

      {
        "@type": "FAQPage",

        "@id":
          "https://www.drdhirendrasinghkushwah.in/location/cr-park#faq",

        mainEntity: [
          {
            "@type": "Question",

            name:
              "Who is a leading ENT surgeon in CR Park, South Delhi?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Dr.(Prof.) Dhirendra Singh Kushwah is an experienced ENT specialist and surgeon providing consultation and treatment for ear, nose and throat conditions at his CR Park clinic in South Delhi.",
            },
          },

          {
            "@type": "Question",

            name:
              "Where can I consult an ENT specialist in Chittaranjan Park?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Patients can consult Dr. Dhirendra Singh Kushwah at J-1981, Near Market No. 1, Below ICICI Bank, Bipin Chandra Pal Marg, CR Park, New Delhi - 110019.",
            },
          },

          {
            "@type": "Question",

            name:
              "Does the CR Park ENT clinic treat sinus problems?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Yes. Patients with sinusitis, nasal blockage and other nose and sinus concerns can seek ENT evaluation. Treatment depends on the underlying diagnosis and may include medical or surgical management when clinically appropriate.",
            },
          },

          {
            "@type": "Question",

            name:
              "Can I consult an ENT doctor in CR Park for hearing problems?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Yes. Patients can seek specialist evaluation for hearing loss, ear infections, ear-related symptoms and other ear and hearing conditions.",
            },
          },

          {
            "@type": "Question",

            name:
              "Is the CR Park clinic convenient for patients from Greater Kailash and Kalkaji?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "The CR Park clinic is located in South Delhi and can be convenient for patients from CR Park, Chittaranjan Park, Greater Kailash, Kalkaji, Nehru Place, Alaknanda, Govindpuri and nearby areas.",
            },
          },

          {
            "@type": "Question",

            name:
              "How can I book an ENT appointment in CR Park?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "You can call +91-9311449825 or submit your details through the appointment form on this page.",
            },
          },
        ],
      },

      {
        "@type": "BreadcrumbList",

        "@id":
          "https://www.drdhirendrasinghkushwah.in/location/cr-park#breadcrumbs",

        itemListElement: [
          {
            "@type": "ListItem",

            position: 1,

            name: "Home",

            item:
              "https://www.drdhirendrasinghkushwah.in/",
          },

          {
            "@type": "ListItem",

            position: 2,

            name: "Locations",

            item:
              "https://www.drdhirendrasinghkushwah.in/location",
          },

          {
            "@type": "ListItem",

            position: 3,

            name: "CR Park",

            item:
              "https://www.drdhirendrasinghkushwah.in/location/cr-park",
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* =========================================================
          STRUCTURED DATA
      ========================================================== */}

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
              ENT Specialist & Surgeon in CR Park
            </span>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Best ENT Surgeon in CR Park, South Delhi
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Consult Dr. (Prof.) Dhirendra Singh Kushwah, an experienced
              ENT specialist and surgeon providing comprehensive care for
              ear, nose, throat, sinus, hearing and voice conditions in
              CR Park, Chittaranjan Park, South Delhi.
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
              ENT Care in Chittaranjan Park
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Experienced ENT Specialist in CR Park
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Dr. (Prof.) Dhirendra Singh Kushwah provides specialist
              consultation and surgical care for a wide range of
              ear, nose and throat conditions at his CR Park clinic
              in South Delhi.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              The clinic is located in Chittaranjan Park and can be
              convenient for patients from Greater Kailash, Kalkaji,
              Nehru Place, Alaknanda, Govindpuri and other nearby
              South Delhi areas.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Whether you are looking for an ENT doctor in CR Park,
              an ENT surgeon in Chittaranjan Park, or specialist
              evaluation for sinus, hearing, ear or throat problems,
              you can schedule an ENT consultation at the CR Park
              location.
            </p>
          </div>
        </div>
      </section>

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
              ENT Conditions & Treatments in CR Park
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Specialist evaluation and treatment for common and
              complex ear, nose and throat conditions.
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
                title: "ENT Surgery",
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
          LOCAL SEO
      ========================================================== */}

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-teal-600">
                Local ENT Care
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                ENT Specialist Serving CR Park & South Delhi
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Choosing an ENT specialist near your home can make
                specialist consultation more convenient. The CR Park
                clinic provides access to experienced ENT care for
                patients living in Chittaranjan Park and surrounding
                South Delhi neighbourhoods.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Patients from{" "}
                <strong>CR Park</strong>,{" "}
                <strong>Chittaranjan Park</strong>,{" "}
                <strong>Greater Kailash</strong>,{" "}
                <strong>Kalkaji</strong>,{" "}
                <strong>Nehru Place</strong>,{" "}
                <strong>Alaknanda</strong> and{" "}
                <strong>Govindpuri</strong> can visit the clinic for
                ENT consultation and specialist treatment.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                If you are searching for an ENT doctor in South Delhi,
                an ENT surgeon in CR Park, or a specialist for sinus,
                hearing, ear or throat problems, you can schedule a
                consultation at the CR Park clinic.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white md:p-10">
              <span className="text-sm font-semibold uppercase tracking-wider text-teal-300">
                CR Park Clinic
              </span>

              <h3 className="mt-3 text-2xl font-bold">
                Dr. Dhirendra Singh Kushwah ENT Clinic
              </h3>

              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                <p>
                  <strong className="text-white">
                    Address:
                  </strong>
                  <br />
                  J-1981, Near Market No. 1,
                  <br />
                  Below ICICI Bank, Bipin Chandra Pal Marg,
                  <br />
                  CR Park, New Delhi - 110019
                </p>

                <p>
                  <strong className="text-white">
                    Clinic Hours:
                  </strong>
                  <br />
                  Monday-Saturday, 6:00 PM to 8:00 PM
                </p>

                <p>
                  <strong className="text-white">
                    Phone:
                  </strong>
                  <br />
                  +91-9311449825
                </p>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=J-1981,+Near+Market+No+1,+Below+ICICI+Bank,+Bipin+Chandra+Pal+Marg,+CR+Park,+New+Delhi+110019"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-500"
              >
                Navigate to CR Park Clinic
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
                text:
                  "Extensive experience in ENT consultation, diagnosis and surgical care.",
              },
              {
                number: "02",
                title: "Advanced ENT Expertise",
                text:
                  "Specialist expertise in cochlear implants, endoscopic sinus and head & neck surgery.",
              },
              {
                number: "03",
                title: "Comprehensive Care",
                text:
                  "Evaluation and management of a broad range of ear, nose and throat conditions.",
              },
              {
                number: "04",
                title: "Patient-Focused Approach",
                text:
                  "Treatment recommendations are based on individual symptoms, diagnosis and clinical needs.",
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
          TREATMENT + KEYWORD TOPICS
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
              allergies to conditions requiring specialist assessment
              or surgery. At the CR Park location, patients can seek
              evaluation for ear, hearing, sinus, nasal, throat and
              voice concerns.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                "ENT Specialist in CR Park",
                "ENT Surgeon in South Delhi",
                "ENT Doctor in Chittaranjan Park",
                "Sinus Specialist in CR Park",
                "Sinus Surgeon in Delhi",
                "Sinus Surgery in South Delhi",
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
          APPOINTMENT + MAP
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
                    Book an ENT Appointment in CR Park
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    Request an ENT consultation with Dr. Dhirendra
                    Singh Kushwah at the CR Park, Chittaranjan Park
                    location in South Delhi.
                  </p>
                </div>

                {/* Existing Contact / Appointment Form */}
                <ContactForm />
              </div>
            </div>

            {/* CLINIC LOCATION */}
            <div>
              <h2 className="mb-5 text-3xl font-bold text-slate-900">
                CR Park Clinic Location
              </h2>

              <AddressOne />
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
              FAQs About ENT Consultation in CR Park
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {[
              {
                question:
                  "Who is a leading ENT surgeon in CR Park, South Delhi?",
                answer:
                  "Dr.(Prof.) Dhirendra Singh Kushwah is an experienced ENT specialist and surgeon providing consultation and treatment for a wide range of ear, nose and throat conditions at his CR Park clinic in South Delhi.",
              },
              {
                question:
                  "Where can I consult an ENT specialist in Chittaranjan Park?",
                answer:
                  "Patients can consult Dr. Dhirendra Singh Kushwah at J-1981, Near Market No. 1, Below ICICI Bank, Bipin Chandra Pal Marg, CR Park, New Delhi - 110019.",
              },
              {
                question:
                  "What ENT conditions are treated at the CR Park clinic?",
                answer:
                  "Patients can seek specialist evaluation for ear infections, hearing loss, sinusitis, nasal blockage, tonsillitis, allergies, vertigo, voice disorders and other ear, nose and throat conditions.",
              },
              {
                question:
                  "Can I consult an ENT surgeon for sinus problems in CR Park?",
                answer:
                  "Yes. Patients with persistent sinus symptoms, nasal blockage or other nose and sinus concerns can seek ENT evaluation. Treatment depends on the underlying diagnosis and may include medical or surgical management when appropriate.",
              },
              {
                question:
                  "Is the CR Park clinic near Greater Kailash and Kalkaji?",
                answer:
                  "The clinic is located in CR Park, South Delhi, and can be convenient for patients from nearby areas including Greater Kailash, Kalkaji, Nehru Place, Alaknanda and Govindpuri.",
              },
              {
                question:
                  "How can I book an ENT appointment in CR Park?",
                answer:
                  "You can call +91-9311449825 or submit your details through the appointment form on this page.",
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
            Consult an Experienced ENT Specialist in CR Park
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            If you are experiencing persistent ear, nose, sinus,
            hearing or throat problems, schedule an ENT consultation
            at the CR Park clinic in South Delhi.
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