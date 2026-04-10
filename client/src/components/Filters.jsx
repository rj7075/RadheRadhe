"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const city = searchParams.get("city") || "gurgaon"; // ✅ default Gurgaon
  const activeGender = searchParams.get("gender");

  const handleFilter = (gender) => {
    router.push(`/pg?city=${city}&gender=${gender}`);
  };

  const filters = [
    { label: "Boys", value: "boys" },
    { label: "Girls", value: "girls" },
    { label: "Boys & Girls", value: "unisex" },
  ];

  return (
    <div className="flex gap-3 mb-6 flex-wrap">

      {filters.map((f) => {
        const isActive = activeGender === f.value;

        return (
          <button
            key={f.value}
            onClick={() => handleFilter(f.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition border
              
              ${
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-transparent shadow"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:text-blue-600"
              }
            `}
          >
            {f.label}
          </button>
        );
      })}

      {/* Clear Filter */}
      {activeGender && (
        <button
          onClick={() => router.push(`/pg?city=${city}`)}
          className="px-4 py-2 text-sm text-red-500 hover:underline"
        >
          Clear
        </button>
      )}
    </div>
  );
}