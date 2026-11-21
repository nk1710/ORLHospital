import { ShieldCheck, Sparkles, MessageCircle, Phone, FileText, CheckCircle2, Clock } from "lucide-react";

export default function SurgeryLeadDesk({ 
  procedureName = "ENT Surgery",
  customMessage = null 
}) {
  const whatsappText = encodeURIComponent(
    customMessage || `Hello Dr. Kushwah, I am inquiring about ${procedureName} cost, cashless insurance eligibility, and surgery dates at ORL Hospital.`
  );

  return (
    <div 
      className="my-10 overflow-hidden rounded-3xl border shadow-2xl transition-all"
      style={{
        backgroundColor: "#041c20",
        background: "linear-gradient(135deg, #03171a 0%, #062b30 50%, #0a3a40 100%)",
        borderColor: "rgba(45, 212, 191, 0.3)",
        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.5)"
      }}
    >
      <div className="p-6 sm:p-8 md:p-10">
        
        {/* Header Badge */}
        <div 
          className="flex flex-wrap items-center justify-between gap-3 pb-5"
          style={{ borderBottom: "1px solid rgba(45, 212, 191, 0.2)" }}
        >
          <div 
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold"
            style={{
              backgroundColor: "rgba(20, 184, 166, 0.2)",
              border: "1px solid rgba(45, 212, 191, 0.4)",
              color: "#5eead4"
            }}
          >
            <Sparkles className="h-3.5 w-3.5" style={{ color: "#5eead4" }} />
            <span>VIP Surgical Desk &bull; ORL Hospital Delhi</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: "#94a3b8" }}>
            <span 
              className="flex h-2.5 w-2.5 rounded-full animate-pulse" 
              style={{ backgroundColor: "#10b981", boxShadow: "0 0 8px #10b981" }} 
            />
            <span style={{ color: "#cbd5e1" }}>Live Surgical Helpline &amp; Cost Desk</span>
          </div>
        </div>

        {/* Main Pitch */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <h3 
              className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight"
              style={{ color: "#ffffff", textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
            >
              Planning {procedureName}?
              <span 
                className="block font-bold text-xl sm:text-2xl mt-1.5"
                style={{ color: "#2dd4bf" }}
              >
                Get Exact Surgery Cost &amp; Cashless Insurance Approval
              </span>
            </h3>

            <p 
              className="text-sm leading-relaxed"
              style={{ color: "#cbd5e1" }}
            >
              Consult <strong style={{ color: "#ffffff" }}>Dr. (Prof.) Dhirendra Singh Kushwah</strong> (25+ Years Experience). Whether you have a fresh diagnosis or already hold a doctor&apos;s report, our surgical desk provides transparent package pricing, cashless TPA approval, and expert second opinions.
            </p>

            {/* 4 Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div 
                className="flex items-center gap-2.5 rounded-xl p-2.5"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.08)" }}
              >
                <ShieldCheck className="h-4 w-4 shrink-0" style={{ color: "#34d399" }} />
                <span style={{ color: "#f1f5f9" }}><strong style={{ color: "#ffffff" }}>100% Cashless Mediclaim</strong> (All TPAs)</span>
              </div>

              <div 
                className="flex items-center gap-2.5 rounded-xl p-2.5"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.08)" }}
              >
                <Clock className="h-4 w-4 shrink-0" style={{ color: "#34d399" }} />
                <span style={{ color: "#f1f5f9" }}><strong style={{ color: "#ffffff" }}>Painless Daycare</strong> (Same-Day Discharge)</span>
              </div>

              <div 
                className="flex items-center gap-2.5 rounded-xl p-2.5"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.08)" }}
              >
                <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "#34d399" }} />
                <span style={{ color: "#f1f5f9" }}><strong style={{ color: "#ffffff" }}>0% Interest EMI</strong> Options Available</span>
              </div>

              <div 
                className="flex items-center gap-2.5 rounded-xl p-2.5"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.08)" }}
              >
                <FileText className="h-4 w-4 shrink-0" style={{ color: "#34d399" }} />
                <span style={{ color: "#f1f5f9" }}><strong style={{ color: "#ffffff" }}>Free Report Review</strong> on WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Action Box */}
          <div 
            className="lg:col-span-5 rounded-2xl p-6 text-center space-y-4"
            style={{
              backgroundColor: "rgba(2, 18, 22, 0.85)",
              border: "1px solid rgba(45, 212, 191, 0.35)",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)"
            }}
          >
            <div 
              className="text-xs font-extrabold uppercase tracking-widest"
              style={{ color: "#2dd4bf" }}
            >
              Direct Surgeon Helpline
            </div>

            <p 
              className="text-xs leading-relaxed"
              style={{ color: "#cbd5e1" }}
            >
              Send your CT Scan, MRI or Audiometry report on WhatsApp for an immediate second opinion &amp; cost estimate.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/919311449825?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 rounded-xl px-5 py-3.5 text-sm font-bold transition hover:opacity-95 pcf-whatsapp-pulse cursor-pointer"
                style={{
                  backgroundColor: "#059669",
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  color: "#ffffff",
                  boxShadow: "0 4px 15px rgba(5, 150, 105, 0.45)"
                }}
              >
                <MessageCircle className="h-4 w-4" style={{ color: "#ffffff" }} />
                <span style={{ color: "#ffffff" }}>WhatsApp Report / Surgery Inquiry</span>
              </a>

              <a
                href="tel:+919311449825"
                className="w-full flex items-center justify-center gap-2.5 rounded-xl px-5 py-3 text-sm font-bold transition hover:bg-white/15"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  color: "#ffffff"
                }}
              >
                <Phone className="h-4 w-4" style={{ color: "#ffffff" }} />
                <span style={{ color: "#ffffff" }}>Call Surgery Desk: +91 9311449825</span>
              </a>
            </div>

            {/* Insurance Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-1.5 text-[10px] font-semibold" style={{ color: "#5eead4" }}>
              <span>✓ Star Health</span>
              <span>&bull;</span>
              <span>✓ Care</span>
              <span>&bull;</span>
              <span>✓ HDFC ERGO</span>
              <span>&bull;</span>
              <span>✓ ICICI</span>
              <span>&bull;</span>
              <span>✓ All TPAs Cashless</span>
            </div>

            <p 
              className="text-[11px] font-medium"
              style={{ color: "#94a3b8" }}
            >
              ORL Hospital &bull; Jasola Vihar &bull; CR Park &bull; South Delhi
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
