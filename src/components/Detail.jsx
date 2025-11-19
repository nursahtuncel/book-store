import React, { useEffect, useState } from "react";
import { useParams, useNavigate,NavLink } from "react-router-dom";
import api from "../../src/api";
import Loading from "./Loading";
import Error from "./Error";

const Detail = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => {
        setError(err);
        navigate("/not-found");
      })
      .finally(() => setLoading(false));
  }, [id, navigate]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="detail-page">
      <button
        className="detail-back-btn"
        onClick={() => navigate(-1)}
      >
        &larr; Back to Books
      </button>

      <div className="detail-container">
        <img
          className="detail-book-image"
          src={book.image}
          alt={book.title}
        />
        <div className="detail-book-info">
          <h1 className="detail-book-title">{book.title}</h1>
          <p className="detail-book-author">
            <strong>Author:</strong> {book.author}
          </p>
          <div className="detail-book-meta">
            <span><strong>Year:</strong> {book.year}</span>
            <span><strong>Pages:</strong> {book.page}</span>
            <span><strong>Category:</strong> {book.category}</span>
          </div>
          <p className="detail-book-description">{book.description}</p>
          <h2 className="detail-book-price">Price: {book.price} ₺</h2>
          <NavLink to="/cart" className="detail-add-cart-btn">Add to Cart</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Detail;
