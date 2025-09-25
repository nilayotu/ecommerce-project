import React from "react";
import { LayoutGrid, List } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setViewMode, setSortBy } from "../../store/reducers/catalogReducer";
import { setFilter } from "../../store/reducers/productReducer";

export default function FilterBar() {
  const dispatch = useDispatch();

  // catalogReducer'dan gelen state
  const { viewMode, sortBy } = useSelector((state) => state.catalog);

  // productReducer'dan gelen state
  const { productList, filter } = useSelector((state) => state.products);

  const handleViewChange = (mode) => {
    dispatch(setViewMode(mode));
  };

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="bg-[#FFFFFF] container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 py-6 px-4">
      {/* Left - results */}
      <p className="text-[#737373] font-bold">
        Showing all {productList.length} results
      </p>

      {/* Middle - view options */}
      <div className="flex items-center gap-2">
        <span className="text-[#737373] mx-2 font-bold">Views:</span>
        <button
          className={`p-2 border rounded hover:bg-gray-100 ${
            viewMode === "grid" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleViewChange("grid")}
        >
          <LayoutGrid className="w-5 h-5 text-[#252B42]" />
        </button>
        <button
          className={`p-2 border rounded hover:bg-gray-100 ${
            viewMode === "list" ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleViewChange("list")}
        >
          <List className="w-5 h-5 text-[#737373]" />
        </button>
      </div>

      {/* Right - sort + filter */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={handleFilterChange}
          className="border bg-[#F9F9F9] rounded px-2 py-2 text-[#737373] focus:outline-none"
        />

        <select
          className="border bg-[#F9F9F9] rounded px-2 py-2 text-[#737373] focus:outline-none"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="">Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="popularity">Popularity</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
}