import React from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard";
const product = {
  name: "Blue Shirt",
  images: [{ url: "https://i.ibb.co/q3mZxq0/blue-shirt.jpg" }],
  price: "3000",
  _id: "test_id",
  ratings: 4.5,
};
const Home = () => {
  const iterates = ["Dog", "Bird", "Cat", "Mouse", "Horse", "f", "g", "f"];
  return (
    <>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        {iterates.map((item, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </>
  );
};

export default Home;
