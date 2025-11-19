import React, { useEffect, useState } from "react";
import api from "../api";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";
import BookCart from "../components/BookCart";
import Filter from "../components/Filter";
import { useSearchParams } from "react-router-dom";

const Books = () => {
  const [searchParams] = useSearchParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sort = searchParams.get("sort");

  useEffect(() => {
    setLoading(true);
    setError(null);

    const params = {
      _sort: "title",
      _order: sort === "a-z" ? "asc" : "desc",
    };

    console.log(api.get("/books", { params }));

    api
      .get("/books", { params })
      .then((res) => {
        console.log("API cevabı:", res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.error("API hatası:", err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [sort]);

  if (loading) return <Loading />;
  if (error) return <NotFound />;

  return (
    <div>
      <div className="filter">
        <Filter />
      </div>

      <div className="books">
        {books.length > 0 ? (
          books.map((book) => <BookCart key={book.id} book={book} />)
        ) : (
          <p className="text-white text-center mt-10">Hiç kitap bulunamadı.</p>
        )}
      </div>
    </div>
  );
};

export default Books;
