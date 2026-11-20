"use client";

import React, { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { LANGUAGES, applyLanguage, getStoredLanguage } from "@/lib/translator";

export default function LanguageSelector({ isMobile = false, isDrawer = false, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const dropdownRef = useRef(null);

  // Initialize from storage on mount
  useEffect(() => {
    const saved = getStoredLanguage();
    setCurrentLang(saved);
    if (saved !== "en") {
      applyLanguage(saved);
    }
  }, []);

  // Close on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
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
    setCurrentLang(code);
    applyLanguage(code);
    setIsOpen(false);
  };

  const currentMeta = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[6]; // English default
  const indiaLanguages = LANGUAGES.filter((l) => l.group === "india");
  const globalLanguages = LANGUAGES.filter((l) => l.group === "global");

  // Drawer Full-Width Mode (Inside Mobile Drawer Menu)
  if (isDrawer) {
    return (
      <div className="w-full relative" ref={dropdownRef} data-no-translate="true">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-teal-50/60 border border-slate-200 text-slate-800 text-sm font-semibold transition cursor-pointer"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-teal-600 shrink-0" />
            <span className="text-base leading-none">{currentMeta.flag}</span>
            <span className="font-bold text-slate-900">{currentMeta.name}</span>
            <span className="text-xs text-slate-500 font-normal">({currentMeta.enName})</span>
          </div>
          <ChevronDown
            size={16}
            className={`text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-teal-600" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="mt-2 bg-white rounded-2xl shadow-lg border border-slate-200 p-3 z-50">
            <div className="mb-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 block mb-1">
                🇮🇳 Domestic India
              </span>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                {indiaLanguages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => handleSelect(l.code)}
                    className={`flex items-center justify-between px-2.5 py-2 rounded-xl font-medium transition text-left cursor-pointer ${
                      currentLang === l.code ? "bg-teal-50 text-teal-900 font-bold border border-teal-200" : "hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <span className="truncate">
                      {l.flag} {l.name}
                    </span>
                    {currentLang === l.code && <Check size={14} className="text-teal-600 shrink-0 ml-1" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 block mb-1">
                🌍 International Medical Tourism
              </span>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                {globalLanguages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => handleSelect(l.code)}
                    className={`flex items-center justify-between px-2.5 py-2 rounded-xl font-medium transition text-left cursor-pointer ${
                      currentLang === l.code ? "bg-teal-50 text-teal-900 font-bold border border-teal-200" : "hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <span className="truncate">
                      {l.flag} {l.name}
                    </span>
                    {currentLang === l.code && <Check size={14} className="text-teal-600 shrink-0 ml-1" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Standard Desktop & Mobile Header Mode
  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef} data-no-translate="true">
      {/* Toggler Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 rounded-xl border border-slate-200 hover:border-teal-300 text-slate-800 font-bold shadow-2xs transition-all cursor-pointer whitespace-nowrap ${
          isMobile
            ? "px-2 py-1.5 bg-slate-50 hover:bg-teal-50 text-xs"
            : "px-2.5 py-1.5 sm:px-3 sm:py-2 bg-slate-50 hover:bg-teal-50 text-xs sm:text-sm"
        }`}
        aria-label="Change Language"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe size={isMobile ? 14 : 15} className="text-teal-600 shrink-0" />
        <span className="text-sm sm:text-base leading-none">{currentMeta.flag}</span>
        {!isMobile && <span className="hidden md:inline font-bold text-slate-800">{currentMeta.name}</span>}
        <ChevronDown
          size={isMobile ? 11 : 13}
          className={`text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-teal-600" : ""}`}
        />
      </button>

      {/* Categorized Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 z-[100] text-slate-800 animate-in fade-in zoom-in-95 duration-150"
          role="menu"
        >
          {/* Header */}
          <div className="px-2 py-1.5 border-b border-slate-100 mb-2.5 flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Globe size={13} className="text-teal-600" /> Select Language / भाषा
            </span>
            <span className="text-[10px] text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full font-bold">
              13 Languages
            </span>
          </div>

          {/* Group 1: India Domestic */}
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
                  className={`flex items-center justify-between px-2.5 py-1.5 rounded-xl font-medium transition text-left cursor-pointer ${
                    currentLang === l.code
                      ? "bg-teal-50 text-teal-900 font-bold border border-teal-200"
                      : "hover:bg-slate-50 text-slate-700"
                  }`}
                  role="menuitem"
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
                  className={`flex items-center justify-between px-2.5 py-1.5 rounded-xl font-medium transition text-left cursor-pointer ${
                    currentLang === l.code
                      ? "bg-teal-50 text-teal-900 font-bold border border-teal-200"
                      : "hover:bg-slate-50 text-slate-700"
                  }`}
                  role="menuitem"
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
    </div>
  );
}
