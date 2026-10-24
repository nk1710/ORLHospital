"use client";
import { logoutAction } from "@/app/dashboard/action";
import { User2Icon, Globe, ShieldCheck, LogOut, Settings } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-3.5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Live Medical CMS Active
        </span>
        <span className="hidden sm:inline text-xs text-slate-500">
          ORL International Group of Hospitals (5 Centers)
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/"
          target="_blank"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-teal-700 bg-teal-50 hover:bg-teal-100 transition"
        >
          <Globe size={14} />
          View Live Website
        </Link>

        <div className="relative" ref={dropdownRef}>
          {/* Trigger */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full px-3 py-1 border border-slate-200 bg-white flex items-center gap-2.5 hover:bg-slate-50 transition"
          >
            <div className="bg-teal-600 rounded-full h-8 w-8 flex justify-center items-center text-white text-xs font-bold">
              DSK
            </div>
            <div className="flex flex-col space-y-0 text-left">
              <h4 className="text-xs font-semibold text-slate-900 leading-tight">
                Dr. (Prof.) Dhirendra Singh
              </h4>
              <p className="text-[10px] text-teal-600 font-medium">Chief ENT Surgeon</p>
            </div>
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50">
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-100">
                <p className="text-sm font-semibold text-slate-900">
                  Dr. (Prof.) Dhirendra Singh Kushwah
                </p>
                <p className="text-xs text-slate-500">
                  drdhirendrasinghent@gmail.com
                </p>
                <span className="mt-1 inline-flex items-center gap-1 text-[11px] text-teal-700 font-medium">
                  <ShieldCheck size={12} /> Super Administrator
                </span>
              </div>

              <div className="p-1 flex flex-col">
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-2 px-3 py-2 text-xs text-slate-600 hover:bg-gray-100 rounded-lg transition"
                >
                  <Settings size={14} /> Hospital & OPD Settings
                </Link>
                <form action={logoutAction}>
                  <button
                    type="submit"
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-600 hover:bg-red-50 rounded-lg transition text-left"
                  >
                    <LogOut size={14} /> Sign Out
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
