import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Products from "../components/Products";

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 mt-5 mb-12">
        <div className="grid sm:grid-cols-12 gap-8">
          <Sidebar />
          <Products />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
