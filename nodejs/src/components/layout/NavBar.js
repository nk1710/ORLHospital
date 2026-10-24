"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Calendar } from "lucide-react";
import { SPECIALITIES } from "@/data/constants";
import AppointmentModal from "@/components/ui/AppointmentModal";
import "../home/components/Navbar/Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    specialities: false,
    conditions: false,
    locations: false,
  });
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState(null);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  // Desktop dropdown handlers (supports click toggle + hover)
  const toggleDesktopDropdown = (key) => {
    setActiveDesktopDropdown((prev) => (prev === key ? null : key));
  };

  const handleMouseEnter = (key) => {
    setActiveDesktopDropdown(key);
  };

  const handleMouseLeave = () => {
    setActiveDesktopDropdown(null);
  };

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".nav-item-dropdown")) {
        setActiveDesktopDropdown(null);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveDesktopDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleMobileDropdown = (key) => {
    setMobileDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdowns({ specialities: false, conditions: false, locations: false });
    setActiveDesktopDropdown(null);
  };

  const openAppointment = () => {
    closeMobileMenu();
    setAppointmentOpen(true);
  };

  return (
    <>
      <AppointmentModal open={appointmentOpen} onClose={() => setAppointmentOpen(false)} />

      <header className="nav sticky top-0 z-50 bg-white border-b border-slate-200/80 shadow-xs transition-all w-full">
        <div className="nav-inner w-full max-w-[1600px] mx-auto px-3 sm:px-6 flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <Link
            href="/"
            className="nav-logo flex items-center gap-2 sm:gap-3.5 no-underline group shrink min-w-0"
            aria-label="Dr. Dhirendra Singh Kushwah - Home"
          >
            <Image
              src="/images/medical-logo.png"
              alt="Dr. (Prof.) Dhirendra Singh Kushwah ENT Specialist & Surgeon"
              width={140}
              height={42}
              className="w-auto h-8 sm:h-9 md:h-10 shrink-0 object-contain transition-transform group-hover:scale-[1.02]"
              priority
            />
            <div className="nav-doctor-title">
              <span className="font-bold text-slate-900 tracking-tight leading-snug">
                Dr. (Prof.) Dhirendra Singh Kushwah
              </span>
              <span className="font-semibold text-teal-700 tracking-wide uppercase">
                MS (ENT) &middot; 25+ Years Experience
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-links nav-links-desktop" aria-label="Main Navigation">
            <Link
              href="/about/drdhirendrasinghkushwah"
              className="text-slate-700 hover:text-teal-700 font-medium transition-colors whitespace-nowrap"
            >
              About
            </Link>

            {/* Conditions Dropdown */}
            <div
              className="nav-item-dropdown relative group"
              onMouseEnter={() => handleMouseEnter("conditions")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleDesktopDropdown("conditions")}
                className={`nav-drop-trigger flex items-center gap-1 font-medium whitespace-nowrap transition-colors ${
                  activeDesktopDropdown === "conditions" ? "text-teal-700" : "text-slate-700 hover:text-teal-700"
                }`}
                aria-haspopup="true"
                aria-expanded={activeDesktopDropdown === "conditions"}
              >
                <span>Conditions</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeDesktopDropdown === "conditions" ? "rotate-180 text-teal-700" : "text-slate-400 group-hover:rotate-180"
                  }`}
                />
              </button>
              <div
                className={`nav-dropdown-menu absolute left-0 top-full pt-1.5 w-64 z-50 ${
                  activeDesktopDropdown === "conditions" ? "nav-dropdown-open" : ""
                }`}
              >
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2">
                  <Link
                    href="/conditions/ear-hearing"
                    onClick={() => setActiveDesktopDropdown(null)}
                    className="block px-3.5 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 rounded-lg transition-colors"
                  >
                    Ear &amp; Hearing Care
                  </Link>
                  <Link
                    href="/conditions/nose-sinus"
                    onClick={() => setActiveDesktopDropdown(null)}
                    className="block px-3.5 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 rounded-lg transition-colors"
                  >
                    Nose, Sinus &amp; Allergy
                  </Link>
                  <Link
                    href="/conditions/voice-throat-disorders-treatment-delhi"
                    onClick={() => setActiveDesktopDropdown(null)}
                    className="block px-3.5 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 rounded-lg transition-colors"
                  >
                    Throat &amp; Voice Disorders
                  </Link>
                  <Link
                    href="/conditions/vertigo"
                    onClick={() => setActiveDesktopDropdown(null)}
                    className="block px-3.5 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 rounded-lg transition-colors"
                  >
                    Vertigo &amp; Balance Clinic
                  </Link>
                  <Link
                    href="/conditions/paediatric-ent"
                    onClick={() => setActiveDesktopDropdown(null)}
                    className="block px-3.5 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 rounded-lg transition-colors"
                  >
                    Pediatric ENT Care
                  </Link>
                  <Link
                    href="/conditions/we-care"
                    onClick={() => setActiveDesktopDropdown(null)}
                    className="block px-3.5 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50 hover:text-teal-800 rounded-lg border-t border-slate-100 mt-1 transition-colors"
                  >
                    View All Conditions &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Specialities Dropdown */}
            <div
              className="nav-item-dropdown relative group"
              onMouseEnter={() => handleMouseEnter("specialities")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleDesktopDropdown("specialities")}
                className={`nav-drop-trigger flex items-center gap-1 font-medium whitespace-nowrap transition-colors ${
                  activeDesktopDropdown === "specialities" ? "text-teal-700" : "text-slate-700 hover:text-teal-700"
                }`}
                aria-haspopup="true"
                aria-expanded={activeDesktopDropdown === "specialities"}
              >
                <span className="nav-label-long">Specialities &amp; Surgeries</span>
                <span className="nav-label-short">Specialities</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeDesktopDropdown === "specialities" ? "rotate-180 text-teal-700" : "text-slate-400 group-hover:rotate-180"
                  }`}
                />
              </button>
              <div
                className={`nav-dropdown-menu absolute left-0 top-full pt-1.5 w-72 z-50 ${
                  activeDesktopDropdown === "specialities" ? "nav-dropdown-open" : ""
                }`}
              >
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2">
                  {SPECIALITIES.slice(0, 8).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveDesktopDropdown(null)}
                      className="block px-3.5 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/specialities"
                    onClick={() => setActiveDesktopDropdown(null)}
                    className="block px-3.5 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50 rounded-lg border-t border-slate-100 mt-1 transition-colors"
                  >
                    All Surgical Procedures &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Centers / Locations Dropdown */}
            <div
              className="nav-item-dropdown relative group"
              onMouseEnter={() => handleMouseEnter("locations")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleDesktopDropdown("locations")}
                className={`nav-drop-trigger flex items-center gap-1 font-medium whitespace-nowrap transition-colors ${
                  activeDesktopDropdown === "locations" ? "text-teal-700" : "text-slate-700 hover:text-teal-700"
                }`}
                aria-haspopup="true"
                aria-expanded={activeDesktopDropdown === "locations"}
              >
                <span className="nav-label-long">Centers &amp; Clinics</span>
                <span className="nav-label-short">Centers</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeDesktopDropdown === "locations" ? "rotate-180 text-teal-700" : "text-slate-400 group-hover:rotate-180"
                  }`}
                />
              </button>
              <div
                className={`nav-dropdown-menu absolute left-0 top-full pt-1.5 w-64 z-50 ${
                  activeDesktopDropdown === "locations" ? "nav-dropdown-open" : ""
                }`}
              >
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2">
                  <Link
                    href="/location/jasola"
                    onClick={() => setActiveDesktopDropdown(null)}
                    className="block px-3.5 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 rounded-lg transition-colors"
                  >
                    Jasola &mdash; Hospital Center
                  </Link>
                  <Link
                    href="/location/cr-park"
                    onClick={() => setActiveDesktopDropdown(null)}
                    className="block px-3.5 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 rounded-lg transition-colors"
                  >
                    CR Park &mdash; Clinic Center
                  </Link>
                  <Link
                    href="/location/arjun-nagar"
                    onClick={() => setActiveDesktopDropdown(null)}
                    className="block px-3.5 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 rounded-lg transition-colors"
                  >
                    Arjun Nagar &mdash; Safdarjung Clinic
                  </Link>
                  <Link
                    href="/location/palwal"
                    onClick={() => setActiveDesktopDropdown(null)}
                    className="block px-3.5 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 rounded-lg transition-colors"
                  >
                    Palwal &mdash; Hospital Center
                  </Link>
                  <Link
                    href="/location/dhampur"
                    onClick={() => setActiveDesktopDropdown(null)}
                    className="block px-3.5 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 rounded-lg transition-colors"
                  >
                    Dhampur &mdash; Regional Hospital
                  </Link>
                  <Link
                    href="/our-branches"
                    onClick={() => setActiveDesktopDropdown(null)}
                    className="block px-3.5 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50 rounded-lg border-t border-slate-100 mt-1 transition-colors"
                  >
                    View All 5 Centers &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/facilities"
              className="text-slate-700 hover:text-teal-700 font-medium transition-colors whitespace-nowrap"
            >
              Facilities
            </Link>
            <Link
              href="/gallery"
              className="text-slate-700 hover:text-teal-700 font-medium transition-colors whitespace-nowrap"
            >
              Gallery
            </Link>
            <Link
              href="/featuredblog"
              className="text-slate-700 hover:text-teal-700 font-medium transition-colors whitespace-nowrap"
            >
              <span className="nav-label-long">Health Articles</span>
              <span className="nav-label-short">Articles</span>
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-teal-700 font-medium transition-colors whitespace-nowrap"
            >
              Contact
            </Link>

            {/* Direct Call Button (Only visible on wide desktop >= 1440px) */}
            <a
              href="tel:+919311449825"
              className="nav-call-btn-desktop items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 text-slate-700 hover:text-teal-800 text-xs font-semibold transition-all whitespace-nowrap shrink-0 shadow-xs"
            >
              <Phone size={13} className="text-teal-600" />
              <span>+91-9311449825</span>
            </a>

            {/* Book Appointment CTA */}
            <button
              type="button"
              onClick={openAppointment}
              className="nav-btn-appointment bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold inline-flex items-center gap-1.5 shadow-xs transition-all duration-200 cursor-pointer border border-teal-700/20 active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <Calendar size={14} className="text-teal-100" />
              <span>Book Appointment</span>
            </button>
          </nav>

          {/* Mobile Menu Hamburger + Quick Actions (<1024px) */}
          <div className="nav-mobile-group flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href="tel:+919311449825"
              className="hidden sm:inline-flex p-2 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 transition"
              aria-label="Call Hospital"
            >
              <Phone size={17} />
            </a>
            <button
              type="button"
              onClick={openAppointment}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white text-xs sm:text-sm font-bold transition whitespace-nowrap shadow-xs"
            >
              <Calendar size={13} className="hidden xs:inline text-teal-100" />
              <span>Book OPD</span>
            </button>
            <button
              type="button"
              className="p-1.5 sm:p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="nav-mobile-drawer bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top-2">
            <Link
              href="/about/drdhirendrasinghkushwah"
              onClick={closeMobileMenu}
              className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              About Dr. Kushwah
            </Link>

            {/* Mobile Conditions Accordion */}
            <div className="border-t border-slate-100 pt-2">
              <button
                type="button"
                onClick={() => toggleMobileDropdown("conditions")}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-semibold text-slate-800"
              >
                <span>Conditions We Treat</span>
                <ChevronDown size={18} className={`transition-transform ${mobileDropdowns.conditions ? "rotate-180" : ""}`} />
              </button>
              {mobileDropdowns.conditions && (
                <div className="pl-4 space-y-1.5 mt-1 border-l-2 border-teal-100 ml-3">
                  <Link href="/conditions/ear-hearing" onClick={closeMobileMenu} className="block py-1.5 text-sm text-slate-600">
                    Ear &amp; Hearing
                  </Link>
                  <Link href="/conditions/nose-sinus" onClick={closeMobileMenu} className="block py-1.5 text-sm text-slate-600">
                    Nose &amp; Sinus
                  </Link>
                  <Link href="/conditions/voice-throat-disorders-treatment-delhi" onClick={closeMobileMenu} className="block py-1.5 text-sm text-slate-600">
                    Voice &amp; Throat
                  </Link>
                  <Link href="/conditions/vertigo" onClick={closeMobileMenu} className="block py-1.5 text-sm text-slate-600">
                    Vertigo &amp; Balance Clinic
                  </Link>
                  <Link href="/conditions/paediatric-ent" onClick={closeMobileMenu} className="block py-1.5 text-sm text-slate-600">
                    Paediatric ENT
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Specialities Accordion */}
            <div className="border-t border-slate-100 pt-2">
              <button
                type="button"
                onClick={() => toggleMobileDropdown("specialities")}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-semibold text-slate-800"
              >
                <span>Specialities &amp; Surgeries</span>
                <ChevronDown size={18} className={`transition-transform ${mobileDropdowns.specialities ? "rotate-180" : ""}`} />
              </button>
              {mobileDropdowns.specialities && (
                <div className="pl-4 space-y-1.5 mt-1 border-l-2 border-teal-100 ml-3">
                  {SPECIALITIES.slice(0, 8).map((item) => (
                    <Link key={item.href} href={item.href} onClick={closeMobileMenu} className="block py-1.5 text-sm text-slate-600">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Locations Accordion */}
            <div className="border-t border-slate-100 pt-2">
              <button
                type="button"
                onClick={() => toggleMobileDropdown("locations")}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-semibold text-slate-800"
              >
                <span>Hospital &amp; Clinic Centers</span>
                <ChevronDown size={18} className={`transition-transform ${mobileDropdowns.locations ? "rotate-180" : ""}`} />
              </button>
              {mobileDropdowns.locations && (
                <div className="pl-4 space-y-1.5 mt-1 border-l-2 border-teal-100 ml-3">
                  <Link href="/location/jasola" onClick={closeMobileMenu} className="block py-1.5 text-sm text-slate-600">
                    Jasola &mdash; Hospital Center
                  </Link>
                  <Link href="/location/cr-park" onClick={closeMobileMenu} className="block py-1.5 text-sm text-slate-600">
                    CR Park &mdash; Clinic Center
                  </Link>
                  <Link href="/location/arjun-nagar" onClick={closeMobileMenu} className="block py-1.5 text-sm text-slate-600">
                    Arjun Nagar &mdash; Safdarjung Clinic
                  </Link>
                  <Link href="/location/palwal" onClick={closeMobileMenu} className="block py-1.5 text-sm text-slate-600">
                    Palwal &mdash; Hospital Center
                  </Link>
                  <Link href="/location/dhampur" onClick={closeMobileMenu} className="block py-1.5 text-sm text-slate-600">
                    Dhampur &mdash; Regional Hospital
                  </Link>
                </div>
              )}
            </div>

            <Link href="/facilities" onClick={closeMobileMenu} className="block px-3 py-2 text-base font-semibold text-slate-800">
              Facilities
            </Link>
            <Link href="/gallery" onClick={closeMobileMenu} className="block px-3 py-2 text-base font-semibold text-slate-800">
              Moments &amp; Gallery
            </Link>
            <Link href="/featuredblog" onClick={closeMobileMenu} className="block px-3 py-2 text-base font-semibold text-slate-800">
              Health Articles
            </Link>
            <Link href="/contact" onClick={closeMobileMenu} className="block px-3 py-2 text-base font-semibold text-slate-800">
              Contact Us
            </Link>

            <button
              type="button"
              onClick={openAppointment}
              className="w-full py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl shadow-md text-center mt-3 transition"
            >
              Book OPD Appointment
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
