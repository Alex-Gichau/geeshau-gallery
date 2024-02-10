import React from 'react'
import "./browse.css"
import { useEffect, useState } from "react"
import { Search } from '../../components/search/Search'


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
                            
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}
