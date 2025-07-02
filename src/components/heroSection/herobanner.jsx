import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center bg-primary py-[60px] xl:px-40 sm:px-20 px-4 font-sans">
      <div className="relative w-full sm:max-w-[450px] lg:max-w-[700px] aspect-[2.5/2] mx-auto">
        <Image
          src="/hero.png"
          alt="trend"
          fill
          className="object-contain"
          sizes="100%"
          priority
        />
      </div>

      <div className="mx-auto">
        <div className="lg:text-start text-center">
          <p className="text-white md:text-6xl text-4xl font-bold mb-2">
            Are you starving?
          </p>
          <p className="text-3xl font-bold text-[#616161] mb-10">
            Within a few clicks, find meals that are accessible near you
          </p>
        </div>
      </div>
    </div>
  );
}
