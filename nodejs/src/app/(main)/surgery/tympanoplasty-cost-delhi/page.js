import SurgeryLeadDesk from "@/components/ui/SurgeryLeadDesk";
import { CheckCircle2, ShieldCheck, Clock, Award, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Tympanoplasty Surgery Cost in Delhi | Eardrum Repair Packages | Dr. Dhirendra Singh Kushwah",
  description:
    "Find transparent Tympanoplasty (eardrum repair) surgery costs in Delhi. 100% Cashless Mediclaim, stitchless endoscopic surgery, same-day daycare discharge with Dr. (Prof.) Dhirendra Singh Kushwah.",
  keywords: [
    "tympanoplasty cost in delhi",
    "tympanoplasty surgery cost delhi",
    "eardrum surgery cost delhi",
    "kaan ke parde ka operation cost",
    "stitchless ear surgery cost delhi",
    "tympanoplasty cashless insurance delhi",
    "best tympanoplasty surgeon in delhi"
  ],
  alternates: {
    canonical: "https://www.drdhirendrasinghkushwah.com/surgery/tympanoplasty-cost-delhi",
  },
};

export default function TympanoplastyCostPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Tympanoplasty Surgery",
    "procedureType": "SurgicalProcedure",
    "bodyLocation": "Eardrum / Middle Ear",
    "howPerformed": "Transcanal Endoscopic Ear Surgery (TEES) or Microscopic Ear Surgery using temporalis fascia or cartilage graft.",
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
            Otology &bull; Ear Microsurgery
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight leading-tight"
            style={{ color: "#ffffff", textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
          >
            Tympanoplasty Surgery Cost in Delhi
            <span 
              className="block text-xl sm:text-2xl font-bold mt-2"
              style={{ color: "#2dd4bf" }}
            >
              Stitchless Eardrum Repair &bull; 100% Cashless Mediclaim
            </span>
          </h1>
          <p 
            className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: "#cbd5e1" }}
          >
            Perforated eardrum causing recurrent ear discharge and hearing loss? Consult <strong style={{ color: "#ffffff" }}>Dr. (Prof.) Dhirendra Singh Kushwah</strong> for advanced stitchless endoscopic and microscopic repair.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* VIP Lead Desk */}
        <SurgeryLeadDesk procedureName="Tympanoplasty (Eardrum Repair)" />

        {/* Cost Factors & Breakdown */}
        <div className="my-12 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              What Factors Determine Tympanoplasty Cost in Delhi?
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              At ORL Hospital, we maintain 100% financial transparency. The package cost for eardrum surgery typically depends on three medical factors:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-teal-600 font-bold text-lg">01</span>
              <h3 className="font-bold text-slate-900 mt-2">Type of Perforation</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Small central perforations can be closed via a quick daycare transcanal endoscopic approach, while total or marginal perforations require microscopic temporalis fascia grafting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-teal-600 font-bold text-lg">02</span>
              <h3 className="font-bold text-slate-900 mt-2">Ossicular Chain Status</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                If the tiny hearing bones (malleus, incus, stapes) are eroded by long-standing infection, an Ossiculoplasty (TORP/PORP titanium prosthesis) is performed alongside eardrum repair.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-teal-600 font-bold text-lg">03</span>
              <h3 className="font-bold text-slate-900 mt-2">Room Category &amp; TPA</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Daycare package vs. private room stay. 90% of our patients get complete 100% cashless coverage through private health insurance or CGHS panels.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits of Modern Technique */}
        <div className="bg-teal-50/60 rounded-3xl border border-teal-100 p-8 my-12">
          <h2 className="text-2xl font-bold text-teal-950 mb-6">
            Why Patients Choose Dr. Kushwah for Eardrum Surgery
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Stitchless &amp; Scarless:</strong> Performed completely through the natural ear canal in suitable cases.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Over 95% Success Rate:</strong> High graft uptake with natural hearing restoration.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Daycare Discharge:</strong> Patient walks home within 6 to 8 hours of surgery.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Zero Waiting Period for TPA:</strong> Cashless desk handles pre-authorization in 30 minutes.</span>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              {
                q: "Is Tympanoplasty surgery covered under health insurance (Mediclaim)?",
                a: "Yes. Tympanoplasty is a medically necessary procedure for chronic otitis media and hearing loss. All major insurance providers (Star Health, HDFC Ergo, Care, ICICI Lombard, Niva Bupa) cover it under daycare or 24-hr hospitalization."
              },
              {
                q: "How many days of rest are needed after eardrum repair?",
                a: "Most patients can resume sedentary or desk work within 3 to 5 days. You must avoid water entering the ear, blowing your nose hard, and air travel for 3 to 4 weeks until the graft heals completely."
              },
              {
                q: "How soon can I get a cost estimate for my surgery?",
                a: "Simply WhatsApp your Pure Tone Audiometry (PTA) hearing test or doctor prescription to +91 9311449825. Our surgical desk will provide an exact package breakdown within 15 minutes."
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
