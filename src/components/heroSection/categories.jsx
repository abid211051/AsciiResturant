"use client";
import Carousel from "../carusol";
import Card from "../card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "@/redux/features/categoriesSlice";
import LoadingSkeleton from "../loading";
import ErrorComponent from "../error";
import { useRouter } from "next/navigation";
export default function Categories() {
  const router = useRouter();
  const { isLoading, categorydata, error } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleChange = (category) => {
    router.replace(`/search?categ=${category}`);
  };
  const categoryCard = (item) => {
    return (
      <button
        className="w-full h-full"
        onClick={() => handleChange(item?.title)}
      >
        <Card item={item} className="p-1.5 gap-1">
          <p className="mx-auto text-center font-bold p-1.5 bg-primary rounded-xl text-gray-600 w-full">
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
      msg={"Failed To Fetch Categories :("}
      dispatch={dispatch}
      action={fetchCategories}
      status={true}
    />
  ) : categorydata.length ? (
    <>
      <Carousel
        items={categorydata}
        rows={1}
        columns={{ base: 2, md: 4, lg: 5 }}
        renderItem={(item) => categoryCard(item)}
      />
    </>
  ) : (
    <ErrorComponent
      msg={"No Categories Found !"}
      dispatch={dispatch}
      action={fetchCategories}
      status={false}
    />
  );
}
