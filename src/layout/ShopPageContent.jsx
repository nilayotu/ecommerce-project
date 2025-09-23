import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsThunk } from "../store/thunks/productThunks";

import Breadcrumb from "../components/ShopPage/Breadcrumb";
import FilterBar from "../components/ShopPage/FilterBar";
import ProductList from "../components/ShopPage/ProductList";
import Brands from "../components/HomePage/Brands";
import TopCategoriesSection from "../components/TopCategoriesSection";

export default function ShopPageContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

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