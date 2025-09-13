import React from "react";
import { FaArrowDown } from "react-icons/fa";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center justify-center md:py-16 mb-12 bg-white">
      {/* Ok simgesi */}
      <div className="text-[#23A6F0] text-2xl mb-4 transform">
        <img
            src="/assets/arrow.PNG"
            className="md:w-[100px] object-contain"
          />
      </div>

      {/* Üst yazı */}
      <p className="md:text-lg text-sm font-bold text-[#252B42] uppercase mb-8">
        We Can’t WAIT TO MEET YOU
      </p>

      {/* Başlık */}
      <h2 className="md:text-7xl text-5xl font-bold text-[#252B42] mb-12">
        Let’s Talk
      </h2>

      {/* Buton */}
      <button className="bg-[#23A6F0] font-bold md:text-lg text-white px-12 py-4 rounded transition">
        Try it free now
      </button>
    </div>
  );
};

export default CallToAction;