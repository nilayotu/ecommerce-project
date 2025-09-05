import React from "react";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import BestSeller from "../components/BestSeller";
import SecondBestseller from "../components/SecondBestseller";
import Popular from "../components/Popular";
import SecondPopular from "../components/SecondPopular";
import BestsellerProducts from "../components/BestsellerProducts";
import Brands from "../components/Brands";
import FeaturedPosts from "../components/FeaturedPosts";

export default function PageContent() {
  return (
    <main>
      <Slider />
      <ProductCard />
      <BestSeller/>
      <Popular />
      <SecondBestseller />
      <SecondPopular />
      <BestsellerProducts />
      <Brands />
      <FeaturedPosts />
    </main>
  );
}