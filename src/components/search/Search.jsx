import React from 'react'
import "./search.css"
import { FiSearch } from "react-icons/fi";

export const Search = () => {
    return (
        <div className='search-container'>
            <p className="label-search">Find Your Desired Design</p>
            <div className="search-wrapper">
                <input type="search" placeholder='What Would Like Today...' label='Search' />
                <FiSearch/>
                <button className="search-btn" placeholder='Search'>Search</button>
            </div>

        </div>
    )
}
