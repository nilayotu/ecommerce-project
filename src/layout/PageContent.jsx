import React from "react";
import Slider from "../components/HomePage/Slider";
import ProductCard from "../components/HomePage/ProductCard";
import BestSeller from "../components/HomePage/BestSeller";
import SecondBestseller from "../components/HomePage/SecondBestseller";
import Popular from "../components/HomePage/Popular";
import SecondPopular from "../components/HomePage/SecondPopular";
import BestsellerProducts from "../components/HomePage/BestsellerProducts";
import Brands from "../components/HomePage/Brands";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";


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