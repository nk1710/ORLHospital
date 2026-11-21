"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Phone, 
  User, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  MessageCircle, 
  CheckCircle2, 
  FileText 
} from "lucide-react";

const CONCERN_OPTIONS = [
  { id: "second_opinion", label: "📋 Free 2nd Opinion on Report", short: "2nd Opinion" },
  { id: "nose_sinus", label: "👃 Nose Block / Sinus Surgery", short: "Nose/Sinus" },
  { id: "ear_hearing", label: "👂 Ear Discharge / Eardrum", short: "Ear/Hearing" },
  { id: "throat_tonsil", label: "🗣️ Tonsil / Voice / Throat", short: "Throat/Tonsil" },
];

export default function AutoPopupModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState(CONCERN_OPTIONS[0].label);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Dismiss suppression key (24 hours)
  const DISMISS_KEY = "orl_callback_dismissed_until";
  const SUBMIT_KEY = "orl_callback_submitted";

  const handleClose = () => {
    setOpen(false);
    try {
      // Suppress for 24 hours so user is NEVER spammed or annoyed
      const expireTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem(DISMISS_KEY, expireTime.toString());
    } catch (e) {
      // Storage access fail-safe
    }
  };

  useEffect(() => {
    try {
      const alreadySubmitted = localStorage.getItem(SUBMIT_KEY);
      if (alreadySubmitted === "true") return;

      const dismissedUntil = localStorage.getItem(DISMISS_KEY);
      if (dismissedUntil && Date.now() < parseInt(dismissedUntil, 10)) {
        return; // In cool-off period
      }
    } catch (e) {
      // ignore storage errors
    }

    let minStayTimer = false;
    const stayRequirement = setTimeout(() => {
      minStayTimer = true;
    }, 8000); // Must be on site at least 8 seconds for exit-intent

    // 1. Core Trigger: 25 Seconds Smart Timer
    const timer = setTimeout(() => {
      setOpen(true);
    }, 25000);

    // 2. Desktop Exit Intent Trigger (Cursor leaving towards browser tab)
    const handleMouseLeave = (e) => {
      if (e.clientY <= 15 && minStayTimer && window.innerWidth > 768) {
        setOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    // 3. Escape key closes modal
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      clearTimeout(stayRequirement);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Kripya apna naam darj karein.");
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");
    const sanitized = cleanPhone.length === 12 && cleanPhone.startsWith("91") 
      ? cleanPhone.slice(2) 
      : cleanPhone;

    if (!/^[6-9][0-9]{9}$/.test(sanitized)) {
      setErrorMsg("Kripya 10-digit ka valid mobile number dalein.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/quick-callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: sanitized,
          concern: concern,
          pageUrl: typeof window !== "undefined" ? window.location.href : "Website",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        try {
          localStorage.setItem(SUBMIT_KEY, "true");
        } catch (err) {}
      } else {
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Network error. Please call +91-9311449825 directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div 
          className="fixed inset-0 z-[99999] flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
          style={{ backgroundColor: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(6px)" }}
        >
          {/* Backdrop Click Dismiss */}
          <div 
            className="fixed inset-0"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 border border-teal-100 max-h-[92vh] flex flex-col"
            style={{ color: "#0f172a" }}
          >
            {/* Top Brand Bar */}
            <div 
              className="relative px-6 py-5 text-white shrink-0"
              style={{
                background: "linear-gradient(135deg, #041d1a 0%, #064e3b 50%, #022c22 100%)",
                borderBottom: "1px solid rgba(45, 212, 191, 0.3)"
              }}
            >
              {/* Close Button (Large Touch Target) */}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close popup"
                className="absolute right-4 top-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer border border-white/20"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span 
                  className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wide"
                  style={{ backgroundColor: "#f59e0b", color: "#0f172a" }}
                >
                  <Sparkles size={12} />
                  <span>VIP Doctor Callback Desk</span>
                </span>
                <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live in Delhi NCR
                </span>
              </div>

              <h3 
                className="text-lg sm:text-xl font-black leading-snug tracking-tight text-white pr-6"
                style={{ color: "#ffffff" }}
              >
                Need Quick Advice on ENT Surgery or Treatment?
              </h3>
              <p className="text-xs text-emerald-100 mt-1">
                डॉ. धीरेंद्र सिंह कुशवाह की सीनियर टीम से <strong className="text-white font-bold">10 मिनट में कॉल</strong> पर सही सलाह पाएं।
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Select Concern / Surgery Chips */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Aapko kis vishay me salah chahiye? (Choose Concern)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {CONCERN_OPTIONS.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setConcern(opt.label)}
                          className={`text-left px-3 py-2 rounded-xl text-xs font-semibold transition border cursor-pointer ${
                            concern === opt.label
                              ? "bg-teal-50 border-teal-600 text-teal-900 shadow-xs ring-1 ring-teal-600"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Aapka Naam (Patient Name) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white"
                        style={{ fontSize: "16px" }}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp / Mobile No. <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex rounded-xl border border-slate-300 overflow-hidden focus-within:ring-2 focus-within:ring-teal-600 focus-within:border-teal-600">
                      <span className="inline-flex items-center px-3 text-xs font-bold bg-slate-100 text-slate-600 border-r border-slate-200 select-none">
                        +91
                      </span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit mobile number"
                        maxLength={10}
                        className="w-full px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none bg-white"
                        style={{ fontSize: "16px" }}
                        required
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Doctor&apos;s surgical team will call or WhatsApp on this number.
                    </p>
                  </div>

                  {/* Error Message */}
                  {errorMsg && (
                    <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-2xl text-white font-black text-sm tracking-wide shadow-lg transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    style={{
                      background: "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
                      boxShadow: "0 4px 15px rgba(13, 148, 136, 0.4)",
                      color: "#ffffff"
                    }}
                  >
                    {loading ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Phone size={16} style={{ color: "#ffffff" }} />
                        <span style={{ color: "#ffffff" }}>Get Free Callback in 10 Mins (तुरंत कॉल पाएं) ➔</span>
                      </>
                    )}
                  </button>

                  {/* Trust Highlights */}
                  <div className="pt-2 border-t border-slate-100 grid grid-cols-3 gap-1 text-[10px] text-slate-500 text-center font-medium">
                    <span className="flex items-center justify-center gap-1">
                      <ShieldCheck size={12} className="text-emerald-600 shrink-0" />
                      100% Cashless
                    </span>
                    <span className="flex items-center justify-center gap-1">
                      <Clock size={12} className="text-emerald-600 shrink-0" />
                      10-Min Response
                    </span>
                    <span className="flex items-center justify-center gap-1">
                      <FileText size={12} className="text-emerald-600 shrink-0" />
                      Free 2nd Opinion
                    </span>
                  </div>
                </form>
              ) : (
                /* Success View */
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">
                    Request Received! (रिक्वेस्ट मिल गई)
                  </h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Shukriya <strong>{name}</strong>! Dr. (Prof.) Dhirendra Singh Kushwah ki team aapko agle <strong className="text-teal-700">10 se 15 minute</strong> me call karegi.
                  </p>

                  <div className="pt-3 flex flex-col sm:flex-row gap-2 justify-center">
                    <a
                      href="https://wa.me/919311449825?text=Hello%20Dr.%20Dhirendra%20Singh%20Kushwah,%20maine%20website%20par%20callback%20request%20ki%20thi.%20Mujhe%20surgery/treatment%20ke%20baare%20me%20puchna%20hai."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl font-bold text-xs text-white flex items-center justify-center gap-2"
                      style={{ backgroundColor: "#16a34a", color: "#ffffff" }}
                    >
                      <MessageCircle size={15} />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-4 py-3 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
