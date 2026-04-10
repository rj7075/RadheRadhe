"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FaMale, FaFemale } from "react-icons/fa";
import { MdPeople } from "react-icons/md";

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeGender = searchParams.get("gender");

  const handleFilter = (gender) => {
    const params = new URLSearchParams(searchParams);
    params.set("gender", gender);
    router.push(`/pg?${params.toString()}`);
  };

  const clearFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("gender");
    const query = params.toString();
    router.push(query ? `/pg?${query}` : "/pg");
  };

  const filters = [
    { label: "Boys", value: "boys", icon: <FaMale /> },
    { label: "Girls", value: "girls", icon: <FaFemale /> },
    { label: "Unisex", value: "unisex", icon: <MdPeople /> },
  ];

  return (
    <div className="w-full flex justify-center px-4">

      {/* 🔥 Wrapper */}
      <div className="flex flex-wrap justify-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg">

        {filters.map((f) => {
          const isActive = activeGender === f.value;

          return (
            <button
              key={f.value}
              onClick={() => handleFilter(f.value)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
              
              ${
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-transparent shadow-lg scale-105"
                  : "bg-transparent text-gray-300 border-white/20 hover:border-blue-400 hover:text-white hover:bg-white/10"
              }
              `}
            >
              <span className="text-base">{f.icon}</span>
              {f.label}
            </button>
          );
        })}

        {/* 🔥 Clear Filter */}
        {activeGender && (
          <button
  onClick={clearFilter}
  className="px-5 py-2 text-sm font-medium rounded-full 
             bg-gradient-to-br from-black via-gray-900 to-black 
             text-red-400 border border-gray-700
             shadow-md hover:shadow-red-500/20
             hover:text-red-300 hover:border-red-500/40
             transition-all duration-300 ease-in-out
             backdrop-blur-md"
>
  Clear
</button>
        )}

      </div>
    </div>
  );
}