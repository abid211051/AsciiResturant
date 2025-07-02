"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({
  items = [],
  rows = 2,
  columns = { base: 1, md: 2, lg: 3 },
  renderItem,
}) {
  const [columnCount, setColumnCount] = useState(columns.base || 1);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 1024 && columns.lg) setColumnCount(columns.lg);
      else if (width >= 768 && columns.md) setColumnCount(columns.md);
      else setColumnCount(columns.base || 1);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [columns]);

  const itemsPerSlide = columnCount * rows;

  const chunkItems = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const slides = chunkItems(items, itemsPerSlide);

  const next = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((group, i) => (
          <div
            key={`group-${i}`}
            style={{
              width: `${100 / slides.length}%`,
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            }}
          >
            {group.map((item, j) => (
              <div key={`${item.id}--${j}`}>{renderItem(item)}</div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 bg-second text-white"
      >
        <ChevronLeft strokeWidth={4} />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 bg-second text-white"
      >
        <ChevronRight strokeWidth={4} />
      </button>
    </div>
  );
}
