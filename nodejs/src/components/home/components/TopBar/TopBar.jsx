import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, MapPin, Clock, X, Youtube } from "lucide-react";
import './TopBar.css';

const TopBar = () => (
  <div className="topbar bg-slate-900 text-slate-200 py-2 px-4 text-xs border-b border-slate-800" role="banner" aria-label="Contact and emergency hospital information">
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
      
      {/* Contact & Hours Info */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <a
          href="tel:+919311449825"
          className="flex items-center gap-1.5 text-teal-400 font-bold hover:text-teal-300 transition-colors"
          aria-label="Direct OPD Helpline"
        >
          <Phone size={13} className="text-teal-400" />
          <span>+91-9311449825</span>
        </a>

        <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
          <MapPin size={13} className="text-slate-400" />
          <span>Jasola &middot; CR Park &middot; Safdarjung &middot; Palwal &middot; Dhampur</span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-300">
          <Clock size={13} className="text-slate-400" />
          <span>Mon &ndash; Sat: 9:00 AM &ndash; 9:00 PM</span>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 text-emerald-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Same-Day OPD Slots Available</span>
        </div>
      </div>

      {/* Social Profiles */}
      <div className="flex items-center gap-3 text-slate-400">
        <a
          aria-label="Facebook Profile"
          href="https://www.facebook.com/people/Dr-Dhirendra-Singh-Kushwah/61560817359879/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <Facebook size={14} />
        </a>

        <a
          aria-label="Instagram Profile"
          href="https://www.instagram.com/dr.dhirendrasinghkushwah"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-colors"
        >
          <Instagram size={14} />
        </a>

        <a
          aria-label="YouTube Channel"
          href="https://www.youtube.com/@dr.dhirendrasingh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition-colors"
        >
          <Youtube size={14} />
        </a>

        <a
          aria-label="LinkedIn Profile"
          href="https://www.linkedin.com/in/dr-prof-dhirendra-singh-kushwah-87735a321/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <Linkedin size={14} />
        </a>

        <a
          aria-label="X Profile"
          href="https://x.com/DrDhirendraENT"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <X size={14} />
        </a>
      </div>

    </div>
  </div>
);

export default TopBar;
