export const metadata = {
  title: "About Us | PG Finder",
  description:
    "Learn about PG Finder – your trusted platform to find verified PG accommodations in Gurgaon & Delhi.",
};

export default function About() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* 🔥 HERO */}
      <section className="bg-white text-center p-8 md:p-16 border-b">
        <h1 className="text-3xl md:text-4xl font-bold">
          About PG Finder
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We help students and working professionals find safe, affordable,
          and verified PG accommodations without any brokerage.
        </p>
      </section>

      {/* 🔥 MISSION */}
      <section className="p-6 md:p-10 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our mission is to simplify the PG search experience by providing
          verified listings, transparent pricing, and instant booking options.
          We aim to eliminate middlemen and make finding a PG as easy as booking a cab.
        </p>
      </section>

      {/* 🔥 WHY US */}
      <section className="bg-white p-6 md:p-10 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="bg-gray-50 p-4 rounded">
            ✅ Verified Listings
            <p className="text-gray-500 mt-1">
              Every PG is checked for quality and authenticity
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            💸 No Brokerage
            <p className="text-gray-500 mt-1">
              Direct deals with owners, no hidden charges
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            ⚡ Fast Booking
            <p className="text-gray-500 mt-1">
              Book your PG instantly via WhatsApp or call
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 STATS (SOCIAL PROOF) */}
      <section className="p-6 md:p-10 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6">
          Our Impact
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-3xl font-bold text-blue-600">500+</p>
            <p className="text-gray-600">PG Listings</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-blue-600">1000+</p>
            <p className="text-gray-600">Happy Users</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-blue-600">0</p>
            <p className="text-gray-600">Brokerage</p>
          </div>
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="bg-blue-600 text-white text-center p-8">
        <h2 className="text-xl font-semibold">
          Looking for a PG?
        </h2>

        <p className="text-sm mt-2">
          Explore verified PGs and book instantly
        </p>

        <a
          href="/pg"
          className="inline-block bg-white text-blue-600 px-6 py-2 rounded mt-4 font-semibold"
        >
          Browse PGs
        </a>
      </section>

      {/* 🔥 SEO CONTENT */}
      <section className="p-6 md:p-10 bg-white">
        <h2 className="text-lg font-semibold">
          About PG Finder Platform
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          PG Finder is a trusted platform designed to help users find the best
          paying guest accommodations in Gurgaon and Delhi. With a focus on
          affordability, convenience, and trust, we bring verified PG listings
          with modern amenities like WiFi, food, AC, and laundry.
        </p>
      </section>

    </main>
  );
}