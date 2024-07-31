import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../logo.svg';
import Hamburger from '../../commoncomp/Hamburger';
import './navigationMenu.css'

const Navigation = () => {
const [showNavbar, setShowNavbar] = React.useState(false);

const handleShowNavbar = () => {
  setShowNavbar(!showNavbar);
};

return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />

        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger/>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/service">SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="/practice">AREA OF PRACTICE</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">GALLERY</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT US</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
}

export default Navigation