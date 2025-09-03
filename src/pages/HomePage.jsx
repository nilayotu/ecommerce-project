import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import PageContent from "../layout/PageContent"; // bunu birazdan ekleyeceğiz

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageContent />
      </main>
      <Footer />
    </>
  );
}