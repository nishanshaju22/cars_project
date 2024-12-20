import React, { useState } from 'react'
import '../css/Menu.css'

const Menu = () => {

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };


    return (
        <div className={`app ${menuActive ? "active" : ""}`}>
            <div className={`toggle ${menuActive ? "active" : ""}`} onClick={toggleMenu}></div>

            <div className={`menu ${menuActive ? "active" : ""}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/models">Models</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu