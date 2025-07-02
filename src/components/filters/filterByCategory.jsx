"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function CategoryFilter() {
  const [categoryOpen, setCategoryOpen] = useState(true);
  return (
    <div className="bg-[#f3f4f6] text-gray-700 p-2 rounded-md">
      <button
        onClick={() => setCategoryOpen(!categoryOpen)}
        className="w-full flex justify-between items-center font-semibold text-lg"
      >
        Category
        {categoryOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {categoryOpen && (
        <ul className="mt-2 space-y-2">
          {["category-1", "category-2", "category-3"].map((it, i) => (
            <li className="flex gap-2 items-center" key={i}>
              <input
                className="scale-125"
                type="radio"
                name="category"
                value={it}
                id={`cat-${i}`}
              />
              <label className="text-lg" htmlFor={`cat-${i}`}>
                {it}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
