import "./Header.css";
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <div className="Header">
            <nav>
                <h1><NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>Patrick Humphries</NavLink></h1>
                <ul>
                    {/* <li><NavLink to="/">Home</NavLink></li> */}
                    <li><NavLink to="/work" style={{ textDecoration: 'none', color: 'black' }}>Work</NavLink></li>
                    <li><NavLink to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</NavLink></li>
                    <li><NavLink to="/resume" style={{ textDecoration: 'none', color: 'black' }}>Resume</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;