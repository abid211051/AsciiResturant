"use client";
import Carousel from "../carusol";
import Card from "../card";
const items = Array.from({ length: 30 }, (_, i) => ({
  idCategory: i,
  strCategory: `Category ${i}`,
  strCategoryThumb: "/hero.png",
}));

export default function Categories() {
  const categoryCard = (index, item) => {
    return (
      <Card key={index} item={item}>
        <p className="mx-auto text-xl text-second text-center font-bold p-1.5 rounded-xl bg-third w-fit">
          {item?.strCategory}
        </p>
      </Card>
    );
  };
  return (
    <>
      <div className="xl:px-40 sm:px-20 px-4 py-10">
        <h1 className="text-3xl font-bold mb-10">Search By Category</h1>
        <Carousel
          items={items}
          rows={1}
          columns={{ base: 1, md: 2, lg: 4 }}
          renderItem={(item, index) => categoryCard(index, item)}
        />
      </div>
    </>
  );
}
