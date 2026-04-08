import PGList from "@/components/PGList";
import pgs from "@/data/pgs.json";

export const metadata = {
  title: "PG in Gurgaon & Delhi | Affordable Boys & Girls PG",
  description:
    "Find verified PG accommodations in Gurgaon & Delhi. Affordable rent, food included, no brokerage. Book instantly.",
};

export default function Pg() {
  const total = pgs.length;

  return (
    <main className="bg-gray-50 min-h-screen">
      
      {/* 🔥 HERO SECTION */}
      <section className="bg-white p-6 md:p-10 text-center border-b">
        <h1 className="text-2xl md:text-4xl font-bold">
          Find the Best PG in Gurgaon & Delhi
        </h1>
        <p className="text-gray-600 mt-2">
          Verified PGs • No Brokerage • Instant Booking
        </p>

        {/* Trust badges */}
        <div className="flex justify-center gap-4 mt-4 flex-wrap text-sm">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded">
            ✅ Verified Listings
          </span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
            💸 No Brokerage
          </span>
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded">
            ⚡ Instant Booking
          </span>
        </div>
      </section>

      {/* 🔥 FILTER BAR (UI ONLY FOR NOW) */}
      <section className="p-4 md:px-10 flex flex-wrap gap-3 items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          <button className="px-4 py-2 bg-white border rounded hover:bg-gray-100 text-sm">
            All
          </button>
          <button className="px-4 py-2 bg-white border rounded hover:bg-gray-100 text-sm">
            Boys
          </button>
          <button className="px-4 py-2 bg-white border rounded hover:bg-gray-100 text-sm">
            Girls
          </button>
          <button className="px-4 py-2 bg-white border rounded hover:bg-gray-100 text-sm">
            With Food
          </button>
          <button className="px-4 py-2 bg-white border rounded hover:bg-gray-100 text-sm">
            Under ₹8000
          </button>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-600">
          {total} PGs available
        </p>
      </section>

      {/* 🔥 LISTING */}
      <section className="p-4 md:px-10 pb-10">
        <PGList pgs={pgs} />
      </section>

      {/* 🔥 CTA BANNER */}
      <section className="bg-blue-600 text-white text-center p-6">
        <h2 className="text-xl font-semibold">
          Can't find the perfect PG?
        </h2>
        <p className="text-sm mt-1">
          Talk to our expert & get personalized recommendations
        </p>

        <a
          href="https://wa.me/919000000000"
          className="inline-block bg-white text-blue-600 px-6 py-2 rounded mt-4 font-semibold"
        >
          Contact on WhatsApp
        </a>
      </section>

      {/* 🔥 SEO CONTENT */}
      <section className="p-6 md:px-10 bg-white">
        <h2 className="text-lg font-semibold">
          PG in Gurgaon & Delhi
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Looking for affordable PG accommodation in Gurgaon or Delhi? 
          We provide verified listings with modern amenities like WiFi, food, 
          AC, and laundry. Choose from boys and girls PG options near metro 
          stations, offices, and markets.
        </p>
      </section>
    </main>
  );
}