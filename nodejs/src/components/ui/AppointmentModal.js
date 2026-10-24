"use client";

import { useState, useEffect, useRef } from "react";
import { X, User, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import FormLoader from "@/components/ui/FormLoader";
import SuccessModal from "@/components/ui/SuccessModal";

const inputStyle =
    "w-full h-11 px-4 rounded-md bg-white/10 text-white border border-white/20 placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/40 transition-all duration-200";
const iconStyle =
    "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none";

const EMPTY_FORM = {
    name: "",
    number: "",
    email: "",
    city: "",
    department: "",
};

export default function AppointmentModal({ open, onClose }) {
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const overlayRef = useRef(null);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            setFormData(EMPTY_FORM);
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    /* close on Escape */
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    const handleChange = (e) =>
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/form-submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    type: "appointment",
                }),
            });

            const data = await response.json();

            if (data.success) {
                setShowSuccess(true);
                setFormData(EMPTY_FORM);
            } else {
                alert(data.message || "Failed to submit form");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === overlayRef.current) onClose();
    };

    if (!open) return null;

    return (
        <div
            ref={overlayRef}
            onClick={handleOverlayClick}
            className="appt-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Book Appointment"
        >
            <FormLoader open={loading} />
            <SuccessModal
                open={showSuccess}
                onClose={() => {
                    setShowSuccess(false);
                    onClose();
                }}
                message="Your appointment request has been submitted successfully!"
            />
            <div className="appt-modal">
                {/* Header */}
                <div className="appt-modal-header">
                    <div>
                        <p className="appt-modal-eyebrow">ENT Specialist · 25+ Years</p>
                        <h2 className="appt-modal-title">Book an Appointment</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="appt-close-btn"
                        aria-label="Close modal"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Divider */}
                <div className="appt-divider" />

                {/* Form */}
                <form onSubmit={handleSubmit} noValidate className="appt-form">
                    {/* Name */}
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name *"
                            className={inputStyle + " pr-10"}
                            required
                        />
                        <User strokeWidth={1} className={iconStyle} />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                        <input
                            type="tel"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            placeholder="Phone Number *"
                            pattern="[0-9]{10}"
                            maxLength={10}
                            className={inputStyle + " pr-10"}
                            required
                        />
                        <Phone strokeWidth={1} className={iconStyle} />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className={inputStyle + " pr-10"}
                        />
                        <Mail strokeWidth={1} className={iconStyle} />
                    </div>

                    {/* City */}
                    <div className="relative">
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Your City *"
                            className={inputStyle + " pr-10"}
                            required
                        />
                        <MapPin strokeWidth={1} className={iconStyle} />
                    </div>

                    <div className="relative md:col-span-2">
                        <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className={inputStyle + " pr-10 cursor-pointer appearance-none"}
                        >
                            <option value="">Select Department</option>
                            <option value="Ear (Otology)">Ear (Otology)</option>
                            <option value="Cochlear and Hearing implants">
                                Cochlear Implants
                            </option>
                            <option value="Nose and Sinus (Rhinology)">
                                Nose and Sinus
                            </option>
                            <option value="Voice and Throat (Laryngology)">
                                Voice and Throat
                            </option>
                            <option value="Dizziness and Vertigo (Neuro-otology)">
                                Dizziness / Vertigo
                            </option>
                            <option value="Paediatric ENT Diagnostics">
                                Paediatric ENT
                            </option>
                            <option value="Head and Neck">Head and Neck</option>
                            <option value="Skull Base Surgery">Skull Base Surgery</option>
                        </select>
                        <ChevronDown strokeWidth={1} className={iconStyle} />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="appt-submit-btn md:col-span-2"
                    >
                        {loading ? <span className="appt-spinner" /> : "Book Now"}
                    </button>
                </form>

                <p className="appt-note">
                    We'll call you within 24 hours to confirm your slot.
                </p>
            </div>

            <style>{`
        .appt-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(15, 23, 42, 0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: appt-fade-in 0.2s ease;
        }

        @keyframes appt-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .appt-modal {
          background: #1e2d45;
          border-radius: 20px;
          width: 100%;
          max-width: 560px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2rem;
          box-shadow:
            0 4px 6px -1px rgba(0,0,0,0.07),
            0 20px 60px -10px rgba(15, 23, 42, 0.25);
          animation: appt-slide-up 0.28s cubic-bezier(0.34, 1.3, 0.64, 1);
        }

        @keyframes appt-slide-up {
          from { transform: translateY(28px) scale(0.97); opacity: 0; }
          to   { transform: translateY(0)    scale(1);    opacity: 1; }
        }

        .appt-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .appt-modal-eyebrow {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0ea5e9;
          margin-bottom: 4px;
        }

        .appt-modal-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #f1f5f9;
          line-height: 1.2;
        }

        .appt-close-btn {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          cursor: pointer;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }
        .appt-close-btn:hover {
          background: #fee2e2;
          border-color: #fca5a5;
          color: #dc2626;
        }

        .appt-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #e2e8f0, transparent);
          margin: 1.25rem 0;
        }

        /* ── Form grid ── */
        .appt-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.875rem;
        }

        @media (max-width: 480px) {
          .appt-form {
            grid-template-columns: 1fr;
          }
          .appt-form .md\\:col-span-2 {
            grid-column: span 1;
          }
          .appt-modal {
            padding: 1.5rem 1.25rem;
          }
        }

        /* ── Submit button ── */
        .appt-submit-btn {
          grid-column: span 2;
          width: 100%;
          padding: 0.875rem 1.5rem;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%);
          color: white;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(14, 165, 233, 0.35);
        }
        .appt-submit-btn:hover:not(:disabled) {
          opacity: 0.93;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(14, 165, 233, 0.45);
        }
        .appt-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* ── Spinner ── */
        .appt-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ── Footer note ── */
        .appt-note {
          margin-top: 1rem;
          text-align: center;
          font-size: 0.75rem;
          color: #94a3b8;
        }
      `}</style>
        </div>
    );
}
