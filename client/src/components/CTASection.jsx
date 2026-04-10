import { FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="relative py-14 text-center text-white">
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-3xl mx-auto px-4">

        <h2 className="text-2xl md:text-4xl font-bold">
          Find Your Perfect PG in Gurgaon Today
        </h2>

        <p className="mt-3 text-gray-100">
          Get verified PG near Sohna Road, Sector 48 & Genpact with food & zero brokerage.
        </p>

        <a
          href="https://wa.me/919000000000"
          target="_blank"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold mt-6 shadow-lg hover:scale-105 transition"
        >
          <FaWhatsapp className="text-green-500 text-xl" />
          Chat on WhatsApp
        </a>

        <p className="text-xs text-gray-200 mt-4">
          Instant response • 100% Free Assistance
        </p>

      </div>
    </section>
  );
}