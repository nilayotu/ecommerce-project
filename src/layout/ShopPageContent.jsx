import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ShopCategories from "../components/ShopCategories";
import FilterBar from "../components/FilterBar";
import ProductList from "../components/ProductList";
import Brands from "../components/Brands";

export default function ShopPageContent() {
    return (
        <main>
          <Breadcrumb />
          <ShopCategories />
          <FilterBar />
          <ProductList />
          <Brands />
        </main>
    );
}