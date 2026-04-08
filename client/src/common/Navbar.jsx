// /components/Navbar.jsx
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow p-4 flex justify-between">
      <h1 className="font-bold text-xl">PG Finder</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}