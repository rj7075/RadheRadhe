import PGList from "@/components/PGList";
import Hero from "@/components/Hero";
import Filters from "@/components/Filters";
import WhyUs from "@/components/WhyUs";
import CTASection from "@/components/CTASection";
import pgs from "@/data/pgs.json";
import { Suspense } from "react";
import Link from "next/link";

export const metadata = {
  title:
    "Best PG in Gurgaon Sector 48 & Sohna Road | Near Genpact, Vatika Chowk & Subhash Chowk",

  description:
    "Find verified PG in Gurgaon near Sector 48, Sohna Road & Badshahpur. PG near Genpact, Vatika Chowk & JMD Subhash Chowk with food, WiFi & zero brokerage. Boys, girls & unisex PG available at affordable prices.",
};

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* 🔥 HERO */}
      <Hero />

      {/* 🔥 FILTERS */}
      <div className="flex justify-center items-center px-4 py-8">
        <Suspense
          fallback={
            <div className="text-gray-400 text-sm animate-pulse">
              Loading filters...
            </div>
          }
        >
          <Filters />
        </Suspense>
      </div>

      {/* 🔥 FEATURED LISTINGS */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-6">
        

        {/* Heading Row */}
        <div className="flex justify-between items-center mb-6 flex-wrap  gap-3">
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              PG in Gurgaon
            </span>
          </h2>

          <Link
            href="/pg"
            className="text-sm text-blue-400 font-medium hover:underline"
          >
            View All →
          </Link>
        </div>

        {/* PG LIST */}
        <div>
          
        <PGList pgs={pgs.slice(0, 6)} />
        </div>
      </section>

      {/* 🔥 WHY US */}
      <WhyUs />

      {/* 🔥 SEO CONTENT */}
      <section className="bg-black py-12 md:py-16">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-indigo-500/20" />

      
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full" /> */}
      {/* Glow Effect */}
        <div className="max-w-7xl mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
  <h2 className="text-2xl md:text-4xl font-bold leading-snug">
    Premium PG in{" "}
    <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
      Gurgaon
    </span>{" "}
    Near{" "}
    <span className="text-yellow-400">Sohna Road</span>,{" "}
    <span className="text-green-400">Sector 48</span>,{" "}
    <span className="text-green-600">Sector 69</span>{" "}
    <span className="text-pink-400">Badshahpur</span> &{" "}
    <span className="text-blue-400">Sector 38</span>{" "}
    
  </h2>

  <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
    Discover premium and affordable PG in Gurgaon located near{" "}
    <span className="text-blue-400">Subhash Chowk</span>,{" "}
    <span className="text-cyan-400">Vatika Chowk</span>,{" "}
    <span className="text-yellow-400">Genpact</span>, and{" "}
    <span className="text-green-400">Sohna Road</span>. Our PG accommodations are perfect for working professionals, students, and corporate employees looking for comfort and convenience.
  </p>

  <p className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
    Choose from fully furnished{" "}
    <span className="text-purple-400">single, double & triple sharing rooms</span>{" "}
    with modern amenities like{" "}
    <span className="text-green-400">healthy meals</span>,{" "}
    <span className="text-blue-400">high-speed WiFi</span>,{" "}
    <span className="text-pink-400">AC rooms</span>,{" "}
    <span className="text-yellow-400">daily housekeeping</span>, and{" "}
    <span className="text-cyan-400">24/7 security</span>. Enjoy a safe, clean, and comfortable stay with{" "}
    <span className="text-yellow-400 font-semibold">
      zero brokerage
    </span>{" "}
    and direct owner deals.
  </p>

  <p className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
    Whether you are searching for{" "}
    <span className="text-blue-400">boys PG in Gurgaon</span>,{" "}
    <span className="text-pink-400">girls PG in Gurgaon</span>, or{" "}
    <span className="text-green-400">unisex PG near Genpact</span>, we offer the best options in prime locations like{" "}
    <span className="text-yellow-400">Sector 48</span>,{" "}
    <span className="text-cyan-400">Badshahpur</span>, and{" "}
    <span className="text-purple-400">Vatika Chowk</span>.
  </p>

  {/* TAGS */}
  <div className="flex flex-wrap gap-2 mt-6 text-xs md:text-sm">
    {[
      "PG near Sohna Road Gurgaon",
      "PG in Sector 48 Gurgaon",
      "PG in Sector 38 Gurgaon",
      "PG in Badshahpur Gurgaon",
      "PG near Subhash Chowk",
      "PG near Vatika Chowk",
      "PG near Genpact Gurgaon",
      "Boys PG in Gurgaon",
      "Girls PG in Gurgaon",
    ].map((item, i) => (
      <span
        key={i}
        className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur"
      >
        {item}
      </span>
    ))}
  </div>
</div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="/sector69.jpeg"
              alt="Premium PG in Gurgaon"
              className="rounded-2xl shadow-2xl w-full h-[260px] sm:h-[320px] md:h-[400px] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-4 py-2 rounded-lg text-xs sm:text-sm">
              ⭐ Trusted PG Owner
            </div>
          </div>

        </div>
      </section>

      {/* 🔥 CTA */}
      <CTASection />
    </main>
  );
}