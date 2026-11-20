"use client";

import Image from "next/image";

export default function FloatingSocials() {
  return (
    <>
      {/* ─── DESKTOP FLOATING ICONS (Left side) ─── */}
      <div className="hidden md:flex fixed left-3 bottom-[120px] flex-col gap-3 z-[200]">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919311449825?text=Hello%20Dr.%20Dhirendra%20Singh%20Kushwah,%20I%20want%20to%20book%20an%20ENT%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative hover:scale-110 transition-transform drop-shadow-lg"
          aria-label="Chat on WhatsApp"
        >
          <Image
            src="/images/sticky/whatsapp.png"
            alt="WhatsApp Icon"
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
          />
          <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none shadow-md">
            Chat on WhatsApp
          </span>
        </a>

        {/* Call */}
        <a
          href="tel:+919311449825"
          className="group relative hover:scale-110 transition-transform drop-shadow-lg"
          aria-label="Direct Phone Call"
        >
          <Image
            src="/images/sticky/call.png"
            alt="Call Icon"
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
          />
          <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none shadow-md">
            Call Clinic (+91 93114 49825)
          </span>
        </a>

        {/* Mail */}
        <a
          href="mailto:drdhirendrasinghent@gmail.com"
          className="group relative hover:scale-110 transition-transform drop-shadow-lg"
          aria-label="Send an Email"
        >
          <Image
            src="/images/sticky/email.png"
            alt="Email Icon"
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
          />
          <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none shadow-md">
            Send an Email
          </span>
        </a>
      </div>

      {/* ─── MOBILE STICKY BOTTOM CONVERSION BAR (Thumb Zone - 85% of Patients) ─── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[999] bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 flex items-center gap-2.5 shadow-[0_-4px_25px_rgba(0,0,0,0.15)]">
        {/* Call Button */}
        <a
          href="tel:+919311449825"
          className="flex-1 bg-gradient-to-r from-teal-700 to-sky-700 active:from-teal-800 active:to-sky-800 text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md active:scale-95 transition"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span className="truncate">Call Doctor</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919311449825?text=Hello%20Dr.%20Dhirendra%20Singh%20Kushwah,%20I%20want%20to%20book%20an%20ENT%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] active:bg-[#1faa4f] text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md active:scale-95 transition"
        >
          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.031 2C6.49 2 2 6.49 2 12.031c0 1.802.47 3.552 1.36 5.094L2 22l4.984-1.312a9.982 9.982 0 005.047 1.343h.004c5.541 0 10.031-4.49 10.031-10.031 0-2.68-1.043-5.198-2.937-7.094A9.957 9.957 0 0012.031 2zm0 1.688c2.23 0 4.325.867 5.906 2.449a8.318 8.318 0 012.449 5.894c0 4.605-3.746 8.344-8.355 8.344a8.33 8.33 0 01-4.246-1.156l-.305-.18-3.156.832.844-3.078-.195-.313a8.309 8.309 0 01-1.282-4.453C3.696 7.43 7.441 3.688 12.031 3.688zm-3.418 3.516c-.195 0-.414.074-.633.32-.219.246-.84.82-.84 2.004 0 1.184.863 2.328.984 2.492.121.164 1.664 2.656 4.102 3.621.578.23 1.031.367 1.383.477.582.184 1.113.156 1.531.094.469-.07 1.441-.59 1.645-1.16.203-.57.203-1.063.14-1.164-.062-.102-.23-.164-.492-.297-.262-.133-1.547-.762-1.789-.852-.242-.09-.418-.133-.594.133-.176.266-.68.852-.832 1.027-.152.176-.305.195-.566.066-.262-.133-1.106-.406-2.106-1.3-1.008-.898-1.422-1.637-1.574-1.898-.152-.262-.016-.402.113-.531.117-.117.262-.305.395-.457.133-.152.176-.262.262-.438.086-.176.043-.328-.023-.457-.066-.133-.594-1.434-.813-1.961-.215-.516-.434-.445-.594-.453-.152-.008-.328-.008-.504-.008z" />
          </svg>
          <span className="truncate">Book on WhatsApp</span>
        </a>
      </div>
    </>
  );
}
