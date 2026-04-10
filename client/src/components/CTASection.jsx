export default function CTASection() {
  return (
    <section className="relative py-12 md:py-16 text-center text-white overflow-hidden">
      
      {/* 🔥 Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />

      {/* 🔥 Overlay Glow */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
          Find Your Perfect PG in Gurgaon Today
        </h2>

        {/* Subtext */}
        <p className="mt-3 text-gray-100 text-base md:text-lg">
          Get verified PG options near <strong>Sohna Road, Sector 48, Badshahpur & Genpact</strong>  
          with food, WiFi & zero brokerage.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="https://wa.me/919000000000"
            target="_blank"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* Trust Line */}
        <p className="text-xs text-gray-200 mt-4">
          ⚡ Instant response • 100% Free Assistance • No Brokerage
        </p>

      </div>
    </section>
  );
}