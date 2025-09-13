import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const SectionHeader = () => {
  return (
    <section className="bg-[#FFFFFF80] py-16 text-center">
      <div className="container mx-auto px-4">
        {/* Üst Başlık */}
        <p className="text-md font-bold uppercase tracking-wide text-[#737373]">
          What We Do
        </p>

        {/* Ana Başlık */}
        <h2 className="text-4xl md:text-6xl font-bold text-[#252B42] mt-8 mb-12">
          Innovation tailored for you
        </h2>

        {/* Breadcrumb */}
        <div className="flex justify-center items-center space-x-2 mt-4 text-md font-semibold text-gray-600">
          <Link
            to="/"
            className="text-[#252B42] cursor-pointer"
            >
            Home
            </Link>
          <FaChevronRight className="text-md text-[#BDBDBD]" />
          <span className="text-[#737373]">Team</span>
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;