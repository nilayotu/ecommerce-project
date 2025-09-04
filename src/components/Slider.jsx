import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider() {
  const items = useSelector((state) => state.slider.items);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[1000px] overflow-hidden">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="relative z-10 text-center text-white px-4">
            <h2 className="text-3xl sm:text-3xl md:text-8xl font-semibold md:font-bold mb-2 sm:mb-4">
              {item.title}
            </h2>
            <p className="mb-6 sm:mb-8 mt-4 sm:mt-6 max-w-xl md:max-w-4xl mx-auto px-8 font-semibold text-md sm:text-base md:text-3xl">
              {isMobile
                ? "We know how large objects will act, but things on a small scale."
                : "We know how large objects will act, but things on a small scale just do not act that way."}
            </p>
            <button className="bg-[#23A6F0] text-white md:px-20 md:text-4xl md:py-6 px-10 py-3 sm:px-6 rounded font-bold text-md sm:text-base">
              {item.btnText}
            </button>
          </div>
        </div>
      ))}

      <button className="absolute left-2 sm:left-2 top-1/2 -translate-y-1/2 text-white z-20">
        <ChevronLeft size={60} strokeWidth={1} />
      </button>
      <button className="absolute right-2 sm:right-2 top-1/2 -translate-y-1/2 text-white z-20">
        <ChevronRight size={60} strokeWidth={1} />
      </button>
    </div>
  );
}