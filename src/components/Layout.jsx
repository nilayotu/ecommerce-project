import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-1 p-4">{children}</main>
      <Footer />
    </>
  );
}