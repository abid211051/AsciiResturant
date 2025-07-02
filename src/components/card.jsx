import Image from "next/image";

export default function Card({ item, children, className }) {
  return (
    <div
      className={`w-full rounded-xl overflow-clip flex flex-col ${className}`}
    >
      <div className="bg-white aspect-square w-full relative overflow-hidden rounded-2xl">
        <Image
          src={item?.img || "/pngwing.png"}
          alt={item?.title || ""}
          fill
          className="object-cover hover:scale-110 transition-all"
          sizes="100%"
          priority
        />
      </div>

      {children}
    </div>
  );
}
