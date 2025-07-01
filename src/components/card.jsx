import Image from "next/image";

export default function Card({ item, id, children }) {
  return (
    <div
      key={id}
      className="bg-white w-full rounded-2xl border text-center overflow-clip"
    >
      <Image
        src={item.img}
        alt={item.title}
        width={100}
        height={100}
        className="w-full object-cover rounded-2xl hover:scale-110 transition-all"
      />
      {children}
    </div>
  );
}
