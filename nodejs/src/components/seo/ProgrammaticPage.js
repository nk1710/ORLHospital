import Script from "next/script";
import Link from "next/link";
import { DOCTOR } from "@/data/seo-data";
import PatientCareFinder from "@/components/home/components/PatientCareFinder/PatientCareFinder";

export default function ProgrammaticPage({
  h1,
  intro,
  location,
  problem,
  intent,
  faqs,
  costData,
  internalLinks,
  schemas,
}) {
  const siblingLinks = internalLinks.filter((l) => l.type === "sibling-intent");
  const nearbyLinks = internalLinks.filter((l) => l.type === "nearby-location");
  const parentLink = internalLinks.find((l) => l.type === "parent");
  const clinicLink = internalLinks.find((l) => l.type === "clinic");

  return (
    <>

      {schemas.map((schema, i) => (
        <Script
          key={i}
          id={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="max-w-4xl mx-auto px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <ol className="flex flex-wrap gap-1 items-center">
            <li><Link href="/" className="hover:text-teal-700">Home</Link></li>
            <li className="select-none">›</li>
            <li>
              <Link href={`/`} className="hover:text-teal-700 capitalize">
                {location.name}
              </Link>
            </li>
            <li className="select-none">›</li>
            <li>
              <Link href={`/${location.slug}/${problem.slug}/`} className="hover:text-teal-700">
                {problem.name}
              </Link>
            </li>
            {intent && (
              <>
                <li className="select-none">›</li>
                <li className="text-slate-600">{intent.label}</li>
              </>
            )}
          </ol>
        </nav>
        <h1 className="font-bold text-slate-900 mb-4 leading-tight">
          {h1}
        </h1>
        <p className="text-slate-600 text-base leading-relaxed mb-8">
          {intro}
        </p>
        {/* Cost CTA */}
        {costData && (
          <section className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-teal-900 mb-3">
              {problem.name} Treatment Cost in {location.name}
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-500 mb-1">Consultation fee</p>
                <p className="font-semibold text-slate-900 text-base">
                  {costData.currency}{costData.low} – {costData.currency}{costData.high}
                </p>
              </div>
              {costData.surgery && (
                <div>
                  <p className="text-slate-500 mb-1">Surgery (approx)</p>
                  <p className="font-semibold text-slate-900 text-base">
                    {costData.currency}{costData.surgery}
                  </p>
                </div>
              )}
              {costData.aids && (
                <div>
                  <p className="text-slate-500 mb-1">Hearing aids</p>
                  <p className="font-semibold text-slate-900 text-base">
                    {costData.currency}{costData.aids}
                  </p>
                </div>
              )}
            </div>
            <p className="text-xs text-slate-400 mt-4">
              Prices are indicative and may vary based on diagnostic findings. Insurance coverage is available for most procedures.
            </p>
          </section>
        )}
        {/* Booking CTAs */}
        <section className="bg-gray-900 text-white rounded-xl p-6 mb-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-semibold text-lg leading-tight">
              Book a consultation in {location.name}
            </p>
            <p className="text-gray-300 text-sm mt-1">
              {DOCTOR.name} · {DOCTOR.credentials}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href={`tel:${DOCTOR.phone}`}
              className="bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
            >
              Call {DOCTOR.phone}
            </a>
            <Link
              href={`/contact`}
              className="border border-white/30 hover:bg-white/10 text-white text-sm px-5 py-2.5 rounded-lg text-center"
            >
              Book online →
            </Link>
          </div>
        </section>

        {/* Interactive Bilingual Patient Care Finder, Fear-Killers & 2nd Opinion Desk */}
        <div className="mb-10">
          <PatientCareFinder />
        </div>
        {/* Locality details */}
        {location.nearbyAreas?.length > 0 && (
          <section className="mb-8">
            <h2 className="font-semibold text-slate-800 mb-2">
              Serving patients near {location.name}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The {location.name} clinic is conveniently accessible from{" "}
              {location.nearbyAreas.join(", ")} and surrounding areas of {location.region}.
              Walk-in slots are available on weekday mornings; advance booking recommended for evenings and weekends.
            </p>
          </section>
        )}
        {/* FAQs */}
        {faqs.length > 0 && (
          <section className="mb-10">
            <h2 className="font-semibold text-slate-900 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map(({ q, a }, i) => (
                <details
                  key={i}
                  className="group border border-slate-200 rounded-lg overflow-hidden"
                >
                  <summary className="flex justify-between items-center px-5 py-4 cursor-pointer text-slate-800 font-medium list-none">
                    {q}
                    <span className="ml-3 shrink-0 text-teal-600 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}
        {/* Related pages */}
        <section className="border-t border-slate-100 pt-8">
          {siblingLinks.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-slate-900 uppercase tracking-wide mb-3">
                Related pages
              </h3>
              <ul className="space-y-1">
                {siblingLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-teal-700 hover:underline text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* other clinics */}

          {nearbyLinks.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-slate-800 uppercase tracking-wide mb-3">
                Other clinic locations
              </h3>
              <ul className="flex flex-wrap gap-2">
                {nearbyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block border border-slate-200 rounded-full px-3 py-1 text-xs text-slate-600 hover:border-teal-400 hover:text-teal-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-4 text-sm">
            {parentLink && (
              <Link href={parentLink.href} className="text-slate-500 hover:text-teal-700">
                ← {parentLink.label}
              </Link>
            )}
            {clinicLink && (
              <Link href={clinicLink.href} className="text-slate-500 hover:text-teal-700">
                📍 {clinicLink.label}
              </Link>
            )}
          </div>
        </section>
      </main>
    </>
  );
}