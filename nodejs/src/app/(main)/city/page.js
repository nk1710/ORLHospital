
export const metadata = {
  title: "Best ENT Specialist in Delhi | ENT Doctor Near Me",
  description:
    "Looking for the best ENT specialist in Delhi? Get expert treatment for sinus, hearing loss, ear pain, and throat problems.",
  alternates: {
    canonical: "https://yoursite.com/ent-specialist-delhi",
  },
  openGraph: {
    title: "Best ENT Specialist in Delhi",
    description: "Expert ENT care in Delhi for all ear, nose, throat problems.",
    url: "https://yoursite.com/ent-specialist-delhi",
  },
};

export default function Page() {
  return (
    <>
      <h1>Best ENT Specialist in Delhi</h1>

      <p>
        If you are looking for an experienced ENT specialist in Delhi, you can
        get advanced treatment for sinus infections, hearing loss, and throat
        problems with modern techniques.
      </p>

      <h2>ENT Services Available</h2>
      <ul>
        <li>Sinus treatment</li>
        <li>Hearing loss treatment</li>
        <li>Ear infection treatment</li>
        <li>Vertigo treatment</li>
      </ul>

      <h2>Why Choose an ENT Specialist in Delhi?</h2>
      <p>
        Delhi offers advanced ENT care with modern technology and experienced doctors.
      </p>

      {/* Internal Links */}
      <h2>Explore Treatments</h2>
      <ul>
        <li><a href="/treatment/sinus-treatment-delhi">Sinus Treatment</a></li>
        <li><a href="/treatment/hearing-loss-treatment-delhi">Hearing Loss Treatment</a></li>
        <li><a href="/surgery/cochlear-implant-delhi">Cochlear Implant Surgery</a></li>
      </ul>

      {/* FAQ */}
      <h2>FAQs</h2>
      <h3>When should I see an ENT doctor?</h3>
      <p>If symptoms like ear pain, sinus issues, or throat infection persist.</p>

      <h3>What treatments do ENT specialists provide?</h3>
      <p>They treat ear, nose, throat conditions including surgeries and therapies.</p>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "ENT Specialist in Delhi",
            areaServed: "Delhi",
          }),
        }}
      />
    </>
  );
}