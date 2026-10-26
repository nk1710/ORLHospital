import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, GraduationCap, Stethoscope, Phone, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import './About.css';

const credentials = [
  {
    icon: GraduationCap,
    title: 'MBBS \u2014 Jiwaji University, Gwalior (1999)',
    sub: 'Comprehensive foundation in medicine, clinical diagnostics & surgery',
  },
  {
    icon: Stethoscope,
    title: 'MS \u2014 Otorhinolaryngology (ENT) \u2014 Rani Durgawati University, Jabalpur (2005)',
    sub: 'Specialized surgical residency in Ear, Nose, Throat & Head-Neck Surgery',
  },
  {
    icon: Award,
    title: '25+ Years of Specialized ENT Practice in Delhi NCR',
    sub: 'Over 15,000 surgical procedures performed \u00B7 Former academician & clinical professor',
  },
];

const clinicalHighlights = [
  'Pioneer of Pain-Free Packless Septoplasty in Delhi NCR',
  'Microsurgical Stitchless Ear Surgeries (Tympanoplasty & Mastoidectomy)',
  'Bionic Hearing Center: Cochlear & Bone-Anchored Hearing Implants',
  'Advanced HD Endoscopic Sinus Surgery (FESS) & Anterior Skull Base Surgeries',
  'Specialized Neuro-Otology & Balance (Vertigo / BPPV) Diagnostic Unit',
];

const About = () => (
  <section
    id="about"
    className="about-hospital-section section-pad py-16 bg-white"
    aria-labelledby="about-h2"
    itemScope
    itemType="https://schema.org/Physician"
  >
    <div className="inner max-w-7xl mx-auto px-4 sm:px-6">
      <div className="about-grid grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* DOCTOR IMAGE & CREDENTIAL BLOCK */}
        <div className="about-img-column lg:col-span-5">
          <div className="doctor-card-frame bg-slate-50 border border-slate-200/80 rounded-2xl p-4 shadow-sm relative">
            <div className="doctor-img-container relative rounded-xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-teal-50 to-slate-100">
              <Image
                src="/images/banner/dhirendra kushwah.webp"
                alt="Dr. (Prof.) Dhirendra Singh Kushwah - Best ENT Specialist and Surgeon in Delhi"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-contain object-bottom sm:object-cover sm:object-top"
                priority
                unoptimized
              />
              <div className="doctor-experience-ribbon absolute bottom-3 left-3 bg-teal-800/95 backdrop-blur-xs text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-lg flex items-center gap-2">
                <span className="ribbon-num text-xl sm:text-2xl font-black">25+</span>
                <span className="ribbon-text text-[10px] sm:text-xs font-semibold leading-tight">Years Surgical<br />Experience</span>
              </div>
            </div>

            <div className="doctor-quick-info mt-4 pt-3 border-t border-slate-200/60">
              <p className="m-0 text-slate-900 font-bold text-lg" itemProp="name">
                Dr. (Prof.) Dhirendra Singh Kushwah
              </p>
              <p className="text-teal-800 text-xs font-semibold m-0 mt-0.5">
                Senior Consultant ENT &amp; Head-Neck Surgeon
              </p>
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1 font-medium">
                  <ShieldCheck size={14} className="text-teal-600" />
                  MBBS, MS (ENT) &middot; MCI Verified
                </span>
                <span className="font-semibold text-teal-700">South Delhi &amp; NCR</span>
              </div>
            </div>
          </div>
        </div>

        {/* CLINICAL PROFILE & BIO CONTENT */}
        <div className="about-content-column lg:col-span-7 space-y-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 uppercase tracking-wider mb-2 border border-teal-200/60">
              Senior ENT Consultant &amp; Head-Neck Surgeon
            </span>
            <h2 id="about-h2" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Meet Dr. (Prof.) Dhirendra Singh Kushwah
            </h2>
          </div>

          <div className="doctor-credentials-card bg-teal-50/50 border border-teal-100 rounded-xl p-4">
            <h3 className="text-base font-bold text-slate-900 m-0">
              Chief Consultant ENT Surgeon in Delhi NCR
            </h3>
            <p className="text-xs font-semibold text-teal-800 mt-1 mb-2">
              MBBS &middot; MS (Otorhinolaryngology) &middot; Cochlear Implants &middot; Endoscopic Sinus Surgery &middot; Packless Septoplasty &middot; Vertigo Clinic
            </p>
            <span className="inline-block bg-white text-teal-900 text-xs font-bold px-3 py-1 rounded-md border border-teal-200 shadow-2xs">
              Over 15,000+ Completed Micro-Surgical &amp; Endoscopic Procedures
            </span>
          </div>

          <div className="about-bio-text text-sm sm:text-base text-slate-600 space-y-3.5 leading-relaxed">
            <p>
              <strong>Dr. (Prof.) Dhirendra Singh Kushwah</strong> is a renowned <strong>ENT Specialist, ENT Doctor, and Head &amp; Neck Surgeon in Delhi</strong> with more than 25 years of surgical mastery. He provides comprehensive diagnostic and operative care to patients from South Delhi (Jasola, CR Park, Safdarjung Enclave), Delhi NCR, across India, and international patients.
            </p>
            <p>
              He completed his <strong>MBBS</strong> (Jiwaji University, 1999) and earned his <strong>MS in ENT (Otorhinolaryngology)</strong> from Rani Durgawati University, Jabalpur (2005). A pioneer in minimally invasive techniques, Dr. Kushwah specializes in pain-free packless septoplasty, stitchless ear microsurgery, cochlear bionic implants, and skull base surgery.
            </p>
          </div>

          {/* ACADEMIC & QUALIFICATIONS STACK */}
          <div className="qualifications-stack space-y-3">
            {credentials.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="p-2 rounded-lg bg-teal-100 text-teal-800 shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{c.title}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{c.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CLINICAL EXCELLENCE BULLETS */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5">
              Key Surgical Milestones:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {clinicalHighlights.map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-teal-600 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DIRECT APPOINTMENT & CONTACT ACTIONS */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-colors"
            >
              <Calendar size={16} />
              <span>Book Hospital Consultation</span>
            </Link>
            <a
              href="tel:+919311449825"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-teal-600 hover:text-teal-700 text-slate-800 font-bold text-sm transition-colors"
            >
              <Phone size={16} />
              <span>Call: +91-9311449825</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default About;
