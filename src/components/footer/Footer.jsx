import React from 'react'
import "./footer.css"
import logo from '../../assets/Geeshau-logo.png'

export const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <footer>
        <article>
          <h2>BRAND YOUR BRAND</h2>
          <button>
            <p>See Our Catalogue</p>
            <span className='material-symbols-outlined'>sms</span>
          </button>
        </article>

        <section className="top">
          {/* <img src={logo} alt="Geeshau Logo"/> */}
          <ul>
            <li>
              <h3>ABOUT GEESHAU ART</h3>
              <a>And let us not lose heart and grow weary and faint in acting nobly and doing right, for in due time and at the appointed season we shall reap, if we do not loosen and relax our courage and faint.And let us not lose heart and grow weary and faint in acting nobly and doing right</a>
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
            
          </ul>
          <hr/>
        </section>
        <section className="bottom">Since 2019</section>
      </footer>
    </div>
  )
}