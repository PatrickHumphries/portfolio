import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
    return (
        <div className="Header">
            <nav>
                <h1><NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>PH</NavLink></h1>
                <ul>
                    {/* <li><NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</NavLink></li> */}
                    <li><NavLink to="/work" style={{ textDecoration: 'none', color: 'white' }}>Work</NavLink></li>
                    {/* <li><NavLink to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</NavLink></li> */}
                    <li><NavLink to="/resume" style={{ textDecoration: 'none', color: 'white' }}>Resume</NavLink></li>
                </ul>
            </nav>
      </div>
        
    );
}

export default Header;