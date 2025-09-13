import React from "react";
import Breadcrumb from "../components/ShopPage/Breadcrumb";
import ProductDetailsById from "../components/ProductDetailPage/ProductDetailsById";
import ProductTabs from "../components/ProductDetailPage/ProductTabs";
import BestSellerProducts from "../components/HomePage/BestsellerProducts";
import Brands from "../components/HomePage/Brands";

export default function ProductDetailPageContent() {
    return (
            <main>
              <Breadcrumb />
              <ProductDetailsById />
              <ProductTabs />
              <BestSellerProducts />
              <Brands />
            </main>
        );

}