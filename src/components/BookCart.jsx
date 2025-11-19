import React from 'react'
import { Link} from 'react-router-dom'

const BookCart = ({ book , btnName}) => {
  const { id, title, author, image, year, page, description, price, category } = book



  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-image" />
      <div className="book-info">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>

        <div className="book-details">
          <span>{year}</span>
          <span>{page} sayfa</span>
        </div>

        <p className="book-description">{description}</p>

        <div className="book-footer">
          <span className="book-price">{price} ₺</span>
          <span className="book-category">{category}</span>
        </div>

        {
          btnName ? <Link to={`/cart`} className="btn btn-go-detail">{btnName}</Link> : <Link to={`/book/${id}`} className="btn btn-go-detail">İncele</Link>
        }
      </div>
    </div>
  )
}

export default BookCart
