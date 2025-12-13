import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Category = () => {
  return (
    <div className='category'> 
    <div className="category-container">
        <div>
          <h5>Categories</h5>
        </div>

        <div>
            <ul>
                <li><NavLink to="/category/story">Story</NavLink></li>
                <li><NavLink to="/category/novel">Novel</NavLink></li>
                <li><NavLink to="/category/romance">Romance</NavLink></li>
                <li><NavLink to="/category/crime">Crime</NavLink></li>
                <li><NavLink to="/category/fiction">Fiction</NavLink></li>
            </ul>
        </div>

       
    </div>
      <Outlet/>
    </div>
  )
}

export default Category
