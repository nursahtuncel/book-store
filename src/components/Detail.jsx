import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import api from './../../src/api'
import Loading from './Loading'
import Error from './Error'
import BookCart from './BookCart'
import { useNavigate } from 'react-router-dom'

const Detail = () => {
    const [error, setError] = useState(null);
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();
useEffect(() => {
    
    api.get(`/books/${id}`)
    .then(res => {
        setBook(res.data);
        console.log(res.data);
    })
    .catch(err => {
        setError(err);
        navigate("/not-found");
    })
    .finally(() => {
        setLoading(false);
    })
}, [])
if (loading) {
    return <Loading />;
}
if (error) {
    return <Error />;
}
  return (
    <div className="detail">
    <BookCart key={book.id} book={book} btnName="Add to Cart" />
    </div>
  )
}

export default Detail