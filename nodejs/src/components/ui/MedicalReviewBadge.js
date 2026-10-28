import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Calendar, CheckCircle, ExternalLink } from "lucide-react";

export default function MedicalReviewBadge({
  lastReviewed = "October 2026",
  procedureName = "ENT Surgical Evaluation",
}) {
  return (
    <aside
      aria-label="Medical Review & Clinical Authority Verification"
      className="my-8 rounded-2xl border border-teal-200/80 bg-teal-50/40 p-5 shadow-xs transition-all hover:border-teal-300"
      style={{ background: "linear-gradient(135deg, rgba(240,253,250,0.7) 0%, #ffffff 50%, #f8fafc 100%)" }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Doctor Micro Profile */}
        <div className="flex items-center gap-3.5">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-teal-600 shadow-xs bg-teal-50">
            <Image
              src="/images/doctors/dr-dhirendra.webp"
              alt="Dr. (Prof.) Dhirendra Singh Kushwah - Senior ENT Surgeon"
              width={56}
              height={56}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-teal-800 font-bold uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4 text-teal-600" />
              <span>Medically Reviewed &amp; Clinically Verified</span>
            </div>
            <Link
              href="/about/drdhirendrasinghkushwah"
              className="group inline-flex items-center gap-1 text-base font-extrabold text-slate-900 hover:text-teal-700"
            >
              <span>Dr. (Prof.) Dhirendra Singh Kushwah</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-teal-600" />
            </Link>
            <p className="text-xs text-slate-600 font-medium">
              MS (ENT), Ex-Professor &middot; 25+ Years Experience &middot; DMC/MCI Registered
            </p>
          </div>
        </div>

        {/* Verification Meta */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-teal-100 text-xs text-slate-500 gap-1">
          <div className="flex items-center gap-1 font-medium text-slate-700">
            <Calendar className="h-3.5 w-3.5 text-teal-600" />
            <span>Updated: {lastReviewed}</span>
          </div>
          <div className="flex items-center gap-1 text-teal-700 font-semibold">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
            <span>Evidence-Based Guidelines</span>
          </div>
        </div>
      </div>

      <p className="mt-3.5 border-t border-slate-200/60 pt-3 text-xs leading-relaxed text-slate-600">
        Clinical guidance for <strong>{procedureName}</strong> is authored and verified in accordance with national and international Otolaryngology surgical protocols and the standards of the Association of Otolaryngologists of India (AOI).
      </p>
    </aside>
  );
}

