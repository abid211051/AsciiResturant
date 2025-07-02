"use client";

import { ChevronRight } from "lucide-react";
import RandomMeals from "./randomProducts";
import { useDispatch } from "react-redux";
import { fetchRandomMeal } from "@/redux/features/mealSlice";

export default function RandomMealComponent() {
  const dispatch = useDispatch();
  return (
    <div className="xl:px-40 sm:px-20 px-4 py-10">
      <div className="mb-5 flex gap-6 flex-wrap items-center justify-between">
        <h1 className="text-2xl font-bold">RANDOM MEALS</h1>
        <button
          onClick={() => dispatch(fetchRandomMeal())}
          className="flex gap-2 text-third font-semibold p-1 active:scale-90"
        >
          <span>View More</span>
          <ChevronRight />
        </button>
      </div>
      <RandomMeals />
    </div>
  );
}
