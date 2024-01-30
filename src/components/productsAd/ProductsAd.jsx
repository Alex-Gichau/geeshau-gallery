import React from 'react'
import "./productsAdData.json"
import ProductsAdData from "./productsAd.css"

export const ProductsAd = () => {

    // const productsAd = ProductsAdData.dataAsImages;

    return (
        <div className="gallery-container">
            <h1 className="section-header">
                Come See <b>What We Do</b>
            </h1>
            <p className="section-desc">
                Together, we've successfully brought their visions to life, creating tailored solutions that not only meet but exceed their expectations.
            </p>
            {/* {productsAd.map((productsAd,id) => (
                <img src={productsAd.image} alt={productsAd.name} key={id} />
            ))} */}
            <div className="images-container">
                <div className="img-container">
                    <div className="image-box">
                        <img src="http://localhost:3000/static/media/ai%20image%202.c9f168234ee5d616070a.jpeg" alt="" />
                    </div>

                    <div className="image-desc">
                        <h2 className="client-name">
                            Company Name<br/>
                            <span>Social Media Poster</span>
                        </h2>
                    </div>
                </div>

                <div className="img-container">
                    <div className="image-box">
                        <img src="http://localhost:3000/static/media/ai%20image%202.c9f168234ee5d616070a.jpeg" alt="" />
                    </div>

                    <div className="image-desc">
                        <h2 className="client-name">
                        Company Name<br/>
                            <span>Social Media Poster</span>
                        </h2>
                    </div>
                </div>

                <div className="img-container">
                    <div className="image-box">
                        <img src="http://localhost:3000/static/media/ai%20image%202.c9f168234ee5d616070a.jpeg" alt="" />
                    </div>

                    <div className="image-desc">
                        <h2 className="client-name">
                        Company Name<br/>
                            <span>Social Media Poster</span>
                        </h2>
                    </div>
                </div>

                <div className="img-container">
                    <div className="image-box">
                        <img src="http://localhost:3000/static/media/ai%20image%202.c9f168234ee5d616070a.jpeg" alt="" />
                    </div>

                    <div className="image-desc">
                        <h2 className="client-name">
                        Company Name<br/>
                            <span>Social Media Poster</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
