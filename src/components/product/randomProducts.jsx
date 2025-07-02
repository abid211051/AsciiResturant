"use client";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card";
import Carousel from "../carusol";
import { MapPin } from "lucide-react";
import { useEffect } from "react";
import { fetchRandomMeal } from "@/redux/features/mealSlice";
import LoadingSkeleton from "../loading";
import ErrorComponent from "../error";
import { useRouter } from "next/navigation";

export default function RandomMeals() {
  const router = useRouter();
  const { isLoading, randomdata, error } = useSelector(
    (state) => state.randomMeal
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomMeal());
  }, [dispatch]);

  const handleChange = (id) => {
    router.replace(`/lookup/${id}`);
  };
  const mealsCard = (item) => {
    return (
      <button className="w-full h-full" onClick={() => handleChange(item?.id)}>
        <Card item={item} className={"relative gap-2 border"}>
          <div className="text-white absolute top-0 flex  gap-1 items-center py-2 bg-[#df0000] w-fit p-1.5 rounded-br-xl">
            <MapPin size={15} />
            <span className="text-sm ">{item?.area}</span>
          </div>
          <p className="line-clamp-1 font-bold p-1.5 text-center text-gray-600">
            {item?.title}
          </p>
        </Card>
      </button>
    );
  };
  return isLoading ? (
    <LoadingSkeleton />
  ) : error ? (
    <ErrorComponent
      msg={"Failed To Load Random Meals :("}
      dispatch={dispatch}
      action={fetchRandomMeal}
      status={true}
    />
  ) : randomdata.length ? (
    <>
      <Carousel
        items={randomdata}
        rows={2}
        columns={{ base: 2, md: 4, lg: 5 }}
        renderItem={(item) => mealsCard(item)}
      />
    </>
  ) : (
    <ErrorComponent
      msg={"No Random Meals Found. Try Again "}
      dispatch={dispatch}
      action={fetchRandomMeal}
      status={false}
    />
  );
}
