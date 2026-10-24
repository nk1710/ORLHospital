"use client";

import { motion } from "framer-motion";
import { User, Phone, Mail, MapPin, Stethoscope } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import FormLoader from "./FormLoader";

export default function AsideAppointmentForm() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/form-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, type: "appointment" }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Appointment submitted successfully!");
        setFormData({
          name: "",
          number: "",
          email: "",
          city: "",
          department: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      alert("Network error");
    }

    setLoading(false);
  };
  return (
    <div className="w-full max-w-md mx-auto">
      <FormLoader open={loading} />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-2xl rounded-2xl border-none">
          <CardContent className="p-6 space-y-5">
            <div className="text-center space-y-1">
              <h3 className="text-xl font-bold">Book Appointment</h3>
              <p className="text-sm text-slate-500">
                Quick & easy booking
              </p>
            </div>

            <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4">
              {/* Name */}
              <div className="relative">
                <label htmlFor="nameinput" className="hidden">name</label>
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type="text"
                  name="name"
                  id="nameinput"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Patient Name"
                  required
                  className="pl-10 h-10 rounded-xl"
                />
              </div>

              {/* Phone */}
              <div className="relative">
              <label htmlFor="phoneinput" className="hidden">phone number</label>
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type="tel"
                  name="number"
                  id="phoneinput"
                  value={formData.number}
              onChange={handleChange}
                  placeholder="Phone Number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                  className="pl-10 h-10 rounded-xl"
                />
              </div>

              {/* Email */}
              <div className="relative">
              <label htmlFor="emailinput" className="hidden">email</label>
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type="email"
                  name="email"
                  id="emailinput"
                  value={formData.email}
              onChange={handleChange}
                  placeholder="Email (optional)"
                  className="pl-10 h-10 rounded-xl"
                />
              </div>

              {/* City */}
              <div className="relative">
              <label htmlFor="cityinput" className="hidden">city</label>
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type="text"
                  name="city"
                  id="cityinput"
                  value={formData.city}
              onChange={handleChange}
                  placeholder="City"
                  required
                  className="pl-10 h-10 rounded-xl"
                />
              </div>

              {/* Department */}
              <div className="relative">
              <label htmlFor="departmentinput" className="hidden">department</label>
                <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select
                  name="department"
                  id="departmentinput"
                  value={formData.department}
              onChange={handleChange}
                  className="w-full h-10 pl-10 pr-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-black"
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
              </div>

              {/* Submit */}
              <Button className="w-full h-10 bg-[#0d9488] rounded-xl text-base">
                Book Appointment
              </Button>

              {/* Loader (optional hook later) */}
              <p className="text-center text-sm text-slate-400 hidden">
                Processing your request...
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
