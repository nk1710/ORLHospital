import DoctorImage from './about'
import { FaqAccordion } from './faq-accordion'
import { Facebook, Instagram, Linkedin, Phone, X, Youtube, Mail } from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.com/about/drdhirendrasinghkushwah"

  return {
    title: "Top ENT Doctor in India | Dr.(Prof.) Dhirendra Singh Kushwah (25+ Years Experience)",
    description:
      "Dr.(Prof.) Dhirendra Singh Kushwah is a distinguished Senior Consultant ENT Specialist and Skull Base Surgeon in Delhi with 25+ years of experience. Head of ENT Department at ORL International Group of Hospitals. Expert in Cochlear Implants, FESS, and Skull Base Surgery.",
    keywords: [
      "Best ENT doctor in India",
      "Top ENT specialist India",
      "ENT doctor in Delhi",
      "Cochlear implant surgeon India",
      "Skull base surgeon India",
      "ENT clinic Delhi",
      "Dr.(Prof.) Dhirendra Singh Kushwah",
      "Ear Nose Throat specialist India",
      "FESS surgeon Delhi",
      "Sleep apnea surgeon Delhi",
      "Sleep apnea Clinic Delhi",
      "ORL International Group of Hospitals",
    ],
    authors: [{ name: "Dr. Dhirendra Singh Kushwah" }],
    alternates: { canonical: url },
    openGraph: {
      title: "Dr.(Prof.) Dhirendra Singh Kushwah - Top ENT Doctor in India",
      description:
        "25+ years of expertise in ENT care, cochlear implants, and advanced surgeries. Head of ENT at ORL International Group of Hospitals, Delhi.",
      url: url,
      siteName: "Dr. Dhirendra Singh Kushwah",
      type: "profile",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: "Top ENT Doctor in India | Dr.(Prof.) Dhirendra Singh Kushwah",
      description:
        "Explore the journey and expertise of Dr.(Prof.) Dhirendra Singh Kushwah, leading ENT Specialist and Skull Base Surgeon in Delhi.",
    },
    robots: { index: true, follow: true },
    category: "healthcare",
  }
}


