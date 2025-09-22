import React from "react";
import Breadcrumb from "../components/ShopPage/Breadcrumb";
import ShopCategories from "../components/ShopPage/ShopCategories";
import FilterBar from "../components/ShopPage/FilterBar";
import ProductList from "../components/ShopPage/ProductList";
import Brands from "../components/HomePage/Brands";
import ProductCard from "../components/HomePage/ProductCard";
import TopCategoriesSection from "../components/TopCategoriesSection";

export default function ShopPageContent() {
    return (
        <main>
          <Breadcrumb />
          <TopCategoriesSection />
          <FilterBar />
          <ProductList />
          <Brands />
        </main>
    );
}