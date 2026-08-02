"use client";

import { Phone, MessageCircle } from "lucide-react";

const PHONE = "918930353588";

export default function FloatingContact() {
  const whatsappLink = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    "Hi, I am interested in Radhe Radhe PG. Please share the details."
  )}`;

  return (
    <>
      {/* =================== WhatsApp =================== */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 left-5 z-50"
      >
        <div className="group relative cursor-pointer">
          {/* Ping */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>

          {/* Button */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl">
            <MessageCircle size={28} strokeWidth={2.5} />
          </div>

          {/* Tooltip */}
          <span className="absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100">
            WhatsApp Us
          </span>
        </div>
      </a>

      {/* =================== Call =================== */}
      <a
        href="tel:8930353588"
        aria-label="Call Now"
        className="fixed bottom-5 right-5 z-50"
      >
        <div className="group relative cursor-pointer">
          {/* Ring Animation */}
          <span className="absolute inset-0 rounded-full bg-[#C89B3C] animate-ping opacity-30"></span>

          {/* Pulse Border */}
          <span className="absolute -inset-2 rounded-full border-2 border-[#C89B3C] animate-pulse"></span>

          {/* Button */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#C89B3C] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-phone-ring">
            <Phone size={26} strokeWidth={2.5} />
          </div>

          {/* Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100">
            Call Now
          </span>
        </div>
      </a>
    </>
  );
}