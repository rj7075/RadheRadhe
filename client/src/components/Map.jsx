// /components/Map.jsx
export default function Map({ lat, lng }) {
  return (
    <iframe
      className="w-full h-96 mt-6 rounded"
      src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
      loading="lazy"
    />
  );
}