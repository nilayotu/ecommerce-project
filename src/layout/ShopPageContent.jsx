import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ShopCategories from "../components/ShopCategories";
import FilterBar from "../components/FilterBar";

export default function ShopPageContent() {
    return (
        <main>
          <Breadcrumb />
          <ShopCategories />
          <FilterBar />
        </main>
    );
}