"use client";

import { IceCreamBowl } from "lucide-react";
import Card from "../card";
import { useDispatch, useSelector } from "react-redux";
import LoadingSkeleton from "../loading";
import ErrorComponent from "../error";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { fecthSearchedMeal } from "@/redux/features/searchSlice";

export default function SearchProducts() {
  const { isLoading, mealsdata, error } = useSelector(
    (state) => state.searchMeal.meals
  );
  const dispatch = useDispatch();
  const searchParam = useSearchParams();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/search") {
      const query = searchParam.get("query");
      if (query) {
        dispatch(fecthSearchedMeal(query));
      }
    }
  }, [dispatch]);
  return isLoading ? (
    <LoadingSkeleton />
  ) : error ? (
    <ErrorComponent msg="Something went Wrong. Search again :(" status={true} />
  ) : mealsdata.length ? (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      {mealsdata?.map((it) => (
        <Card key={`search-item--${it?.id}`} item={it} className={"gap-1"}>
          <div className="tex-xl rounded-xl font-semibold p-1 bg-third text-second justify-center flex items-center gap-2">
            <IceCreamBowl />
            <p className="line-clamp-1">{it?.title}</p>
          </div>
        </Card>
      ))}
    </div>
  ) : (
    <ErrorComponent
      msg="No Search Results Found. Try another name :("
      status={false}
    />
  );
}
