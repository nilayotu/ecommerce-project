import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesThunk } from "../store/thunks/categoryThunks";
import { Link } from "react-router-dom";

export default function TopCategoriesSection() {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.category);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategoriesThunk());
    }
  }, [dispatch, categories.length]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  // Rating'e göre sırala, top 5 al
  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Top Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {topCategories.map((cat) => {
          const genderText = cat.gender === "k" ? "kadin" : "erkek";
          const categoryName = cat.code.split(":")[1];

          return (
            <Link
              key={cat.id}
              to={`/shop/${genderText}/${categoryName}/${cat.id}`}
              className="block group"
            >
              <div className="overflow-hidden shadow-md">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-3 text-center text-lg font-semibold text-[#252B42] group-hover:text-[#23A6F0]">
                {cat.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}