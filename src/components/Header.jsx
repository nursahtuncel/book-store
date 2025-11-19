import React from "react";
import { Link ,NavLink} from "react-router-dom";
const Header = () => {
  const toggleMenu = () => {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
  }
  return (

    <header className="header">
      <Link to="/" className="logo">BookStore</Link>

      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/category">Category</NavLink>
        <NavLink to="/contact">Contact</NavLink>
         <NavLink to="/cart">Cart</NavLink>
      </nav>
      <i id="menu-btn" onClick={toggleMenu} className="fa-solid fa-bars"></i>

    </header>
  );
};

export default Header;
