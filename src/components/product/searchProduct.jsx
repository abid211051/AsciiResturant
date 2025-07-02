"use client";

import { IceCreamBowl } from "lucide-react";
import Card from "../card";

export default function SearchProducts() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      {Array.from({ length: 20 }, (item, i) => (
        <Card item={item} id={i}>
          <div className="tex-xl font-semibold p-1 bg-third text-second justify-center flex items-center gap-2">
            <IceCreamBowl />
            <span>{"Meal Name"}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
