// components/Carousel.jsx
"use client";
import { useState } from "react";

const images = ["hero.png", "hero.png", "hero.png"];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const next = () => setCurrent((current + 1) % total);
  const prev = () => setCurrent((current - 1 + total) % total);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-70 px-2 py-1 rounded-full shadow"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-70 px-2 py-1 rounded-full shadow"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
