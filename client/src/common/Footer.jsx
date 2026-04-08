// /components/Footer.jsx
"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* 🏠 Brand */}
        <div>
          <h2 className="text-white text-2xl font-bold">PG Finder</h2>
          <p className="mt-3 text-sm">
            Find affordable and comfortable PG accommodations across India.
            Trusted by students & professionals.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* 📍 Popular Cities (SEO BOOST) */}
        <div>
          <h3 className="text-white font-semibold mb-3">Popular Cities</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/city/gurgaon">PG in Gurgaon</Link></li>
            <li><Link href="/city/delhi">PG in Delhi</Link></li>
            <li><Link href="/city/noida">PG in Noida</Link></li>
          </ul>
        </div>

        {/* 📞 Contact + Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">📍 Gurgaon, India</p>
          <p className="text-sm">📞 +91 9876543210</p>
          <p className="text-sm">✉️ support@pgfinder.com</p>

          <div className="flex gap-4 mt-4 text-lg">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* 🔻 Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} PG Finder. All rights reserved.
      </div>
    </footer>
  );
}