"use client";
import { useMemo } from "react";
import Carousel from "../carusol";

export default function Categories() {
  const items = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        title: `Product ${i}`,
        img: "/hero.png",
      })),
    []
  );
  return (
    <>
      <div className="xl:px-40 sm:px-20 px-4 py-10">
        <h1 className="text-3xl font-bold mb-10">Search By Category</h1>
        <Carousel items={items} rows={2} columns={{ base: 1, md: 2, lg: 4 }} />
      </div>
    </>
  );
}
