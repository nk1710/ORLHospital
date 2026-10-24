
export const metadata = {
  title: "Cochlear Implant Surgery in Delhi | Hearing Loss Treatment",
  description:
    "Advanced cochlear implant surgery in Delhi for severe hearing loss with expert ENT surgeons.",
  alternates: {
    canonical: "https://yoursite.com/surgery/cochlear-implant-delhi",
  },
};

export default function Page() {
  const schemaData = {}
  return (
    <>
    <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
      <h1>Cochlear Implant Surgery in Delhi</h1>

      <p>
        Cochlear implant surgery is used for patients with severe hearing loss who do not benefit from hearing aids.
      </p>

      <h2>Who Needs This Surgery?</h2>
      <p>Patients with severe or profound hearing loss.</p>

      <h2>Benefits</h2>
      <ul>
        <li>Improved hearing</li>
        <li>Better communication</li>
      </ul>

      {/* Internal Links */}
      <h2>Related Treatments</h2>
      <ul>
        <li><a href="/treatment/hearing-loss-treatment-delhi">Hearing Loss Treatment</a></li>
        <li><a href="/ent-specialist-delhi">ENT Specialist Delhi</a></li>
      </ul>

      {/* FAQ */}
      <h2>FAQs</h2>
      <h3>Is cochlear implant safe?</h3>
      <p>Yes, it is a safe and effective procedure.</p>

      <h3>What is recovery time?</h3>
      <p>Usually 2–4 weeks.</p>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Cochlear Implant Surgery",
          }),
        }}
      />
    </>
  );
}