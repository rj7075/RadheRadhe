import PGList from "@/components/PGList";
import Hero from "@/components/Hero";
import Filters from "@/components/Filters";
import WhyUs from "@/components/WhyUs";
import CTASection from "@/components/CTASection";
import pgs from "@/data/pgs.json";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FiZap } from "react-icons/fi";
import { HiOutlineHomeModern } from "react-icons/hi2";

export const metadata = {
  title: "Best PG in Gurgaon | Boys, Girls & Unisex PG Near Sohna Road",
  description:
    "Find verified PGs in Gurgaon near Sector 48, Sohna Road & Badshahpur. Affordable boys & girls PG with food, WiFi & zero brokerage.",
};

export default function Home() {
  return (
    <main className="bg-gray-50">

      {/* 🔥 HERO */}
      <Hero />
      {/* 🔥 FILTERS */}
      <div className="flex justify-center pt-6">
        <Filters />
      </div>

      {/* 🔥 FEATURED LISTINGS */}
      <section className="p-4 md:px-10 mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Featured PG in Gurgaon
          </h2>

          <a
            href="/pg"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            View All →
          </a>
        </div>

        <PGList pgs={pgs.slice(0, 6)} />
      </section>

      {/* 🔥 WHY US */}
      <WhyUs />

      {/* 🔥 SEO CONTENT (UPGRADED) */}
      <section className="p-6 md:px-10 bg-white">
        
        <h2 className="text-xl md:text-2xl font-semibold mb-3">
          PG in Gurgaon Near Sohna Road, Sector 48 & Badshahpur
        </h2>

        <p className="text-gray-600 max-w-4xl leading-relaxed">
          Looking for the best <strong>PG in Gurgaon</strong>? Explore fully furnished 
          boys, girls, and unisex PG accommodations near 
          <strong> Sohna Road, Sector 48, Badshahpur, Subhash Chowk, Vatika Chowk, and Genpact</strong>.  
          These areas are highly preferred by working professionals and students due to 
          excellent connectivity, nearby offices, and affordable living options.
        </p>

        <p className="text-gray-600 max-w-4xl mt-3 leading-relaxed">
          Choose from a wide range of <strong>verified PG listings</strong> with modern amenities 
          like food, WiFi, AC rooms, laundry, and security. Our platform ensures 
          <strong> zero brokerage</strong>, transparent pricing, and easy booking, helping you find 
          the perfect PG quickly and hassle-free.
        </p>

        {/* 🔥 LOCATION KEYWORDS */}
        <div className="flex flex-wrap gap-3 mt-5 text-sm">
          {[
            "PG near Sohna Road",
            "PG in Sector 48 Gurgaon",
            "PG in Badshahpur",
            "PG near Subhash Chowk",
            "PG near Genpact",
          ].map((item, i) => (
            <span
              key={i}
              className="bg-gray-100 hover:bg-blue-50 px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

      </section>

      {/* 🔥 FINAL CTA (STRONG CLOSE) */}
      <CTASection />

    </main>
  );
}