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
        {/* <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-2xl">
          <h2 className="text-lg font-semibold mb-4">
            Location
          </h2>
          <Map lat={pg.latitude} lng={pg.longitude} />
        </div> */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-2xl">
  <h2 className="text-lg font-semibold mb-4">
    Location
  </h2>

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28078.83215411829!2d77.00687077419096!3d28.393476797127835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d238d86b88a3f%3A0x26f4ba2525426be0!2sRadhe%20Radhe%20Pg%20Boys%20and%20Girls%20Sec%2069!5e0!3m2!1sen!2sin!4v1776538726750!5m2!1sen!2sin"
    width="100%"
    height="250"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-xl"
  ></iframe>
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