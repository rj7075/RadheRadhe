export default function WhyUs() {
  return (
    <section className="bg-white p-6 md:p-10 text-center">
      <h2 className="text-2xl font-semibold mb-6">
        Why Choose Us?
      </h2>

      <div className="grid md:grid-cols-3 gap-6 text-sm">
        <div className="bg-gray-50 p-4 rounded">
          ✅ Verified Listings
          <p className="text-gray-500 mt-1">
            100% genuine PGs with real photos
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded">
          💸 No Brokerage
          <p className="text-gray-500 mt-1">
            Save money with direct booking
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded">
          ⚡ Instant Booking
          <p className="text-gray-500 mt-1">
            Quick and hassle-free process
          </p>
        </div>
      </div>
    </section>
  );
}