"use client";
import Card from "../card";
import Carousel from "../carusol";
import { ChevronRight, MapPin } from "lucide-react";

const items = Array.from({ length: 30 }, (_, i) => ({
  idMeal: `meal-${i}`,
  strMeal: `Meal ${i}`,
  strMealThumb: "/hero.png",
  strArea: `Area--${i}`,
}));

export default function RandomMeals() {
  const mealsCard = (item, index) => {
    return (
      <Card key={index} item={item}>
        <p className="text-xl font-bold">{item?.strMeal}</p>
        <div className="text-second font-bold flex gap-2">
          <MapPin />
          <span>{item?.strArea}</span>
        </div>
        <button className="active:scale-90 rounded-xl bg-primary text-white p-2 font-semibold">
          Order Now
        </button>
      </Card>
    );
  };
  return (
    <div className="xl:px-40 sm:px-20 px-4 py-10">
      <div className="mb-10  flex gap-6 flex-wrap items-center justify-between">
        <h1 className="text-3xl font-bold">Random Meals</h1>
        <button className="flex gap-2 text-third font-semibold p-1 active:scale-90">
          <span>View More</span>
          <ChevronRight />
        </button>
      </div>
      <Carousel
        items={items}
        rows={2}
        columns={{ base: 1, md: 2, lg: 4 }}
        renderItem={(item, index) => mealsCard(item, index)}
      />
    </div>
  );
}
