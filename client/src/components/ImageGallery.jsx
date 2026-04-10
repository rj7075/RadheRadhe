"use client";

import { useState, useRef } from "react";

export default function ImageGallery({ images }) {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const startX = useRef(0);

  // 👉 Swipe
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 50 && active < images.length - 1) {
      setActive(active + 1);
    } else if (diff < -50 && active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <>
      {/* 🔥 MAIN IMAGE (CLICK TO OPEN) */}
      <div
        className="relative cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={images?.[active]}
          className="w-full h-[260px] sm:h-[320px] md:h-[450px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
          {active + 1} / {images.length}
        </div>
      </div>

      {/* 🔥 THUMBNAILS (NORMAL VIEW) */}
      <div className="flex gap-2 overflow-x-auto p-3 bg-black/80">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setActive(i)}
            className={`h-16 w-24 object-cover rounded cursor-pointer ${
              active === i ? "border-2 border-blue-400" : "opacity-70"
            }`}
          />
        ))}
      </div>

      {/* 🔥 FULLSCREEN MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">

          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl z-50"
          >
            ✕
          </button>

          {/* Image */}
          <div
            className="flex-1 flex items-center justify-center relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={images?.[active]}
              className="max-h-[85vh] max-w-full object-contain"
            />

            {/* Left */}
            {active > 0 && (
              <button
                onClick={() => setActive(active - 1)}
                className="absolute left-4 text-white text-3xl"
              >
                ‹
              </button>
            )}

            {/* Right */}
            {active < images.length - 1 && (
              <button
                onClick={() => setActive(active + 1)}
                className="absolute right-4 text-white text-3xl"
              >
                ›
              </button>
            )}
          </div>

          {/* 🔥 THUMBNAILS (INSIDE MODAL) */}
          <div className="flex gap-2 overflow-x-auto p-4 bg-black/90">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActive(i)}
                className={`h-16 w-24 object-cover rounded cursor-pointer ${
                  active === i
                    ? "border-2 border-blue-400"
                    : "opacity-60"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}