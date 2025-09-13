import React from "react";
import { FaHooli, FaLyft, FaStripe, FaAws, FaPiedPiperHat, FaRedditAlien } from "react-icons/fa";


export default function Brands() {
  const brands = [
    { id: 1, icon: <FaHooli size={120} />, link: "https://www.hooli.com" },
    { id: 2, icon: <FaLyft size={120} />, link: "https://www.lyft.com" },
    { id: 3, icon: <FaPiedPiperHat size={120} />, link: "https://www.piedpiperhat.com" },
    { id: 4, icon: <FaStripe size={120} />, link: "https://stripe.com" },
    { id: 5, icon: <FaAws size={120} />, link: "https://aws.amazon.com" },
    { id: 6, icon: <FaRedditAlien size={120} />, link: "https://www.reddit.com" },
  ];

  return (
    <div className="bg-[#FAFAFA] py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 md:flex-row md:justify-between">
        {brands.map((brand) => (
          <a
            key={brand.id}
            href={brand.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#737373] hover:text-black transition"
          >
            {brand.icon}
          </a>
        ))}
      </div>
    </div>
  );
}