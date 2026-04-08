export default function Hero() {
  return (
    <section className="bg-white text-center p-8 md:p-16 border-b">
      <h1 className="text-3xl md:text-5xl font-bold">
        Find Your Perfect PG in Gurgaon & Delhi
      </h1>

      <p className="text-gray-600 mt-3">
        Verified PGs • No Brokerage • Instant Booking
      </p>

      {/* Search */}
      <div className="mt-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by location (e.g. Sector 14 Gurgaon)"
          className="w-full md:w-1/2 border p-3 rounded-l"
        />
        <button className="bg-blue-600 text-white px-6 rounded-r">
          Search
        </button>
      </div>

      {/* Trust badges */}
      <div className="flex justify-center gap-4 mt-6 flex-wrap text-sm">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded">
          ✅ Verified
        </span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
          💸 No Brokerage
        </span>
        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded">
          ⚡ Instant Booking
        </span>
      </div>
    </section>
  );
}