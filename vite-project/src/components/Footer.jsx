import React from 'react'
import '../css/Navbar.css'

const Footer = () => {
  return (
    <div className="footer__container">
        <div className='line'> </div>
        <div className="footer__links">
          <div className="footer__link--wrapper">
            <div className="footer__link--items">
              <h2>About Us</h2>
              <a href="/sign__up">How it works</a> <a href="/">Testimonials</a>
              <a href="/">Careers</a> <a href="/">Terms of Service</a>
            </div>
            <div className="footer__link--items">
              <h2>Contact Us</h2>
              <a href="/">Contact</a> <a href="/">Support</a>
              <a href="/">Destinations</a>
            </div>
          </div>
          <div className="footer__link--wrapper">
            <div className="footer__link--items">
              <h2>Videos</h2>
              <a href="/">Submit Video</a> <a href="/">Ambassadors</a>
              <a href="/">Agency</a>
            </div>
            <div className="footer__link--items">
              <h2>Social Media</h2>
              <a href="/">Instagram</a> <a href="/">Facebook</a>
              <a href="/">Youtube</a> <a href="/">Twitter</a>
            </div>
          </div>
        </div>
        <section className="social__media">
          <div className="social__media--wrap">
            <div className="footer__logo">
              <a href="/" id="footer__logo">CARS</a>
            </div>
            <p className="website__rights">© CARS 2024. All rights reserved</p>
            <div className="social__icons">
              <a href="/" className="social__icon--link" target="_blank"
                ><i className="fab fa-facebook"></i
              ></a>
              <a href="/" className="social__icon--link" target="_blank"
                ><i className="fab fa-instagram"></i
              ></a>
              <a href="/" className="social__icon--link" target="_blank"
                ><i className="fab fa-linkedin"></i
              ></a>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Footer