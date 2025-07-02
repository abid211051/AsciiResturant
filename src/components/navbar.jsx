import { Citrus, User } from "lucide-react";
import Link from "next/link";
import SearchComponent from "./search";

export default function NavBar() {
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
        <div className="flex-1 hidden lg:block">
          <SearchComponent />
        </div>
        <Link
          href={"/"}
          className="p-2 flex items-center gap-2 text-[#ffb30e] shadow-sm shadow-[#ffe7b2] rounded-md"
        >
          <User />
          <span>Login</span>
        </Link>
      </div>
      <div className="flex-1 block lg:hidden">
        <SearchComponent />
      </div>
    </nav>
  );
}
