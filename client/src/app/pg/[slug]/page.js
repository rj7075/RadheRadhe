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
    <div className="bg-gray-50 min-h-screen pb-20">

      {/* 🔥 SEO SCHEMA (IMPROVED) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: pg.name,
            address: pg.address,
            priceRange: `₹${pg.price}`,
            geo: {
              "@type": "GeoCoordinates",
              latitude: pg.latitude,
              longitude: pg.longitude,
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: pg.rating,
              reviewCount: pg.reviews,
            },
          }),
        }}
      />

      {/* 🔥 IMAGE GALLERY */}
      <ImageGallery images={pg.images} />

      <div className="p-4 md:p-8 grid md:grid-cols-3 gap-6">

        {/* 🔥 LEFT */}
        <div className="md:col-span-2 space-y-5">

          {/* Title */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {pg.name}
            </h1>

            {/* 🔥 SEO SUBTEXT */}
            <p className="text-gray-500 text-sm mt-1">
              PG in {pg.city} near {pg.address}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3 text-sm">
            <span className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded">
              <FaStar /> {pg.rating}
            </span>
            <span className="text-gray-600">
              ({pg.reviews} reviews)
            </span>
          </div>

          {/* Address */}
          <p className="flex items-center gap-2 text-gray-600">
            <MdLocationOn className="text-red-500" />
            {pg.address}
          </p>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {pg.gender.toUpperCase()} PG
            </span>

            {pg.foodIncluded && (
              <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                <FaUtensils /> Food Included
              </span>
            )}

            <span className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full">
              <MdVerified /> Verified
            </span>
          </div>

          {/* Description */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h2 className="font-semibold mb-2">About this PG</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {pg.description}
            </p>
          </div>

          {/* Amenities */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {pg.amenities.map((a, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-2 rounded text-sm flex items-center gap-2"
                >
                  ✔ {a}
                </div>
              ))}
            </div>
          </div>

          {/* Nearby */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Nearby Places</h2>
            <div className="flex gap-2 flex-wrap">
              {pg.nearby?.map((item, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  📍 {item}
                </span>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Location</h2>
            <Map lat={pg.latitude} lng={pg.longitude} />
          </div>
        </div>

        {/* 🔥 RIGHT (STICKY CTA - BIG CONVERSION BOOST) */}
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <CTABox pg={pg} />
          </div>
        </div>

      </div>
    </div>
  );
}