"use client";

import { useState } from "react";

export default function ImageGallery({ images }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <img
        src={images[active]}
        className="w-full h-[250px] md:h-[400px] object-cover"
      />

      <div className="flex gap-2 overflow-x-auto p-2 bg-white">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setActive(i)}
            className={`h-16 w-24 object-cover rounded cursor-pointer border ${
              active === i ? "border-blue-500" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}