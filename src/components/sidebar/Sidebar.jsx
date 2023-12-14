import React, { useState } from 'react';
import './sidebar.css';

const navItems = ['Home', 'About', 'Branding', 'Animations'];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className='sidebar-inner'>
        <div className='sidebar-header'>
          <button
            type='button'
            className='sidebar-burger'
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{isOpen ? 'close' : 'menu'}</span>
          </button>

          <img src="../../assets/Geeshau-logo.png" className='sidebar-logo' alt='logo'/>
        </div>

        <nav className='sidebar-menu'>
          {navItems.map((item) => (
            <button key={item} type='button' className='sidebar-button'>
              <span>(item)</span>
              <p>(item)</p>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
