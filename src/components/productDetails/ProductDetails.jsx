import React from 'react'
import "./productDetails.css"
import {Footer} from "../footer/Footer"

export const ProductDetails = () => {
  return (
    <div className="details-wrapper">
        <h1>Product Details</h1>
        <div className="product-image-container">
          <div className="img-main">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/1acf6e140736935.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.jpg" alt="product" />
          </div>
          <div className="img-preview">
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/1acf6e140736935.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.jpg" alt="product" />
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/1acf6e140736935.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.jpg" alt="product" />
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/1acf6e140736935.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.jpg" alt="product" />
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/1acf6e140736935.Y3JvcCwzMTcwLDI0ODAsMTY0LDA.jpg" alt="product" />
          </div>
        </div>
        <div className="product-details">
          <h1>Posters</h1>
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
