"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import SectionTitle from "../ui/SectionTitle";

export default function Departments() {
  const departments = [
    {
      title: "Allergy Clinic",
      img: "/images/allergy.jpg",
      icon: "/images/icon6.png",
      description:
        "Expert diagnosis and treatment for allergies affecting the nose, throat, ears, and respiratory system, helping you breathe and feel better.",
      link: "/specialities/pediatric-ent",
    },
    {
      title: "Rhinology Clinic",
      img: "/images/rahinology.jpg",
      icon: "/images/icon6.png",
      description:
        "Comprehensive care for sinus problems, nasal blockage, allergies, nasal polyps, and other nose and sinus conditions.",
      link: "/specialities/nose-sinus-rhinology",
    },
    {
      title: "Vertigo Clinic",
      img: "/images/vertigo.jpg",
      icon: "/images/icon6.png",
      description:
        "Specialized evaluation and treatment for vertigo, dizziness, balance disorders, and related inner-ear conditions.",
      link: "/specialities/neuro-otology",
    },
    {
      title: "Otology Clinic",
      img: "/images/otology.webp",
      icon: "/images/icon6.png",
      description:
        "Complete ear care for hearing loss, ear infections, tinnitus, eardrum problems, and other ear-related conditions.",
      link: "/specialities/otology",
    },
    {
      title: "Cochlear Implant",
      img: "/images/cc.webp",
      icon: "/images/icon6.png",
      description:
        "Advanced cochlear implant evaluation and surgical care for suitable patients with severe to profound hearing loss.",
      link: "/specialities/cochlear-hearing-implants",
    },
    {
      title: "Skull Base Surgery",
      img: "/images/skull.webp",
      icon: "/images/icon5.png",
      description:
        "Specialized surgical management of complex skull base conditions using advanced and minimally invasive techniques.",
      link: "/specialities/skull-base-surgery",
    },
  ];

  return (
    <section className="w-full bg-slate-50/60 py-14 md:py-20">
      {/* max-w-7xl with px-6 ensures it aligns with standard layouts */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */} <SectionTitle title="Our ENT Departments" subheading="Advanced ENT treatment and specialized care in Delhi NCR." textAlign="center" />

        {/* Department Grid */} <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"> {departments.map((dept) => ( <article key={dept.title} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" > {/* Image */} <div className="relative h-52 w-full overflow-hidden sm:h-56"> <Image src={dept.img} alt={`${dept.title} - ENT treatment in Delhi NCR`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" /> {/* Image Overlay */} <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 40%, transparent 100%)" }} /> {/* Department Icon */} <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-700/95 shadow-lg backdrop-blur-sm"> <Image src={dept.icon} alt={`${dept.title} icon`} width={23} height={23} className="brightness-0 invert" /> </div> </div> {/* Content */} <div className="flex flex-1 flex-col p-6 sm:p-7"> <div className="flex-1"> <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-teal-700"> {dept.title} </h3> <p className="text-sm leading-7 text-slate-600"> {dept.description} </p> </div> {/* CTA */} <div className="mt-6 border-t border-slate-100 pt-5"> <Link href={dept.link} aria-label={`Learn more about ${dept.title}`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-teal-700 transition-all duration-300 hover:text-teal-800 group-hover:gap-3" > <span>Explore Department</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" > <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" /> </svg> </Link> </div> </div> </article> ))} </div>
        {/* Bottom CTA */} <div className="mt-10 text-center"> <Link href="/specialities" className="inline-flex items-center justify-center rounded-full bg-teal-700 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-teal-800 hover:shadow-md" > View All ENT Specialities </Link> </div>
      </div>
    </section>
  );
}