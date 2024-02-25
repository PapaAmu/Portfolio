// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Jenise
        </NavLink>

        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/About" className="nav__link" onClick={closeMenuOnMobile}>
                About_Me
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/Technical Skills" className="nav__link" onClick={closeMenuOnMobile}>
                Tech_Stack
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/Projects" className="nav__link" onClick={closeMenuOnMobile}>
                My_Projects
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/Contact" className="nav__link" onClick={closeMenuOnMobile}>
                Contact_Me
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
