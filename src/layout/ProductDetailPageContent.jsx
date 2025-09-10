import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetailsById from "../components/ProductDetailsById";
import ProductTabs from "../components/ProductTabs";
import BestSellerProducts from "../components/BestsellerProducts";
import Brands from "../components/Brands";

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