import '../../components/home/styles/home.css';
import HeroSlider from "@/components/homee/HeroSlider";
import HospitalQuickActions from "@/components/home/components/HospitalQuickActions";
import GMBBar from "@/components/home/components/GMBBar/GMBBar";
import HospitalStats from "@/components/home/components/HospitalStats";
import Departments from "../../components/homee/Departments";
import About from "@/components/home/components/About/About";
import Specialities from "@/components/home/components/Specialities/Specialities";
import ProcedureTable from "@/components/home/components/ProcedureTable/ProcedureTable";
import Locations from "@/components/home/components/Locations/Locations";
import Conditions from "@/components/home/components/Conditions/Conditions";
import WhyChoose from "@/components/home/components/WhyChoose/WhyChoose";
import Testimonials from "@/components/home/components/Testimonials/Testimonials";
import FAQ from "@/components/home/components/FAQ/FAQ";
import CTASection from "@/components/home/components/CTASection/CTASection";
import ExperienceCarousel from "@/components/homee/ExperienceCarousel";


/* 
<title>Dr. Dhirendra Singh Kushwah: Best ENT Specialist in Delhi | Ear Nose Throat Surgeon</title>
    <meta name="robots" content="index, follow">
<meta name="language" content="English">
<meta name="revisit-after" content="1 days">
    <meta property="og:title" content="Dr. Dhirendra Singh Kushwah – Best ENT Specialist in Delhi | Ear Nose Throat Surgeon">
<meta property="og:description" content="Dr. Dhirendra Singh Kushwah is a leading ENT specialist in Delhi with 25+ years experience in sinus surgery, cochlear implant, hearing loss, vertigo & snoring treatment. Book appointment today.">
<meta property="og:image" content="https://www.drdhirendrasinghkushwah.in/images/gallery/11.webp">
<meta property="og:url" content="https://www.drdhirendrasinghkushwah.in/">
<meta property="og:type" content="website">
    <meta name="author" content="Dr. Dhirendra Singh kushwah">
    <meta name="description"
        content="Dr. Dhirendra Singh Kushwah is a leading ENT specialist in Delhi with 25+ years experience in sinus surgery, cochlear implant, hearing loss, vertigo & snoring treatment. Book appointment today.">
    <meta name="keywords"
        content="ENT specialist in Delhi, ENT doctor in Delhi, ENT surgeon in Delhi, Dr Dhirendra Singh Kushwah, sinus surgery Delhi, cochlear implant Delhi, hearing loss treatment Delhi, vertigo treatment Delhi">
    <!-- Canonical -->
    <link rel="canonical" href="https://www.drdhirendrasinghkushwah.in/">
*/
export async function generateMetadata() {
  return {
    title: "Best ENT Doctor in South Delhi & Jasola | Dr. Dhirendra Singh Kushwah",
    description:
      "Consult Dr. (Prof.) Dhirendra Singh Kushwah, top ENT surgeon in South Delhi & Jasola Vihar. 25+ yrs expertise in sinus, stitchless ear surgery & hearing care.",
    keywords: [
      "best ent doctor near me",
      "best ent doctor in south delhi",
      "best ent doctor in new delhi",
      "best ent specialist near me",
      "ent doctor near me",
      "top ent doctor in new delhi",
      "best ent doctor in jasola",
      "best ent doctor in cr park",
      "best ent doctor in safdarjung enclave",
      "best ent doctor near jasola",
      "best ent doctor in jasola vihar",
      "best ent surgeon in south delhi",
      "ENT specialist in Delhi",
      "ENT doctor in Delhi",
      "ENT surgeon in Delhi",
      "Dr Dhirendra Singh Kushwah",
      "sinus surgery Delhi",
      "cochlear implant Delhi",
      "hearing loss treatment Delhi",
      "vertigo treatment Delhi",
      "painfree septoplasty Delhi",
      "stitchless ear surgery Delhi",
      "tympanoplasty surgeon Delhi",
      "FESS sinus surgery Delhi",
      "pediatric ENT doctor Delhi",
      "ENT clinic Jasola",
      "ENT specialist CR Park",
      "ENT surgeon Safdarjung Enclave"
    ],
    authors: [{ name: "Dr. Dhirendra Singh kushwah" }],
    robots: "index, follow",
    language: "English",
    revisitAfter: "1 days",
    alternates: {
      canonical: "https://www.drdhirendrasinghkushwah.in/"
    },
    openGraph: {
      title: "Best ENT Specialist in Delhi | Dr. Dhirendra Singh Kushwah",
      description:
        "Consult Dr. Dhirendra Singh Kushwah, top ENT specialist & surgeon in Delhi (Jasola & CR Park). Expert care for sinus, ear, hearing & vertigo.",
      url: "https://www.drdhirendrasinghkushwah.in/",
      type: "website",
      images: [
        {
          url: "https://www.drdhirendrasinghkushwah.in/images/gallery/11.webp",
          width: 1200,
          height: 630,
          alt: "Dr. Dhirendra Singh Kushwah ENT Specialist Delhi"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Dr. (Prof.) Dhirendra Singh Kushwah — Best ENT Specialist & Surgeon in Delhi",
      description: "25+ Years Experience in Stitchless Ear Surgery, Packless Septoplasty, Cochlear Implants & FESS. South Delhi.",
      images: ["https://www.drdhirendrasinghkushwah.in/images/gallery/11.webp"]
    }
  }
};

export default async function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "WebSite",
        "@id": "https://www.drdhirendrasinghkushwah.in/#website",
        "url": "https://www.drdhirendrasinghkushwah.in/",
        "name": "Dr. Dhirendra Singh Kushwah ENT Specialist in Delhi",
        "publisher": { "@id": "https://www.drdhirendrasinghkushwah.in/#physician" }
      },

      {
        "@type": "Physician",
        "@id": "https://www.drdhirendrasinghkushwah.in/#physician",
        "name": "Dr. Dhirendra Singh Kushwah",
        "alternateName": "Dr. Dhirendra Singh Kushwah ENT Specialist in Delhi",
        "jobTitle": "Top ENT Specialist & Surgeon in Delhi",
        "medicalSpecialty": [
          "https://schema.org/Otolaryngologic",
          "Otolaryngology",
          "Head and Neck Surgery",
          "Pediatric Otolaryngology",
          "ENT Specialist & Surgeon"
        ],
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["#about-h2", "#proc-h2", "#loc-h2", ".faq-question-title"]
        },
        "description": "Dr. Dhirendra Singh Kushwah is a leading ENT specialist in Delhi with 25+ years experience in sinus surgery, cochlear implant, hearing loss, vertigo & snoring treatment. Book appointment today",
        "affiliation": [
          { "@id": "https://www.drdhirendrasinghkushwah.in/#clinic-crpark" }
        ],
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Jiwaji University",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gwalior",
            "addressCountry": "IN"

          }

        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "ratingCount": "725",
          "reviewAspect": "patient satisfaction"
        },
        "knowsAbout": [
          "Best ENT Specialist in Delhi",
          "PainFree Stitchless Ear Surgery in Delhi",
          "PainFree Packless Nose Surgery in Delhi",
          "Chronic Otitis Media in Delhi",
          "Acute Otitis Media in Delhi",
          "Ear Discharge in Delhi",
          "Otitis Externa in Delhi",
          "Glue Ear (Otitis Media with Effusion) in Delhi",
          "Ear Wax Impaction in Delhi",
          "Perforated Ear Drum  in Delhi",
          "Otomycosis (Fungal Ear Infection)",
          "Cholesteatoma",
          "Foreign Body Removal",
          "Otosclerosis",
          "Microtia / Aplastic Ear",
          "Hearing Loss & Speech-Related Issues",
          "Conductive Hearing Loss",
          "Sensorineural Hearing Loss",
          "Sudden Hearing Loss",
          "Speech & Language Delay",
          "Articulation Disorders",
          "Stuttering & Voice Disorders",
          "Feeding & Swallowing Disorders",
          "Nasal Polyps",
          "Allergic & Non-Allergic Rhinitis",
          "Sinusitis",
          "Nasal Tumours",
          "Deviated Nasal Septum",
          "Nose Deformity",
          "Nasal Bleeding (Epistaxis)",
          "Hoarseness",
          "Laryngitis",
          "Vocal Nodules",
          "Vocal Polyp",
          "Vocal Cord Paralysis",
          "Tonsillitis",
          "Adenoids",
          "Laryngopharyngeal Reflux",
          "Pharyngitis",
          "Vocal Cord Tumours",
          "Vertigo",
          "BPPV",
          "Meniere’s Disease",
          "Labyrinthitis",
          "Vestibular Neuritis",
          "Vestibular Schwannoma",
          "Tinnitus",
          "Deafness & Speech Delay",
          "Allergic Rhinitis",
          "Snoring & Sleep Apnea",
          "Choanal Atresia",
          "Laryngomalacia",
          "Ear Malformations (Microtia)",
          "Nose Bleeds",
          "Vocal Cord Palsy",
          "Subglottic Stenosis",
          "Recurrent Respiratory Papillomatosis",
          "Thyroid Disorders",
          "Parotid Gland Diseases",
          "Salivary Stones",
          "Lymph Node Enlargements",
          "Neck Abscess",
          "Thyroglossal Cyst",
          "Branchial Cyst",
          "Lymphangioma",
          "Head & Neck Cancer Surgery",
          "Sleep Disorders",
          "Cochlear Implant Services",
          "Pituitary Tumours",
          "CSF Leak",
          "Nasopharyngeal Angiofibroma",
          "Glomus Tumours"
        ],
        "url": "https://www.drdhirendrasinghkushwah.in/",
        "image": "https://www.drdhirendrasinghkushwah.in/images/gallery/11.webp",
        "telephone": "+91-9311449825",
        "priceRange": "₹₹₹",
        "sameAs": [
          "https://www.facebook.com/people/Dr-Dhirendra-Singh-Kushwah/61560817359879/",
          "https://www.instagram.com/dr.dhirendrasinghkushwah"
        ],
        "areaServed": [
          { "@type": "City", "name": "Delhi" },
          { "@type": "City", "name": "CR Park,Delhi" },
          { "@type": "City", "name": "Jasola Vihar, Delhi" },
          { "@type": "City", "name": "Safadarjung Enclave, Delhi" },
          { "@type": "State", "name": "Haryana" },
          { "@type": "State", "name": "Uttar Pradesh" }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9311449825",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["Hindi", "English"]
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "ENT Treatments",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Sinus Surgery"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalProcedure",
                "name": "Cochlear Implant"
              }
            }
          ]
        },
        "availableService": [
          { "@type": "MedicalProcedure", "name": "Septoplasty" },
          { "@type": "MedicalProcedure", "name": "BAHA (Bone Anchored Hearing Aid)" },
          { "@type": "MedicalProcedure", "name": "Tympanoplasty" },
          { "@type": "MedicalProcedure", "name": "Stapedectomy" },
          { "@type": "MedicalProcedure", "name": "Ossiculoplasty" },
          { "@type": "MedicalProcedure", "name": "Cochlear Implant Surgery" },
          { "@type": "MedicalProcedure", "name": "Mastoidectomy Surgery" },
          { "@type": "MedicalProcedure", "name": "Facial Nerve Surgery" },
          { "@type": "MedicalProcedure", "name": "Facial Nerve Decompression" },
          { "@type": "MedicalProcedure", "name": "Lateral Skull Tumor Removal" },
          { "@type": "MedicalProcedure", "name": "Rhinoplasty" },
          { "@type": "MedicalProcedure", "name": "Balloon Sinoplasty" },
          { "@type": "MedicalProcedure", "name": "Turbinoplasty" },
          { "@type": "MedicalProcedure", "name": "Nasal Polypectomy" },
          { "@type": "MedicalProcedure", "name": "Functional Endoscopic Sinus Surgery" },
          { "@type": "MedicalProcedure", "name": "Treatment of Rihno-orbital Mucormycosis (black Fungus)" },
          { "@type": "MedicalProcedure", "name": "Endoscopic Angiofibroma Excision" },
          { "@type": "MedicalProcedure", "name": "CSF Repair" },
          { "@type": "MedicalProcedure", "name": "Anterior Skull Base Tumor Removal" },
          { "@type": "MedicalProcedure", "name": "Orbital Decompression" },
          { "@type": "MedicalProcedure", "name": "Laser ENT" },
          { "@type": "MedicalProcedure", "name": "Thyroplasty" },
          { "@type": "MedicalProcedure", "name": "Tracheostomy" },
          { "@type": "MedicalProcedure", "name": "Adenoidectomy" },
          { "@type": "MedicalProcedure", "name": "Tonsillectomy" },
          { "@type": "MedicalProcedure", "name": "Laryngectomy" },
          { "@type": "MedicalProcedure", "name": "Nasal CSF Leak Repair" },
          { "@type": "MedicalProcedure", "name": "Head and Neck Surgery" },
          { "@type": "MedicalProcedure", "name": "Sleep Apnea and Snoring" },
          { "@type": "MedicalProcedure", "name": "Painfree Stitchless Ear Surgery" },
          { "@type": "MedicalProcedure", "name": "Painfree Packless Nose Surgery" },
          { "@type": "MedicalProcedure", "name": "Sinus Surgery" },
          { "@type": "MedicalProcedure", "name": "Tonsillectomy" },
          { "@type": "MedicalProcedure", "name": "Endoscopic Sinus Surgery" }
        ],
        "worksFor": [
          { "@id": "https://www.drdhirendrasinghkushwah.in/#clinic-crpark" },
          { "@id": "https://www.drdhirendrasinghkushwah.in/#clinic-jasola" },
          { "@id": "https://www.drdhirendrasinghkushwah.in/#clinic-arjun" },
          { "@id": "https://www.drdhirendrasinghkushwah.in/#clinic-dhampur" },
          { "@id": "https://www.drdhirendrasinghkushwah.in/#clinic-palwal" }
        ]
      },

      {
        "@type": "MedicalClinic",
        "@id": "https://www.drdhirendrasinghkushwah.in/#clinic-crpark",
        "name": "Dr Dhirendra Singh Kushwah ENT Clinic - CR Park",
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
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "18:00",
          "closes": "20:00"
        }
      },

      {
        "@type": "MedicalClinic",
        "@id": "https://www.drdhirendrasinghkushwah.in/#clinic-jasola",
        "name": "Dr Dhirendra Singh Kushwah ENT Clinic - Jasola",
        "telephone": "+91-9311449825",
        "priceRange": "₹₹",
        "image": "https://www.drdhirendrasinghkushwah.in/images/gallery/11.webp",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "ratingCount": "725",
          "reviewCount": "725"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No. 89, Pocket-1, Near Living Style Mall, Jasola Vihar",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110025",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.535200",
          "longitude": "77.270000"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "20:00"
        }
      },

      {
        "@type": "MedicalClinic",
        "@id": "https://www.drdhirendrasinghkushwah.in/#clinic-arjun",
        "name": "Dr Dhirendra Singh Kushwah ENT Clinic - Arjun Nagar",
        "telephone": "+91-9311449825",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "19 C Basement Arjun Nagar, Near Sukhmani Hospital, Safdarjung Enclave",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110029",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.557000",
          "longitude": "77.203500"
        }
      },

      {
        "@type": "MedicalClinic",
        "@id": "https://www.drdhirendrasinghkushwah.in/#clinic-dhampur",
        "name": "Dr Dhirendra Singh Kushwah ENT Clinic - Dhampur",
        "telephone": "+91-9311449825",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near RSM Tiraha, Front of Pari Farm House, Muradabad Road",
          "addressLocality": "Dhampur",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "246761",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "29.172500",
          "longitude": "78.510500"
        }
      },

      {
        "@type": "MedicalClinic",
        "@id": "https://www.drdhirendrasinghkushwah.in/#clinic-palwal",
        "name": "Dr Dhirendra Singh Kushwah ENT Clinic - Palwal",
        "telephone": "+91-9311449825",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Aasha Tower, Ground Floor, New Sohna Road, Ambedkar College",
          "addressLocality": "Palwal",
          "addressRegion": "Haryana",
          "postalCode": "121103",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.150000",
          "longitude": "77.325000"
        }
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://www.drdhirendrasinghkushwah.in/#breadcrumbs",
        "itemListElement": [
          { "@type": "ListItem", "position": 2, "name": "Book Appointment", "item": "https://www.drdhirendrasinghkushwah.in/contact.html" },
          { "@type": "ListItem", "position": 4, "name": "Best Septoplasty (Pain free pack less septoplasty) Surgery In Delhi", "item": "https://www.drdhirendrasinghkushwah.in/septoplasty.html" },
          { "@type": "ListItem", "position": 5, "name": "Cochlear and Hearing Implants Available in Delhi", "item": "https://www.drdhirendrasinghkushwah.in/cochlear-hearing.html" },
          { "@type": "ListItem", "position": 6, "name": "Children (Paediatric) ENT Doctors In Delhi", "item": "https://www.drdhirendrasinghkushwah.in/diagnchildern.html" },
          { "@type": "ListItem", "position": 7, "name": "Stapedotomy Surgery In Delhi, India", "item": "https://www.drdhirendrasinghkushwah.in/stapedo.html" },
          { "@type": "ListItem", "position": 8, "name": "Voice And Throat (Laryngology) Surgery In Delhi", "item": "https://www.drdhirendrasinghkushwah.in/voice-throat.html" }
        ]
      },

      {
        "@type": "MedicalBusiness",
        "@id": "https://www.drdhirendrasinghkushwah.in/#hospital",
        "name": "Dr. Dhirendra Singh Kushwah ENT Hospital & Clinics",
        "url": "https://www.drdhirendrasinghkushwah.in/",
        "telephone": "+91-9311449825",
        "priceRange": "₹₹",
        "image": "https://www.drdhirendrasinghkushwah.in/images/gallery/11.webp",
        "medicalSpecialty": "Otolaryngologic",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "ratingCount": "725"
        },
        "department": [
          {
            "@type": "MedicalClinic",
            "name": "Ear & Hearing Institute (Otology)"
          },
          {
            "@type": "MedicalClinic",
            "name": "Rhinology & Sinus Care Center"
          },
          {
            "@type": "MedicalClinic",
            "name": "Vertigo & Neuro-Otology Center"
          },
          {
            "@type": "MedicalClinic",
            "name": "Cochlear Implant & Bionic Hearing Unit"
          },
          {
            "@type": "MedicalClinic",
            "name": "Paediatric ENT Clinic"
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

      {/* Semantic H1 for Search Engines & Accessibility */}
      <h1 className="sr-only">
        Dr. (Prof.) Dhirendra Singh Kushwah — Best ENT Doctor &amp; Surgeon in Jasola &amp; South Delhi
      </h1>

      {/* 1. Hero Showcase */}
      <HeroSlider />

      {/* 2. Hospital Quick Services & Emergency Triage */}
      <HospitalQuickActions />

      {/* 3. Fast-Track OPD Appointment Strip */}
      <GMBBar />

      {/* 4. Hospital Clinical Milestones & Trust Metrics */}
      <HospitalStats />

      {/* 5. Clinical Departments & Centers of Excellence */}
      <Departments />

      {/* 6. Chief Consultant & Surgeon Spotlight */}
      <About />

      {/* 7. Comprehensive ENT Specialities & Surgeries */}
      <Specialities />

      {/* 8. Surgical Procedures & Recovery Reference Guide */}
      <ProcedureTable />

      {/* 9. Hospital & Clinic Network (5 Centers) */}
      <Locations />

      {/* 10. Comprehensive ENT Conditions Directory */}
      <Conditions />

      {/* 11. Clinical Safety & Why Choose Dr. Kushwah */}
      <WhyChoose />

      {/* 12. Verified Patient Testimonials & Google Ratings */}
      <Testimonials />

      {/* 13. Patient FAQ Accordion */}
      <FAQ />

      {/* 14. Emergency & Consultation Call-to-Action */}
      <CTASection />

      {/* 15. Technology & Clinical Experience Showcase */}
      <ExperienceCarousel />
    </>
  );
}
