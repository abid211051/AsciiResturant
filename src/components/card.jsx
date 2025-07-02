import Image from "next/image";

export default function Card({ item, id, children }) {
  return (
    <div
      key={id}
      className="bg-white w-full rounded-2xl overflow-clip flex flex-col gap-2"
    >
      <Image
        src={item?.strMealThumb || item?.strCategoryThumb || "/pngwing.png"}
        alt={item?.strCategory || item?.strMeal || "Empty"}
        width={100}
        height={100}
        className="w-full object-cover rounded-2xl hover:scale-110 transition-all"
      />
      {children}
    </div>
  );
}
