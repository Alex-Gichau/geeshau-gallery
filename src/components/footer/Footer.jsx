import React from 'react'
import "./footer.css"

export const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <footer>
        <article>
          <h2>BRAND YOUR BRAND</h2>
          <button>
            <p>Sign Up free</p>
            <span className='material-symbols-outlined'>trending_flat</span>
          </button>
        </article>

        <section className="top">
          {/* <img src="../../assets/Geeshau-logo.png" alt="Geeshau Logo"/> */}
          <ul>
            <li>
              <h3>ABOUT GEESHAU ART</h3>
              <a>And let us not lose heart and grow weary and faint in acting nobly and doing right, for in due time and at the appointed season we shall reap, if we do not loosen and relax our courage and faint.And let us not lose heart and grow weary and faint in acting nobly and doing right, for in due time and at the appointed season we shall reap, if we do not loosen and relax our courage and faint.</a>
            </li>
            <li>
              <h3>Pricing</h3>
              <a>Overview</a>
              <a>Overview</a>
              <a>Overview</a>
              <a>Overview</a>
            </li>
            <li>
              <h3>Development</h3>
              <a>Overview</a>
              <a>Overview</a>
              <a>Overview</a>
              <a>Overview</a>
            </li>
            <li>
              <h3>Development</h3>
              <a>Overview</a>
              <a>Overview</a>
              <a>Overview</a>
              <a>Overview</a>
            </li>
          </ul>
        </section>

        <section className="bottom">Since 2019</section>
      </footer>
    </div>
  )
}