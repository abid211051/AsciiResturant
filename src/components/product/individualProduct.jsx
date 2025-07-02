"use client";

import { fetchIndividualMeal } from "@/redux/features/mealSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSkeleton from "../loading";
import ErrorComponent from "../error";
import Image from "next/image";

export default function IndividualsingleMeal({ id }) {
  const { isLoading, singleMeal, error } = useSelector(
    (state) => state.randomMeal
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIndividualMeal(id));
  }, []);

  return isLoading ? (
    <LoadingSkeleton />
  ) : error ? (
    <ErrorComponent msg="No singleMeal[0] in this Id :(" status={true} />
  ) : singleMeal.length ? (
    <div className="max-w-6xl mx-auto py-6 space-y-6">
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <div>
          <Image
            src={singleMeal[0].img}
            alt={singleMeal[0].title}
            width={800}
            height={400}
            className="w-full max-h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="space-y-3 bg-gray-50 p-4 rounded-xl shadow-sm">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">
            {singleMeal[0].title}
          </h1>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Category:</span>{" "}
            {singleMeal[0].category}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Area:</span>{" "}
            {singleMeal[0].area}
          </p>
          {singleMeal[0].tag && (
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">Tags:</span>{" "}
              {singleMeal[0].tag}
            </p>
          )}
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <h2 className="text-lg font-semibold mb-2 text-gray-700 border-b pb-1">
          Instructions
        </h2>
        <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">
          {singleMeal[0].info}
        </p>
      </div>
    </div>
  ) : (
    <ErrorComponent msg="lll" status={false} />
  );
}
