import React from 'react';
import './navigation.css';
import geeshau from "../../assets/Geeshau-logo.png"

export const Navigation = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <div className='menu-wrapper'>
          <div className='menu-bar'>
            <a href='#Home' title='Home' className='logo'>
              <img src={geeshau} alt='logo' /> 
            </a>
            <nav>
              <ul className='navigation'>
              <li>
                  <a href='#devs' title='Developers'>
                    Explore 
                  </a>
                </li>
                <li>
                  <a href='#devs' title='Developers'>
                    Developers
                  </a>
                </li>
                <li>
                  <button type='button'>Product</button>
                  <div className='dropdown_wrapper'>
                    <div className='dropdown'>
                      <ul className='list-items-with-description'>
                        <li>
                          <div className='icon-wrapper'>
                            <span className='icon'>
                              <ion-icon>Home</ion-icon>
                            </span>
                          </div>
                          <div className='item-title'>
                            <h3>Database</h3>
                            <p>Fully portable postgres</p>
                          </div>
                        </li>
                        <li>
                          <div className='icon-wrapper'>
                            <span className='icon'>
                              <ion-icon>Home</ion-icon>
                            </span>
                          </div>
                          <div className='item-title'>
                            <h3>Database</h3>
                            <p>Fully portable postgres</p>
                          </div>
                        </li>
                        <li>
                          <div className='icon-wrapper'>
                            <span className='icon'>
                              <ion-icon>Home</ion-icon>
                            </span>
                          </div>
                          <div className='item-title'>
                            <h3>Database</h3>
                            <p>Fully portable postgres</p>
                          </div>
                        </li>
                        <li>
                          <div className='icon-wrapper'>
                            <span className='icon'>
                              <ion-icon>Home</ion-icon>
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
                
              </ul>
            </nav>
          </div>
          <div className='action-buttons'>
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
