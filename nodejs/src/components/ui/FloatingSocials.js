"use client";

import Image from "next/image";

export default function FloatingSocials() {
  return (
    <div className="fixed left-1 bottom-[100px] md:bottom-[140px] flex flex-col gap-4 z-[200]">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919311449825"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <Image
          src="/images/sticky/whatsapp.png"
          alt="WhatsApp Icon"
          width={50}
          height={50}
        />
      </a>

      {/* Call */}
      <a
        href="tel:+919311449825"
        className="hover:scale-110 transition-transform"
      >
        <Image
          src="/images/sticky/call.png"
          alt="Call Icon"
          width={50}
          height={50}
        />
      </a>

      {/* mail */}
      <a
        href="mailto:drdhirendrasinghent@gmail.com"
        className="hover:scale-110 transition-transform"
      >
        <Image
          src="/images/sticky/email.png"
          alt="Call Icon"
          width={50}
          height={50}
        />
      </a>
    </div>
  );
}