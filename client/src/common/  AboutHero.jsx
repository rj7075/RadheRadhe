export default function AboutHero() {
  return (
    <section className="text-center py-14 bg-gradient-to-b from-white to-gray-50">
      
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        About{" "}
        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          PG Finder
        </span>
      </h1>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
        Find the best <strong>PG in Gurgaon</strong> near Sohna Road, Sector 48,
        Badshahpur, and nearby areas with verified listings, zero brokerage,
        and instant booking.
      </p>

      {/* Trust line */}
      <p className="text-sm text-gray-500 mt-3">
        500+ PGs • 1000+ Happy Users • 0 Brokerage
      </p>

    </section>
  );
}