import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Slider() {
  const items = useSelector((state) => state.slider.items);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);


  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[1000px] overflow-hidden">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          {/* Slider İçerik */}
          <div className="relative z-20 text-center text-white px-4 flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-3xl md:text-8xl font-semibold md:font-bold mb-2 sm:mb-4">
            {item.title}
          </h2>
          <p className="md:mb-12 sm:mb-8 mt-4 sm:mt-6 max-w-xl md:max-w-4xl mx-auto px-8 font-semibold text-md sm:text-base md:text-3xl">
            {isMobile ? item.desc : item.desc + " just do not act that way."}
          </p>
          <Link
            to="/shop"
            className="bg-[#23A6F0] text-white rounded font-bold px-10 py-4 sm:px-4 md:px-16 md:py-4 text-md sm:text-base md:text-4xl"
          >
            {item.btnText}
          </Link>
        </div>
        </div>
      ))}

      {/* Slider Kontrolleri */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white z-30"
      >
        <ChevronLeft size={120} strokeWidth={1} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white z-30"
      >
        <ChevronRight size={120} strokeWidth={1} />
      </button>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}