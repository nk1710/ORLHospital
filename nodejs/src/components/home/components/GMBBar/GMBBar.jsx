"use client";

import React, { useState } from 'react';
import { Mail, MapPin, Phone, User, ChevronDown, Calendar, ShieldCheck, Clock, CheckCircle } from "lucide-react";
import FormLoader from "@/components/ui/FormLoader";
import SuccessModal from "@/components/ui/SuccessModal";
import './GMBBar.css';

const GMBBar = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    city: "",
    department: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'appointment',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        setFormData({
          name: "",
          number: "",
          email: "",
          city: "",
          department: "",
        });
      } else {
        alert(data.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = "w-full h-11 px-4 rounded-lg bg-white/10 text-white border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200 text-sm";
  const iconStyle = "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none";

  return (
    <div className="gmb-bar" role="complementary" aria-label="Book an appointment">
      <FormLoader open={loading} />
      <SuccessModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        message="Your appointment request has been submitted successfully! Our clinic coordinator will contact you shortly."
      />
      <div className="gmb-bar-inner">
        {/* Hospital Appointment Header */}
        <div className="appointment-header-strip mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="text-teal-300 w-5 h-5" />
              <h3 className="text-white text-lg md:text-xl font-bold m-0">
                Fast-Track OPD &amp; Surgery Consultation
              </h3>
            </div>
            <p className="text-slate-300 text-xs md:text-sm m-0">
              Consult Dr. (Prof.) Dhirendra Singh Kushwah at Jasola Vihar, CR Park, or Arjun Nagar
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-xs text-teal-200 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <CheckCircle size={14} className="text-teal-300" />
              Same-Day Appointments
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-teal-200 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <ShieldCheck size={14} className="text-teal-300" />
              Direct Specialist Review
            </span>
          </div>
        </div>

        <div className="form-container-full">
          <form onSubmit={handleSubmit} noValidate className="appointment-grid">
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
              <User strokeWidth={1.5} className={iconStyle} />
            </div>

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
              <Phone strokeWidth={1.5} className={iconStyle} />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={inputStyle + " pr-10"}
              />
              <Mail strokeWidth={1.5} className={iconStyle} />
            </div>

            <div className="relative">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Your City / Locality *"
                className={inputStyle + " pr-10"}
                required
              />
              <MapPin strokeWidth={1.5} className={iconStyle} />
            </div>

            <div className="relative">
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className={inputStyle + " pr-10 cursor-pointer appearance-none"}
              >
                <option value="">Select Speciality / Clinic</option>
                <option value="Ear (Otology)">Ear (Otology) &amp; Hearing</option>
                <option value="Cochlear and Hearing implants">Cochlear &amp; Hearing Implants</option>
                <option value="Nose and Sinus (Rhinology)">Nose &amp; Sinus (Rhinology / FESS)</option>
                <option value="Septoplasty">Pain-Free Septoplasty (DNS)</option>
                <option value="Voice and Throat (Laryngology)">Voice &amp; Throat (Laryngology)</option>
                <option value="Dizziness and Vertigo (Neuro-otology)">Dizziness / Vertigo Clinic</option>
                <option value="Paediatric ENT Diagnostics">Paediatric ENT Care</option>
                <option value="Head and Neck">Head &amp; Neck Surgery</option>
                <option value="Skull Base Surgery">Skull Base Surgery</option>
              </select>
              <ChevronDown strokeWidth={1.5} className={iconStyle} />
            </div>

            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? "Submitting..." : "Book Appointment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GMBBar;
