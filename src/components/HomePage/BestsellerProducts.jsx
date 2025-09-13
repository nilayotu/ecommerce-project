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
      <h2 className="md:text-4xl text-2xl text-center md:text-left font-bold text-[#252B42] mb-16 border-b border-[#ECECEC] pb-4">
  BESTSELLER PRODUCTS
</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full m-8 h-64 object-contain mb-4"
            />
            <h3 className="text-[#252B42] m-8 text-xl mb-6 font-bold">{product.title}</h3>
            <p className="text-[#737373] m-8 mb-6 font-bold text-md">{product.department}</p>
            <div className="mt-2 m-8">
              <span className="text-[#BDBDBD] font-bold mr-2">${product.oldPrice.toFixed(2)}</span>
              <span className="text-[#23856D] font-bold">${product.newPrice.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestsellerProducts;