import React from 'react'
import "./productCard.css"
import { GoStarFill } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io5"
import { SiMaterialdesignicons } from "react-icons/si";
import { MdOutlineTimer } from "react-icons/md";


export const ProductCard = ({productsData}) => {
  return (
    <div className="card-container">
      <div className="card-top">
        <p className="card-bestSeller">AVAILABLE</p>
        <img src="https://img.pikbest.com/origin/06/20/18/23ppIkbEsTKh8.jpg!w700wp" alt="" />
      </div>

      <div className="card-bottom">
        <p className="card-productID">{productsData.itemCode}</p>
        <h3 className="card-title">{productsData.products}</h3>
        <div className="card-details">
          <p className="card-ratings"><GoStarFill/>4.5/5</p>
          <p className="card-date"><MdOutlineTimer/>1 Day</p>
          <p className="card-date"><SiMaterialdesignicons/>JPG</p>
        </div>

        <hr />

        <div className="card-description">
          <h4>Description</h4>
          <p>{productsData.description}</p>
        </div>

        <div className="card-footer">
        <span><p>Total Price</p><h4>Kes. {productsData.sellingPrice}.00</h4></span>
          <span className="orderButton">
          <IoLogoWhatsapp/>
          <input type="button" value="Order Now" className='orderButton'/>
          </span>
        </div>

      </div>
    </div>
  )
}
