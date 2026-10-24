import { Facebook, Instagram, Linkedin, Phone, X, Youtube, Mail, MapPin, Clock, ShieldCheck, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import '../home/components/Footer/Footer.css';

export default async function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      
      {/* Top Banner Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 border-b border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            <a
              href="tel:+919311449825"
              className="flex items-center gap-2.5 text-teal-400 font-bold hover:text-teal-300 text-base transition-colors"
            >
              <div className="p-2 rounded-lg bg-teal-950 border border-teal-800">
                <Phone size={18} />
              </div>
              <span>Emergency &amp; OPD: +91-9311449825</span>
            </a>
            <a
              href="mailto:drdhirendrasinghent@gmail.com"
              className="flex items-center gap-2.5 text-slate-300 font-medium hover:text-white text-sm transition-colors"
            >
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <Mail size={16} />
              </div>
              <span>drdhirendrasinghent@gmail.com</span>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider hidden lg:inline-block">
              Connect Online:
            </span>
            <div className="flex items-center gap-2">
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/people/Dr-Dhirendra-Singh-Kushwah/61560817359879/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/dr.dhirendrasinghkushwah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-pink-400 hover:bg-slate-800 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                aria-label="YouTube"
                href="https://www.youtube.com/@dr.dhirendrasingh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-red-500 hover:bg-slate-800 transition-colors"
              >
                <Youtube size={16} />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/dr-prof-dhirendra-singh-kushwah-87735a321/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                aria-label="X"
                href="https://x.com/DrDhirendraENT"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Brand & Doctor Credentials Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="inline-flex items-center gap-3.5 no-underline group">
            <div className="bg-white px-3 py-1.5 rounded-xl shadow-sm inline-flex items-center justify-center border border-slate-200/40 group-hover:bg-slate-50 transition-colors">
              <Image
                src="/images/medical-logo.png"
                alt="Dr. (Prof.) Dhirendra Singh Kushwah ENT Hospital"
                width={140}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </div>
            <div>
              <span className="block text-base font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
                Dr. (Prof.) Dhirendra Singh Kushwah
              </span>
              <span className="block text-xs font-semibold text-teal-400">
                MS (Otorhinolaryngology) &middot; 25+ Years Experience
              </span>
            </div>
          </Link>

          <p className="text-sm text-slate-400 leading-relaxed">
            Leading Senior Consultant ENT &amp; Head-Neck Surgeon in Delhi NCR. Offering advanced stitchless ear microsurgeries, pain-free packless septoplasty, cochlear implants, and endoscopic sinus surgeries across 5 hospital and clinic locations.
          </p>

          <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
            <ShieldCheck size={16} className="text-teal-400 shrink-0" />
            <span>NABH &middot; MCI Verified Senior Specialist</span>
          </div>
        </div>

        {/* Center 1: Jasola Hospital */}
        <div className="space-y-2">
          <h3 className="font-bold text-white text-sm flex items-center gap-1.5">
            <MapPin size={14} className="text-teal-400" />
            <span>Jasola &mdash; Hospital Center</span>
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            ORL International Hospital, Plot No. 89, Pocket 1, Near Living Style Mall, Jasola Vihar, New Delhi - 110025
          </p>
          <div className="text-xs text-teal-300 flex items-center gap-1">
            <Clock size={13} />
            <span>Mon &ndash; Sat: 9:30 AM &ndash; 3:30 PM</span>
          </div>
        </div>

        {/* Center 2: CR Park Clinic */}
        <div className="space-y-2">
          <h3 className="font-bold text-white text-sm flex items-center gap-1.5">
            <MapPin size={14} className="text-teal-400" />
            <span>CR Park &mdash; Clinic Center</span>
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            J-1981, Near Market No. 1, Below ICICI Bank, Bipin Chandra Pal Marg, Chittaranjan Park, New Delhi - 110019
          </p>
          <div className="text-xs text-teal-300 flex items-center gap-1">
            <Clock size={13} />
            <span>Mon &ndash; Sat: 6:30 PM &ndash; 9:00 PM</span>
          </div>
        </div>

        {/* Center 3: Arjun Nagar / Safdarjung */}
        <div className="space-y-2">
          <h3 className="font-bold text-white text-sm flex items-center gap-1.5">
            <MapPin size={14} className="text-teal-400" />
            <span>Arjun Nagar &mdash; Safdarjung</span>
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            ENT &amp; Gynae Clinic, 19-C Basement, Arjun Nagar, Near Sukhmani Hospital, Safdarjung Enclave, New Delhi - 110029
          </p>
          <div className="text-xs text-teal-300 flex items-center gap-1">
            <Clock size={13} />
            <span>Mon &ndash; Sat: 4:00 PM &ndash; 5:00 PM</span>
          </div>
        </div>

      </div>

      {/* Quick Links Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-400">
        <div>
          <strong className="block text-slate-200 mb-2 uppercase tracking-wider font-semibold">Specialities:</strong>
          <ul className="space-y-1">
            <li><Link href="/specialities/cochlear-hearing-implants" className="hover:text-teal-300">Cochlear Implants</Link></li>
            <li><Link href="/specialities/tympanoplasty-surgery" className="hover:text-teal-300">Tympanoplasty Eardrum Surgery</Link></li>
            <li><Link href="/specialities/septoplasty" className="hover:text-teal-300">Packless Septoplasty (DNS)</Link></li>
            <li><Link href="/specialities/nose-sinus-rhinology" className="hover:text-teal-300">Endoscopic Sinus Surgery (FESS)</Link></li>
          </ul>
        </div>

        <div>
          <strong className="block text-slate-200 mb-2 uppercase tracking-wider font-semibold">Conditions:</strong>
          <ul className="space-y-1">
            <li><Link href="/conditions/ear-hearing" className="hover:text-teal-300">Hearing Loss Treatment</Link></li>
            <li><Link href="/conditions/vertigo" className="hover:text-teal-300">Vertigo &amp; Balance Disorders</Link></li>
            <li><Link href="/conditions/sinusitis" className="hover:text-teal-300">Chronic Sinusitis</Link></li>
            <li><Link href="/conditions/paediatric-ent" className="hover:text-teal-300">Pediatric Glue Ear &amp; Tonsils</Link></li>
          </ul>
        </div>

        <div>
          <strong className="block text-slate-200 mb-2 uppercase tracking-wider font-semibold">Our Branches:</strong>
          <ul className="space-y-1">
            <li><Link href="/location/jasola" className="hover:text-teal-300">Jasola Hospital</Link></li>
            <li><Link href="/location/cr-park" className="hover:text-teal-300">CR Park Clinic</Link></li>
            <li><Link href="/location/arjun-nagar" className="hover:text-teal-300">Safdarjung Clinic</Link></li>
            <li><Link href="/location/palwal" className="hover:text-teal-300">Palwal Center (Haryana)</Link></li>
            <li><Link href="/location/dhampur" className="hover:text-teal-300">Dhampur Hospital (UP)</Link></li>
          </ul>
        </div>

        <div>
          <strong className="block text-slate-200 mb-2 uppercase tracking-wider font-semibold">Patient Information:</strong>
          <ul className="space-y-1">
            <li><Link href="/about/drdhirendrasinghkushwah" className="hover:text-teal-300">About Dr. Kushwah</Link></li>
            <li><Link href="/facilities" className="hover:text-teal-300">Hospital Facilities &amp; OT</Link></li>
            <li><Link href="/gallery" className="hover:text-teal-300">Clinical Gallery &amp; Moments</Link></li>
            <li><Link href="/faq" className="hover:text-teal-300">Patient FAQ &amp; Guidance</Link></li>
            <li><Link href="/contact" className="hover:text-teal-300">Book OPD Appointment</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright & Legal Disclaimers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          &copy; {new Date().getFullYear()} Dr. (Prof.) Dhirendra Singh Kushwah &mdash; All Rights Reserved.
        </div>
        <div className="text-center sm:text-right">
          <span>Medical Disclaimer: Content provided for educational purposes and does not substitute professional medical diagnosis.</span>
        </div>
      </div>

    </footer>
  );
}
