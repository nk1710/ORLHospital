"use client";

import Image from "next/image";

export default function FloatingSocials() {
  return (
    <div className="fixed left-2 bottom-[90px] sm:bottom-[110px] md:bottom-[140px] flex flex-col gap-2.5 sm:gap-3 z-[200]">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919311449825"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform drop-shadow-md"
        aria-label="Chat on WhatsApp"
      >
        <Image
          src="/images/sticky/whatsapp.png"
          alt="WhatsApp Icon"
          width={44}
          height={44}
          className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
        />
      </a>

      {/* Call */}
      <a
        href="tel:+919311449825"
        className="hover:scale-110 transition-transform drop-shadow-md"
        aria-label="Direct Phone Call"
      >
        <Image
          src="/images/sticky/call.png"
          alt="Call Icon"
          width={44}
          height={44}
          className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
        />
      </a>

      {/* mail */}
      <a
        href="mailto:drdhirendrasinghent@gmail.com"
        className="hover:scale-110 transition-transform drop-shadow-md"
        aria-label="Send an Email"
      >
        <Image
          src="/images/sticky/email.png"
          alt="Email Icon"
          width={44}
          height={44}
          className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
        />
      </a>
    </div>
  );
}
