import React, { useState } from 'react';
import logo from "../../assets/Geeshau-logo.png"
import './sidebar.css';

const navItems = ["dashboard","search","reviews","notifications","info","category","artist","contacts"];

// #1 https://www.instagram.com/p/CqOsBd-Djbp/?hl=en&img_index=2 [pop over text on hover]

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`sidebar ${isOpen ? 'open' : ""}`}>
      <div className='sidebar-inner'>
        <div className='sidebar-header'>
          <button type='button' className='sidebar-burger' onClick={() => setIsOpen(!isOpen)}>
            <span className="material-symbols-outlined"> {isOpen ? 'close' : 'menu_open'}</span>
          </button>
          <img src={logo} className='sidebar-logo' alt='Geeshau Art'/>
        </div>

        <nav className='sidebar-menu'>
          {navItems.map((item) => (
            <button key={item} type="button" className="sidebar-button">
              <span className='material-symbols-outlined'>{item}</span>
              <p>{item}</p>
            </button>
          ))}
        </nav>
        
      </div>
    </div>
  );
};
