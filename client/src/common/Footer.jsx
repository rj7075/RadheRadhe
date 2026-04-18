"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      
      {/* 🔥 TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        
        {/* 🏠 BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Radhe Radhe PG
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
Find verified and affordable PG in Gurgaon across prime locations like Sector 38, Sector 48, Sector 69 Badshahpur, Sohna Road, Subhash Chowk, Huda City Centre, and near Medanta Hospital. Comfortable stays for boys, girls & working professionals with modern amenities and zero brokerage.

          </p>
        </div>

        {/* 🔗 QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/pg" className="hover:text-white transition">Browse PG</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* 📍 SEO LOCATIONS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Popular Areas</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/pg?location=sohna-road" className="hover:text-white">PG near Sohna Road</Link></li>
            <li><Link href="/pg?location=sector-48" className="hover:text-white">PG in Sector 48 Gurgaon</Link></li>
            <li><Link href="/pg?location=badshahpur" className="hover:text-white">PG in Badshahpur</Link></li>
            <li><Link href="/pg?location=subhash-chowk" className="hover:text-white">PG near Subhash Chowk</Link></li>
          </ul>
        </div>

        {/* 📞 CONTACT + SOCIAL */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> 
              <a href="tel:8930353588" className="hover:text-white">
                8930353588
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> 
              <a href="tel:7297031771" className="hover:text-white">
                7297031771
              </a>
            </p>

            <p className="flex items-center gap-2">
              <MdEmail />
              <a href="mailto:rj7075yadav@gmail.com" className="hover:text-white">
                radheradhepg54321@gmail.com
              </a>
            </p>

            <p>📍 Gurgaon, Haryana</p>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-5 text-lg">
            <FaFacebook className="hover:text-white cursor-pointer transition" />
            <FaInstagram className="hover:text-white cursor-pointer transition" />
            <FaTwitter className="hover:text-white cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* 🔻 BOTTOM BAR */}
      <div className="border-t border-gray-800 text-center py-5 text-sm text-gray-400">
        © {new Date().getFullYear()} Radhe Radhe PG. All rights reserved.
      </div>
    </footer>
  );
}