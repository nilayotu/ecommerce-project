import React from "react";
import { LayoutGrid, List } from "lucide-react";

export default function FilterBar() {
  return (
    <div className="bg-[#FFFFFF] container  mx-auto flex flex-col md:flex-row justify-between items-center gap-4 py-6 px-4">
      {/* Left - results */}
      <p className="text-[#737373] font-bold">Showing all 8 results</p>

      {/* Middle - view options */}
      <div className="flex items-center gap-2">
        <span className="text-[#737373] mx-2 font-bold">Views:</span>
        <button className="p-2 border rounded bg-white hover:bg-gray-100">
          <LayoutGrid className="w-5 h-5 text-[#252B42]" />
        </button>
        <button className="p-2 border rounded bg-white hover:bg-gray-100">
          <List className="w-5 h-5 text-[#737373]" />
        </button>
      </div>

      {/* Right - sort + filter */}
      <div className="flex items-center gap-2">
        <select className="border bg-[#F9F9F9] rounded px-2 py-4 text-[#737373] focus:outline-none">
          <option>Popularity</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
        <button className="bg-[#23A6F0] hover:bg-[#23A6F0] text-[#FFFFFF] px-8 py-4 rounded">
          Filter
        </button>
      </div>
    </div>
  );
}