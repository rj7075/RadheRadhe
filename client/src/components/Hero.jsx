export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/pg1.jp"
          alt="PG in Gurgaon near Subhash Chowk and Sohna Road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-4">
        
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Premium PG in{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Gurgaon
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Find verified PG accommodations near{" "}
          <strong>Subhash Chowk</strong>,{" "}
          <strong>Badshahpur</strong>,{" "}
          <strong>Sector 48</strong> &{" "}
          <strong>Sohna Road</strong> with modern amenities, food, and zero brokerage.
        </p>

        {/* Location Keywords (SEO Boost) */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          {[
            "PG near Subhash Chowk Gurgaon",
            "PG in Badshahpur Gurgaon",
            "PG in Sector 48 Gurgaon",
            "PG near Sohna Road Gurgaon",
          ].map((item, i) => (
            <span
              key={i}
              className="bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <button className="bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition">
            Browse PG Listings
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap text-sm">
          <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur">
            ✅ Verified Listings
          </span>
          <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur">
            💸 No Brokerage
          </span>
          <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur">
            ⚡ Instant Booking
          </span>
        </div>

      </div>
    </section>
  );
}