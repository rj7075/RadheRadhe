"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-white/10 shadow-md">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* 🔥 Logo */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Radhe Radhe PG
        </h1>

        {/* 🔥 Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          
          <Link href="/" className="relative group hover:text-white transition">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
          </Link>

          <Link href="/pg" className="relative group hover:text-white transition">
            Browse PG
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
          </Link>

          <Link href="/about" className="relative group hover:text-white transition">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
          </Link>

          <Link href="/contact" className="relative group hover:text-white transition">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
          </Link>

        </div>

        {/* 🔥 Mobile Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* 🔥 Full Screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-950/95 backdrop-blur-lg z-50 flex flex-col items-center justify-center text-center gap-8 text-white text-xl font-semibold">
          
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

        </div>
      )}
    </nav>
  );
}