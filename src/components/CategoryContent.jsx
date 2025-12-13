import React from "react"
import api from "../api"
import { useEffect, useState } from "react"
import Loading from "./Loading"
import Error from "./Error"
import BookCart from "./BookCart"
const CategoryContent = ({category}) => {
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
    const [categoryContent, setCategoryContent] = useState([])

    useEffect(() => {
    api.get("/books")
    .then((res) => {
      setLoading(false)
      const categoryContent = res.data.filter((book) => book.category === category)
        setCategoryContent(categoryContent)
    })
    .catch((err) => {
      setLoading(false)
      setError(err)
    })
    .finally(() => setLoading(false))
    }, [setCategoryContent, category])    
  return (
    <div className="category-content">
        {loading ? (
          <Loading />
        ) : error ? (
            <Error />   
        ) : categoryContent.length === 0 ? (
            <p>No {category} found</p>
        ) : (
        categoryContent.map((book) => (
           <BookCart key={book.id} book={book} />
        ))
        )}
    </div>
  )
}

export default CategoryContent;