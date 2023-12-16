import React, { useState, useRef } from 'react';
import "./header.css";

const Header = () => {
 const [menuOpen, setMenuOpen] = useState(false);
 const [activeMenuBlock, setActiveMenuBlock] = useState(0);

 const menuButtons = useRef([]);
 const menuContent = useRef();

 const toggleMenuOpen = (value) => {
    setMenuOpen(value);
 };

 const toggleMenuBlock = (index) => {
    menuButtons.current.forEach((button) => button.classList.remove('active'));
    menuButtons.current[index].classList.add('active');
    menuContent.current.style.transform = `translate(0, -${menuContent.current.clientHeight * index}px)`;
 };

 const handleMouseEnter = () => {
    toggleMenuOpen(true);
 };

 const handleMouseLeave = () => {
    toggleMenuOpen(false);
 };

 return (
    <div>
      <nav>
        <a className="dropdown-button" href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Skills
          <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L11.7874 14.7874V14.7874C11.9048 14.9048 12.0952 14.9048 12.2126 14.7874V14.7874L18 9" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#">About</a>
        <a href="#">Portfolio</a>
      </nav>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={menuOpen ? 'menu open' : 'menu'}>
        <div className="menu-buttons">
          <button className={activeMenuBlock === 0 ? 'active' : ''} onClick={() => toggleMenuBlock(0)} ref={(button) => (menuButtons.current[0] = button)}>
            Coding
          </button>
          <button className={activeMenuBlock === 1 ? 'active' : ''} onClick={() => toggleMenuBlock(1)} ref={(button) => (menuButtons.current[1] = button)}>
            Design
          </button>
          <button className={activeMenuBlock === 2 ? 'active' : ''} onClick={() => toggleMenuBlock(2)} ref={(button) => (menuButtons.current[2] = button)}>
            Dev Ops
          </button>
        </div>
        <div id="menuContent" className="menu-content" ref={menuContent}>
          <div className={activeMenuBlock === 0 ? 'menu-block active' : 'menu-block'}>
            <p>React</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>ECMAScript</p>
            <p>Vue</p>
            <p>Svelte</p>
            <p>Angular</p>
          </div>
          <div className={activeMenuBlock === 1 ? 'menu-block active' : 'menu-block'}>
            <p>Figma</p>
            <p>Photoshop</p>
            <p>Adobe XD</p>
            <p>Sketch</p>
            <p>InVision</p>
            <p>EdrawMax</p>
            <p>After Effects</p>
            <p>Jitter</p>
            <p>Spline</p>
          </div>
          <div className={activeMenuBlock === 2 ? 'menu-block active' : 'menu-block'}>
            <p>Netlify</p>
            <p>Vercel</p>
            <p>Heroku</p>
            <p>GitHub</p>
            <p>Bit Bucket</p>
            <p>npm</p>
          </div>
        </div>
      </div>
    </div>
 );
};

export default Header;