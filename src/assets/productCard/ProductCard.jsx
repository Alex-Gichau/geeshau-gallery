import React from 'react'
import "./productCard.css"
import { GoStarFill } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io5"
import { SiMaterialdesignicons } from "react-icons/si";
import { MdOutlineTimer } from "react-icons/md";


export const ProductCard = ({product}) => {
  return (
    <div className="card-container">
      <div className="card-top">
        <p className="card-bestSeller">{product.status}</p>
        <img src="https://img.pikbest.com/origin/06/20/18/23ppIkbEsTKh8.jpg!w700wp" alt="" />
      </div>

      <div className="card-bottom">
        <p className="card-productID">{product.productID}</p>
        <h3 className="card-title">{product.title}</h3>
        <div className="card-details">
          <p className="card-ratings"><GoStarFill/>{product.rating}/5</p>
          <p className="card-date"><MdOutlineTimer/>{product.duration}</p>
          <p className="card-date"><SiMaterialdesignicons/>{product.fileFormat}</p>
        </div>

        <hr />

        <div className="card-description">
          <h4>Description</h4>
          <p>{product.description}</p>
        </div>

        <div className="card-footer">
        <span><p>Total Price</p><h4>Kes. {product.price}.00</h4></span>
          <span className="orderButton">
          <IoLogoWhatsapp/>
          <input type="button" value=" Order Now" className='orderButton'/>
          </span>
        </div>

      </div>
    </div>
  )
}
