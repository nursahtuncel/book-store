import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/home.jsx";
import Books from "./pages/books.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./pages/cart.jsx";
import Contact from "./pages/contact.jsx";
import Detail from "./components/Detail.jsx";
import NotFound from "./components/NotFound.jsx";
import Category from "./components/Category.jsx";
import Story from "./components/Story.jsx";
import Novel from "./components/Novel.jsx";
import Fiction from "./components/Fiction.jsx";
import Crime from "./components/Crime.jsx";
import Romance from "./components/Romance.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="page">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/book/:id" element={<Detail />} />

            {/* Category route ve alt rotalar */}
            <Route path="/category" element={<Category />}>
              <Route path="/category/story" element={<Story />} />
              <Route path="/category/novel" element={<Novel />} />
              <Route path="/category/fiction" element={<Fiction />} />
              <Route path="/category/crime" element={<Crime />} />
              <Route path="/category/romance" element={<Romance />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
