import React, { useState, useEffect } from "react";
import { categories as mockCategories } from "../../store/categories";
import CategoryCard from "../CategoryCard";

export default function ShopCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // ileride burası API çağrısı olacak
    setCategories(mockCategories);
  }, []);

  return (
    <section className="bg-[#FAFAFA] pb-10">
      <div className="container mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            image={cat.image}
            title={cat.title}
            items={cat.items}
          />
        ))}
      </div>
    </section>
  );
}