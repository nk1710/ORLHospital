import ContactForm from "@/components/forms/ContactForm";
import ConditionsSection from "@/components/sections/ConditionsSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";

const Adddres_one = () => (
  <div className="panel panel-default border rounded group rounded-xl">
    <div className="panel-heading p-3 border-b bg-teal-600 text-white rounded-xl">
      <h4 className="panel-title">
        <a href="#collapseOne">ORL International Group of Hospitals</a>
      </h4>
    </div>
    <div id="collapseOne" className="hidden group-hover:block">
      <div className="panel-body gray-bg p-3">
        <iframe
          src="https://maps.google.com/maps?q=ORL+International+Group+of+Hospitals+Jasola+Vihar+New+Delhi+110025&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[140px] border-0"></iframe>
        <p><strong>ORL International Group of Hospitals - Jasola</strong></p>
        <p><strong>Plot no. 89, Pocket 1, Jasola Vihar, New Delhi - 110025</strong></p>
        <p><strong>Email:</strong> <a href="mailto:drdhirendrasinghent@gmail.com">drdhirendrasinghent@gmail.com</a></p>
        <p><strong>Phone:</strong> +919311449825, 011-35667722, 35005471, 35103410</p>
        <p><strong>Availability:</strong> Mon-Sun 9:30 AM to 3:00 PM</p>
      </div>
    </div>
  </div>
)

const Adddres_two = () => (
  <div className="panel panel-default border rounded group rounded-xl">
    {/* <div className="panel-heading p-3 border-b bg-teal-600 text-white rounded-xl">
      <h4 className="panel-title">
        <a href="#collapseTwo">Gynae and ENT Clinic in Safdarjung Enclave</a>
      </h4>
    </div> */}
    <div id="collapseTwo" className="hidden group-hover:block">
      <div className="panel-body gray-bg p-3">
        <iframe
          src="https://maps.google.com/maps?q=19+C+Basement+Arjun+Nagar+Safdarjung+Enclave+New+Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[140px] border-0"></iframe>
        <p><strong>Gynae and ENT Clinic</strong></p>
        <p><strong>19 C Basement, Arjun Nagar, Near Sukhmani Hospital, Safdarjung Enclave, New Delhi 29</strong></p>
        <p><strong>Email:</strong> <a href="mailto:drdhirendrasinghent@gmail.com">drdhirendrasinghent@gmail.com</a></p>
        <p><strong>Phone:</strong> +91-9311449825, 011-40199203</p>
        <p><strong>Availability:</strong> Mon-Sun 4:00 PM to 5:00 PM</p>

      </div>
    </div>
  </div>
)

