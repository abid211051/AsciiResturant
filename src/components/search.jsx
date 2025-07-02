"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchComponent() {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (pathname === "/search") {
      const param = new URLSearchParams(searchParam);
      if (param.get("query")) {
        //
      }
    }
  }, []);

  const handleSearch = async (formdata) => {
    const query = formdata.get("query");
    if (!query && pathname === "/search") {
      router.replace("/");
    } else {
      // Data Fecth & Update
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
