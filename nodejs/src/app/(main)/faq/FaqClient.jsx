"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";

export default function FaqClient({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:border-teal-500/40 transition"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 sm:p-5 text-left bg-white hover:bg-slate-50 transition gap-4"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>{faq.question}</span>
              </span>
              <span
                className={`w-7 h-7 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-teal-600 text-white" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

