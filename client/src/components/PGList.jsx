import PGCard from "./PGCard";

export default function PGList({ pgs }) {

  // 🔥 Empty State
  if (!Array.isArray(pgs) || pgs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-indigo-500/20" />

      {/* Glow Effect */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full" />
        <h3 className="text-lg font-semibold text-gray-700">
          No PGs Found
        </h3>
        <p className="text-gray-500 text-sm mt-2">
          Try changing filters or check other locations.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full">

       

      
      {/* 🔥 Grid */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-4 sm:gap-6 md:gap-8
        
      ">
        {pgs.map((pg) => (
          <div
            key={pg.id}
            className="transition duration-300 hover:-translate-y-1"
          >
            <PGCard pg={pg} />
          </div>
        ))}
      </div>

    </section>
  );
}