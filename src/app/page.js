import Categories from "@/components/heroSection/categories";
import HeroBanner from "@/components/heroSection/herobanner";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroBanner />
      <Categories />
    </div>
  );
}
