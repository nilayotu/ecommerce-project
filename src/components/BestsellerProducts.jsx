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
    <div className="bg-[#FAFAFA] md:px-96">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">BESTSELLER PRODUCTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain mb-4"
            />
            <h3 className="text-gray-900 font-semibold">{product.title}</h3>
            <p className="text-gray-500 text-sm">{product.department}</p>
            <div className="mt-2">
              <span className="text-[#BDBDBD] mr-2">${product.oldPrice.toFixed(2)}</span>
              <span className="text-[#23856D] font-bold">${product.newPrice.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestsellerProducts;