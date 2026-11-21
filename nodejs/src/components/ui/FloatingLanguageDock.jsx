"use client";

import React, { useState, useEffect, useRef } from "react";
import { Globe, ChevronUp, Check, X } from "lucide-react";
import { LANGUAGES, applyLanguage, getStoredLanguage } from "@/lib/translator";

export default function FloatingLanguageDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const dockRef = useRef(null);

  // Initialize from cookie or storage on mount and sync with translation engine
  useEffect(() => {
    let activeLang = "en";
    try {
      const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/i);
      if (match && match[1] && LANGUAGES.some((l) => l.code === match[1])) {
        activeLang = match[1];
      } else {
        const saved = localStorage.getItem("orl_preferred_lang") || getStoredLanguage();
        if (saved && LANGUAGES.some((l) => l.code === saved)) {
          activeLang = saved;
        }
      }
    } catch (e) {}

    if (activeLang && activeLang !== "en") {
      setCurrentLang(activeLang);
      if (["ar", "ur", "fa"].includes(activeLang)) {
        document.documentElement.dir = "rtl";
      }

      // Automatically sync with Google Translate select combo once DOM element mounts
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        const select = document.querySelector(".goog-te-combo");
        if (select) {
          if (select.value !== activeLang) {
            select.value = activeLang;
            select.dispatchEvent(new Event("change"));
          }
          clearInterval(interval);
        } else if (attempts > 30) {
          clearInterval(interval);
        }
      }, 150);

      return () => clearInterval(interval);
    }
  }, []);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (dockRef.current && !dockRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (code) => {
    setIsOpen(false);
    setCurrentLang(code);

    try {
      localStorage.setItem("orl_preferred_lang", code);
    } catch (e) {}

    const host = window.location.hostname;
    const parts = host.split(".");
    const rootDomain = parts.length > 2 ? "." + parts.slice(-2).join(".") : "." + host;

    const setCookieString = (val) => {
      document.cookie = `googtrans=${val}; path=/; max-age=31536000;`;
      document.cookie = `googtrans=${val}; domain=${host}; path=/; max-age=31536000;`;
      if (rootDomain && rootDomain !== "." + host) {
        document.cookie = `googtrans=${val}; domain=${rootDomain}; path=/; max-age=31536000;`;
      }
    };

    if (code === "en") {
      document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      document.cookie = `googtrans=; domain=${host}; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      if (rootDomain && rootDomain !== "." + host) {
        document.cookie = `googtrans=; domain=${rootDomain}; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      }
      setCookieString("/en/en");
      document.documentElement.dir = "ltr";
    } else {
      setCookieString(`/en/${code}`);
      if (["ar", "ur", "fa"].includes(code)) {
        document.documentElement.dir = "rtl";
      } else {
        document.documentElement.dir = "ltr";
      }
    }

    // Immediately trigger Google Translate dropdown if available in DOM
    try {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = code;
        select.dispatchEvent(new Event("change"));
      }
    } catch (err) {}

    // Reload page to let translation engine convert 100% of all SSR & React DOM nodes
    setTimeout(() => {
      window.location.reload();
    }, 150);
  };

  const currentMeta = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[6]; // English default
  const indiaLanguages = LANGUAGES.filter((l) => l.group === "india");
  const globalLanguages = LANGUAGES.filter((l) => l.group === "global");

  return (
    <div
      ref={dockRef}
      className="desktop-floating-language-dock"
      data-no-translate="true"
    >
      {/* ─── EXPANDABLE LANGUAGE POPUP MODAL (Floats Upwards from Dock) ─── */}
      {isOpen && (
        <div
          className="mb-3 w-80 sm:w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/90 p-3.5 text-slate-800 animate-in fade-in slide-in-from-bottom-3 duration-200"
          role="dialog"
          aria-label="Select Language"
        >
          {/* Header */}
          <div className="px-2 py-1.5 border-b border-slate-100 mb-2.5 flex items-center justify-between">
            <span className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Globe size={14} className="text-teal-600" />
              <span>Select Language / भाषा चुनें</span>
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Close language menu"
            >
              <X size={15} />
            </button>
          </div>

          {/* Group 1: Domestic India */}
          <div className="mb-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 block mb-1">
              🇮🇳 Domestic India (भारत के मरीज)
            </span>
            <div className="grid grid-cols-2 gap-1 text-xs">
              {indiaLanguages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => handleSelect(l.code)}
                  className={`flex items-center justify-between px-2.5 py-2 rounded-xl font-medium transition text-left cursor-pointer ${
                    currentLang === l.code
                      ? "bg-teal-50 text-teal-900 font-bold border border-teal-200 shadow-xs"
                      : "hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <span className="truncate">
                    {l.flag} {l.name}
                  </span>
                  {currentLang === l.code && <Check size={13} className="text-teal-600 shrink-0 ml-1" />}
                </button>
              ))}
            </div>
          </div>

          {/* Group 2: International */}
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 block mb-1">
              🌍 International Medical Tourism (विदेशी मरीज)
            </span>
            <div className="grid grid-cols-2 gap-1 text-xs">
              {globalLanguages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => handleSelect(l.code)}
                  className={`flex items-center justify-between px-2.5 py-2 rounded-xl font-medium transition text-left cursor-pointer ${
                    currentLang === l.code
                      ? "bg-teal-50 text-teal-900 font-bold border border-teal-200 shadow-xs"
                      : "hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <span className="truncate">
                    {l.flag} {l.name}
                  </span>
                  {currentLang === l.code && <Check size={13} className="text-teal-600 shrink-0 ml-1" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── MAIN FLOATING TRIGGER PILL / BUTTON ─── */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-white/95 hover:bg-white text-slate-800 font-bold text-xs sm:text-sm border-2 border-teal-600/30 hover:border-teal-600 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer select-none"
        style={{
          boxShadow: "0 6px 20px rgba(13, 148, 136, 0.22)",
        }}
        aria-label="Change Website Language"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <div className="w-6 h-6 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
          <Globe size={15} />
        </div>
        <span className="text-base leading-none">{currentMeta.flag}</span>
        <span className="hidden sm:inline font-bold text-slate-900 tracking-tight">
          {currentMeta.name}
        </span>
        <ChevronUp
          size={14}
          className={`text-slate-400 group-hover:text-teal-600 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-teal-600" : ""
          }`}
        />

        {/* Hover Tooltip (Shown on PC when closed) */}
        {!isOpen && (
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none shadow-md">
            Change Language / भाषा बदलें
          </span>
        )}
      </button>
    </div>
  );
}
