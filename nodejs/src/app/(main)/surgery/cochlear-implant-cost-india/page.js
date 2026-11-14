import SurgeryLeadDesk from "@/components/ui/SurgeryLeadDesk";
import { CheckCircle2, ShieldCheck, Sparkles, Globe, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Cochlear Implant Surgery Cost in India | Affordable Bionic Hearing Packages | Dr. Kushwah",
  description:
    "Find transparent Cochlear Implant surgery costs in India for domestic and international patients. World-class round-window implantation, speech therapy & medical visa support with Dr. (Prof.) Dhirendra Singh Kushwah.",
  keywords: [
    "cochlear implant cost in india",
    "cochlear implant surgery cost india",
    "bionic ear surgery cost india",
    "cochlear implant medical tourism india",
    "best cochlear implant surgeon in delhi",
    "pediatric cochlear implant cost"
  ],
  alternates: {
    canonical: "https://www.drdhirendrasinghkushwah.in/surgery/cochlear-implant-cost-india",
  },
};

export default function CochlearImplantCostPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Cochlear Implant Surgery",
    "procedureType": "SurgicalProcedure",
    "bodyLocation": "Inner Ear / Cochlea & Auditory Nerve",
    "howPerformed": "Minimally invasive posterior tympanotomy and round-window insertion of multichannel electrode array into the cochlea.",
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
            Bionic Hearing &bull; Medical Tourism
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
            Cochlear Implant Surgery Cost in India
            <span className="block text-teal-300 text-xl sm:text-2xl font-semibold mt-2">
              World-Class Bionic Hearing at 70% Lower Cost than US/Europe
            </span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Giving children and adults with profound sensorineural hearing loss the gift of sound. Complete packages including pre-op imaging, surgery, processor activation, and speech rehabilitation.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <SurgeryLeadDesk 
          procedureName="Cochlear Implant Surgery" 
          customMessage="Hello Dr. Kushwah, I want to inquire about Cochlear Implant package cost, implant brands (Cochlear, MED-EL, Advanced Bionics), and hospital stay in Delhi."
        />

        <div className="my-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Why International &amp; Indian Families Choose Dr. Kushwah
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <span className="text-teal-600 font-bold text-lg">70% Cost Advantage</span>
              <p className="text-xs text-slate-600 mt-2">In the US or Europe, cochlear implants cost $40,000 to $60,000. In India, full FDA-approved implants with hospital care range from $8,000 to $12,000.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <span className="text-teal-600 font-bold text-lg">Medical Visa Support</span>
              <p className="text-xs text-slate-600 mt-2">Dedicated international patient coordinator handles visa invitation letters, airport pick-up, local accommodation, and language interpretation.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <span className="text-teal-600 font-bold text-lg">Comprehensive Speech Therapy</span>
              <p className="text-xs text-slate-600 mt-2">Post-activation Auditory Verbal Therapy (AVT) ensures the child or adult reaches fluent verbal communication milestones.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
