import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2>Latest Products</h2>

        <div className="d-flex flex-wrap">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default Home;