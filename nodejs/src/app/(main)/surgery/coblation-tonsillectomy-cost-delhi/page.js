import SurgeryLeadDesk from "@/components/ui/SurgeryLeadDesk";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Coblation Tonsillectomy Cost in Delhi | Painless Child Tonsil Surgery | Dr. Kushwah",
  description:
    "Explore gentle, low-temperature Coblation tonsillectomy costs in Delhi for children & adults. Virtually bloodless, 80% less pain, daycare discharge with Dr. (Prof.) Dhirendra Singh Kushwah.",
  keywords: [
    "coblation tonsillectomy cost delhi",
    "tonsil surgery cost in delhi",
    "painless tonsillectomy child delhi",
    "adenotonsillectomy cost delhi",
    "tonsil surgery cashless insurance delhi"
  ],
  alternates: {
    canonical: "https://www.drdhirendrasinghkushwah.com/surgery/coblation-tonsillectomy-cost-delhi",
  },
};

export default function CoblationTonsillectomyCostPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Coblation Tonsillectomy & Adenoidectomy",
    "procedureType": "SurgicalProcedure",
    "bodyLocation": "Palatine Tonsils & Adenoids",
    "howPerformed": "Low-temperature radiofrequency plasma technology operating at 40°C–70°C, dissolving tissue with minimal thermal damage and rapid healing.",
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
            Pediatric &bull; Gentle Plasma Technology
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight leading-tight"
            style={{ color: "#ffffff", textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
          >
            Coblation Tonsillectomy Cost in Delhi
            <span 
              className="block text-xl sm:text-2xl font-bold mt-2"
              style={{ color: "#2dd4bf" }}
            >
              Virtually Bloodless &bull; 80% Less Pain &bull; Same-Day Discharge
            </span>
          </h1>
          <p 
            className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: "#cbd5e1" }}
          >
            Recurring throat infections, mouth breathing, or sleep apnea in your child? Discover gentle plasma tonsillectomy with rapid recovery.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <SurgeryLeadDesk procedureName="Coblation Tonsil & Adenoid Surgery" />

        <div className="my-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Coblation vs. Conventional Heat Cautery
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Traditional tonsillectomy burns tissue at 400°C–600°C, causing severe throat pain that lasts for weeks. Coblation uses a gentle saline plasma field at just 40°C–70°C.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <span className="text-emerald-600 font-bold">Fast Food Intake</span>
              <h3 className="font-bold text-slate-900 mt-1">Normal Eating in Hours</h3>
              <p className="text-xs text-slate-600 mt-2">Children can start sipping liquids and soft diet within 2 to 4 hours post-procedure.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <span className="text-emerald-600 font-bold">Near-Zero Bleeding</span>
              <h3 className="font-bold text-slate-900 mt-1">Minimal Blood Loss</h3>
              <p className="text-xs text-slate-600 mt-2">Simultaneously cuts and coagulates blood vessels, preventing intra-op and post-op bleeding.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <span className="text-emerald-600 font-bold">School Resumption</span>
              <h3 className="font-bold text-slate-900 mt-1">Back to School in 3-5 Days</h3>
              <p className="text-xs text-slate-600 mt-2">Significantly shortened downtime compared to 2 weeks required in traditional surgery.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
