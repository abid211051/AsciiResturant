"use client";
import { Citrus, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchComponent from "./search";

export default function NavBar() {
  const [size, setSize] = useState(0);
  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <nav
      className={`z-10 bg-white w-full xl:px-40 sm:px-20 px-4 py-2 transition-all flex flex-col justify-between gap-2`}
    >
      <div className="flex flex-wrap justify-around items-center gap-4">
        <Link
          href="/"
          className="text-[#ffb30e] flex gap-2 items-center font-semibold"
        >
          <Citrus size={27} />
          <p className="text-xl">AsciiRest</p>
        </Link>
        {size > 1024 && <SearchComponent />}
        <Link
          href={"/"}
          className="p-2 flex items-center gap-2 text-[#ffb30e] shadow-sm shadow-[#ffe7b2] rounded-md"
        >
          <User />
          <span>Login</span>
        </Link>
      </div>
      {size < 1024 && <SearchComponent />}
    </nav>
  );
}
