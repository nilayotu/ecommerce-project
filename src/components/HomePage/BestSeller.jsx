import React, { useState, useEffect } from "react";
import { products } from "../../store/bestSeller";

export default function BestSeller() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const displayedProducts = isMobile ? products.slice(0, 3) : products;

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Category Panel */}
        <div className="w-full md:w-1/3">
          <div className="relative h-full">
            <img
              src="/assets/furniture-1.jpg"
              alt="Category"
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute top-16 left-8">
              <h2 className="text-[#252B42] text-xl font-bold mb-2">FURNITURE</h2>
              <p className="text-[#737373] font-bold text-md">5 Items</p>
            </div>
          </div>
        </div>

        {/* Right Products Panel */}
        <div className="w-full md:w-2/3">
          <div className="text-center md:flex md:justify-between md:items-center mb-6 border-b border-[#ECECEC] pb-4 shadow-sm">
            <h3 className="font-bold text-[#252B42] text-lg">
              BESTSELLER PRODUCTS
            </h3>
            <div className="flex justify-center gap-6 md:gap-12 mt-4 md:mt-0 text-md font-bold text-[#737373]">
              <button>Men</button>
              <button>Women</button>
              <button>Accessories</button>
            </div>
            <div className="flex justify-center gap-2 mt-4 md:mt-0">
              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#ECECEC] text-[#252B42] hover:bg-[#F5F5F5]">
                {"<"}
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#ECECEC] text-[#252B42] hover:bg-[#F5F5F5]">
                {">"}
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="text-center bg-white p-4 rounded-lg shadow-sm"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="mx-auto w-40 h-40 md:w-44 md:h-44 object-cover"
                />
                <h4 className="font-semibold mt-3 text-lg">{product.title}</h4>
                <p className="text-gray-500 text-sm">{product.department}</p>
                <p className="mt-2">
                  <span className="text-[#BDBDBD] line-through mr-2">
                    ${product.oldPrice}
                  </span>
                  <span className="text-[#23856D] font-bold">
                    ${product.newPrice}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}