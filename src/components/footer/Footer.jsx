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
              <h3>OFFICE DAYS</h3>
              <p>We are open from <b>Monday to Friday : <br/>
              From 08:00AM 	&#x27A1; 06:00PM.</b> Available <br/>
              <b>Sartuday from 08:00AM 	&#x27A1; 12:00PM.</b><br/>For urgent tasks, we are available on <br/>appointment. <b>Call or WhatsApp Us.</b></p>
            </li>
            <hr/>
            <li>
              <h3>SOCIAL MEDIA</h3>
              <a href='#'>Instagram</a>
              <a href='#'>Behance</a>
              <a href='#'>WhatsApp</a>
              <a href='#'>Pinterest</a>
            </li>
            <hr/>
            <li>
              <h3>TERMS OF SERVICE</h3>
              <p> &#9989; Quality of Service</p>
              <p> &#9989; Time Efficient</p>
              <p> &#9989; Quick Delivery</p>
              <p> &#9989; Direct contant with clients</p>
            </li>
            <hr/>
            <li>
              <h3>DOWNLOADS </h3>
              <a>Our Portfolio</a>
              <a>Our Designer</a>
              <a>Our flyer</a>
              <a>Our pricing</a>
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
        <section className='bottom'>&copy; Since June 2020</section>
      </footer>
    </div>
  );
};
