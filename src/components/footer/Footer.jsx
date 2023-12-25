import React from 'react';
import './footer.css';
import logo from '../../assets/Geeshau-logo.png';

export const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <footer>
        <article className='floating-banner'>
          <p className='slogan'>BRAND <i>YOUR</i> BRAND</p>
          <button className='button'>
            <p>See Our Catalogue</p>
            <p>|</p>
            <span className='material-symbols-outlined'>sms</span>
          </button>
        </article>

        <section className='top'>
          <ul>
            <li>
              <span>
                {/* <img src={logo} alt="Geeshau Logo"className='logo'/> */}
                <h3>ABOUT GEESHAU ART & GRAPHICS</h3></span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <h3>Social Media</h3>
              <a href='#'>Instagram</a>
              <a href='#'>Behance</a>
              <a href='#'>WhatsApp</a>
              <a href='#'>Pinterest</a>
            </li>
            <li>
              <h3>SEE MORE</h3>
              <a>Testimonials</a>
              <a>What we Design</a>
              <a>Portfolio</a>
              <a>Our Catalogue</a>
            </li>
            <li>
              <h3>OUR </h3>
              <a>Overview</a>
              <a>Overview</a>
              <a>Overview</a>
              <a>Overview</a>
            </li>
            <li>
              <h3>OUR </h3>
              <a>Overview</a>
              <a>Overview</a>
              <a>Overview</a>
              <a>Overview</a>
            </li><li>
              <h3>OUR </h3>
              <a>Overview</a>
              <a>Overview</a>
              <a>Overview</a>
              <a>Overview</a>
            </li>
          </ul>
        </section>
        {/* <div className="socials">
          <a href="#"><img src={logo} alt="WhatsApp"/></a>
          <a href="#"><img src={logo} alt="WhatsApp"/></a>
          <a href="#"><img src={logo} alt="WhatsApp"/></a>
          <a href="#"><img src={logo} alt="WhatsApp"/></a>
          <a href="#"><img src={logo} alt="WhatsApp"/></a>
        </div> */}
        <section className='bottom'>Since 2019</section>
      </footer>
    </div>
  );
};
