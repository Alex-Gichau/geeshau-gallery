import React, { useState } from 'react'
import "./browse.css"
import { Search } from '../../components/search/Search'
import gallery from "../../pages/browse/productsGallery.json"


export const Browse = () => {

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImage = (image_url) => {
        setTempImgSrc(image_url);
        setModel(true);

        return (
            // <div className={model ? "model open" : "model"}>
            //     <img src={tempImgSrc}/>
            // https://www.youtube.com/watch?v=cDwa_JwuC-w&t=255s
            // </div>

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

}
