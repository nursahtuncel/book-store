import React, { useEffect, useState } from "react";
import BookCart from "../components/BookCart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // 📥 localStorage'dan oku
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

const removeFromCart = (id) => {
  const updatedCart = cart.filter(book => book.id !== id);
  
  localStorage.setItem("cart", JSON.stringify(updatedCart));
setCart(updatedCart); 
};


  // 💰 Toplam tutar
  const totalPrice = cart.reduce(
    (total, book) => total + Number(book.price),
    0
  );

  // 💳 Checkout
  const handleCheckout = () => {
    alert("🎉 Payment completed");
    localStorage.removeItem("cart");
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="cartContainer">
        <h1>Your Cart</h1>
        <p>Cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cartContainer">
      <h1 className="cartTitle">🛒 Your Cart</h1>

      <div className="cartList" >
        {cart.map((book) => (
       <BookCart
  key={book.id}
  book={book}
  btnName="Remove from cart"
  onRemove={removeFromCart}
/>

        ))}
      </div>

      <div className="cartSummaryContainer">
        <div className="cartSummary">
          <span>Items: {cart.length}</span>
          <span>
            Total: <strong>{totalPrice} ₺</strong>
          </span>
        </div>

        <button className="btn btn-checkout" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
