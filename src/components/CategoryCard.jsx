import React from "react";

export default function CategoryCard({ image, title, items }) {
  return (
    <div className="relative group overflow-hidden aspect-square">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  />
  <div className="absolute inset-0 bg-black/20"></div>
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold">
    <h3 className="text-xl uppercase">{title}</h3>
    <p className="text-sm">{items} Items</p>
  </div>
</div>
  );
}