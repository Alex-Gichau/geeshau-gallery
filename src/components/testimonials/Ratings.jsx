import React from 'react'
import "./ratings.css"
import ratingsData from "./testimonialsData.json"

export const Ratings = () => {
  const data = ratingsData.data;

  return (
    <div className="ratings-container">
      <div className="ratings-wrapper">
        <div className="list-item">
          <ul className="item-wrapper">
            {data.map((data) => (
              <li className="rating-item" key={data.id}>
              <img src={data.image} alt="" className="client-pic" />
              <p className="client-name">John Doe</p>
              <p className="star-rating">{data.rating}</p>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
