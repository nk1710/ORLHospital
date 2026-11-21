"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, User, CheckCircle2, MessageCircle } from "lucide-react";

export default function AutoPopupModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const DISMISS_KEY = "orl_callback_dismissed_until";
  const SUBMIT_KEY = "orl_callback_submitted";

  const handleClose = () => {
    setOpen(false);
    try {
      // 24 hour cool-off on dismiss
      const expireTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem(DISMISS_KEY, expireTime.toString());
    } catch (e) {}
  };

  useEffect(() => {
    try {
      if (localStorage.getItem(SUBMIT_KEY) === "true") return;
      const dismissedUntil = localStorage.getItem(DISMISS_KEY);
      if (dismissedUntil && Date.now() < parseInt(dismissedUntil, 10)) {
        return;
      }
    } catch (e) {}

    let minStayTimer = false;
    const stayRequirement = setTimeout(() => {
      minStayTimer = true;
    }, 8000);

    // 25 Seconds Timer
    const timer = setTimeout(() => {
      setOpen(true);
    }, 25000);

    // Desktop Exit Intent
    const handleMouseLeave = (e) => {
      if (e.clientY <= 15 && minStayTimer && window.innerWidth > 768) {
        setOpen(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
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
      setErrorMsg("Kripya apna naam dalein.");
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");
    const sanitized = cleanPhone.length === 12 && cleanPhone.startsWith("91") 
      ? cleanPhone.slice(2) 
      : cleanPhone;

    if (!/^[6-9][0-9]{9}$/.test(sanitized)) {
      setErrorMsg("Kripya 10-digit mobile number dalein.");
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
          concern: "General ENT / Surgery Callback",
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
        setErrorMsg(data.message || "Something went wrong.");
      }
    } catch (err) {
      setErrorMsg("Network error. Direct call: +91-9311449825");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(15, 23, 42, 0.65)",
            backdropFilter: "blur(4px)",
            padding: "16px",
          }}
        >
          {/* Backdrop Click Dismiss */}
          <div
            onClick={handleClose}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              cursor: "pointer",
            }}
            aria-hidden="true"
          />

          {/* Compact Modal Box (Center aligned, max 350px) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "350px",
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
              overflow: "hidden",
              zIndex: 10,
              border: "1px solid #e2e8f0",
              margin: "auto",
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "linear-gradient(135deg, #0d9488 0%, #065f46 100%)",
                padding: "16px 20px 14px",
                color: "#ffffff",
                position: "relative",
              }}
            >
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "none",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "background 0.2s",
                }}
              >
                <X size={15} />
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#4ade80",
                    display: "inline-block",
                    boxShadow: "0 0 8px #4ade80",
                  }}
                />
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#ccfbf1", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Quick Doctor Callback
                </span>
              </div>

              <h4 style={{ fontSize: "16px", fontWeight: 800, margin: "0 0 2px", color: "#ffffff", lineHeight: 1.25 }}>
                Free Doctor Consultation?
              </h4>
              <p style={{ fontSize: "12px", margin: 0, color: "#e6fffa", fontWeight: 500 }}>
                10 मिनट में डॉ. कुशवाह की टीम से कॉल पाएं
              </p>
            </div>

            {/* Content Body */}
            <div style={{ padding: "18px 20px 16px" }}>
              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  
                  {/* Name Input */}
                  <div>
                    <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                      Aapka Naam (Your Name)
                    </label>
                    <div style={{ position: "relative" }}>
                      <span
                        style={{
                          position: "absolute",
                          left: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#94a3b8",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <User size={15} />
                      </span>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ramesh Kumar"
                        style={{
                          width: "100%",
                          padding: "9px 12px 9px 34px",
                          borderRadius: "10px",
                          border: "1px solid #cbd5e1",
                          fontSize: "14px",
                          color: "#0f172a",
                          outline: "none",
                          backgroundColor: "#f8fafc",
                          boxSizing: "border-box",
                        }}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                      Mobile / WhatsApp Number
                    </label>
                    <div
                      style={{
                        display: "flex",
                        borderRadius: "10px",
                        border: "1px solid #cbd5e1",
                        overflow: "hidden",
                        backgroundColor: "#f8fafc",
                      }}
                    >
                      <span
                        style={{
                          padding: "9px 10px",
                          fontSize: "12px",
                          fontWeight: 700,
                          backgroundColor: "#f1f5f9",
                          color: "#475569",
                          borderRight: "1px solid #cbd5e1",
                          display: "flex",
                          alignItems: "center",
                          userSelect: "none",
                        }}
                      >
                        +91
                      </span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit mobile number"
                        maxLength={10}
                        style={{
                          width: "100%",
                          padding: "9px 12px",
                          fontSize: "14px",
                          color: "#0f172a",
                          border: "none",
                          outline: "none",
                          backgroundColor: "transparent",
                          boxSizing: "border-box",
                        }}
                        required
                      />
                    </div>
                  </div>

                  {/* Error Notification */}
                  {errorMsg && (
                    <div
                      style={{
                        padding: "6px 10px",
                        borderRadius: "8px",
                        backgroundColor: "#fef2f2",
                        border: "1px solid #fecaca",
                        color: "#b91c1c",
                        fontSize: "11px",
                        fontWeight: 600,
                      }}
                    >
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      marginTop: "4px",
                      width: "100%",
                      padding: "11px",
                      borderRadius: "12px",
                      backgroundColor: "#0d9488",
                      background: "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
                      color: "#ffffff",
                      fontSize: "13px",
                      fontWeight: 800,
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      boxShadow: "0 4px 12px rgba(13, 148, 136, 0.35)",
                      opacity: loading ? 0.7 : 1,
                      transition: "transform 0.15s ease",
                    }}
                  >
                    {loading ? (
                      "Connecting..."
                    ) : (
                      <>
                        <Phone size={14} style={{ color: "#ffffff" }} />
                        <span>Call Me Back (कॉल पाएं) &rarr;</span>
                      </>
                    )}
                  </button>

                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "10px",
                      color: "#94a3b8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <span>🔒 100% Privacy</span>
                    <span>&bull;</span>
                    <span>Zero Spam Guarantee</span>
                  </div>
                </form>
              ) : (
                /* Success View */
                <div style={{ textAlign: "center", padding: "10px 0 6px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "#ecfdf5",
                      color: "#10b981",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 10px",
                    }}
                  >
                    <CheckCircle2 size={30} />
                  </div>
                  <h5 style={{ fontSize: "16px", fontWeight: 800, color: "#0f172a", margin: "0 0 4px" }}>
                    Request Sent! (रिक्वेस्ट मिल गई)
                  </h5>
                  <p style={{ fontSize: "12px", color: "#64748b", margin: "0 0 14px", lineHeight: 1.4 }}>
                    Dr. Kushwah ki team aapko <strong style={{ color: "#0d9488" }}>10-15 minute</strong> me call karegi.
                  </p>

                  <a
                    href="https://wa.me/919311449825?text=Hello%20Dr.%20Dhirendra%20Singh%20Kushwah,%20maine%20website%20par%20callback%20request%20ki%20thi."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      padding: "8px 16px",
                      borderRadius: "10px",
                      backgroundColor: "#16a34a",
                      color: "#ffffff",
                      fontSize: "12px",
                      fontWeight: 700,
                      textDecoration: "none",
                      width: "100%",
                      boxSizing: "border-box",
                      marginBottom: "6px",
                    }}
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp Par Baat Karein</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleClose}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#94a3b8",
                      fontSize: "11px",
                      cursor: "pointer",
                      padding: "4px",
                    }}
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
