"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function AutoPopupModal() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    city: "",
    department: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  const handleClose = () => {
    setOpen(false)
    localStorage.setItem("AppointmentpopupShown", "true")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "appointment" }),
      })

      const data = await res.json()

      if (data.success) {
        alert("Appointment submitted successfully!")
        setFormData({
          name: "",
          number: "",
          email: "",
          city: "",
          department: "",
        })
      } else {
        alert(data.message || "Something went wrong")
      }
    } catch {
      alert("Network error")
    }

    setLoading(false)
  }

  useEffect(() => {
    const alreadyShown = localStorage.getItem("AppointmentpopupShown")
    if (!alreadyShown) {
      const timer = setTimeout(() => setOpen(true), 5000)
      return () => clearTimeout(timer)
    }
   }, [])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* HEADER */}
            <div className="relative bg-gradient-to-l from-sky-700 to-teal-700 px-6 py-4 text-white">
              <h3 className="text-lg">
                Book Appointment
              </h3>

              <button
                onClick={handleClose}
                className="absolute right-4 top-3 text-white/80 hover:text-white text-lg"
              >
                ✕
              </button>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="p-6 space-y-4"
              noValidate
            >
              {/* SELECT */}
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm 
                focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Select Department</option>
                <option>Ear (Otology)</option>
                <option>Cochlear and Hearing implants</option>
                <option>Nose and Sinus (Rhinology)</option>
                <option>Voice and Throat (Laryngology)</option>
                <option>Dizziness and Vertigo (Neuro-otology)</option>
                <option>Paediatric ENT Diagnostics</option>
                <option>Head and Neck</option>
                <option>Skull Base Surgery</option>
              </select>

              {/* INPUTS */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm 
                focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />

              <input
                type="tel"
                name="number"
                placeholder="Phone number"
                value={formData.number}
                onChange={handleChange}
                pattern="[0-9]{10}"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm 
                focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email (optional)"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm 
                focus:outline-none focus:ring-2 focus:ring-sky-500"
              />

              <input
                type="text"
                name="city"
                placeholder="Your City"
                value={formData.city}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm 
                focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-sky-700 to-teal-900 text-white 
                py-2.5 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Connect Now"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}