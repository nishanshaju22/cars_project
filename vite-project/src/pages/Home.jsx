import React, { useState } from "react";
import "../css/Home.css";
import "../css/Menu.css"

const TrealeLandingPage = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={`app ${menuActive ? "active" : ""}`}>
      <section className={`showcase ${menuActive ? "active" : ""}`}>
        <header className="logo">
          <h2 className="logo">CARS</h2>
        </header>

        <video muted loop autoPlay playsInline className="background-video">
          <source src="Aston.mp4" type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="text">
            <h2>Explore The</h2>
            <h3>World of Cars</h3>
            <p>
                With a click of a button you will be able to experience a world all about cars, be it the everyday family SUVs or the top of the line limited hypercars we have everything you would ever want to know about them in one place.
            </p>
            <a href="/models">Explore</a>
        </div>
      </section>

      <div className={`menu ${menuActive ? "active" : ""}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/models">Models</a></li>
        </ul>
      </div>
    </div>
  );
};

export default TrealeLandingPage;