import Categories from "@/components/heroSection/categories";
import HeroBanner from "@/components/heroSection/herobanner";
import RandomMeals from "@/components/product/random";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroBanner />
      <Categories />
      <RandomMeals />
    </div>
  );
}
