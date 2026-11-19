import SurgeryLeadDesk from "@/components/ui/SurgeryLeadDesk";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "FESS Sinus Surgery Cost in Delhi | Endoscopic Sinus Packages | Dr. Dhirendra Singh Kushwah",
  description:
    "Get clear estimates for FESS Endoscopic Sinus Surgery in Delhi. Minimally invasive removal of nasal polyps, chronic sinusitis relief, 100% Cashless Mediclaim & daycare stay with Dr. (Prof.) Dhirendra Singh Kushwah.",
  keywords: [
    "fess sinus surgery cost delhi",
    "sinus surgery cost in delhi",
    "endoscopic sinus surgery cost delhi",
    "nasal polyps surgery cost delhi",
    "sinus surgery cashless insurance delhi",
    "sinus specialist in delhi"
  ],
  alternates: {
    canonical: "https://www.drdhirendrasinghkushwah.com/surgery/sinus-fess-cost-delhi",
  },
};

export default function SinusFESSCostPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Functional Endoscopic Sinus Surgery (FESS)",
    "procedureType": "SurgicalProcedure",
    "bodyLocation": "Paranasal Sinuses",
    "howPerformed": "High-Definition Karl Storz Endoscopes and powered micro-debriders via natural nostrils without external facial cuts.",
    "provider": {
      "@type": "Physician",
      "name": "Dr. (Prof.) Dhirendra Singh Kushwah",
      "telephone": "+91-9311449825"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Header Banner */}
      <section 
        className="py-14 sm:py-20 text-white relative"
        style={{
          backgroundColor: "#020617",
          background: "linear-gradient(135deg, #020617 0%, #041f22 50%, #020617 100%)",
          color: "#ffffff"
        }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span 
            className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border inline-block"
            style={{
              backgroundColor: "rgba(20, 184, 166, 0.2)",
              borderColor: "rgba(45, 212, 191, 0.35)",
              color: "#5eead4"
            }}
          >
            Rhinology &bull; Minimally Invasive
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight leading-tight"
            style={{ color: "#ffffff", textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
          >
            FESS Sinus Surgery Cost in Delhi
            <span 
              className="block text-xl sm:text-2xl font-bold mt-2"
              style={{ color: "#2dd4bf" }}
            >
              HD Micro-Debrider Precision &bull; 100% Cashless Mediclaim
            </span>
          </h1>
          <p 
            className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: "#cbd5e1" }}
          >
            Relieve chronic facial pain, frontal headaches, and nasal blockages unresponsive to medications. Daycare procedure with dissolvable nasal spacers.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* VIP Lead Desk */}
        <SurgeryLeadDesk procedureName="FESS Endoscopic Sinus Surgery" />

        {/* Cost Overview */}
        <div className="my-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Understanding FESS Sinus Surgery Pricing
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            The package for sinus surgery is determined by the number of sinuses involved (Maxillary, Ethmoid, Sphenoid, Frontal) and whether nasal polyps or deviated septum (Septoplasty) are corrected concurrently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <span className="text-teal-600 font-bold">Category 1</span>
              <h3 className="font-bold text-slate-900 mt-1">Unilateral / Limited FESS</h3>
              <p className="text-xs text-slate-600 mt-2">Focuses on one or two blocked sinuses or single antrochoanal polyp removal under short daycare stay.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <span className="text-teal-600 font-bold">Category 2</span>
              <h3 className="font-bold text-slate-900 mt-1">Full Bilateral FESS</h3>
              <p className="text-xs text-slate-600 mt-2">Complete clearance of all 8 sinus cavities with precision micro-debrider technology.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <span className="text-teal-600 font-bold">Category 3</span>
              <h3 className="font-bold text-slate-900 mt-1">FESS + Septoplasty</h3>
              <p className="text-xs text-slate-600 mt-2">Combined correction of deviated nasal septum and chronic sinusitis in a single operative sitting.</p>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 my-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Patients Choose ORL Hospital for Sinus Surgery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>No Facial Cuts or Scars:</strong> 100% endoscopic approach through nostrils.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Packless Recovery:</strong> Dissolvable biodegradable spacers — no painful packing removal.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Rapid Healing:</strong> Return to office work within 48 to 72 hours.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>100% Cashless Insurance:</strong> Instant TPA verification before admission.</span>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              {
                q: "Is FESS sinus surgery covered by health insurance?",
                a: "Yes. Chronic sinusitis unresponsive to medical therapy is covered by all corporate, private, and government mediclaim policies under daycare or 24-hr admission."
              },
              {
                q: "Can I send my PNS CT Scan report for a second opinion?",
                a: "Yes. Simply WhatsApp your CT PNS (Paranasal Sinuses) scan or prescription to +91 9311449825. Dr. Kushwah will review it and confirm if surgery is truly needed."
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white p-5 rounded-2xl border border-slate-200">
                <summary className="font-bold text-slate-900 cursor-pointer">{faq.q}</summary>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
