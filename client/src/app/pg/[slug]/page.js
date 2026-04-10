import Map from "@/components/Map";
import ImageGallery from "@/components/ImageGallery";
import CTABox from "@/components/CTABox";
import pgs from "@/data/pgs.json";
import { notFound } from "next/navigation";
import { MdVerified, MdLocationOn } from "react-icons/md";
import { FaStar, FaUtensils } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pg = pgs.find((p) => p.slug === slug);

  if (!pg) return {};

  return {
    title: `${pg.name} in ${pg.city} | PG Near ${pg.address}`,
    description: `${pg.name} - ${pg.description} Located near ${pg.address}. Book verified PG with zero brokerage.`,
    keywords: `${pg.city} pg, pg near ${pg.address}, boys pg, girls pg, pg with food`,
    openGraph: {
      title: pg.name,
      description: pg.description,
      images: [pg.images[0]],
    },
  };
}

export default async function PGDetail({ params }) {
  const { slug } = await params;
  const pg = pgs.find((p) => p.slug === slug);
  if (!pg) return notFound();

  return (
  <div className="bg-black text-white min-h-screen pb-20">

    {/* 🔥 IMAGE GALLERY */}
    <ImageGallery images={pg.images} />

    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 grid md:grid-cols-3 gap-8">

      {/* 🔥 LEFT */}
      <div className="md:col-span-2 space-y-6">

        {/* 🔥 TITLE SECTION */}
        <div>
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            {pg.name}
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            PG in {pg.city} near{" "}
            <span className="text-blue-400">{pg.address}</span>
          </p>
        </div>

        {/* 🔥 RATING + TAGS */}
        <div className="flex flex-wrap items-center gap-3">

          <span className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            ⭐ {pg.rating}
          </span>

          <span className="text-gray-400 text-sm">
            ({pg.reviews} reviews)
          </span>

          <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs">
            {pg.gender.toUpperCase()}
          </span>

          {pg.foodIncluded && (
            <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs">
              🍽 Food Included
            </span>
          )}

          <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">
            ✔ Verified
          </span>
        </div>

        {/* 🔥 DESCRIPTION */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-2xl">
          <h2 className="font-semibold mb-2 text-lg">
            About this PG
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            {pg.description}
          </p>
        </div>

        {/* 🔥 AMENITIES */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-2xl">
          <h2 className="text-lg font-semibold mb-4">
            Amenities
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {pg.amenities.map((a, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/10 px-3 py-2 rounded-lg text-sm"
              >
                ✔ {a}
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 NEARBY */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-2xl">
          <h2 className="text-lg font-semibold mb-4">
            Nearby Locations
          </h2>

          <div className="flex flex-wrap gap-2">
            {pg.nearby?.map((item, i) => (
              <span
                key={i}
                className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-full text-xs"
              >
                📍 {item}
              </span>
            ))}
          </div>
        </div>

        {/* 🔥 MAP */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-2xl">
          <h2 className="text-lg font-semibold mb-4">
            Location
          </h2>
          <Map lat={pg.latitude} lng={pg.longitude} />
        </div>

      </div>

      {/* 🔥 RIGHT CTA */}
      <div className="md:col-span-1">
        <div className="sticky top-24 space-y-4">

          {/* 🔥 PRICE CARD */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-5 rounded-2xl shadow-xl">
            <p className="text-sm text-gray-100">Starting from</p>
            <h2 className="text-2xl font-bold mt-1">
              ₹{pg.price}/month
            </h2>
          </div>

          {/* 🔥 CTA BOX */}
          <CTABox pg={pg} />

          {/* 🔥 TRUST BOX */}
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-sm text-gray-300">
            ✔ Direct Owner  
            <br />
            ✔ Zero Brokerage  
            <br />
            ✔ Instant Response
          </div>

        </div>
      </div>

    </div>
  </div>
);
}