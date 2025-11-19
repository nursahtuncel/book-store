import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <h1>Welcome to BookStore</h1>
        <p>
          Discover your next favorite book! From timeless classics to modern
          bestsellers — we have something for everyone.
        </p>
        <Link to={"/books"} className="btn logo">
          Browse Books
        </Link>
        <Link to={"/category"} className="btn logo ">
          Browse Categories
        </Link>
      </div>

      <img src="/gif.gif" alt="" />
    </section>
  );
};

export default Home;
