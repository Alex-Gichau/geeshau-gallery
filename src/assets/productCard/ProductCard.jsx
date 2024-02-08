import React from 'react'
import "./productCard.css"
import { GoStarFill } from "react-icons/go";
import { IoCalendarNumber, IoLogoWhatsapp } from "react-icons/io5"
import { SiMaterialdesignicons } from "react-icons/si";


export const ProductCard = () => {
  return (
    <div className="card-container">
      <div className="card-top">
        <p className="card-bestSeller">Popular</p>
        <img src="https://img.pikbest.com/origin/06/20/18/23ppIkbEsTKh8.jpg!w700wp" alt="" />
      </div>

      <div className="card-bottom">
        <p className="card-productID">GES010101</p>
        <h3 className="card-title">Social Media Posters</h3>
        <div className="card-details">
          <p className="card-ratings"><GoStarFill/>4.5/5</p>
          <p className="card-date"><IoCalendarNumber/>2 Hours</p>
          <p className="card-date"><SiMaterialdesignicons/>JPG</p>
        </div>

        <hr />

        <div className="card-description">
          <h4>Description</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dignissimos porro, quos distinctio minima libero officiis. Necessitatibus animi aliquam expedita, ratione minus, modi obcaecati aut id cumque maiores accusamus tenetur.</p>
        </div>

        <div className="card-footer">
          <span><p>Total Price</p><h4>Kes. 500.00</h4></span>
          <span>
          <IoLogoWhatsapp/>
          <input type="button" value=" Order Now" />
          </span>
        </div>

      </div>
    </div>
  )
}
