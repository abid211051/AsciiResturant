import Categories from "@/components/heroSection/categories";
import HeroBanner from "@/components/heroSection/herobanner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Categories />
    </div>
  );
}
