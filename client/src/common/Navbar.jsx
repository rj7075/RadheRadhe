"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          PG Finder
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          
          <Link href="/" className="relative group hover:text-white transition">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 transition-all group-hover:w-full"></span>
          </Link>

          <Link href="/about" className="relative group hover:text-white transition">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 transition-all group-hover:w-full"></span>
          </Link>

          <Link href="/contact" className="relative group hover:text-white transition">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 transition-all group-hover:w-full"></span>
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-6 text-gray-300 font-medium">
          
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-white">
            Home
          </Link>

          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-white">
            About
          </Link>

          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-white">
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
}