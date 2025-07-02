import Categories from "./categories";

export default function Category() {
  return (
    <>
      <div className="bg-[url('/bg_img.jpeg')] bg-cover bg-center xl:px-40 sm:px-20 px-4 py-10">
        <h1 className="text-2xl font-bold mb-5 text-white text-center">
          CHOOSE A CATEGORY
        </h1>
        <Categories />
      </div>
    </>
  );
}
