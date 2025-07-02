import IndividualProduct from "@/components/product/individualProduct";

export default function IndividualMealPage({ params }) {
  return (
    <div className="xl:px-40 sm:px-20 px-4 py-10">
      <IndividualProduct id={params?.id} />
    </div>
  );
}
