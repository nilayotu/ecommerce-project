import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function CategoryCard({ image, title, items }) {
  const { user } = useSelector((state) => state.client); // ✅ login bilgisi
  const history = useHistory();

  const handleClick = () => {
    if (!user) {
      history.push("/auth"); // login yoksa auth sayfasına
    } else {
      history.push(`/shop?category=${title.toLowerCase()}`); // login varsa kategoriye
    }
  };

  return (
    <div
      className="relative group overflow-hidden aspect-square cursor-pointer"
      onClick={handleClick}
    >
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