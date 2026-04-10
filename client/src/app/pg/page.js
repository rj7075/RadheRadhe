import data from "@/data/pgs.json";
import PGList from "@/components/PGList";
import Filters from "@/components/Filters";

export default async function Page({ searchParams }) {
  const params = await searchParams;

  const gender = params?.gender;

  let filteredPGs = data;

  if (gender) {
    filteredPGs = data.filter(
      (pg) => pg.gender.toLowerCase() === gender.toLowerCase()
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">

      {/* 🔥 SEO HEADING */}
      <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-3">
        {gender
          ? `${gender} PG in Gurgaon near Sohna Road & Sector 48`
          : "Best PG in Gurgaon near Sohna Road, Sector 48 & Badshahpur"}
      </h1>

      {/* 🔥 SEO DESCRIPTION */}
      <p className="text-gray-600 max-w-3xl mb-6">
        Find fully furnished PG accommodations in Gurgaon near{" "}
        <strong>Genpact, Badshahpur, Vatika Chowk, Subhash Chowk, Sector 48, and Sector 69</strong>.  
        Enjoy modern amenities like WiFi, food, AC rooms, and zero brokerage.  
        Perfect for working professionals and students looking for affordable and premium PG options.
      </p>

      {/* 🔥 FILTERS */}
      <Filters />

      {/* 🔥 LOCATION CHIPS (SEO BOOST + UX) */}
      <div className="flex flex-wrap gap-3 mb-8">
        {[
          "PG near Genpact Gurgaon",
          "PG in Badshahpur Gurgaon",
          "PG near Vatika Chowk",
          "PG near Subhash Chowk",
          "PG in Sector 48 Gurgaon",
          "PG in Sector 69 Gurgaon",
        ].map((loc, i) => (
          <span
            key={i}
            className="bg-gray-100 hover:bg-blue-50 text-gray-700 px-4 py-2 rounded-full text-sm cursor-pointer transition"
          >
            {loc}
          </span>
        ))}
      </div>

      {/* 🔥 RESULT HEADING */}
      <h2 className="text-xl font-semibold mb-4">
        {gender ? `${gender} PG Options` : "Available PG Options"}
      </h2>

      {/* 🔥 PG LIST */}
      <PGList pgs={filteredPGs} />

      {/* 🔥 SEO CONTENT BLOCK */}
      <div className="mt-12 max-w-4xl">
        <h3 className="text-xl font-semibold mb-3">
          PG Accommodation in Gurgaon – Sohna Road & Nearby Areas
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Gurgaon has become a hub for professionals working in companies like Genpact and other IT firms. 
          Areas like <strong>Badshahpur, Sector 48, Sector 69, Vatika Chowk, and Subhash Chowk</strong> 
          are highly preferred due to connectivity, affordability, and availability of quality PG accommodations.
        </p>

        <p className="text-gray-600 mt-3 leading-relaxed">
          Whether you are looking for a boys PG, girls PG, or unisex PG in Gurgaon, you can find multiple options 
          with modern facilities such as food, WiFi, housekeeping, and security. These locations are well connected 
          to Sohna Road and major business hubs, making them ideal for daily commute.
        </p>
      </div>

    </div>
  );
}