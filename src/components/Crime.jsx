import React from "react"
import api from "../api"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import Error from "../components/Error"
import BookCart from "../components/BookCart"
const Crime = () => {
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
    const [novel, setNovel] = useState([])

    useEffect(() => {
    api.get("/books")
    .then((res) => {
      setLoading(false)
      const novel = res.data.filter((book) => book.category === "crime")
        setNovel(novel)
    })
    .catch((err) => {
      setLoading(false)
      setError(err)
    })
    .finally(() => setLoading(false))
    }, [setNovel])    
  return (
    <div className="category-content">
        {loading ? (
          <Loading />
        ) : error ? (
            <Error />
        ) : novel.length === 0 ? (
            <p>No crime found</p>
        ) : (
        novel.map((book) => (
           <BookCart key={book.id} book={book} />
        ))
        )}
    </div>
  )
}

export default Crime