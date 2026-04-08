import Map from "@/components/Map";
import ImageGallery from "@/components/ImageGallery";
import CTABox from "@/components/CTABox";
import pgs from "@/data/pgs.json";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ FIX

  const pg = pgs.find((p) => p.slug === slug);

  if (!pg) return {};

  return {
    title: `${pg.name} in ${pg.city} | Book PG Near You`,
    description: pg.description,
    keywords: `${pg.city} pg, boys pg, girls pg, cheap pg`,
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
      {/* ✅ SEO Schema with Rating */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: pg.name,
            address: pg.address,
            priceRange: pg.price,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: pg.rating,
              reviewCount: pg.reviews,
            },
          }),
        }}
      />

      {/* ✅ IMAGE GALLERY */}
      <ImageGallery images={pg.images} />

      <div className="p-4 md:p-8 grid md:grid-cols-3 gap-6">
        {/* 🔥 LEFT SECTION */}
        <div className="md:col-span-2 space-y-4">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold">{pg.name}</h1>

          {/* ⭐ Rating */}
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-green-600 text-white px-2 py-1 rounded">
              ⭐ {pg.rating}
            </span>
            <span className="text-gray-600">
              ({pg.reviews} reviews)
            </span>
          </div>

          {/* Address */}
          <p className="text-gray-600">{pg.address}</p>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
              {pg.gender.toUpperCase()} PG
            </span>

            {pg.foodIncluded && (
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded">
                🍽 Food Included
              </span>
            )}

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded">
              Verified
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700">{pg.description}</p>

          {/* Amenities */}
          <div>
            <h2 className="text-lg font-semibold">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {pg.amenities.map((a, i) => (
                <div key={i} className="bg-white p-2 rounded shadow-sm text-sm">
                  ✔ {a}
                </div>
              ))}
            </div>
          </div>

          {/* Nearby */}
          <div>
            <h2 className="text-lg font-semibold mt-4">Nearby</h2>
            <div className="flex gap-2 flex-wrap mt-2">
              {pg.nearby?.map((item, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-3 py-1 rounded text-sm"
                >
                  📍 {item}
                </span>
              ))}
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-lg font-semibold mt-4">Location</h2>
            <Map lat={pg.latitude} lng={pg.longitude} />
          </div>
        </div>

        {/* 🔥 RIGHT CTA */}
        <div className="md:col-span-1">
          <CTABox pg={pg} />
        </div>
      </div>
    </div>
  );
}