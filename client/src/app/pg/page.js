import data from "@/data/pgs.json";
import PGList from "@/components/PGList";
import Filters from "@/components/Filters";
import { Suspense } from "react";

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const gender = params?.gender;

  let filteredPGs = data;

  if (gender) {
    filteredPGs = data.filter(
      (pg) => pg.gender?.toLowerCase() === gender.toLowerCase()
    );
  }

  return (
    <div className="bg-black text-white">
      

      {/* 🔥 HERO SEO SECTION */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-950 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
         

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              {gender ? (
                <>
                  <span className="capitalize">{gender}</span>{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    PG in Gurgaon
                  </span>
                </>
              ) : (
                <>
                  Best{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    PG in Gurgaon
                  </span>
                </>
              )}{" "}
              Near{" "}
              <span className="text-yellow-400">Sohna Road</span>,{" "}
              <span className="text-green-400">Sector 48</span> &{" "}
              <span className="text-pink-400">Badshahpur</span>
            </h1>

            <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
              Find verified PG accommodations with{" "}
              <span className="text-green-400">food</span>,{" "}
              <span className="text-blue-400">WiFi</span>,{" "}
              <span className="text-purple-400">AC rooms</span>, and{" "}
              <span className="text-pink-400">security</span>.  
              Stay directly with owner — <span className="text-yellow-400 font-semibold">no brokerage</span>.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-5 text-xs sm:text-sm">
              {[
                "PG near Genpact",
                "PG in Sector 48",
                "PG near Sohna Road",
                "PG in Badshahpur",
                "PG near Subhash Chowk",
              ].map((item, i) => (
                <span
                  key={i}
                  className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="/img3.jpg"
              alt="PG in Gurgaon"
              className="rounded-2xl shadow-2xl w-full h-[260px] sm:h-[320px] md:h-[400px] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-xs sm:text-sm">
              ⭐ Direct Owner PG
            </div>
          </div>

        </div>
      </section>

      {/* 🔥 FILTERS */}
      <div className="flex justify-center items-center px-4 py-8">
        <Suspense
          fallback={
            <div className="text-gray-400 text-sm animate-pulse">
              Loading filters...
            </div>
          }
        >
          <Filters />
        </Suspense>
      </div>

      {/* 🔥 RESULT HEADING */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-4">
        <h2 className="text-xl md:text-2xl font-semibold">
          {gender ? `${gender} PG Options` : "Available PG Options"}
        </h2>
      </div>

      {/* 🔥 PG LIST */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <PGList pgs={filteredPGs} />
      </div>

      {/* 🔥 AFTER LISTING CONTENT (PREMIUM) */}
      <section className="mt-16 py-12">
       
  <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">

    {/* 🔥 LEFT CONTENT */}
    <div className="order-1">
      
      <h3 className="text-2xl md:text-3xl font-bold leading-snug">
        Comfortable PG Living in{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Gurgaon
        </span>
      </h3>

      <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
        Looking for a comfortable and affordable <strong>PG in Gurgaon</strong>? 
        Areas like <span className="text-yellow-400">Sohna Road</span>,{" "}
        <span className="text-green-400">Sector 48</span>,{" "}
        <span className="text-pink-400">Badshahpur</span>,{" "}
        <span className="text-blue-400">Subhash Chowk</span>, and{" "}
        <span className="text-cyan-400">Vatika Chowk</span> are highly preferred.
      </p>

      <p className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
        Located near <span className="text-yellow-400">Genpact</span>,{" "}
        <span className="text-green-400">Spaze IT Park</span>,{" "}
        <span className="text-pink-400">Unitech Cyber Park</span>, and{" "}
        <span className="text-blue-400">DLF Cyber City</span>.
      </p>

      <p className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
        Fully furnished <strong>boys, girls & unisex PG</strong> with{" "}
        <span className="text-green-400">food</span>,{" "}
        <span className="text-blue-400">WiFi</span>,{" "}
        <span className="text-purple-400">AC</span>, and security.  
        <span className="text-yellow-400 font-semibold"> Zero brokerage</span>.
      </p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 mt-5 text-xs sm:text-sm">
        {[
          "PG near Sohna Road Gurgaon",
          "PG in Sector 48 Gurgaon",
          "PG in Badshahpur Gurgaon",
          "PG near Subhash Chowk",
          "PG near Genpact Gurgaon",
        ].map((item, i) => (
          <span
            key={i}
            className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur"
          >
            {item}
          </span>
        ))}
      </div>

    </div>

    {/* 🔥 RIGHT IMAGE */}
    <div className="relative order-2">
      <img
        src="/img4.jpg"
        alt="PG rooms in Gurgaon"
        className="rounded-2xl shadow-2xl w-full h-[260px] sm:h-[320px] md:h-[400px] object-cover"
      />
      <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-xs sm:text-sm">
        🏠 Comfortable Living
      </div>
    </div>

  </div>
</section>

    </div>
  );
}