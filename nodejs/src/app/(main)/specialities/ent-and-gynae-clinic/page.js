import Image from "next/image";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.com/ent-and-gyane-clinic"

  return {
    title:
      "Best ENT & Gynaecology Clinic in Delhi | Dr. Pooja Choudhary & ENT Specialists",

    description:
      "Visit a leading ENT & Gynaecology clinic in Safdarjung Enclave, Delhi. Dr. Pooja Choudhary specializes in high-risk pregnancy, IVF, infertility & laparoscopic gynecology, alongside advanced ENT care under one roof.",

    keywords: [
      "Best gynecologist in Safdarjung Enclave",
      "Gynecologist in South Delhi",
      "ENT and Gynae clinic Delhi",
      "High risk pregnancy doctor Delhi",
      "IVF specialist Delhi",
      "Infertility treatment Delhi",
      "Laparoscopic gynecology Delhi",
      "ENT specialist Delhi",
      "Dr Pooja Choudhary gynecologist",
      "ENT clinic in South Delhi",
    ],

    authors: [{ name: "Dr. Pooja Choudhary" }],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title:
        "ENT & Gynaecology Clinic in Delhi | Dr. Pooja Choudhary",
      description:
        "Comprehensive women's health and ENT care in Safdarjung Enclave, Delhi. विशेषज्ञ care for pregnancy, IVF, infertility & ENT treatments.",
      url: url,
      siteName: "ENT & Gynae Clinic Delhi",
      type: "website",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Best ENT & Gynae Clinic in Delhi",
      description:
        "Expert gynecology & ENT care in Delhi including IVF, infertility, and advanced treatments.",
    },

    robots: {
      index: true,
      follow: true,
    },

    category: "healthcare",
  }
}
export default function DepartmentPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Dr. Pooja Choudhary ENT & Gynae Clinic",
    "url": "https://www.drdhirendrasinghkushwah.com",
    "logo": "https://www.drdhirendrasinghkushwah.com/images/logo.png",
    "image": "https://www.drdhirendrasinghkushwah.com/images/dr-pooja.webp",
    "description": "Top ENT and Gynecology specialist in India. Dr. Pooja Choudhary offers high-risk pregnancy management, infertility treatment including IVF, laparoscopic gynecological procedures, antenatal and postnatal care, PCOS management, and women's preventive health.",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Safdarjung Enclave",
        "addressLocality": "New Delhi",
        "postalCode": "110029",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Apollo Cradle Royale, Chirag Enclave",
        "addressLocality": "New Delhi",
        "postalCode": "110017",
        "addressCountry": "IN"
      }
    ],
    "telephone": "+917428122164",
    "medicalSpecialty": [
      "Obstetrics",
      "Gynecology",
      "Fertility",
      "IVF",
      "High-Risk Pregnancy",
      "Laparoscopic Surgery",
      "Women’s Preventive Health"
    ],
    "founder": {
      "@type": "Physician",
      "name": "Dr. Pooja Choudhary",
      "image": "https://www.drdhirendrasinghkushwah.com/images/dr-pooja.webp",
      "description": "Senior Consultant Obstetrician & Gynaecologist specializing in high-risk pregnancies, infertility, laparoscopic gynecological surgery, and IVF.",
      "alumniOf": ["MBBS", "MD", "FICOG", "DMAS Fellowship IVF"],
      "medicalSpecialty": [
        "Obstetrics",
        "Gynecology",
        "Fertility",
        "IVF",
        "High-Risk Pregnancy Management",
        "Laparoscopic Gynecological Procedures"
      ],
      "availableService": [
        {
          "@type": "MedicalProcedure",
          "name": "High-Risk Pregnancy Management",
          "description": "Comprehensive care for high-risk pregnancies to ensure maternal and fetal health."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Normal & Cesarean Deliveries",
          "description": "Safe delivery options including natural and cesarean section procedures."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Infertility Evaluation & IVF Guidance",
          "description": "Assessment of infertility causes and guidance through IVF and fertility treatments."
        },
        {
          "@type": "MedicalProcedure",
          "name": "PCOS & Menstrual Disorders Management",
          "description": "Diagnosis and treatment of hormonal and menstrual disorders including PCOS."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Laparoscopic Gynecological Surgery",
          "description": "Minimally invasive gynecological surgeries for conditions like fibroids, endometriosis, and ovarian cysts."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Antenatal & Postnatal Care",
          "description": "Comprehensive care before and after pregnancy to support maternal and newborn health."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Women's Preventive Health",
          "description": "Routine screenings, checkups, and preventive measures for overall women's health."
        }
      ]
    },
    "openingHours": "Mo-Su 09:00-18:00",
    "sameAs": [
      "https://www.facebook.com/drpoojachoudhary",
      "https://www.instagram.com/drpoojachoudhary",
      "https://www.linkedin.com/in/drpoojachoudhary"
    ]
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="bg-slate-50 py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* HEADER */}
          <div className="space-y-2">
            <p className="text-sm text-slate-500">
              ENT and Gynae Clinic in Arjun Nagar, Delhi
            </p>
            <h1 className="text-3xl font-bold leading-tight">
              Top ENT and Gynae Clinic Specialist in India
            </h1>
            <p className="text-sm text-slate-600 font-medium">
              Dr Pooja Choudhary — M.B.B.S., M.D., FICOG, D.MAS, Fellowship IVF
            </p>
          </div>

          {/* PROFILE */}
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1">
              <div className="rounded-xl overflow-hidden shadow">
                <Image
                  src="/images/dr-pooja.webp"
                  alt="Dr Pooja Choudhary"
                  width={300}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Dr. Pooja Choudhary is a highly experienced Senior Consultant Obstetrician & Gynaecologist specializing in high-risk pregnancies, infertility treatment, and laparoscopic gynecological procedures.
              </p>

              <p>
                With advanced qualifications including MBBS, MD, FICOG, and DMAS along with a Fellowship in IVF, she provides evidence-based and modern care tailored to each patient.
              </p>

              <p>
                Known for her compassionate and patient-first approach, she ensures accurate diagnosis, personalized treatment, and complete support throughout every stage of a woman’s health journey.
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-6">

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Areas of Expertise</h2>
              <ul className="list-disc pl-5 text-slate-600 space-y-1">
                <li>High-Risk Pregnancy Management</li>
                <li>Normal & Cesarean Deliveries</li>
                <li>Infertility Evaluation & IVF Guidance</li>
                <li>PCOS & Menstrual Disorders</li>
                <li>Laparoscopic Gynecological Surgery</li>
                <li>Antenatal & Postnatal Care</li>
                <li>Women’s Preventive Health</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Clinic Locations</h3>
              <ul className="list-disc pl-5 text-slate-600 space-y-1">
                <li>
                  <span className="font-medium">ENT & Gynae Clinic — </span>
                  Safdarjung Enclave, New Delhi
                </li>
                <li>
                  <span className="font-medium">Apollo Cradle Royale — </span>
                  Chirag Enclave, New Delhi
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
