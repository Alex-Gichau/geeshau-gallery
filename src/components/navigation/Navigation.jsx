import React from 'react';
import './navigation.css';
import geeshau from "../../assets/Geeshau-logo.png"
import { GoHome, GoMoveToBottom, GoInbox, GoVersions, GoPerson, GoMention } from 'react-icons/go' /*Github Octicons*/

export const Navigation = () => {
  return (
    <header className='container'>
      <a href="#" className='nav__logo'>Geeshau</a>

      <div className="nav__menu main" id='nav-menu'>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className='nav__link'>
              <span className='icon'><GoHome/></span>
              <span className="nav__name">Home</span>
            </a>
          </li>

          <li className="nav__item">
            <a href="#" className='nav__link'>
              <span className='icon'><GoVersions/></span>
              <span className="nav__name">Browse</span>
            </a>
          </li>

          <li className="nav__item">
            <a href="#" className='nav__link'>
              <span className='icon'><GoInbox/></span>
              <span className="nav__name">Make Order</span>
            </a>
          </li>

          <li className="nav__item">
            <a href="#" className='nav__link'>
              <span className='icon'><GoPerson/></span>
              <span className="nav__name">Designer</span>
            </a>
          </li>

          <li className="nav__item">
            <a href="#" className='nav__link'>
              <span className='icon'>GoMention</span>
              <span className="nav__name">Contacts</span>
            </a>
          </li>

          <li className="nav__item">
            <a href="#" className='nav__link'>
              <span className='icon'><GoMoveToBottom/></span>
              <span className="nav__name">Downloads</span>
            </a>
          </li>
        </ul>
      </div>

      <img src={geeshau} alt="" className='nav__img' />

    </header>
  );
};
