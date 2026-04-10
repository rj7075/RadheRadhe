import { MdVerified } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FiZap } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center  justify-center text-center text-white overflow-hidden px-3 sm:px-4">
      
      {/* 🔥 Background */}
      {/* <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="PG in Gurgaon near Subhash Chowk and Sohna Road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 sm:bg-black/60 backdrop-blur-[2px]" />
      </div> */}

      {/* 🔥 Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto py-8 sm:py-14">
        
        {/* Heading */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold leading-snug">
          Premium PG in{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Gurgaon
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm xs:text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
          Find verified PG accommodations near{" "}
          <strong>Subhash Chowk</strong>,{" "}
          <strong>Badshahpur</strong>,{" "}
          <strong>Sector 48</strong> &{" "}
          <strong>Sohna Road</strong> with modern amenities, food, and zero brokerage.
        </p>

        {/* 🔥 SEO Tags */}
        <div className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
          {[
            "PG near Subhash Chowk",
            "PG in Badshahpur",
            "PG in Sector 48",
            "PG near Sohna Road",
          ].map((item, i) => (
            <span
              key={i}
              className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 sm:mt-8">
          <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-400 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-lg font-semibold shadow-lg hover:scale-105 transition">
            Browse PG Listings
          </button>
        </div>

        {/* 🔥 Features */}
        <div className="flex justify-center gap-2 sm:gap-4 mt-6 mb-5 sm:mt-8 flex-wrap text-xs sm:text-sm">
          
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 border border-white/20 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full backdrop-blur-md">
            <MdVerified className="text-blue-400 text-sm sm:text-lg" />
            <span>Verified</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 border border-white/20 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full backdrop-blur-md">
            <FaMoneyBillWave className="text-green-400 text-sm sm:text-lg" />
            <span>No Brokerage</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 border border-white/20 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full backdrop-blur-md">
            <FiZap className="text-yellow-300 text-sm sm:text-lg" />
            <span>Instant Booking</span>
          </div>

        </div>
      </div>
    </section>
  );
}