const Adddres_three = () => (
  <div className="panel panel-default border rounded-xl">
    <div className="panel-heading p-3 border-b bg-teal-600 text-white rounded-t-xl">
      <h4 className="panel-title">
        <a href="#collapseThree">ORL International Clinic - CR Park</a>
      </h4>
    </div>
    <div id="collapseThree">
      <div className="panel-body gray-bg p-3">
        <iframe
          src="https://maps.google.com/maps?q=ORL+International+Clinic+CR+Park+New+Delhi+110019&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[140px] border-0"></iframe>
        <p><strong>ORL International Clinic</strong></p>
        <p className="mt-3"><strong>J-1981, Near Market No 1, Below ICICI Bank, Bipin Chandra Pal Marg, CR
          Park-110019</strong></p>
        <p><strong>Email:</strong> <a href="mailto:drdhirendrasinghent@gmail.com">drdhirendrasinghent@gmail.com</a>
        </p>
        <p><strong>Phone:</strong> 91-9311449825, 011-40224820</p>
        <p><strong>Availability:</strong> Mon-Sun 6:30 PM to 9:00 PM</p>
      </div>
    </div>
  </div>
)
export async function generateMetadata() {
  return {
    title: "Schedule Your ENT Consultation in Delhi – Dr.(Prof.) Dhirendra Singh Kushwah",
    description:
      "Delhi’s trusted ENT specialist, Dr.(Prof.) Dhirendra Singh Kushwah. Clinics in CR Park, Jasola & Arjun Nagar. Call +91-9311449825 to schedule your appointment today.",
    keywords: [
      "ENT Doctor Delhi",
      "ENT Specialist Delhi",
      "Best ENT Doctor Delhi",
      "Best ENT Doctor in South Delhi",
      "Best ENT Doctor in Chittaranjan Park Delhi",
      "Best ENT Doctor in Masjid Moth Delhi",
      "Best ENT Doctor in Greater Kailash",
      "Best ENT Doctor in Kailash Colony Delhi",
      "Best ENT Doctor in Kalkaji Delhi",
      "Best ENT Doctor in Chirag Delhi",
      "Best ENT Doctor in Sheikh Sarai Delhi",
      "Best ENT Doctor in Saket Delhi",
      "Best ENT Doctor in Malviya Nagar Delhi",
      "Best ENT Doctor in Hauz Khas Delhi",
      "Best ENT Doctor in Panchsheel Enclave Delhi",
      "Best ENT Doctor in DDA Sangam Vihar",
      "Best ENT Doctor in Tara Apartment Delhi",
      "Best ENT Doctor in South Ex Delhi",
      "Best ENT Doctor in Bhikhaji Kama Place Delhi",
      "Best ENT Doctor in Sarojani Nagar Delhi",
      "ENT Consultation India",
      "Book ENT Appointment",
      "CR Park ENT Clinic",
      "Jasola ENT Clinic",
      "Arjun Nagar ENT Clinic",
      "Skull Base Surgery",
      "Cochlear Implant"
    ],
    authors: [{ name: "Dr.(Prof.) Dhirendra Singh kushwah" }],
    alternates: {
      canonical: "https://www.drdhirendrasinghkushwah.com/contact",
    },
    openGraph: {
      title: "Schedule Your ENT Consultation in Delhi – Dr.(Prof.) Dhirendra Singh Kushwah",
      description:
        "Book your appointment with Delhi’s trusted ENT specialist, Dr.(Prof.) Dhirendra Singh Kushwah. Clinics in CR Park, Jasola & Arjun Nagar. Call +91-9311449825 today.",
      url: "https://www.drdhirendrasinghkushwah.com/contact",
      siteName: "Dr.(Prof.) Dhirendra Singh kushwah ENT",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: "Schedule Your ENT Consultation in Delhi – Dr.(Prof.) Dhirendra Singh Kushwah",
      description:
        "Book your appointment with Delhi’s trusted ENT specialist. Clinics in CR Park, Jasola & Arjun Nagar. Call +91-9311449825 now.",
    },
  };
}

