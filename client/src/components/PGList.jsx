import PGCard from "./PGCard";

export default function PGList({ pgs }) {
   console.log("city:", pgs.city);
console.log("gender:", pgs.gender);
  if (!Array.isArray(pgs)) {
    console.error("PGList expected array but got:", pgs);
    return <p>No PGs found</p>;
  }
 

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      {pgs.map((pg) => (
        <PGCard key={pg.id} pg={pg} />
      ))}
    </div>
  );
}