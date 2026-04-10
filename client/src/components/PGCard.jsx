import Link from "next/link";

export default function PGCard({ pg }) {
  return (
    <Link href={`/pg/${pg.slug || ""}`}>
      <div className="group bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer hover:-translate-y-1">
      

        {/* 🔥 IMAGE */}
        <div className="relative h-52 w-full overflow-hidden">
          <img
            src={pg.images?.[0] || "/fallback.jpg"}
            alt={pg.name || "PG"}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* 💰 Price */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-black font-semibold px-3 py-1 text-xs sm:text-sm rounded-full shadow">
            ₹{pg.price || "N/A"}/mo
          </div>

          {/* 🔥 Beds */}
          {pg.availableBeds && (
            <div className="absolute top-3 right-3 bg-red-500/90 text-white text-xs px-3 py-1 rounded-full shadow">
              {pg.availableBeds} left
            </div>
          )}

          {/* ✅ Verified */}
          <div className="absolute bottom-3 left-3 text-xs bg-green-500/90 text-white px-3 py-1 rounded-full shadow">
            ✔ Verified
          </div>
        </div>

        {/* 🔥 CONTENT */}
        <div className="p-4 space-y-3">

          {/* Title */}
          <h3 className="font-semibold text-lg text-white line-clamp-1 group-hover:text-blue-400 transition">
            {pg.name || "PG Name"}
          </h3>

          {/* Location */}
          <p className="text-sm text-gray-400 line-clamp-1">
            📍 {pg.address || "Location"}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs font-semibold">
              ⭐ {pg.rating || "4.0"}
            </span>
            <span className="text-gray-400 text-xs">
              ({pg.reviews || 0} reviews)
            </span>
          </div>

          {/* Amenities */}
          <div className="flex gap-2 flex-wrap text-xs">
            {pg.amenities?.slice(0, 3)?.map((a, i) => (
              <span
                key={i}
                className="bg-white/10 border border-white/10 text-gray-300 px-2 py-1 rounded-full backdrop-blur"
              >
                {a}
              </span>
            ))}
          </div>

          {/* Extra Info */}
          <div className="flex justify-between items-center text-xs mt-1">
            {pg.foodIncluded && (
              <span className="text-green-400 font-medium">
                🍽 Food Included
              </span>
            )}

            <span className="text-gray-400 font-medium">
              {(pg.gender || "Unisex").toUpperCase()}
            </span>
          </div>

          {/* CTA */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-xl hover:scale-[1.03] transition">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}