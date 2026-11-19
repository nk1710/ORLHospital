import Link from "next/link";
import SurgeryLeadDesk from "@/components/ui/SurgeryLeadDesk";
import { ShieldCheck, CheckCircle2, FileText, ArrowRight, Award, Stethoscope, Sparkles } from "lucide-react";

export const metadata = {
  title: "ENT Surgery Cost in Delhi | Cashless Mediclaim Packages | Dr. Dhirendra Singh Kushwah",
  description:
    "Explore transparent ENT surgery costs in Delhi for Tympanoplasty, FESS Sinus, Septoplasty, Tonsillectomy & Cochlear Implants. 100% Cashless Mediclaim, 0% EMI & same-day discharge with Dr. (Prof.) Dhirendra Singh Kushwah.",
  keywords: [
    "ent surgery cost in delhi",
    "tympanoplasty cost delhi",
    "sinus surgery cost delhi",
    "fess surgery cost in delhi",
    "septoplasty cost in delhi",
    "tonsillectomy surgery cost delhi",
    "cochlear implant cost in india",
    "cashless ent surgery hospital delhi",
    "dr dhirendra singh kushwah surgery"
  ],
  alternates: {
    canonical: "https://www.drdhirendrasinghkushwah.com/surgery",
  },
};

const SURGERIES = [
  {
    title: "Tympanoplasty (Eardrum Repair)",
    slug: "tympanoplasty-cost-delhi",
    technique: "Microscopic / Endoscopic (Stitchless)",
    stay: "Daycare (Discharge in 6-8 hrs)",
    range: "Affordable Package with Cashless Mediclaim",
    features: [
      "No painful external incisions (Transcanal in suitable cases)",
      "Over 95% graft uptake and hearing improvement",
      "All major mediclaim policies accepted (100% Cashless)"
    ]
  },
  {
    title: "FESS (Functional Endoscopic Sinus Surgery)",
    slug: "sinus-fess-cost-delhi",
    technique: "High-Definition Karl Storz Micro-Debrider",
    stay: "Daycare / 24-Hour Stay",
    range: "Transparent Package with CT Evaluation",
    features: [
      "Precision removal of polyps and sinus blockages",
      "No facial bruising or external cuts",
      "Dissolvable hemostatic spacers (No painful packing removal)"
    ]
  },
  {
    title: "Packless Septoplasty (DNS Correction)",
    slug: "packless-septoplasty-cost-delhi",
    technique: "Advanced Endoscopic Quilted Suturing",
    stay: "Daycare (Same-day discharge)",
    range: "Economical & Fully Covered by Insurance",
    features: [
      "Zero nasal gauze packing — breathe comfortably right after surgery",
      "No post-operative facial swelling or black eyes",
      "Return to work within 48 to 72 hours"
    ]
  },
  {
    title: "Coblation Adenotonsillectomy",
    slug: "coblation-tonsillectomy-cost-delhi",
    technique: "Low-Temperature Controlled Plasma Field (40°C–70°C)",
    stay: "Daycare (Children eat soft foods within hours)",
    range: "Complete Daycare Package",
    features: [
      "Virtually zero blood loss during surgery",
      "80% less post-op pain compared to traditional cautery",
      "Ideal for snoring, sleep apnea and chronic infections in kids"
    ]
  },
  {
    title: "Cochlear Implant Surgery",
    slug: "cochlear-implant-cost-india",
    technique: "Minimally Invasive Round-Window Bionic Ear",
    stay: "24–48 Hours Hospital Care",
    range: "World-Class Package at 70% Lower Cost than West",
    features: [
      "Unlocks natural speech and hearing in deaf children & adults",
      "Dedicated pre-op temporal CT/MRI and post-activation audiology",
      "Comprehensive medical visa and international patient assistance"
    ]
  }
];

export default function SurgeryHubPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "ENT Surgery Cost & Cashless Packages in Delhi",
    "url": "https://www.drdhirendrasinghkushwah.com/surgery",
    "description": "Transparent ENT surgery costs in Delhi for Tympanoplasty, FESS, Septoplasty & Cochlear Implants with 100% Cashless Mediclaim.",
    "provider": {
      "@type": "Physician",
      "name": "Dr. (Prof.) Dhirendra Singh Kushwah",
      "medicalSpecialty": "Otolaryngology",
      "telephone": "+91-9311449825"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden py-16 sm:py-24 text-white"
        style={{
          backgroundColor: "#020617",
          background: "linear-gradient(135deg, #020617 0%, #041f22 50%, #020617 100%)",
          color: "#ffffff"
        }}
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div 
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-6"
            style={{
              backgroundColor: "rgba(20, 184, 166, 0.15)",
              border: "1px solid rgba(45, 212, 191, 0.35)",
              color: "#5eead4"
            }}
          >
            <Sparkles className="h-4 w-4" style={{ color: "#5eead4" }} />
            <span>Transparent Pricing &bull; 100% Cashless Mediclaim &bull; 0% EMI</span>
          </div>

          <h1 
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto"
            style={{ color: "#ffffff", textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
          >
            Advanced ENT Surgery Costs &amp; Packages in Delhi
          </h1>

          <p 
            className="mt-6 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#cbd5e1" }}
          >
            Led by <strong style={{ color: "#ffffff" }}>Dr. (Prof.) Dhirendra Singh Kushwah</strong> (25+ Years Experience). We offer minimally invasive, stitchless, and packless surgical solutions with transparent packages and seamless cashless insurance approvals.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-semibold">
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "#ffffff" }}
            >
              <ShieldCheck className="h-4 w-4" style={{ color: "#34d399" }} />
              <span>Cashless TPA Approved</span>
            </div>
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "#ffffff" }}
            >
              <Award className="h-4 w-4" style={{ color: "#2dd4bf" }} />
              <span>15,000+ Surgeries</span>
            </div>
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "#ffffff" }}
            >
              <Stethoscope className="h-4 w-4" style={{ color: "#38bdf8" }} />
              <span>Carl Zeiss &amp; Karl Storz Tech</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* VIP Surgery Desk Callout */}
        <SurgeryLeadDesk procedureName="ENT Surgery" />

        {/* Procedures Grid */}
        <div className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Surgical Procedures &amp; Packages
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Click any surgery below to review detailed surgical techniques, recovery timelines, and package estimates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SURGERIES.map((s, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                      {s.stay}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{s.technique}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {s.title}
                  </h3>

                  <p className="text-xs font-semibold text-teal-600 mt-1">
                    {s.range}
                  </p>

                  <ul className="mt-4 space-y-2 text-xs text-slate-600">
                    {s.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/surgery/${s.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 group"
                  >
                    <span>View Cost Details &amp; Technique</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition" />
                  </Link>

                  <a
                    href={`https://wa.me/919311449825?text=Hi%20Dr.%20Kushwah,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(s.title)}%20cost%20and%20cashless%20mediclaim.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold transition shadow-sm"
                  >
                    Get Cost on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance & Cashless Partners Section */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 text-center my-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full">
            Financial Transparency
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
            100% Cashless Mediclaim &amp; TPA Support
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            We work with all leading government and private health insurance providers to ensure a hassle-free, paperless admission and discharge.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto text-xs font-semibold text-slate-700">
            {["Star Health", "HDFC Ergo", "Care Health", "ICICI Lombard", "Niva Bupa", "Bajaj Allianz", "Aditya Birla", "Tata AIG", "CGHS / ECHS Approved", "All Major TPAs (FHPL, MediAssist, Vidal, Paramount)"].map((ins, index) => (
              <span key={index} className="bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-xs">
                {ins}
              </span>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
