import SurgeryLeadDesk from "@/components/ui/SurgeryLeadDesk";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Packless Septoplasty Cost in Delhi | Painless Deviated Septum Surgery | Dr. Kushwah",
  description:
    "Discover transparent packless septoplasty surgery costs in Delhi. Breathe freely right after surgery without painful nasal gauze packing. 100% Cashless Mediclaim & daycare discharge with Dr. (Prof.) Dhirendra Singh Kushwah.",
  keywords: [
    "packless septoplasty cost delhi",
    "septoplasty surgery cost in delhi",
    "deviated septum surgery cost delhi",
    "dns surgery cost delhi",
    "painless nose surgery delhi",
    "septoplasty cashless insurance delhi"
  ],
  alternates: {
    canonical: "https://www.drdhirendrasinghkushwah.in/surgery/packless-septoplasty-cost-delhi",
  },
};

export default function PacklessSeptoplastyCostPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Packless Septoplasty",
    "procedureType": "SurgicalProcedure",
    "bodyLocation": "Nasal Septum",
    "howPerformed": "Endoscopic realignment of deviated nasal cartilage and bone with fine dissolvable quilting sutures, eliminating painful nasal gauze packing.",
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

      <section className="bg-slate-950 py-14 sm:py-20 text-white relative">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-900/60 px-3.5 py-1 rounded-full border border-teal-500/30">
            Painless Rhinologic Surgery
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
            Packless Septoplasty Cost in Delhi
            <span className="block text-teal-300 text-xl sm:text-2xl font-semibold mt-2">
              Breathe Freely Instantly &bull; No Painful Gauze Packing &bull; Cashless TPA
            </span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Struggling to breathe through one side of your nose, chronic mouth breathing, or sleep disruption? Experience modern packless deviated septum correction.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <SurgeryLeadDesk procedureName="Packless Septoplasty (DNS Surgery)" />

        <div className="my-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Why Packless Septoplasty is a Medical Revolution
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Traditional septoplasty stuffed long gauze packs inside both nostrils, causing 48 hours of mouth breathing, severe dry mouth, headache, and agonizing pain when the packs were pulled out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-2xl border border-red-200 shadow-sm">
              <span className="text-red-600 font-bold text-sm uppercase">Traditional Septoplasty</span>
              <ul className="mt-3 space-y-2 text-xs text-slate-600">
                <li>❌ 48 hours of painful nasal gauze obstruction</li>
                <li>❌ Severe bleeding and distress during pack removal</li>
                <li>❌ Facial swelling, bruising, and puffy eyes</li>
                <li>❌ Prolonged hospital stay and recovery</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-teal-300 shadow-sm bg-teal-50/30">
              <span className="text-teal-700 font-bold text-sm uppercase">Dr. Kushwah&apos;s Packless Septoplasty</span>
              <ul className="mt-3 space-y-2 text-xs text-slate-700 font-medium">
                <li>✅ Zero nasal packing — breathe through your nose right after waking up</li>
                <li>✅ Quilted absorbable sutures secure the septum with zero pain</li>
                <li>✅ Walk home on the same day (Daycare procedure)</li>
                <li>✅ Return to desk work and daily routine in 48 hours</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Insurance */}
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 my-12 text-center">
          <h3 className="text-xl font-bold text-slate-900">100% Cashless Mediclaim Coverage</h3>
          <p className="text-xs text-slate-600 mt-2 max-w-xl mx-auto">
            DNS with airway obstruction is covered by all health insurance policies. Our hospital desk secures pre-authorization seamlessly.
          </p>
        </div>
      </div>
    </>
  );
}
