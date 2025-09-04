import React, { useState, useEffect } from "react";
import { products } from "../store/bestSeller";

export default function SecondBestseller(){
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const displayedProducts = isMobile ? products.slice(0, 3) : products;

  return (
    <div className="flex flex-col md:flex-row-reverse mt-0">
      {/* Right Category Panel */}
      <div className="w-full md:w-1/3 mt-8 md:mt-16 mb-8 md:mr-96 md:mb-16 m-4">
        <div className="relative h-full">
          <img 
            src="/assets/donut.jpg" 
            alt="Category" 
            className="w-full h-64 md:w-auto md:h-full object-cover"
            />
          <div className="absolute top-8 left-16 md:left-16">
            <h2 className="text-[#252B42] text-xl font-bold mb-2">FURNITURE</h2>
            <p className="text-[#737373] font-bold text-md">5 Items</p>
          </div>
        </div>
      </div>

      {/* Left Products Panel */}
      <div className="w-full md:w-3/4 md:ml-96 mt-4 md:mt-16 mb-8 md:mb-16">
        <div className="text-center md:flex md:justify-between md:items-center mb-6 border-b border-[#ECECEC] pb-4 shadow-[0_2px_2px_-2px_rgba(0,0,0,0.1)] md:ml-32">
          <h3 className="font-bold text-[#252B42] text-lg">BESTSELLER PRODUCTS</h3>
          <div className="flex justify-center gap-8 md:gap-16 mt-4 md:mt-0 text-md font-bold text-[#737373]">
            <button>Men</button>
            <button>Women</button>
            <button>Accessories</button>
          </div>
          <div className="flex justify-center gap-2 mt-4 md:mt-0">
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#ECECEC] text-[#252B42] hover:bg-[#F5F5F5]">{'<'}</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#ECECEC] text-[#252B42] hover:bg-[#F5F5F5]'">{'>'}</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 md:ml-24 md:mr-16 gap-6">
          {displayedProducts.map((product) => (
            <div key={product.id} className="text-center p-4">
              <img src={product.image} alt={product.title} className="mx-auto w-48 h-48 md:w-44 md:h-44 object-cover" />
              <h4 className="font-semibold mt-3 text-lg">{product.title}</h4>
              <p className="text-gray-500 text-sm">{product.department}</p>
              <p className="mt-2">
                <span className="text-[#BDBDBD]">${product.oldPrice}</span>{" "}
                <span className="text-[#23856D] font-bold">${product.newPrice}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}