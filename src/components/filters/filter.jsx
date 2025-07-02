"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import CategoryFilter from "./filterByCategory";

export default function Filters() {
  const [size, setsize] = useState(0);
  const [toggle, settoggle] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setsize(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full rounded-md">
      {size < 1024 ? (
        <>
          <button
            onClick={() => settoggle(!toggle)}
            className="w-fit border p-2 rounded-md flex justify-between items-center font-semibold text-lg gap-4"
          >
            Filters
            {toggle ? <ChevronUp /> : <ChevronDown />}
          </button>
          {toggle && (
            <div className="mt-2 border-t pt-2">
              <CategoryFilter />
            </div>
          )}
        </>
      ) : (
        <>
          <div className="space-y-2 flex flex-col gap-8">
            <CategoryFilter />
            <CategoryFilter />
          </div>
        </>
      )}
    </div>
  );
}
