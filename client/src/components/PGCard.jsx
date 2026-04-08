import Link from "next/link";

export default function PGCard({ pg }) {
  return (
    <Link href={`/pg/${pg.slug}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer">

        {/* 🔥 IMAGE (FIXED HEIGHT) */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={pg.images[0]}
            alt={pg.name}
            className="w-full h-full object-cover"
          />

          {/* Price Overlay */}
          <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
            ₹{pg.price}/mo
          </div>

          {/* Beds Left */}
          {pg.availableBeds && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              {pg.availableBeds} beds left
            </div>
          )}
        </div>

        {/* 🔥 CONTENT */}
        <div className="p-4 space-y-2">
          {/* Title */}
          <h3 className="font-semibold text-lg line-clamp-1">
            {pg.name}
          </h3>

          {/* Location */}
          <p className="text-sm text-gray-500 line-clamp-1">
            📍 {pg.address}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs">
              ⭐ {pg.rating || "4.0"}
            </span>
            <span className="text-gray-500 text-xs">
              ({pg.reviews || 0})
            </span>
          </div>

          {/* Amenities (Short) */}
          <div className="flex gap-2 flex-wrap text-xs text-gray-600">
            {pg.amenities?.slice(0, 3).map((a, i) => (
              <span key={i} className="bg-gray-100 px-2 py-1 rounded">
                {a}
              </span>
            ))}
          </div>

          {/* Extra Info */}
          <div className="flex justify-between items-center text-xs mt-2">
            {pg.foodIncluded && (
              <span className="text-green-600 font-medium">
                🍽 Food
              </span>
            )}
            <span className="text-gray-500">
              {pg.gender.toUpperCase()}
            </span>
          </div>

          {/* CTA */}
          <button className="w-full bg-blue-600 text-white py-2 rounded mt-3 text-sm font-medium hover:bg-blue-700 transition">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}