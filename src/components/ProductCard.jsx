import React from "react";

export default function ProductCard() {
  const products = [
    {
      id: 1,
      category: "Your Space",
      title: "Unique Life",
      subtitle: "Explore Items",
      image: "/assets/product-1.PNG"
    },
    {
      id: 2,
      category: "Ends Today", 
      title: "Elements Style",
      subtitle: "Explore Items",
      image: "/assets/product-2.PNG"
    },
    {
      id: 3,
      category: "Ends Today",
      title: "Elements Style", 
      subtitle: "Explore Items",
      image: "/assets/product-3.PNG"
    }
  ];

  return (
    <div className="bg-[#FAFAFA] py-16 px-6 sm:px-16 md:px-8">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-[#FFFFFF] border border-[#ECECEC] overflow-hidden shadow-sm flex h-auto md:h-72"
        >
          <div className="flex items-center justify-between w-full px-4 py-6 md:px-12 md:py-6">
            
            {/* Yazılar */}
            <div className="flex-1 pr-4">
              <p className="text-md md:text-lg text-[#737373] font-bold mb-1 md:mb-2">{product.category}</p>
              <h3 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-2 md:mb-8">
                {product.title}
              </h3>
              <p className="text-sm md:text-md font-semibold text-[#252B42]">{product.subtitle}</p>
            </div>

            {/* Görsel */}
            <div className="flex-shrink-0 h-36 md:h-full">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
}