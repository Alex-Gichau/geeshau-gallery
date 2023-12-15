import React, { useState } from 'react';
import logo from "../../assets/Geeshau-logo.png"
import './sidebar.css';

const navItems = ["home","info","dashboard","contacts","store","Reviews"];

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
