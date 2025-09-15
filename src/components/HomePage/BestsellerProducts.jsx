import React from "react";

const products = [
  {
    id: 1,
    image: "/assets/blue.png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: 16.48,
    newPrice: 6.48,
  },
  {
    id: 2,
    image: "/assets/cheese.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: 16.48,
    newPrice: 6.48,
  },
  {
    id: 3,
    image: "/assets/bleach.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: 16.48,
    newPrice: 6.48,
  },
  {
    id: 4,
    image: "/assets/werthers.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: 16.48,
    newPrice: 6.48,
  },
];

const BestsellerProducts = () => {
  return (
    <div className="bg-[#FAFAFA] py-12">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <h2 className="md:text-4xl text-2xl font-bold text-[#252B42] mb-12 border-b border-[#ECECEC] pb-4">
          BESTSELLER PRODUCTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain mb-4"
              />
              <h3 className="text-[#252B42] text-xl font-bold mb-2">
                {product.title}
              </h3>
              <p className="text-[#737373] font-bold text-md mb-4">
                {product.department}
              </p>
              <div>
                <span className="text-[#BDBDBD] font-bold mr-2">
                  ${product.oldPrice.toFixed(2)}
                </span>
                <span className="text-[#23856D] font-bold">
                  ${product.newPrice.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestsellerProducts;