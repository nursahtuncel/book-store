import React from "react";
import { Link } from "react-router-dom";

const BookCart = ({ book, btnName, onRemove }) => {
  const { id, title, author, image, year, page, description, price, category } = book;

  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-image" />

      <div className="book-info">
        <h2>{title}</h2>
        <p>{author}</p>

        <div className="book-details">
          <span>{year}</span>
          <span>{page} sayfa</span>
        </div>

        <p>{description}</p>

        <div className="book-footer">
          <span>{price} ₺</span>
          <span>{category}</span>
        </div>

        {btnName === "Remove from cart" ? (
          <button
            className="btn btn-remove"
            onClick={() => onRemove(id)} // 🔥 BURASI OLAY
          >
            {btnName}
          </button>
        ) : (
          <Link to={`/book/${id}`} className="btn btn-go-detail">
            İncele
          </Link>
        )}
      </div>
    </div>
  );
};

export default BookCart;
