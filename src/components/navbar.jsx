"use client";
import { Menu, Citrus, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [size, setSize] = useState(0);
  const [toogle, setToogle] = useState(false);
  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <nav
      className={`absolute top-0 w-full ${
        toogle ? "h-[200px]" : "h-[55px]"
      } bg-white flex justify-around items-start p-2 transition-all`}
    >
      <Link
        href="/"
        className="text-[#ffb30e] flex gap-2 items-center font-semibold"
      >
        <Citrus size={27} />
        <p className="text-xl">AsciiRest</p>
      </Link>
      {size < 1024 ? (
        <button onClick={() => setToogle(!toogle)}>
          <Menu />
        </button>
      ) : (
        <Link
          href={"/"}
          className="p-2 flex items-center gap-2 text-[#ffb30e] shadow-sm shadow-[#ffe7b2] rounded-md"
        >
          <User />
          <span>Login</span>
        </Link>
      )}
    </nav>
  );
}
