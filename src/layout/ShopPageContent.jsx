import React from "react";
import Breadcrumb from "../components/ShopPage/Breadcrumb";
import ShopCategories from "../components/ShopPage/ShopCategories";
import FilterBar from "../components/ShopPage/FilterBar";
import ProductList from "../components/ShopPage/ProductList";
import Brands from "../components/HomePage/Brands";

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