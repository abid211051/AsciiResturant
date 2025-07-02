"use client";

import { CircleAlert } from "lucide-react";

export default function ErrorComponent({
  msg = "",
  dispatch,
  action,
  status = true,
}) {
  return (
    <div
      className={`${
        status ? "bg-red-100 text-red-700 " : "bg-[#e8e82e] text-black"
      } p-4 rounded-md flex items-center justify-between`}
    >
      <div className="flex items-center gap-2">
        <CircleAlert />
        <span>{msg}</span>
      </div>
      <button
        onClick={() => dispatch?.(action?.())}
        className={`${!action && "hidden"} ml-4 text-sm underline`}
      >
        Retry
      </button>
    </div>
  );
}
