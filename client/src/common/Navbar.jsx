"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 🔥 Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-white/10 shadow-md">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        
        {/* 🔥 Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
          <Link href={"/"}>
          Radhe Radhe PG
          </Link>
        </h1>

        {/* 🔥 Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          {["Home", "Browse PG", "About", "Contact"].map((item, i) => {
            const href = ["/", "/pg", "/about", "/contact"][i];
            return (
              <Link
                key={item}
                href={href}
                className="relative group hover:text-white transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
              </Link>
            );
          })}
        </div>

        {/* 🔥 Mobile Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* 🔥 Mobile Menu (Slide Down) */}
      <div
        className={`md:hidden  absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ${
          isOpen ? "h-screen justify-center items-center opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-5 text-white text-lg font-medium">
          
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-400">
            Home
          </Link>

          <Link href="/pg" onClick={() => setIsOpen(false)} className="hover:text-blue-400">
            Browse PG
          </Link>

          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-400">
            About
          </Link>

          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400">
            Contact
          </Link>

          {/* 🔥 Optional CTA */}
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg text-white">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}