export default async function ContactPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "Physician",
        "@id": "https://www.drdhirendrasinghkushwah.com/#physician",
        "name": "Dr.(Prof.) Dhirendra Singh Kushwah",
        "alternateName": "Best ENT Surgeon in Delhi",
        "image": "https://www.drdhirendrasinghkushwah.com/images/gallery/11.webp",
        "url": "https://www.drdhirendrasinghkushwah.com/",
        "telephone": "+91-9311449825",
        "priceRange": "₹₹₹",
        "medicalSpecialty": "Otolaryngology",
        "jobTitle": "ENT Surgeon",
        "sameAs": [
          "https://www.facebook.com/people/Dr-Dhirendra-Singh-Kushwah/61560817359879/",
          "https://www.instagram.com/dr.dhirendrasinghkushwah"
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "Delhi"
          },
          {
            "@type": "State",
            "name": "Haryana"
          },
          {
            "@type": "State",
            "name": "Uttar Pradesh"
          }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9311449825",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["Hindi", "English"]
        },
        "availableService": [
          {
            "@type": "MedicalProcedure",
            "name": "Septoplasty"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Sinus Surgery"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Tonsillectomy"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Endoscopic Sinus Surgery"
          }
        ]
      },

      {
        "@type": "MedicalClinic",
        "name": "Dr.(Prof.) Dhirendra Singh Kushwah ENT Clinic - CR Park",
        "telephone": "+91-9311449825",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "J-1981, Near Market No 1, Below ICICI Bank, Bipin Chandra Pal Marg",
          "addressLocality": "CR Park",
          "addressRegion": "Delhi",
          "postalCode": "110019",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.540381",
          "longitude": "77.247059"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
          ],
          "opens": "18:00",
          "closes": "20:00"
        }
      },

      {
        "@type": "MedicalClinic",
        "name": "Dr.(Prof.) Dhirendra Singh Kushwah ENT Clinic - Jasola",
        "telephone": "+91-9311449825",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No. 89, Pocket-1, Near Living Style Mall, Jasola Vihar",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110025",
          "addressCountry": "IN"
        }
      },

      {
        "@type": "MedicalClinic",
        "name": "Dr.(Prof.) Dhirendra Singh Kushwah ENT Clinic - Arjun Nagar",
        "telephone": "+91-9311449825",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "19 C Basement Arjun Nagar, Near Sukhmani Hospital, Safdarjung Enclave",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110029",
          "addressCountry": "IN"
        }
      },

      {
        "@type": "MedicalClinic",
        "name": "Dr.(Prof.) Dhirendra Singh Kushwah ENT Clinic - Dhampur",
        "telephone": "+91-9311449825",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near RSM Tiraha, Front of Pari Farm House, Muradabad Road",
          "addressLocality": "Dhampur",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "246761",
          "addressCountry": "IN"
        }
      },

      {
        "@type": "MedicalClinic",
        "name": "Dr.(Prof.) Dhirendra Singh Kushwah ENT Clinic - Palwal",
        "telephone": "+91-9311449825",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Aasha Tower, Ground Floor, New Sohna Road, Ambedkar College",
          "addressLocality": "Palwal",
          "addressRegion": "Haryana",
          "postalCode": "121103",
          "addressCountry": "IN"
        }
      },

      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can I book an appointment with Dr.(Prof.) Dhirendra Singh Kushwah?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book an appointment by calling +91-9311449825 or visiting the contact page of the official website."
            }
          },
          {
            "@type": "Question",
            "name": "Which areas does Dr.(Prof.) Dhirendra Singh Kushwah serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dr.(Prof.) Dhirendra Singh Kushwah provides ENT consultation services in Delhi, Haryana and Uttar Pradesh including CR Park, Jasola, Arjun Nagar, Dhampur and Palwal."
            }
          },
          {
            "@type": "Question",
            "name": "What are the clinic timings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The clinic is generally open Monday to Saturday between 6 PM and 8 PM. Patients are advised to confirm timings before visiting."
            }
          }
        ]
      },

      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ENT Facilities",
            "item": "https://www.drdhirendrasinghkushwah.com/facilities.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Book Appointment",
            "item": "https://www.drdhirendrasinghkushwah.com/contact.html"
          }
        ]
      }

    ]
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <DoctorsSection />
      <ConditionsSection />
      <FacilitiesSection />
      <section className="w-full">
        <div className="max-w-6xl mx-auto py-8 px-4">
          <div className="flex flex-wrap">

            {/* LEFT SIDE */}
            <div className="w-full md:w-2/3 px-4 mb-4">
              <div className="left-side">
                <h1 className="text-3xl title-bottom-line text-teal-700 border-b mb-4 pb-4">
                  <strong>APPOINTMENT REQUEST FORM</strong>
                </h1>

                <ContactForm />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-1/3 px-4">
              <div className="side-bar">
                <h2 className="text-3xl text-teal-700 title-bottom-line border-b mb-4 pb-4">
                  <strong>CLINIC</strong> LOCATIONS
                </h2>

                <div id="accordion" className="space-y-4">
                  <Adddres_one />
                  <Adddres_two />
                  <Adddres_three />

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}