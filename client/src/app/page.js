import PGList from "@/components/PGList";
import Hero from "@/components/Hero";
import Filters from "@/components/Filters";
import WhyUs from "@/components/WhyUs";
import CTASection from "@/components/CTASection";
import pgs from "@/data/pgs.json";

export const metadata = {
  title: "Best PG in Gurgaon & Delhi | Affordable Boys & Girls PG",
  description:
    "Find verified PGs in Gurgaon & Delhi with food, WiFi, and zero brokerage. Book instantly.",
};

export default function Home() {
  return (
    <main className="bg-gray-50">

      {/* 🔥 HERO */}
      <Hero />

      {/* 🔥 FILTERS */}
      <Filters />

      {/* 🔥 FEATURED LISTINGS */}
      <section className="p-4 md:px-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Featured PGs
        </h2>
        <PGList pgs={pgs.slice(0, 6)} />
      </section>

      {/* 🔥 WHY US */}
      <WhyUs />

      {/* 🔥 CTA */}
      

      {/* 🔥 ALL PGs */}
      {/* <section className="p-4 md:px-10 pb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Explore All PGs
        </h2>
        <PGList pgs={pgs} />
      </section> */}

      {/* 🔥 SEO CONTENT */}
      <section className="p-6 md:px-10 bg-white">
        <h2 className="text-lg font-semibold">
          PG in Gurgaon & Delhi
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Discover affordable PG accommodations in Gurgaon and Delhi with modern
          amenities like food, WiFi, AC, and laundry. Choose from verified boys
          and girls PGs near metro stations and offices. Book your stay today
          with zero brokerage.
        </p>
      </section>
      <CTASection />
    </main>
  );
}