import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, MapPin, Clock, X, Youtube } from "lucide-react";
import './TopBar.css';

const TopBar = () => (
  <div className="topbar bg-slate-900 text-slate-200 py-1.5 px-3 sm:px-4 text-xs border-b border-slate-800 w-full" role="banner" aria-label="Contact and emergency hospital information">
    <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-2">
      
      {/* Contact & Hours Info */}
      <div className="flex items-center gap-2.5 sm:gap-4 lg:gap-6 shrink min-w-0">
        <a
          href="tel:+919311449825"
          className="flex items-center gap-1.5 text-teal-400 font-bold hover:text-teal-300 transition-colors shrink-0"
          aria-label="Direct OPD Helpline"
        >
          <Phone size={12} className="text-teal-400 shrink-0" />
          <span className="tracking-tight text-xs sm:text-xs">+91-9311449825</span>
        </a>

        <div className="hidden md:flex items-center gap-1.5 text-slate-300 text-xs">
          <MapPin size={12} className="text-slate-400 shrink-0" />
          <span className="truncate">Jasola &middot; CR Park &middot; Safdarjung &middot; Palwal &middot; Dhampur</span>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-slate-300 text-xs shrink-0">
          <Clock size={12} className="text-slate-400 shrink-0" />
          <span>Mon &ndash; Sat: 9:00 AM &ndash; 9:00 PM</span>
        </div>

        <div className="flex items-center gap-1.5 text-emerald-400 font-medium text-[11px] sm:text-xs shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
          <span className="hidden xs:inline">Same-Day OPD Available</span>
          <span className="xs:hidden">OPD Open</span>
        </div>
      </div>

      {/* Social Profiles */}
      <div className="flex items-center gap-2 sm:gap-3 text-slate-400 shrink-0">
        <a
          aria-label="Facebook Profile"
          href="https://www.facebook.com/people/Dr-Dhirendra-Singh-Kushwah/61560817359879/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors p-0.5"
        >
          <Facebook size={13} />
        </a>

        <a
          aria-label="Instagram Profile"
          href="https://www.instagram.com/dr.dhirendrasinghkushwah"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-colors p-0.5"
        >
          <Instagram size={13} />
        </a>

        <a
          aria-label="YouTube Channel"
          href="https://www.youtube.com/@dr.dhirendrasingh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition-colors p-0.5"
        >
          <Youtube size={13} />
        </a>

        <a
          aria-label="LinkedIn Profile"
          href="https://www.linkedin.com/in/dr-prof-dhirendra-singh-kushwah-87735a321/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex hover:text-blue-400 transition-colors p-0.5"
        >
          <Linkedin size={13} />
        </a>

        <a
          aria-label="X Profile"
          href="https://x.com/DrDhirendraENT"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex hover:text-white transition-colors p-0.5"
        >
          <X size={13} />
        </a>
      </div>

    </div>
  </div>
);

export default TopBar;
