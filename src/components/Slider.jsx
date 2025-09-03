import React from "react";
import { useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider() {
  const items = useSelector((state) => state.slider.items);

  return (
    <div className="relative w-full h-[1000px] overflow-hidden"> {/* Yükseklik artırıldı */}
      {items.map((item) => (
        <div
          key={item.id}
          className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: `url(${item.img})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="md:relative z-10 md:text-center md:text-white md:px-4">
            <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
            <p className="mb-6 max-w-xl mx-auto">{item.desc}</p>
            <button className="bg-[#23A6F0] text-white px-6 py-2 rounded font-semibold">
              {item.btnText}
            </button>
          </div>
        </div>
      ))}

      {/* ok butonları */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
        <ChevronLeft size={32} />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white">
        <ChevronRight size={32} />
      </button>
    </div>
  );
}