import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductsThunk } from "../store/thunks/productThunks";

import Breadcrumb from "../components/ShopPage/Breadcrumb";
import FilterBar from "../components/ShopPage/FilterBar";
import ProductList from "../components/ShopPage/ProductList";
import Brands from "../components/HomePage/Brands";
import TopCategoriesSection from "../components/TopCategoriesSection";

export default function ShopPageContent() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  // Redux state'ten sort ve filter değerlerini alıyoruz
  const { sortBy } = useSelector((state) => state.catalog);
  const { filter } = useSelector((state) => state.product);

  useEffect(() => {
    const params = {};
    if (categoryId) params.category = categoryId;

    // sort parametresi mapping
    if (sortBy) {
      if (sortBy === "lowToHigh") params.sort = "price:asc";
      else if (sortBy === "highToLow") params.sort = "price:desc";
      else if (sortBy === "popularity") params.sort = "rating:desc";
      else if (sortBy === "newest") params.sort = "createdAt:desc";
    }

    // filter parametresi
    if (filter) params.filter = filter;

    dispatch(fetchProductsThunk(params));
  }, [dispatch, categoryId, sortBy, filter]);

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