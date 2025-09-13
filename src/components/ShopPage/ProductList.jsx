import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../store/productReducer";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, currentPage, itemsPerPage, viewMode } = useSelector(
    (state) => state.products
  );

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };

  return (
    <div className="bg-white px-24 py-10">
      {/* Ürünler */}
      <div
  className={
    viewMode === "grid"
      ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
      : "flex flex-col gap-6 max-w-4xl mx-auto"
  }
>
        {paginatedProducts.map((item) => (
          <Link
          to={`/product/${item.id}`}
  key={item.id}
  className={
    viewMode === "grid"
      ? "flex flex-col items-center w-full" // mobilde tam genişlik
      : "flex flex-col sm:flex-row items-center gap-6 border p-4"
  }
>
            <img
              src={item.image}
              alt={item.title}
              className={
                viewMode === "grid"
                  ? "w-full h-72 object-cover mb-4"
                  : "w-48 h-48 object-cover"
              }
            />
            <div className="flex flex-col gap-4 items-center">
              <h3 className="text-base text-[#252B42] font-bold">{item.title}</h3>
              <p className="text-[#737373] font-bold text-sm">{item.category}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[#BDBDBD] font-bold">
                  ${item.oldPrice}
                </span>
                <span className="text-[#23856D] font-bold">${item.price}</span>
              </div>
              <div className="flex gap-2 mt-3">
                {item.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Sayfalama */}
      <div className="flex justify-center items-center mt-10">
  {/* First */}
  <button
    className={`px-4 py-3 rounded-l border border-[#BDBDBD] ${
      currentPage === 1
        ? "bg-[#F3F3F3] font-bold text-[#BDBDBD] cursor-not-allowed"
        : "bg-[#F3F3F3] font-bold text-[#23A6F0] hover:bg-gray-200"
    }`}
    onClick={() => currentPage > 1 && handlePageChange(1)}
    disabled={currentPage === 1}
  >
    First
  </button>

  {/* Dinamik sayfa numaraları */}
  {Array.from({ length: totalPages }, (_, idx) => (
    <button
      key={idx + 1}
      onClick={() => handlePageChange(idx + 1)}
      className={`px-4 py-3 border-t border-b border-[#BDBDBD] ${
        currentPage === idx + 1
          ? "bg-[#23A6F0] font-bold text-white"
          : "bg-[#F3F3F3] font-bold text-[#23A6F0] hover:bg-gray-200"
      }`}
    >
      {idx + 1}
    </button>
  ))}

  {/* Next */}
  <button
    className={`px-4 py-3 rounded-r border border-[#BDBDBD] ${
      currentPage === totalPages
        ? "bg-[#F3F3F3] font-bold text-[#BDBDBD] cursor-not-allowed"
        : "bg-[#F3F3F3] font-bold text-[#23A6F0] hover:bg-gray-200"
    }`}
    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>
    </div>
  );
};

export default ProductList;