import Filters from "@/components/filters/filter";
import SearchProducts from "@/components/product/searchProduct";

export default function Search(param) {
  const query = param.searchParams.query;

  return (
    <div className="xl:px-20 sm:px-10 px-4 py-10">
      <h1 className="text-center text-xl font-medium bg-primary mb-5 rounded-full p-1.5 text-white">
        Search Results for<span className="font-semibold">: {query}</span>
      </h1>
      <div className="flex lg:flex-row flex-col gap-6">
        <div className="rounded-md h-fit lg:w-[250px]">
          <Filters />
        </div>
        <div className="flex-1">
          <SearchProducts />
        </div>
      </div>
    </div>
  );
}
