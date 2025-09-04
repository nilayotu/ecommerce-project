import React from "react";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import BestSeller from "../components/BestSeller";
import Popular from "../components/Popular";

export default function PageContent() {
  return (
    <main>
      <Slider />
      <ProductCard />
      <BestSeller/>
      <Popular />
      {/* ileride productCard, container vs. buraya eklenecek */}
    </main>
  );
}