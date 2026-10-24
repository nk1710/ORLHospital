
export const metadata = {
  title: "Ear Pain Treatment | Causes & Relief",
  description:
    "Learn about ear pain causes, symptoms, and effective treatment options.",
  alternates: {
    canonical: "https://yoursite.com/problems/ear-pain-treatment",
  },
};

export default function Page() {
  const schemaData = {}
  return (
    <>
      <h1>Ear Pain Treatment</h1>

      <p>
        Ear pain can be caused by infection, injury, or pressure changes. Proper diagnosis is essential.
      </p>

      <h2>Causes</h2>
      <ul>
        <li>Ear infection</li>
        <li>Wax buildup</li>
        <li>Sinus issues</li>
      </ul>

      <h2>Treatment</h2>
      <p>Medication, cleaning, and sometimes minor procedures.</p>

      {/* Internal Links */}
      <h2>Related Pages</h2>
      <ul>
        <li><a href="/treatment/ear-infection-treatment-delhi">Ear Infection Treatment</a></li>
        <li><a href="/ent-specialist-delhi">ENT Specialist</a></li>
      </ul>

      {/* FAQ */}
      <h2>FAQs</h2>
      <h3>What causes ear pain?</h3>
      <p>Infections, wax buildup, or sinus pressure.</p>

      <h3>When should I see a doctor?</h3>
      <p>If pain lasts more than 2 days.</p>
    </>
  );
}