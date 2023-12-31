import React from 'react';
import './navigation.css';

export const Navigation = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <div className='menu_wrapper'>
          <div className='menu-bar'>
            <a href='#' title='Home' aria-label='home' className='logo'>
              <img src='../../assets/Geeshau-logo.png' alt='logo' />
            </a>
            <nav>
              <ul className='navigation-hide'>
                <li>
                  <button type='button'>Product</button>
                  <div className='dropdown_wrapper'>
                    <div className='dropdown'>
                      <ul className='list-items-with-description'>
                        <li>
                          <div className='icon-wrapper'>
                            <span className='materials-symbols-outline'>
                              Home
                            </span>
                          </div>
                          <div className='item-title'>
                            <h3>Database</h3>
                            <p>Fully portable postgres</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href='#devs' title='Developers'>
                    Developers
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='action-buttons-hide'>
            <a href='#log-in' title='Log in' className='secondary'>
              Sign In
            </a>
            <a href='#sign-up' title='Log in' className='primary'>
              Start your project
            </a>
          </div>
          <button
            aria-label='Open menu'
            className='burger-menu'
            type='button'
          ></button>
        </div>
      </header>
    </div>
  );
};
