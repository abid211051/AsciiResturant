"use client";

import {
  fetchFilteredOnCateg,
  fetchFilteredOnIngre,
} from "@/redux/features/searchSlice";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function CategoryFilter({ filterfor, items }) {
  const [currentFilter, setCurrentFilter] = useState(null);
  const dispatch = useDispatch();
  const searchParam = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const categ = searchParam.get("categ");
    const ingre = searchParam.get("ingre");
    const query = searchParam.get("query");
    if (categ && !ingre && !query) {
      dispatch(fetchFilteredOnCateg(categ));
      setCurrentFilter(categ);
    } else if (ingre && !categ && !query) {
      dispatch(fetchFilteredOnIngre(ingre));
      setCurrentFilter(ingre);
    } else if (query && (categ || ingre)) {
      router.replace("/");
    }
  }, []);
  const handleChange = (filterOn, val) => {
    if (filterOn === "Ingredients") {
      dispatch(fetchFilteredOnIngre(val));
      router.replace(`/search?ingre=${val}`);
    } else if (filterOn === "Categories") {
      dispatch(fetchFilteredOnCateg(val));
      router.replace(`/search?categ=${val}`);
    }
  };

  const [categoryOpen, setCategoryOpen] = useState(true);
  return (
    <div className="bg-[#f3f4f6] text-gray-700 p-2 rounded-md">
      <button
        onClick={() => setCategoryOpen(!categoryOpen)}
        className="mb-2 w-full flex justify-between items-center font-semibold text-lg"
      >
        {filterfor}
        {categoryOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {categoryOpen && (
        <ul className="max-h-[300px] px-2 flex flex-col gap-2 overflow-y-scroll">
          {items?.map((it, i) => (
            <li
              className="flex gap-2 items-center"
              key={`${it?.id}--new--${i}`}
            >
              <input
                className="scale-150"
                type="radio"
                name="filter"
                value={it?.title}
                checked={currentFilter === it?.title}
                onChange={(e) => handleChange(filterfor, e.target.value)}
              />
              <label className="text-lg" htmlFor={`cat-${i}`}>
                {it?.title}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
