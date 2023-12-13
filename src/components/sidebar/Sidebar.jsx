import React, { useState } from 'react';
import './sidebar.css';

const navItems = ['Home', 'About', 'Branding', 'Geeshau Toons',''];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className='sidebar-inner'>
        <header className='sidebar-header'>
          <button
            type='button'
            className='sidebar-burger'
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{isOpen ? 'close' : 'menu'}</span>
          </button>
          <img src='' className='sidebar-logo' />
        </header>
        <nav className='sidebar-menu'>
          {navItems.map((item) => (
            <button key={item} type='button' className='sidebar-button'>
              <span>(item)</span>
              <p>(item)</p>
            </button>
          ))}
        </nav>
      </div>
    </nav>
  );
};
