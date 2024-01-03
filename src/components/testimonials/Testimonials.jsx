import React from 'react'
import './testimonials.css'
import testimonialsData from "./testimonialsData"

export const Testimonials = () => {
  const data = testimonialsData.data;

  return (
    <div className="card-wrapper">
      <ul className='card-container'>
        {data.map((data) => (
          <li className="card-item" key={data.id}>
          <img src={data.image} alt="#" />
          <h1>{data.name}</h1>
          <h4>{data.title}</h4>
          <hr/>
          <p className='review'>{data.review}</p>
          <div className="ratings"><br/>
            <p className="ratings-stars"> Ratings : {data.rating} Stars</p>
          </div>
        </li>
        ))}
        
      </ul>
    </div>
  )
}