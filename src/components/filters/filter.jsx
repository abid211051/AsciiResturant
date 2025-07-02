"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import CategoryFilter from "./filterByCategory";
import { useDispatch, useSelector } from "react-redux";
import LoadingSkeleton from "../loading";
import ErrorComponent from "../error";
import { fetchIngredientsList } from "@/redux/features/searchSlice";
import { fetchCategories } from "@/redux/features/categoriesSlice";

export default function Filters() {
  const [toggle, settoggle] = useState(false);
  const ingre = useSelector((state) => state.searchMeal.ingredient);
  const category = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIngredientsList());
    dispatch(fetchCategories());
  }, [dispatch]);
  return ingre?.isLoading || category?.isLoading ? (
    <LoadingSkeleton />
  ) : ingre?.error || category?.error ? (
    <ErrorComponent msg="lll" status={true} />
  ) : ingre?.ingredientdata?.length ? (
    <div className="w-full rounded-md">
      <div className="block lg:hidden">
        <button
          onClick={() => settoggle(!toggle)}
          className="w-fit border p-2 rounded-md flex justify-between items-center font-semibold text-lg gap-4"
        >
          Filters
          {toggle ? <ChevronUp /> : <ChevronDown />}
        </button>
        {toggle && (
          <div className="mt-2 flex flex-col gap-2 border-t pt-2">
            <CategoryFilter
              filterfor={"Ingredients"}
              items={ingre?.ingredientdata}
            />
            <CategoryFilter
              filterfor={"Categories"}
              items={category?.categorydata}
            />
          </div>
        )}
      </div>

      <div className="hidden lg:block">
        <div className="space-y-2 flex flex-col gap-8">
          <CategoryFilter
            filterfor={"Ingredients"}
            items={ingre?.ingredientdata}
          />
          <CategoryFilter
            filterfor={"Categories"}
            items={category?.categorydata}
          />
        </div>
      </div>
    </div>
  ) : (
    <ErrorComponent msg="LL" status={false} />
  );
}