export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": "https://www.drdhirendrasinghkushwah.com/about/#physician",
        name: "Dr. Dhirendra Singh Kushwah",
        alternateName: "Best ENT Surgeon in Delhi",
        medicalSpecialty: "Otolaryngology",
        jobTitle: "ENT Surgeon & Skull Base Specialist",
        description: "Senior Consultant ENT Specialist, Cochlear Implant & Endoscopic Sinus Surgeon, Head and Neck Surgeon, Specialist in OSA (Sleep) Surgery with over 25 years of clinical excellence.",
        image: "https://www.drdhirendrasinghkushwah.com/images/gallery/11.webp",
        url: "https://www.drdhirendrasinghkushwah.com/",
        telephone: "+919311449825",
        priceRange: "₹₹₹",
        areaServed: { "@type": "City", name: "Delhi" },
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "J-1981, Near Market No 1, Below ICICI Bank, Bipin Chandra Pal Marg, CR Park",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
          postalCode: "110019",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.540381,
          longitude: 77.247059,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "18:30",
          closes: "21:00",
        },
        sameAs: [
          "https://www.facebook.com/people/Dr-Dhirendra-Singh-Kushwah/61560817359879/",
          "https://www.instagram.com/dr.dhirendrasinghkushwah",
        ],
      },
      {
        "@type": "MedicalClinic",
        "@id": "https://www.drdhirendrasinghkushwah.com/#clinic",
        name: "ORL International Group of Hospitals – ENT Department",
        url: "https://www.drdhirendrasinghkushwah.com/",
        telephone: "+919311449825",
        image: "https://www.drdhirendrasinghkushwah.com/images/gallery/11.webp",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot No. 89, Pocket 1, Jasola Vihar",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
          postalCode: "110025",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.540381,
          longitude: 77.247059,
        },
      },
    ],
  }

  const trainingData = [
    {
      institution: "Endoscopic Sinus & Skull Base Surgery:",
      focus: (<>Trained at <strong className="text-slate-900 font-bold">Graz University, Austria</strong>, under global masters of Rhinology.</>)
    },
    {
      institution: "Advanced Skull Base Surgery:",
      focus: (<>Fellowship from <strong className="text-slate-900 font-bold">Adelaide University, Australia</strong>, focusing on minimally invasive cranial procedures.</>)
    },
    {
      institution: "Sleep Medicine & Surgery:",
      focus: (<>Intensive specialization at the <strong className="text-slate-900 font-bold">Asian Sleep Centre, Singapore</strong>, for the treatment of Snoring and Obstructive Sleep Apnea (OSA).</>)
    },
    {
      institution: "Cochlear Implant & Otology:",
      focus: (<>Specialized training in <strong className="text-slate-900 font-bold">advanced hearing restoration</strong> and <strong className="text-slate-900 font-bold">micro-ear surgery</strong>.</>)
    },
  ];
  const specializationData = [
    { institution: "Rhinology:", focus: (<>Advanced <span className=" font-medium">FESS (Functional Endoscopic Sinus Surgery)</span>, Balloon Sinuplasty, and Septoplasty.</>) },
    { institution: "Skull Base Surgery:", country: "Australia", focus: (<>Endoscopic repair of CSF leaks and tumor removals.</>) },
    { institution: "Otology:", country: "Singapore", focus: (<>Management of chronic ear infections, Tympanoplasty, and <span >Cochlear Implantation</span>.</>) },
    { institution: "Snoring & Sleep Apnea:", country: "Specialized", focus: "Multi-level surgical and non-surgical interventions for sleep-disordered breathing." },
    { institution: "Pediatric ENT:", country: "Specialized", focus: "Specialized care for tonsillitis, adenoids, and congenital hearing issues in children." },
  ]
  const academic = [
    {
      institution: "MS (Otorhinolaryngology)",
      focus: "Netaji Subhash Chandra Bose Medical College, Jabalpur (2005)"
    },
    {
      institution: "MBBS",
      focus: "G.R. Medical College, Gwalior (1999)"
    },
    {
      institution: "Professional Memberships",
      subPoints: [
        <>Life Member of the <strong className="text-slate-800">Indian Otology Society</strong></>,
        <>Member of the <strong className="text-slate-800">Association of Otolaryngologists of India (AOI)</strong></>,
        <>Registered with the <strong className="text-slate-800">Delhi Medical Council (DMC)</strong></>
      ]
    },
  ];

  const trustPoints = [
    {
      title: <strong className="text-slate-800">Experience</strong>,
      desc: "Over 10,000+ successful ENT procedures performed.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="8" stroke="#1D9E75" strokeWidth="1.5" />
          <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: <strong className="text-slate-800">Innovation</strong>,
      desc: (
        <>
          A pioneer in minimally invasive <strong className="text-slate-900 font-bold">scarless</strong> sinus and ear surgeries.
        </>
      ),
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="8" stroke="#1D9E75" strokeWidth="1.5" />
          <path d="M10 2C10 2 7 6 7 10s3 8 3 8M10 2c0 0 3 4 3 8s-3 8-3 8M2 10h16" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: <strong className="text-slate-800">Patient-Centric Approach: </strong>,
      desc: "Tailored treatment plans that prioritize long-term recovery over temporary relief.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 3v14M3 10h14" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="3" y="3" width="14" height="14" rx="3" stroke="#1D9E75" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: <strong className="text-slate-800">Advanced Infrastructure:</strong>,
      desc: "Direct access to cutting-edge diagnostic and surgical facilities at ORL International Group of Hospitals.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 17S3 12.5 3 7a7 7 0 0114 0c0 5.5-7 10-7 10z" stroke="#1D9E75" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  const faqItems = [
    { type: "header", text: "Patient Testimonials & Case Success" },
    {
      q: "Who is Dr.(Prof.) Dhirendra Singh Kushwah?",
      a: "Dr. Dhirendra Singh Kushwah is a highly experienced Otorhinolaryngologist (ENT Specialist) with over 25 years of practice. He is the Head of the ENT Department at ORL International Group of Hospitals and a Senior Consultant at Saket City Hospital. He is globally trained in Austria and Australia, specializing in advanced sinus, skull base, and ear surgeries."
    },
    {
      q: "Where is Dr.(Prof.) Dhirendra Singh Kushwah’s clinic located?",
      a: "Dr.(Prof.) Dhirendra Singh Kushwah sees patients at multiple convenient locations in Delhi and NCR: Jasola: ORL International Group of Hospitals, Plot No. 89, Pocket 1. CR Park: J-1981, Bipin Chandra Pal Marg (Near Market No. 1). Arjun Nagar: ENT & Gynae Clinic, 19-C, Safdarjung Enclave. Other Locations: He also consults in Palwal and Dhampur."
    },
    {
      q: "What services does Dr.(Prof.) Dhirendra Singh Kushwah provide?",
      a: "He provides comprehensive diagnostic and surgical care for all ear, nose, and throat conditions. Key services include Cochlear Implants, Sinus & Allergy management, Skull Base Surgery, Hearing Loss evaluations, Snoring & Sleep Apnea treatment, and Pediatric ENT care."
    },
    { type: "header", text: "Appointments & Logistics" },
    {
      q: "How can I schedule an appointment with Dr.(Prof.) Dhirendra Singh Kushwah?",
      a: "You can book an appointment by calling our central helpline at +91-9311449825 or by using the online booking system on our official website. Walk-in appointments may be available, but scheduling in advance is recommended to minimize wait times."
    },
    {
      q: "Does Dr. Dhirendra Singh Kushwah offer telemedicine consultations?",
      a: "Yes, we offer virtual video consultations for patients who cannot visit the clinic in person. To schedule a virtual visit, please contact our office or select the 'Telemedicine' option on our website."
    },
    {
      q: "What should I bring to my first appointment?",
      a: "Please bring your government ID, previous medical records (CT scans, MRIs, or discharge summaries), a list of current medications, and your insurance card if applicable."
    },
    {
      q: "What are the office hours?",
      a: "Dr.(Prof.) Dhirendra Singh Kushwah’s services are generally available between 9:00 AM and 9:00 PM, 7 days a week, though timings vary by location. (e.g., Jasola: 9:30 AM – 3:30 PM; CR Park: 6:30 PM – 9:00 PM)."
    },


    { type: "header", text: "Surgical & Post-Care FAQ" },
    {
      q: "Does Dr.(Prof.) Dhirendra Singh Kushwah perform surgeries?",
      a: "Yes. Dr. Kushwah is a surgical expert specializing in minimally invasive procedures, including 'scarless' Functional Endoscopic Sinus Surgery (FESS), Micro-ear surgery, and Sleep Apnea corrective surgery."
    },
    {
      q: "What should I expect after my treatment or surgery?",
      a: "Recovery varies by procedure. Dr.(Prof.) Dhirendra Singh Kushwah provides a detailed post-operative plan, including medication schedules, physical activity restrictions, and scheduled follow-up visits to monitor your healing."
    },

    { type: "header", text: "Payments & Insurance" },
    {
      q: "Does Dr.(Prof.) Dhirendra Singh Kushwah accept insurance?",
      a: "Yes, we accept a wide variety of insurance plans and TPA providers. Because coverage varies, we recommend contacting our billing department at 011-35667722 to verify your specific plan before your visit."
    },
    {
      q: "What payment methods are accepted?",
      a: "For your convenience, we accept Cash, Credit/Debit cards, UPI (GPay/PhonePe), and direct insurance billing for covered procedures."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative about-banner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 col-lg-6 condition-para" />
          </div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--background, #fff) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)" }} />
        </div>
      </section>

      <section className="py-10 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/HItL-Z0U82g?si=kB-u3zVi-1lMqdug"
                title="Dr.(Prof.) Dhirendra Singh Kushwah – Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h1 className="text-xs tracking-widest uppercase text-teal-500 font-medium">
                  About the doctor
                </h1>
                {/* Social Icons - Now in deep black/gray-900 */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/dr-prof-dhirendra-singh-kushwah-87735a321/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 hover:text-blue-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} strokeWidth={3} />
                  </a>
                  <a
                    href="https://x.com/DrDhirendraENT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 hover:text-slate-600 transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <X size={18} strokeWidth={3} />
                  </a>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 leading-snug">
                Expertise Rooted in Experience: Over 25 Years of Clinical Excellence
              </h2>

              {/* Specialty Bullets */}
              <ul className="space-y-1.5 list-none">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full" />
                  <span className="font-extrabold text-slate-900 text-base">Cochlear Implant & Endoscopic Sinus</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full" />
                  <span className="font-extrabold text-slate-900 text-base">Head and Neck Surgeon</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full" />
                  <span className="font-extrabold text-slate-900 text-base">Specialist in OSA (Sleep) Surgery</span>
                </li>
              </ul>

              <div className="w-12 h-0.5 bg-teal-600 rounded mt-2" />

              <p className="text-slate-600 leading-relaxed">
                Dr. Dhirendra Singh Kushwah is a distinguished{" "}
                <a href="/" className="text-teal-600 underline underline-offset-2">
                  <strong className="font-bold">Senior Consultant ENT Specialist & Skull Base Surgeon</strong>
                </a>{" "}
                based in Delhi. With a career spanning more than two decades, he has established himself as a pioneer in advanced Otorhinolaryngology, dedicated to providing precision-based surgical outcomes and compassionate patient care.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Currently, Dr.(Prof.) Dhirendra Singh Kushwah serves as the <strong className="text-slate-900">Head of the ENT Department at ORL International Hospital, Jasola</strong>. His clinical journey is defined by a commitment to mastering the most complex disorders of the ear, nose, and throat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start rounded-2xl p-6 md:p-10 ">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-slate-800">
                Global Training &amp; Specialized Fellowships
              </h2>
              <div className="w-12 h-0.5 bg-teal-600 rounded" />
              <p className="text-slate-600 leading-relaxed text-semibold">
                To bring world-class ENT care to India, Dr. Kushwah has pursued extensive international training and fellowships at some of the world’s most prestigious medical institutions:
              </p>
              <ul className="flex flex-col divide-y divide-gray-100 mt-1 ">
                {trainingData.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 py-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                    <div>
                      <p className=" text-slate-600 text-semibold">
                        {item.institution}{" "}
                      </p>
                      <p className="text-md text-slate-500 text-semibold">{item.focus}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-slate-800">
                Areas of Clinical Specialization
              </h2>
              <div className="w-12 h-0.5 bg-teal-600 rounded" />
              <p className="text-slate-600 leading-relaxed text-semibold">
                Dr.(Prof.) Dhirendra Singh Kushwah utilizes state-of-the-art technology, including high-definition endoscopy and navigation systems, to treat a wide spectrum of ENT conditions:
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <ul className="flex flex-col divide-y divide-gray-100 mt-1">
                  {specializationData.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 py-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                      <div>
                        <p className="text-md text-slate-600">
                          {item.institution}{" "}
                        </p>
                        <p className="text-md text-slate-500">{item.focus}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-slate-800">
                Academic Background &amp; Professional Affiliations
              </h2>
              <div className="w-12 h-0.5 bg-teal-600 rounded" />
              <p className="text-slate-600 leading-relaxed text-semibold">
                Trust is built on a foundation of rigorous academic achievement. Dr.(Prof.) Dhirendra Singh Kushwah’s credentials include:
              </p>
              <ul className="flex flex-col divide-y divide-gray-100 mt-1">
                {academic.map((item, i) => (
                  <li key={i} className="flex flex-col py-3">
                    <div className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-slate-600">
                          {item.institution}
                        </p>
                        {item.focus && (
                          <p className="text-md text-slate-500 mt-0.5">{item.focus}</p>
                        )}
                      </div>
                    </div>
                    {item.subPoints && (
                      <ul className="ml-9 mt-2 flex flex-col gap-2">
                        {item.subPoints.map((point, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                            <p className="text-md text-slate-500">{point}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <DoctorImage
              src="../images/dherendra_patient.png"
              alt="Dr. Dhirendra Singh Kushwah – ENT Specialist"
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-slate-800 leading-snug">
                Why Choose Dr.(Prof.) Dhirendra Singh Kushwah?
              </h2>
              <div className="w-12 h-0.5 bg-teal-500 rounded" />
              <div className="flex flex-col gap-5 mt-2">
                {trustPoints.map((point, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-teal-900 border border-teal-700 flex items-center justify-center flex-shrink-0">
                      {point.icon}
                    </div>
                    <div>
                      <p className="text-slate-600 leading-relaxed text-md mb-1">{point.title}</p>
                      <p className="text-slate-600 leading-relaxed text-md leading-relaxed">{point.desc}</p>
                    </div>
                  </div>


                ))}
                <div className="mt-6 relative p-6 bg-white border-l-4 border-teal-500 rounded-r-2xl shadow-sm italic">
                  <div className="absolute top-2 right-4 text-teal-100">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="" />
                    </svg>
                  </div>

                  <p className="text-slate-600 text-md leading-loose relative z-10">
                    "Dr. Kushwah is not just an expert surgeon but a <strong className="text-slate-900">great listener</strong>. My chronic sinus issue, which lasted for 10 years, was resolved in one sitting. His international experience truly shows in his approach."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-slate-500">PR</div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">— Patient Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion faqItems={faqItems} />

      <section className="py-10 px-4 md:px-8 bg-teal-600">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Book a Consultation with Dr.(Prof.) Dhirendra Singh Kushwah
          </h2>
          <p className="text-teal-100 max-w-2xl text-sm leading-relaxed">
            Dr.(Prof.) Dhirendra Singh Kushwah's mission is simple: to provide safe, effective, and accessible ENT care that truly
            transforms lives. With over 10,000+ successful procedures and internationally trained expertise,
            he ensures every patient receives the highest standard of precision-based medical attention.
            If you are looking for a knowledgeable, experienced, and compassionate{" "}
            <a href="/" className="text-white font-semibold underline decoration-teal-200">ENT Doctor in India</a>, Dr. Dhirendra Singh Kushwah — Head of ENT at ORL
            International Hospital — stands as a name you can trust for complete ENT care with confidence.
          </p>
          {/* <a
            href="tel:+919311449825"
            className="mt-2 inline-block bg-white text-teal-700 font-semibold px-8 py-3 shadow hover:bg-teal-50 transition-colors text-sm rounded-md"
          >
            Book a Consultation Today
          </a> */}
        </div>
      </section>

    </>
  )
}