import React, { useEffect, useState } from "react";
import api from "../api";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";
import BookCart from "../components/BookCart";
import Filter from "../components/Filter";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Books = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
const isCategoryPage = location.pathname.startsWith("/category");

  const sort = searchParams.get("sort");
useEffect(() => {
  setLoading(true);
  setError(null);

  fetch("/data/books.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("JSON okunamadı");
      }
      return res.json();
    })
    .then((data) => {
      const sortedData =
        sort === "a-z"
          ? [...data].sort((a, b) => a.title.localeCompare(b.title))
          : [...data].sort((a, b) => b.title.localeCompare(a.title));

      setBooks(sortedData);
    })
    .catch((err) => {
      console.error("Veri hatası:", err);
      setError(err);
    })
    .finally(() => setLoading(false));
}, [sort]);

  if (loading) return <Loading />;
  if (error) return <NotFound />;

 return (
  <div>
    {!isCategoryPage && (
      <div className="filter">
        <Filter />
      </div>
    )}

    <div className="books">
      {books.length > 0 ? (
        books.map((book) => <BookCart key={book.id} book={book} />)
      ) : (
        <p className="text-white text-center mt-10">
          Hiç kitap bulunamadı.
        </p>
      )}
    </div>
  </div>
);

};

export default Books;
