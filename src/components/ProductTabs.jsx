import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "info", label: "Additional Information" },
    { id: "reviews", label: "Reviews (0)" },
  ];

  return (
    <div className="container mx-auto mb-12 mt-12">
      {/* Tab Buttons */}
      <div className="flex gap-8 justify-center border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 text-sm md:text-lg font-medium ${
              activeTab === tab.id
                ? "text-[#252B42] border-b-2 border-[#23A6F0]"
                : "text-[#737373]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Left Image */}
        <div className="col-span-1 flex justify-center md:justify-end">
          <img
            src="/assets/furniture-1.jpg" // kendi görsel yolunu koy
            alt="tab-image"
            className="w-256 h-full object-cover rounded-lg shadow"
          />
        </div>

        {/* Middle Text */}
        <div className="col-span-1 flex flex-col gap-12 px-8">
          <h3 className="text-2xl font-bold text-[#252B42]">
            the quick fox jumps over
          </h3>
          <p className="text-[#737373] font-semibold  leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-[#737373] font-semibold leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-[#737373] font-semibold leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>

        {/* Right List */}
        <div className="col-span-1 flex flex-col gap-12 px-8">
          <div>
            <h3 className="text-2xl font-bold text-[#252B42]">
            the quick fox jumps over
          </h3>
            <ul className="mt-3 text-[#737373] font-bold space-y-2">
              <li className="flex items-center gap-2">
                <ChevronRight size={32} /> the quick fox jumps over the lazy dog
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={32} /> the quick fox jumps over the lazy dog
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={32} /> the quick fox jumps over the lazy dog
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={32} /> the quick fox jumps over the lazy dog
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#252B42]">
              the quick fox jumps over
            </h3>
            <ul className="mt-3 text-[#737373] font-bold space-y-4">
              <li className="flex items-center gap-2">
                <ChevronRight size={32} /> the quick fox jumps over the lazy dog
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={32} /> the quick fox jumps over the lazy dog
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={32} /> the quick fox jumps over the lazy dog
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}