// /components/Filters.jsx
"use client";
import { useRouter } from "next/navigation";

export default function Filters({ city }) {
  const router = useRouter();

  const handleFilter = (gender) => {
    router.push(`/pg/${city}?gender=${gender}`);
  };

  return (
    <div className="flex gap-4 mb-4">
      <button onClick={() => handleFilter("boys")}>Boys</button>
      <button onClick={() => handleFilter("girls")}>Girls</button>
      <button onClick={() => handleFilter("unisex")}>Unisex</button>
    </div>
  );
}