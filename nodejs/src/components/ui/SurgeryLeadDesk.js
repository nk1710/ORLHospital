import { ShieldCheck, Sparkles, MessageCircle, Phone, FileText, CheckCircle2, Clock } from "lucide-react";

export default function SurgeryLeadDesk({ 
  procedureName = "ENT Surgery",
  customMessage = null 
}) {
  const whatsappText = encodeURIComponent(
    customMessage || `Hello Dr. Kushwah, I am inquiring about ${procedureName} cost, cashless insurance eligibility, and surgery dates at ORL Hospital.`
  );

  return (
    <div className="my-10 overflow-hidden rounded-3xl border border-teal-200/80 bg-gradient-to-br from-teal-950 via-slate-900 to-teal-900 text-white shadow-2xl">
      <div className="p-6 sm:p-8 md:p-10">
        
        {/* Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-teal-500/20 pb-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-3.5 py-1 text-xs font-semibold text-teal-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>VIP Surgical Desk &bull; ORL Hospital Delhi</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live Consultation & Cost Desk</span>
          </div>
        </div>

        {/* Main Pitch */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Planning {procedureName}?
              <span className="block text-teal-300 font-bold text-xl sm:text-2xl mt-1">
                Get Exact Surgery Cost &amp; Cashless Insurance Approval
              </span>
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Consult <strong>Dr. (Prof.) Dhirendra Singh Kushwah</strong> (25+ Years Experience). Whether you have a fresh diagnosis or already hold a doctor&apos;s report, our surgical desk provides transparent pricing and second opinions.
            </p>

            {/* 4 Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span><strong>100% Cashless Mediclaim</strong> (All TPAs)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
                <span><strong>Painless Daycare</strong> (Same-Day Discharge)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span><strong>0% Interest EMI</strong> Options Available</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <FileText className="h-4 w-4 text-emerald-400 shrink-0" />
                <span><strong>Free Report Review</strong> on WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Action Box */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-300">
              Direct Surgeon Helpline
            </div>

            <p className="text-xs text-slate-300">
              Send your CT Scan, MRI or Audiometry report on WhatsApp for an immediate second opinion.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/919311449825?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Report / Surgery Inquiry</span>
              </a>

              <a
                href="tel:+919311449825"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3 text-sm font-semibold text-white transition"
              >
                <Phone className="h-4 w-4" />
                <span>Call Surgery Desk: +91 9311449825</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-400">
              ORL Hospital &bull; Jasola Vihar &bull; CR Park &bull; South Delhi
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
