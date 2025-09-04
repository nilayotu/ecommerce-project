import React from "react";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import BestSeller from "../components/BestSeller";
import SecondBestseller from "../components/SecondBestseller";
import Popular from "../components/Popular";
import SecondPopular from "../components/SecondPopular";

export default function PageContent() {
  return (
    <main>
      <Slider />
      <ProductCard />
      <BestSeller/>
      <Popular />
      <SecondBestseller />
      <SecondPopular />
      {/* ileride productCard, container vs. buraya eklenecek */}
    </main>
  );
}