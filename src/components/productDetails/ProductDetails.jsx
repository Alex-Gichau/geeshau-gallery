import React from 'react'
import {Link, useParams} from "react-router-dom"
import productsData from "../hero/productsData.json"
import "./productDetails.css"
// import { Footer } from "../footer/Footer"

export const ProductDetails = () => {
  const {productID} = useParams();
  const product = productsData.find((product) => productsData.itemCode === productID);
  const { description } = product;

  return (
    <div className="details-wrapper">
      <h1>Product Details</h1>
      <hr/>
      <div className="details-img-wrapper">
      <div className="product-image-container">
        <div className="img-main-container">
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/1acf6e140736935.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.jpg" alt="product" />
        </div>
        <div className="img-preview-container">
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/1acf6e140736935.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.jpg" alt="product" />
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/1acf6e140736935.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.jpg" alt="product" />
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/1acf6e140736935.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.jpg" alt="product" />
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/1acf6e140736935.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.jpg" alt="product" />
        </div>
      </div>
      <div className="product-details">
        <h1>Product Description</h1>
        <hr/>
        <p className="desc-paragraph">{description}</p>
        
      </div>
      </div>
    </div>
  )
}

// const Footer = () => {
//   return (
//     <>
//     <div><Footer/></div>
//     </>
//   );
// }

// export default Footer;
