'use client'

import { useState } from 'react'

export default function DoctorImage({ src, alt, name, qualification }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="rounded-2xl overflow-hidden min-h-[360px] flex flex-col items-center justify-center gap-6 p-8 shadow-sm"
      style={{
        background: "linear-gradient(135deg, #0f766e 0%, #115e59 50%, #04342C 100%)",
      }}
    >
      {!imgError ? (
        <img
          src={src}
          alt={alt}
          className="w-full max-w-sm sm:max-w-md h-auto max-h-80 object-contain sm:object-cover rounded-xl border-4 border-teal-400 shadow-lg"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-36 h-36 rounded-full bg-teal-600 border-4 border-teal-400 flex items-center justify-center text-4xl font-semibold text-teal-100">
          DK
        </div>
      )}
      <div className="flex gap-6 mt-2">
        {[
          {label: "Happy Patients" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-2xl font-semibold text-teal-200">{stat.value}</p>
            <p className="text-xs uppercase tracking-widest text-teal-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
