"use client";
import Carousel from "../carusol";
import Card from "../card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "@/redux/features/categoriesSlice";
import LoadingSkeleton from "../loadingSkeleton";
import ErrorComponent from "../error";
export default function Categories() {
  const { isLoading, data, error } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categoryCard = (item) => {
    return (
      <Card item={item} className="p-1.5 gap-1">
        <p className="mx-auto text-center font-bold p-1.5 bg-primary rounded-xl text-gray-600 w-full">
          {item?.title}
        </p>
      </Card>
    );
  };

  return isLoading ? (
    <LoadingSkeleton />
  ) : error ? (
    <ErrorComponent
      msg={"Failed To Fetch Categories"}
      dispatch={dispatch}
      action={fetchCategories}
    />
  ) : (
    <>
      <Carousel
        items={data}
        rows={1}
        columns={{ base: 2, md: 4, lg: 5 }}
        renderItem={(item) => categoryCard(item)}
      />
    </>
  );
}
