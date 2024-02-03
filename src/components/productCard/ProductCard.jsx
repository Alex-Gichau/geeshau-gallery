import React from 'react'
import "./productCard.css"

export const productCard = ({data}) => {
  return (
    <div className='card-wrapper'>
        <h1>{data.products}</h1>
        <p>{data.description}</p>
        todo
    </div>
  )
}
