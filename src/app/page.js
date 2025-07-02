import Category from "@/components/heroSection/category";
import HeroBanner from "@/components/heroSection/herobanner";
import RandomMealComponent from "@/components/product/random";
export default function Home() {
  return (
    <div className="font-sans">
      <HeroBanner />
      <Category />
      <RandomMealComponent />
    </div>
  );
}
