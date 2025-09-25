import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../store/reducers/catalogReducer";
import { addToCart } from "../../store/reducers/shoppingCartReducer";
import { Link, useHistory } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // productReducer’dan ürünler ve fetch state
  const { productList, total, fetchState } = useSelector(
    (state) => state.products
  );
  const { currentPage, itemsPerPage, viewMode } = useSelector(
    (state) => state.catalog
  );
  const { user } = useSelector((state) => state.client);

  // Loading ve error state
  if (fetchState === "FETCHING") {
    return <p className="text-center py-10">Loading...</p>;
  }

  if (fetchState === "FAILED") {
    return (
      <p className="text-center text-red-500 py-10">
        Failed to load products.
      </p>
    );
  }

  // Sayfalama hesaplama
  const totalPages = Math.ceil(total / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = productList.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };

  const handleAddToCart = (product) => {
    if (!user) {
      history.push("/auth"); // React Router v5 için useHistory
      return;
    }
    dispatch(addToCart(product));
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
          <div
            key={item.id}
            className={
              viewMode === "grid"
                ? "flex flex-col items-center w-full"
                : "flex flex-col sm:flex-row items-center gap-6 border p-4"
            }
          >
            <Link to={`/product/${item.id}`} className="w-full">
              <img
                src={item.image}
                alt={item.title}
                className={
                  viewMode === "grid"
                    ? "w-full h-72 object-cover mb-4"
                    : "w-48 h-48 object-cover"
                }
              />
            </Link>

            <div className="flex flex-col gap-4 items-center">
              <h3 className="text-base text-[#252B42] font-bold">{item.title}</h3>
              <p className="text-[#737373] font-bold text-sm">{item.category}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[#BDBDBD] font-bold">${item.oldPrice}</span>
                <span className="text-[#23856D] font-bold">${item.price}</span>
              </div>
              <div className="flex gap-2 mt-3">
                {item.colors?.map((color) => (
                  <span
                    key={color} // idx yerine color kullanıldı
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <button
                onClick={() => handleAddToCart(item)}
                className="bg-[#23A6F0] text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
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
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          First
        </button>

        {/* Prev */}
        <button
          className={`px-4 py-3 border border-[#BDBDBD] ${
            currentPage === 1
              ? "bg-[#F3F3F3] font-bold text-[#BDBDBD] cursor-not-allowed"
              : "bg-[#F3F3F3] font-bold text-[#23A6F0] hover:bg-gray-200"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* Sayfa numaraları */}
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((page) => {
            if (page === 1 || page === totalPages) return true;
            if (page >= currentPage - 2 && page <= currentPage + 2) return true;
            return false;
          })
          .reduce((acc, page, index, arr) => {
            if (index > 0 && page - arr[index - 1] > 1) {
              acc.push("ellipsis-" + page);
            }
            acc.push(page);
            return acc;
          }, [])
          .map((page) =>
            typeof page === "string" ? (
              <span
                key={page}
                className="px-4 py-3 border-t border-b border-[#BDBDBD] bg-[#F3F3F3] font-bold text-[#BDBDBD]"
              >
                ...
              </span>
            ) : (
              <button
                key={page} // index yerine page kullanıldı
                onClick={() => handlePageChange(page)}
                className={`px-4 py-3 border-t border-b border-[#BDBDBD] ${
                  currentPage === page
                    ? "bg-[#23A6F0] font-bold text-white"
                    : "bg-[#F3F3F3] font-bold text-[#23A6F0] hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            )
          )}

        {/* Next */}
        <button
          className={`px-4 py-3 border border-[#BDBDBD] ${
            currentPage === totalPages
              ? "bg-[#F3F3F3] font-bold text-[#BDBDBD] cursor-not-allowed"
              : "bg-[#F3F3F3] font-bold text-[#23A6F0] hover:bg-gray-200"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

        {/* Last */}
        <button
          className={`px-4 py-3 rounded-r border border-[#BDBDBD] ${
            currentPage === totalPages
              ? "bg-[#F3F3F3] font-bold text-[#BDBDBD] cursor-not-allowed"
              : "bg-[#F3F3F3] font-bold text-[#23A6F0] hover:bg-gray-200"
          }`}
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default ProductList;