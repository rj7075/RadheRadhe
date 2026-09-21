import { FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="relative py-16 text-white overflow-hidden">

      {/* 🔥 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-indigo-500/30" />

      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/30 blur-3xl rounded-full" />

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Find Your Perfect{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            PG in Gurgaon
          </span>{" "}
          Today
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-300 text-sm sm:text-base">
          Stay directly with owner across top locations like{" "}
          <span className="text-blue-400">Sohna Road</span>,{" "}
          <span className="text-green-400">Sector 38</span>,{" "}
          <span className="text-yellow-400">Sector 48</span>,{" "}
          <span className="text-pink-400">Sector 69 Badshahpur</span>,{" "}
          <span className="text-cyan-400">Subhash Chowk</span>, and near{" "}
          <span className="text-indigo-400">Medanta Hospital</span> &{" "}
          <span className="text-orange-400">Genpact</span>.  
          No brokerage • Verified rooms • Instant booking.
        </p>

        {/* 🔥 CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-7">

          {/* WhatsApp 1 */}
          <a
            href="https://wa.me/918930353588"
            target="_blank"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-lg font-semibold shadow-xl hover:scale-105 transition"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp 
          </a>

         

        </div>

        {/* Trust Line */}
        <p className="text-xs text-gray-400 mt-4">
          ⚡ Instant response • 100% Free • Direct Owner Support
        </p>

      </div>
    </section>
  );
}