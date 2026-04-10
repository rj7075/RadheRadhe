import { MdVerified } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
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

       

          <div className="flex justify-center gap-4 mt-8 md:pb-1 flex-wrap text-sm">

            {/* Verified */}
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full backdrop-blur-md hover:bg-white/20 transition">
              <MdVerified className="text-blue-400 text-lg" />
              <span className="text-white font-medium">Verified Listings</span>
            </div>

            {/* No Brokerage */}
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full backdrop-blur-md hover:bg-white/20 transition">
              <FaMoneyBillWave className="text-green-400 text-lg" />
              <span className="text-white font-medium">No Brokerage</span>
            </div>

            {/* Instant Booking */}
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full backdrop-blur-md hover:bg-white/20 transition">
              <FiZap className="text-yellow-300 text-lg" />
              <span className="text-white font-medium">Instant Booking</span>
            </div>

          </div>

      </div>
    </section>
  );
}