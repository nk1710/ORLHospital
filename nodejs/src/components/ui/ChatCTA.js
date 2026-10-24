"use client"

import { useState } from "react"
import ChatForm from "./ChatForm"

export default function ChatCTA() {
  const [open, setOpen] = useState(false)

  const buttonClassName = "fixed bottom-4 md:bottom-6 right-2 md:right-6 z-50 bg-gradient-to-l from-sky-700 to-teal-700 hover:bg-sky-500 hover:scale-105 text-white !flex !items-center !justify-center !gap-3 !px-7 !py-4 !min-h-[50px] !min-w-[150px] rounded-full shadow-lg transition !border !border-white/20"

  return (
    <>
      {/* Floating Button */}
      {/* <button
        onClick={() => setOpen(!open)}
        className={buttonClassName}
      >
        <span className="!text-xl">💬</span>
        <span className="!font-bold !tracking-wide !block">Need Help?</span>
      </button> */}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 md:bottom-24 right-2 md:right-6 z-50 w-[92%] md:w-[350px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
          <div className="bg-gradient-to-l from-sky-700 to-teal-700 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 mt-2">
              <span className="font-semibold tracking-tight">Hospital Support</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="!p-1 text-white text-xl transition-transform duration-300 hover:rotate-90"
            >
              ✕
            </button>
          </div>

          {/* Form Container */}
          <div className="p-5 max-h-[450px] overflow-y-auto bg-white">
            <ChatForm />
          </div>

          {/* Subtle footer tip */}
          <div className="bg-slate-50 p-2 text-[10px] text-center text-slate-400 uppercase tracking-widest">
            Typically replies in minutes
          </div>
        </div>
      )}
    </>
  )
}