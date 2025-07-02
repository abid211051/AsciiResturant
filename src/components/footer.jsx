import { Facebook, Instagram, X, Mail } from "lucide-react";

const cityGroups = [
  {
    country: "USA",
    cities: ["New York", "Los Angeles", "Chicago", "San Francisco", "Miami"],
  },
  {
    country: "United Kingdom",
    cities: ["London", "Manchester", "Birmingham", "Liverpool", "Bristol"],
  },
  {
    country: "India",
    cities: ["Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai"],
  },
  {
    country: "Australia",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  },
  {
    country: "Japan",
    cities: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Hiroshima"],
  },
];

export default function Footer() {
  return (
    <div className="xl:px-40 sm:px-20 px-4 py-10 text-white bg-[#212121]">
      <h1 className="text-lg font-semibold mb-2">OUR TOP CITIES</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mb-10">
        {cityGroups?.map((cities) => (
          <ul key={cities?.country} className="flex flex-col gap-1">
            {cities?.cities?.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        ))}
      </div>
      <hr />
      <div className="grid md:grid-cols-4 grid-cols-2 mt-10 gap-6">
        <div>
          <h1 className="text-lg font-semibold mb-2">COMPANY</h1>
          <ul className="flex flex-col gap-1">
            <li>About Us</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-2">CONTACT</h1>
          <ul className="flex flex-col gap-1">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-2">LEGAL</h1>
          <ul className="flex flex-col gap-1">
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-2">FOLLOW US</h1>
          <ul className="flex gap-1">
            <li>
              <Instagram />
            </li>
            <li>
              <Facebook />
            </li>
            <li>
              <X />
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold text-gray-400 mb-3">
          Receive exclusive offers and <br /> discounts in your mailbox
        </h1>
        <form action="" className="flex flex-wrap gap-6 items-center">
          <div className="p-2 text-gray-300 bg-gray-600 flex gap-2 items-center w-fit rounded-lg">
            <Mail />
            <input
              type="text"
              placeholder="Enter Email"
              className="bg-gray-600 w-full"
            />
          </div>
          <button className="bg-primary p-2 rounded-md font-semibold">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
