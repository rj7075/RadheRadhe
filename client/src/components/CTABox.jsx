"use client";

export default function CTABox({ pg }) {
  return (
    <div className="bg-white shadow-lg p-6 rounded-xl h-fit sticky top-6">
      <p className="text-3xl font-bold text-green-600">
        ₹{pg.price}
        <span className="text-sm text-gray-500"> /month</span>
      </p>

      <p className="text-sm text-gray-600 mt-1">
        Deposit: ₹{pg.deposit}
      </p>

      <p className="text-sm text-red-500 mt-1">
        🔥 Only {pg.availableBeds} beds left!
      </p>

      <button className="w-full bg-blue-600 text-white py-3 rounded mt-4 font-semibold">
        Book Visit
      </button>

      <a
        href={`https://wa.me/91${pg.phone}`}
        className="w-full block text-center bg-green-500 text-white py-3 rounded mt-3 font-semibold"
      >
        WhatsApp Now
      </a>

      <p className="text-xs text-gray-500 mt-3 text-center">
        No brokerage • Instant booking
      </p>
    </div>
  );
}