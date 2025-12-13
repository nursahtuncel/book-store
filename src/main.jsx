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
import Category from "./pages/Category.jsx";
import CategoryContent from "./components/CategoryContent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="page">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />

            {/* Category route ve alt rotalar */}
            <Route path="/category" element={<Category />}>
           <Route index element={<Books  category="story" />} />
              <Route path="/category/story" element={<CategoryContent category="story" />} />
              <Route path="/category/novel" element={<CategoryContent category="novel" />} />
              <Route path="/category/fiction" element={<CategoryContent category="fiction" />} />
              <Route path="/category/crime" element={<CategoryContent category="crime" />} />
              <Route path="/category/romance" element={<CategoryContent category="romance" />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
