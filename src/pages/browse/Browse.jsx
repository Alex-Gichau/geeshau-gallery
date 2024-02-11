import React from 'react'
import "./browse.css"
import { Search } from '../../components/search/Search'
import gallery from "../../pages/browse/productsGallery.json"

export const Browse = () => {

    return (
        <div className='browse-container'>
            <div className="header-banner">
            </div>
            <Search />
            <div className="products-grid">
                <h1 className='grid-title'>Browse Our Products</h1>
                <div className="gallery-wrapper">
                    <div className="galleryContainer">
                        {
                            gallery.map((gallery) => <div className='galleryItem'>
                                <img src={gallery.image_url} key={gallery.time} onClick={() => getImage(gallery.image_url)} />
                            </div>)
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}
