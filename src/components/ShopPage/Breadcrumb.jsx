import { ChevronRight } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1] || "Home"; // /shop → shop

  // İlk harfi büyük yap
  const formattedPath =
    currentPath.charAt(0).toUpperCase() + currentPath.slice(1);

  return (
    <section className="bg-[#FAFAFA] py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-center gap-4 px-4">
        {/* Sol tarafta başlık */}
        <h2 className="md:text-4xl text-2xl font-bold text-[#252B42] text-center md:text-left">
          {formattedPath}
        </h2>

        {/* Sağ tarafta breadcrumb */}
        <div className="flex items-center gap-4 text-md md:text-xl text-center md:text-right">
          <Link to="/" className="text-[#252B42] font-bold">
            Home
          </Link>
          <ChevronRight className="md:w-8 md:h-12 w-6 h-6 text-[#BDBDBD]" />
          <span className="text-[#BDBDBD] font-bold">{formattedPath}</span>
        </div>
      </div>
    </section>
  );
}