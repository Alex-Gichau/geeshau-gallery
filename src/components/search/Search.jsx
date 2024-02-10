import React from 'react'
import "./search.css"
import { FiSearch } from "react-icons/fi";

export const Search = () => {
    return (
        <div className='search-container'>
            <h3 className="label-search">Find Your Desired Design</h3>
            <div className="search-wrapper">
                <input type="search" placeholder='What Would Like Today...' />
                <button className="search-btn" placeholder='Search'><FiSearch/></button>
            </div>
        </div>
    )
}
