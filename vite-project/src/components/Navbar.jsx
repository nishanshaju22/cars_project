import React from 'react'
import '../css/Navbar.css'



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img src="./White-silhouette-car-on-transparent-background-PNG.png" height={100} width={100} className='logo'/>
        <a href="/" id="navbar__logo">CARS</a>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span> <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="/" className="navbar__links" id="home-page">Home</a>
          </li>
          <li className="navbar__item">
            <a href="/about" className="navbar__links" id="about-page">About</a>
          </li>
          <li className="navbar__item">
            <a href="/models" className="navbar__links" id="services-page"
              >Models</a
            >
          </li>
          <li className="navbar__btn">
            <a href="#sign-up" className="button" id="signup">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar