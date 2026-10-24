import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, Stethoscope, Navigation, CheckCircle2, ShieldCheck, Calendar } from 'lucide-react';
import Locations from '@/components/home/components/Locations/Locations';

export const metadata = {
  title: "ENT Hospital & Clinic Branches in Delhi NCR | Dr. (Prof.) Dhirendra Singh Kushwah",
  description: "Visit Dr. (Prof.) Dhirendra Singh Kushwah across 5 premier ENT hospital & clinic centers: Jasola Vihar, CR Park, Arjun Nagar (Safdarjung), Palwal & Dhampur. Book OPD consultation.",
  alternates: {
    canonical: "https://www.drdhirendrasinghkushwah.in/our-branches",
  },
  openGraph: {
    title: "ENT Hospital & Clinic Centers in Delhi NCR | Dr. Kushwah",
    description: "State-of-the-art ENT surgical facilities and OPD consultation clinics across South Delhi, Haryana & UP.",
    url: "https://www.drdhirendrasinghkushwah.in/our-branches",
  },
};

export default function OurBranchesPage() {
  return (
    <div className="branches-page min-h-screen bg-slate-50/50">
      
      {/* Hero Banner */}
      <section
        className="relative text-white py-16 px-4 sm:px-6 border-b border-slate-800"
        style={{
          background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-teal-300 bg-teal-950/90 rounded-full border border-teal-500/40 uppercase tracking-wider mb-3 shadow-xs">
            Hospital &amp; Clinical Network
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Our Hospital &amp; Clinic Centers
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
            Providing easily accessible, evidence-based ENT care and minimally invasive surgical solutions across 5 premier clinical facilities in South Delhi, Haryana, and Western UP.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919311449825"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md transition-colors"
            >
              <Phone size={16} />
              <span>Helpline: +91-9311449825</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-colors"
            >
              <Calendar size={16} />
              <span>Book Priority OPD</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Location Directory */}
      <Locations />

      {/* Facilities & Surgical Readiness */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Center Standards &amp; Clinical Quality
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every surgical facility in our network adheres to stringent infection control protocols and modern surgical guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="p-3 rounded-xl bg-teal-100 text-teal-800 w-fit mb-3">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Ultra-Clean Laminar OT</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Equipped with HEPA-filtered laminar airflow operating theaters for zero-infection ear microsurgery and endoscopic skull base procedures.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="p-3 rounded-xl bg-teal-100 text-teal-800 w-fit mb-3">
                <Stethoscope size={22} />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Advanced Endoscopic Diagnostics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-definition flexible and rigid video nasolaryngoscopes, microscopic ear suction units, and digital diagnostic stroboscopy on-site.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="p-3 rounded-xl bg-teal-100 text-teal-800 w-fit mb-3">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Cashless Insurance Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated TPA and medical insurance desk assisting with pre-authorization and hassle-free cashless hospitalization across major providers.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

