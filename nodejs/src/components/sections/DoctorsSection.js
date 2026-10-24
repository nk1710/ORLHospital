"use client";

import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import { useState } from "react";
import AppointmentModal from "@/components/ui/AppointmentModal";

const doctors = [
  {
    name: "Dr.(Prof.) Dhirendra Singh Kushwah",
    credentials:
      "MBBS MS(ENT) Cochlear Implant & Endoscopic Sinus, Head and Neck Surgeon, Specialist in OSA (Sleep) Surgery",
    image: "/images/dhirendra-kushwah.jpg",
    experience: "25+ Years Experience",
  },
];

export default function DoctorsSection() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <>
      <AppointmentModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />

      <section className="py-6 md:py-12 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-4">

    {/* HEADER + DESCRIPTION */}
    <div className="max-w-4xl">
      <SectionTitle
        title="Meet Our Doctor"
        subheading="Experienced doctors delivering compassionate, patient-first care with modern treatment approaches."
      />

      {/* DOCTOR CARD */}
      <div className="mt-6">
  {doctors.map((doc, i) => (
    <div
      key={i}
      className="w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group md:flex"
    >
      {/* IMAGE */}
      <div className="relative w-full md:w-2/5 min-h-[320px] md:min-h-[360px]">
        <Image
          src={doc.image}
          alt={doc.name}
          fill
          className="object-contain bg-slate-50"
        />

        <span className="absolute top-3 left-3 text-xs bg-white/90 px-3 py-1 rounded-full shadow-sm">
          {doc.experience}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
        <h3 className="font-semibold text-xl md:text-2xl leading-tight">
          {doc.name}
        </h3>

        <p className="text-sm md:text-base text-slate-500 mt-3 leading-relaxed">
          {doc.credentials}
        </p>

        <button
          onClick={() => setAppointmentOpen(true)}
          className="mt-6 w-fit px-6 text-sm font-medium bg-[#0d9488] text-white py-2.5 rounded-lg hover:opacity-90 transition"
        >
          Book Appointment
        </button>
      </div>
    </div>
  ))}
</div>
    </div>

  </div>
</section>
    </>
  );
}