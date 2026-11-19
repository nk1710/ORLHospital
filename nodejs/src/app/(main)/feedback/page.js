import Link from "next/link";
import {
  Heart,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsUp,
  UserCheck,
} from "lucide-react";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.com/feedback";

  return {
    title:
      "Patient Reviews & Feedback | Dr.(Prof.) Dhirendra Singh Kushwah ENT",
    description:
      "Read real patient reviews and share your clinical treatment experience with Dr.(Prof.) Dhirendra Singh Kushwah. Committed to world-class patient satisfaction and compassionate ENT healthcare.",
    keywords: [
      "Dr Dhirendra Singh Kushwah reviews",
      "ENT doctor feedback Delhi",
      "Patient reviews ORL International Hospital",
      "Best ENT surgeon testimonials",
    ],
    authors: [{ name: "Dr.(Prof.) Dhirendra Singh Kushwah" }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Patient Feedback & Reviews | Dr. Dhirendra Singh Kushwah",
      description:
        "4.9 / 5 Rating across 2,000+ patient reviews. Your voice drives our continuous surgical and clinical excellence.",
      url: url,
      siteName: "Dr.(Prof.) Dhirendra Singh Kushwah - Senior ENT Surgeon",
      type: "website",
      locale: "en_IN",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    location: "South Extension, New Delhi",
    procedure: "Endoscopic Sinus Surgery (FESS)",
    rating: 5,
    date: "January 2026",
    comment:
      "I suffered from chronic sinusitis for over 8 years with unbearable facial pressure. Dr. Kushwah's endoscopic surgery was completely life changing. He is exceptionally calm, clear, and reassuring. Recovery was fast and painless.",
  },
  {
    name: "Sunita Verma",
    location: "CR Park, New Delhi",
    procedure: "Tympanoplasty (Eardrum Repair)",
    rating: 5,
    date: "December 2025",
    comment:
      "Had a perforated eardrum since childhood with constant water discharge. Dr. Dhirendra Singh Kushwah performed a microscopic tympanoplasty. The ear is 100% dry and my hearing test shows normal hearing now! Blessed to have found him.",
  },
  {
    name: "Amitabh Banerjee",
    location: "Kalkaji, New Delhi",
    procedure: "Packless Septoplasty",
    rating: 5,
    date: "November 2025",
    comment:
      "I was terrified of septoplasty because of old horror stories about nasal packing removal. Dr. Kushwah performed his painless packless technique. I had zero packing, could breathe immediately after waking up, and felt zero pain!",
  },
  {
    name: "Pooja Malhotra",
    location: "Jasola Vihar, New Delhi",
    procedure: "Pediatric Adenotonsillectomy",
    rating: 5,
    date: "October 2025",
    comment:
      "My 6-year-old son had severe mouth breathing and sleep apnea due to enlarged adenoids and tonsils. Dr. Kushwah used coblation technology. He recovered smoothly within 4 days and now sleeps peacefully throughout the night.",
  },
];

export default async function FeedbackPage() {
  return (
    <>
      {/* ────────────────── HERO BANNER ────────────────── */}
      <section
        className="relative text-white pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-teal-950"
        style={{
          background: "linear-gradient(135deg, #022c22 0%, #064e3b 40%, #0f766e 85%, #042f2e 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-teal-200 mb-4 font-medium">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-white">Patient Feedback</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-700/50 border border-teal-500/40 text-teal-200 text-xs font-semibold mb-3 backdrop-blur-sm">
              <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>4.9 / 5 Rating across 2,000+ Reviews</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Patient Experiences &amp; Feedback
            </h1>

            <p className="mt-3 text-sm sm:text-base text-teal-100 leading-relaxed">
              Your recovery and trust are our greatest rewards. Read verified patient stories or share your personal consultation and surgical journey with <strong className="text-white font-semibold">Dr.(Prof.) Dhirendra Singh Kushwah</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────── TESTIMONIALS & FORM ────────────────── */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* STATS STRIP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-teal-700">50k+</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Patients Treated</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-teal-700">15k+</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Surgeries Completed</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center shadow-sm">
              <div className="flex items-center justify-center gap-1">
                <span className="text-3xl font-extrabold text-teal-700">4.9</span>
                <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
              </div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Average Star Rating</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-teal-700">99.4%</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Satisfaction Rate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT: VERIFIED TESTIMONIALS */}
            <div className="lg:col-span-7 space-y-4">
              <div className="mb-2">
                <h2 className="text-xl font-bold text-slate-900">Verified Patient Reviews</h2>
                <p className="text-xs text-slate-500 mt-0.5">Real experiences shared by patients treated across our South Delhi centres.</p>
              </div>

              {TESTIMONIALS.map((rev, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">{rev.name}</h3>
                      <p className="text-xs text-slate-400">{rev.location} · <span className="text-teal-700 font-medium">{rev.procedure}</span></p>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-teal-700 font-medium">
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>Verified Patient</span>
                    </span>
                    <span>{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: LEAVE FEEDBACK BOX */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Share Your Experience</h3>
              <p className="text-xs text-slate-500 mt-1">
                Your feedback helps us continuously elevate our surgical precision and patient care.
              </p>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-teal-50 border border-teal-100 text-xs text-teal-800 space-y-2">
                  <p className="font-bold flex items-center gap-1.5 text-teal-900">
                    <ThumbsUp className="w-4 h-4 text-teal-600" />
                    <span>Review Directly on Google</span>
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    If you had a positive experience at ORL International Group of Hospitals or our CR Park/Arjun Nagar clinics, please take a moment to leave a review on Google Maps.
                  </p>
                  <a
                    href="https://maps.google.com/?q=ORL+International+Group+of+Hospitals+Jasola+Vihar+New+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center w-full py-2.5 px-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition"
                  >
                    Write a Google Review
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-700 mb-2">Patient Care Ombudsman Desk:</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    If you have suggestions, clinical feedback, or need immediate assistance regarding your ongoing care:
                  </p>
                  <div className="mt-3 space-y-1.5 text-xs text-slate-700">
                    <p><strong>Email:</strong> drdhirendrasinghent@gmail.com</p>
                    <p><strong>Phone:</strong> +91-9311449825</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
