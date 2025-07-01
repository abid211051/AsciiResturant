"use client";
import { Search } from "lucide-react";

export default function HeroBanner() {
  return (
    <>
      <div className="grid lg:grid-cols-2 items-center bg-primary py-[60px] px-4 font-sans">
        <div className="mx-auto p-4">
          <img
            src="hero.png"
            alt="trend"
            className="lg:w-[600px] sm:w-[450px]"
          />
        </div>
        <div className="sm:w-[500px] mx-auto">
          <div className="lg:text-start text-center">
            <p className="text-white md:text-6xl text-4xl font-bold mb-2">
              Are you starving?
            </p>
            <p className="text-3xl font-bold text-[#616161] mb-10">
              Within a few clicks, find meals that are accessible near you
            </p>
          </div>
          <form
            action=""
            className="lg:w-[500px] w-auto rounded-md bg-gray-50 border-2 px-2 flex gap-2 items-center"
          >
            <Search className="text-second" />
            <input
              type="search"
              placeholder="Search a meal"
              className="p-2 w-full bg-gray-50"
            />
          </form>
        </div>
      </div>
    </>
  );
}
