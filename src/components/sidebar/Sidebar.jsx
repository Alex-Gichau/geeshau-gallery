import React, { useState } from 'react'
import './sidebar.css';

const navItems = ["home", "notifications","gallery"];

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-inner">
            <header className='sidebar-header'>
            <button type="button" className="sidebar-burger" onClick={() => setIsOpen(!isOpen)}>
                <span>
                    {isOpen ? "close" : "menu"}
                </span>
            </button>
            <img src='logo' className='sidebar-logo'/>
            </header>
            <nav className="sidebar-menu">
                {navItems.map(item => (
                <button className='sidebar-button'>
                    <span>(item)</span>
                    <p>(item)</p>
                    </button>
                    ))}
            </nav>
        </div>
    </aside>
  );
};
