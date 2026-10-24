"use client";

import { useState } from "react";

export function FaqAccordion({ faqItems }) {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-16 px-4 md:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Frequently Asked Questions</h2>
                    <div className="w-16 h-1 bg-teal-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="space-y-6">
                    {faqItems.map((item, idx) => {
                        if (item.type === "header") {
                            return (
                                <h3 key={`h-${idx}`} className="text-xl font-bold text-teal-700 mt-10 mb-4 border-b border-teal-100 pb-2">
                                    {item.text}
                                </h3>
                            );
                        }

                        const isOpen = openIndex === idx;

                        return (
                            <div key={idx} className="border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
                                <button
                                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none transition-colors hover:bg-gray-100"
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                >
                                    <span className="font-semibold text-slate-800 text-base md:text-lg">{item.q}</span>
                                    <svg
                                        className="w-5 h-5 text-teal-600 transition-transform duration-200 flex-shrink-0"
                                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div
                                    className="overflow-hidden transition-all duration-300 ease-in-out"
                                    style={{ maxHeight: isOpen ? "600px" : "0px" }}
                                >
                                    <div className="border-t border-slate-200 bg-white px-6 py-4 text-slate-600 text-sm md:text-base leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
