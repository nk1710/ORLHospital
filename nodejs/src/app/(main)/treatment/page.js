export const metadata = {
  title: "Sinus Treatment in Delhi | Best ENT Specialist",
  description:
    "Get advanced sinus treatment in Delhi for chronic sinusitis, nasal blockage, and infections.",
  alternates: {
    canonical: "https://www.drdhirendrasinghkushwah.com/treatment",
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
      <h1>Sinus Treatment in Delhi</h1>

      <p>
        Sinusitis is a common condition causing nasal blockage, headache, and breathing difficulty.
        Advanced sinus treatment is available in Delhi.
      </p>

      <h2>Symptoms of Sinus Infection</h2>
      <ul>
        <li>Headache</li>
        <li>Nasal congestion</li>
        <li>Facial pain</li>
      </ul>

      <h2>Causes</h2>
      <p>Infections, allergies, and structural issues.</p>

      <h2>Treatment Options</h2>
      <p>Medication, nasal sprays, and FESS surgery.</p>

      {/* Internal Links */}
      <h2>Related Pages</h2>
      <ul>
        <li><a href="/ent-specialist-delhi">ENT Specialist Delhi</a></li>
        <li><a href="/surgery/fess-surgery-delhi">FESS Surgery</a></li>
      </ul>

      {/* FAQ */}
      <h2>FAQs</h2>
      <h3>What is the best treatment for sinusitis?</h3>
      <p>Medication or surgery depending on severity.</p>

      <h3>How long does sinus infection last?</h3>
      <p>Usually 7–10 days, longer if chronic.</p>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the best treatment for sinusitis?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Treatment includes medication or surgery.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}