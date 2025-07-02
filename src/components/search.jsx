"use client";
import { fecthSearchedMeal } from "@/redux/features/searchSlice";
import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function SearchComponent() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = async (formdata) => {
    const query = formdata.get("query");
    if (!query && pathname === "/search") {
      router.replace("/");
    }
    if (query) {
      dispatch(fecthSearchedMeal(query));
      router.replace(`/search?query=${query}`);
    }
  };
  return (
    <>
      <form
        action={handleSearch}
        className="flex-1 rounded-md bg-gray-100 border-2 px-2 flex gap-2 items-center"
      >
        <Search className="text-second" />
        <input
          type="search"
          name="query"
          placeholder="Search a meal"
          className="p-2 w-full bg-gray-100"
        />
      </form>
    </>
  );
}
